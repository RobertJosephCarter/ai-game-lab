(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const dl="180",wu=0,$l=1,Au=2,Mh=1,yh=2,In=3,Hn=0,Gt=1,xn=2,Bn=0,Zn=1,Hs=2,jl=3,Kl=4,Ru=5,gi=100,Cu=101,Pu=102,Du=103,Lu=104,Iu=200,Uu=201,Nu=202,Fu=203,ha=204,ua=205,Bu=206,Ou=207,ku=208,zu=209,Hu=210,Vu=211,Gu=212,Wu=213,Xu=214,da=0,fa=1,pa=2,as=3,ma=4,ga=5,_a=6,va=7,fl=0,qu=1,Yu=2,Jn=0,$u=1,ju=2,Ku=3,Zu=4,Ju=5,Qu=6,ed=7,Sh=300,ls=301,cs=302,xa=303,Ma=304,so=306,ya=1e3,xi=1001,Sa=1002,bt=1003,td=1004,sr=1005,yn=1006,go=1007,Mi=1008,Tn=1009,Eh=1010,bh=1011,Vs=1012,pl=1013,Ci=1014,Fn=1015,On=1016,ml=1017,gl=1018,Gs=1020,Th=35902,wh=35899,Ah=1021,Rh=1022,on=1023,Ws=1026,Xs=1027,Ch=1028,_l=1029,Ph=1030,vl=1031,xl=1033,Ur=33776,Nr=33777,Fr=33778,Br=33779,Ea=35840,ba=35841,Ta=35842,wa=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37808,Da=37809,La=37810,Ia=37811,Ua=37812,Na=37813,Fa=37814,Ba=37815,Oa=37816,ka=37817,za=37818,Ha=37819,Va=37820,Ga=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,$a=36284,ja=36285,Ka=36286,nd=3200,id=3201,Ml=0,sd=1,Kn="",Vt="srgb",hs="srgb-linear",Wr="linear",nt="srgb",Li=7680,Zl=519,rd=512,od=513,ad=514,Dh=515,ld=516,cd=517,hd=518,ud=519,Za=35044,Jl="300 es",Sn=2e3,Xr=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Ja=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function dd(i,e){return(i%e+e)%e}function vo(i,e,t){return(1-t)*i+t*e}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],d=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=d,e[t+3]=_;return}if(u!==_||c!==f||l!==p||h!==d){let g=1-a;const m=c*f+l*p+h*d+u*_,b=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,m*b);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const S=a*b;if(c=c*g+f*S,l=l*g+p*S,h=h*g+d*S,u=u*g+_*S,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],d=r[o+3];return e[t]=a*d+h*u+c*p-l*f,e[t+1]=c*d+h*f+l*u-a*p,e[t+2]=l*d+h*p+a*f-c*u,e[t+3]=h*d-a*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),d=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*d,this._y=l*p*u-f*h*d,this._z=l*h*d+f*p*u,this._w=l*h*u-f*p*d;break;case"YXZ":this._x=f*h*u+l*p*d,this._y=l*p*u-f*h*d,this._z=l*h*d-f*p*u,this._w=l*h*u+f*p*d;break;case"ZXY":this._x=f*h*u-l*p*d,this._y=l*p*u+f*h*d,this._z=l*h*d+f*p*u,this._w=l*h*u-f*p*d;break;case"ZYX":this._x=f*h*u-l*p*d,this._y=l*p*u+f*h*d,this._z=l*h*d-f*p*u,this._w=l*h*u+f*p*d;break;case"YZX":this._x=f*h*u+l*p*d,this._y=l*p*u+f*h*d,this._z=l*h*d-f*p*u,this._w=l*h*u-f*p*d;break;case"XZY":this._x=f*h*u-l*p*d,this._y=l*p*u-f*h*d,this._z=l*h*d+f*p*u,this._w=l*h*u+f*p*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new L,Ql=new js;class Ve{constructor(e,t,n,s,r,o,a,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],d=n[8],_=s[0],g=s[3],m=s[6],b=s[1],E=s[4],S=s[7],w=s[2],A=s[5],R=s[8];return r[0]=o*_+a*b+c*w,r[3]=o*g+a*E+c*A,r[6]=o*m+a*S+c*R,r[1]=l*_+h*b+u*w,r[4]=l*g+h*E+u*A,r[7]=l*m+h*S+u*R,r[2]=f*_+p*b+d*w,r[5]=f*g+p*E+d*A,r[8]=f*m+p*S+d*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,d=t*u+n*f+s*p;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/d;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new Ve;function Lh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=qs("canvas");return i.style.display="block",i}const ec={};function Ys(i){i in ec||(ec[i]=!0,console.warn(i))}function pd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const tc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function md(){const i={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hs]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:tc,fromXYZ:nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const Je=md();function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class gd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=e.width,Ii.height=e.height;const s=Ii.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ii}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _d=0;class yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;const So=new L;class Lt extends vs{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=xi,s=xi,r=yn,o=Mi,a=on,c=Tn,l=Lt.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Qn(),this.name="",this.source=new yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Sh;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],d=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(d+g)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(p+1)/2,w=(m+1)/2,A=(h+f)/4,R=(u+_)/4,D=(d+g)/4;return E>S&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=R/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-d)*(g-d)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-d)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xd extends vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends xd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ih extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bt,this.minFilter=bt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),or.subVectors(this.max,Ss),Ui.subVectors(e.a,Ss),Ni.subVectors(e.b,Ss),Fi.subVectors(e.c,Ss),Gn.subVectors(Ni,Ui),Wn.subVectors(Fi,Ni),ai.subVectors(Ui,Fi);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!Eo(t,Ui,Ni,Fi,or)||(t=[1,0,0,0,1,0,0,0,1],!Eo(t,Ui,Ni,Fi,or))?!1:(ar.crossVectors(Gn,Wn),t=[ar.x,ar.y,ar.z],Eo(t,Ui,Ni,Fi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],an=new L,rr=new Ks,Ui=new L,Ni=new L,Fi=new L,Gn=new L,Wn=new L,ai=new L,Ss=new L,or=new L,ar=new L,li=new L;function Eo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const yd=new Ks,Es=new L,bo=new L;class ro{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(bo)),this.expandByPoint(Es.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new L,To=new L,lr=new L,Xn=new L,wo=new L,cr=new L,Ao=new L;class Sl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){To.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(To);const r=e.distanceTo(t)*.5,o=-this.direction.dot(lr),a=Xn.dot(this.direction),c=-Xn.dot(lr),l=Xn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,d;if(h>0)if(u=o*c-a,f=o*a-c,d=r*h,u>=0)if(f>=-d)if(f<=d){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-d?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=d?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(To).addScaledVector(lr,f),p}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){wo.subVectors(t,e),cr.subVectors(n,e),Ao.crossVectors(wo,cr);let o=this.direction.dot(Ao),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const c=a*this.direction.dot(cr.crossVectors(Xn,cr));if(c<0)return null;const l=a*this.direction.dot(wo.cross(Xn));if(l<0||c+l>o)return null;const h=-a*Xn.dot(Ao);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,n,s,r,o,a,c,l,h,u,f,p,d,_,g){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,p,d,_,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,p,d,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=d,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,d=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+d*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=d+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,d=l*h,_=l*u;t[0]=f+_*a,t[4]=d*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-d,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,d=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=d+p*a,t[1]=p+d*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*u,d=a*h,_=a*u;t[0]=c*h,t[4]=d*l-p,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=p*l-d,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,d=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=d*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+d,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,p=o*l,d=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-d,t[2]=d*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,Ed)}lookAt(e,t,n){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),qn.crossVectors(n,Yt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),qn.crossVectors(n,Yt)),qn.normalize(),hr.crossVectors(Yt,qn),s[0]=qn.x,s[4]=hr.x,s[8]=Yt.x,s[1]=qn.y,s[5]=hr.y,s[9]=Yt.y,s[2]=qn.z,s[6]=hr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],d=n[2],_=n[6],g=n[10],m=n[14],b=n[3],E=n[7],S=n[11],w=n[15],A=s[0],R=s[4],D=s[8],x=s[12],y=s[1],C=s[5],F=s[9],O=s[13],W=s[2],V=s[6],G=s[10],q=s[14],k=s[3],Q=s[7],oe=s[11],ve=s[15];return r[0]=o*A+a*y+c*W+l*k,r[4]=o*R+a*C+c*V+l*Q,r[8]=o*D+a*F+c*G+l*oe,r[12]=o*x+a*O+c*q+l*ve,r[1]=h*A+u*y+f*W+p*k,r[5]=h*R+u*C+f*V+p*Q,r[9]=h*D+u*F+f*G+p*oe,r[13]=h*x+u*O+f*q+p*ve,r[2]=d*A+_*y+g*W+m*k,r[6]=d*R+_*C+g*V+m*Q,r[10]=d*D+_*F+g*G+m*oe,r[14]=d*x+_*O+g*q+m*ve,r[3]=b*A+E*y+S*W+w*k,r[7]=b*R+E*C+S*V+w*Q,r[11]=b*D+E*F+S*G+w*oe,r[15]=b*x+E*O+S*q+w*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],d=e[3],_=e[7],g=e[11],m=e[15];return d*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+t*c*p-t*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+g*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],d=e[12],_=e[13],g=e[14],m=e[15],b=u*g*l-_*f*l+_*c*p-a*g*p-u*c*m+a*f*m,E=d*f*l-h*g*l-d*c*p+o*g*p+h*c*m-o*f*m,S=h*_*l-d*u*l+d*a*p-o*_*p-h*a*m+o*u*m,w=d*u*c-h*_*c-d*a*f+o*_*f+h*a*g-o*u*g,A=t*b+n*E+s*S+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=b*R,e[1]=(_*f*r-u*g*r-_*s*p+n*g*p+u*s*m-n*f*m)*R,e[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*m+n*c*m)*R,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*R,e[4]=E*R,e[5]=(h*g*r-d*f*r+d*s*p-t*g*p-h*s*m+t*f*m)*R,e[6]=(d*c*r-o*g*r-d*s*l+t*g*l+o*s*m-t*c*m)*R,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*p+t*c*p)*R,e[8]=S*R,e[9]=(d*u*r-h*_*r-d*n*p+t*_*p+h*n*m-t*u*m)*R,e[10]=(o*_*r-d*a*r+d*n*l-t*_*l-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*R,e[12]=w*R,e[13]=(h*_*s-d*u*s+d*n*f-t*_*f-h*n*g+t*u*g)*R,e[14]=(d*a*s-o*_*s-d*n*c+t*_*c+o*n*g-t*a*g)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,d=r*u,_=o*h,g=o*u,m=a*u,b=c*l,E=c*h,S=c*u,w=n.x,A=n.y,R=n.z;return s[0]=(1-(_+m))*w,s[1]=(p+S)*w,s[2]=(d-E)*w,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(f+m))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(d+E)*R,s[9]=(g-b)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Sn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let d,_;if(c)d=r/(o-r),_=o*r/(o-r);else if(a===Sn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Xr)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let d,_;if(c)d=1/(o-r),_=o/(o-r);else if(a===Sn)d=-2/(o-r),_=-(o+r)/(o-r);else if(a===Xr)d=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new L,ln=new dt,Sd=new L(0,0,0),Ed=new L(1,1,1),qn=new L,hr=new L,Yt=new L,ic=new dt,sc=new js;class gn{constructor(e=0,t=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bd=0;const rc=new L,Oi=new js,Cn=new dt,ur=new L,bs=new L,Td=new L,wd=new js,oc=new L(1,0,0),ac=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},Ad={type:"removed"},ki={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ct extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new L,t=new gn,n=new js,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ve}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(ac,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return rc.copy(e).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(ac,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(bs,ur,this.up):Cn.lookAt(ur,bs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cc),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ad),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),d=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),d.length>0&&(n.nodes=d)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new L(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new L,Pn=new L,Co=new L,Dn=new L,zi=new L,Hi=new L,hc=new L,Po=new L,Do=new L,Lo=new L,Io=new st,Uo=new st,No=new st;class sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),Pn.subVectors(n,t),Co.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(Pn),c=cn.dot(Co),l=Pn.dot(Pn),h=Pn.dot(Co),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,d=(o*h-a*c)*f;return r.set(1-p-d,d,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(o,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Io.setScalar(0),Uo.setScalar(0),No.setScalar(0),Io.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),No.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Io,r.x),o.addScaledVector(Uo,r.y),o.addScaledVector(No,r.z),o}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),Pn.subVectors(e,t),cn.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,n),Hi.subVectors(r,n),Po.subVectors(e,n);const c=zi.dot(Po),l=Hi.dot(Po);if(c<=0&&l<=0)return t.copy(n);Do.subVectors(e,s);const h=zi.dot(Do),u=Hi.dot(Do);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(zi,o);Lo.subVectors(e,r);const p=zi.dot(Lo),d=Hi.dot(Lo);if(d>=0&&p<=d)return t.copy(r);const _=p*l-c*d;if(_<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Hi,a);const g=h*d-p*u;if(g<=0&&u-h>=0&&p-d>=0)return hc.subVectors(r,s),a=(u-h)/(u-h+(p-d)),t.copy(s).addScaledVector(hc,a);const m=1/(g+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(zi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class de{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=dd(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fo(o,r,e+1/3),this.g=Fo(o,r,e),this.b=Fo(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return Je.workingToColorSpace(Ut.copy(this),e),Math.round(je(Ut.r*255,0,255))*65536+Math.round(je(Ut.g*255,0,255))*256+Math.round(je(Ut.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Vt){Je.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(dr);const n=vo(Yn.h,dr.h,t),s=vo(Yn.s,dr.s,t),r=vo(Yn.l,dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new de;de.NAMES=Uh;let Rd=0;class ii extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Zn,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bn extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new L,fr=new Ae;let Cd=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}}class Nh extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fh extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pd=0;const nn=new dt,Bo=new Ct,Vi=new L,$t=new Ks,Ts=new Ks,Rt=new L;class Ot extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lh(e)?Fh:Nh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors($t.min,Ts.min),$t.expandByPoint(Rt),Rt.addVectors($t.max,Ts.max),$t.expandByPoint(Rt)):($t.expandByPoint(Ts.min),$t.expandByPoint(Ts.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(Vi.fromBufferAttribute(e,l),Rt.add(Vi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;const l=new L,h=new L,u=new L,f=new Ae,p=new Ae,d=new Ae,_=new L,g=new L;function m(D,x,y){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,x),d.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),d.sub(f);const C=1/(p.x*d.y-d.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(d.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(C),a[D].add(_),a[x].add(_),a[y].add(_),c[D].add(g),c[x].add(g),c[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,x=b.length;D<x;++D){const y=b[D],C=y.start,F=y.count;for(let O=C,W=C+F;O<W;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new L,S=new L,w=new L,A=new L;function R(D){w.fromBufferAttribute(s,D),A.copy(w);const x=a[D];E.copy(x),E.sub(w.multiplyScalar(w.dot(x))).normalize(),S.crossVectors(A,x);const C=S.dot(c[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,C)}for(let D=0,x=b.length;D<x;++D){const y=b[D],C=y.start,F=y.count;for(let O=C,W=C+F;O<W;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const d=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,d),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(d,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,d=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let m=0;m<h;m++)f[d++]=l[p++]}return new pn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new dt,ci=new Sl,pr=new ro,dc=new L,mr=new L,gr=new L,_r=new L,Oo=new L,vr=new L,fc=new L,xr=new L;class lt extends Ct{constructor(e=new Ot,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Oo.fromBufferAttribute(u,e),o?vr.addScaledVector(Oo,h):vr.addScaledVector(Oo.sub(t),h))}t.add(vr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(pr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(pr,dc)===null||ci.origin.distanceToSquared(dc)>(e.far-e.near)**2))&&(uc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(uc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=o[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,w=E;S<w;S+=3){const A=a.getX(S),R=a.getX(S+1),D=a.getX(S+2);s=Mr(this,m,e,n,l,h,u,A,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=d,m=_;g<m;g+=3){const b=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);s=Mr(this,o,e,n,l,h,u,b,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let d=0,_=f.length;d<_;d++){const g=f[d],m=o[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let S=b,w=E;S<w;S+=3){const A=S,R=S+1,D=S+2;s=Mr(this,m,e,n,l,h,u,A,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const d=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=d,m=_;g<m;g+=3){const b=g,E=g+1,S=g+2;s=Mr(this,o,e,n,l,h,u,b,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Dd(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Hn,a),c===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xr);return l<t.near||l>t.far?null:{distance:l,point:xr.clone(),object:i}}function Mr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,mr),i.getVertexPosition(c,gr),i.getVertexPosition(l,_r);const h=Dd(i,e,t,n,mr,gr,_r,fc);if(h){const u=new L;sn.getBarycoord(fc,mr,gr,_r,u),s&&(h.uv=sn.getInterpolatedAttribute(s,a,c,l,u,new Ae)),r&&(h.uv1=sn.getInterpolatedAttribute(r,a,c,l,u,new Ae)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};sn.getNormal(mr,gr,_r,f.normal),h.face=f,h.barycoord=u}return h}class Qt extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;d("z","y","x",-1,-1,n,t,e,o,r,0),d("z","y","x",1,-1,n,t,-e,o,r,1),d("x","z","y",1,1,e,n,t,s,o,2),d("x","z","y",1,-1,e,n,-t,s,o,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(u,2));function d(_,g,m,b,E,S,w,A,R,D,x){const y=S/R,C=w/D,F=S/2,O=w/2,W=A/2,V=R+1,G=D+1;let q=0,k=0;const Q=new L;for(let oe=0;oe<G;oe++){const ve=oe*C-O;for(let ze=0;ze<V;ze++){const $e=ze*y-F;Q[_]=$e*b,Q[g]=ve*E,Q[m]=W,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[m]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(ze/R),u.push(1-oe/D),q+=1}}for(let oe=0;oe<D;oe++)for(let ve=0;ve<R;ve++){const ze=f+ve+V*oe,$e=f+ve+V*(oe+1),et=f+(ve+1)+V*(oe+1),Ke=f+(ve+1)+V*oe;c.push(ze,$e,Ke),c.push($e,et,Ke),k+=6}a.addGroup(p,k,x),p+=k,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function Ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const qr={clone:us,merge:Ht};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Oh extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new L,pc=new Ae,mc=new Ae;class Kt extends Oh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,pc,mc),t.subVectors(mc,pc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Wi=1;class Nd extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Gi,Wi,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Gi,Wi,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Gi,Wi,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Gi,Wi,e,t);a.layers=this.layers,this.add(a);const c=new Kt(Gi,Wi,e,t);c.layers=this.layers,this.add(c);const l=new Kt(Gi,Wi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class kh extends Lt{constructor(e=[],t=ls,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fd extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new kh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qt(5,5,5),r=new Ft({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Bn});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=yn),new Nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class En extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,d=.005;l.inputState.pinching&&f>p+d?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-d&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new bl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Od extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new L;class Yr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oo extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const ws=new L,qi=new L,Yi=new L,$i=new Ae,As=new Ae,zh=new dt,yr=new L,Rs=new L,Sr=new L,gc=new Ae,zo=new Ae,_c=new Ae;class Tl extends Ct{constructor(e=new oo){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kd(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Yr(n,3,0,!1)),Xi.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new Ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),zh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(yr.set(-.5,-.5,0),Yi,o,qi,s,r),Er(Rs.set(.5,-.5,0),Yi,o,qi,s,r),Er(Sr.set(.5,.5,0),Yi,o,qi,s,r),gc.set(0,0),zo.set(1,0),_c.set(1,1);let a=e.ray.intersectTriangle(yr,Rs,Sr,!1,ws);if(a===null&&(Er(Rs.set(-.5,.5,0),Yi,o,qi,s,r),zo.set(0,1),a=e.ray.intersectTriangle(yr,Sr,Rs,!1,ws),a===null))return;const c=e.ray.origin.distanceTo(ws);c<e.near||c>e.far||t.push({distance:c,point:ws.clone(),uv:sn.getInterpolation(ws,yr,Rs,Sr,gc,zo,_c,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(i,e,t,n,s,r){$i.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(As.x=r*$i.x-s*$i.y,As.y=s*$i.x+r*$i.y):As.copy($i),i.copy(e),i.x+=As.x,i.y+=As.y,i.applyMatrix4(zh)}class zd extends Lt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=bt,h=bt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ho=new L,Hd=new L,Vd=new Ve;class fi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ho.subVectors(n,t).cross(Hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ho),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),s=this.coplanarPoint(Ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new ro,Gd=new Ae(.5,.5),br=new L;class wl{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],p=r[7],d=r[8],_=r[9],g=r[10],m=r[11],b=r[12],E=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-o,p-h,m-d,w-b).normalize(),s[1].setComponents(l+o,p+h,m+d,w+b).normalize(),s[2].setComponents(l+a,p+u,m+_,w+E).normalize(),s[3].setComponents(l-a,p-u,m-_,w-E).normalize(),n)s[4].setComponents(c,f,g,S).normalize(),s[5].setComponents(l-c,p-f,m-g,w-S).normalize();else if(s[4].setComponents(l-c,p-f,m-g,w-S).normalize(),t===Sn)s[5].setComponents(l+c,p+f,m+g,w+S).normalize();else if(t===Xr)s[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=Gd.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(br.x=s.normal.x>0?e.max.x:e.min.x,br.y=s.normal.y>0?e.max.y:e.min.y,br.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Al extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vc=new dt,Qa=new Sl,Tr=new ro,wr=new L;class Hh extends Ct{constructor(e=new Ot,t=new Al){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;vc.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(vc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let d=f,_=p;d<_;d++){const g=l.getX(d);wr.fromBufferAttribute(u,g),xc(wr,g,c,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let d=f,_=p;d<_;d++)wr.fromBufferAttribute(u,d),xc(wr,d,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xc(i,e,t,n,s,r,o){const a=Qa.distanceSqToPoint(i);if(a<t){const c=new L;Qa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class si extends Lt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vh extends Lt{constructor(e,t,n=Ci,s,r,o,a=bt,c=bt,l,h=Ws,u=1){if(h!==Ws&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zs extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,p=[],d=[],_=[],g=[];for(let m=0;m<h;m++){const b=m*f-o;for(let E=0;E<l;E++){const S=E*u-r;d.push(S,-b,0),_.push(0,0,1),g.push(E/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){const E=b+l*m,S=b+l*(m+1),w=b+1+l*(m+1),A=b+1+l*m;p.push(E,S,A),p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qi extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,f=new L,p=[],d=[],_=[],g=[];for(let m=0;m<=n;m++){const b=[],E=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const A=w/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),d.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(A+S,1-E),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){const E=h[m][b+1],S=h[m][b],w=h[m+1][b],A=h[m+1][b+1];(m!==0||o>0)&&p.push(E,S,A),(m!==n-1||c<Math.PI)&&p.push(S,w,A)}this.setIndex(p),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wh extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ds extends ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wd extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xd extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qd{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],d=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return d}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yd=new qd;class Rl{constructor(e){this.manager=e!==void 0?e:Yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji=new WeakMap;class $d extends Rl{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Vo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ji.get(o);u===void 0&&(u=[],ji.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=qs("img");function c(){h(),t&&t(this);const u=ji.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}ji.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Vo.remove(`image:${e}`);const f=ji.get(this)||[];for(let p=0;p<f.length;p++){const d=f[p];d.onError&&d.onError(u)}ji.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vo.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class jd extends Rl{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,o=new $d(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Cl extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Go=new dt,Mc=new L,yc=new L;class Xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yc),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new dt,Cs=new L,Wo=new L;class Kd extends Xh{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Wo.copy(n.position),Wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wo),n.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,n.coordinateSystem,n.reversedDepth)}}class Zd extends Cl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pl extends Oh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jd extends Xh{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qd extends Cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Jd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ef extends Cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class tf extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ec=new dt;class sf{constructor(e,t,n=0,s=1/0){this.ray=new Sl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ec.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ec),this}intersectObject(e,t=!0,n=[]){return el(e,this,n,t),n.sort(bc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)el(e[s],this,n,t);return n.sort(bc),n}}function bc(i,e){return i.distance-e.distance}function el(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)el(r[o],e,t,!0)}}function Tc(i,e,t,n){const s=rf(n);switch(t){case Ah:return i*e;case Ch:return i*e/s.components*s.byteLength;case _l:return i*e/s.components*s.byteLength;case Ph:return i*e*2/s.components*s.byteLength;case vl:return i*e*2/s.components*s.byteLength;case Rh:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case xl:return i*e*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fr:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case $a:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rf(i){switch(i){case Tn:case Eh:return{byteLength:1,components:1};case Vs:case bh:case On:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Ci:case pl:case Fn:return{byteLength:4,components:1};case Th:case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);function qh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function of(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,d)=>p.start-d.start);let f=0;for(let p=1;p<u.length;p++){const d=u[f],_=u[p];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,d=u.length;p<d;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ip=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Dm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:af,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:vf,bsdfs:xf,iridescence_fragment:Mf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Tf,color_fragment:wf,color_pars_fragment:Af,color_pars_vertex:Rf,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:If,displacementmap_vertex:Uf,emissivemap_fragment:Nf,emissivemap_pars_fragment:Ff,colorspace_fragment:Bf,colorspace_pars_fragment:Of,envmap_fragment:kf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:Qf,envmap_vertex:Gf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:$f,lightmap_pars_fragment:jf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Jf,lights_toon_fragment:ep,lights_toon_pars_fragment:tp,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:fp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:vp,morphinstance_vertex:xp,morphcolor_vertex:Mp,morphnormal_vertex:yp,morphtarget_pars_vertex:Sp,morphtarget_vertex:Ep,normal_fragment_begin:bp,normal_fragment_maps:Tp,normal_pars_fragment:wp,normal_pars_vertex:Ap,normal_vertex:Rp,normalmap_pars_fragment:Cp,clearcoat_normal_fragment_begin:Pp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Ip,opaque_fragment:Up,packing:Np,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:Op,dithering_pars_fragment:kp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Vp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Wp,shadowmask_pars_fragment:Xp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:$p,skinnormal_vertex:jp,specularmap_fragment:Kp,specularmap_pars_fragment:Zp,tonemapping_fragment:Jp,tonemapping_pars_fragment:Qp,transmission_fragment:em,transmission_pars_fragment:tm,uv_pars_fragment:nm,uv_pars_vertex:im,uv_vertex:sm,worldpos_vertex:rm,background_vert:om,background_frag:am,backgroundCube_vert:lm,backgroundCube_frag:cm,cube_vert:hm,cube_frag:um,depth_vert:dm,depth_frag:fm,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:_m,linedashed_vert:vm,linedashed_frag:xm,meshbasic_vert:Mm,meshbasic_frag:ym,meshlambert_vert:Sm,meshlambert_frag:Em,meshmatcap_vert:bm,meshmatcap_frag:Tm,meshnormal_vert:wm,meshnormal_frag:Am,meshphong_vert:Rm,meshphong_frag:Cm,meshphysical_vert:Pm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Im,points_vert:Um,points_frag:Nm,shadow_vert:Fm,shadow_frag:Bm,sprite_vert:Om,sprite_frag:km},le={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new de(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new de(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};vn.physical={uniforms:Ht([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ar={r:0,b:0,g:0},ui=new gn,zm=new dt;function Hm(i,e,t,n,s,r,o){const a=new de(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function d(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const w=d(E);w===null?m(a,c):w&&w.isColor&&(m(w,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,S){const w=d(S);w&&(w.isCubeTexture||w.mapping===so)?(h===void 0&&(h=new lt(new Qt(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:us(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(S.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(ui)),h.material.toneMapped=Je.getTransfer(w.colorSpace)!==nt,(u!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new lt(new Zs(2,2),new Ft({name:"BackgroundMaterial",uniforms:us(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(w.colorSpace)!==nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,S){E.getRGB(Ar,Bh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,S,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,m(a,c)},render:_,addToRenderList:g,dispose:b}}function Vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,C,F,O,W){let V=!1;const G=u(O,F,C);r!==G&&(r=G,l(r.object)),V=p(y,O,F,W),V&&d(y,O,F,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(y,C,F,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,F){const O=F.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let V=W[C.id];V===void 0&&(V={},W[C.id]=V);let G=V[O];return G===void 0&&(G=f(c()),V[O]=G),G}function f(y){const C=[],F=[],O=[];for(let W=0;W<t;W++)C[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,C,F,O){const W=r.attributes,V=C.attributes;let G=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){const oe=W[k];let ve=V[k];if(ve===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function d(y,C,F,O){const W={},V=C.attributes;let G=0;const q=F.getAttributes();for(const k in q)if(q[k].location>=0){let oe=V[k];oe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),W[k]=ve,G++}r.attributes=W,r.attributesNum=G,r.index=O}function _(){const y=r.newAttributes;for(let C=0,F=y.length;C<F;C++)y[C]=0}function g(y){m(y,0)}function m(y,C){const F=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;F[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),W[y]!==C&&(i.vertexAttribDivisor(y,C),W[y]=C)}function b(){const y=r.newAttributes,C=r.enabledAttributes;for(let F=0,O=C.length;F<O;F++)C[F]!==y[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function E(y,C,F,O,W,V,G){G===!0?i.vertexAttribIPointer(y,C,F,W,V):i.vertexAttribPointer(y,C,F,O,W,V)}function S(y,C,F,O){_();const W=O.attributes,V=F.getAttributes(),G=C.defaultAttributeValues;for(const q in V){const k=V[q];if(k.location>=0){let Q=W[q];if(Q===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const oe=Q.normalized,ve=Q.itemSize,ze=e.get(Q);if(ze===void 0)continue;const $e=ze.buffer,et=ze.type,Ke=ze.bytesPerElement,$=et===i.INT||et===i.UNSIGNED_INT||Q.gpuType===pl;if(Q.isInterleavedBufferAttribute){const K=Q.data,pe=K.stride,De=Q.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<k.locationSize;ge++)m(k.location+ge,K.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<k.locationSize;ge++)g(k.location+ge);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ge=0;ge<k.locationSize;ge++)E(k.location+ge,ve/k.locationSize,et,oe,pe*Ke,(De+ve/k.locationSize*ge)*Ke,$)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)m(k.location+K,Q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<k.locationSize;K++)g(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let K=0;K<k.locationSize;K++)E(k.location+K,ve/k.locationSize,et,oe,ve*Ke,ve/k.locationSize*K*Ke,$)}}else if(G!==void 0){const oe=G[q];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}b()}function w(){D();for(const y in n){const C=n[y];for(const F in C){const O=C[F];for(const W in O)h(O[W].object),delete O[W];delete C[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const F in C){const O=C[F];for(const W in O)h(O[W].object),delete O[W];delete C[F]}delete n[y.id]}function R(y){for(const C in n){const F=n[C];if(F[y.id]===void 0)continue;const O=F[y.id];for(const W in O)h(O[W].object),delete O[W];delete F[y.id]}}function D(){x(),o=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Gm(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let d=0;d<u;d++)p+=h[d];t.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<l.length;d++)o(l[d],h[d],f[d]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_]*f[_];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===On&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:w,maxSamples:A}}function Xm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new fi,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const d=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||d===null||d.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,E=b*4;let S=m.clippingState||null;c.value=S,S=h(d,f,E,p);for(let w=0;w!==E;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,d){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,d!==!0||g===null){const m=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,S=p;E!==_;++E,S+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function qm(i){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=ls:a===Ma&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const es=4,wc=[.125,.215,.35,.446,.526,.582],_i=20,Xo=new Pl,Ac=new de;let qo=null,Yo=0,$o=0,jo=!1;const pi=(1+Math.sqrt(5))/2,Ki=1/pi,Rc=[new L(-pi,Ki,0),new L(pi,Ki,0),new L(-Ki,0,pi),new L(Ki,0,pi),new L(0,pi,-Ki),new L(0,pi,Ki),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ym=new L;class Cc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ym}=r;qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,Yo,$o),this._renderer.xr.enabled=jo,e.scissorTest=!1,Rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:On,format:on,colorSpace:hs,depthBuffer:!1},s=Pc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$m(r)),this._blurMaterial=jm(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,s,r){const c=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Ac),u.toneMapping=Jn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new bn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new lt(new Qt,_);let m=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,m=!0):(_.color.copy(Ac),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const w=this._cubeSize;Rr(s,S*w,E>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ls||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Rr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rc[(s-r-1)%Rc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),_=r/d,g=isFinite(r)?1+Math.floor(h*_):_i;g>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${_i}`);const m=[];let b=0;for(let R=0;R<_i;++R){const D=R/_,x=Math.exp(-D*D/2);m.push(x),R===0?b+=x:R<g&&(b+=2*x)}for(let R=0;R<m.length;R++)m[R]=m[R]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=d,f.mipInt.value=E-n;const S=this._sizeLods[s],w=3*S*(s>E-es?s-E+es:0),A=4*(this._cubeSize-S);Rr(t,w,A,3*S,2*S),c.setRenderTarget(t),c.render(u,Xo)}}function $m(i){const e=[],t=[],n=[];let s=i;const r=i-es+1+wc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-es?c=wc[o-i+es-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,d=6,_=3,g=2,m=1,b=new Float32Array(_*d*p),E=new Float32Array(g*d*p),S=new Float32Array(m*d*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,D=A>2?0:-1,x=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(x,_*d*A),E.set(f,g*d*A);const y=[A,A,A,A,A,A];S.set(y,m*d*A)}const w=new Ot;w.setAttribute("position",new pn(b,_)),w.setAttribute("uv",new pn(E,g)),w.setAttribute("faceIndex",new pn(S,m)),e.push(w),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pc(i,e,t){const n=new fn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jm(i,e,t){const n=new Float32Array(_i),s=new L(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Dc(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Lc(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Km(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xa||c===Ma,h=c===ls||c===cs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Cc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Cc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const d in f.attributes)e.remove(f.attributes[d]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function l(u){const f=[],p=u.index,d=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let E=0,S=b.length;E<S;E+=3){const w=b[E+0],A=b[E+1],R=b[E+2];f.push(w,A,A,R,R,w)}}else if(d!==void 0){const b=d.array;_=d.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const w=E+0,A=E+1,R=E+2;f.push(w,A,A,R,R,w)}}else return;const g=new(Lh(f)?Fh:Nh)(f,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Qm(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function l(f,p,d){d!==0&&(i.drawElementsInstanced(n,p,r,f*o,d),t.update(p,n,d))}function h(f,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,d);let g=0;for(let m=0;m<d;m++)g+=p[m];t.update(g,n,1)}function u(f,p,d,_){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)l(f[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,d);let m=0;for(let b=0;b<d;b++)m+=p[b]*_[b];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function e0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,e,t){const n=new WeakMap,s=new st;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let w=a.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*u),D=new Ih(R,w,A,u);D.type=Fn,D.needsUpdate=!0;const x=S*4;for(let C=0;C<u;C++){const F=m[C],O=b[C],W=E[C],V=w*A*4*C;for(let G=0;G<F.count;G++){const q=G*x;d===!0&&(s.fromBufferAttribute(F,G),R[V+q+0]=s.x,R[V+q+1]=s.y,R[V+q+2]=s.z,R[V+q+3]=0),_===!0&&(s.fromBufferAttribute(O,G),R[V+q+4]=s.x,R[V+q+5]=s.y,R[V+q+6]=s.z,R[V+q+7]=0),g===!0&&(s.fromBufferAttribute(W,G),R[V+q+8]=s.x,R[V+q+9]=s.y,R[V+q+10]=s.z,R[V+q+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new Ae(w,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function n0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Yh=new Lt,Ic=new Vh(1,1),$h=new Ih,jh=new Md,Kh=new kh,Uc=[],Nc=[],Fc=new Float32Array(16),Bc=new Float32Array(9),Oc=new Float32Array(4);function xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Nc[e];t===void 0&&(t=new Int32Array(e),Nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function i0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function a0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),wt(t,n)}}function l0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),wt(t,n)}}function c0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,n))return;Fc.set(n),i.uniformMatrix4fv(this.addr,!1,Fc),wt(t,n)}}function h0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function p0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function m0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function g0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function v0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=Dh,r=Ic):r=Yh,t.setTexture2D(e||r,s)}function x0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function M0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kh,s)}function y0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$h,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return y0}}function E0(i,e){i.uniform1fv(this.addr,e)}function b0(i,e){const t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function T0(i,e){const t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function w0(i,e){const t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function A0(i,e){const t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R0(i,e){const t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function C0(i,e){const t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function P0(i,e){i.uniform1iv(this.addr,e)}function D0(i,e){i.uniform2iv(this.addr,e)}function L0(i,e){i.uniform3iv(this.addr,e)}function I0(i,e){i.uniform4iv(this.addr,e)}function U0(i,e){i.uniform1uiv(this.addr,e)}function N0(i,e){i.uniform2uiv(this.addr,e)}function F0(i,e){i.uniform3uiv(this.addr,e)}function B0(i,e){i.uniform4uiv(this.addr,e)}function O0(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Yh,r[o])}function k0(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jh,r[o])}function z0(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Kh,r[o])}function H0(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||$h,r[o])}function V0(i){switch(i){case 5126:return E0;case 35664:return b0;case 35665:return T0;case 35666:return w0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return D0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}class G0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=S0(t.type)}}class W0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V0(t.type)}}class X0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function kc(i,e){i.seq.push(e),i.map[e.id]=e}function q0(i,e,t){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),o=Ko.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){kc(t,l===void 0?new G0(a,i,e):new W0(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new X0(a),kc(t,u)),t=u}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);q0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Y0=37297;let $0=0;function j0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hc=new Ve;function K0(i){Je._getMatrix(Hc,Je.workingColorSpace,i);const e=`mat3( ${Hc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+j0(i.getShaderSource(e),a)}else return r}function Z0(i,e){const t=K0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function J0(i,e){let t;switch(e){case $u:t="Linear";break;case ju:t="Reinhard";break;case Ku:t="Cineon";break;case Zu:t="ACESFilmic";break;case Qu:t="AgX";break;case ed:t="Neutral";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new L;function Q0(){Je.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function tg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ng(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ls(i){return i!==""}function Gc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(ig,rg)}const sg=new Map;function rg(i,e){let t=Xe[e];if(t===void 0){const n=sg.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tl(t)}const og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xc(i){return i.replace(og,ag)}function ag(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function ug(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fl:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function dg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=lg(t),l=cg(t),h=hg(t),u=ug(t),f=dg(t),p=eg(t),d=tg(r),_=s.createProgram();let g,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ls).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(g=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Jn?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Z0("linearToOutputTexel",t.outputColorSpace),Q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),o=tl(o),o=Gc(o,t),o=Wc(o,t),a=tl(a),a=Gc(a,t),a=Wc(a,t),o=Xc(o),a=Xc(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=b+g+o,S=b+m+a,w=zc(s,s.VERTEX_SHADER,E),A=zc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,w),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(A)||"",V=F.trim(),G=O.trim(),q=W.trim();let k=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,A);else{const oe=Vc(s,w,"vertex"),ve=Vc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+oe+`
`+ve)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||q==="")&&(Q=!1);Q&&(C.diagnostics={runnable:k,programLog:V,vertexShader:{log:G,prefix:g},fragmentShader:{log:q,prefix:m}})}s.deleteShader(w),s.deleteShader(A),D=new Or(s,_),x=ng(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Y0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gg(e),t.set(e,n)),n}}class gg{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}}function _g(i,e,t,n,s,r,o){const a=new El,c=new mg,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,y,C,F,O){const W=F.fog,V=O.geometry,G=x.isMeshStandardMaterial?F.environment:null,q=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),k=q&&q.mapping===so?q.image.height:null,Q=d[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=oe!==void 0?oe.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let $e,et,Ke,$;if(Q){const Qe=vn[Q];$e=Qe.vertexShader,et=Qe.fragmentShader}else $e=x.vertexShader,et=x.fragmentShader,c.update(x),Ke=c.getVertexShaderID(x),$=c.getFragmentShaderID(x);const K=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,Ge=!!x.map,Mt=!!x.matcap,P=!!q,ft=!!x.aoMap,ke=!!x.lightMap,Fe=!!x.bumpMap,Me=!!x.normalMap,pt=!!x.displacementMap,ye=!!x.emissiveMap,We=!!x.metalnessMap,At=!!x.roughnessMap,St=x.anisotropy>0,T=x.clearcoat>0,v=x.dispersion>0,B=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,X=St&&!!x.anisotropyMap,Te=T&&!!x.clearcoatMap,re=T&&!!x.clearcoatNormalMap,Se=T&&!!x.clearcoatRoughnessMap,Ee=B&&!!x.iridescenceMap,ne=B&&!!x.iridescenceThicknessMap,ue=Y&&!!x.sheenColorMap,Ue=Y&&!!x.sheenRoughnessMap,be=!!x.specularMap,ce=!!x.specularColorMap,He=!!x.specularIntensityMap,I=Z&&!!x.transmissionMap,ie=Z&&!!x.thicknessMap,ae=!!x.gradientMap,me=!!x.alphaMap,ee=x.alphaTest>0,j=!!x.alphaHash,xe=!!x.extensions;let Oe=Jn;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const at={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:et,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:hs,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Mt,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:k,aoMap:ft,lightMap:ke,bumpMap:Fe,normalMap:Me,displacementMap:f&&pt,emissiveMap:ye,normalMapObjectSpace:Me&&x.normalMapType===sd,normalMapTangentSpace:Me&&x.normalMapType===Ml,metalnessMap:We,roughnessMap:At,anisotropy:St,anisotropyMap:X,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:v,iridescence:B,iridescenceMap:Ee,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ue,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:ce,specularIntensityMap:He,transmission:Z,transmissionMap:I,thicknessMap:ie,gradientMap:ae,opaque:x.transparent===!1&&x.blending===Zn&&x.alphaToCoverage===!1,alphaMap:me,alphaTest:ee,alphaHash:j,combine:x.combine,mapUv:Ge&&_(x.map.channel),aoMapUv:ft&&_(x.aoMap.channel),lightMapUv:ke&&_(x.lightMap.channel),bumpMapUv:Fe&&_(x.bumpMap.channel),normalMapUv:Me&&_(x.normalMap.channel),displacementMapUv:pt&&_(x.displacementMap.channel),emissiveMapUv:ye&&_(x.emissiveMap.channel),metalnessMapUv:We&&_(x.metalnessMap.channel),roughnessMapUv:At&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:Te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(x.sheenRoughnessMap.channel),specularMapUv:be&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:He&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:ie&&_(x.thicknessMap.channel),alphaMapUv:me&&_(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Me||St),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Ge||me),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:ye&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function m(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)y.push(C),y.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(b(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){const y=d[x.type];let C;if(y){const F=vn[y];C=qr.clone(F.uniforms)}else C=x.uniforms;return C}function w(x,y){let C;for(let F=0,O=h.length;F<O;F++){const W=h[F];if(W.cacheKey===y){C=W,++C.usedTimes;break}}return C===void 0&&(C=new fg(i,y,x,r),h.push(C)),C}function A(x){if(--x.usedTimes===0){const y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function R(x){c.remove(x)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:D}}function vg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $c(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,d,_,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:d,renderOrder:u.renderOrder,z:_,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=d,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function a(u,f,p,d,_,g){const m=o(u,f,p,d,_,g);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function c(u,f,p,d,_,g){const m=o(u,f,p,d,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||xg),n.length>1&&n.sort(f||Yc),s.length>1&&s.sort(f||Yc)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Mg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $c,i.set(n,[o])):s>=r.length?(o=new $c,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new de};break;case"SpotLight":t={position:new L,direction:new L,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Eg=0;function bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tg(i){const e=new yg,t=Sg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new dt,o=new dt;function a(l){let h=0,u=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,d=0,_=0,g=0,m=0,b=0,E=0,S=0,w=0,A=0,R=0;l.sort(bg);for(let x=0,y=l.length;x<y;x++){const C=l[x],F=C.color,O=C.intensity,W=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],O);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,k=t.get(C);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const q=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,C.castShadow){const k=t.get(C);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=V,S++}_++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(F).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const q=C.shadow,k=t.get(C);k.shadowIntensity=q.intensity,k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,n.pointShadow[d]=k,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=C.shadow.matrix,E++}n.point[d]=G,d++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[m]=G,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==d||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=d,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=p,D.pointLength=d,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=w,D.numLightProbes=R,n.version=Eg++)}function c(l,h){let u=0,f=0,p=0,d=0,_=0;const g=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){const E=l[m];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const S=n.rectArea[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),d++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function jc(i){const e=new Tg(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function wg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new jc(i),e.set(s,[a])):r>=o.length?(a=new jc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cg(i,e,t){let n=new wl;const s=new Ae,r=new Ae,o=new st,a=new Wd({depthPacking:id}),c=new Xd,l={},h=t.maxTextureSize,u={[Hn]:Gt,[Gt]:Hn,[xn]:xn},f=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const d=new Ot;d.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let m=this.type;this.render=function(A,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Bn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==In&&this.type===In,W=m===In&&this.type!==In;for(let V=0,G=A.length;V<G;V++){const q=A[V],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Q=k.getFrameExtents();if(s.multiply(Q),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||O===!0||W===!0){const ve=this.type!==In?{minFilter:bt,magFilter:bt}:{};k.map!==null&&k.map.dispose(),k.map=new fn(s.x,s.y,ve),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let ve=0;ve<oe;ve++){const ze=k.getViewport(ve);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),F.viewport(o),k.updateMatrices(q,ve),n=k.getFrustum(),S(R,D,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===In&&b(k,D),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(x,y,C)};function b(A,R){const D=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,D,p,_,null)}function E(A,R,D,x){let y=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=y.uuid,O=R.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let V=W[O];V===void 0&&(V=y.clone(),W[O]=V,R.addEventListener("dispose",w)),y=V}if(y.visible=R.visible,y.wireframe=R.wireframe,x===In?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=i.properties.get(y);F.light=D}return y}function S(A,R,D,x,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const V=O.groups;for(let G=0,q=V.length;G<q;G++){const k=V[G],Q=W[k.materialIndex];if(Q&&Q.visible){const oe=E(A,Q,x,y);A.onBeforeShadow(i,A,R,D,O,oe,k),i.renderBufferDirect(D,null,O,oe,A,k),A.onAfterShadow(i,A,R,D,O,oe,k)}}}else if(W.visible){const V=E(A,W,x,y);A.onBeforeShadow(i,A,R,D,O,V,null),i.renderBufferDirect(D,null,O,V,A,null),A.onAfterShadow(i,A,R,D,O,V,null)}}const F=A.children;for(let O=0,W=F.length;O<W;O++)S(F[O],R,D,x,y)}function w(A){A.target.removeEventListener("dispose",w);for(const D in l){const x=l[D],y=A.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const Pg={[da]:fa,[pa]:_a,[ma]:va,[as]:ga,[fa]:da,[_a]:pa,[va]:ma,[ga]:as};function Dg(i,e){function t(){let I=!1;const ie=new st;let ae=null;const me=new st(0,0,0,0);return{setMask:function(ee){ae!==ee&&!I&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){I=ee},setClear:function(ee,j,xe,Oe,at){at===!0&&(ee*=Oe,j*=Oe,xe*=Oe),ie.set(ee,j,xe,Oe),me.equals(ie)===!1&&(i.clearColor(ee,j,xe,Oe),me.copy(ie))},reset:function(){I=!1,ae=null,me.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,ae=null,me=null,ee=null;return{setReversed:function(j){if(ie!==j){const xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(j){j?K(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(j){ae!==j&&!I&&(i.depthMask(j),ae=j)},setFunc:function(j){if(ie&&(j=Pg[j]),me!==j){switch(j){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=j}},setLocked:function(j){I=j},setClear:function(j){ee!==j&&(ie&&(j=1-j),i.clearDepth(j),ee=j)},reset:function(){I=!1,ae=null,me=null,ee=null,ie=!1}}}function s(){let I=!1,ie=null,ae=null,me=null,ee=null,j=null,xe=null,Oe=null,at=null;return{setTest:function(Qe){I||(Qe?K(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!I&&(i.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,wn,_n){(ae!==Qe||me!==wn||ee!==_n)&&(i.stencilFunc(Qe,wn,_n),ae=Qe,me=wn,ee=_n)},setOp:function(Qe,wn,_n){(j!==Qe||xe!==wn||Oe!==_n)&&(i.stencilOp(Qe,wn,_n),j=Qe,xe=wn,Oe=_n)},setLocked:function(Qe){I=Qe},setClear:function(Qe){at!==Qe&&(i.clearStencil(Qe),at=Qe)},reset:function(){I=!1,ie=null,ae=null,me=null,ee=null,j=null,xe=null,Oe=null,at=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],d=null,_=!1,g=null,m=null,b=null,E=null,S=null,w=null,A=null,R=new de(0,0,0),D=0,x=!1,y=null,C=null,F=null,O=null,W=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=q>=2);let Q=null,oe={};const ve=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),$e=new st().fromArray(ve),et=new st().fromArray(ze);function Ke(I,ie,ae,me){const ee=new Uint8Array(4),j=i.createTexture();i.bindTexture(I,j),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ae;xe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return j}const $={};$[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(as),Fe(!1),Me($l),K(i.CULL_FACE),ft(Bn);function K(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function De(I,ie){return u[I]!==ie?(i.bindFramebuffer(I,ie),u[I]=ie,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function ge(I,ie){let ae=p,me=!1;if(I){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const ee=I.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let j=0,xe=ee.length;j<xe;j++)ae[j]=i.COLOR_ATTACHMENT0+j;ae.length=ee.length,me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,me=!0);me&&i.drawBuffers(ae)}function Ge(I){return d!==I?(i.useProgram(I),d=I,!0):!1}const Mt={[gi]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Pu]:i.FUNC_REVERSE_SUBTRACT};Mt[Du]=i.MIN,Mt[Lu]=i.MAX;const P={[Iu]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Fu]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Wu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(I,ie,ae,me,ee,j,xe,Oe,at,Qe){if(I===Bn){_===!0&&(pe(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),I!==Ru){if(I!==g||Qe!==x){if((m!==gi||S!==gi)&&(i.blendEquation(i.FUNC_ADD),m=gi,S=gi),Qe)switch(I){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hs:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,w=null,A=null,R.set(0,0,0),D=0,g=I,x=Qe}return}ee=ee||ie,j=j||ae,xe=xe||me,(ie!==m||ee!==S)&&(i.blendEquationSeparate(Mt[ie],Mt[ee]),m=ie,S=ee),(ae!==b||me!==E||j!==w||xe!==A)&&(i.blendFuncSeparate(P[ae],P[me],P[j],P[xe]),b=ae,E=me,w=j,A=xe),(Oe.equals(R)===!1||at!==D)&&(i.blendColor(Oe.r,Oe.g,Oe.b,at),R.copy(Oe),D=at),g=I,x=!1}function ke(I,ie){I.side===xn?pe(i.CULL_FACE):K(i.CULL_FACE);let ae=I.side===Gt;ie&&(ae=!ae),Fe(ae),I.blending===Zn&&I.transparent===!1?ft(Bn):ft(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const me=I.stencilWrite;a.setTest(me),me&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Me(I){I!==wu?(K(i.CULL_FACE),I!==C&&(I===$l?i.cullFace(i.BACK):I===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),C=I}function pt(I){I!==F&&(G&&i.lineWidth(I),F=I)}function ye(I,ie,ae){I?(K(i.POLYGON_OFFSET_FILL),(O!==ie||W!==ae)&&(i.polygonOffset(ie,ae),O=ie,W=ae)):pe(i.POLYGON_OFFSET_FILL)}function We(I){I?K(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function At(I){I===void 0&&(I=i.TEXTURE0+V-1),Q!==I&&(i.activeTexture(I),Q=I)}function St(I,ie,ae){ae===void 0&&(Q===null?ae=i.TEXTURE0+V-1:ae=Q);let me=oe[ae];me===void 0&&(me={type:void 0,texture:void 0},oe[ae]=me),(me.type!==I||me.texture!==ie)&&(Q!==ae&&(i.activeTexture(ae),Q=ae),i.bindTexture(I,ie||$[I]),me.type=I,me.texture=ie)}function T(){const I=oe[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){$e.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function Ue(I){et.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function be(I,ie){let ae=l.get(ie);ae===void 0&&(ae=new WeakMap,l.set(ie,ae));let me=ae.get(I);me===void 0&&(me=i.getUniformBlockIndex(ie,I.name),ae.set(I,me))}function ce(I,ie){const me=l.get(ie).get(I);c.get(ie)!==me&&(i.uniformBlockBinding(ie,me,I.__bindingPointIndex),c.set(ie,me))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,oe={},u={},f=new WeakMap,p=[],d=null,_=!1,g=null,m=null,b=null,E=null,S=null,w=null,A=null,R=new de(0,0,0),D=0,x=!1,y=null,C=null,F=null,O=null,W=null,$e.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:pe,bindFramebuffer:De,drawBuffers:ge,useProgram:Ge,setBlending:ft,setMaterial:ke,setFlipSided:Fe,setCullFace:Me,setLineWidth:pt,setPolygonOffset:ye,setScissorTest:We,activeTexture:At,bindTexture:St,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Ee,texImage3D:ne,updateUBOMapping:be,uniformBlockBinding:ce,texStorage2D:re,texStorage3D:Se,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:ue,viewport:Ue,reset:He}}function Lg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,v){return p?new OffscreenCanvas(T,v):qs("canvas")}function _(T,v,B){let Y=1;const Z=St(T);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*Z.width),Te=Math.floor(Y*Z.height);u===void 0&&(u=d(X,Te));const re=v?d(X,Te):u;return re.width=X,re.height=Te,re.getContext("2d").drawImage(T,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Te+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,B,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===i.RED&&(B===i.FLOAT&&(X=i.R32F),B===i.HALF_FLOAT&&(X=i.R16F),B===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.R8UI),B===i.UNSIGNED_SHORT&&(X=i.R16UI),B===i.UNSIGNED_INT&&(X=i.R32UI),B===i.BYTE&&(X=i.R8I),B===i.SHORT&&(X=i.R16I),B===i.INT&&(X=i.R32I)),v===i.RG&&(B===i.FLOAT&&(X=i.RG32F),B===i.HALF_FLOAT&&(X=i.RG16F),B===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RG8UI),B===i.UNSIGNED_SHORT&&(X=i.RG16UI),B===i.UNSIGNED_INT&&(X=i.RG32UI),B===i.BYTE&&(X=i.RG8I),B===i.SHORT&&(X=i.RG16I),B===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGB8UI),B===i.UNSIGNED_SHORT&&(X=i.RGB16UI),B===i.UNSIGNED_INT&&(X=i.RGB32UI),B===i.BYTE&&(X=i.RGB8I),B===i.SHORT&&(X=i.RGB16I),B===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),B===i.UNSIGNED_INT&&(X=i.RGBA32UI),B===i.BYTE&&(X=i.RGBA8I),B===i.SHORT&&(X=i.RGBA16I),B===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Te=Z?Wr:Je.getTransfer(Y);B===i.FLOAT&&(X=i.RGBA32F),B===i.HALF_FLOAT&&(X=i.RGBA16F),B===i.UNSIGNED_BYTE&&(X=Te===nt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(T,v){let B;return T?v===null||v===Ci||v===Gs?B=i.DEPTH24_STENCIL8:v===Fn?B=i.DEPTH32F_STENCIL8:v===Vs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Gs?B=i.DEPTH_COMPONENT24:v===Fn?B=i.DEPTH_COMPONENT32F:v===Vs&&(B=i.DEPTH_COMPONENT16),B}function w(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==bt&&T.minFilter!==yn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),y(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,Y=f.get(B);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(T),Object.keys(Y).length===0&&f.delete(B)}n.remove(T)}function x(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,Y=f.get(B);delete Y[v.__cacheKey],o.memory.textures--}function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const X=n.get(B[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(T)}let C=0;function F(){C=0}function O(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function V(T,v){const B=n.get(T);if(T.isVideoTexture&&We(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,v);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function G(T,v){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function q(T,v){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){$(B,T,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function k(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const Q={[ya]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},oe={[bt]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},ve={[rd]:i.NEVER,[ud]:i.ALWAYS,[od]:i.LESS,[Dh]:i.LEQUAL,[ad]:i.EQUAL,[hd]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function ze(T,v){if(v.type===Fn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===yn||v.magFilter===go||v.magFilter===sr||v.magFilter===Mi||v.minFilter===yn||v.minFilter===go||v.minFilter===sr||v.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bt||v.minFilter!==sr&&v.minFilter!==Mi||v.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $e(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const X=W(v);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[X].usedTimes++;const Te=Z[T.__cacheKey];Te!==void 0&&(Z[T.__cacheKey].usedTimes--,Te.usedTimes===0&&x(v)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return B}function et(T,v,B){return Math.floor(Math.floor(T/B)/v)}function Ke(T,v,B,Y){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,Y,v.data);else{X.sort((ne,ue)=>ne.start-ue.start);let Te=0;for(let ne=1;ne<X.length;ne++){const ue=X[Te],Ue=X[ne],be=ue.start+ue.count,ce=et(Ue.start,v.width,4),He=et(ue.start,v.width,4);Ue.start<=be+1&&ce===He&&et(Ue.start+Ue.count-1,v.width,4)===ce?ue.count=Math.max(ue.count,Ue.start+Ue.count-ue.start):(++Te,X[Te]=Ue)}X.length=Te+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,ue=X.length;ne<ue;ne++){const Ue=X[ne],be=Math.floor(Ue.start/4),ce=Math.ceil(Ue.count/4),He=be%v.width,I=Math.floor(be/v.width),ie=ce,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,He,I,ie,ae,B,Y,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function $(T,v,B){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=$e(T,v),X=v.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+B);const Te=n.get(X);if(X.version!==Te.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const re=Je.getPrimaries(Je.workingColorSpace),Se=v.colorSpace===Kn?null:Je.getPrimaries(v.colorSpace),Ee=v.colorSpace===Kn||re===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ne=_(v.image,!1,s.maxTextureSize);ne=At(v,ne);const ue=r.convert(v.format,v.colorSpace),Ue=r.convert(v.type);let be=E(v.internalFormat,ue,Ue,v.colorSpace,v.isVideoTexture);ze(Y,v);let ce;const He=v.mipmaps,I=v.isVideoTexture!==!0,ie=Te.__version===void 0||Z===!0,ae=X.dataReady,me=w(v,ne);if(v.isDepthTexture)be=S(v.format===Xs,v.type),ie&&(I?t.texStorage2D(i.TEXTURE_2D,1,be,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,ue,Ue,null));else if(v.isDataTexture)if(He.length>0){I&&ie&&t.texStorage2D(i.TEXTURE_2D,me,be,He[0].width,He[0].height);for(let ee=0,j=He.length;ee<j;ee++)ce=He[ee],I?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,Ue,ce.data);v.generateMipmaps=!1}else I?(ie&&t.texStorage2D(i.TEXTURE_2D,me,be,ne.width,ne.height),ae&&Ke(v,ne,ue,Ue)):t.texImage2D(i.TEXTURE_2D,0,be,ne.width,ne.height,0,ue,Ue,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,be,He[0].width,He[0].height,ne.depth);for(let ee=0,j=He.length;ee<j;ee++)if(ce=He[ee],v.format!==on)if(ue!==null)if(I){if(ae)if(v.layerUpdates.size>0){const xe=Tc(ce.width,ce.height,v.format,v.type);for(const Oe of v.layerUpdates){const at=ce.data.subarray(Oe*xe/ce.data.BYTES_PER_ELEMENT,(Oe+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Oe,ce.width,ce.height,1,ue,at)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ue,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,ue,Ue,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,be,ce.width,ce.height,ne.depth,0,ue,Ue,ce.data)}else{I&&ie&&t.texStorage2D(i.TEXTURE_2D,me,be,He[0].width,He[0].height);for(let ee=0,j=He.length;ee<j;ee++)ce=He[ee],v.format!==on?ue!==null?I?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,Ue,ce.data):t.texImage2D(i.TEXTURE_2D,ee,be,ce.width,ce.height,0,ue,Ue,ce.data)}else if(v.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,be,ne.width,ne.height,ne.depth),ae)if(v.layerUpdates.size>0){const ee=Tc(ne.width,ne.height,v.format,v.type);for(const j of v.layerUpdates){const xe=ne.data.subarray(j*ee/ne.data.BYTES_PER_ELEMENT,(j+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,ue,Ue,xe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ue,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ne.width,ne.height,ne.depth,0,ue,Ue,ne.data);else if(v.isData3DTexture)I?(ie&&t.texStorage3D(i.TEXTURE_3D,me,be,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ue,Ue,ne.data)):t.texImage3D(i.TEXTURE_3D,0,be,ne.width,ne.height,ne.depth,0,ue,Ue,ne.data);else if(v.isFramebufferTexture){if(ie)if(I)t.texStorage2D(i.TEXTURE_2D,me,be,ne.width,ne.height);else{let ee=ne.width,j=ne.height;for(let xe=0;xe<me;xe++)t.texImage2D(i.TEXTURE_2D,xe,be,ee,j,0,ue,Ue,null),ee>>=1,j>>=1}}else if(He.length>0){if(I&&ie){const ee=St(He[0]);t.texStorage2D(i.TEXTURE_2D,me,be,ee.width,ee.height)}for(let ee=0,j=He.length;ee<j;ee++)ce=He[ee],I?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue,Ue,ce):t.texImage2D(i.TEXTURE_2D,ee,be,ue,Ue,ce);v.generateMipmaps=!1}else if(I){if(ie){const ee=St(ne);t.texStorage2D(i.TEXTURE_2D,me,be,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ue,ne)}else t.texImage2D(i.TEXTURE_2D,0,be,ue,Ue,ne);g(v)&&m(Y),Te.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function K(T,v,B){if(v.image.length!==6)return;const Y=$e(T,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(i.TEXTURE0+B);const Te=Je.getPrimaries(Je.workingColorSpace),re=v.colorSpace===Kn?null:Je.getPrimaries(v.colorSpace),Se=v.colorSpace===Kn||Te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!Ee&&!ne?ue[j]=_(v.image[j],!0,s.maxCubemapSize):ue[j]=ne?v.image[j].image:v.image[j],ue[j]=At(v,ue[j]);const Ue=ue[0],be=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),He=E(v.internalFormat,be,ce,v.colorSpace),I=v.isVideoTexture!==!0,ie=X.__version===void 0||Y===!0,ae=Z.dataReady;let me=w(v,Ue);ze(i.TEXTURE_CUBE_MAP,v);let ee;if(Ee){I&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,He,Ue.width,Ue.height);for(let j=0;j<6;j++){ee=ue[j].mipmaps;for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];v.format!==on?be!==null?I?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Oe.width,Oe.height,be,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,He,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Oe.width,Oe.height,be,ce,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,He,Oe.width,Oe.height,0,be,ce,Oe.data)}}}else{if(ee=v.mipmaps,I&&ie){ee.length>0&&me++;const j=St(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,He,j.width,j.height)}for(let j=0;j<6;j++)if(ne){I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,be,ce,ue[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,ue[j].width,ue[j].height,0,be,ce,ue[j].data);for(let xe=0;xe<ee.length;xe++){const at=ee[xe].image[j].image;I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,at.width,at.height,be,ce,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,He,at.width,at.height,0,be,ce,at.data)}}else{I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be,ce,ue[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,be,ce,ue[j]);for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,be,ce,Oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,He,be,ce,Oe.image[j])}}}g(v)&&m(i.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function pe(T,v,B,Y,Z,X){const Te=r.convert(B.format,B.colorSpace),re=r.convert(B.type),Se=E(B.internalFormat,Te,re,B.colorSpace),Ee=n.get(v),ne=n.get(B);if(ne.__renderTarget=v,!Ee.__hasExternalTextures){const ue=Math.max(1,v.width>>X),Ue=Math.max(1,v.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,Se,ue,Ue,v.depth,0,Te,re,null):t.texImage2D(Z,X,Se,ue,Ue,0,Te,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,ne.__webglTexture,0,pt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,ne.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=S(v.stencilBuffer,Z),Te=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=pt(v);ye(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],Te=r.convert(X.format,X.colorSpace),re=r.convert(X.type),Se=E(X.internalFormat,Te,re,X.colorSpace),Ee=pt(v);B&&ye(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,Se,v.width,v.height):ye(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,Se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Z=Y.__webglTexture,X=pt(v);if(v.depthTexture.format===Ws)ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Xs)ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ge(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?ge(v.__webglFramebuffer[0],T):ge(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),De(v.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),De(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(T,v,B){const Y=n.get(T);v!==void 0&&pe(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ge(T)}function P(T){const v=T.texture,B=n.get(T),Y=n.get(v);T.addEventListener("dispose",R);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,Te=Z.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),X){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let Se=0;Se<v.mipmaps.length;Se++)B.__webglFramebuffer[re][Se]=i.createFramebuffer()}else B.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)B.__webglFramebuffer[re]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Te)for(let re=0,Se=Z.length;re<Se;re++){const Ee=n.get(Z[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Se=Z[re];B.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[re]);const Ee=r.convert(Se.format,Se.colorSpace),ne=r.convert(Se.type),ue=E(Se.internalFormat,Ee,ne,Se.colorSpace,T.isXRRenderTarget===!0),Ue=pt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ue,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,B.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),De(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)pe(B.__webglFramebuffer[re][Se],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else pe(B.__webglFramebuffer[re],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);g(v)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=Z.length;re<Se;re++){const Ee=Z[re],ne=n.get(Ee);let ue=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ze(ue,Ee),pe(B.__webglFramebuffer,T,Ee,i.COLOR_ATTACHMENT0+re,ue,0),g(Ee)&&m(ue)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),ze(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)pe(B.__webglFramebuffer[Se],T,v,i.COLOR_ATTACHMENT0,re,Se);else pe(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,re,0);g(v)&&m(re),t.unbindTexture()}T.depthBuffer&&Ge(T)}function ft(T){const v=T.textures;for(let B=0,Y=v.length;B<Y;B++){const Z=v[B];if(g(Z)){const X=b(T),Te=n.get(Z).__webglTexture;t.bindTexture(X,Te),m(X),t.unbindTexture()}}}const ke=[],Fe=[];function Me(T){if(T.samples>0){if(ye(T)===!1){const v=T.textures,B=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(T),re=v.length>1;if(re)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,i.NEAREST),c===!0&&(ke.length=0,Fe.length=0,ke.push(i.COLOR_ATTACHMENT0+Ee),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ke.push(X),Fe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const ne=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function pt(T){return Math.min(s.maxSamples,T.samples)}function ye(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function We(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function At(T,v){const B=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==hs&&B!==Kn&&(Je.getTransfer(B)===nt?(Y!==on||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=k,this.rebindTextures=Mt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function Ig(i,e){function t(n,s=Kn){let r;const o=Je.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===bh)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Ah)return i.ALPHA;if(n===Rh)return i.RGB;if(n===on)return i.RGBA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Fr||n===Br)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===ba||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Ba||n===Oa||n===ka||n===za||n===Ha||n===Va||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===$a||n===ja||n===Ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Gh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ft({vertexShader:Ug,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bg extends vs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,d=null;const _=typeof XRWebGLBinding<"u",g=new Fg,m={},b=t.getContextAttributes();let E=null,S=null;const w=[],A=[],R=new Ae;let D=null;const x=new Kt;x.viewport=new st;const y=new Kt;y.viewport=new st;const C=[x,y],F=new tf;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=w[$];return K===void 0&&(K=new ko,w[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=w[$];return K===void 0&&(K=new ko,w[$]=K),K.getGripSpace()},this.getHand=function($){let K=w[$];return K===void 0&&(K=new ko,w[$]=K),K.getHandSpace()};function V($){const K=A.indexOf($.inputSource);if(K===-1)return;const pe=w[K];pe!==void 0&&(pe.update($.inputSource,$.frame,l||o),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let $=0;$<w.length;$++){const K=A[$];K!==null&&(A[$]=null,w[$].disconnect(K))}O=null,W=null,g.reset();for(const $ in m)delete m[$];e.setRenderTarget(E),p=null,f=null,u=null,s=null,S=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,ge=null;b.depth&&(ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Xs:Ws,De=b.stencil?Gs:Ci);const Ge={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new fn(f.textureWidth,f.textureHeight,{format:on,type:Tn,depthTexture:new Vh(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new fn(p.framebufferWidth,p.framebufferHeight,{format:on,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let K=0;K<$.removed.length;K++){const pe=$.removed[K],De=A.indexOf(pe);De>=0&&(A[De]=null,w[De].disconnect(pe))}for(let K=0;K<$.added.length;K++){const pe=$.added[K];let De=A.indexOf(pe);if(De===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=A.length){A.push(pe),De=Ge;break}else if(A[Ge]===null){A[Ge]=pe,De=Ge;break}if(De===-1)break}const ge=w[De];ge&&ge.connect(pe)}}const k=new L,Q=new L;function oe($,K,pe){k.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const De=k.distanceTo(Q),ge=K.projectionMatrix.elements,Ge=pe.projectionMatrix.elements,Mt=ge[14]/(ge[10]-1),P=ge[14]/(ge[10]+1),ft=(ge[9]+1)/ge[5],ke=(ge[9]-1)/ge[5],Fe=(ge[8]-1)/ge[0],Me=(Ge[8]+1)/Ge[0],pt=Mt*Fe,ye=Mt*Me,We=De/(-Fe+Me),At=We*-Fe;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ(We),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const St=Mt+We,T=P+We,v=pt-At,B=ye+(De-At),Y=ft*P/T*St,Z=ke*P/T*St;$.projectionMatrix.makePerspective(v,B,Y,Z,St,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ve($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let K=$.near,pe=$.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),F.near=y.near=x.near=K,F.far=y.far=x.far=pe,(O!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,W=F.far),F.layers.mask=$.layers.mask|6,x.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const De=$.parent,ge=F.cameras;ve(F,De);for(let Ge=0;Ge<ge.length;Ge++)ve(ge[Ge],De);ge.length===2?oe(F,x,y):F.projectionMatrix.copy(x.projectionMatrix),ze($,F,De)};function ze($,K,pe){pe===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ja*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function($){return m[$]};let $e=null;function et($,K){if(h=K.getViewerPose(l||o),d=K,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let De=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let P=0;P<pe.length;P++){const ft=pe[P];let ke=null;if(p!==null)ke=p.getViewport(ft);else{const Me=u.getViewSubImage(f,ft);ke=Me.viewport,P===0&&(e.setRenderTargetTextures(S,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(S))}let Fe=C[P];Fe===void 0&&(Fe=new Kt,Fe.layers.enable(P),Fe.viewport=new st,C[P]=Fe),Fe.matrix.fromArray(ft.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ft.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ke.x,ke.y,ke.width,ke.height),P===0&&(F.matrix.copy(Fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Fe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const P=u.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let P=0;P<pe.length;P++){const ft=pe[P].camera;if(ft){let ke=m[ft];ke||(ke=new Gh,m[ft]=ke);const Fe=u.getCameraImage(ft);ke.sourceTexture=Fe}}}}for(let pe=0;pe<w.length;pe++){const De=A[pe],ge=w[pe];De!==null&&ge!==void 0&&ge.update(De,K,l||o)}$e&&$e($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),d=null}const Ke=new qh;Ke.setAnimationLoop(et),this.setAnimationLoop=function($){$e=$},this.dispose=function(){}}}const di=new gn,Og=new dt;function kg(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Bh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,E,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),d(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,b,E):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Gt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Gt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const b=e.get(m),E=b.envMap,S=b.envMapRotation;E&&(g.envMap.value=E,di.copy(S),di.x*=-1,di.y*=-1,di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),g.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(di)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,b,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const S=E.program;n.uniformBlockBinding(b,S)}function l(b,E){let S=s[b.id];S===void 0&&(d(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",g));const w=E.program;n.updateUBOMapping(b,w);const A=e.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const E=u();b.__bindingPointIndex=E;const S=i.createBuffer(),w=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=s[b.id],S=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=S.length;A<R;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,y=D.length;x<y;x++){const C=D[x];if(p(C,A,x,w)===!0){const F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let V=0;V<O.length;V++){const G=O[V],q=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,E,S,w){const A=b.value,R=E+"_"+S;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const D=w[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function d(b){const E=b.uniforms;let S=0;const w=16;for(let R=0,D=E.length;R<D;R++){const x=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,C=x.length;y<C;y++){const F=x[y],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,V=O.length;W<V;W++){const G=O[W],q=_(G),k=S%w,Q=k%q.boundary,oe=k+Q;S+=Q,oe!==0&&w-oe<q.storage&&(S+=w-oe),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=q.storage}}}const A=S%w;return A>0&&(S+=w-A),b.__size=S,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Hg{constructor(e={}){const{canvas:t=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let w=!1;this._outputColorSpace=Vt;let A=0,R=0,D=null,x=-1,y=null;const C=new st,F=new st;let O=null;const W=new de(0);let V=0,G=t.width,q=t.height,k=1,Q=null,oe=null;const ve=new st(0,0,G,q),ze=new st(0,0,G,q);let $e=!1;const et=new wl;let Ke=!1,$=!1;const K=new dt,pe=new L,De=new st,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Mt(){return D===null?k:1}let P=n;function ft(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const U="webgl2";if(P=ft(U,M),P===null)throw ft(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ke,Fe,Me,pt,ye,We,At,St,T,v,B,Y,Z,X,Te,re,Se,Ee,ne,ue,Ue,be,ce,He;function I(){ke=new Zm(P),ke.init(),be=new Ig(P,ke),Fe=new Wm(P,ke,e,be),Me=new Dg(P,ke),Fe.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),pt=new e0(P),ye=new vg,We=new Lg(P,ke,Me,ye,Fe,be,pt),At=new qm(S),St=new Km(S),T=new of(P),ce=new Vm(P,T),v=new Jm(P,T,pt,ce),B=new n0(P,v,T,pt),ne=new t0(P,Fe,We),re=new Xm(ye),Y=new _g(S,At,St,ke,Fe,ce,re),Z=new kg(S,ye),X=new Mg,Te=new wg(ke),Ee=new Hm(S,At,St,Me,B,p,c),Se=new Cg(S,B,Fe),He=new zg(P,pt,Fe,Me),ue=new Gm(P,ke,pt),Ue=new Qm(P,ke,pt),pt.programs=Y.programs,S.capabilities=Fe,S.extensions=ke,S.properties=ye,S.renderLists=X,S.shadowMap=Se,S.state=Me,S.info=pt}I();const ie=new Bg(S,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(G,q,!1))},this.getSize=function(M){return M.set(G,q)},this.setSize=function(M,U,z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,q=U,t.width=Math.floor(M*k),t.height=Math.floor(U*k),z===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(G*k,q*k).floor()},this.setDrawingBufferSize=function(M,U,z){G=M,q=U,k=z,t.width=Math.floor(M*z),t.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(ve)},this.setViewport=function(M,U,z,H){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,U,z,H),Me.viewport(C.copy(ve).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,U,z,H){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,U,z,H),Me.scissor(F.copy(ze).multiplyScalar(k).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){Me.setScissorTest($e=M)},this.setOpaqueSort=function(M){Q=M},this.setTransparentSort=function(M){oe=M},this.getClearColor=function(M){return M.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,z=!0){let H=0;if(M){let N=!1;if(D!==null){const te=D.texture.format;N=te===xl||te===vl||te===_l}if(N){const te=D.texture.type,he=te===Tn||te===Ci||te===Vs||te===Gs||te===ml||te===gl,_e=Ee.getClearColor(),fe=Ee.getClearAlpha(),Ie=_e.r,Be=_e.g,Re=_e.b;he?(d[0]=Ie,d[1]=Be,d[2]=Re,d[3]=fe,P.clearBufferuiv(P.COLOR,0,d)):(_[0]=Ie,_[1]=Be,_[2]=Re,_[3]=fe,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ee.dispose(),X.dispose(),Te.dispose(),ye.dispose(),At.dispose(),St.dispose(),B.dispose(),ce.dispose(),He.dispose(),Y.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",_n),ie.removeEventListener("sessionend",Vl),ri.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=pt.autoReset,U=Se.enabled,z=Se.autoUpdate,H=Se.needsUpdate,N=Se.type;I(),pt.autoReset=M,Se.enabled=U,Se.autoUpdate=z,Se.needsUpdate=H,Se.type=N}function ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function j(M){const U=M.target;U.removeEventListener("dispose",j),xe(U)}function xe(M){Oe(M),ye.remove(M)}function Oe(M){const U=ye.get(M).programs;U!==void 0&&(U.forEach(function(z){Y.releaseProgram(z)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,H,N,te){U===null&&(U=ge);const he=N.isMesh&&N.matrixWorld.determinant()<0,_e=Mu(M,U,z,H,N);Me.setMaterial(H,he);let fe=z.index,Ie=1;if(H.wireframe===!0){if(fe=v.getWireframeAttribute(z),fe===void 0)return;Ie=2}const Be=z.drawRange,Re=z.attributes.position;let Ye=Be.start*Ie,tt=(Be.start+Be.count)*Ie;te!==null&&(Ye=Math.max(Ye,te.start*Ie),tt=Math.min(tt,(te.start+te.count)*Ie)),fe!==null?(Ye=Math.max(Ye,0),tt=Math.min(tt,fe.count)):Re!=null&&(Ye=Math.max(Ye,0),tt=Math.min(tt,Re.count));const yt=tt-Ye;if(yt<0||yt===1/0)return;ce.setup(N,H,_e,z,fe);let ct,rt=ue;if(fe!==null&&(ct=T.get(fe),rt=Ue,rt.setIndex(ct)),N.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Mt()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(N.isLine){let Le=H.linewidth;Le===void 0&&(Le=1),Me.setLineWidth(Le*Mt()),N.isLineSegments?rt.setMode(P.LINES):N.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else N.isPoints?rt.setMode(P.POINTS):N.isSprite&&rt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,gt=N._multiDrawCounts,Ze=N._multiDrawCount,Xt=fe?T.get(fe).bytesPerElement:1,Di=ye.get(H).currentProgram.getUniforms();for(let qt=0;qt<Ze;qt++)Di.setValue(P,"_gl_DrawID",qt),rt.render(Le[qt]/Xt,gt[qt])}else if(N.isInstancedMesh)rt.renderInstances(Ye,yt,N.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Le);rt.renderInstances(Ye,yt,gt)}else rt.render(Ye,yt)};function at(M,U,z){M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=Gt,M.needsUpdate=!0,ir(M,U,z),M.side=Hn,M.needsUpdate=!0,ir(M,U,z),M.side=xn):ir(M,U,z)}this.compile=function(M,U,z=null){z===null&&(z=M),m=Te.get(z),m.init(U),E.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==z&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let he=0;he<te.length;he++){const _e=te[he];at(_e,z,N),H.add(_e)}else at(te,z,N),H.add(te)}),m=E.pop(),H},this.compileAsync=function(M,U,z=null){const H=this.compile(M,U,z);return new Promise(N=>{function te(){if(H.forEach(function(he){ye.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){N(M);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Qe=null;function wn(M){Qe&&Qe(M)}function _n(){ri.stop()}function Vl(){ri.start()}const ri=new qh;ri.setAnimationLoop(wn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(M){Qe=M,ie.setAnimationLoop(M),M===null?ri.stop():ri.start()},ie.addEventListener("sessionstart",_n),ie.addEventListener("sessionend",Vl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,D),m=Te.get(M,E.length),m.init(U),E.push(m),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(K,Sn,U.reversedDepth),$=this.localClippingEnabled,Ke=re.init(this.clippingPlanes,$),g=X.get(M,b.length),g.init(),b.push(g),ie.enabled===!0&&ie.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&po(te,U,-1/0,S.sortObjects)}po(M,U,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(Q,oe),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&Ee.addToRenderList(g,M),this.info.render.frame++,Ke===!0&&re.beginShadows();const z=m.state.shadowsArray;Se.render(z,M,U),Ke===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,N=g.transmissive;if(m.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let he=0,_e=te.length;he<_e;he++){const fe=te[he];Wl(H,N,M,fe)}Ge&&Ee.render(M);for(let he=0,_e=te.length;he<_e;he++){const fe=te[he];Gl(g,M,fe,fe.viewport)}}else N.length>0&&Wl(H,N,M,U),Ge&&Ee.render(M),Gl(g,M,U);D!==null&&R===0&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(S,M,U),ce.resetDefaultState(),x=-1,y=null,E.pop(),E.length>0?(m=E[E.length-1],Ke===!0&&re.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function po(M,U,z,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){H&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const he=B.update(M),_e=M.material;_e.visible&&g.push(M,he,_e,z,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){const he=B.update(M),_e=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(K)),Array.isArray(_e)){const fe=he.groups;for(let Ie=0,Be=fe.length;Ie<Be;Ie++){const Re=fe[Ie],Ye=_e[Re.materialIndex];Ye&&Ye.visible&&g.push(M,he,Ye,z,De.z,Re)}}else _e.visible&&g.push(M,he,_e,z,De.z,null)}}const te=M.children;for(let he=0,_e=te.length;he<_e;he++)po(te[he],U,z,H)}function Gl(M,U,z,H){const N=M.opaque,te=M.transmissive,he=M.transparent;m.setupLightsView(z),Ke===!0&&re.setGlobalState(S.clippingPlanes,z),H&&Me.viewport(C.copy(H)),N.length>0&&nr(N,U,z),te.length>0&&nr(te,U,z),he.length>0&&nr(he,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Wl(M,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new fn(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?On:Tn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const te=m.state.transmissionRenderTarget[H.id],he=H.viewport||C;te.setSize(he.z*S.transmissionResolutionScale,he.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),fe=S.getActiveCubeFace(),Ie=S.getActiveMipmapLevel();S.setRenderTarget(te),S.getClearColor(W),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&Ee.render(z);const Be=S.toneMapping;S.toneMapping=Jn;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Ke===!0&&re.setGlobalState(S.clippingPlanes,H),nr(M,z,H),We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let tt=0,yt=U.length;tt<yt;tt++){const ct=U[tt],rt=ct.object,Le=ct.geometry,gt=ct.material,Ze=ct.group;if(gt.side===xn&&rt.layers.test(H.layers)){const Xt=gt.side;gt.side=Gt,gt.needsUpdate=!0,Xl(rt,z,H,Le,gt,Ze),gt.side=Xt,gt.needsUpdate=!0,Ye=!0}}Ye===!0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te))}S.setRenderTarget(_e,fe,Ie),S.setClearColor(W,V),Re!==void 0&&(H.viewport=Re),S.toneMapping=Be}function nr(M,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=M.length;N<te;N++){const he=M[N],_e=he.object,fe=he.geometry,Ie=he.group;let Be=he.material;Be.allowOverride===!0&&H!==null&&(Be=H),_e.layers.test(z.layers)&&Xl(_e,U,z,fe,Be,Ie)}}function Xl(M,U,z,H,N,te){M.onBeforeRender(S,U,z,H,N,te),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,U,z,H,M,te),N.transparent===!0&&N.side===xn&&N.forceSinglePass===!1?(N.side=Gt,N.needsUpdate=!0,S.renderBufferDirect(z,U,H,N,M,te),N.side=Hn,N.needsUpdate=!0,S.renderBufferDirect(z,U,H,N,M,te),N.side=xn):S.renderBufferDirect(z,U,H,N,M,te),M.onAfterRender(S,U,z,H,N,te)}function ir(M,U,z){U.isScene!==!0&&(U=ge);const H=ye.get(M),N=m.state.lights,te=m.state.shadowsArray,he=N.state.version,_e=Y.getParameters(M,N.state,te,U,z),fe=Y.getProgramCacheKey(_e);let Ie=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?St:At).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",j),Ie=new Map,H.programs=Ie);let Be=Ie.get(fe);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===he)return Yl(M,_e),Be}else _e.uniforms=Y.getUniforms(M),M.onBeforeCompile(_e,S),Be=Y.acquireProgram(_e,fe),Ie.set(fe,Be),H.uniforms=_e.uniforms;const Re=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=re.uniform),Yl(M,_e),H.needsLights=Su(M),H.lightsStateVersion=he,H.needsLights&&(Re.ambientLightColor.value=N.state.ambient,Re.lightProbe.value=N.state.probe,Re.directionalLights.value=N.state.directional,Re.directionalLightShadows.value=N.state.directionalShadow,Re.spotLights.value=N.state.spot,Re.spotLightShadows.value=N.state.spotShadow,Re.rectAreaLights.value=N.state.rectArea,Re.ltc_1.value=N.state.rectAreaLTC1,Re.ltc_2.value=N.state.rectAreaLTC2,Re.pointLights.value=N.state.point,Re.pointLightShadows.value=N.state.pointShadow,Re.hemisphereLights.value=N.state.hemi,Re.directionalShadowMap.value=N.state.directionalShadowMap,Re.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Re.spotShadowMap.value=N.state.spotShadowMap,Re.spotLightMatrix.value=N.state.spotLightMatrix,Re.spotLightMap.value=N.state.spotLightMap,Re.pointShadowMap.value=N.state.pointShadowMap,Re.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function ql(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Or.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Yl(M,U){const z=ye.get(M);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Mu(M,U,z,H,N){U.isScene!==!0&&(U=ge),We.resetTextureUnits();const te=U.fog,he=H.isMeshStandardMaterial?U.environment:null,_e=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:hs,fe=(H.isMeshStandardMaterial?St:At).get(H.envMap||he),Ie=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,tt=!!z.morphAttributes.color;let yt=Jn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=S.toneMapping);const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,rt=ct!==void 0?ct.length:0,Le=ye.get(H),gt=m.state.lights;if(Ke===!0&&($===!0||M!==y)){const kt=M===y&&H.id===x;re.setState(H,M,kt)}let Ze=!1;H.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==gt.state.version||Le.outputColorSpace!==_e||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==fe||H.fog===!0&&Le.fog!==te||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==Ie||Le.vertexTangents!==Be||Le.morphTargets!==Re||Le.morphNormals!==Ye||Le.morphColors!==tt||Le.toneMapping!==yt||Le.morphTargetsCount!==rt)&&(Ze=!0):(Ze=!0,Le.__version=H.version);let Xt=Le.currentProgram;Ze===!0&&(Xt=ir(H,U,N));let Di=!1,qt=!1,ys=!1;const _t=Xt.getUniforms(),en=Le.uniforms;if(Me.useProgram(Xt.program)&&(Di=!0,qt=!0,ys=!0),H.id!==x&&(x=H.id,qt=!0),Di||y!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(P,"projectionMatrix",M.projectionMatrix),_t.setValue(P,"viewMatrix",M.matrixWorldInverse);const Wt=_t.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,pe.setFromMatrixPosition(M.matrixWorld)),Fe.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,qt=!0,ys=!0)}if(N.isSkinnedMesh){_t.setOptional(P,N,"bindMatrix"),_t.setOptional(P,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(P,"boneTexture",kt.boneTexture,We))}N.isBatchedMesh&&(_t.setOptional(P,N,"batchingTexture"),_t.setValue(P,"batchingTexture",N._matricesTexture,We),_t.setOptional(P,N,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",N._indirectTexture,We),_t.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",N._colorsTexture,We));const tn=z.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&ne.update(N,z,Xt),(qt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,_t.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=fe,en.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),qt&&(_t.setValue(P,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&yu(en,ys),te&&H.fog===!0&&Z.refreshFogUniforms(en,te),Z.refreshMaterialUniforms(en,H,k,q,m.state.transmissionRenderTarget[M.id]),Or.upload(P,ql(Le),en,We)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Or.upload(P,ql(Le),en,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(P,"center",N.center),_t.setValue(P,"modelViewMatrix",N.modelViewMatrix),_t.setValue(P,"normalMatrix",N.normalMatrix),_t.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const kt=H.uniformsGroups;for(let Wt=0,mo=kt.length;Wt<mo;Wt++){const oi=kt[Wt];He.update(oi,Xt),He.bind(oi,Xt)}}return Xt}function yu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,z){const H=ye.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=U,ye.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const z=ye.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Eu=P.createFramebuffer();this.setRenderTarget=function(M,U=0,z=0){D=M,A=U,R=z;let H=!0,N=null,te=!1,he=!1;if(M){const fe=ye.get(M);if(fe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(fe.__webglFramebuffer===void 0)We.setupRenderTarget(M);else if(fe.__hasExternalTextures)We.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(fe.__boundDepthTexture!==Re){if(Re!==null&&ye.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(he=!0);const Be=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?N=Be[U][z]:N=Be[U],te=!0):M.samples>0&&We.useMultisampledRTT(M)===!1?N=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?N=Be[z]:N=Be,C.copy(M.viewport),F.copy(M.scissor),O=M.scissorTest}else C.copy(ve).multiplyScalar(k).floor(),F.copy(ze).multiplyScalar(k).floor(),O=$e;if(z!==0&&(N=Eu),Me.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&Me.drawBuffers(M,N),Me.viewport(C),Me.scissor(F),Me.setScissorTest(O),te){const fe=ye.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,z)}else if(he){const fe=U;for(let Ie=0;Ie<M.textures.length;Ie++){const Be=ye.get(M.textures[Ie]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ie,Be.__webglTexture,z,fe)}}else if(M!==null&&z!==0){const fe=ye.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fe.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(M,U,z,H,N,te,he,_e=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe){Me.bindFramebuffer(P.FRAMEBUFFER,fe);try{const Ie=M.textures[_e],Be=Ie.format,Re=Ie.type;if(!Fe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(U,z,H,N,be.convert(Be),be.convert(Re),te))}finally{const Ie=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,U,z,H,N,te,he,_e=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(fe=fe[he]),fe)if(U>=0&&U<=M.width-H&&z>=0&&z<=M.height-N){Me.bindFramebuffer(P.FRAMEBUFFER,fe);const Ie=M.textures[_e],Be=Ie.format,Re=Ie.type;if(!Fe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+_e),P.readPixels(U,z,H,N,be.convert(Be),be.convert(Re),0);const tt=D!==null?ye.get(D).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,tt);const yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await pd(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Ye),P.deleteSync(yt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,z=0){const H=Math.pow(2,-z),N=Math.floor(M.image.width*H),te=Math.floor(M.image.height*H),he=U!==null?U.x:0,_e=U!==null?U.y:0;We.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,he,_e,N,te),Me.unbindTexture()};const bu=P.createFramebuffer(),Tu=P.createFramebuffer();this.copyTextureToTexture=function(M,U,z=null,H=null,N=0,te=null){te===null&&(N!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let he,_e,fe,Ie,Be,Re,Ye,tt,yt;const ct=M.isCompressedTexture?M.mipmaps[te]:M.image;if(z!==null)he=z.max.x-z.min.x,_e=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,Be=z.min.y,Re=z.isBox3?z.min.z:0;else{const tn=Math.pow(2,-N);he=Math.floor(ct.width*tn),_e=Math.floor(ct.height*tn),M.isDataArrayTexture?fe=ct.depth:M.isData3DTexture?fe=Math.floor(ct.depth*tn):fe=1,Ie=0,Be=0,Re=0}H!==null?(Ye=H.x,tt=H.y,yt=H.z):(Ye=0,tt=0,yt=0);const rt=be.convert(U.format),Le=be.convert(U.type);let gt;U.isData3DTexture?(We.setTexture3D(U,0),gt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(We.setTexture2DArray(U,0),gt=P.TEXTURE_2D_ARRAY):(We.setTexture2D(U,0),gt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=P.getParameter(P.UNPACK_ROW_LENGTH),Xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Di=P.getParameter(P.UNPACK_SKIP_PIXELS),qt=P.getParameter(P.UNPACK_SKIP_ROWS),ys=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(P.UNPACK_SKIP_ROWS,Be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const _t=M.isDataArrayTexture||M.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const tn=ye.get(M),kt=ye.get(U),Wt=ye.get(tn.__renderTarget),mo=ye.get(kt.__renderTarget);Me.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let oi=0;oi<fe;oi++)_t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,N,Re+oi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,te,yt+oi)),P.blitFramebuffer(Ie,Be,he,_e,Ye,tt,he,_e,P.DEPTH_BUFFER_BIT,P.NEAREST);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||ye.has(M)){const tn=ye.get(M),kt=ye.get(U);Me.bindFramebuffer(P.READ_FRAMEBUFFER,bu),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tu);for(let Wt=0;Wt<fe;Wt++)_t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,N,Re+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,N),en?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,te,yt+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,te),N!==0?P.blitFramebuffer(Ie,Be,he,_e,Ye,tt,he,_e,P.COLOR_BUFFER_BIT,P.NEAREST):en?P.copyTexSubImage3D(gt,te,Ye,tt,yt+Wt,Ie,Be,he,_e):P.copyTexSubImage2D(gt,te,Ye,tt,Ie,Be,he,_e);Me.bindFramebuffer(P.READ_FRAMEBUFFER,null),Me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(gt,te,Ye,tt,yt,he,_e,fe,rt,Le,ct.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(gt,te,Ye,tt,yt,he,_e,fe,rt,ct.data):P.texSubImage3D(gt,te,Ye,tt,yt,he,_e,fe,rt,Le,ct):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Ye,tt,he,_e,rt,Le,ct.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Ye,tt,ct.width,ct.height,rt,ct.data):P.texSubImage2D(P.TEXTURE_2D,te,Ye,tt,he,_e,rt,Le,ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ze),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Di),P.pixelStorei(P.UNPACK_SKIP_ROWS,qt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ys),te===0&&U.generateMipmaps&&P.generateMipmap(gt),Me.unbindTexture()},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&We.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?We.setTextureCube(M,0):M.isData3DTexture?We.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?We.setTexture2DArray(M,0):We.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,Me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ce={air:{id:0,name:"Air",solid:!1},grass:{id:1,name:"Grass",solid:!0,hardness:.6,color:6203463,tex:{top:0,side:3,bottom:2},biomeTint:!0},dirt:{id:2,name:"Dirt",solid:!0,hardness:.5,color:8081971,tex:{all:2}},stone:{id:3,name:"Stone",solid:!0,hardness:1.5,color:9276813,tex:{all:1},drop:"cobblestone"},wood:{id:4,name:"Wood",solid:!0,hardness:1,color:9069115,tex:{side:4,top:5,bottom:5}},leaves:{id:5,name:"Leaves",solid:!0,hardness:.2,color:4160053,tex:{all:6},biomeTint:!0,dropChance:{apple:.06}},sand:{id:6,name:"Sand",solid:!0,hardness:.5,color:14274447,tex:{all:7}},water:{id:7,name:"Water",solid:!1,liquid:!0,color:3827400,tex:{all:8}},coal_ore:{id:8,name:"Coal Ore",solid:!0,hardness:1.5,color:5197647,tex:{all:9},drop:"coal"},iron_ore:{id:9,name:"Iron Ore",solid:!0,hardness:2,color:11894625,tex:{all:10}},cobblestone:{id:10,name:"Cobblestone",solid:!0,hardness:2,color:8026746,tex:{all:11}},planks:{id:11,name:"Planks",solid:!0,hardness:1,color:12358744,tex:{all:12}},glass:{id:12,name:"Glass",solid:!0,hardness:.3,color:13166847,tex:{all:13},transparent:!0},bedrock:{id:13,name:"Bedrock",solid:!0,hardness:-1,color:3355443,tex:{all:14}},gravel:{id:14,name:"Gravel",solid:!0,hardness:.6,color:8024690,tex:{all:15}},tallgrass:{id:15,name:"Tall Grass",solid:!1,hardness:0,color:6203463,tex:{all:32},decoration:!0,biomeTint:!0},flower_red:{id:16,name:"Red Flower",solid:!1,hardness:0,color:16724787,tex:{all:33},decoration:!0},flower_yellow:{id:17,name:"Yellow Flower",solid:!1,hardness:0,color:16777011,tex:{all:34},decoration:!0},snow:{id:18,name:"Snow",solid:!0,hardness:.2,color:15790320,tex:{all:19}},torch:{id:19,name:"Torch",solid:!1,hardness:0,color:16755251,tex:{all:28},decoration:!0,lightLevel:14},brick:{id:20,name:"Brick",solid:!0,hardness:1.5,color:10177084,tex:{all:16}},obsidian:{id:21,name:"Obsidian",solid:!0,hardness:5,color:1706542,tex:{all:17}},bookshelf:{id:22,name:"Bookshelf",solid:!0,hardness:1,color:9069115,tex:{side:18,top:2,bottom:2}},wool:{id:23,name:"Wool",solid:!0,hardness:.8,color:15790320,tex:{all:20}},crafting_table:{id:24,name:"Crafting Table",solid:!0,hardness:1,color:9069115,tex:{side:22,top:21,bottom:12}},ladder:{id:25,name:"Ladder",solid:!1,hardness:.4,color:9069115,tex:{all:27},decoration:!0},clay:{id:26,name:"Clay",solid:!0,hardness:.6,color:10396850,tex:{all:23}},gold_ore:{id:27,name:"Gold Ore",solid:!0,hardness:3,color:16576078,tex:{all:24}},diamond_ore:{id:28,name:"Diamond Ore",solid:!0,hardness:4,color:4516064,tex:{all:25},drop:"diamond"},mossy_cobblestone:{id:29,name:"Mossy Cobblestone",solid:!0,hardness:2,color:6982250,tex:{all:26}},furnace:{id:30,name:"Furnace",solid:!0,hardness:3.5,color:9276813,tex:{side:16,top:16,bottom:16}},bed:{id:31,name:"Bed",solid:!1,hardness:.2,color:16724787,tex:{all:20},decoration:!0},sandstone:{id:32,name:"Sandstone",solid:!0,hardness:1,color:14274447,tex:{all:7}},gold_block:{id:33,name:"Gold Block",solid:!0,hardness:3,color:16576078,tex:{all:24}},diamond_block:{id:34,name:"Diamond Block",solid:!0,hardness:4,color:4516064,tex:{all:25}},dead_bush:{id:35,name:"Dead Bush",solid:!1,hardness:0,color:9072187,tex:{all:34},decoration:!0},vines:{id:36,name:"Vines",solid:!1,hardness:0,color:4160053,tex:{all:27},decoration:!0,biomeTint:!0}},nl=Object.fromEntries(Object.values(Ce).map(i=>[i.id,i])),Zh=Object.fromEntries(Object.entries(Ce).map(([i,e])=>[e.id,i])),Vg=["grass","dirt","stone","wood","cobblestone","planks","glass","sand","water","torch"],Kc=[{id:"sheep",hp:8,speed:1.2,color:16777215,passive:!0,drops:[{item:"wool",min:1,max:3}]},{id:"pig",hp:10,speed:1.3,color:15769760,passive:!0,drops:[{item:"raw_porkchop",min:1,max:3}]},{id:"chicken",hp:4,speed:1,color:16777215,passive:!0,drops:[{item:"raw_chicken",min:1,max:2},{item:"feather",min:0,max:2}]},{id:"zombie",hp:20,speed:1.5,color:6065482,passive:!1,damage:3,drops:[{item:"rotten_flesh",min:0,max:2}],xp:5},{id:"skeleton",hp:20,speed:1.4,color:13684936,passive:!1,damage:4,drops:[{item:"bone",min:0,max:2},{item:"arrow",min:0,max:2}],xp:5,ranged:!0},{id:"creeper",hp:20,speed:1.2,color:4243520,passive:!1,damage:0,drops:[{item:"gunpowder",min:0,max:2}],xp:5,explosive:!0}];function Ll(i){const e=[];for(const t of i.drops||[]){const n=t.min+Math.floor(Math.random()*(t.max-t.min+1));n>0&&e.push({item:t.item,count:n})}return e}const Bt={wooden_pickaxe:{name:"Wooden Pickaxe",maxDurability:59,speed:2,type:"pickaxe",tier:0,color:"#a07850",emoji:"⛏"},stone_pickaxe:{name:"Stone Pickaxe",maxDurability:131,speed:4,type:"pickaxe",tier:1,color:"#909090",emoji:"⛏"},iron_pickaxe:{name:"Iron Pickaxe",maxDurability:250,speed:6,type:"pickaxe",tier:2,color:"#c8c8c8",emoji:"⛏"},diamond_pickaxe:{name:"Diamond Pickaxe",maxDurability:1561,speed:8,type:"pickaxe",tier:3,color:"#44e8e0",emoji:"⛏"},wooden_axe:{name:"Wooden Axe",maxDurability:59,speed:2,type:"axe",tier:0,color:"#a07850",emoji:"🪓"},stone_axe:{name:"Stone Axe",maxDurability:131,speed:4,type:"axe",tier:1,color:"#909090",emoji:"🪓"},iron_axe:{name:"Iron Axe",maxDurability:250,speed:6,type:"axe",tier:2,color:"#c8c8c8",emoji:"🪓"},wooden_shovel:{name:"Wooden Shovel",maxDurability:59,speed:2,type:"shovel",tier:0,color:"#a07850",emoji:"🪛"},stone_shovel:{name:"Stone Shovel",maxDurability:131,speed:4,type:"shovel",tier:1,color:"#909090",emoji:"🪛"},wooden_sword:{name:"Wooden Sword",maxDurability:59,damage:5,type:"sword",tier:0,color:"#a07850",emoji:"⚔"},stone_sword:{name:"Stone Sword",maxDurability:131,damage:6,type:"sword",tier:1,color:"#909090",emoji:"⚔"},iron_sword:{name:"Iron Sword",maxDurability:250,damage:7,type:"sword",tier:2,color:"#c8c8c8",emoji:"⚔"},diamond_sword:{name:"Diamond Sword",maxDurability:1561,damage:9,type:"sword",tier:3,color:"#44e8e0",emoji:"⚔"},bow:{name:"Bow",maxDurability:384,damage:1,type:"bow",tier:0,color:"#8b6914",emoji:"🏹"}},yi=new Set(Object.keys(Bt)),Gg={pickaxe:new Set(["stone","cobblestone","coal_ore","iron_ore","gold_ore","diamond_ore","brick","obsidian","mossy_cobblestone","gravel"]),axe:new Set(["wood","planks","bookshelf","crafting_table","leaves"]),shovel:new Set(["dirt","grass","sand","gravel","clay","snow"])};function Wg(i,e){const t=Bt[i];if(!t||!t.speed)return 1;const n=Gg[t.type];return n&&n.has(e)?t.speed:1}function Xg(i){return Bt[i]?.damage??3}function qg(i){const e=Math.max(0,Math.min(1,i));return Math.floor(2+e*7)}const Si={apple:{name:"Apple",hunger:4,saturation:2.4,color:"#e83333",emoji:"🍎"},bread:{name:"Bread",hunger:5,saturation:6,color:"#c8a050",emoji:"🍞"},raw_porkchop:{name:"Raw Porkchop",hunger:3,saturation:1.8,color:"#f0a0a0",emoji:"🥩"},cooked_porkchop:{name:"Cooked Porkchop",hunger:8,saturation:12.8,color:"#8b4513",emoji:"🍖"},raw_chicken:{name:"Raw Chicken",hunger:2,saturation:1.2,color:"#ffe0c0",emoji:"🍗"},cooked_chicken:{name:"Cooked Chicken",hunger:6,saturation:7.2,color:"#d4a856",emoji:"🍗"},cookie:{name:"Cookie",hunger:2,saturation:.4,color:"#c8a050",emoji:"🍪"},rotten_flesh:{name:"Rotten Flesh",hunger:4,saturation:.8,color:"#7a5f3a",poison:!0,emoji:"🦴"}},il=new Set(Object.keys(Si)),Pr={iron_ingot:{name:"Iron Ingot",color:"#c8c8c8",emoji:"🔩"},gold_ingot:{name:"Gold Ingot",color:"#ffd700",emoji:"🔩"},coal:{name:"Coal",color:"#333333",emoji:"🪨"},sticks:{name:"Sticks",color:"#a07850",emoji:"🪵"},bone:{name:"Bone",color:"#d8d8c0",emoji:"🦴"},feather:{name:"Feather",color:"#f0f0f0",emoji:"🪶"},gunpowder:{name:"Gunpowder",color:"#555555",emoji:"💣"},arrow:{name:"Arrow",color:"#8b6914",emoji:"🏹"},diamond:{name:"Diamond",color:"#44e8e0",emoji:"💎"},string:{name:"String",color:"#e0e0e0",emoji:"🧵"},leather:{name:"Leather",color:"#8b5a2b",emoji:"🟫"},flint:{name:"Flint",color:"#444444",emoji:"🪨"}},Dt={leather_helmet:{name:"Leather Cap",slot:"helmet",material:"leather",damageReduction:1,maxDurability:55,color:"#8b5a2b",emoji:"🪖"},leather_chestplate:{name:"Leather Tunic",slot:"chestplate",material:"leather",damageReduction:3,maxDurability:80,color:"#8b5a2b",emoji:"👕"},leather_leggings:{name:"Leather Pants",slot:"leggings",material:"leather",damageReduction:2,maxDurability:75,color:"#8b5a2b",emoji:"👖"},leather_boots:{name:"Leather Boots",slot:"boots",material:"leather",damageReduction:1,maxDurability:65,color:"#8b5a2b",emoji:"👢"},iron_helmet:{name:"Iron Helmet",slot:"helmet",material:"iron",damageReduction:2,maxDurability:165,color:"#c8c8c8",emoji:"🪖"},iron_chestplate:{name:"Iron Chestplate",slot:"chestplate",material:"iron",damageReduction:6,maxDurability:240,color:"#c8c8c8",emoji:"👕"},iron_leggings:{name:"Iron Leggings",slot:"leggings",material:"iron",damageReduction:5,maxDurability:225,color:"#c8c8c8",emoji:"👖"},iron_boots:{name:"Iron Boots",slot:"boots",material:"iron",damageReduction:2,maxDurability:195,color:"#c8c8c8",emoji:"👢"},diamond_helmet:{name:"Diamond Helmet",slot:"helmet",material:"diamond",damageReduction:3,maxDurability:363,color:"#44e8e0",emoji:"🪖"},diamond_chestplate:{name:"Diamond Chestplate",slot:"chestplate",material:"diamond",damageReduction:8,maxDurability:528,color:"#44e8e0",emoji:"👕"},diamond_leggings:{name:"Diamond Leggings",slot:"leggings",material:"diamond",damageReduction:6,maxDurability:495,color:"#44e8e0",emoji:"👖"},diamond_boots:{name:"Diamond Boots",slot:"boots",material:"diamond",damageReduction:3,maxDurability:429,color:"#44e8e0",emoji:"👢"}},sl=new Set(Object.keys(Dt));function Yg(){return{helmet:null,chestplate:null,leggings:null,boots:null}}class $g{constructor(){this.map=new Map}get(e){return Dt[e]?this.map.get(e)??Dt[e].maxDurability:0}damage(e){if(!Dt[e])return!1;const t=this.get(e)-1;return t<=0?(this.map.delete(e),!0):(this.map.set(e,t),!1)}set(e,t){this.map.set(e,t)}}class jg{constructor(e,t){this.camera=e,this.domElement=t,this.position=new L(0,40,0),this.velocity=new L,this.rotation=new Ae,this.speed=7,this.sprintSpeed=11,this.jumpForce=8,this.gravity=22,this.eyeHeight=1.62,this.crouchEyeHeight=1.15,this.bodyHeight=1.8,this.crouchBodyHeight=1.4,this.bodyRadius=.31,this.grounded=!1,this.keys=new Set,this.sprinting=!1,this.flying=!1,this.crouching=!1,this.coyoteTime=0,this.fallStartY=null,window.addEventListener("keydown",n=>this.keys.add(n.code)),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("mousemove",n=>{document.pointerLockElement===this.domElement&&(this.rotation.x-=n.movementX*.002,this.rotation.y=Math.max(-1.5,Math.min(1.5,this.rotation.y-n.movementY*.002)))})}isInWater(e){const t=Math.floor(this.position.x),n=Math.floor(this.position.y),s=Math.floor(this.position.z);return e.getBlock(t,n,s).liquid}collides(e,t){const n=Math.floor(t.x-this.bodyRadius),s=Math.floor(t.x+this.bodyRadius),r=Math.floor(t.y-this.eyeHeight),o=Math.floor(t.y-this.eyeHeight+this.bodyHeight-.001),a=Math.floor(t.z-this.bodyRadius),c=Math.floor(t.z+this.bodyRadius);for(let l=r;l<=o;l++)for(let h=a;h<=c;h++)for(let u=n;u<=s;u++)if(e.getBlock(u,l,h).solid)return!0;return!1}moveAxis(e,t,n){if(!n)return;const s=Math.ceil(Math.abs(n)/.05),r=n/s;for(let o=0;o<s;o++){const a=this.position.clone();if(a[t]+=r,this.collides(e,a)){t==="y"&&(r<0&&(this.grounded=!0),this.velocity.y=0);return}this.position.copy(a)}}resolvePenetration(e){if(!this.collides(e,this.position))return!1;const t=this.position.clone(),n=[[0,0],[.2,0],[-.2,0],[0,.2],[0,-.2],[.2,.2],[-.2,.2],[.2,-.2],[-.2,-.2],[.4,0],[-.4,0],[0,.4],[0,-.4]];for(let s=0;s<=16;s++){const r=s*.25;for(const[o,a]of n){const c=new L(t.x+o,t.y+r,t.z+a);if(!this.collides(e,c))return this.position.copy(c),r>0&&this.velocity.y<0&&(this.velocity.y=0),!0}}return!1}update(e,t){this.resolvePenetration(t);const n=this.rotation.x,s=new L(-Math.sin(n),0,-Math.cos(n)).normalize(),r=new L().crossVectors(s,new L(0,1,0)).normalize(),o=new L;if(this.keys.has("KeyW")&&o.add(s),this.keys.has("KeyS")&&o.sub(s),this.keys.has("KeyA")&&o.sub(r),this.keys.has("KeyD")&&o.add(r),this.flying){const f=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?this.sprintSpeed*1.5:this.speed*1.5;this.keys.has("Space")&&(o.y+=1),(this.keys.has("ControlLeft")||this.keys.has("ControlRight"))&&(o.y-=1),o.lengthSq()>0&&o.normalize().multiplyScalar(f*e),this.position.add(o),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotation.x,this.camera.rotation.x=this.rotation.y;return}this.crouching=!this.flying&&(this.keys.has("ControlLeft")||this.keys.has("ControlRight")),this.sprinting=!this.crouching&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"));const a=this.isInWater(t),c=a?.4:1,l=this.crouching?this.speed*.35:this.sprinting?this.sprintSpeed:this.speed;o.lengthSq()>0&&o.normalize().multiplyScalar(l*c*e),a?(this.velocity.y-=this.gravity*.3*e,this.keys.has("Space")&&(this.velocity.y+=10*e),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&(this.velocity.y-=8*e),this.velocity.y*=.85):(this.velocity.y-=this.gravity*e,this.keys.has("Space")&&(this.grounded||this.coyoteTime>0)&&!this.crouching&&(this.velocity.y=this.jumpForce,this.grounded=!1,this.coyoteTime=0));const h=this.grounded;if(this.grounded=!1,this.moveAxis(t,"x",o.x),this.moveAxis(t,"z",o.z),this.moveAxis(t,"y",this.velocity.y*e),this.resolvePenetration(t),this.grounded){if(this.coyoteTime=.12,this.fallStartY!==null){const f=this.fallStartY-this.position.y;f>4&&(this.fallDamage=f),this.fallStartY=null}}else h?(this.coyoteTime=.12,this.fallStartY=this.position.y):this.coyoteTime=Math.max(0,this.coyoteTime-e);const u=this.crouching?this.crouchEyeHeight:this.eyeHeight;this.camera.position.copy(this.position),this.camera.position.y-=this.eyeHeight-u,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotation.x,this.camera.rotation.x=this.rotation.y}}const kr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Js{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kg=new Pl(-1,1,1,-1,0,1);class Zg extends Ot{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const Jg=new Zg;class Jh{constructor(e){this._mesh=new lt(Jg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qg extends Js{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qr.clone(e.uniforms),this.material=new Ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Jh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Zc extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class e_ extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class t_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:On}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qg(kr),this.copyPass.material.blending=Bn,this.clock=new nf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zc!==void 0&&(o instanceof Zc?n=!0:o instanceof e_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class n_ extends Js{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const i_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fs extends Js{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(r,o,{type:On}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new fn(r,o,{type:On});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new fn(r,o,{type:On});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=i_;this.highPassUniforms=qr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qr.clone(kr.uniforms),this.blendMaterial=new Ft({uniforms:this.copyUniforms,vertexShader:kr.vertexShader,fragmentShader:kr.fragmentShader,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new bn,this._fsQuad=new Jh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=fs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=fs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fs.BlurDirectionX=new Ae(1,0);fs.BlurDirectionY=new Ae(0,1);const rl=new de(8306926),Jc=new de(657952),Qc=new de(16750950);function s_(i){const e=new Od;e.background=new de(rl);const t=new Kt(75,window.innerWidth/window.innerHeight,.1,1e3),n=new Hg({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(n.domElement),n.shadowMap.enabled=!0,n.shadowMap.type=yh;const s=new ef(16777215,.55);e.add(s);const r=new Qd(16773841,.85);r.position.set(20,45,20),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.camera.near=.5,r.shadow.camera.far=200,r.shadow.bias=-5e-4,r.shadow.normalBias=.02,e.add(r);const o=new t_(n),a=new n_(e,t);o.addPass(a);const c=new fs(new Ae(window.innerWidth,window.innerHeight),.5,.4,.6);return o.addPass(c),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)}),{scene:e,camera:t,renderer:n,sun:r,ambient:s,composer:o}}function r_(i){const e=Math.sin(i);return e>.1?rl.clone():e<-.3?Jc.clone():e>0?rl.clone().lerp(Qc,(.1-e)/.1):Qc.clone().lerp(Jc,-e/.3)}class o_{constructor(){this.ws=null,this.handlers=new Map}connect(e){this.ws=new WebSocket(e),this.ws.onmessage=t=>{let n;try{n=JSON.parse(t.data)}catch{return}n?.type&&(this.handlers.get(n.type)||[]).forEach(s=>s(n))}}on(e,t){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(t)}send(e,t){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:e,...t}))}}const ol=10;function a_(){const i=[];for(let e=0;e<ol;e++){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.clearRect(0,0,64,64);let r=e*137+42;const o=()=>(r=r*16807%2147483647,r/2147483647);n.strokeStyle="#000000",n.lineWidth=2,n.lineCap="square";const a=e*3+2;for(let l=0;l<a;l++){let h=Math.floor(o()*56)+4,u=Math.floor(o()*56)+4;n.beginPath(),n.moveTo(h,u);const f=3+Math.floor(o()*4);for(let p=0;p<f;p++)h+=Math.floor((o()-.5)*18),u+=Math.floor((o()-.5)*18),h=Math.max(2,Math.min(62,h)),u=Math.max(2,Math.min(62,u)),n.lineTo(h,u);n.stroke()}const c=new si(t);c.magFilter=bt,c.minFilter=bt,c.colorSpace=Vt,c.needsUpdate=!0,i.push(c)}return i}class l_{constructor(e){this.scene=e,this.textures=a_(),this.material=new bn({transparent:!0,opacity:.9,alphaTest:.1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,side:Hn}),this.mesh=new lt(new Qt(1.002,1.002,1.002),this.material),this.mesh.visible=!1,this.scene.add(this.mesh),this.stage=-1}start(e,t,n){this.mesh.position.set(e+.5,t+.5,n+.5),this.mesh.visible=!0,this.stage=-1,this.material.map=null}stop(){this.mesh.visible=!1,this.stage=-1,this.material.map=null}setProgress(e){const t=Math.min(ol-1,Math.max(0,Math.floor(e*ol)));t!==this.stage&&(this.stage=t,this.material.map=this.textures[t],this.material.needsUpdate=!0)}}const se=new(window.AudioContext||window.webkitAudioContext);function Il(i=.1){const e=se.sampleRate,t=i*e,n=se.createBuffer(1,t,e),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}function mt(i,e,t){const n=se.createBufferSource();n.buffer=Il(i);const s=se.createBiquadFilter();s.type="lowpass",s.frequency.value=t;const r=se.createGain();r.gain.value=e,n.connect(s),s.connect(r),r.connect(se.destination),n.start(),n.stop(se.currentTime+i)}function Ei(i,e,t,n="square"){const s=se.createOscillator();s.type=n,s.frequency.value=i;const r=se.createGain();r.gain.setValueAtTime(t,se.currentTime),r.gain.exponentialRampToValueAtTime(.001,se.currentTime+e),s.connect(r),r.connect(se.destination),s.start(),s.stop(se.currentTime+e)}const jn={stone:()=>mt(.08,.35,1800),dirt:()=>mt(.1,.25,600),grass:()=>mt(.1,.25,600),wood:()=>Ei(180,.06,.2,"sawtooth"),sand:()=>mt(.12,.2,400),leaves:()=>mt(.05,.15,1200),water:()=>mt(.08,.1,800),default:()=>mt(.08,.25,1200)};function c_(i){const e=i.toLowerCase().replace(/\s/g,"_");return e.includes("stone")||e.includes("ore")?jn.stone:e.includes("dirt")?jn.dirt:e.includes("grass")?jn.grass:e.includes("wood")||e.includes("plank")||e.includes("tree")?jn.wood:e.includes("sand")?jn.sand:e.includes("leaves")?jn.leaves:e.includes("water")?jn.water:jn.default}function h_(i){se.state==="suspended"&&se.resume(),c_(i)()}function u_(i){se.state==="suspended"&&se.resume();const e=i.toLowerCase().replace(/\s/g,"_");e.includes("stone")||e.includes("ore")?mt(.05,.2,1800):e.includes("dirt")||e.includes("grass")?mt(.06,.15,600):e.includes("wood")||e.includes("plank")||e.includes("tree")?Ei(220,.04,.15,"sawtooth"):e.includes("sand")?mt(.07,.12,400):e.includes("leaves")?mt(.03,.1,1200):mt(.05,.15,1200)}function d_(i){se.state==="suspended"&&se.resume();const e=i.toLowerCase().replace(/\s/g,"_");e.includes("stone")||e.includes("ore")?mt(.03,.12,1800):e.includes("dirt")||e.includes("grass")?mt(.03,.08,600):e.includes("wood")||e.includes("plank")?Ei(200,.02,.08,"sawtooth"):e.includes("sand")?mt(.04,.06,400):mt(.03,.08,1200)}function f_(i="day"){se.state==="suspended"&&se.resume();const e=se.createOscillator(),t=se.createOscillator();e.type="sine",t.type="sine",e.frequency.value=i==="cave"?55:110,t.frequency.value=i==="cave"?82.5:164.8;const n=se.createGain();n.gain.setValueAtTime(.02,se.currentTime),n.gain.exponentialRampToValueAtTime(.001,se.currentTime+4),e.connect(n),t.connect(n),n.connect(se.destination),e.start(),t.start(),e.stop(se.currentTime+4),t.stop(se.currentTime+4)}function ps(i,e="idle"){if(se.state==="suspended"&&se.resume(),i==="sheep")if(e==="hurt"||e==="death"){const t=se.createOscillator();t.type="sine",t.frequency.setValueAtTime(600,se.currentTime),t.frequency.exponentialRampToValueAtTime(300,se.currentTime+.3);const n=se.createGain();n.gain.setValueAtTime(.2,se.currentTime),n.gain.exponentialRampToValueAtTime(.001,se.currentTime+.3),t.connect(n),n.connect(se.destination),t.start(),t.stop(se.currentTime+.3)}else mt(.08,.05,2e3);else if(i==="zombie")if(e==="hurt"||e==="death"){const t=se.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(90,se.currentTime),t.frequency.linearRampToValueAtTime(60,se.currentTime+.4);const n=se.createBiquadFilter();n.type="lowpass",n.frequency.value=400;const s=se.createGain();s.gain.setValueAtTime(.15,se.currentTime),s.gain.exponentialRampToValueAtTime(.001,se.currentTime+.4),t.connect(n),n.connect(s),s.connect(se.destination),t.start(),t.stop(se.currentTime+.4)}else mt(.1,.04,300);else if(i==="creeper")if(e==="explode")p_();else if(e==="hiss"){const t=se.createBufferSource();t.buffer=Il(1.5);const n=se.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(600,se.currentTime),n.frequency.linearRampToValueAtTime(3e3,se.currentTime+1.5);const s=se.createGain();s.gain.setValueAtTime(0,se.currentTime),s.gain.linearRampToValueAtTime(.15,se.currentTime+.3),s.gain.linearRampToValueAtTime(.2,se.currentTime+1.2),t.connect(n),n.connect(s),s.connect(se.destination),t.start(),t.stop(se.currentTime+1.5)}else e==="hurt"||e==="death"?mt(.2,.1,500):mt(.15,.03,400);else i==="skeleton"?e==="hurt"||e==="death"?(mt(.06,.15,2e3),Ei(300,.05,.1,"square")):e==="shoot"?(Ei(200,.08,.08,"triangle"),setTimeout(()=>Ei(180,.06,.06,"triangle"),80)):mt(.08,.02,2e3):i==="pig"?mt(.12,.06,500):i==="chicken"&&Ei(800,.05,.06,"sine")}function p_(){se.state==="suspended"&&se.resume(),mt(.25,.5,1200),setTimeout(()=>{const i=se.createBufferSource();i.buffer=Il(.4);const e=se.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(300,se.currentTime),e.frequency.exponentialRampToValueAtTime(60,se.currentTime+.4);const t=se.createGain();t.gain.setValueAtTime(.4,se.currentTime),t.gain.exponentialRampToValueAtTime(.001,se.currentTime+.4),i.connect(e),e.connect(t),t.connect(se.destination),i.start(),i.stop(se.currentTime+.4)},50)}function m_(){se.state==="suspended"&&se.resume();const i=se.createOscillator();i.type="square",i.frequency.value=150;const e=se.createGain();e.gain.setValueAtTime(.15,se.currentTime),e.gain.exponentialRampToValueAtTime(.001,se.currentTime+.15),i.connect(e),e.connect(se.destination),i.start(),i.stop(se.currentTime+.15)}function Qh(){se.state==="suspended"&&se.resume(),[523,659,784].forEach((e,t)=>{const n=se.createOscillator();n.type="sine",n.frequency.value=e;const s=se.createGain();s.gain.setValueAtTime(.1,se.currentTime+t*.08),s.gain.exponentialRampToValueAtTime(.001,se.currentTime+t*.08+.15),n.connect(s),s.connect(se.destination),n.start(se.currentTime+t*.08),n.stop(se.currentTime+t*.08+.15)})}function g_(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d"),n=32/2,s=t.createRadialGradient(n,n,0,n,n,n);s.addColorStop(0,"rgba(255, 255, 255, 1)"),s.addColorStop(.25,"rgba(255, 255, 255, 0.9)"),s.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),s.addColorStop(.75,"rgba(255, 255, 255, 0.1)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,32,32);const r=new si(e);return r.needsUpdate=!0,r}const __=g_();class v_{constructor(e){this.scene=e,this.particles=[],this._baseMaterial=new oo({map:__,blending:Zn,depthWrite:!1,depthTest:!0,transparent:!0})}_createParticle(e){const t=this._baseMaterial.clone();t.color.set(e.color||16777215),t.opacity=e.opacity??.9;const n=new Tl(t);n.position.set(e.x,e.y,e.z),n.scale.setScalar(e.size||.1),this.scene.add(n);const s={sprite:n,velocity:e.velocity.clone(),life:e.life??.8,maxLife:e.life??.8,baseSize:e.size||.1,isLeaf:e.isLeaf||!1};return this.particles.push(s),s}spawn(e,t,n,s,r=6){for(let o=0;o<r;o++)this._createParticle({x:e+.5+(Math.random()-.5)*.8,y:t+.5+(Math.random()-.5)*.4,z:n+.5+(Math.random()-.5)*.8,color:s,size:.08+Math.random()*.12,opacity:.85+Math.random()*.15,life:.6+Math.random()*.4,velocity:new L((Math.random()-.5)*3.5,Math.random()*2.5+1.2,(Math.random()-.5)*3.5)})}spawnBlockBreak(e,t,n,s,r=12){for(let o=0;o<r;o++){const a=.6+Math.random()*.4;this._createParticle({x:e+.5+(Math.random()-.5)*.55,y:t+.5+(Math.random()-.5)*.55,z:n+.5+(Math.random()-.5)*.55,color:new de(s).multiplyScalar(a),size:.06+Math.random()*.14,opacity:.8+Math.random()*.2,life:.45+Math.random()*.35,velocity:new L((Math.random()-.5)*5,Math.random()*4+2,(Math.random()-.5)*5)})}}spawnFootstep(e,t,n,s=10518624){for(let r=0;r<4;r++)this._createParticle({x:e+(Math.random()-.5)*.35,y:t+.02+Math.random()*.08,z:n+(Math.random()-.5)*.35,color:new de(s).multiplyScalar(.4+Math.random()*.6),size:.035+Math.random()*.055,opacity:.45+Math.random()*.25,life:.25+Math.random()*.2,velocity:new L((Math.random()-.5)*.5,Math.random()*.4+.05,(Math.random()-.5)*.5)})}spawnSplash(e,t,n){for(let s=0;s<10;s++){const r=Math.random()>.4;this._createParticle({x:e+(Math.random()-.5)*.55,y:t+.1+Math.random()*.4,z:n+(Math.random()-.5)*.55,color:r?16777215:4495837,size:.05+Math.random()*.1,opacity:.55+Math.random()*.25,life:.35+Math.random()*.35,velocity:new L((Math.random()-.5)*2.5,Math.random()*3+1.2,(Math.random()-.5)*2.5)})}}spawnLeaf(e,t,n){const s=Math.random()>.45;this._createParticle({x:e+(Math.random()-.5)*3,y:t+1.5+Math.random()*2,z:n+(Math.random()-.5)*3,color:s?5938730:10189338,size:.07+Math.random()*.1,opacity:.55+Math.random()*.25,life:2.5+Math.random()*4,isLeaf:!0,velocity:new L((Math.random()-.5)*.6,-(.25+Math.random()*.5),(Math.random()-.5)*.6)})}spawnTorchFire(e,t,n){const s=[16746496,16763904,16729088,16755234];for(let r=0;r<2;r++)this._createParticle({x:e+(Math.random()-.5)*.12,y:t+.3+Math.random()*.25,z:n+(Math.random()-.5)*.12,color:s[Math.floor(Math.random()*s.length)],size:.04+Math.random()*.06,opacity:.7+Math.random()*.3,life:.35+Math.random()*.45,velocity:new L((Math.random()-.5)*.25,Math.random()*1.2+.5,(Math.random()-.5)*.25)})}spawnCollectSparkle(e,t,n){for(let s=0;s<6;s++)this._createParticle({x:e+(Math.random()-.5)*.3,y:t+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,color:16768324,size:.04+Math.random()*.06,opacity:.6+Math.random()*.4,life:.3+Math.random()*.3,velocity:new L((Math.random()-.5)*1.5,Math.random()*1.5+1,(Math.random()-.5)*1.5)})}update(e,t){for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];if(s.life-=e,s.life<=0){this.scene.remove(s.sprite),s.sprite.material.dispose(),this.particles.splice(n,1);continue}const r=s.life/s.maxLife;if(s.isLeaf){s.velocity.x+=Math.sin(Date.now()*.0018+n)*e*.3,s.velocity.z+=Math.cos(Date.now()*.0022+n)*e*.25,s.sprite.position.addScaledVector(s.velocity,e),s.sprite.rotation.z+=e*.4;const o=t.getSurfaceY(Math.floor(s.sprite.position.x),Math.floor(s.sprite.position.z));s.sprite.position.y<o+.05&&(s.sprite.position.y=o+.05,s.life=0)}else{s.velocity.y-=12*e,s.sprite.position.addScaledVector(s.velocity,e);const o=t.getSurfaceY(Math.floor(s.sprite.position.x),Math.floor(s.sprite.position.z));s.sprite.position.y<o+.03&&(s.sprite.position.y=o+.03,s.velocity.y*=-.3,s.velocity.x*=.7,s.velocity.z*=.7)}s.sprite.material.opacity=Math.max(0,r*.85),s.sprite.scale.setScalar(s.baseSize*(.2+r*.8))}}}const Ln=.25,x_=1.5;function M_(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d"),n=32/2,s=t.createRadialGradient(n,n,n*.4,n,n,n);s.addColorStop(0,"rgba(255, 255, 255, 0.0)"),s.addColorStop(.6,"rgba(255, 255, 255, 0.0)"),s.addColorStop(.75,"rgba(255, 255, 255, 0.25)"),s.addColorStop(.9,"rgba(255, 255, 255, 0.5)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,32,32);const r=new si(e);return r.needsUpdate=!0,r}const y_=M_();class S_{constructor(e,t,n,s,r,o){this.scene=e,this.blockName=r,this.age=0,this.pickedUp=!1;const a=new Qt(Ln,Ln,Ln),c=new Wh({color:o||16777215,roughness:.5,metalness:.1,emissive:new de(o||16777215).multiplyScalar(.25)});this.mesh=new lt(a,c),this.mesh.position.set(t,n,s),this.scene.add(this.mesh);const l=new oo({map:y_,blending:Hs,transparent:!0,opacity:.3,depthWrite:!1,depthTest:!0});this.glowSprite=new Tl(l),this.glowSprite.scale.set(Ln*3,Ln*3,1),this.mesh.add(this.glowSprite),this.velocity=new L((Math.random()-.5)*2,Math.random()*2+1,(Math.random()-.5)*2)}update(e,t,n,s){if(this.pickedUp)return!0;this.age+=e,this.velocity.y-=12*e,this.mesh.position.addScaledVector(this.velocity,e),this.mesh.rotation.y+=e*3,this.mesh.rotation.x+=e*1.5;const r=t.getSurfaceY(Math.floor(this.mesh.position.x),Math.floor(this.mesh.position.z));if(this.mesh.position.y<r+Ln/2&&(this.mesh.position.y=r+Ln/2,this.velocity.y=0,this.velocity.x*=.9,this.velocity.z*=.9),Math.abs(this.velocity.y)<.1&&this.mesh.position.y<=r+Ln/2+.05){const o=Math.sin(this.age*3)*.08;this.mesh.position.y=r+Ln/2+o;const a=.2+Math.sin(this.age*2.5)*.1;this.glowSprite.material.opacity=a}return this.mesh.position.distanceTo(n)<x_?(this.pickedUp=!0,s(this.blockName),this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.glowSprite.material.dispose(),!0):this.age>300?(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.glowSprite.material.dispose(),!0):!1}}class E_{constructor(e){this.scene=e,this.items=[]}spawn(e,t,n,s,r){this.items.push(new S_(this.scene,e,t,n,s,r))}update(e,t,n,s){for(let r=this.items.length-1;r>=0;r--)this.items[r].update(e,t,n,s)&&this.items.splice(r,1)}}const b_=75,T_=2.5;function w_(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=64/2,s=t.createRadialGradient(n,n,n*.05,n,n,n);s.addColorStop(0,"rgba(255, 255, 255, 0.95)"),s.addColorStop(.35,"rgba(255, 255, 255, 0.85)"),s.addColorStop(.6,"rgba(255, 255, 255, 0.5)"),s.addColorStop(.8,"rgba(255, 255, 255, 0.15)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,64,64);const r=new si(e);return r.needsUpdate=!0,r}const A_=w_();class R_{constructor(e){this.scene=e,this.clouds=[],this.geometry=new Zs(1,1),this.material=new ds({map:A_,color:16777215,transparent:!0,opacity:.55,depthWrite:!1,side:xn}),this._lastPlayerX=0,this._timePhase=0}spawnCloud(e,t,n){const s=new En;s.position.set(e,b_+(Math.random()-.5)*6,t);for(let r=0;r<n;r++){const o=new lt(this.geometry,this.material);o.scale.set(3+Math.random()*6,1,2+Math.random()*4),o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*14,(Math.random()-.5)*.8,(Math.random()-.5)*8),o.rotation.z=Math.random()*Math.PI*2,s.add(o)}this.scene.add(s),this.clouds.push({group:s,speed:(.3+Math.random()*.7)*T_})}init(e=10,t=350){for(let n=0;n<e;n++)this.spawnCloud((Math.random()-.5)*t,(Math.random()-.5)*t,6+Math.floor(Math.random()*10))}update(e,t,n){this._lastPlayerX=t,n!==void 0&&(this._timePhase=n,this._updateTint(n));for(const s of this.clouds)s.group.position.x+=s.speed*e,s.group.position.x>t+250&&(s.group.position.x=t-250,s.group.position.z=(Math.random()-.5)*350)}setTint(e){this._timePhase=e,this._updateTint(e)}_updateTint(e){const t=Math.sin(e);let n;if(t>.35)n=new de(16777215);else if(t>.05){const s=(t-.05)/.3;n=new de(16777215).lerp(new de(16772829),1-s)}else if(t>-.1){const s=(t+.1)/.15;n=new de(16746598).lerp(new de(16764040),s)}else if(t>-.4){const s=(t+.4)/.3;n=new de(5596808).lerp(new de(8952251),s)}else n=new de(3359846);this.material.color.copy(n)}}function C_(){const i=document.createElement("canvas");i.width=4,i.height=28;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,28);t.addColorStop(0,"rgba(255, 255, 255, 0)"),t.addColorStop(.2,"rgba(170, 200, 255, 0.55)"),t.addColorStop(.5,"rgba(130, 165, 255, 0.8)"),t.addColorStop(.8,"rgba(100, 140, 255, 0.7)"),t.addColorStop(1,"rgba(80, 120, 255, 0)"),e.fillStyle=t,e.fillRect(0,0,4,28);const n=new si(i);return n.needsUpdate=!0,n}function P_(){const i=document.createElement("canvas");i.width=16,i.height=16;const e=i.getContext("2d"),t=8,n=e.createRadialGradient(t,t,0,t,t,t);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.3,"rgba(255, 255, 255, 0.9)"),n.addColorStop(.6,"rgba(255, 255, 255, 0.4)"),n.addColorStop(1,"rgba(255, 255, 255, 0)"),e.fillStyle=n,e.fillRect(0,0,16,16);const s=new si(i);return s.needsUpdate=!0,s}function D_(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);n.addColorStop(0,"rgba(255, 245, 200, 1.0)"),n.addColorStop(.05,"rgba(255, 220, 140, 0.9)"),n.addColorStop(.15,"rgba(255, 180, 80, 0.5)"),n.addColorStop(.35,"rgba(255, 140, 40, 0.15)"),n.addColorStop(.6,"rgba(255, 100, 20, 0.04)"),n.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(0,0,256,256),t.globalCompositeOperation="lighter";for(let r=0;r<12;r++){const o=r/12*Math.PI*2+Math.random()*.3,a=256*.3+Math.random()*256*.45,c=t.createLinearGradient(256/2,256/2,256/2+Math.cos(o)*a,256/2+Math.sin(o)*a);c.addColorStop(0,"rgba(255, 240, 180, 0.15)"),c.addColorStop(1,"rgba(255, 150, 50, 0)"),t.beginPath(),t.moveTo(256/2,256/2),t.lineTo(256/2+Math.cos(o)*a,256/2+Math.sin(o)*a),t.strokeStyle=c,t.lineWidth=4+Math.random()*6,t.stroke()}const s=new si(e);return s.needsUpdate=!0,s}const L_=C_(),I_=P_();class U_{constructor(e){this.scene=e;const t=new Qi(380,48,24),n=new Ft({uniforms:{uTopColor:{value:new de(3377356)},uHorizonColor:{value:new de(10079487)},uBottomColor:{value:new de(8306926)},uSunDirection:{value:new L(0,1,0)},uSunGlow:{value:.5}},vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vWorldPos;
        uniform vec3 uTopColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uBottomColor;
        uniform vec3 uSunDirection;
        uniform float uSunGlow;

        void main() {
          vec3 dir = normalize(vWorldPos);
          float h = dir.y;

          // Gradient from bottom (horizon) to top (zenith)
          float tHorizon = smoothstep(-0.05, 0.35, h);
          vec3 col = mix(uHorizonColor, uTopColor, tHorizon);

          // Sun glow on the sky dome
          float sunDot = dot(dir, normalize(uSunDirection));
          float sunGlow = smoothstep(0.6, 0.98, sunDot) * uSunGlow * 0.4;
          col = mix(col, vec3(1.0, 0.95, 0.7), sunGlow);

          // Slight darkening at the very bottom
          float bottomFade = smoothstep(-0.15, 0.05, h);
          col = mix(uBottomColor * 0.8, col, bottomFade);

          gl_FragColor = vec4(col, 1.0);
        }
      `,side:Gt,depthWrite:!1,fog:!1});this.skyDome=new lt(t,n),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1,e.add(this.skyDome);const s=new Qi(4,16,16),r=new bn({color:16772744,fog:!1});this.sunMesh=new lt(s,r),this.sunMesh.frustumCulled=!1,e.add(this.sunMesh);const o=new Qi(3,16,16),a=new bn({color:14540287,fog:!1});this.moonMesh=new lt(o,a),this.moonMesh.frustumCulled=!1,e.add(this.moonMesh);const c=2e3,l=new Float32Array(c*3),h=new Float32Array(c*3);for(let m=0;m<c;m++){const b=Math.random()*Math.PI*2,E=Math.acos(Math.random()*2-1),S=400;l[m*3]=S*Math.sin(E)*Math.cos(b),l[m*3+1]=Math.abs(S*Math.cos(E)),l[m*3+2]=S*Math.sin(E)*Math.sin(b);const w=.3+Math.random()*.7;h[m*3]=w,h[m*3+1]=w,h[m*3+2]=w+Math.random()*.2}const u=new Ot;u.setAttribute("position",new xt(l,3)),u.setAttribute("color",new xt(h,3));const f=new Al({size:1.5,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0});this.stars=new Hh(u,f),this.stars.frustumCulled=!1,e.add(this.stars);const p=new Qi(10,16,16),d=new bn({color:16763972,transparent:!0,opacity:.18,fog:!1,depthWrite:!1});this.sunGlow=new lt(p,d),this.sunGlow.frustumCulled=!1,e.add(this.sunGlow);const _=D_(),g=new oo({map:_,blending:Hs,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,depthTest:!0});this.godRaySprite=new Tl(g),this.godRaySprite.scale.set(80,80,1),this.godRaySprite.frustumCulled=!1,e.add(this.godRaySprite)}update(e,t){const n=Math.sin(e),s=Math.cos(e),r=350,o=t.x+s*r,a=t.y+n*r-50,c=t.z;this.sunMesh.position.set(o,a,c),this.sunGlow.position.copy(this.sunMesh.position),this.godRaySprite.position.copy(this.sunMesh.position),this.moonMesh.position.set(t.x-s*r,t.y-n*r-50,t.z),this.skyDome.position.copy(t);const l=Math.max(0,-n),h=Math.max(0,n),u=new de().lerpColors(new de(657952),new de(3377356),h),f=new de().lerpColors(new de(1118515),new de(10079487),h),p=new de().lerpColors(new de(657944),new de(8306926),h);this.skyDome.material.uniforms.uTopColor.value.copy(u),this.skyDome.material.uniforms.uHorizonColor.value.copy(f),this.skyDome.material.uniforms.uBottomColor.value.copy(p);const d=new L(s,n,0).normalize();this.skyDome.material.uniforms.uSunDirection.value.copy(d),this.skyDome.material.uniforms.uSunGlow.value=Math.max(0,n),this.stars.material.opacity=l*.9,this.stars.position.set(t.x,0,t.z),this.sunGlow.material.opacity=Math.max(0,n)*.18,this.godRaySprite.material.opacity=Math.max(0,n)*.5,this.godRaySprite.visible=n>-.15,this.sunMesh.visible=n>-.2,this.sunGlow.visible=n>-.2,this.moonMesh.visible=n<.2}}class N_{constructor(e){this.scene=e,this.raining=!1,this.snowing=!1,this.particles=null,this.particlePositions=null,this.particleVelocities=null,this.particleCount=3e3,this.weatherTimer=0,this.nextWeatherChange=60+Math.random()*120,this.lightningFlash=0,this.lightningTimer=0,this.lightningNextDelay=5+Math.random()*15,this.fogNearOverride=null,this.fogFarOverride=null}get lightningIntensity(){return this.lightningFlash}startRain(){this.stop(),this.raining=!0,this._createParticles(L_,.35,14,8952268),this.lightningTimer=2+Math.random()*6,this.lightningNextDelay=5+Math.random()*15,this.fogNearOverride=30,this.fogFarOverride=180}startSnow(){this.stop(),this.snowing=!0,this._createParticles(I_,.55,2.5,16777215),this.fogNearOverride=50,this.fogFarOverride=250}stop(){this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose(),this.particles.material.dispose(),this.particles=null),this.raining=!1,this.snowing=!1,this.lightningFlash=0,this.lightningTimer=0,this.fogNearOverride=null,this.fogFarOverride=null}_createParticles(e,t,n,s){const r=new Float32Array(this.particleCount*3);this.particleVelocities=new Float32Array(this.particleCount);const o=80;for(let l=0;l<this.particleCount;l++)r[l*3]=(Math.random()-.5)*o,r[l*3+1]=Math.random()*60,r[l*3+2]=(Math.random()-.5)*o,this.particleVelocities[l]=n+Math.random()*n*.5;const a=new Ot;a.setAttribute("position",new xt(r,3));const c=new Al({map:e,color:s,size:t,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,sizeAttenuation:!0,blending:Zn});this.particles=new Hh(a,c),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,t,n){if(this.weatherTimer+=e,this.weatherTimer>=this.nextWeatherChange&&(this.weatherTimer=0,this.nextWeatherChange=60+Math.random()*120,this.raining||this.snowing?this.stop():n==="snow"?this.startSnow():n!=="desert"&&Math.random()>.5&&this.startRain()),this.raining?(this.lightningTimer-=e,this.lightningTimer<=0&&this.lightningFlash<=0&&(this.lightningFlash=1,this.lightningTimer=this.lightningNextDelay,this.lightningNextDelay=5+Math.random()*15),this.lightningFlash>0&&(this.lightningFlash=Math.max(0,this.lightningFlash-e*8))):this.lightningFlash=0,!this.particles)return;const s=this.particles.geometry.attributes.position.array,r=80,o=Date.now()*.001;for(let a=0;a<this.particleCount;a++)s[a*3+1]-=this.particleVelocities[a]*e,this.snowing?(s[a*3]+=Math.sin(o*1.5+a*.1)*e*.6,s[a*3+2]+=Math.cos(o*1.3+a*.13)*e*.5):this.raining&&(s[a*3]+=Math.sin(o*.7+a*.05)*e*.4),s[a*3+1]<0&&(s[a*3]=(Math.random()-.5)*r,s[a*3+1]=50+Math.random()*10,s[a*3+2]=(Math.random()-.5)*r);this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.position.set(t.x,t.y-30,t.z),this.scene.fog&&(this.raining?(this.scene.fog.near=25,this.scene.fog.far=170):this.snowing&&(this.scene.fog.near=45,this.scene.fog.far=240))}}const Zo={};function F_(i){if(Zo[i])return Zo[i];const e=64,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");switch(i){case"creeper":eh(n,e);break;case"sheep":B_(n,e);break;case"pig":O_(n,e);break;case"chicken":k_(n,e);break;case"zombie":z_(n,e);break;case"skeleton":H_(n,e);break;default:eh(n,e);break}const s=new si(t);return s.magFilter=bt,s.minFilter=bt,s.colorSpace=Vt,s.needsUpdate=!0,Zo[i]=s,s}function eh(i,e){i.fillStyle="#4CAF50",i.fillRect(0,0,e,e),i.fillStyle="#111111",i.fillRect(10,14,14,14),i.fillRect(40,14,14,14),i.fillRect(10,36,44,8),i.fillRect(18,44,8,10),i.fillRect(28,44,8,10),i.fillRect(38,44,8,10),i.fillRect(14,44,36,5),i.fillStyle="#2E7D32",i.fillRect(28,28,8,8),i.fillStyle="rgba(0,0,0,0.08)",i.fillRect(0,0,e,4),i.fillRect(0,e-4,e,4),i.fillRect(0,0,4,e),i.fillRect(e-4,0,4,e)}function B_(i,e){i.fillStyle="#e8e4dc",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,255,255,0.3)";for(let t=0;t<20;t++){const n=Math.random()*e,s=Math.random()*e;i.beginPath(),i.arc(n,s,3+Math.random()*2,0,Math.PI*2),i.fill()}i.fillStyle="#1a1a1a",i.fillRect(14,22,8,8),i.fillRect(42,22,8,8),i.fillStyle="#333333",i.fillRect(28,34,8,6),i.fillStyle="#555555",i.fillRect(26,42,12,3)}function O_(i,e){i.fillStyle="#f4a0a0",i.fillRect(0,0,e,e),i.fillStyle="#1a1a1a",i.fillRect(14,20,7,7),i.fillRect(43,20,7,7),i.fillStyle="#f8c0c0",i.fillRect(20,32,24,16),i.fillStyle="#c07070",i.fillRect(25,36,6,5),i.fillRect(35,36,6,5),i.fillStyle="#a05050",i.fillRect(26,44,12,3)}function k_(i,e){i.fillStyle="#fefef0",i.fillRect(0,0,e,e),i.fillStyle="#dd2222",i.beginPath(),i.moveTo(16,0),i.lineTo(20,8),i.lineTo(26,2),i.lineTo(32,8),i.lineTo(38,3),i.lineTo(44,8),i.lineTo(48,0),i.fill(),i.fillStyle="#111111",i.fillRect(16,20,6,6),i.fillRect(42,20,6,6),i.fillStyle="#f0a020",i.beginPath(),i.moveTo(24,32),i.lineTo(40,32),i.lineTo(32,44),i.fill(),i.fillStyle="#cc2222",i.beginPath(),i.arc(32,48,5,0,Math.PI),i.fill()}function z_(i,e){i.fillStyle="#5a8a4a",i.fillRect(0,0,e,e),i.fillStyle="rgba(0,0,0,0.06)";for(let t=0;t<15;t++)i.fillRect(Math.random()*e,Math.random()*e,5+Math.random()*6,3+Math.random()*4);i.fillStyle="#0a0a0a",i.fillRect(12,20,12,14),i.fillRect(40,20,12,14),i.fillStyle="#2a3a2a",i.fillRect(15,24,6,6),i.fillRect(43,24,6,6),i.fillStyle="#3a6a3a",i.fillRect(28,30,8,8),i.fillStyle="#0a0a0a",i.fillRect(16,44,32,8),i.fillStyle="#cccc88",i.fillRect(18,44,5,4),i.fillRect(26,44,5,4),i.fillRect(34,44,5,4),i.fillRect(42,44,5,4)}function H_(i,e){i.fillStyle="#e8e0d0",i.fillRect(0,0,e,e),i.fillStyle="rgba(200,195,180,0.3)";for(let t=0;t<12;t++)i.fillRect(Math.random()*e,Math.random()*e,4+Math.random()*4,2+Math.random()*2);i.fillStyle="#000000",i.fillRect(10,18,16,16),i.fillRect(38,18,16,16),i.fillStyle="#000000",i.fillRect(28,36,8,10),i.fillStyle="#000000";for(let t=48;t<58;t+=3)i.fillRect(16,t,32,1);i.fillRect(22,48,1,10),i.fillRect(28,48,1,10),i.fillRect(34,48,1,10),i.fillRect(40,48,1,10)}function ht(i,e,t,n,s){const r={color:n};return s&&(r.map=s),new lt(new Qt(i,e,t),new Wh(r))}function V_(i){const e=new En,t=F_(i.id);if(i.id==="sheep"){const n=ht(.65,.4,.5,15790320);n.position.y=.5,e.add(n);const s=ht(.32,.32,.32,15262940,t);s.position.set(.28,.62,0),e.add(s);for(const[r,o]of[[-.18,-.12],[.18,-.12],[-.18,.12],[.18,.12]]){const a=ht(.1,.28,.1,4864554);a.position.set(r,.14,o),e.add(a)}}else if(i.id==="pig"){const n=ht(.6,.4,.45,15769760);n.position.y=.48,e.add(n);const s=ht(.32,.28,.32,16031904,t);s.position.set(.28,.52,0),e.add(s);const r=ht(.15,.08,.1,14712960);r.position.set(.44,.5,0),e.add(r);for(const[o,a]of[[-.15,-.1],[.15,-.1],[-.15,.1],[.15,.1]]){const c=ht(.1,.28,.1,12611696);c.position.set(o,.14,a),e.add(c)}}else if(i.id==="chicken"){const n=ht(.3,.25,.4,16119285);n.position.y=.35,e.add(n);const s=ht(.18,.18,.18,16711408,t);s.position.set(.18,.52,0),e.add(s);const r=ht(.08,.04,.04,15769632);r.position.set(.28,.5,0),e.add(r);const o=ht(.03,.06,.03,13378082);o.position.set(.24,.44,0),e.add(o);for(const[a,c]of[[-.05,-.05],[.05,-.05]]){const l=ht(.04,.2,.04,13672480);l.position.set(a,.1,c),e.add(l)}}else if(i.id==="skeleton"){const n=ht(.4,.55,.22,13684936);n.position.y=.58,e.add(n);const s=ht(.3,.3,.3,15261904,t);s.position.set(0,.98,0),e.add(s);for(const[a,c]of[[-.08,0],[.08,0]]){const l=ht(.08,.38,.08,12632248);l.position.set(a,.19,c),e.add(l)}const r=ht(.08,.4,.08,13684936);r.position.set(.28,.55,.12),r.rotation.z=-.2,e.add(r);const o=ht(.08,.4,.08,13684936);o.position.set(-.28,.55,-.12),o.rotation.z=.2,e.add(o)}else if(i.id==="creeper"){const n=ht(.4,.7,.3,4243520);n.position.y=.65,e.add(n);const s=ht(.35,.35,.35,5025616,t);s.position.set(0,1.1,0),e.add(s);for(const[r,o]of[[-.14,-.1],[.14,-.1],[-.14,.1],[.14,.1]]){const a=ht(.1,.3,.12,3186736);a.position.set(r,.15,o),e.add(a)}}else{const n=ht(.48,.55,.28,5933642);n.position.y=.58,e.add(n);const s=ht(.32,.32,.32,5933642,t);s.position.set(0,.98,0),e.add(s);for(const[a,c]of[[-.1,0],[.1,0]]){const l=ht(.12,.38,.12,4876976);l.position.set(a,.19,c),e.add(l)}const r=ht(.1,.42,.1,5933642);r.position.set(.32,.55,.12),r.rotation.z=-.3,e.add(r);const o=ht(.1,.42,.1,5933642);o.position.set(-.32,.55,-.12),o.rotation.z=.3,e.add(o)}return e.frustumCulled=!0,e}function G_(i,e,t){const n=i.mesh;if(t){const r=Math.sin(i.bobPhase||0)*.25,o=n.children.filter(a=>a.geometry&&a.position.y<.3&&a.position.y>.05);for(let a=0;a<o.length;a++)o[a].rotation.x=(a%2===0?1:-1)*r;n.position.y+=Math.sin((i.bobPhase||0)*2)*.006,i.bobPhase=(i.bobPhase||0)+e*8}else{const r=n.children.filter(o=>o.geometry&&o.position.y<.3&&o.position.y>.05);for(const o of r)o.rotation.x*=.9}const s=n.children[1];s&&(s.rotation.y=Math.sin(i.dir)*.25)}function ms(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}const th=[{name:"Planks",in:{wood:1},out:{planks:4}},{name:"Sticks",in:{planks:2},out:{sticks:4}},{name:"Crafting Table",in:{planks:4},out:{crafting_table:1}},{name:"Torch",in:{sticks:1,coal:1},out:{torch:4}},{name:"Wooden Pickaxe",in:{planks:3,sticks:2},out:{wooden_pickaxe:1}},{name:"Stone Pickaxe",in:{cobblestone:3,sticks:2},out:{stone_pickaxe:1}},{name:"Iron Pickaxe",in:{iron_ingot:3,sticks:2},out:{iron_pickaxe:1}},{name:"Diamond Pickaxe",in:{diamond:3,sticks:2},out:{diamond_pickaxe:1}},{name:"Wooden Axe",in:{planks:3,sticks:2},out:{wooden_axe:1}},{name:"Stone Axe",in:{cobblestone:3,sticks:2},out:{stone_axe:1}},{name:"Iron Axe",in:{iron_ingot:3,sticks:2},out:{iron_axe:1}},{name:"Wooden Shovel",in:{planks:1,sticks:2},out:{wooden_shovel:1}},{name:"Stone Shovel",in:{cobblestone:1,sticks:2},out:{stone_shovel:1}},{name:"Wooden Sword",in:{planks:2,sticks:1},out:{wooden_sword:1}},{name:"Stone Sword",in:{cobblestone:2,sticks:1},out:{stone_sword:1}},{name:"Iron Sword",in:{iron_ingot:2,sticks:1},out:{iron_sword:1}},{name:"Diamond Sword",in:{diamond:2,sticks:1},out:{diamond_sword:1}},{name:"Bow",in:{sticks:3,string:3},out:{bow:1}},{name:"Arrow",in:{flint:1,sticks:1,feather:1},out:{arrow:4}},{name:"Furnace",in:{cobblestone:8},out:{furnace:1}},{name:"Bed",in:{wool:3,planks:3},out:{bed:1}},{name:"Leather Helmet",in:{leather:5},out:{leather_helmet:1}},{name:"Leather Chestplate",in:{leather:8},out:{leather_chestplate:1}},{name:"Leather Leggings",in:{leather:7},out:{leather_leggings:1}},{name:"Leather Boots",in:{leather:4},out:{leather_boots:1}},{name:"Iron Helmet",in:{iron_ingot:5},out:{iron_helmet:1}},{name:"Iron Chestplate",in:{iron_ingot:8},out:{iron_chestplate:1}},{name:"Iron Leggings",in:{iron_ingot:7},out:{iron_leggings:1}},{name:"Iron Boots",in:{iron_ingot:4},out:{iron_boots:1}},{name:"Diamond Helmet",in:{diamond:5},out:{diamond_helmet:1}},{name:"Diamond Chestplate",in:{diamond:8},out:{diamond_chestplate:1}},{name:"Diamond Leggings",in:{diamond:7},out:{diamond_leggings:1}},{name:"Diamond Boots",in:{diamond:4},out:{diamond_boots:1}},{name:"Bookshelf",in:{planks:6},out:{bookshelf:1}},{name:"Cook Pork",in:{raw_porkchop:1,coal:1},out:{cooked_porkchop:1}},{name:"Cook Chicken",in:{raw_chicken:1,coal:1},out:{cooked_chicken:1}}],eu=[{in:"iron_ore",out:"iron_ingot",timeSec:10},{in:"gold_ore",out:"gold_ingot",timeSec:10},{in:"sand",out:"glass",timeSec:8},{in:"raw_porkchop",out:"cooked_porkchop",timeSec:6},{in:"raw_chicken",out:"cooked_chicken",timeSec:6},{in:"cobblestone",out:"stone",timeSec:5}],W_={coal:80,planks:15,wood:15,sticks:5};function tu(i){return W_[i]||0}let Dr=null;function X_(i,e=2800){if(Dr||(Dr=document.getElementById("toast-container")),!Dr)return;const t=document.createElement("div");t.className="toast",t.textContent=i,Dr.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},e)}function Is(i){if(Ce[i]){const e=Ce[i],t=e.tex?.all??e.tex?.side??e.tex?.top??1;return{label:e.name,tile:t,color:null}}return Bt[i]?{label:Bt[i].name,tile:null,color:Bt[i].color,emoji:Bt[i].emoji}:Si[i]?{label:Si[i].name,tile:null,color:Si[i].color,emoji:Si[i].emoji}:Dt[i]?{label:Dt[i].name,tile:null,color:Dt[i].color,emoji:Dt[i].emoji}:Pr[i]?{label:Pr[i].name,tile:null,color:Pr[i].color,emoji:Pr[i].emoji}:{label:i,tile:null,color:"#888",emoji:"?"}}class q_{constructor(){this.hotbarEl=document.getElementById("hotbar"),this.overlayEl=document.getElementById("overlay"),this.inventoryEl=document.getElementById("inventory"),this.craftingEl=document.getElementById("crafting"),this.itemNameEl=document.getElementById("item-name-popup"),this.activeSlot=0,this.hotbar=[...Vg],this.inventory=new Map(this.hotbar.map(e=>[e,64])),this.toolDurability=new Map,this.armorSlots=Yg(),this.armorDurability=new $g,this._itemNameTimer=0,window.addEventListener("keydown",e=>{const t=Number(e.key);t>=1&&t<=9&&this.selectSlot(t-1),e.code==="KeyE"&&this.toggleInventory()}),window.addEventListener("wheel",e=>{const t=(this.activeSlot+(e.deltaY>0?1:-1)+this.hotbar.length)%this.hotbar.length;this.selectSlot(t)}),this.inventoryEl.addEventListener("click",e=>{const t=e.target.closest("[data-item]");t&&this.moveToHotbar(t.dataset.item);const n=e.target.closest("[data-armor]");n&&this.equipArmorFromInventory(n.dataset.armor)}),this.render()}getTotalArmorReduction(){let e=0;for(const[t,n]of Object.entries(this.armorSlots))n&&Dt[n]&&this.armorDurability.get(n)>0&&(e+=Dt[n].damageReduction);return e}damageArmor(){let e=!1;for(const[t,n]of Object.entries(this.armorSlots))n&&Dt[n]&&this.armorDurability.damage(n)&&(this.armorSlots[t]=null,this.inventory.set(n,(this.inventory.get(n)||0)-1),(this.inventory.get(n)||0)<=0&&this.inventory.delete(n),e=!0);return e&&this.render(),e}toggleInventory(){this.inventoryEl.classList.toggle("visible"),this.inventoryEl.classList.contains("visible")&&document.exitPointerLock()}activeBlock(){return this.hotbar[this.activeSlot]}activeIsFood(){return il.has(this.hotbar[this.activeSlot])}activeIsTool(){return yi.has(this.hotbar[this.activeSlot])}activeIsBow(){return this.hotbar[this.activeSlot]==="bow"}selectSlot(e){this.activeSlot=Math.max(0,Math.min(this.hotbar.length-1,e)),this.render(),this._showItemName(this.hotbar[this.activeSlot])}_showItemName(e){if(!this.itemNameEl)return;const t=Is(e);this.itemNameEl.textContent=t.label,this.itemNameEl.classList.add("visible"),this._itemNameTimer=1.5}tickItemName(e){this._itemNameTimer>0&&this.itemNameEl&&(this._itemNameTimer-=e,this._itemNameTimer<=0&&this.itemNameEl.classList.remove("visible"))}addItem(e,t=1){this.inventory.set(e,(this.inventory.get(e)||0)+t),yi.has(e)&&!this.toolDurability.has(e)&&this.toolDurability.set(e,Bt[e].maxDurability),sl.has(e)&&!this.armorDurability.map.has(e)&&this.armorDurability.set(e,Dt[e].maxDurability),this.render()}consumeItem(e,t=1){const n=this.inventory.get(e)||0;return n<t?!1:(this.inventory.set(e,n-t),this.inventory.get(e)===0&&this.inventory.delete(e),this.render(),!0)}damageTool(e){if(!yi.has(e))return!1;const t=(this.toolDurability.get(e)??Bt[e].maxDurability)-1;if(t<=0){this.toolDurability.delete(e),this.consumeItem(e,1);for(let n=0;n<this.hotbar.length;n++)this.hotbar[n]===e&&(this.inventory.get(e)||0)===0&&(this.hotbar[n]="air");return!0}return this.toolDurability.set(e,t),this.render(),!1}equipArmorFromInventory(e){const t=this.activeBlock();if(!t||t==="air"){const s=this.armorSlots[e];s&&(this.addItem(s,1),this.armorSlots[e]=null,this.render());return}if(!Dt[t]||Dt[t].slot!==e)return;const n=this.armorSlots[e];if(n&&this.addItem(n,1),this.armorSlots[e]=t,this.consumeItem(t,1),!this.inventory.has(t))for(let s=0;s<this.hotbar.length;s++)this.hotbar[s]===t&&(this.hotbar[s]="air");this.render()}tryCraft(e){const t=th.find(n=>n.name===e);if(!t)return!1;for(const[n,s]of Object.entries(t.in))if((this.inventory.get(n)||0)<s)return!1;for(const[n,s]of Object.entries(t.in))this.inventory.set(n,this.inventory.get(n)-s),this.inventory.get(n)===0&&this.inventory.delete(n);for(const[n,s]of Object.entries(t.out))this.addItem(n,s);return this.render(),!0}moveToHotbar(e){const t=this.hotbar[this.activeSlot];t&&t!=="air"&&this.inventory.set(t,this.inventory.get(t)||0),this.hotbar[this.activeSlot]=e,this.render()}renderOverlay(e){this.overlayEl.textContent=e}_slotIconHtml(e,t=32){const n=Is(e);if(n.tile!=null){const s=n.tile%16,r=Math.floor(n.tile/16);return`<div class="icon" style="--tile-x:${s};--tile-y:${r};width:${t}px;height:${t}px;"></div>`}return`<div class="icon item-icon" style="width:${t}px;height:${t}px;background-color:${n.color||"#888"};font-size:${t*.55}px;line-height:${t}px;text-align:center;">${n.emoji||""}</div>`}_durabilityBar(e,t=40){if(yi.has(e)){const n=Bt[e],r=(this.toolDurability.get(e)??n.maxDurability)/n.maxDurability,o=Math.round(r*120);return`<div style="position:absolute;bottom:2px;left:2px;right:2px;height:3px;background:#333;">
        <div style="width:${(r*100).toFixed(0)}%;height:100%;background:hsl(${o},100%,45%);"></div>
      </div>`}if(sl.has(e)){const n=Dt[e],r=(this.armorDurability.get(e)??n.maxDurability)/n.maxDurability,o=Math.round(r*120);return`<div style="position:absolute;bottom:2px;left:2px;right:2px;height:3px;background:#333;">
        <div style="width:${(r*100).toFixed(0)}%;height:100%;background:hsl(${o},100%,45%);"></div>
      </div>`}return""}render(){this.hotbarEl.innerHTML=this.hotbar.map((c,l)=>{const h=this.inventory.get(c)||0,u=Is(c),f=this._durabilityBar(c,40);return`<div class="slot ${l===this.activeSlot?"active":""}" data-slot="${l}" title="${u.label}">
        ${this._slotIconHtml(c,32)}
        <small>${h>0?h:""}</small>
        ${f}
      </div>`}).join(""),this.hotbarEl.querySelectorAll("[data-slot]").forEach(c=>{c.onclick=()=>this.selectSlot(Number(c.dataset.slot))});const e=[...this.inventory.entries()].filter(([,c])=>c>0),t=(c,l)=>{const h=this.armorSlots[c];return`<div class="inv-slot armor-slot" data-armor="${c}" title="${l}${h?": "+(Dt[h]?.name||h):""}" style="background:rgba(0,0,0,0.6);border:2px solid rgba(255,255,255,0.15);">
        ${h?`${this._slotIconHtml(h,24)}`:`<span style="font-size:18px;color:#555;">${l.charAt(0)}</span>`}
        ${h?this._durabilityBar(h,42):""}
        ${h?`<small style="position:absolute;bottom:2px;right:3px;font-size:10px;color:#aaa;">${this.armorDurability.get(h)??Dt[h]?.maxDurability}</small>`:""}
      </div>`};this.inventoryEl.innerHTML=`
      <div style="grid-column:1/-1;text-align:center;font-size:16px;margin-bottom:8px;font-weight:bold;">Inventory</div>
      ${e.map(([c,l])=>{const h=Is(c),u=this._durabilityBar(c,40);return`<div class="inv-slot" data-item="${c}" draggable="true" title="${h.label}">
          ${this._slotIconHtml(c,24)}
          <small style="position:absolute;bottom:2px;right:3px;font-size:11px;font-weight:bold;color:#fff;text-shadow:1px 1px 0 #000;">${l}</small>
          ${u}
        </div>`}).join("")}
      <div style="grid-column:1/-1;font-size:10px;color:#888;margin-top:4px;">${e.length===0?"Empty":""}</div>

      <div style="grid-column:1/-1;text-align:center;font-size:14px;margin-top:8px;font-weight:bold;border-top:1px solid rgba(255,255,255,0.1);padding-top:8px;">Armor</div>
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;grid-column:1/-1;">
        ${t("helmet","Helmet")}
        ${t("chestplate","Chest")}
        ${t("leggings","Legs")}
        ${t("boots","Boots")}
      </div>
      <div style="grid-column:1/-1;font-size:10px;color:#888;text-align:center;margin-top:2px;">
        Total armor: ${this.getTotalArmorReduction()} defense
      </div>
    `;let n=null;const s=c=>{const l=c.target.closest(".inv-slot");l&&(n=l.dataset.item,c.dataTransfer.setData("text/plain",n),l.style.opacity="0.5")},r=c=>{const l=c.target.closest(".inv-slot");l&&(l.style.opacity="1"),n=null},o=c=>{c.target.closest(".inv-slot")&&c.preventDefault()},a=c=>{c.preventDefault();const l=c.target.closest(".inv-slot");if(!l)return;const h=l.dataset.item,u=c.dataTransfer.getData("text/plain");if(!u||u===h)return;const f=this.inventory.get(u)||0,p=this.inventory.get(h)||0;this.inventory.set(h,f),this.inventory.set(u,p),this.render()};this.inventoryEl.removeEventListener("dragstart",s),this.inventoryEl.removeEventListener("dragend",r),this.inventoryEl.removeEventListener("dragover",o),this.inventoryEl.removeEventListener("drop",a),this.inventoryEl.addEventListener("dragstart",s),this.inventoryEl.addEventListener("dragend",r),this.inventoryEl.addEventListener("dragover",o),this.inventoryEl.addEventListener("drop",a),this.craftingEl.innerHTML=`
      <div style="font-weight:bold;margin-bottom:6px;font-size:13px;">Crafting</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
        ${th.map(c=>{const l=Object.entries(c.in).every(([h,u])=>(this.inventory.get(h)||0)>=u);return`<button data-craft="${c.name}" class="${l?"craftable":""}" style="padding:3px 5px;font-size:10px;background:${l?"#3a5a3a":"#555"};border:1px solid ${l?"#6f6":"#888"};color:#fff;cursor:pointer;font-family:monospace;text-align:left;" title="${Object.entries(c.in).map(([h,u])=>`${u}x ${h}`).join(" + ")}">${c.name}</button>`}).join("")}
      </div>
      <div style="margin-top:8px;font-size:10px;color:#aaa;">
        <div style="font-weight:bold;margin-bottom:3px;">Smelting (use Furnace):</div>
        ${eu.map(c=>`<div>${c.in} → ${c.out} (${c.timeSec}s)</div>`).join("")}
      </div>
    `,this.craftingEl.querySelectorAll("button[data-craft]").forEach(c=>{c.onclick=()=>{const l=this.tryCraft(c.dataset.craft);c.style.background=l?"#383":"#833",setTimeout(()=>this.render(),220)}})}}const Jo=.35,Y_=1.8,nh=.03;class $_{constructor(e){this.camera=e,this.mesh=new lt(new Qt(Jo,Jo,Jo),new ds({color:6203463})),this.mesh.frustumCulled=!1,this.camera.add(this.mesh),this.mesh.position.set(.35,-.25,-.55),this.mesh.rotation.set(0,-.3,.1),this.punchTime=0,this.idlePhase=0}setBlock(e){e&&this.mesh.material.color.setHex(e.color||8947848)}punch(){this.punchTime=.15}update(e){this.idlePhase+=e*Y_;const t=Math.sin(this.idlePhase)*nh,n=Math.cos(this.idlePhase*.7)*nh;let s=0;if(this.punchTime>0){this.punchTime-=e;const r=1-this.punchTime/.15;s=r<.4?r*.3:(.15-r)*.15}this.mesh.position.x=.35+t,this.mesh.position.y=-.25+n,this.mesh.position.z=-.55-s}}let al=null;function j_(i){al=i}function K_(i){return al?al(i):{label:i,tile:null,color:"#888",emoji:"?"}}const Ti=new Map;function Z_(i,e,t){return`${i},${e},${t}`}function lo(i,e,t){const n=Z_(i,e,t);return Ti.has(n)||Ti.set(n,{input:null,fuel:null,output:null,burnTimeLeft:0,burnTimeTotal:0,progress:0,activeRecipe:null}),Ti.get(n)}function nu(i){return eu.find(e=>e.in===i)||null}function Qo(i,e=32){const t=K_(i);if(t.tile!=null){const n=t.tile%16,s=Math.floor(t.tile/16);return`<div class="icon" style="--tile-x:${n};--tile-y:${s};width:${e}px;height:${e}px;"></div>`}return`<div class="icon item-icon" style="width:${e}px;height:${e}px;background-color:${t.color||"#888"};font-size:${e*.55}px;line-height:${e}px;text-align:center;">${t.emoji||"?"}</div>`}function co(i,e,t,n){const s=document.getElementById("furnace-panel");if(!s)return;const r=n.burnTimeLeft>0&&n.progress>0?(n.progress*100).toFixed(0):0,o=n.burnTimeLeft>0,a=n.burnTimeLeft>0&&n.activeRecipe;s.innerHTML=`
    <div style="grid-column:1/-1;text-align:center;font-size:16px;margin-bottom:8px;font-weight:bold;">Furnace</div>

    <!-- Input slot -->
    <div class="furnace-slot" id="furnace-input-slot" title="Input">
      ${n.input?`<div class="furnace-item">${Qo(n.input.name,28)}<small>${n.input.count}</small></div>`:'<div class="furnace-empty">In</div>'}
    </div>

    <!-- Arrow + progress -->
    <div style="display:flex;align-items:center;justify-content:center;flex-direction:column;">
      <div class="furnace-arrow ${a?"active":""}" style="--progress:${r}%">
        <div class="furnace-arrow-fill"></div>
      </div>
      <span style="font-size:10px;color:#aaa;">${r}%</span>
    </div>

    <!-- Output slot -->
    <div class="furnace-slot" id="furnace-output-slot" title="Output">
      ${n.output?`<div class="furnace-item">${Qo(n.output.name,28)}<small>${n.output.count}</small></div>`:'<div class="furnace-empty">Out</div>'}
    </div>

    <!-- Fuel slot -->
    <div class="furnace-slot" id="furnace-fuel-slot" title="Fuel">
      ${n.fuel?`<div class="furnace-item">${Qo(n.fuel.name,28)}<small>${n.fuel.count}</small></div>`:'<div class="furnace-empty">Fuel</div>'}
      <div class="furnace-flame ${o?"active":""}"></div>
    </div>

    <div class="furnace-fuel-bar">
      <div class="furnace-fuel-fill" style="width:${n.burnTimeTotal>0?n.burnTimeLeft/n.burnTimeTotal*100:0}%"></div>
    </div>

    <div style="grid-column:1/-1;font-size:10px;color:#888;text-align:center;margin-top:4px;">
      Smelt: iron_ore, gold_ore, sand, raw_porkchop, raw_chicken, cobblestone<br>
      Fuel: coal(80s), planks(15s), wood(15s), sticks(5s)
    </div>
  `;const c=s.querySelector("#furnace-input-slot"),l=s.querySelector("#furnace-output-slot"),h=s.querySelector("#furnace-fuel-slot");c&&window._furnacePutItem&&c.addEventListener("click",()=>window._furnacePutItem("input")),l&&window._furnaceTakeItem&&l.addEventListener("click",()=>window._furnaceTakeItem("output")),h&&window._furnacePutItem&&h.addEventListener("click",()=>window._furnacePutItem("fuel"))}function J_(i,e,t){const n=document.getElementById("furnace-panel");if(!n)return;const s=lo(i,e,t);n.dataset.furnaceWx=i,n.dataset.furnaceWy=e,n.dataset.furnaceWz=t,co(i,e,t,s),n.classList.add("visible")}function ih(){const i=document.getElementById("furnace-panel");i&&i.classList.remove("visible")}function sh(){const i=document.getElementById("furnace-panel");return i?i.classList.contains("visible"):!1}function Q_(i,e,t,n,s){const r=document.getElementById("furnace-panel");if(!r||!r.classList.contains("visible"))return;const o=parseInt(r.dataset.furnaceWx),a=parseInt(r.dataset.furnaceWy),c=parseInt(r.dataset.furnaceWz),l=lo(o,a,c),h=s.activeBlock();if(!(!h||h==="air")){if(n==="input"){if(l.input)return;const u=nu(h);if(!u||!s.consumeItem(h,1))return;l.input={name:h,count:1},l.activeRecipe=u,l.progress||(l.progress=0)}else if(n==="fuel"){if(tu(h)<=0||!s.consumeItem(h,1))return;l.fuel&&l.fuel.name===h?l.fuel.count++:l.fuel={name:h,count:1}}co(o,a,c,l)}}function ev(i,e){const t=document.getElementById("furnace-panel");if(!t||!t.classList.contains("visible"))return;const n=parseInt(t.dataset.furnaceWx),s=parseInt(t.dataset.furnaceWy),r=parseInt(t.dataset.furnaceWz),o=lo(n,s,r);i==="output"&&o.output&&(e.addItem(o.output.name,o.output.count),o.output=null),co(n,s,r,o)}function tv(i){for(const[t,n]of Ti){if(!n.input||!n.activeRecipe){n.progress=0,n.burnTimeLeft>0&&(n.burnTimeLeft-=i),n.burnTimeLeft<=0&&(n.burnTimeLeft=0,n.burnTimeTotal=0);continue}const s=n.activeRecipe;if(!n.input||n.input.name!==s.in){n.activeRecipe=nu(n.input?.name),n.progress=0,n.burnTimeLeft>0&&(n.burnTimeLeft-=i);continue}if(n.burnTimeLeft<=0&&n.fuel&&n.fuel.count>0){const r=tu(n.fuel.name);r>0&&(n.fuel.count--,n.fuel.count<=0&&(n.fuel=null),n.burnTimeLeft=r,n.burnTimeTotal=r)}n.burnTimeLeft>0?(n.progress+=i/(s.timeSec||10),n.burnTimeLeft-=i,n.burnTimeLeft<=0&&(n.burnTimeLeft=0,n.burnTimeTotal=0),n.progress>=1&&(n.input.count--,n.input.count<=0&&(n.input=null),n.output&&n.output.name===s.out?n.output.count++:n.output={name:s.out,count:1},n.progress=0,n.input||(n.activeRecipe=null))):n.progress>0&&(n.progress=Math.max(0,n.progress-i*.3))}const e=document.getElementById("furnace-panel");if(e&&e.classList.contains("visible")){const t=parseInt(e.dataset.furnaceWx),n=parseInt(e.dataset.furnaceWy),s=parseInt(e.dataset.furnaceWz);if(!isNaN(t)&&!isNaN(n)&&!isNaN(s)){const r=lo(t,n,s);co(t,n,s,r)}}}function nv(){const i={};for(const[e,t]of Ti)i[e]={...t};return i}function iv(i){if(i){Ti.clear();for(const[e,t]of Object.entries(i))Ti.set(e,{...t})}}const Pe=16,Nn=128,Lr=[{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]},{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]}],sv=[[[[-1,0,1],[0,-1,1],[-1,-1,1]],[[1,0,1],[0,-1,1],[1,-1,1]],[[1,0,1],[0,1,1],[1,1,1]],[[-1,0,1],[0,1,1],[-1,1,1]]],[[[1,0,-1],[0,-1,-1],[1,-1,-1]],[[-1,0,-1],[0,-1,-1],[-1,-1,-1]],[[-1,0,-1],[0,1,-1],[-1,1,-1]],[[1,0,-1],[0,1,-1],[1,1,-1]]],[[[1,0,1],[1,-1,0],[1,-1,1]],[[1,0,-1],[1,-1,0],[1,-1,-1]],[[1,0,-1],[1,1,0],[1,1,-1]],[[1,0,1],[1,1,0],[1,1,1]]],[[[-1,0,-1],[-1,-1,0],[-1,-1,-1]],[[-1,0,1],[-1,-1,0],[-1,-1,1]],[[-1,0,1],[-1,1,0],[-1,1,1]],[[-1,0,-1],[-1,1,0],[-1,1,-1]]],[[[-1,1,0],[0,1,1],[-1,1,1]],[[1,1,0],[0,1,1],[1,1,1]],[[1,1,0],[0,1,-1],[1,1,-1]],[[-1,1,0],[0,1,-1],[-1,1,-1]]],[[[-1,-1,0],[0,-1,-1],[-1,-1,-1]],[[1,-1,0],[0,-1,-1],[1,-1,-1]],[[1,-1,0],[0,-1,1],[1,-1,1]],[[-1,-1,0],[0,-1,1],[-1,-1,1]]]],rv=[.5,.7,.85,1],ea=16,ov=3;let mi=new ds({color:16777215,vertexColors:!0}),ll=null;const iu={value:0};let cl=null;function rh(i){i.magFilter=bt,i.minFilter=bt,i.generateMipmaps=!1,i.colorSpace=Vt,mi=new ds({map:i,transparent:!1,vertexColors:!0}),ll=new Ft({uniforms:{uTime:iu,uTexture:{value:i}},vertexShader:`
      varying vec2 vUv;
      varying float vWave;
      uniform float uTime;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float wave = sin(pos.x * 1.5 + uTime) * cos(pos.z * 1.5 + uTime * 0.7) * 0.06;
        pos.y += wave;
        vWave = wave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying float vWave;
      uniform sampler2D uTexture;
      uniform float uTime;
      void main() {
        vec2 uv = vUv;
        uv.x += sin(uv.y * 8.0 + uTime * 0.5) * 0.015;
        uv.y += uTime * 0.04;
        vec4 tex = texture2D(uTexture, uv);
        float brightness = 1.15 + vWave * 2.0;
        gl_FragColor = vec4(tex.rgb * brightness, 0.65);
      }
    `,transparent:!0,depthWrite:!1}),cl=new bn({map:i,vertexColors:!0})}function av(i){iu.value=i}function oh(i,e){return i?.tex?e===4&&i.tex.top!==void 0?i.tex.top:e===5&&i.tex.bottom!==void 0?i.tex.bottom:i.tex.side!==void 0?i.tex.side:i.tex.all!==void 0?i.tex.all:1:1}function Ps(i,e){const t=e%ea,n=Math.floor(e/ea),s=1/ea,r=1/ov,o=s*.02,a=r*.02,c=t*s+o,l=1-(n+1)*r+a,h=(t+1)*s-o,u=1-n*r-a;i.push(c,l,h,l,h,u,c,u)}class ah{constructor(e,t){this.cx=e,this.cz=t,this.key=`${e},${t}`,this.blocks=new Uint16Array(Pe*Nn*Pe),this.mesh=null,this.liquidMesh=null,this.emissiveMesh=null,this.dirty=!0}idx(e,t,n){return e+Pe*(n+Pe*t)}get(e,t,n){return this.blocks[this.idx(e,t,n)]||0}set(e,t,n,s){this.blocks[this.idx(e,t,n)]=s,this.dirty=!0}buildMesh(e){const t=[],n=[],s=[],r=[];let o=0;const a=[],c=[],l=[],h=[];let u=0;const f=[],p=[],d=[];let _=0;for(let m=0;m<Nn;m++)for(let b=0;b<Pe;b++)for(let E=0;E<Pe;E++){const S=this.get(E,m,b);if(!S)continue;const w=nl[S];if(!w)continue;if(w.decoration){const D=this.cx*Pe+E,x=this.cz*Pe+b;if(w.id===19){const y=[[D+.45,m,x+.45],[D+.55,m,x+.45],[D+.55,m+.6,x+.45],[D+.45,m+.6,x+.45],[D+.55,m,x+.55],[D+.45,m,x+.55],[D+.45,m+.6,x+.55],[D+.55,m+.6,x+.55]],C=[[0,1,2,3],[1,4,7,2],[4,5,6,7],[5,0,3,6],[3,2,7,6],[5,4,1,0]];for(const O of C){for(const W of O)a.push(...y[W]),l.push(.6,.4,.15);Ps(c,28),h.push(u,u+1,u+2,u,u+2,u+3),u+=4}const F=[[D+.35,m+.55,x+.35],[D+.65,m+.55,x+.35],[D+.65,m+.9,x+.35],[D+.35,m+.9,x+.35],[D+.65,m+.55,x+.65],[D+.35,m+.55,x+.65],[D+.35,m+.9,x+.65],[D+.65,m+.9,x+.65]];for(const O of C){for(const W of O)a.push(...F[W]),l.push(1,.7,.2);Ps(c,28),h.push(u,u+1,u+2,u,u+2,u+3),u+=4}}else{const y=w.color||6203463,C=(y>>16&255)/255,F=(y>>8&255)/255,O=(y&255)/255,W=[[[0,0,.5],[1,0,.5],[1,1,.5],[0,1,.5]],[[.5,0,0],[.5,0,1],[.5,1,1],[.5,1,0]]],V=0;for(const G of W){for(const[q,k,Q]of G)if(t.push(D+q,m+k,x+Q),w.biomeTint){const oe=e.generator.biomeColor(D,x);s.push(C*oe.r,F*oe.g,O*oe.b)}else s.push(C,F,O);Ps(n,V),r.push(o,o+1,o+2,o,o+2,o+3),r.push(o+2,o+1,o,o+3,o+2,o),o+=4}}continue}if(w.liquid){for(let D=0;D<Lr.length;D++){const x=Lr[D],y=E+x.dir[0],C=m+x.dir[1],F=b+x.dir[2],O=e.getBlock(this.cx*Pe+y,C,this.cz*Pe+F);if(!(O&&(O.solid||O.liquid))){for(const[W,V,G]of x.corners){let q=m+V;D===4&&w.liquid&&(q-=.125),f.push(this.cx*Pe+E+W,q,this.cz*Pe+b+G)}Ps(p,oh(w,D)),d.push(_,_+1,_+2,_,_+2,_+3),_+=4}}continue}const A=this.cx*Pe+E,R=this.cz*Pe+b;for(let D=0;D<Lr.length;D++){const x=Lr[D],y=E+x.dir[0],C=m+x.dir[1],F=b+x.dir[2],O=e.getBlock(this.cx*Pe+y,C,this.cz*Pe+F);if(O&&O.solid&&!O.decoration&&!(w.transparent&&O.transparent))continue;const W=[];for(let V=0;V<4;V++){const[G,q,k]=sv[D][V],Q=e.getBlock(A+G[0],m+G[1],R+G[2])?.solid?1:0,oe=e.getBlock(A+q[0],m+q[1],R+q[2])?.solid?1:0,ve=e.getBlock(A+k[0],m+k[1],R+k[2])?.solid?1:0;W.push(Q&&oe?0:3-Q-oe-ve)}for(let V=0;V<4;V++){const[G,q,k]=x.corners[V];t.push(A+G,m+q,R+k);let Q=rv[W[V]];if(w.biomeTint){const oe=e.generator.biomeColor(A,R);s.push(Q*oe.r,Q*oe.g,Q*oe.b)}else s.push(Q,Q,Q)}Ps(n,oh(w,D)),W[0]+W[2]>W[1]+W[3]?r.push(o,o+1,o+2,o,o+2,o+3):r.push(o,o+1,o+3,o+1,o+2,o+3),o+=4}}const g=new Ot;if(g.setAttribute("position",new xt(t,3)),g.setAttribute("uv",new xt(n,2)),g.setAttribute("color",new xt(s,3)),g.setIndex(r),g.computeVertexNormals(),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=g,this.mesh.material=mi):(this.mesh=new lt(g,mi),this.mesh.frustumCulled=!0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),a.length>0){const m=new Ot;m.setAttribute("position",new xt(a,3)),m.setAttribute("uv",new xt(c,2)),m.setAttribute("color",new xt(l,3)),m.setIndex(h),m.computeVertexNormals(),this.emissiveMesh?(this.emissiveMesh.geometry.dispose(),this.emissiveMesh.geometry=m,this.emissiveMesh.material=cl||mi):(this.emissiveMesh=new lt(m,cl||mi),this.emissiveMesh.frustumCulled=!0)}else this.emissiveMesh&&(this.emissiveMesh.geometry.dispose(),this.emissiveMesh=null);if(f.length>0){const m=new Ot;m.setAttribute("position",new xt(f,3)),m.setAttribute("uv",new xt(p,2)),m.setIndex(d),m.computeVertexNormals(),this.liquidMesh?(this.liquidMesh.geometry.dispose(),this.liquidMesh.geometry=m,this.liquidMesh.material=ll||mi):(this.liquidMesh=new lt(m,ll||mi),this.liquidMesh.frustumCulled=!0,this.liquidMesh.receiveShadow=!0)}else this.liquidMesh&&(this.liquidMesh.geometry.dispose(),this.liquidMesh=null);return this.dirty=!1,{mesh:this.mesh,liquidMesh:this.liquidMesh,emissiveMesh:this.emissiveMesh}}disposeMesh(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),this.liquidMesh=null),this.emissiveMesh&&(this.emissiveMesh.geometry.dispose(),this.emissiveMesh=null)}}function lv(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ta={exports:{}},lh;function cv(){return lh||(lh=1,(function(i){(function(e){function t(l){function h(u,f,p){this.x=u,this.y=f,this.z=p}h.prototype.dot2=function(u,f){return this.x*u+this.y*f},h.prototype.dot3=function(u,f,p){return this.x*u+this.y*f+this.z*p},this.grad3=[new h(1,1,0),new h(-1,1,0),new h(1,-1,0),new h(-1,-1,0),new h(1,0,1),new h(-1,0,1),new h(1,0,-1),new h(-1,0,-1),new h(0,1,1),new h(0,-1,1),new h(0,1,-1),new h(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(l||0)}t.prototype.seed=function(l){l>0&&l<1&&(l*=65536),l=Math.floor(l),l<256&&(l|=l<<8);for(var h=this.p,u=0;u<256;u++){var f;u&1?f=h[u]^l&255:f=h[u]^l>>8&255;var p=this.perm,d=this.gradP;p[u]=p[u+256]=f,d[u]=d[u+256]=this.grad3[f%12]}};var n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=1/3,o=1/6;t.prototype.simplex2=function(l,h){var u,f,p,d=(l+h)*n,_=Math.floor(l+d),g=Math.floor(h+d),m=(_+g)*s,b=l-_+m,E=h-g+m,S,w;b>E?(S=1,w=0):(S=0,w=1);var A=b-S+s,R=E-w+s,D=b-1+2*s,x=E-1+2*s;_&=255,g&=255;var y=this.perm,C=this.gradP,F=C[_+y[g]],O=C[_+S+y[g+w]],W=C[_+1+y[g+1]],V=.5-b*b-E*E;V<0?u=0:(V*=V,u=V*V*F.dot2(b,E));var G=.5-A*A-R*R;G<0?f=0:(G*=G,f=G*G*O.dot2(A,R));var q=.5-D*D-x*x;return q<0?p=0:(q*=q,p=q*q*W.dot2(D,x)),70*(u+f+p)},t.prototype.simplex3=function(l,h,u){var f,p,d,_,g=(l+h+u)*r,m=Math.floor(l+g),b=Math.floor(h+g),E=Math.floor(u+g),S=(m+b+E)*o,w=l-m+S,A=h-b+S,R=u-E+S,D,x,y,C,F,O;w>=A?A>=R?(D=1,x=0,y=0,C=1,F=1,O=0):w>=R?(D=1,x=0,y=0,C=1,F=0,O=1):(D=0,x=0,y=1,C=1,F=0,O=1):A<R?(D=0,x=0,y=1,C=0,F=1,O=1):w<R?(D=0,x=1,y=0,C=0,F=1,O=1):(D=0,x=1,y=0,C=1,F=1,O=0);var W=w-D+o,V=A-x+o,G=R-y+o,q=w-C+2*o,k=A-F+2*o,Q=R-O+2*o,oe=w-1+3*o,ve=A-1+3*o,ze=R-1+3*o;m&=255,b&=255,E&=255;var $e=this.perm,et=this.gradP,Ke=et[m+$e[b+$e[E]]],$=et[m+D+$e[b+x+$e[E+y]]],K=et[m+C+$e[b+F+$e[E+O]]],pe=et[m+1+$e[b+1+$e[E+1]]],De=.5-w*w-A*A-R*R;De<0?f=0:(De*=De,f=De*De*Ke.dot3(w,A,R));var ge=.5-W*W-V*V-G*G;ge<0?p=0:(ge*=ge,p=ge*ge*$.dot3(W,V,G));var Ge=.5-q*q-k*k-Q*Q;Ge<0?d=0:(Ge*=Ge,d=Ge*Ge*K.dot3(q,k,Q));var Mt=.5-oe*oe-ve*ve-ze*ze;return Mt<0?_=0:(Mt*=Mt,_=Mt*Mt*pe.dot3(oe,ve,ze)),32*(f+p+d+_)};function a(l){return l*l*l*(l*(l*6-15)+10)}function c(l,h,u){return(1-u)*l+u*h}t.prototype.perlin2=function(l,h){var u=Math.floor(l),f=Math.floor(h);l=l-u,h=h-f,u=u&255,f=f&255;var p=this.perm,d=this.gradP,_=d[u+p[f]].dot2(l,h),g=d[u+p[f+1]].dot2(l,h-1),m=d[u+1+p[f]].dot2(l-1,h),b=d[u+1+p[f+1]].dot2(l-1,h-1),E=a(l);return c(c(_,m,E),c(g,b,E),a(h))},t.prototype.perlin3=function(l,h,u){var f=Math.floor(l),p=Math.floor(h),d=Math.floor(u);l=l-f,h=h-p,u=u-d,f=f&255,p=p&255,d=d&255;var _=this.perm,g=this.gradP,m=g[f+_[p+_[d]]].dot3(l,h,u),b=g[f+_[p+_[d+1]]].dot3(l,h,u-1),E=g[f+_[p+1+_[d]]].dot3(l,h-1,u),S=g[f+_[p+1+_[d+1]]].dot3(l,h-1,u-1),w=g[f+1+_[p+_[d]]].dot3(l-1,h,u),A=g[f+1+_[p+_[d+1]]].dot3(l-1,h,u-1),R=g[f+1+_[p+1+_[d]]].dot3(l-1,h-1,u),D=g[f+1+_[p+1+_[d+1]]].dot3(l-1,h-1,u-1),x=a(l),y=a(h),C=a(u);return c(c(c(m,w,x),c(b,A,x),C),c(c(E,R,x),c(S,D,x),C),y)},e.Noise=t})(i.exports)})(ta)),ta.exports}var hv=cv();const uv=lv(hv),{Noise:dv}=uv,vi=34;class fv{constructor(e=1337){this.seed=e,this.noise=new dv(e)}heightAt(e,t){const n=this.noise.perlin2(e/200,t/200)*12,s=this.noise.perlin2(e/80+500,t/80+500)*8,r=this.noise.perlin2(e/18+1e3,t/18+1e3)*4,o=Math.abs(this.noise.perlin2(e/45+2e3,t/45+2e3)),a=(1-o)*(1-o)*22,c=this.noise.perlin2(e/120+3e3,t/120+3e3),l=c>.4?(c-.4)*-10:0,h=48+n+s+r+a+l;return Math.max(3,Math.floor(h))}biomeAt(e,t,n){const s=this.noise.perlin2((e+999)/180,(t+999)/180),r=this.noise.perlin2((e-500)/160,(t+1200)/160);return n!==void 0&&n>=vi&&n<=vi+3?s<-.3?"snow":"beach":s>.45&&r<.3?"desert":s<-.3&&r>.1?"snow":s>.3&&r>.4?"jungle":s>0&&r>.35&&s<.5?"swamp":s>-.1&&s<.3&&r>.2?"forest":s<-.1&&s>=-.35&&r>0?"taiga":r<-.25&&s>.1?"savanna":"plains"}biomeColor(e,t){const n=this.biomeAt(e,t);return n==="desert"?{r:.85,g:.78,b:.48}:n==="snow"?{r:.65,g:.85,b:.92}:n==="jungle"?{r:.22,g:.78,b:.22}:n==="swamp"?{r:.42,g:.55,b:.3}:n==="taiga"?{r:.38,g:.62,b:.4}:n==="forest"?{r:.32,g:.72,b:.28}:n==="savanna"?{r:.72,g:.72,b:.32}:n==="beach"?{r:.8,g:.78,b:.55}:{r:.52,g:.78,b:.35}}oreAt(e,t,n){const s=this.noise.perlin3(e/11,t/11,n/11);return t<12&&s>.68?"diamond_ore":t<24&&s>.65?"gold_ore":t<40&&s>.62?"iron_ore":t<60&&s>.53?"coal_ore":null}isCave(e,t,n){if(t<=1)return!1;const s=Math.max(0,(58-t)/58)*.15,r=e+500,o=t+500,a=n+500;if(this.noise.perlin3(r*.05,o*.03,a*.05)+s>.5)return!0;const l=e+1e3,h=t+1e3,u=n+1e3,f=this.noise.perlin3(l*.04,h*.02,u*.04);return Math.abs(f)<.04+s*.15}_hash2D(e,t){let n=e*374761393+t*668265263+this.seed*2654435761>>>0;return n=(n^n>>13)>>>0,n=n*1274126177>>>0,(n&65535)/65535}shouldPlaceVillage(e,t){const n=Math.floor(e/3),s=Math.floor(t/3);return this._hash2D(n*7+3,s*11+5)>.968}getVillageCenter(e,t){const n=Math.floor(e/3),s=Math.floor(t/3),r=Math.floor(this._hash2D(n*13+7,s*17+11)*32),o=Math.floor(this._hash2D(n*19+3,s*5+13)*32);return{wx:n*3*16+8+r,wz:s*3*16+8+o}}shouldPlaceDungeon(e,t){return this._hash2D(e*7+3,t*11+5)>.985}shouldPlacePyramid(e,t){return this._hash2D(e*13+7,t*17+11)>.975}generateVillage(e,t,n,s){const{wx:r,wz:o}=this.getVillageCenter(n,s),a=e.getSurfaceY(r,o),c=this.biomeAt(r,o,a);if(c!=="plains"&&c!=="desert")return;let l=!0;for(let f=-16;f<=16;f+=8){for(let p=-16;p<=16;p+=8){const d=e.getSurfaceY(r+f,o+p);if(Math.abs(d-a)>4){l=!1;break}}if(!l)break}if(!l)return;const h=a+1,u=[{rx:-12,rz:-12},{rx:0,rz:-14},{rx:12,rz:-10},{rx:-14,rz:0},{rx:0,rz:0},{rx:14,rz:2},{rx:-10,rz:12},{rx:4,rz:14}];for(const{rx:f,rz:p}of u){const d=r+f,_=o+p,g=e.getSurfaceY(d,_)+1,m=Math.round((h+g)/2);this._buildSmallHouse(e,d,m,_)}this._buildPaths(e,r,h,o,u)}_buildSmallHouse(e,t,n,s){const r=t-2,o=s-2,a="cobblestone",c="planks",l="wood",h="glass",u="planks";for(let f=0;f<5;f++)for(let p=0;p<5;p++){for(let d=0;d<6;d++)e.setBlock(r+f,n+d,o+p,"air");e.setBlock(r+f,n,o+p,a)}for(let f=1;f<=3;f++)for(let p=0;p<5;p++)for(let d=0;d<5;d++)if(p===0||p===4||d===0||d===4){const _=(p===0||p===4)&&(d===0||d===4);if(d===4&&p===2&&(f===1||f===2))continue;if(f===2&&d===0&&(p===1||p===3)){e.setBlock(r+p,n+f,o+d,h);continue}if(f===2&&p===4&&(d===1||d===3)){e.setBlock(r+p,n+f,o+d,h);continue}if(f===2&&p===0&&(d===1||d===3)){e.setBlock(r+p,n+f,o+d,h);continue}e.setBlock(r+p,n+f,o+d,_?l:c)}for(let f=0;f<5;f++)for(let p=0;p<5;p++)e.setBlock(r+f,n+4,o+p,u);for(let f=1;f<=3;f++)e.setBlock(r+f,n+5,o+1,u),e.setBlock(r+f,n+5,o+2,u),e.setBlock(r+f,n+5,o+3,u);e.setBlock(r+2,n+2,o+2,"torch")}_buildPaths(e,t,n,s,r){for(const{rx:o,rz:a}of r){const c=t+o,l=s+a;let h=t,u=s;for(;Math.abs(h-c)>1||Math.abs(u-l)>1;){const f=Math.sign(c-h),p=Math.sign(l-u);Math.abs(c-h)>Math.abs(l-u)?h+=f:(Math.abs(l-u)>Math.abs(c-h)||(h+=f),u+=p);const d=e.getSurfaceY(h,u)+1;e.setBlock(h,d,u,"gravel")}}for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++){const c=e.getSurfaceY(t+o,s+a)+1;e.setBlock(t+o,c,s+a,"gravel")}}generateDungeon(e,t,n,s){const r=Math.floor(this._hash2D(n*5+3,s*7+11)*10)+3,o=Math.floor(this._hash2D(n*9+7,s*3+13)*10)+3,a=Math.floor(this._hash2D(n*11+1,s*13+5)*20)+10,c=n*16+r,l=s*16+o,h=e.getSurfaceY(c,l);if(a>h-6)return;const u=c-3,f=l-3;for(let p=0;p<6;p++)for(let d=0;d<7;d++)for(let _=0;_<7;_++)d===0||d===6||_===0||_===6||p===0||p===5?(d===0||d===6)&&(_===0||_===6)||this._hash2D((u+d)*3+7,(f+_)*5+1)>.7?e.setBlock(u+d,a+p,f+_,"mossy_cobblestone"):e.setBlock(u+d,a+p,f+_,"cobblestone"):e.setBlock(u+d,a+p,f+_,"air");e.setBlock(c,a+1,l,"mossy_cobblestone"),e.setBlock(c+1,a+1,l+1,"crafting_table"),e.setBlock(c-1,a+1,l-1,"crafting_table"),e.setBlock(c+2,a+2,l,"torch")}generatePyramid(e,t,n,s){const r=Math.floor(this._hash2D(n*3+1,s*7+5)*8)+4,o=Math.floor(this._hash2D(n*5+9,s*3+2)*8)+4,a=n*16+r,c=s*16+o,l=e.getSurfaceY(a,c);if(this.biomeAt(a,c,l)!=="desert")return;const u=l+1,f=4;for(let b=0;b<=f;b++){const E=(f-b)*2+1,S=b;for(let w=0;w<E;w++)for(let A=0;A<E;A++)e.setBlock(a-f+S+w,u+b,c-f+S+A,"sandstone")}const p=u-3;for(let b=0;b<3;b++)for(let E=-1;E<=1;E++)for(let S=-1;S<=1;S++)e.setBlock(a+E,p+b,c+S,"air");for(let b=0;b<3;b++)for(let E=-2;E<=2;E++)for(let S=-2;S<=2;S++)(Math.abs(E)===2||Math.abs(S)===2)&&e.setBlock(a+E,p+b,c+S,"sandstone");for(let b=-1;b<=1;b++)for(let E=-1;E<=1;E++)e.setBlock(a+b,p-1,c+E,"sandstone"),e.setBlock(a+b,p+3,c+E,"sandstone");e.setBlock(a,p,c,"gold_block"),e.setBlock(a+1,p,c,"diamond_block"),e.setBlock(a-1,p,c,"diamond_block"),e.setBlock(a,p,c+1,"gold_block"),e.setBlock(a,p,c-1,"gold_block"),e.setBlock(a,p+1,c,"torch");const d=Math.floor(this._hash2D(a+3,c+7)*4),_=[[1,0],[-1,0],[0,1],[0,-1]],[g,m]=_[d];e.setBlock(a+g*f,u+1,c+m*f,"air"),e.setBlock(a+g*f,u,c+m*f,"air"),e.setBlock(a+g,p+2,c+m,"air"),e.setBlock(a+g,p+1,c+m,"air"),e.setBlock(a+g,p,c+m,"air")}}class $s{constructor(e=1337){this.seed=e,this.generator=new fv(e),this.chunks=new Map,this.listeners=new Set,this._inStructureGen=!1}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emitChange(e){this.listeners.forEach(t=>t(e))}chunkKey(e,t){return`${e},${t}`}hash2D(e,t){let n=e*374761393+t*668265263+this.seed*2654435761>>>0;return n=(n^n>>13)>>>0,n=n*1274126177>>>0,(n&65535)/65535}_bid(e){return Ce[e]?.id??0}_treeSpot(e,t,n=4.5,s=.35){return Math.abs(e)<=6&&Math.abs(t)<=6?!1:this.generator.noise.perlin2(e/n,t/n)>s}shouldPlaceTree(e,t,n,s){return n<=3||Math.abs(e)<=6&&Math.abs(t)<=6?!1:s==="jungle"?this.generator.noise.perlin2((e+900)/30,(t-600)/30)<-.1?!1:this._treeSpot(e,t,3.5,.3):s==="taiga"?this._treeSpot(e,t,5,.38):s==="swamp"?this._treeSpot(e,t,5,.4):s==="forest"?this.generator.noise.perlin2((e+1200)/50,(t-800)/50)<.1?!1:this._treeSpot(e,t,4.5,.35):s==="plains"?this._treeSpot(e,t,8,.55):s==="savanna"?this._treeSpot(e,t,10,.65):!1}shouldPlaceCactus(e,t,n,s){return s!=="desert"||n<=22||Math.abs(e)<=6&&Math.abs(t)<=6?!1:this._treeSpot(e,t,6,.6)}shouldPlaceDeadBush(e,t,n,s){return s!=="desert"||n<=22||Math.abs(e)<=6&&Math.abs(t)<=6?!1:this._treeSpot(e,t,5,.55)}_generateTerrain(e,t){const n=new ah(e,t),s=[],r=[],o=[];for(let a=0;a<Pe;a++)for(let c=0;c<Pe;c++){const l=e*Pe+c,h=t*Pe+a,u=this.generator.heightAt(l,h),f=this.generator.biomeAt(l,h,u);for(let p=0;p<Nn;p++){let d=0;if(p===0){d=Ce.bedrock.id,n.set(c,p,a,d);continue}if(p<=u){p===u?f==="desert"?d=Ce.sand.id:f==="snow"?d=Ce.snow.id:f==="beach"?d=this.hash2D(l+a,h-c)>.5?Ce.sand.id:Ce.gravel.id:f==="swamp"?u<=vi+1&&this.generator.noise.perlin2(l*.5,h*.5)>.3?d=Ce.water.id:d=Ce.grass.id:f==="taiga"&&this.generator.noise.perlin2(l*.7+100,h*.7)>.4?d=Ce.snow.id:d=Ce.grass.id:p>=u-3?f==="desert"||f==="beach"?d=Ce.sand.id:d=Ce.dirt.id:d=Ce.stone.id;const _=p<u-4?this.generator.oreAt(l,p,h):null;_&&(d=Ce[_].id)}d!==0&&p>1&&p<u-1&&p>20&&this.generator.isCave(l,p,h)&&(d=0),p<=vi&&p>u&&(d=Ce.water.id),n.set(c,p,a,d)}if(f!=="desert"&&f!=="beach"&&u>vi+1){const p=this.generator.noise.perlin2(l*.3+777,h*.3+777);if(p>.68)u+1<Nn&&n.set(c,u+1,a,Ce.tallgrass.id);else if(p>.63){const d=this.hash2D(l*17+3,h*13+7)>.5?Ce.flower_red.id:Ce.flower_yellow.id;u+1<Nn&&n.set(c,u+1,a,d)}}this.shouldPlaceTree(l,h,u,f)&&s.push({wx:l,wz:h,h:u,biome:f}),this.shouldPlaceCactus(l,h,u,f)&&r.push({wx:l,wz:h,h:u}),this.shouldPlaceDeadBush(l,h,u,f)&&o.push({wx:l,wz:h,h:u})}if(!this._inStructureGen){this._inStructureGen=!0;try{this.generator.shouldPlaceVillage(e,t)&&this.generator.generateVillage(this,n,e,t),this.generator.shouldPlaceDungeon(e,t)&&this.generator.generateDungeon(this,n,e,t),this.generator.shouldPlacePyramid(e,t)&&this.generator.generatePyramid(this,n,e,t)}finally{this._inStructureGen=!1}}return{chunk:n,treePositions:s,cactusPositions:r,deadBushPositions:o}}_applyOakTree(e,t,n){const s=4+Math.floor(this.hash2D(e*3+1,t*5+7)*3);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,Ce.wood.id,!1);const r=n+s;for(let a=-2;a<=2;a++)for(let c=-2;c<=2;c++)Math.abs(c)===2&&Math.abs(a)===2||this._setBlockIfChunkExists(e+c,r-1,t+a,Ce.leaves.id,!0);for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++)this._setBlockIfChunkExists(e+c,r,t+a,Ce.leaves.id,!0);this._setBlockIfChunkExists(e,r+1,t,Ce.leaves.id,!0);const o=[[1,0,e*7+3,t*11+2],[-1,0,e*13+5,t*7+9],[0,1,e*5+11,t*17+3],[0,-1,e*19+7,t*3+13]];for(const[a,c,l,h]of o)this.hash2D(l,h)>.3&&this._setBlockIfChunkExists(e+a,r+1,t+c,Ce.leaves.id,!0)}_applyTree(e,t,n,s){s==="jungle"?this._applyJungleTree(e,t,n):s==="taiga"?this._applySpruceTree(e,t,n):s==="swamp"?this._applySwampTree(e,t,n):this._applyOakTree(e,t,n)}_applyJungleTree(e,t,n){const s=8+Math.floor(this.hash2D(e*3+1,t*5+7)*5);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,Ce.wood.id,!1),this._setBlockIfChunkExists(e+1,a,t,Ce.wood.id,!1),this._setBlockIfChunkExists(e,a,t+1,Ce.wood.id,!1),this._setBlockIfChunkExists(e+1,a,t+1,Ce.wood.id,!1);const r=n+s,o=Ce.leaves.id;for(let a=-3;a<=4;a++)for(let c=-3;c<=4;c++)Math.abs(a-.5)+Math.abs(c-.5)<4.5&&this._setBlockIfChunkExists(e+a,r-2,t+c,o,!0);for(let a=-3;a<=4;a++)for(let c=-3;c<=4;c++)Math.abs(a-.5)+Math.abs(c-.5)<4&&(this._setBlockIfChunkExists(e+a,r-1,t+c,o,!0),this._setBlockIfChunkExists(e+a,r,t+c,o,!0));for(let a=1;a<=3;a++){const c=4-a;for(let l=-c;l<=c+1;l++)for(let h=-c;h<=c+1;h++)Math.abs(l-.5)+Math.abs(h-.5)<c+.5&&this._setBlockIfChunkExists(e+l,r+a,t+h,o,!0)}for(let a=0;a<8;a++){const c=e-3+Math.floor(this.hash2D(e+a*7,t+a*3)*7),l=t-3+Math.floor(this.hash2D(e+a*5,t+a*9)*7),h=1+Math.floor(this.hash2D(e+a,t+a*2)*4);for(let u=0;u<h;u++)this._setBlockIfChunkExists(c,r-1-u,l,Ce.vines.id,!0)}}_applySpruceTree(e,t,n){const s=6+Math.floor(this.hash2D(e*7+3,t*9+2)*5);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,Ce.wood.id,!1);const r=n+s,o=Ce.leaves.id;for(let a=0;a<6;a++){const c=3-a;if(c<0)break;const l=r-1+a;for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)Math.abs(h)+Math.abs(u)<=c+1&&this._setBlockIfChunkExists(e+h,l,t+u,o,!0)}this._setBlockIfChunkExists(e,r+3,t,o,!0),this._setBlockIfChunkExists(e,r+4,t,o,!0)}_applySwampTree(e,t,n){const s=3+Math.floor(this.hash2D(e*3+1,t*5+7)*3);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,Ce.wood.id,!1);const r=n+s,o=Ce.leaves.id;for(let a=-1;a<=2;a++){const c=a<=0?2:3-a;for(let l=-c;l<=c;l++)for(let h=-c;h<=c;h++)Math.abs(l)+Math.abs(h)<=c+.5&&this._setBlockIfChunkExists(e+l,r+a,t+h,o,!0)}for(let a=0;a<6;a++){const c=[[1,0],[-1,0],[0,1],[0,-1]][a%4],l=2+Math.floor(this.hash2D(e+a,t+a*2)*3);for(let h=0;h<l;h++)this._setBlockIfChunkExists(e+c[0]*2,r-h,t+c[1]*2,Ce.vines.id,!0)}}_applyCactus(e,t,n){const s=2+Math.floor(this.hash2D(e*2+1,t*3+7)*2);for(let r=0;r<s;r++)this._setBlockIfChunkExists(e,n+1+r,t,Ce.wood.id,!0);if(s>=3&&this.hash2D(e*5+3,t*11+2)>.5){const r=this.hash2D(e*7+1,t*3+5)>.5?1:-1;this._setBlockIfChunkExists(e+r,n+s-1,t,Ce.wood.id,!0),this._setBlockIfChunkExists(e+r,n+s-2,t,Ce.wood.id,!0)}}_applyDeadBush(e,t,n){this._setBlockIfChunkExists(e,n+1,t,Ce.dead_bush.id,!0)}_applyFlowingWater(e,t,n){const s=Ce.water.id,r=[];for(let a=0;a<Pe;a++)for(let c=0;c<Pe;c++){const l=t*Pe+c,h=n*Pe+a;for(let u=vi;u>=vi-6;u--){const f=e.get(c,u,a);if(f===s){const p=[[1,0],[-1,0],[0,1],[0,-1]];for(const[d,_]of p){const g=l+d,m=h+_,b=this.getBlock(g,u,m),E=this.getBlock(g,u-1,m);!b.solid&&!b.liquid&&E.solid&&r.push({wx:g,wy:u,wz:m,dist:1})}break}if(f!==0&&f!==s)break}}const o=new Set;for(;r.length>0;){const a=r.shift(),c=`${a.wx},${a.wy},${a.wz}`;if(o.has(c)||(o.add(c),this.setBlock(a.wx,a.wy,a.wz,"water"),a.dist>=4))continue;const l=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,u]of l){const f=a.wx+h,p=a.wz+u,d=`${f},${a.wy},${p}`;if(o.has(d))continue;const _=this.getBlock(f,a.wy,p),g=this.getBlock(f,a.wy-1,p);!_.solid&&!_.liquid&&g.solid&&r.push({wx:f,wy:a.wy,wz:p,dist:a.dist+1})}}}getOrCreateChunk(e,t){const n=this.chunkKey(e,t);if(this.chunks.has(n))return this.chunks.get(n);const{chunk:s,treePositions:r,cactusPositions:o,deadBushPositions:a}=this._generateTerrain(e,t);this.chunks.set(n,s);for(const{wx:c,wz:l,h,biome:u}of r)this._applyTree(c,l,h,u);for(const{wx:c,wz:l,h}of o)this._applyCactus(c,l,h);for(const{wx:c,wz:l,h}of a)this._applyDeadBush(c,l,h);return this._applyFlowingWater(s,e,t),s}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))}_setBlockIfChunkExists(e,t,n,s,r=!1){if(t<0||t>=Nn)return;const o=Math.floor(e/Pe),a=Math.floor(n/Pe);let c=this.getChunk(o,a);if(!c){const u=this._generateTerrain(o,a);this.chunks.set(this.chunkKey(o,a),u.chunk),c=u.chunk}const l=(e%Pe+Pe)%Pe,h=(n%Pe+Pe)%Pe;if(r){const u=c.get(l,t,h),f=nl[u];if(u!==Ce.air.id&&!(f&&f.decoration))return}c.set(l,t,h,s)}getBlock(e,t,n){if(t<0||t>=Nn)return Ce.air;const s=Math.floor(e/Pe),r=Math.floor(n/Pe),o=this.getOrCreateChunk(s,r),a=(e%Pe+Pe)%Pe,c=(n%Pe+Pe)%Pe;return nl[o.get(a,t,c)]||Ce.air}getSurfaceY(e,t){for(let n=Nn-1;n>=0;n--){const s=this.getBlock(e,n,t);if(s.solid&&!s.liquid)return n}return 1}setBlock(e,t,n,s){if(t<0||t>=Nn)return;const r=Math.floor(e/Pe),o=Math.floor(n/Pe),a=this.getOrCreateChunk(r,o),c=(e%Pe+Pe)%Pe,l=(n%Pe+Pe)%Pe;a.set(c,t,l,Ce[s]?.id??Ce.air.id);const h=new Set([this.chunkKey(r,o)]);c===0&&h.add(this.chunkKey(r-1,o)),c===Pe-1&&h.add(this.chunkKey(r+1,o)),l===0&&h.add(this.chunkKey(r,o-1)),l===Pe-1&&h.add(this.chunkKey(r,o+1)),this.emitChange({wx:e,wy:t,wz:n,blockName:s,chunkX:r,chunkZ:o,affectedChunkKeys:[...h]})}serialize(){return{seed:this.seed,chunks:[...this.chunks.entries()].map(([e,t])=>({key:e,blocks:Array.from(t.blocks)}))}}static fromSave(e){const t=new $s(e.seed);for(const n of e.chunks||[]){const[s,r]=n.key.split(",").map(Number),o=new ah(s,r);o.blocks=Uint16Array.from(n.blocks),t.chunks.set(n.key,o)}return t}}const pv=document.getElementById("app"),{scene:qe,camera:ei,renderer:un,sun:ch,ambient:mv,composer:na}=s_(pv);qe.fog=new bl(9420776,90,420);const Ul=4,su="mc-clone-worlds";let is=null,we=null,Pt=null,vt=null,jt=null;const $r=[];function ho(){try{return JSON.parse(localStorage.getItem(su)||"[]")}catch{return[]}}function Nl(i){localStorage.setItem(su,JSON.stringify(i))}function Fl(i){return`mc-clone-world-${i}`}function gv(i){const e=localStorage.getItem(Fl(i));if(!e)return null;try{const t=JSON.parse(e);if(t?.version===Ul&&t.world)return{world:$s.fromSave(t.world),player:t.player||null,hud:t.hud||null,furnaces:t.furnaces||null,spawnPoint:t.player?.spawnPoint||null,dayCount:t.dayCount,timeT:t.timeT};if(t?.seed&&t?.chunks)return{world:$s.fromSave(t),player:null,hud:null,furnaces:null,spawnPoint:null,dayCount:null,timeT:null}}catch{}return null}function Bl(){if(!is||!we)return;localStorage.setItem(Fl(is),JSON.stringify({version:Ul,world:we.serialize(),player:{px:J.position.x,py:J.position.y,pz:J.position.z,rx:J.rotation.x,ry:J.rotation.y,health:dn,hunger:rn,xp:mn,xpLevel:Vn,spawnPoint:ss},hud:{activeSlot:Ne.activeSlot,inventory:[...Ne.inventory.entries()],hotbar:[...Ne.hotbar],toolDurability:[...Ne.toolDurability.entries()],armorSlots:{...Ne.armorSlots},armorDurability:[...Ne.armorDurability.map.entries()]},furnaces:nv(),dayCount:wi,timeT:Zt.t}));const i=ho(),e=i.find(t=>t.id===is);e&&(e.lastPlayed=Date.now()),Nl(i)}function ru(i,e){const t=`world_${Date.now()}_${Math.floor(Math.random()*1e4)}`,n=e?Number(e):Math.floor(Math.random()*1e5);we=new $s(n),Pt=null,vt=null,is=t;const s=ho();return s.push({id:t,name:i,seed:n,created:Date.now(),lastPlayed:Date.now()}),Nl(s),Bl(),t}function _v(i){localStorage.removeItem(Fl(i));const e=ho().filter(t=>t.id!==i);Nl(e)}const Ne=new q_;vt&&(Ne.activeSlot=Math.max(0,Math.min(Ne.hotbar.length-1,vt.activeSlot||0)),vt.inventory&&(Ne.inventory=new Map(vt.inventory)),vt.hotbar&&(Ne.hotbar=vt.hotbar.slice(0,Ne.hotbar.length)),vt.toolDurability&&(Ne.toolDurability=new Map(vt.toolDurability)),Ne.render());const Fs=new $_(ei),Bs=new l_(qe),gs=new v_(qe),Pi=new E_(qe),ou=new R_(qe);ou.init(15,400);const vv=new U_(qe),ia=new N_(qe);let Jt=!1,wi=0,jr=!1,Ai=0;const Un=[],au=28,xv=12;let ss=null,Kr=!1,ts=0;const hl=1.5;j_(Is);window._furnacePutItem=i=>Q_(0,0,0,i,Ne);window._furnaceTakeItem=i=>ev(i,Ne);const Ri=new Map,Mv=20;function yv(){for(const[t,n]of Ri){const[s,r,o]=t.split(",").map(Number);we.getBlock(s,r,o).id!==19&&(qe.remove(n),Ri.delete(t))}const i=J.position,e=[];for(const[t,n]of Ri){const s=n.position.distanceTo(i);e.push({key:t,light:n,dist:s})}e.sort((t,n)=>t.dist-n.dist);for(let t=0;t<e.length;t++)e[t].light.intensity=t<Mv?1.5:0}function Sv(i,e){const t=Math.round(i.x),n=Math.round(i.y),s=Math.round(i.z),r=e*e;for(let a=-e;a<=e;a++)for(let c=-e;c<=e;c++)for(let l=-e;l<=e;l++){if(a*a+c*c+l*l>r)continue;const h=we.getBlock(t+a,n+c,s+l);h.solid&&h.hardness!==-1&&we.setBlock(t+a,n+c,s+l,"air")}const o=J.position.distanceTo(i);if(o<e+2){const a=Math.max(0,Math.floor((1-Math.max(0,o-1)/(e+2))*12));a>0&&bi(a,"Blown up by a Creeper")}}let mn=0,Vn=0;const _s=10;let dn=20,rn=20,sa=0,Us=0,Ns=0,Ji=10,uo=!1,ti=!1,ra=0,hh="day",oa=0;const ul=document.getElementById("health-bar"),Ev=document.getElementById("hunger-bar"),bv=document.getElementById("xp-bar"),lu=document.getElementById("title-screen"),Zr=document.getElementById("pause-screen"),Jr=document.getElementById("death-screen"),Tv=document.getElementById("death-message");function Qs(){let i="";for(let e=0;e<10;e++){const t=dn-e*2;t>=2?i+='<span class="heart"></span>':t===1?i+='<span class="heart half"></span>':i+='<span class="heart empty"></span>'}ul.innerHTML=i}function er(){let i="";for(let e=0;e<10;e++){const t=rn-e*2;t>=2?i+='<span class="hunger"></span>':t===1?i+='<span class="hunger half"></span>':i+='<span class="hunger empty"></span>'}Ev.innerHTML=i}function tr(){const i=Math.min(100,mn/_s*100);bv.innerHTML=`<div class="fill" style="width:${i}%"></div><span class="level">${Vn}</span>`}const Qr=document.getElementById("damage-vignette"),Os=document.getElementById("hit-marker");let zr=0,Hr=0,uh=0;function wv(){Qr&&(Qr.classList.add("active"),zr=.3)}function cu(){Os&&(Os.classList.add("active"),Hr=.15,setTimeout(()=>Os.classList.remove("active"),150))}function Av(){const i=document.getElementById("app");i&&(i.classList.add("shake"),setTimeout(()=>i.classList.remove("shake"),400))}function bi(i,e){if(Jt)return;const t=Ne.getTotalArmorReduction();let n=i;if(t>0){const s=Math.min(.8,t*.04),r=Math.ceil(i*s);n=i-r,n<1&&(n=0),(n>0||r>0)&&Ne.damageArmor()}n<=0||(dn=Math.max(0,dn-n),Qs(),m_(),wv(),Av(),dn<=0&&Rv(e))}function Rv(i){Tv.textContent=i||"You died!",Jr.classList.remove("hidden"),document.exitPointerLock(),ti=!0}function Cv(){dn=20,rn=20,mn=0,Vn=0,Us=0,Ns=0,Ji=10,zs&&(clearTimeout(zs),zs=null),Qs(),er(),tr();const i=ss?eo(ss.x,ss.z,10):eo(0,0,10);J.position.copy(i),J.velocity.set(0,0,0),Jr.classList.add("hidden"),ti=!1,un.domElement.requestPointerLock()}function Pv(i,e,t){if(Kr)return;const n=Zt.t/Zt.dayLength*Math.PI*2;if(!(Math.sin(n)<-.1)){ut("You can only sleep at night.");return}Kr=!0,ts=hl,ss={x:i,y:e,z:t},ut("Sleeping...")}function Dv(){const i=Zt.dayLength,e=i*.23;for(;Zt.t>e;)Zt.t-=i;Zt.t=e,wi++,ut(`Good morning! Day ${wi}`),Kr=!1,ts=0;for(let t=ot.length-1;t>=0;t--)ot[t].type.passive||(qe.remove(ot[t].mesh),ms(ot[t].mesh),ot.splice(t,1))}Qs();er();tr();const Zi=document.getElementById("chat"),ni=document.getElementById("chat-input");function ut(i){const e=document.createElement("div");for(e.className="msg",e.textContent=i,Zi.appendChild(e),Zi.scrollTop=Zi.scrollHeight;Zi.children.length>20;)Zi.removeChild(Zi.firstChild)}function Lv(){ni.classList.add("visible"),ni.focus(),document.exitPointerLock()}function dh(){ni.classList.remove("visible"),ni.value="",Ne.inventoryEl.classList.contains("visible")||un.domElement.requestPointerLock()}ni.addEventListener("keydown",i=>{if(i.code==="Enter"){const e=ni.value.trim();e&&(ut(`<You> ${e}`),hn.send("chat",{text:e})),dh()}i.code==="Escape"&&dh()});const Iv=new jd,Uv=`./textures/minecraft-atlas.png?v=${Ul}`;Iv.load(Uv,i=>{rh(i),we&&gh()},void 0,()=>{const i=new Uint8Array([126,200,83,255]),e=new zd(i,1,1,on);e.needsUpdate=!0,rh(e),we&&gh()});const J=new jg(ei,un.domElement);function eo(i=0,e=0,t=8){const n=new L;for(let r=0;r<=t;r++)for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++){if(Math.max(Math.abs(a),Math.abs(o))!==r)continue;const c=i+a,l=e+o,h=we.getSurfaceY(c,l)+1+J.eyeHeight+.05;if(n.set(c+.5,h,l+.5),!J.collides(we,n))return n.clone()}const s=new L(i+.5,we.getSurfaceY(i,e)+1+J.eyeHeight+.05,e+.5);for(let r=0;r<20;r++){if(!J.collides(we,s))return s.clone();s.y+=.5}return s}un.domElement.addEventListener("click",()=>un.domElement.requestPointerLock());const Ol=document.getElementById("title-main"),kl=document.getElementById("title-worlds"),hu=document.getElementById("title-new-world"),Ir=document.getElementById("world-list");function uu(){const i=ho();if(i.length===0){Ir.innerHTML='<div style="color:var(--color-text-muted); padding:16px; text-align:center; font-family:var(--font-ui);">No worlds yet. Create one!</div>';return}Ir.innerHTML=i.map(e=>{const t=new Date(e.lastPlayed).toLocaleDateString();return`<div class="world-item" data-id="${e.id}">
      <div>
        <div class="name">${e.name}</div>
        <div class="info">Seed: ${e.seed} | Last played: ${t}</div>
      </div>
      <button class="delete-btn" data-del="${e.id}">Delete</button>
    </div>`}).join(""),Ir.querySelectorAll(".world-item").forEach(e=>{e.addEventListener("click",t=>{if(t.target.classList.contains("delete-btn"))return;const n=e.dataset.id,s=gv(n);s&&(we=s.world,Pt=s.player,vt=s.hud,jt=s,is=n,zl(!1))})}),Ir.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),confirm("Delete this world?")&&(_v(e.dataset.del),uu())})})}function Ms(i){[Ol,kl,hu].forEach(e=>e.classList.add("hidden")),i&&i.classList.remove("hidden")}function zl(i){for(Ms(null),lu.classList.add("hidden"),uo=!0,Jt=i,Pt?(J.position.set(Pt.px||0,Pt.py||40,Pt.pz||0),J.rotation.set(Pt.rx||0,Pt.ry||0),Pt.health!=null&&(dn=Pt.health,Qs()),Pt.hunger!=null&&(rn=Pt.hunger,er()),Pt.xp!=null&&(mn=Pt.xp),Pt.xpLevel!=null&&(Vn=Pt.xpLevel),tr()):J.position.copy(eo(0,0,10)),vt&&(Ne.activeSlot=Math.max(0,Math.min(Ne.hotbar.length-1,vt.activeSlot||0)),vt.inventory&&(Ne.inventory=new Map(vt.inventory)),vt.hotbar&&(Ne.hotbar=vt.hotbar.slice(0,Ne.hotbar.length)),vt.toolDurability&&(Ne.toolDurability=new Map(vt.toolDurability)),vt.armorSlots&&(Ne.armorSlots={...vt.armorSlots}),vt.armorDurability&&(Ne.armorDurability.map=new Map(vt.armorDurability)),Ne.render());$r.length>0;){const e=$r.shift();we.setBlock(e.wx,e.wy,e.wz,e.blockName)}un.domElement.requestPointerLock(),gu(!0),jt&&jt.spawnPoint&&(ss=jt.spawnPoint),jt&&jt.furnaces&&iv(jt.furnaces),jt&&jt.dayCount!=null&&(wi=jt.dayCount),jt&&jt.timeT!=null&&(Zt.t=jt.timeT),Gv(),Bv()}document.getElementById("btn-singleplayer").addEventListener("click",()=>{uu(),Ms(kl)});document.getElementById("btn-back-title").addEventListener("click",()=>Ms(Ol));document.getElementById("btn-back-worlds").addEventListener("click",()=>Ms(kl));document.getElementById("btn-create-world").addEventListener("click",()=>Ms(hu));document.getElementById("btn-start-new").addEventListener("click",()=>{const i=document.getElementById("new-world-name").value.trim()||"New World",e=document.getElementById("new-world-seed").value.trim();ru(i,e),zl(!1)});document.getElementById("new-world-name").addEventListener("keydown",i=>{i.code==="Enter"&&document.getElementById("btn-start-new").click()});document.getElementById("new-world-seed").addEventListener("keydown",i=>{i.code==="Enter"&&document.getElementById("btn-start-new").click()});document.getElementById("btn-creative").addEventListener("click",()=>{ru("Creative World",""),zl(!0)});document.getElementById("btn-resume").addEventListener("click",()=>{Zr.classList.add("hidden"),ti=!1,un.domElement.requestPointerLock()});document.getElementById("btn-save-quit").addEventListener("click",()=>{xu(),Zr.classList.add("hidden"),lu.classList.remove("hidden"),Ms(Ol),uo=!1,ti=!1,we=null,is=null,Pt=null,vt=null,Fv()});document.getElementById("btn-respawn").addEventListener("click",()=>Cv());const to=new sf,fo=new En,rs=new En,os=new En;qe.add(fo);qe.add(rs);qe.add(os);const ks=new lt(new Qt(1.005,1.005,1.005),new bn({color:0,wireframe:!0,transparent:!0,opacity:.6}));ks.visible=!1;qe.add(ks);const du=4,zn=new Map;let fh=Number.NaN,ph=Number.NaN;const mh=new L;let aa=0;const hn=new o_,Ds=new Map,Vr=new En;qe.add(Vr);const ot=[],Nv=12;let la=!1;function fu(){if(ot.length>=Nv)return;const i=Math.random()*Math.PI*2,e=25+Math.random()*35,t=J.position.x+Math.cos(i)*e,n=J.position.z+Math.sin(i)*e,s=we.getSurfaceY(Math.floor(t),Math.floor(n)),r=Kc[Math.floor(Math.random()*Kc.length)],o=V_(r);o.position.set(t,s+1,n),qe.add(o),ot.push({type:r,mesh:o,dir:Math.random()*Math.PI*2,bobPhase:0,hp:r.hp})}function Fv(){for(const i of ot)qe.remove(i.mesh),ms(i.mesh);ot.length=0}function Bv(){for(let i=0;i<4;i++)fu()}function pu(i,e,t,n,s=!1){const r=new lt(new Qt(.1,.1,.5),new bn({color:9136404}));r.position.copy(i),r.lookAt(i.clone().add(e)),qe.add(r),Un.push({mesh:r,velocity:e.clone().multiplyScalar(t),damage:n,age:0,fromPlayer:s,stuck:!1,stuckTimer:0,stuckPos:null})}function Ov(i){for(let e=Un.length-1;e>=0;e--){const t=Un[e];if(t.stuck){if(t.stuckTimer-=i,t.mesh.position.distanceTo(J.position)<1.8&&!t.fromPlayer){qe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Ne.addItem("arrow",1),Qh(),Un.splice(e,1);continue}t.stuckTimer<=0&&(Pi.spawn(t.stuckPos.x,t.stuckPos.y+.5,t.stuckPos.z,"arrow",9136404),qe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Un.splice(e,1));continue}t.age+=i,t.velocity.y-=xv*i;const n=t.velocity.clone().multiplyScalar(i),s=t.mesh.position.clone().add(n);if(n.lengthSq()>1e-4){const l=t.mesh.position.clone().add(t.velocity);t.mesh.lookAt(l)}const r=Math.floor(s.x),o=Math.floor(s.y),a=Math.floor(s.z),c=we.getBlock(r,o,a);if(c.solid&&!c.liquid){t.stuck=!0,t.stuckTimer=3,t.stuckPos=t.mesh.position.clone(),t.mesh.position.copy(s),t.mesh.position.addScaledVector(t.velocity.clone().normalize(),-.1);continue}if(t.fromPlayer){for(const l of ot)if(s.distanceTo(l.mesh.position)<.8){if(l.hp=(l.hp||l.type.hp)-t.damage,ut(`Arrow hit ${l.type.id} for ${t.damage} dmg`),ps(l.type.id,"hurt"),gs.spawn(s.x,s.y,s.z,16755200,5),l.type.passive&&(l.fleeTimer=4),l.hp<=0){ut(`${l.type.id} died!`),ps(l.type.id,"death");const u=l.mesh.position.clone();if(qe.remove(l.mesh),ms(l.mesh),ot.splice(ot.indexOf(l),1),!Jt){const p=Ll(l.type);for(const d of p)for(let _=0;_<d.count;_++)Pi.spawn(u.x,u.y+.5,u.z,d.item,l.type.color)}const f=l.type.xp??(l.type.passive?2:5);for(mn+=f;mn>=_s;)mn-=_s,Vn++,ut(`Level up! Now level ${Vn}`);tr()}qe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Un.splice(e,1);break}if(e<0||!Un[e])continue}if(!t.fromPlayer&&s.distanceTo(J.position)<1.2){bi(t.damage,"Shot by a skeleton"),ut(`You were hit by an arrow for ${t.damage} dmg`),gs.spawn(J.position.x,J.position.y+1,J.position.z,16724787,8),cu(),qe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Un.splice(e,1);continue}if(t.age>60){qe.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Un.splice(e,1);continue}t.mesh.position.copy(s)}}function kv(i,e){return`${i},${e}`}function mu(i){const[e,t]=i.split(",").map(Number);return{cx:e,cz:t}}function zv(i,e,t=du){const n=new Set;for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)n.add(kv(i+r,e+s));return n}function Hl(i){const{cx:e,cz:t}=mu(i),n=we.getOrCreateChunk(e,t),{mesh:s,liquidMesh:r,emissiveMesh:o}=n.buildMesh(we),a=zn.get(i);a?(a.liquidMesh&&!r&&rs.remove(a.liquidMesh),!a.liquidMesh&&r&&rs.add(r),a.emissiveMesh&&!o&&os.remove(a.emissiveMesh),!a.emissiveMesh&&o&&os.add(o),zn.set(i,{mesh:s,liquidMesh:r,emissiveMesh:o})):(zn.set(i,{mesh:s,liquidMesh:r,emissiveMesh:o}),fo.add(s),r&&rs.add(r),o&&os.add(o))}function Hv(i){const e=zn.get(i);if(!e)return;const{cx:t,cz:n}=mu(i),s=we.getChunk(t,n);s&&s.disposeMesh(),fo.remove(e.mesh),e.liquidMesh&&rs.remove(e.liquidMesh),e.emissiveMesh&&os.remove(e.emissiveMesh),zn.delete(i)}function Vv(i,e){const t=zv(i,e,du);for(const n of zn.keys())t.has(n)||Hv(n);for(const n of t)zn.has(n)||Hl(n)}function gh(){for(const i of zn.keys())Hl(i)}function gu(i=!1){const e=Math.floor(J.position.x/Pe),t=Math.floor(J.position.z/Pe);!i&&e===fh&&t===ph||(fh=e,ph=t,Vv(e,t))}function Gv(){we.onChange(i=>{for(const e of i.affectedChunkKeys||[])zn.has(e)&&Hl(e)})}function _u(){to.setFromCamera(new Ae(0,0),ei);const i=to.intersectObjects([...fo.children,...rs.children,...os.children],!1);if(!i.length)return null;const e=i[0]?.face;if(!e?.normal)return null;const t=i[0].point.clone().addScaledVector(e.normal,-.01);return{wx:Math.floor(t.x),wy:Math.floor(t.y),wz:Math.floor(t.z),nx:Math.floor(t.x+e.normal.x),ny:Math.floor(t.y+e.normal.y),nz:Math.floor(t.z+e.normal.z)}}let Nt=null;const Wv=.45;function vu(i){const e=we.getBlock(i.wx,i.wy,i.wz);if(we.setBlock(i.wx,i.wy,i.wz,"air"),h_(e.name),gs.spawn(i.wx,i.wy,i.wz,e.color||8947848,7),!Jt){const n=e.drop||Zh[e.id]||e.name.toLowerCase().replaceAll(" ","_");if(Pi.spawn(i.wx+.5,i.wy+.5,i.wz+.5,n,e.color),e.dropChance)for(const[s,r]of Object.entries(e.dropChance))Math.random()<r&&(Pi.spawn(i.wx+.5,i.wy+1.5,i.wz+.5,s,16724787),ut("🍎 Found an apple!"))}const t=Ne.activeBlock();if(yi.has(t)&&Ne.damageTool(t)&&ut(`Your ${Bt[t].name} broke!`),hn.send("set_block",{wx:i.wx,wy:i.wy,wz:i.wz,blockName:"air"}),e.id===19){const n=`${i.wx},${i.wy},${i.wz}`,s=Ri.get(n);s&&(qe.remove(s),Ri.delete(n))}}let no=0,zs=null;window.addEventListener("mousedown",i=>{const e=_u();if(i.button===0){to.setFromCamera(new Ae(0,0),ei);const t=to.intersectObjects(ot.map(n=>n.mesh),!0);if(t.length>0&&t[0].distance<4){let s=t[0].object;for(;s.parent&&s.parent!==qe;)s=s.parent;const r=ot.find(o=>o.mesh===s);if(r){const o=Ne.activeBlock(),a=Xg(o);r.hp=(r.hp||r.type.hp)-a,ut(`Hit ${r.type.id} for ${a} dmg (${Math.max(0,r.hp)}/${r.type.hp} HP)`),ps(r.type.id,"hurt"),cu(),yi.has(o)&&Ne.damageTool(o)&&ut(`Your ${Bt[o].name} broke!`);const c=r.mesh.position.x-J.position.x,l=r.mesh.position.z-J.position.z,h=Math.sqrt(c*c+l*l)||1;if(r.mesh.position.x+=c/h*.9,r.mesh.position.z+=l/h*.9,r.mesh.position.y+=.4,r.type.passive&&(r.fleeTimer=4),r.hp<=0){ut(`${r.type.id} died!`),ps(r.type.id,"death");const u=r.mesh.position.clone();if(qe.remove(r.mesh),ms(r.mesh),ot.splice(ot.indexOf(r),1),!Jt){const p=Ll(r.type);for(const d of p)for(let _=0;_<d.count;_++)Pi.spawn(u.x,u.y+.5,u.z,d.item,r.type.color)}const f=r.type.xp??(r.type.passive?2:5);for(mn+=f,ut(`+${f} XP`);mn>=_s;)mn-=_s,Vn++,ut(`⬆ Level up! Now level ${Vn}`);tr(),gs.spawn(u.x,u.y+.5,u.z,8453920,f)}Fs.punch();return}}}if(i.button===2&&no<=0){const t=Ne.activeBlock();if(il.has(t)&&rn<20){const n=Si[t];if(Ne.consumeItem(t,1)){rn=Math.min(20,rn+n.hunger),er(),no=.5,ut(`🍽 Ate ${n.name} (+${n.hunger} hunger)`),n.poison&&(ut("☠ You feel sick..."),zs=setTimeout(()=>{zs=null,bi(2,"Food poisoning")},4e3));return}}}if(e){if(i.button===0){const t=we.getBlock(e.wx,e.wy,e.wz);if(t.hardness===-1)return;if(t.solid||t.decoration)if(t.decoration)vu(e),Fs.punch();else{const n=Zh[t.id]||"";Nt={wx:e.wx,wy:e.wy,wz:e.wz,block:t,blockKey:n,progress:0},Bs.start(e.wx,e.wy,e.wz),Fs.punch()}}if(i.button===2){const t=Ne.activeBlock();if(t==="bow"&&Ne.inventory.get("arrow")>0){jr=!0,Ai=0;return}if(e){const s=we.getBlock(e.wx,e.wy,e.wz);if(s.name==="Furnace"){J_(e.wx,e.wy,e.wz);return}if(s.name==="Bed"){Pv(e.wx,e.wy,e.wz);return}}if(!Ce[t]||yi.has(t)||il.has(t)||sl.has(t))return;const n=we.getBlock(e.nx,e.ny,e.nz);if(!n.solid&&!n.liquid){const s=J.position.x,r=J.position.y,o=J.position.z;if(!(e.nx>=Math.floor(s-J.bodyRadius)&&e.nx<=Math.floor(s+J.bodyRadius)&&e.ny>=Math.floor(r-J.eyeHeight)&&e.ny<=Math.floor(r-J.eyeHeight+J.bodyHeight)&&e.nz>=Math.floor(o-J.bodyRadius)&&e.nz<=Math.floor(o+J.bodyRadius))&&(Jt||Ne.consumeItem(t,1))&&(we.setBlock(e.nx,e.ny,e.nz,t),u_(t),hn.send("set_block",{wx:e.nx,wy:e.ny,wz:e.nz,blockName:t}),t==="torch")){const c=`${e.nx},${e.ny},${e.nz}`;if(!Ri.has(c)){const l=new Zd(16755251,1.5,12,2);l.position.set(e.nx+.5,e.ny+.75,e.nz+.5),qe.add(l),Ri.set(c,l)}}}}}});window.addEventListener("mouseup",i=>{if(i.button===0&&(Nt=null,Bs.stop()),i.button===2){if(jr&&Ai>.05){const e=Math.min(1,Ai),t=qg(e),n=new L;ei.getWorldDirection(n);const s=J.position.clone();s.y+=1,pu(s,n,au*Math.min(1,e),t,!0),Ne.consumeItem("arrow",1),Ne.damageTool("bow"),ut(`Shot arrow (${t} dmg)`)}jr=!1,Ai=0}});window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("keydown",i=>{if(i.code==="Escape"&&uo){if(Jr&&!Jr.classList.contains("hidden"))return;if(sh()){ih(),un.domElement.requestPointerLock();return}ti=!ti,ti?(Zr.classList.remove("hidden"),document.exitPointerLock()):(Zr.classList.add("hidden"),un.domElement.requestPointerLock())}if(i.code==="KeyF"&&(J.flying=!J.flying,J.velocity.set(0,0,0)),i.code==="KeyG"&&(Jt=!Jt,ut(Jt?"Creative mode enabled":"Survival mode enabled")),i.code==="KeyE"){const e=Ne.inventoryEl?.classList?.contains("visible");if(sh()){ih(),un.domElement.requestPointerLock();return}setTimeout(()=>{e&&!Ne.inventoryEl?.classList?.contains("visible")&&!ni.classList.contains("visible")&&un.domElement.requestPointerLock()},50)}i.code==="KeyT"&&!ni.classList.contains("visible")&&Lv()});const Zt={t:0,dayLength:900};let _h=0,vh=0,ca=null;function xu(){Bl()}setInterval(()=>Bl(),8e3);window.addEventListener("beforeunload",xu);const io=new URLSearchParams(location.search).get("server");io&&(hn.connect(io),hn.on("welcome",i=>{for(const e of i.players)if(e.id!==i.id){const t=new lt(new Qt(.6,1.8,.6),new ds({color:3368703}));Ds.set(e.id,t),Vr.add(t)}if(!we){$r.push(...i.blockEdits||[]);return}for(const e of i.blockEdits||[])we.setBlock(e.wx,e.wy,e.wz,e.blockName)}),hn.on("player_joined",i=>{const e=new lt(new Qt(.6,1.8,.6),new ds({color:3368703}));Ds.set(i.player.id,e),Vr.add(e)}),hn.on("player_state",i=>{const e=Ds.get(i.id);e&&e.position.set(i.state.x,i.state.y,i.state.z)}),hn.on("player_left",i=>{const e=Ds.get(i.id);e&&(Vr.remove(e),Ds.delete(i.id))}),hn.on("set_block",i=>{if(!we){$r.push(i);return}we.setBlock(i.wx,i.wy,i.wz,i.blockName)}),hn.on("chat",i=>ut(`<${i.id.slice(0,4)}> ${i.text}`)));let xh=performance.now();function Gr(i){const e=Math.min((i-xh)/1e3,.033);if(xh=i,!uo||ti){na.render(),requestAnimationFrame(Gr);return}if(Kr){ts-=e;const p=document.getElementById("title-screen");if(document.getElementById("app"),p&&!p.style.background&&ts<hl*.8){let d=document.getElementById("sleep-overlay");d||(d=document.createElement("div"),d.id="sleep-overlay",d.style.cssText="position:fixed;inset:0;background:#000;z-index:200;transition:opacity 0.5s;pointer-events:none;opacity:0;",document.body.appendChild(d));const _=1-ts/hl;d.style.opacity=Math.min(1,_*1.5)}if(ts<=0){Dv();const d=document.getElementById("sleep-overlay");d&&(d.style.opacity="0",setTimeout(()=>{d.parentNode&&d.parentNode.removeChild(d)},600))}na.render(),requestAnimationFrame(Gr);return}if(zr>0&&(zr-=e,zr<=0&&Qr&&Qr.classList.remove("active")),Hr>0&&(Hr-=e,Hr<=0&&Os&&Os.classList.remove("active")),jr){Ai=Math.min(1,Ai+e);const p=document.getElementById("bow-charge"),d=document.getElementById("bow-charge-fill");p&&p.classList.add("active"),d&&(d.style.width=`${(Ai*100).toFixed(0)}%`)}else{const p=document.getElementById("bow-charge");p&&p.classList.remove("active")}dn<=6?ul.classList.add("low-health"):ul.classList.remove("low-health"),J.update(e,we),gs.update(e,we),Pi.update(e,we,J.position,p=>{Ne.addItem(p,1),Qh();const d=performance.now();d-uh>2e3&&(uh=d,p&&X_(`+1 ${p.replace(/_/g," ")}`))}),Ov(e),tv(e),ou.update(e,J.position.x),no=Math.max(0,no-e),Ne.tickItemName(e),Zt.t=(Zt.t+e)%Zt.dayLength;const t=Zt.t/Zt.dayLength*Math.PI*2,n=Math.sin(t),s=n<-.1;vv.update(t,J.position);const r=we.generator.biomeAt(Math.floor(J.position.x),Math.floor(J.position.z));ia.update(e,J.position,r),Fs.update(e),Fs.setBlock(Ce[Ne.activeBlock()]||Ce.stone),J.position.y<-10&&(J.position.copy(eo(0,0,10)),J.velocity.set(0,0,0));const o=J.sprinting?85:75;if(ei.fov+=(o-ei.fov)*(1-Math.exp(-15*e)),ei.updateProjectionMatrix(),aa-=e,J.grounded&&aa<=0&&J.position.distanceTo(mh)>=1.5){mh.copy(J.position),aa=.25;const d=we.getBlock(Math.floor(J.position.x),Math.floor(J.position.y-1.7),Math.floor(J.position.z));d_(d.name||"stone")}if(Nt){const p=ca;if(!p||p.wx!==Nt.wx||p.wy!==Nt.wy||p.wz!==Nt.wz)Nt=null,Bs.stop();else{const d=Wg(Ne.activeBlock(),Nt.blockKey);Nt.progress+=e/((Nt.block.hardness||1)*Wv)*d,Bs.setProgress(Nt.progress),Nt.progress>=1&&(vu(Nt),Nt=null,Bs.stop())}}for(let p=ot.length-1;p>=0;p--){const d=ot[p],_=Math.sqrt((d.mesh.position.x-J.position.x)**2+(d.mesh.position.z-J.position.z)**2),g=Math.abs(d.mesh.position.y-J.position.y);if(d.type.explosive&&!d.type.passive&&(!d.exploding&&_<2.5&&g<3&&(d.exploding=!0,d.flashTimer=1.5,d.flashPhase=0,ut("⚠ Creeper is about to explode!")),d.exploding)){d.flashTimer-=e,d.flashPhase=(d.flashPhase||0)+e*12;const S=Math.sin(d.flashPhase)>0;if(d.mesh.traverse(R=>{R.isMesh&&R.material.emissive?.setHex(S?16777215:0)}),d.flashTimer<=0){const R=d.mesh.position.clone();if(Sv(R,3),gs.spawn(R.x,R.y,R.z,16746496,50),ut("💥 BOOM! Creeper exploded!"),!Jt)for(const D of Ll(d.type))for(let x=0;x<D.count;x++)Pi.spawn(R.x,R.y+.5,R.z,D.item,d.type.color);qe.remove(d.mesh),ms(d.mesh),ot.splice(p,1);continue}const w=d.mesh.position.y-.05;we.getBlock(Math.floor(d.mesh.position.x),Math.floor(w),Math.floor(d.mesh.position.z)).solid?d.mesh.position.y=Math.floor(w)+1:d.mesh.position.y-=9*e;continue}if(d.lastStuckCheckPos||(d.lastStuckCheckPos=d.mesh.position.clone(),d.stuckTimer=0),d.stuckTimer+=e,d.stuckTimer>=2&&(d.mesh.position.distanceTo(d.lastStuckCheckPos)<.4&&(d.mesh.position.y+=1.8,d.dir+=(Math.random()-.5)*Math.PI),d.lastStuckCheckPos.copy(d.mesh.position),d.stuckTimer=0),d.type.ranged&&!d.type.passive)if(_<18&&g<5){if(d.shootCooldown=(d.shootCooldown||0)-e,d.mesh.rotation.y=Math.atan2(J.position.x-d.mesh.position.x,J.position.z-d.mesh.position.z),d.shootCooldown<=0){d.shootCooldown=2+Math.random()*1.5;const w=d.mesh.position.clone();w.y+=.9;const A=new L(J.position.x-w.x,J.position.y-w.y,J.position.z-w.z).normalize();A.x+=(Math.random()-.5)*.15,A.y+=(Math.random()-.5)*.1,A.z+=(Math.random()-.5)*.15,A.normalize(),pu(w,A,au*.85,4,!1)}}else d.shootCooldown=1;if(!d.type.passive&&!d.type.ranged)if(_<32&&g<6){d.dir=Math.atan2(J.position.x-d.mesh.position.x,J.position.z-d.mesh.position.z),d.mesh.rotation.y=d.dir;const A=d.type.speed*.7,R=Math.sin(d.dir)*A*e,D=Math.cos(d.dir)*A*e,x=Math.floor(d.mesh.position.y+.5),y=d.mesh.position.x+R,C=d.mesh.position.z+D;let F=!1,O=!1;const W=we.getBlock(Math.floor(y),x,Math.floor(d.mesh.position.z)),V=we.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(C));if(W.solid?we.getBlock(Math.floor(y),x+1,Math.floor(d.mesh.position.z)).solid?F=!0:(d.mesh.position.x=y,d.mesh.position.y+=1):d.mesh.position.x=y,V.solid?we.getBlock(Math.floor(d.mesh.position.x),x+1,Math.floor(C)).solid?O=!0:(d.mesh.position.z=C,d.mesh.position.y+=1):d.mesh.position.z=C,F&&!O&&(d.mesh.position.x+=Math.cos(d.dir)*A*e),O&&!F&&(d.mesh.position.z+=-Math.sin(d.dir)*A*e),_<1.8&&g<2.5&&(d.attackCooldown=(d.attackCooldown||0)-e,d.attackCooldown<=0)){d.attackCooldown=1.2,ps(d.type.id,"hurt");const G=d.type.damage||3;bi(G,`Killed by ${d.type.id}`),ut(`${d.type.id} hit you for ${G} HP`);const q=J.position.x-d.mesh.position.x,k=J.position.z-d.mesh.position.z,Q=Math.sqrt(q*q+k*k)||1;J.velocity.x+=q/Q*4,J.velocity.z+=k/Q*4,J.velocity.y+=2.5}}else{d.dir+=(Math.random()-.5)*e*.5;const A=d.type.speed*.4,R=Math.sin(d.dir)*A*e,D=Math.cos(d.dir)*A*e,x=Math.floor(d.mesh.position.y+.5),y=d.mesh.position.x+R,C=d.mesh.position.z+D,F=we.getBlock(Math.floor(y),x,Math.floor(d.mesh.position.z)),O=we.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(C));F.solid?d.dir+=Math.PI/2:d.mesh.position.x=y,O.solid?d.dir+=Math.PI/2:d.mesh.position.z=C,d.mesh.rotation.y=d.dir}else if(d.type.passive){if(d.fleeTimer&&d.fleeTimer>0){d.fleeTimer-=e;const w=Math.atan2(d.mesh.position.x-J.position.x,d.mesh.position.z-J.position.z);d.dir=w;const A=d.type.speed*1.5,R=Math.sin(d.dir)*A*e,D=Math.cos(d.dir)*A*e,x=Math.floor(d.mesh.position.y+.5),y=d.mesh.position.x+R,C=d.mesh.position.z+D,F=we.getBlock(Math.floor(y),x,Math.floor(d.mesh.position.z)),O=we.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(C));F.solid?d.dir+=Math.PI/2:d.mesh.position.x=y,O.solid?d.dir+=Math.PI/2:d.mesh.position.z=C}else{d.dir+=(Math.random()-.5)*e*.5;const w=d.type.speed*.6,A=Math.sin(d.dir)*w*e,R=Math.cos(d.dir)*w*e,D=Math.floor(d.mesh.position.y+.5),x=d.mesh.position.x+A,y=d.mesh.position.z+R,C=we.getBlock(Math.floor(x),D,Math.floor(d.mesh.position.z)),F=we.getBlock(Math.floor(d.mesh.position.x),D,Math.floor(y));C.solid?d.dir+=Math.PI/2:d.mesh.position.x=x,F.solid?d.dir+=Math.PI/2:d.mesh.position.z=y}d.mesh.rotation.y=d.dir}const m=d.mesh.position.y-.05;we.getBlock(Math.floor(d.mesh.position.x),Math.floor(m),Math.floor(d.mesh.position.z)).solid?d.mesh.position.y=Math.floor(m)+1:d.mesh.position.y-=9*e;const E=Math.abs(Math.sin(d.dir)*d.type.speed*e)>.001;G_(d,e,E),d.mesh.position.y<-10&&(d.mesh.position.y=we.getSurfaceY(Math.floor(d.mesh.position.x),Math.floor(d.mesh.position.z))+1+.7)}ch.position.set(Math.cos(t)*50,n*50,20),ch.intensity=Math.max(.05,n*.8+.2),mv.intensity=Math.max(.1,n*.45+.3);const a=r_(t);if(J.isInWater(we)?(qe.fog.color.set(1718890),qe.fog.near=2,qe.fog.far=25,qe.background.set(1718890)):(qe.fog.color.copy(a),qe.fog.near=90,qe.fog.far=420,qe.background.copy(a),(ia.raining||ia.snowing)&&qe.background.multiplyScalar(.6)),s&&!la)for(let p=0;p<3;p++)fu();if(!s&&la){wi++,ut(`☀ Day ${wi} — good morning!`);for(let p=ot.length-1;p>=0;p--)ot[p].type.passive||(qe.remove(ot[p].mesh),ms(ot[p].mesh),ot.splice(p,1))}if(la=s,ra+=e,ra>=8){ra=0;const p=J.position.y;let d="day";p<15?d="cave":s&&(d="night"),d!==hh&&(hh=d,f_(d))}if(oa+=e,oa>=3&&(oa=0,ot.length>0)){const p=ot[Math.floor(Math.random()*ot.length)];Math.sqrt((p.mesh.position.x-J.position.x)**2+(p.mesh.position.z-J.position.z)**2)<20&&ps(p.type.id,"idle")}gu(!1),i-vh>=100&&(ca=_u(),vh=i);const c=ca;if(c&&we.getBlock(c.wx,c.wy,c.wz).name!=="Air"?(ks.visible=!0,ks.position.set(c.wx+.5,c.wy+.5,c.wz+.5)):ks.visible=!1,J.fallDamage){const p=J.fallDamage,d=Math.floor(p-3);d>0&&(bi(d,"Fell from a high place"),ut(`Oof! Fell ${p.toFixed(1)} blocks (-${d} HP)`)),J.fallDamage=null}const l=s?"🌙 Night":n>.5?"☀ Noon":n>0?"🌅 Day":"🌄 Dawn/Dusk",h=Ne.activeBlock(),u=Bt[h]||Si[h]||Ce[h],f=[`XYZ ${J.position.x.toFixed(1)} ${J.position.y.toFixed(1)} ${J.position.z.toFixed(1)}`,`Day ${wi} | ${l}`,`Level ${Vn} | XP ${mn}/${_s}`,`Biome: ${we.generator.biomeAt(Math.floor(J.position.x),Math.floor(J.position.z))}`,`Block: ${c&&we.getBlock(c.wx,c.wy,c.wz).name||"none"}`,u?`Held: ${u.name}${Bt[h]?` (${Ne.toolDurability.get(h)??Bt[h].maxDurability}/${Bt[h].maxDurability} dur)`:""}`:"",Nt?`Breaking ${(Nt.progress*100).toFixed(0)}%`:"",`FPS ${(1/e).toFixed(0)}`,io?"🌐 MP connected":"Singleplayer",J.flying?"✈ FLYING (F)":"",Jt?"🎨 CREATIVE (G)":""];if(Ne.renderOverlay(f.filter(Boolean).join(`
`)),io&&hn.send("player_state",{state:{x:J.position.x,y:J.position.y,z:J.position.z,yaw:J.rotation.x,pitch:J.rotation.y}}),J.isInWater(we)?(Ji-=e,Ji<=0&&!Jt&&(Ji=1.5,bi(2,"Drowned"))):Ji=Math.min(10,Ji+e*3),!Jt){const p=J.sprinting?2:4;sa+=e,sa>=p&&(sa=0,rn>0&&(rn=Math.max(0,rn-1),er())),rn>=18&&dn<20?(Us+=e,Us>=2&&(Us=0,dn=Math.min(20,dn+1),Qs())):Us=0,rn<=0?(Ns+=e,Ns>=3&&(Ns=0,bi(1,"Starved to death"))):Ns=0}yv(),_h+=e,av(_h),na.render(),requestAnimationFrame(Gr)}requestAnimationFrame(Gr);
