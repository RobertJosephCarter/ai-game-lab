(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Yl="180",vf=0,Dc=1,xf=2,ru=1,ou=2,Vn=3,ei=0,Yt=1,cn=2,$n=0,jn=1,Ms=2,Lc=3,Ic=4,Mf=5,Pi=100,yf=101,Sf=102,bf=103,Ef=104,Tf=200,wf=201,Af=202,Rf=203,Ga=204,Wa=205,Cf=206,Pf=207,Df=208,Lf=209,If=210,Uf=211,Nf=212,Ff=213,Bf=214,Xa=0,qa=1,Ya=2,ys=3,$a=4,ja=5,Ka=6,Za=7,$l=0,Of=1,kf=2,fi=0,zf=1,Hf=2,Vf=3,Gf=4,Wf=5,Xf=6,qf=7,au=300,Ss=301,bs=302,Ja=303,Qa=304,Fo=306,el=1e3,Dn=1001,tl=1002,Rt=1003,Yf=1004,wr=1005,fn=1006,$o=1007,Ii=1008,Un=1009,lu=1010,cu=1011,ar=1012,jl=1013,Hi=1014,qn=1015,Kn=1016,Kl=1017,Zl=1018,lr=1020,hu=35902,uu=35899,fu=1021,du=1022,xn=1023,cr=1026,hr=1027,pu=1028,Jl=1029,mu=1030,Ql=1031,ec=1033,co=33776,ho=33777,uo=33778,fo=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,fl=37811,dl=37812,pl=37813,ml=37814,gl=37815,_l=37816,vl=37817,xl=37818,Ml=37819,yl=37820,Sl=37821,bl=36492,El=36494,Tl=36495,wl=36283,Al=36284,Rl=36285,Cl=36286,$f=3200,jf=3201,tc=0,Kf=1,ci="",Ft="srgb",Es="srgb-linear",Mo="linear",st="srgb",Xi=7680,Uc=519,Zf=512,Jf=513,Qf=514,gu=515,ed=516,td=517,nd=518,id=519,Pl=35044,Nc="300 es",Ln=2e3,yo=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,Dl=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function sd(i,e){return(i%e+e)%e}function Ko(i,e,t){return(1-t)*i+t*e}function Cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(u!==d||l!==f||c!==p||h!==g){let _=1-a;const m=l*f+c*p+h*g+u*d,T=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){const A=Math.sqrt(E),b=Math.atan2(A,m*T);_=Math.sin(_*b)/A,a=Math.sin(a*b)/A}const S=a*T;if(l=l*_+f*S,c=c*_+p*S,h=h*_+g*S,u=u*_+d*S,_===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new D,Fc=new mr;class qe{constructor(e,t,n,s,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],d=s[0],_=s[3],m=s[6],T=s[1],E=s[4],S=s[7],A=s[2],b=s[5],R=s[8];return r[0]=o*d+a*T+l*A,r[3]=o*_+a*E+l*b,r[6]=o*m+a*S+l*R,r[1]=c*d+h*T+u*A,r[4]=c*_+h*E+u*b,r[7]=c*m+h*S+u*R,r[2]=f*d+p*T+g*A,r[5]=f*_+p*E+g*b,r[8]=f*m+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=u*d,e[1]=(s*c-h*n)*d,e[2]=(a*n-s*o)*d,e[3]=f*d,e[4]=(h*t-s*l)*d,e[5]=(s*r-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jo.makeScale(e,t)),this}rotate(e){return this.premultiply(Jo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new qe;function _u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rd(){const i=ur("canvas");return i.style.display="block",i}const Bc={};function fr(i){i in Bc||(Bc[i]=!0,console.warn(i))}function od(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Oc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ad(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===st&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:Oc,fromXYZ:kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Oc,fromXYZ:kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const tt=ad();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=ur("canvas")),qi.width=e.width,qi.height=e.height;const s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cd=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qo(s[o].image)):r.push(Qo(s[o]))}else r=Qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;const ea=new D;class Gt extends Is{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Dn,s=Dn,r=fn,o=Ii,a=xn,l=Un,c=Gt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=di(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case el:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case el:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=au;Gt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],d=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-d)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+d)<.1&&Math.abs(g+_)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,A=(m+1)/2,b=(h+f)/4,R=(u+d)/4,I=(g+_)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=R/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=I/r),this.set(n,s,r,t),this}let T=Math.sqrt((_-g)*(_-g)+(u-d)*(u-d)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(_-g)/T,this.y=(u-d)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends Is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Gt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new nc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vu extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Rr.subVectors(this.max,Os),Yi.subVectors(e.a,Os),$i.subVectors(e.b,Os),ji.subVectors(e.c,Os),ni.subVectors($i,Yi),ii.subVectors(ji,$i),yi.subVectors(Yi,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-yi.z,yi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,yi.z,0,-yi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-yi.y,yi.x,0];return!ta(t,Yi,$i,ji,Rr)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Yi,$i,ji,Rr))?!1:(Cr.crossVectors(ni,ii),t=[Cr.x,Cr.y,Cr.z],ta(t,Yi,$i,ji,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,Ar=new gr,Yi=new D,$i=new D,ji=new D,ni=new D,ii=new D,yi=new D,Os=new D,Rr=new D,Cr=new D,Si=new D;function ta(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const dd=new gr,ks=new D,na=new D;class Bo{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(na)),this.expandByPoint(ks.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new D,ia=new D,Pr=new D,si=new D,sa=new D,Dr=new D,ra=new D;class ic{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=si.dot(this.direction),l=-si.dot(Pr),c=si.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const d=1/h;u*=d,f*=d,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(Pr,f),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){sa.subVectors(t,e),Dr.subVectors(n,e),ra.crossVectors(sa,Dr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const l=a*this.direction.dot(Dr.crossVectors(si,Dr));if(l<0)return null;const c=a*this.direction.dot(sa.cross(si));if(c<0||l+c>o)return null;const h=-a*si.dot(ra);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,l,c,h,u,f,p,g,d,_){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,d,_)}set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,d,_){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=d,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,d=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,d=c*u;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,d=c*u;t[0]=f-d*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,d=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*u,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*h,t[4]=d-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-d*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+d,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=d*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ri.crossVectors(n,Jt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ri.crossVectors(n,Jt)),ri.normalize(),Lr.crossVectors(Jt,ri),s[0]=ri.x,s[4]=Lr.x,s[8]=Jt.x,s[1]=ri.y,s[5]=Lr.y,s[9]=Jt.y,s[2]=ri.z,s[6]=Lr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],d=n[6],_=n[10],m=n[14],T=n[3],E=n[7],S=n[11],A=n[15],b=s[0],R=s[4],I=s[8],y=s[12],x=s[1],P=s[5],F=s[9],B=s[13],V=s[2],Y=s[6],q=s[10],J=s[14],k=s[3],ne=s[7],le=s[11],ue=s[15];return r[0]=o*b+a*x+l*V+c*k,r[4]=o*R+a*P+l*Y+c*ne,r[8]=o*I+a*F+l*q+c*le,r[12]=o*y+a*B+l*J+c*ue,r[1]=h*b+u*x+f*V+p*k,r[5]=h*R+u*P+f*Y+p*ne,r[9]=h*I+u*F+f*q+p*le,r[13]=h*y+u*B+f*J+p*ue,r[2]=g*b+d*x+_*V+m*k,r[6]=g*R+d*P+_*Y+m*ne,r[10]=g*I+d*F+_*q+m*le,r[14]=g*y+d*B+_*J+m*ue,r[3]=T*b+E*x+S*V+A*k,r[7]=T*R+E*P+S*Y+A*ne,r[11]=T*I+E*F+S*q+A*le,r[15]=T*y+E*B+S*J+A*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],d=e[7],_=e[11],m=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+d*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+_*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],d=e[13],_=e[14],m=e[15],T=u*_*c-d*f*c+d*l*p-a*_*p-u*l*m+a*f*m,E=g*f*c-h*_*c-g*l*p+o*_*p+h*l*m-o*f*m,S=h*d*c-g*u*c+g*a*p-o*d*p-h*a*m+o*u*m,A=g*u*l-h*d*l-g*a*f+o*d*f+h*a*_-o*u*_,b=t*T+n*E+s*S+r*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=T*R,e[1]=(d*f*r-u*_*r-d*s*p+n*_*p+u*s*m-n*f*m)*R,e[2]=(a*_*r-d*l*r+d*s*c-n*_*c-a*s*m+n*l*m)*R,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*R,e[4]=E*R,e[5]=(h*_*r-g*f*r+g*s*p-t*_*p-h*s*m+t*f*m)*R,e[6]=(g*l*r-o*_*r-g*s*c+t*_*c+o*s*m-t*l*m)*R,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*R,e[8]=S*R,e[9]=(g*u*r-h*d*r-g*n*p+t*d*p+h*n*m-t*u*m)*R,e[10]=(o*d*r-g*a*r+g*n*c-t*d*c-o*n*m+t*a*m)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*R,e[12]=A*R,e[13]=(h*d*s-g*u*s+g*n*f-t*d*f-h*n*_+t*u*_)*R,e[14]=(g*a*s-o*d*s-g*n*l+t*d*l+o*n*_-t*a*_)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,d=o*h,_=o*u,m=a*u,T=l*c,E=l*h,S=l*u,A=n.x,b=n.y,R=n.z;return s[0]=(1-(d+m))*A,s[1]=(p+S)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-S)*b,s[5]=(1-(f+m))*b,s[6]=(_+T)*b,s[7]=0,s[8]=(g+E)*R,s[9]=(_-T)*R,s[10]=(1-(f+d))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mn.copy(this);const c=1/r,h=1/o,u=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,t.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let g,d;if(l)g=r/(o-r),d=o*r/(o-r);else if(a===Ln)g=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(a===yo)g=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ln,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,d;if(l)g=1/(o-r),d=o/(o-r);else if(a===Ln)g=-2/(o-r),d=-(o+r)/(o-r);else if(a===yo)g=-1/(o-r),d=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new D,mn=new _t,pd=new D(0,0,0),md=new D(1,1,1),ri=new D,Lr=new D,Jt=new D,zc=new _t,Hc=new mr;class wn{constructor(e=0,t=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const Vc=new D,Zi=new mr,On=new _t,Ir=new D,zs=new D,_d=new D,vd=new mr,Gc=new D(1,0,0),Wc=new D(0,1,0),Xc=new D(0,0,1),qc={type:"added"},xd={type:"removed"},Ji={type:"childadded",child:null},oa={type:"childremoved",child:null};class It extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new D,t=new wn,n=new mr,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(zs,Ir,this.up):On.lookAt(Ir,zs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(On),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,_d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new D(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new D,kn=new D,aa=new D,zn=new D,Qi=new D,es=new D,Yc=new D,la=new D,ca=new D,ha=new D,ua=new at,fa=new at,da=new at;class hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gn.subVectors(e,t),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gn.subVectors(s,t),kn.subVectors(n,t),aa.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(aa),c=kn.dot(kn),h=kn.dot(aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ua.setScalar(0),fa.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(e,t,n,s){return gn.subVectors(n,t),kn.subVectors(e,t),gn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),es.subVectors(r,n),la.subVectors(e,n);const l=Qi.dot(la),c=es.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,s);const h=Qi.dot(ca),u=es.dot(ca);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qi,o);ha.subVectors(e,r);const p=Qi.dot(ha),g=es.dot(ha);if(g>=0&&p<=g)return t.copy(r);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(es,a);const _=h*g-p*u;if(_<=0&&u-h>=0&&p-g>=0)return Yc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Yc,a);const m=1/(_+d+f);return o=d*m,a=f*m,t.copy(n).addScaledVector(Qi,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=sd(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return tt.workingToColorSpace(kt.copy(this),e),Math.round(Qe(kt.r*255,0,255))*65536+Math.round(Qe(kt.g*255,0,255))*256+Math.round(Qe(kt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ft){tt.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Ur);const n=Ko(oi.h,Ur.h,t),s=Ko(oi.s,Ur.s,t),r=Ko(oi.l,Ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new ge;ge.NAMES=xu;let Md=0;class vi extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=di(),this.name="",this.type="Material",this.blending=jn,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,Nr=new De;let yd=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class Mu extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yu extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sd=0;const ln=new _t,ma=new It,ts=new D,Qt=new gr,Hs=new gr,Lt=new D;class Bt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?yu:Mu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(Qt.min,Hs.min),Qt.expandByPoint(Lt),Lt.addVectors(Qt.max,Hs.max),Qt.expandByPoint(Lt)):(Qt.expandByPoint(Hs.min),Qt.expandByPoint(Hs.max))}Qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Lt.add(ts)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;const c=new D,h=new D,u=new D,f=new De,p=new De,g=new De,d=new D,_=new D;function m(I,y,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(d),a[y].add(d),a[x].add(d),l[I].add(_),l[y].add(_),l[x].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,y=T.length;I<y;++I){const x=T[I],P=x.start,F=x.count;for(let B=P,V=P+F;B<V;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const E=new D,S=new D,A=new D,b=new D;function R(I){A.fromBufferAttribute(s,I),b.copy(A);const y=a[I];E.copy(y),E.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(b,y);const P=S.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,P)}for(let I=0,y=T.length;I<y;++I){const x=T[I],P=x.start,F=x.count;for(let B=P,V=P+F;B<V;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),_=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let d=0,_=l.length;d<_;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*h;for(let m=0;m<h;m++)f[g++]=c[p++]}return new En(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new _t,bi=new ic,Fr=new Bo,jc=new D,Br=new D,Or=new D,kr=new D,ga=new D,zr=new D,Kc=new D,Hr=new D;class ct extends It{constructor(e=new Bt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,e),o?zr.addScaledVector(ga,h):zr.addScaledVector(ga.sub(t),h))}t.add(zr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Fr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Fr,jc)===null||bi.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&($c.copy(r).invert(),bi.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,d=f.length;g<d;g++){const _=f[g],m=o[_.materialIndex],T=Math.max(_.start,p.start),E=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,A=E;S<A;S+=3){const b=a.getX(S),R=a.getX(S+1),I=a.getX(S+2);s=Vr(this,m,e,n,c,h,u,b,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),d=Math.min(a.count,p.start+p.count);for(let _=g,m=d;_<m;_+=3){const T=a.getX(_),E=a.getX(_+1),S=a.getX(_+2);s=Vr(this,o,e,n,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,d=f.length;g<d;g++){const _=f[g],m=o[_.materialIndex],T=Math.max(_.start,p.start),E=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=T,A=E;S<A;S+=3){const b=S,R=S+1,I=S+2;s=Vr(this,m,e,n,c,h,u,b,R,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),d=Math.min(l.count,p.start+p.count);for(let _=g,m=d;_<m;_+=3){const T=_,E=_+1,S=_+2;s=Vr(this,o,e,n,c,h,u,T,E,S),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function bd(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Hr);return c<t.near||c>t.far?null:{distance:c,point:Hr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Br),i.getVertexPosition(l,Or),i.getVertexPosition(c,kr);const h=bd(i,e,t,n,Br,Or,kr,Kc);if(h){const u=new D;hn.getBarycoord(Kc,Br,Or,kr,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new De)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new De)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Br,Or,kr,f.normal),h.face=f,h.barycoord=u}return h}class rn extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(d,_,m,T,E,S,A,b,R,I,y){const x=S/R,P=A/I,F=S/2,B=A/2,V=b/2,Y=R+1,q=I+1;let J=0,k=0;const ne=new D;for(let le=0;le<q;le++){const ue=le*P-B;for(let Ne=0;Ne<Y;Ne++){const We=Ne*x-F;ne[d]=We*T,ne[_]=ue*E,ne[m]=V,c.push(ne.x,ne.y,ne.z),ne[d]=0,ne[_]=0,ne[m]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ne/R),u.push(1-le/I),J+=1}}for(let le=0;le<I;le++)for(let ue=0;ue<R;ue++){const Ne=f+ue+Y*le,We=f+ue+Y*(le+1),Je=f+(ue+1)+Y*(le+1),Ve=f+(ue+1)+Y*le;l.push(Ne,We,Ve),l.push(We,Je,Ve),k+=6}a.addGroup(p,k,y),p+=k,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const s in n)e[s]=n[s]}return e}function Ed(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Su(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const So={clone:Ts,merge:qt};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Ed(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bu extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new D,Zc=new De,Jc=new De;class tn extends bu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dl*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,is=1;class Ad extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(ns,is,e,t);s.layers=this.layers,this.add(s);const r=new tn(ns,is,e,t);r.layers=this.layers,this.add(r);const o=new tn(ns,is,e,t);o.layers=this.layers,this.add(o);const a=new tn(ns,is,e,t);a.layers=this.layers,this.add(a);const l=new tn(ns,is,e,t);l.layers=this.layers,this.add(l);const c=new tn(ns,is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Eu extends Gt{constructor(e=[],t=Ss,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Eu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:$n});r.uniforms.tEquirect.value=t;const o=new ct(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=fn),new Ad(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Mn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cd={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const _=t.getJointPose(d,n),m=this._getHandJoint(c,d);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pd extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ms extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const Vs=new D,rs=new D,os=new D,as=new De,Gs=new De,Tu=new _t,Gr=new D,Ws=new D,Wr=new D,Qc=new De,va=new De,eh=new De;class oc extends It{constructor(e=new ms){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Bt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dd(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new bo(n,3,0,!1)),ss.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Tu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Xr(Gr.set(-.5,-.5,0),os,o,rs,s,r),Xr(Ws.set(.5,-.5,0),os,o,rs,s,r),Xr(Wr.set(.5,.5,0),os,o,rs,s,r),Qc.set(0,0),va.set(1,0),eh.set(1,1);let a=e.ray.intersectTriangle(Gr,Ws,Wr,!1,Vs);if(a===null&&(Xr(Ws.set(-.5,.5,0),os,o,rs,s,r),va.set(0,1),a=e.ray.intersectTriangle(Gr,Wr,Ws,!1,Vs),a===null))return;const l=e.ray.origin.distanceTo(Vs);l<e.near||l>e.far||t.push({distance:l,point:Vs.clone(),uv:hn.getInterpolation(Vs,Gr,Ws,Wr,Qc,va,eh,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xr(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*as.x-s*as.y,Gs.y=s*as.x+r*as.y):Gs.copy(as),i.copy(e),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(Tu)}const xa=new D,Ld=new D,Id=new qe;class Ai{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xa.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Bo,Ud=new De(.5,.5),qr=new D;class ac{constructor(e=new Ai,t=new Ai,n=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ln,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],d=r[9],_=r[10],m=r[11],T=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,m-g,A-T).normalize(),s[1].setComponents(c+o,p+h,m+g,A+T).normalize(),s[2].setComponents(c+a,p+u,m+d,A+E).normalize(),s[3].setComponents(c-a,p-u,m-d,A-E).normalize(),n)s[4].setComponents(l,f,_,S).normalize(),s[5].setComponents(c-l,p-f,m-_,A-S).normalize();else if(s[4].setComponents(c-l,p-f,m-_,A-S).normalize(),t===Ln)s[5].setComponents(c+l,p+f,m+_,A+S).normalize();else if(t===yo)s[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=Ud.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lc extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const th=new _t,Ll=new ic,Yr=new Bo,$r=new D;class wu extends It{constructor(e=new Bt,t=new lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,e.ray.intersectsSphere(Yr)===!1)return;th.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(th);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,d=p;g<d;g++){const _=c.getX(g);$r.fromBufferAttribute(u,_),nh($r,_,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,d=p;g<d;g++)$r.fromBufferAttribute(u,g),nh($r,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nh(i,e,t,n,s,r,o){const a=Ll.distanceSqToPoint(i);if(a<t){const l=new D;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cc extends Gt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Au extends Gt{constructor(e,t,n=Hi,s,r,o,a=Rt,l=Rt,c,h=cr,u=1){if(h!==cr&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ru extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _r extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],d=[],_=[];for(let m=0;m<h;m++){const T=m*f-o;for(let E=0;E<c;E++){const S=E*u-r;g.push(S,-T,0),d.push(0,0,1),_.push(E/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<a;T++){const E=T+c*m,S=T+c*(m+1),A=T+1+c*(m+1),b=T+1+c*m;p.push(E,S,b),p.push(S,A,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class us extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],g=[],d=[],_=[];for(let m=0;m<=n;m++){const T=[],E=m/n;let S=0;m===0&&o===0?S=.5/t:m===n&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const b=A/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),d.push(f.x,f.y,f.z),_.push(b+S,1-E),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<t;T++){const E=h[m][T+1],S=h[m][T],A=h[m+1][T],b=h[m+1][T+1];(m!==0||o>0)&&p.push(E,S,b),(m!==n-1||l<Math.PI)&&p.push(S,A,b)}this.setIndex(p),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cu extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vi extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nd extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fd extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ma={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Bd{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Od=new Bd;class hc{constructor(e){this.manager=e!==void 0?e:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ls=new WeakMap;class kd extends hc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ma.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ls.get(o);u===void 0&&(u=[],ls.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=ur("img");function l(){h(),t&&t(this);const u=ls.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}ls.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ma.remove(`image:${e}`);const f=ls.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}ls.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ma.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Pu extends hc{constructor(e){super(e)}load(e,t,n,s){const r=new Gt,o=new kd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class uc extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ya=new _t,ih=new D,sh=new D;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ih.setFromMatrixPosition(e.matrixWorld),t.position.copy(ih),sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sh),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rh=new _t,Xs=new D,Sa=new D;class zd extends Du{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),Sa.copy(n.position),Sa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sa),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,n.coordinateSystem,n.reversedDepth)}}class Hd extends uc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fc extends bu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vd extends Du{constructor(){super(new fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends uc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wd extends uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xd extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const oh=new _t;class Yd{constructor(e,t,n=0,s=1/0){this.ray=new ic(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(e,t=!0,n=[]){return Il(e,this,n,t),n.sort(ah),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Il(e[s],this,n,t);return n.sort(ah),n}}function ah(i,e){return i.distance-e.distance}function Il(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Il(r[o],e,t,!0)}}function lh(i,e,t,n){const s=$d(n);switch(t){case fu:return i*e;case pu:return i*e/s.components*s.byteLength;case Jl:return i*e/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case Ql:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case ec:return i*e*4/s.components*s.byteLength;case co:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(e,8)/2;case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $d(i){switch(i){case Un:case lu:return{byteLength:1,components:1};case ar:case cu:case Kn:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case Hi:case jl:case qn:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function Lu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jd(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],d=u[p];d.start<=g.start+g.count+1?g.count=Math.max(g.count,d.start+d.count-g.start):(++f,u[f]=d)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const d=u[p];i.bufferSubData(c,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,$p=`struct PhysicalMaterial {
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
}`,jp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,x0=`#define STANDARD
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
}`,M0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,w0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Kd,alphahash_pars_fragment:Zd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:vp,common:xp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:yp,displacementmap_pars_vertex:Sp,displacementmap_vertex:bp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Tp,colorspace_fragment:wp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Vp,envmap_vertex:Lp,fog_vertex:Ip,fog_pars_vertex:Up,fog_fragment:Np,fog_pars_fragment:Fp,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:Op,lights_lambert_fragment:kp,lights_lambert_pars_fragment:zp,lights_pars_begin:Hp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:$p,lights_fragment_begin:jp,lights_fragment_maps:Kp,lights_fragment_end:Zp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:tm,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:am,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:ym,iridescence_pars_fragment:Sm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:wm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Im,shadowmask_pars_fragment:Um,skinbase_vertex:Nm,skinning_pars_vertex:Fm,skinning_vertex:Bm,skinnormal_vertex:Om,specularmap_fragment:km,specularmap_pars_fragment:zm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Vm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:$m,background_vert:jm,background_frag:Km,backgroundCube_vert:Zm,backgroundCube_frag:Jm,cube_vert:Qm,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:r0,equirect_frag:o0,linedashed_vert:a0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:x0,meshphysical_frag:M0,meshtoon_vert:y0,meshtoon_frag:S0,points_vert:b0,points_frag:E0,shadow_vert:T0,shadow_frag:w0,sprite_vert:A0,sprite_frag:R0},he={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Rn={basic:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:qt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:qt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:qt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:qt([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:qt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:qt([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:qt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:qt([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:qt([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:qt([he.lights,he.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Rn.physical={uniforms:qt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const jr={r:0,b:0,g:0},Ti=new wn,C0=new _t;function P0(i,e,t,n,s,r,o){const a=new ge(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function d(E){let S=!1;const A=g(E);A===null?m(a,l):A&&A.isColor&&(m(A,1),S=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(E,S){const A=g(S);A&&(A.isCubeTexture||A.mapping===Fo)?(h===void 0&&(h=new ct(new rn(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Ts(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ti.copy(S.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ti)),h.material.toneMapped=tt.getTransfer(A.colorSpace)!==st,(u!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ct(new _r(2,2),new Ht({name:"BackgroundMaterial",uniforms:Ts(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=tt.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,S){E.getRGB(jr,Su(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,S,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:d,addToRenderList:_,dispose:T}}function D0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,P,F,B,V){let Y=!1;const q=u(B,F,P);r!==q&&(r=q,c(r.object)),Y=p(x,B,F,V),Y&&g(x,B,F,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(x,P,F,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,F){const B=F.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let Y=V[P.id];Y===void 0&&(Y={},V[P.id]=Y);let q=Y[B];return q===void 0&&(q=f(l()),Y[B]=q),q}function f(x){const P=[],F=[],B=[];for(let V=0;V<t;V++)P[V]=0,F[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,P,F,B){const V=r.attributes,Y=P.attributes;let q=0;const J=F.getAttributes();for(const k in J)if(J[k].location>=0){const le=V[k];let ue=Y[k];if(ue===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),le===void 0||le.attribute!==ue||ue&&le.data!==ue.data)return!0;q++}return r.attributesNum!==q||r.index!==B}function g(x,P,F,B){const V={},Y=P.attributes;let q=0;const J=F.getAttributes();for(const k in J)if(J[k].location>=0){let le=Y[k];le===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const ue={};ue.attribute=le,le&&le.data&&(ue.data=le.data),V[k]=ue,q++}r.attributes=V,r.attributesNum=q,r.index=B}function d(){const x=r.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function _(x){m(x,0)}function m(x,P){const F=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;F[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),V[x]!==P&&(i.vertexAttribDivisor(x,P),V[x]=P)}function T(){const x=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==x[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function E(x,P,F,B,V,Y,q){q===!0?i.vertexAttribIPointer(x,P,F,V,Y):i.vertexAttribPointer(x,P,F,B,V,Y)}function S(x,P,F,B){d();const V=B.attributes,Y=F.getAttributes(),q=P.defaultAttributeValues;for(const J in Y){const k=Y[J];if(k.location>=0){let ne=V[J];if(ne===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const le=ne.normalized,ue=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const We=Ne.buffer,Je=Ne.type,Ve=Ne.bytesPerElement,j=Je===i.INT||Je===i.UNSIGNED_INT||ne.gpuType===jl;if(ne.isInterleavedBufferAttribute){const Q=ne.data,xe=Q.stride,Ie=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<k.locationSize;ye++)m(k.location+ye,Q.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<k.locationSize;ye++)_(k.location+ye);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ye=0;ye<k.locationSize;ye++)E(k.location+ye,ue/k.locationSize,Je,le,xe*Ve,(Ie+ue/k.locationSize*ye)*Ve,j)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q,ne.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<k.locationSize;Q++)_(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Q=0;Q<k.locationSize;Q++)E(k.location+Q,ue/k.locationSize,Je,le,ue*Ve,ue/k.locationSize*Q*Ve,j)}}else if(q!==void 0){const le=q[J];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(k.location,le);break;case 3:i.vertexAttrib3fv(k.location,le);break;case 4:i.vertexAttrib4fv(k.location,le);break;default:i.vertexAttrib1fv(k.location,le)}}}}T()}function A(){I();for(const x in n){const P=n[x];for(const F in P){const B=P[F];for(const V in B)h(B[V].object),delete B[V];delete P[F]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const F in P){const B=P[F];for(const V in B)h(B[V].object),delete B[V];delete P[F]}delete n[x.id]}function R(x){for(const P in n){const F=n[P];if(F[x.id]===void 0)continue;const B=F[x.id];for(const V in B)h(B[V].object),delete B[V];delete F[x.id]}}function I(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:d,enableAttribute:_,disableUnusedAttributes:T}}function L0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let d=0;d<u;d++)g+=h[d]*f[d];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function I0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==xn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:d,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:A,maxSamples:b}}function U0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ai,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,d=u.clipIntersection,_=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!_)r?h(null):c();else{const T=r?0:n,E=T*4;let S=m.clippingState||null;l.value=S,S=h(g,f,E,p);for(let A=0;A!==E;++A)S[A]=t[A];m.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const d=u!==null?u.length:0;let _=null;if(d!==0){if(_=l.value,g!==!0||_===null){const m=p+d*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(_===null||_.length<m)&&(_=new Float32Array(m));for(let E=0,S=p;E!==d;++E,S+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,_}}function N0(i){let e=new WeakMap;function t(o,a){return a===Ja?o.mapping=Ss:a===Qa&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rd(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fs=4,ch=[.125,.215,.35,.446,.526,.582],Di=20,ba=new fc,hh=new ge;let Ea=null,Ta=0,wa=0,Aa=!1;const Ri=(1+Math.sqrt(5))/2,cs=1/Ri,uh=[new D(-Ri,cs,0),new D(Ri,cs,0),new D(-cs,0,Ri),new D(cs,0,Ri),new D(0,Ri,-cs),new D(0,Ri,cs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],F0=new D;class fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=F0}=r;Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,wa),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ss||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Kn,format:xn,colorSpace:Es,depthBuffer:!1},s=dh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=B0(r)),this._blurMaterial=O0(r,e,t)}return s}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,s,r){const l=new tn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(hh),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const d=new In({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new ct(new rn,d);let m=!1;const T=e.background;T?T.isColor&&(d.color.copy(T),e.background=null,m=!0):(d.color.copy(hh),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const A=this._cubeSize;Kr(s,S*A,E>2?A:0,A,A),u.setRenderTarget(s),m&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ss||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(s-r-1)%uh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ct(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),d=r/g,_=isFinite(r)?1+Math.floor(h*d):Di;_>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Di}`);const m=[];let T=0;for(let R=0;R<Di;++R){const I=R/d,y=Math.exp(-I*I/2);m.push(y),R===0?T+=y:R<_&&(T+=2*y)}for(let R=0;R<m.length;R++)m[R]=m[R]/T;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const S=this._sizeLods[s],A=3*S*(s>E-fs?s-E+fs:0),b=4*(this._cubeSize-S);Kr(t,A,b,3*S,2*S),l.setRenderTarget(t),l.render(u,ba)}}function B0(i){const e=[],t=[],n=[];let s=i;const r=i-fs+1+ch.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-fs?l=ch[o-i+fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,d=3,_=2,m=1,T=new Float32Array(d*g*p),E=new Float32Array(_*g*p),S=new Float32Array(m*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,I=b>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];T.set(y,d*g*b),E.set(f,_*g*b);const x=[b,b,b,b,b,b];S.set(x,m*g*b)}const A=new Bt;A.setAttribute("position",new En(T,d)),A.setAttribute("uv",new En(E,_)),A.setAttribute("faceIndex",new En(S,m)),e.push(A),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dh(i,e,t){const n=new bn(i,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function O0(i,e,t){const n=new Float32Array(Di),s=new D(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ph(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function mh(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function k0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,h=l===Ss||l===bs;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new fh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new fh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function H0(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let d=0;if(p!==null){const T=p.array;d=p.version;for(let E=0,S=T.length;E<S;E+=3){const A=T[E+0],b=T[E+1],R=T[E+2];f.push(A,b,b,R,R,A)}}else if(g!==void 0){const T=g.array;d=g.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const A=E+0,b=E+1,R=E+2;f.push(A,b,b,R,R,A)}}else return;const _=new(_u(f)?yu:Mu)(f,1);_.version=d;const m=r.get(u);m&&e.remove(m),r.set(u,_)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function V0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let _=0;for(let m=0;m<g;m++)_+=p[m];t.update(_,n,1)}function u(f,p,g,d){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],d[m]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,d,0,g);let m=0;for(let T=0;T<g;T++)m+=p[T]*d[T];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,e,t){const n=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),d===!0&&(E=3);let S=a.attributes.position.count*E,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*A*4*u),R=new vu(b,S,A,u);R.type=qn,R.needsUpdate=!0;const I=E*4;for(let x=0;x<u;x++){const P=_[x],F=m[x],B=T[x],V=S*A*4*x;for(let Y=0;Y<P.count;Y++){const q=Y*I;p===!0&&(s.fromBufferAttribute(P,Y),b[V+q+0]=s.x,b[V+q+1]=s.y,b[V+q+2]=s.z,b[V+q+3]=0),g===!0&&(s.fromBufferAttribute(F,Y),b[V+q+4]=s.x,b[V+q+5]=s.y,b[V+q+6]=s.z,b[V+q+7]=0),d===!0&&(s.fromBufferAttribute(B,Y),b[V+q+8]=s.x,b[V+q+9]=s.y,b[V+q+10]=s.z,b[V+q+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new De(S,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let d=0;d<c.length;d++)p+=c[d];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function X0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Iu=new Gt,gh=new Au(1,1),Uu=new vu,Nu=new fd,Fu=new Eu,_h=[],vh=[],xh=new Float32Array(16),Mh=new Float32Array(9),yh=new Float32Array(4);function Us(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=vh[e];t===void 0&&(t=new Int32Array(e),vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function K0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;yh.set(n),i.uniformMatrix2fv(this.addr,!1,yh),Pt(t,n)}}function Z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Mh.set(n),i.uniformMatrix3fv(this.addr,!1,Mh),Pt(t,n)}}function J0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;xh.set(n),i.uniformMatrix4fv(this.addr,!1,xh),Pt(t,n)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gh.compareFunction=gu,r=gh):r=Iu,t.setTexture2D(e||r,s)}function lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nu,s)}function cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fu,s)}function hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function ug(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return $0;case 35666:return j0;case 35674:return K0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function fg(i,e){i.uniform1fv(this.addr,e)}function dg(i,e){const t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){const t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){const t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){const t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _g(i,e){const t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vg(i,e){const t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xg(i,e){i.uniform1iv(this.addr,e)}function Mg(i,e){i.uniform2iv(this.addr,e)}function yg(i,e){i.uniform3iv(this.addr,e)}function Sg(i,e){i.uniform4iv(this.addr,e)}function bg(i,e){i.uniform1uiv(this.addr,e)}function Eg(i,e){i.uniform2uiv(this.addr,e)}function Tg(i,e){i.uniform3uiv(this.addr,e)}function wg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Iu,r[o])}function Rg(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nu,r[o])}function Cg(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fu,r[o])}function Pg(i,e,t){const n=this.cache,s=e.length,r=Oo(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uu,r[o])}function Dg(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dg(t.type)}}class Ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Sh(i,e){i.seq.push(e),i.map[e.id]=e}function Ng(i,e,t){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const r=Ra.exec(n),o=Ra.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sh(t,c===void 0?new Lg(a,i,e):new Ig(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ug(a),Sh(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ng(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function bh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fg=37297;let Bg=0;function Og(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Eh=new qe;function kg(i){tt._getMatrix(Eh,tt.workingColorSpace,i);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Th(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Og(i.getShaderSource(e),a)}else return r}function zg(i,e){const t=kg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hg(i,e){let t;switch(e){case zf:t="Linear";break;case Hf:t="Reinhard";break;case Vf:t="Cineon";break;case Gf:t="ACESFilmic";break;case Xf:t="AgX";break;case qf:t="Neutral";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new D;function Vg(){tt.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Js(i){return i!==""}function wh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ah(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(qg,$g)}const Yg=new Map;function $g(i,e){let t=Ke[e];if(t===void 0){const n=Yg.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ul(t)}const jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(i){return i.replace(jg,Kg)}function Kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ch(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ou?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case bs:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===bs&&(e="ENVMAP_MODE_REFRACTION"),e}function e_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case Of:e="ENVMAP_BLENDING_MIX";break;case kf:e="ENVMAP_BLENDING_ADD";break}return e}function t_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zg(t),c=Jg(t),h=Qg(t),u=e_(t),f=t_(t),p=Gg(t),g=Wg(r),d=s.createProgram();let _,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(_=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==fi?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,zg("linearToOutputTexel",t.outputColorSpace),Vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Ul(o),o=wh(o,t),o=Ah(o,t),a=Ul(a),a=wh(a,t),a=Ah(a,t),o=Rh(o),a=Rh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=T+_+o,S=T+m+a,A=bh(s,s.VERTEX_SHADER,E),b=bh(s,s.FRAGMENT_SHADER,S);s.attachShader(d,A),s.attachShader(d,b),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function R(P){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(d)||"",B=s.getShaderInfoLog(A)||"",V=s.getShaderInfoLog(b)||"",Y=F.trim(),q=B.trim(),J=V.trim();let k=!0,ne=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,A,b);else{const le=Th(s,A,"vertex"),ue=Th(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+le+`
`+ue)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||J==="")&&(ne=!1);ne&&(P.diagnostics={runnable:k,programLog:Y,vertexShader:{log:q,prefix:_},fragmentShader:{log:J,prefix:m}})}s.deleteShader(A),s.deleteShader(b),I=new po(s,d),y=Xg(s,d)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(d,Fg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=b,this}let i_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r_(e),t.set(e,n)),n}}class r_{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}}function o_(i,e,t,n,s,r,o){const a=new sc,l=new s_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,x,P,F,B){const V=F.fog,Y=B.geometry,q=y.isMeshStandardMaterial?F.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),k=J&&J.mapping===Fo?J.image.height:null,ne=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const le=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ue=le!==void 0?le.length:0;let Ne=0;Y.morphAttributes.position!==void 0&&(Ne=1),Y.morphAttributes.normal!==void 0&&(Ne=2),Y.morphAttributes.color!==void 0&&(Ne=3);let We,Je,Ve,j;if(ne){const nt=Rn[ne];We=nt.vertexShader,Je=nt.fragmentShader}else We=y.vertexShader,Je=y.fragmentShader,l.update(y),Ve=l.getVertexShaderID(y),j=l.getFragmentShaderID(y);const Q=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,$e=!!y.map,bt=!!y.matcap,C=!!J,vt=!!y.aoMap,Ge=!!y.lightMap,ke=!!y.bumpMap,Ee=!!y.normalMap,xt=!!y.displacementMap,Te=!!y.emissiveMap,je=!!y.metalnessMap,Dt=!!y.roughnessMap,Tt=y.anisotropy>0,w=y.clearcoat>0,v=y.dispersion>0,O=y.iridescence>0,K=y.sheen>0,ee=y.transmission>0,$=Tt&&!!y.anisotropyMap,Ce=w&&!!y.clearcoatMap,ae=w&&!!y.clearcoatNormalMap,we=w&&!!y.clearcoatRoughnessMap,Ae=O&&!!y.iridescenceMap,re=O&&!!y.iridescenceThicknessMap,me=K&&!!y.sheenColorMap,Be=K&&!!y.sheenRoughnessMap,Re=!!y.specularMap,fe=!!y.specularColorMap,Xe=!!y.specularIntensityMap,L=ee&&!!y.transmissionMap,oe=ee&&!!y.thicknessMap,ce=!!y.gradientMap,Me=!!y.alphaMap,ie=y.alphaTest>0,Z=!!y.alphaHash,be=!!y.extensions;let He=fi;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(He=i.toneMapping);const ut={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:Je,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Es,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:bt,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:k,aoMap:vt,lightMap:Ge,bumpMap:ke,normalMap:Ee,displacementMap:f&&xt,emissiveMap:Te,normalMapObjectSpace:Ee&&y.normalMapType===Kf,normalMapTangentSpace:Ee&&y.normalMapType===tc,metalnessMap:je,roughnessMap:Dt,anisotropy:Tt,anisotropyMap:$,clearcoat:w,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:we,dispersion:v,iridescence:O,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:K,sheenColorMap:me,sheenRoughnessMap:Be,specularMap:Re,specularColorMap:fe,specularIntensityMap:Xe,transmission:ee,transmissionMap:L,thicknessMap:oe,gradientMap:ce,opaque:y.transparent===!1&&y.blending===jn&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ie,alphaHash:Z,combine:y.combine,mapUv:$e&&d(y.map.channel),aoMapUv:vt&&d(y.aoMap.channel),lightMapUv:Ge&&d(y.lightMap.channel),bumpMapUv:ke&&d(y.bumpMap.channel),normalMapUv:Ee&&d(y.normalMap.channel),displacementMapUv:xt&&d(y.displacementMap.channel),emissiveMapUv:Te&&d(y.emissiveMap.channel),metalnessMapUv:je&&d(y.metalnessMap.channel),roughnessMapUv:Dt&&d(y.roughnessMap.channel),anisotropyMapUv:$&&d(y.anisotropyMap.channel),clearcoatMapUv:Ce&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&d(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&d(y.sheenRoughnessMap.channel),specularMapUv:Re&&d(y.specularMap.channel),specularColorMapUv:fe&&d(y.specularColorMap.channel),specularIntensityMapUv:Xe&&d(y.specularIntensityMap.channel),transmissionMapUv:L&&d(y.transmissionMap.channel),thicknessMapUv:oe&&d(y.thicknessMap.channel),alphaMapUv:Me&&d(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ee||Tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&($e||Me),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:Te&&y.emissiveMap.isVideoTexture===!0&&tt.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(x,y),E(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function T(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const x=g[y.type];let P;if(x){const F=Rn[x];P=So.clone(F.uniforms)}else P=y.uniforms;return P}function A(y,x){let P;for(let F=0,B=h.length;F<B;F++){const V=h[F];if(V.cacheKey===x){P=V,++P.usedTimes;break}}return P===void 0&&(P=new n_(i,x,y,r),h.push(P)),P}function b(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function I(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:I}}function a_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function l_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,d,_){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:d,group:_},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=d,m.group=_),e++,m}function a(u,f,p,g,d,_){const m=o(u,f,p,g,d,_);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):t.push(m)}function l(u,f,p,g,d,_){const m=o(u,f,p,g,d,_);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||l_),n.length>1&&n.sort(f||Ph),s.length>1&&s.sort(f||Ph)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function c_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Dh,i.set(n,[o])):s>=r.length?(o=new Dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function h_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ge};break;case"SpotLight":t={position:new D,direction:new D,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function u_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let f_=0;function d_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p_(i){const e=new h_,t=u_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new _t,o=new _t;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,d=0,_=0,m=0,T=0,E=0,S=0,A=0,b=0,R=0;c.sort(d_);for(let y=0,x=c.length;y<x;y++){const P=c[y],F=P.color,B=P.intensity,V=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,u+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],B);R++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(B),q.distance=V,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[d]=q;const J=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,J.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[d]=J.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[d]=k,n.spotShadowMap[d]=Y,S++}d++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(F).multiplyScalar(B),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=q,_++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const J=P.shadow,k=t.get(P);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(B),q.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[m]=q,m++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==d||I.rectAreaLength!==_||I.hemiLength!==m||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==S||I.numSpotMaps!==A||I.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=d,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=d,I.rectAreaLength=_,I.hemiLength=m,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=S,I.numSpotMaps=A,I.numLightProbes=R,n.version=f_++)}function l(c,h){let u=0,f=0,p=0,g=0,d=0;const _=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const E=c[m];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),p++}else if(E.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),o.identity(),r.copy(E.matrixWorld),r.premultiply(_),o.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(_),f++}else if(E.isHemisphereLight){const S=n.hemi[d];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(_),d++}}}return{setup:a,setupView:l,state:n}}function Lh(i){const e=new p_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function m_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Lh(i),e.set(s,[a])):r>=o.length?(a=new Lh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(i,e,t){let n=new ac;const s=new De,r=new De,o=new at,a=new Nd({depthPacking:jf}),l=new Fd,c={},h=t.maxTextureSize,u={[ei]:Yt,[Yt]:ei,[cn]:cn},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:g_,fragmentShader:__}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ct(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let m=this.type;this.render=function(b,R,I){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending($n),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=m!==Vn&&this.type===Vn,V=m===Vn&&this.type!==Vn;for(let Y=0,q=b.length;Y<q;Y++){const J=b[Y],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();if(s.multiply(ne),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y)),k.map===null||B===!0||V===!0){const ue=this.type!==Vn?{minFilter:Rt,magFilter:Rt}:{};k.map!==null&&k.map.dispose(),k.map=new bn(s.x,s.y,ue),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const le=k.getViewportCount();for(let ue=0;ue<le;ue++){const Ne=k.getViewport(ue);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),F.viewport(o),k.updateMatrices(J,ue),n=k.getFrustum(),S(R,I,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Vn&&T(k,I),k.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(y,x,P)};function T(b,R){const I=e.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new bn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,I,f,d,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,I,p,d,null)}function E(b,R,I,y){let x=null;const P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=x.uuid,B=R.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let Y=V[B];Y===void 0&&(Y=x.clone(),V[B]=Y,R.addEventListener("dispose",A)),x=Y}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Vn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=I}return x}function S(b,R,I,y,x){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const B=e.update(b),V=b.material;if(Array.isArray(V)){const Y=B.groups;for(let q=0,J=Y.length;q<J;q++){const k=Y[q],ne=V[k.materialIndex];if(ne&&ne.visible){const le=E(b,ne,y,x);b.onBeforeShadow(i,b,R,I,B,le,k),i.renderBufferDirect(I,null,B,le,b,k),b.onAfterShadow(i,b,R,I,B,le,k)}}}else if(V.visible){const Y=E(b,V,y,x);b.onBeforeShadow(i,b,R,I,B,Y,null),i.renderBufferDirect(I,null,B,Y,b,null),b.onAfterShadow(i,b,R,I,B,Y,null)}}const F=b.children;for(let B=0,V=F.length;B<V;B++)S(F[B],R,I,y,x)}function A(b){b.target.removeEventListener("dispose",A);for(const I in c){const y=c[I],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const x_={[Xa]:qa,[Ya]:Ka,[$a]:Za,[ys]:ja,[qa]:Xa,[Ka]:Ya,[Za]:$a,[ja]:ys};function M_(i,e){function t(){let L=!1;const oe=new at;let ce=null;const Me=new at(0,0,0,0);return{setMask:function(ie){ce!==ie&&!L&&(i.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Z,be,He,ut){ut===!0&&(ie*=He,Z*=He,be*=He),oe.set(ie,Z,be,He),Me.equals(oe)===!1&&(i.clearColor(ie,Z,be,He),Me.copy(oe))},reset:function(){L=!1,ce=null,Me.set(-1,0,0,0)}}}function n(){let L=!1,oe=!1,ce=null,Me=null,ie=null;return{setReversed:function(Z){if(oe!==Z){const be=e.get("EXT_clip_control");Z?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),oe=Z;const He=ie;ie=null,this.setClear(He)}},getReversed:function(){return oe},setTest:function(Z){Z?Q(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Z){ce!==Z&&!L&&(i.depthMask(Z),ce=Z)},setFunc:function(Z){if(oe&&(Z=x_[Z]),Me!==Z){switch(Z){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Z}},setLocked:function(Z){L=Z},setClear:function(Z){ie!==Z&&(oe&&(Z=1-Z),i.clearDepth(Z),ie=Z)},reset:function(){L=!1,ce=null,Me=null,ie=null,oe=!1}}}function s(){let L=!1,oe=null,ce=null,Me=null,ie=null,Z=null,be=null,He=null,ut=null;return{setTest:function(nt){L||(nt?Q(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(nt){oe!==nt&&!L&&(i.stencilMask(nt),oe=nt)},setFunc:function(nt,Nn,An){(ce!==nt||Me!==Nn||ie!==An)&&(i.stencilFunc(nt,Nn,An),ce=nt,Me=Nn,ie=An)},setOp:function(nt,Nn,An){(Z!==nt||be!==Nn||He!==An)&&(i.stencilOp(nt,Nn,An),Z=nt,be=Nn,He=An)},setLocked:function(nt){L=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){L=!1,oe=null,ce=null,Me=null,ie=null,Z=null,be=null,He=null,ut=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,d=!1,_=null,m=null,T=null,E=null,S=null,A=null,b=null,R=new ge(0,0,0),I=0,y=!1,x=null,P=null,F=null,B=null,V=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=J>=2);let ne=null,le={};const ue=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),We=new at().fromArray(ue),Je=new at().fromArray(Ne);function Ve(L,oe,ce,Me){const ie=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ce;be++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(oe+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return Z}const j={};j[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(ys),ke(!1),Ee(Dc),Q(i.CULL_FACE),vt($n);function Q(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function xe(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ie(L,oe){return u[L]!==oe?(i.bindFramebuffer(L,oe),u[L]=oe,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ye(L,oe){let ce=p,Me=!1;if(L){ce=f.get(oe),ce===void 0&&(ce=[],f.set(oe,ce));const ie=L.textures;if(ce.length!==ie.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,be=ie.length;Z<be;Z++)ce[Z]=i.COLOR_ATTACHMENT0+Z;ce.length=ie.length,Me=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ce)}function $e(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const bt={[Pi]:i.FUNC_ADD,[yf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};bt[bf]=i.MIN,bt[Ef]=i.MAX;const C={[Tf]:i.ZERO,[wf]:i.ONE,[Af]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Df]:i.DST_COLOR,[Cf]:i.DST_ALPHA,[Rf]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Lf]:i.ONE_MINUS_DST_COLOR,[Pf]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Nf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(L,oe,ce,Me,ie,Z,be,He,ut,nt){if(L===$n){d===!0&&(xe(i.BLEND),d=!1);return}if(d===!1&&(Q(i.BLEND),d=!0),L!==Mf){if(L!==_||nt!==y){if((m!==Pi||S!==Pi)&&(i.blendEquation(i.FUNC_ADD),m=Pi,S=Pi),nt)switch(L){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,A=null,b=null,R.set(0,0,0),I=0,_=L,y=nt}return}ie=ie||oe,Z=Z||ce,be=be||Me,(oe!==m||ie!==S)&&(i.blendEquationSeparate(bt[oe],bt[ie]),m=oe,S=ie),(ce!==T||Me!==E||Z!==A||be!==b)&&(i.blendFuncSeparate(C[ce],C[Me],C[Z],C[be]),T=ce,E=Me,A=Z,b=be),(He.equals(R)===!1||ut!==I)&&(i.blendColor(He.r,He.g,He.b,ut),R.copy(He),I=ut),_=L,y=!1}function Ge(L,oe){L.side===cn?xe(i.CULL_FACE):Q(i.CULL_FACE);let ce=L.side===Yt;oe&&(ce=!ce),ke(ce),L.blending===jn&&L.transparent===!1?vt($n):vt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Me=L.stencilWrite;a.setTest(Me),Me&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function Ee(L){L!==vf?(Q(i.CULL_FACE),L!==P&&(L===Dc?i.cullFace(i.BACK):L===xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=L}function xt(L){L!==F&&(q&&i.lineWidth(L),F=L)}function Te(L,oe,ce){L?(Q(i.POLYGON_OFFSET_FILL),(B!==oe||V!==ce)&&(i.polygonOffset(oe,ce),B=oe,V=ce)):xe(i.POLYGON_OFFSET_FILL)}function je(L){L?Q(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Dt(L){L===void 0&&(L=i.TEXTURE0+Y-1),ne!==L&&(i.activeTexture(L),ne=L)}function Tt(L,oe,ce){ce===void 0&&(ne===null?ce=i.TEXTURE0+Y-1:ce=ne);let Me=le[ce];Me===void 0&&(Me={type:void 0,texture:void 0},le[ce]=Me),(Me.type!==L||Me.texture!==oe)&&(ne!==ce&&(i.activeTexture(ce),ne=ce),i.bindTexture(L,oe||j[L]),Me.type=L,Me.texture=oe)}function w(){const L=le[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(L){We.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),We.copy(L))}function Be(L){Je.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Je.copy(L))}function Re(L,oe){let ce=c.get(oe);ce===void 0&&(ce=new WeakMap,c.set(oe,ce));let Me=ce.get(L);Me===void 0&&(Me=i.getUniformBlockIndex(oe,L.name),ce.set(L,Me))}function fe(L,oe){const Me=c.get(oe).get(L);l.get(oe)!==Me&&(i.uniformBlockBinding(oe,Me,L.__bindingPointIndex),l.set(oe,Me))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,le={},u={},f=new WeakMap,p=[],g=null,d=!1,_=null,m=null,T=null,E=null,S=null,A=null,b=null,R=new ge(0,0,0),I=0,y=!1,x=null,P=null,F=null,B=null,V=null,We.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:xe,bindFramebuffer:Ie,drawBuffers:ye,useProgram:$e,setBlending:vt,setMaterial:Ge,setFlipSided:ke,setCullFace:Ee,setLineWidth:xt,setPolygonOffset:Te,setScissorTest:je,activeTexture:Dt,bindTexture:Tt,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ae,texImage3D:re,updateUBOMapping:Re,uniformBlockBinding:fe,texStorage2D:ae,texStorage3D:we,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Ce,scissor:me,viewport:Be,reset:Xe}}function y_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return p?new OffscreenCanvas(w,v):ur("canvas")}function d(w,v,O){let K=1;const ee=Tt(w);if((ee.width>O||ee.height>O)&&(K=O/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(K*ee.width),Ce=Math.floor(K*ee.height);u===void 0&&(u=g($,Ce));const ae=v?g($,Ce):u;return ae.width=$,ae.height=Ce,ae.getContext("2d").drawImage(w,0,0,$,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ce+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function _(w){return w.generateMipmaps}function m(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,v,O,K,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=v;if(v===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),v===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){const Ce=ee?Mo:tt.getTransfer(K);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Ce===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(w,v){let O;return w?v===null||v===Hi||v===lr?O=i.DEPTH24_STENCIL8:v===qn?O=i.DEPTH32F_STENCIL8:v===ar&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Hi||v===lr?O=i.DEPTH_COMPONENT24:v===qn?O=i.DEPTH_COMPONENT32F:v===ar&&(O=i.DEPTH_COMPONENT16),O}function A(w,v){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==Rt&&w.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function b(w){const v=w.target;v.removeEventListener("dispose",b),I(v),v.isVideoTexture&&h.delete(v)}function R(w){const v=w.target;v.removeEventListener("dispose",R),x(v)}function I(w){const v=n.get(w);if(v.__webglInit===void 0)return;const O=w.source,K=f.get(O);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(w),Object.keys(K).length===0&&f.delete(O)}n.remove(w)}function y(w){const v=n.get(w);i.deleteTexture(v.__webglTexture);const O=w.source,K=f.get(O);delete K[v.__cacheKey],o.memory.textures--}function x(w){const v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,ee=O.length;K<ee;K++){const $=n.get(O[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(w)}let P=0;function F(){P=0}function B(){const w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function V(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Y(w,v){const O=n.get(w);if(w.isVideoTexture&&je(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function q(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function J(w,v){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){j(O,w,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function k(w,v){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Q(O,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ne={[el]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},le={[Rt]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ue={[Zf]:i.NEVER,[id]:i.ALWAYS,[Jf]:i.LESS,[gu]:i.LEQUAL,[Qf]:i.EQUAL,[nd]:i.GEQUAL,[ed]:i.GREATER,[td]:i.NOTEQUAL};function Ne(w,v){if(v.type===qn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===$o||v.magFilter===wr||v.magFilter===Ii||v.minFilter===fn||v.minFilter===$o||v.minFilter===wr||v.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ne[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,le[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rt||v.minFilter!==wr&&v.minFilter!==Ii||v.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function We(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",b));const K=v.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const $=V(v);if($!==w.__cacheKey){ee[$]===void 0&&(ee[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[$].usedTimes++;const Ce=ee[w.__cacheKey];Ce!==void 0&&(ee[w.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(v)),w.__cacheKey=$,w.__webglTexture=ee[$].texture}return O}function Je(w,v,O){return Math.floor(Math.floor(w/O)/v)}function Ve(w,v,O,K){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,K,v.data);else{$.sort((re,me)=>re.start-me.start);let Ce=0;for(let re=1;re<$.length;re++){const me=$[Ce],Be=$[re],Re=me.start+me.count,fe=Je(Be.start,v.width,4),Xe=Je(me.start,v.width,4);Be.start<=Re+1&&fe===Xe&&Je(Be.start+Be.count-1,v.width,4)===fe?me.count=Math.max(me.count,Be.start+Be.count-me.start):(++Ce,$[Ce]=Be)}$.length=Ce+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,me=$.length;re<me;re++){const Be=$[re],Re=Math.floor(Be.start/4),fe=Math.ceil(Be.count/4),Xe=Re%v.width,L=Math.floor(Re/v.width),oe=fe,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Xe,L,oe,ce,O,K,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function j(w,v,O){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const ee=We(w,v),$=v.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const Ce=n.get($);if($.version!==Ce.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const ae=tt.getPrimaries(tt.workingColorSpace),we=v.colorSpace===ci?null:tt.getPrimaries(v.colorSpace),Ae=v.colorSpace===ci||ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=d(v.image,!1,s.maxTextureSize);re=Dt(v,re);const me=r.convert(v.format,v.colorSpace),Be=r.convert(v.type);let Re=E(v.internalFormat,me,Be,v.colorSpace,v.isVideoTexture);Ne(K,v);let fe;const Xe=v.mipmaps,L=v.isVideoTexture!==!0,oe=Ce.__version===void 0||ee===!0,ce=$.dataReady,Me=A(v,re);if(v.isDepthTexture)Re=S(v.format===hr,v.type),oe&&(L?t.texStorage2D(i.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Be,null));else if(v.isDataTexture)if(Xe.length>0){L&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,Re,Xe[0].width,Xe[0].height);for(let ie=0,Z=Xe.length;ie<Z;ie++)fe=Xe[ie],L?ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ie,Re,fe.width,fe.height,0,me,Be,fe.data);v.generateMipmaps=!1}else L?(oe&&t.texStorage2D(i.TEXTURE_2D,Me,Re,re.width,re.height),ce&&Ve(v,re,me,Be)):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Be,re.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Re,Xe[0].width,Xe[0].height,re.depth);for(let ie=0,Z=Xe.length;ie<Z;ie++)if(fe=Xe[ie],v.format!==xn)if(me!==null)if(L){if(ce)if(v.layerUpdates.size>0){const be=lh(fe.width,fe.height,v.format,v.type);for(const He of v.layerUpdates){const ut=fe.data.subarray(He*be/fe.data.BYTES_PER_ELEMENT,(He+1)*be/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,He,fe.width,fe.height,1,me,ut)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,me,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,me,Be,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,re.depth,0,me,Be,fe.data)}else{L&&oe&&t.texStorage2D(i.TEXTURE_2D,Me,Re,Xe[0].width,Xe[0].height);for(let ie=0,Z=Xe.length;ie<Z;ie++)fe=Xe[ie],v.format!==xn?me!==null?L?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Re,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ie,Re,fe.width,fe.height,0,me,Be,fe.data)}else if(v.isDataArrayTexture)if(L){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Re,re.width,re.height,re.depth),ce)if(v.layerUpdates.size>0){const ie=lh(re.width,re.height,v.format,v.type);for(const Z of v.layerUpdates){const be=re.data.subarray(Z*ie/re.data.BYTES_PER_ELEMENT,(Z+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,me,Be,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Be,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,me,Be,re.data);else if(v.isData3DTexture)L?(oe&&t.texStorage3D(i.TEXTURE_3D,Me,Re,re.width,re.height,re.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Be,re.data)):t.texImage3D(i.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,me,Be,re.data);else if(v.isFramebufferTexture){if(oe)if(L)t.texStorage2D(i.TEXTURE_2D,Me,Re,re.width,re.height);else{let ie=re.width,Z=re.height;for(let be=0;be<Me;be++)t.texImage2D(i.TEXTURE_2D,be,Re,ie,Z,0,me,Be,null),ie>>=1,Z>>=1}}else if(Xe.length>0){if(L&&oe){const ie=Tt(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Me,Re,ie.width,ie.height)}for(let ie=0,Z=Xe.length;ie<Z;ie++)fe=Xe[ie],L?ce&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me,Be,fe):t.texImage2D(i.TEXTURE_2D,ie,Re,me,Be,fe);v.generateMipmaps=!1}else if(L){if(oe){const ie=Tt(re);t.texStorage2D(i.TEXTURE_2D,Me,Re,ie.width,ie.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Be,re)}else t.texImage2D(i.TEXTURE_2D,0,Re,me,Be,re);_(v)&&m(K),Ce.__version=$.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Q(w,v,O){if(v.image.length!==6)return;const K=We(w,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const $=n.get(ee);if(ee.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const Ce=tt.getPrimaries(tt.workingColorSpace),ae=v.colorSpace===ci?null:tt.getPrimaries(v.colorSpace),we=v.colorSpace===ci||Ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ae=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ae&&!re?me[Z]=d(v.image[Z],!0,s.maxCubemapSize):me[Z]=re?v.image[Z].image:v.image[Z],me[Z]=Dt(v,me[Z]);const Be=me[0],Re=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),Xe=E(v.internalFormat,Re,fe,v.colorSpace),L=v.isVideoTexture!==!0,oe=$.__version===void 0||K===!0,ce=ee.dataReady;let Me=A(v,Be);Ne(i.TEXTURE_CUBE_MAP,v);let ie;if(Ae){L&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Xe,Be.width,Be.height);for(let Z=0;Z<6;Z++){ie=me[Z].mipmaps;for(let be=0;be<ie.length;be++){const He=ie[be];v.format!==xn?Re!==null?L?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,He.width,He.height,Re,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Xe,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,0,0,He.width,He.height,Re,fe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be,Xe,He.width,He.height,0,Re,fe,He.data)}}}else{if(ie=v.mipmaps,L&&oe){ie.length>0&&Me++;const Z=Tt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Re,fe,me[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,me[Z].width,me[Z].height,0,Re,fe,me[Z].data);for(let be=0;be<ie.length;be++){const ut=ie[be].image[Z].image;L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,ut.width,ut.height,Re,fe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Xe,ut.width,ut.height,0,Re,fe,ut.data)}}else{L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,fe,me[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Re,fe,me[Z]);for(let be=0;be<ie.length;be++){const He=ie[be];L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,0,0,Re,fe,He.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,be+1,Xe,Re,fe,He.image[Z])}}}_(v)&&m(i.TEXTURE_CUBE_MAP),$.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function xe(w,v,O,K,ee,$){const Ce=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),we=E(O.internalFormat,Ce,ae,O.colorSpace),Ae=n.get(v),re=n.get(O);if(re.__renderTarget=v,!Ae.__hasExternalTextures){const me=Math.max(1,v.width>>$),Be=Math.max(1,v.height>>$);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,we,me,Be,v.depth,0,Ce,ae,null):t.texImage2D(ee,$,we,me,Be,0,Ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,re.__webglTexture,0,xt(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,$=S(v.stencilBuffer,ee),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=xt(v);Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,w)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const $=K[ee],Ce=r.convert($.format,$.colorSpace),ae=r.convert($.type),we=E($.internalFormat,Ce,ae,$.colorSpace),Ae=xt(v);O&&Te(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,we,v.width,v.height):Te(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,we,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,we,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ee=K.__webglTexture,$=xt(v);if(v.depthTexture.format===cr)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===hr)Te(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function $e(w){const v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const K=w.texture.mipmaps;K&&K.length>0?ye(v.__webglFramebuffer[0],w):ye(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),Ie(v.__webglDepthbuffer[K],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ie(v.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(w,v,O){const K=n.get(w);v!==void 0&&xe(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$e(w)}function C(w){const v=w.texture,O=n.get(w),K=n.get(v);w.addEventListener("dispose",R);const ee=w.textures,$=w.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let we=0;we<v.mipmaps.length;we++)O.__webglFramebuffer[ae][we]=i.createFramebuffer()}else O.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)O.__webglFramebuffer[ae]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ae=0,we=ee.length;ae<we;ae++){const Ae=n.get(ee[ae]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Te(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const we=ee[ae];O.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Ae=r.convert(we.format,we.colorSpace),re=r.convert(we.type),me=E(we.internalFormat,Ae,re,we.colorSpace,w.isXRRenderTarget===!0),Be=xt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)xe(O.__webglFramebuffer[ae][we],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,we);else xe(O.__webglFramebuffer[ae],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(v)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,we=ee.length;ae<we;ae++){const Ae=ee[ae],re=n.get(Ae);let me=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),Ne(me,Ae),xe(O.__webglFramebuffer,w,Ae,i.COLOR_ATTACHMENT0+ae,me,0),_(Ae)&&m(me)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),Ne(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let we=0;we<v.mipmaps.length;we++)xe(O.__webglFramebuffer[we],w,v,i.COLOR_ATTACHMENT0,ae,we);else xe(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ae,0);_(v)&&m(ae),t.unbindTexture()}w.depthBuffer&&$e(w)}function vt(w){const v=w.textures;for(let O=0,K=v.length;O<K;O++){const ee=v[O];if(_(ee)){const $=T(w),Ce=n.get(ee).__webglTexture;t.bindTexture($,Ce),m($),t.unbindTexture()}}}const Ge=[],ke=[];function Ee(w){if(w.samples>0){if(Te(w)===!1){const v=w.textures,O=w.width,K=w.height;let ee=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(w),ae=v.length>1;if(ae)for(let Ae=0;Ae<v.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const we=w.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<v.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const re=n.get(v[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,ee,i.NEAREST),l===!0&&(Ge.length=0,ke.length=0,Ge.push(i.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ge.push($),ke.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ae=0;Ae<v.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);const re=n.get(v[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xt(w){return Math.min(s.maxSamples,w.samples)}function Te(w){const v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function je(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Dt(w,v){const O=w.colorSpace,K=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Es&&O!==ci&&(tt.getTransfer(O)===st?(K!==xn||ee!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=bt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Te}function S_(i,e){function t(n,s=ci){let r;const o=tt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===ar)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===xn)return i.RGBA;if(n===cr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===Jl)return i.RED_INTEGER;if(n===mu)return i.RG;if(n===Ql)return i.RG_INTEGER;if(n===ec)return i.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===Ml||n===yl||n===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===El||n===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===lr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:b_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w_ extends Is{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const d=typeof XRWebGLBinding<"u",_=new T_,m={},T=t.getContextAttributes();let E=null,S=null;const A=[],b=[],R=new De;let I=null;const y=new tn;y.viewport=new at;const x=new tn;x.viewport=new at;const P=[y,x],F=new Xd;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=A[j];return Q===void 0&&(Q=new _a,A[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=A[j];return Q===void 0&&(Q=new _a,A[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=A[j];return Q===void 0&&(Q=new _a,A[j]=Q),Q.getHandSpace()};function Y(j){const Q=b.indexOf(j.inputSource);if(Q===-1)return;const xe=A[Q];xe!==void 0&&(xe.update(j.inputSource,j.frame,c||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",J);for(let j=0;j<A.length;j++){const Q=b[j];Q!==null&&(b[j]=null,A[j].disconnect(Q))}B=null,V=null,_.reset();for(const j in m)delete m[j];e.setRenderTarget(E),p=null,f=null,u=null,s=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&d&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",q),s.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),d&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ie=null,ye=null;T.depth&&(ye=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?hr:cr,Ie=T.stencil?lr:Hi);const $e={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($e),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new bn(f.textureWidth,f.textureHeight,{format:xn,type:Un,depthTexture:new Au(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new bn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(j){for(let Q=0;Q<j.removed.length;Q++){const xe=j.removed[Q],Ie=b.indexOf(xe);Ie>=0&&(b[Ie]=null,A[Ie].disconnect(xe))}for(let Q=0;Q<j.added.length;Q++){const xe=j.added[Q];let Ie=b.indexOf(xe);if(Ie===-1){for(let $e=0;$e<A.length;$e++)if($e>=b.length){b.push(xe),Ie=$e;break}else if(b[$e]===null){b[$e]=xe,Ie=$e;break}if(Ie===-1)break}const ye=A[Ie];ye&&ye.connect(xe)}}const k=new D,ne=new D;function le(j,Q,xe){k.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(xe.matrixWorld);const Ie=k.distanceTo(ne),ye=Q.projectionMatrix.elements,$e=xe.projectionMatrix.elements,bt=ye[14]/(ye[10]-1),C=ye[14]/(ye[10]+1),vt=(ye[9]+1)/ye[5],Ge=(ye[9]-1)/ye[5],ke=(ye[8]-1)/ye[0],Ee=($e[8]+1)/$e[0],xt=bt*ke,Te=bt*Ee,je=Ie/(-ke+Ee),Dt=je*-ke;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Dt),j.translateZ(je),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Tt=bt+je,w=C+je,v=xt-Dt,O=Te+(Ie-Dt),K=vt*C/w*Tt,ee=Ge*C/w*Tt;j.projectionMatrix.makePerspective(v,O,K,ee,Tt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ue(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Q=j.near,xe=j.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),F.near=x.near=y.near=Q,F.far=x.far=y.far=xe,(B!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,V=F.far),F.layers.mask=j.layers.mask|6,y.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;const Ie=j.parent,ye=F.cameras;ue(F,Ie);for(let $e=0;$e<ye.length;$e++)ue(ye[$e],Ie);ye.length===2?le(F,y,x):F.projectionMatrix.copy(y.projectionMatrix),Ne(j,F,Ie)};function Ne(j,Q,xe){xe===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Dl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(j){return m[j]};let We=null;function Je(j,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ie=!1;xe.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let C=0;C<xe.length;C++){const vt=xe[C];let Ge=null;if(p!==null)Ge=p.getViewport(vt);else{const Ee=u.getViewSubImage(f,vt);Ge=Ee.viewport,C===0&&(e.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(S))}let ke=P[C];ke===void 0&&(ke=new tn,ke.layers.enable(C),ke.viewport=new at,P[C]=ke),ke.matrix.fromArray(vt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(vt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),C===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(ke)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){u=n.getBinding();const C=u.getDepthInformation(xe[0]);C&&C.isValid&&C.texture&&_.init(C,s.renderState)}if(ye&&ye.includes("camera-access")&&d){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<xe.length;C++){const vt=xe[C].camera;if(vt){let Ge=m[vt];Ge||(Ge=new Ru,m[vt]=Ge);const ke=u.getCameraImage(vt);Ge.sourceTexture=ke}}}}for(let xe=0;xe<A.length;xe++){const Ie=b[xe],ye=A[xe];Ie!==null&&ye!==void 0&&ye.update(Ie,Q,c||o)}We&&We(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ve=new Lu;Ve.setAnimationLoop(Je),this.setAnimationLoop=function(j){We=j},this.dispose=function(){}}}const wi=new wn,A_=new _t;function R_(i,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Su(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,T,E,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),h(_,m)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&p(_,m,S)):m.isMeshMatcapMaterial?(r(_,m),g(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),d(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,T,E):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Yt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Yt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const T=e.get(m),E=T.envMap,S=T.envMapRotation;E&&(_.envMap.value=E,wi.copy(S),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),_.envMapRotation.value.setFromMatrix4(A_.makeRotationFromEuler(wi)),_.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,T,E){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*T,_.scale.value=E*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function p(_,m,T){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Yt&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function d(_,m){const T=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=s[T.id];S===void 0&&(g(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",_));const A=E.program;n.updateUBOMapping(T,A);const b=e.render.frame;r[T.id]!==b&&(f(T),r[T.id]=b)}function h(T){const E=u();T.__bindingPointIndex=E;const S=i.createBuffer(),A=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=s[T.id],S=T.uniforms,A=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,R=S.length;b<R;b++){const I=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,x=I.length;y<x;y++){const P=I[y];if(p(P,b,y,A)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Y=0;Y<B.length;Y++){const q=B[Y],J=d(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,F+V,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,S,A){const b=T.value,R=E+"_"+S;if(A[R]===void 0)return typeof b=="number"||typeof b=="boolean"?A[R]=b:A[R]=b.clone(),!0;{const I=A[R];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return A[R]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(T){const E=T.uniforms;let S=0;const A=16;for(let R=0,I=E.length;R<I;R++){const y=Array.isArray(E[R])?E[R]:[E[R]];for(let x=0,P=y.length;x<P;x++){const F=y[x],B=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=B.length;V<Y;V++){const q=B[V],J=d(q),k=S%A,ne=k%J.boundary,le=k+ne;S+=ne,le!==0&&A-le<J.storage&&(S+=A-le),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=J.storage}}}const b=S%A;return b>0&&(S+=A-b),T.__size=S,T.__cache={},this}function d(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function _(T){const E=T.target;E.removeEventListener("dispose",_);const S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class P_{constructor(e={}){const{canvas:t=rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),d=new Int32Array(4);let _=null,m=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Ft;let b=0,R=0,I=null,y=-1,x=null;const P=new at,F=new at;let B=null;const V=new ge(0);let Y=0,q=t.width,J=t.height,k=1,ne=null,le=null;const ue=new at(0,0,q,J),Ne=new at(0,0,q,J);let We=!1;const Je=new ac;let Ve=!1,j=!1;const Q=new _t,xe=new D,Ie=new at,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function bt(){return I===null?k:1}let C=n;function vt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ie,!1),C===null){const U="webgl2";if(C=vt(U,M),C===null)throw vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ge,ke,Ee,xt,Te,je,Dt,Tt,w,v,O,K,ee,$,Ce,ae,we,Ae,re,me,Be,Re,fe,Xe;function L(){Ge=new z0(C),Ge.init(),Re=new S_(C,Ge),ke=new I0(C,Ge,e,Re),Ee=new M_(C,Ge),ke.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),xt=new G0(C),Te=new a_,je=new y_(C,Ge,Ee,Te,ke,Re,xt),Dt=new N0(S),Tt=new k0(S),w=new jd(C),fe=new D0(C,w),v=new H0(C,w,xt,fe),O=new X0(C,v,w,xt),re=new W0(C,ke,je),ae=new U0(Te),K=new o_(S,Dt,Tt,Ge,ke,fe,ae),ee=new R_(S,Te),$=new c_,Ce=new m_(Ge),Ae=new P0(S,Dt,Tt,Ee,O,p,l),we=new v_(S,O,ke),Xe=new C_(C,xt,ke,Ee),me=new L0(C,Ge,xt),Be=new V0(C,Ge,xt),xt.programs=K.programs,S.capabilities=ke,S.extensions=Ge,S.properties=Te,S.renderLists=$,S.shadowMap=we,S.state=Ee,S.info=xt}L();const oe=new w_(S,C);this.xr=oe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Ge.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ge.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(q,J,!1))},this.getSize=function(M){return M.set(q,J)},this.setSize=function(M,U,H=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,J=U,t.width=Math.floor(M*k),t.height=Math.floor(U*k),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(q*k,J*k).floor()},this.setDrawingBufferSize=function(M,U,H){q=M,J=U,k=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ue)},this.setViewport=function(M,U,H,G){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,U,H,G),Ee.viewport(P.copy(ue).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,U,H,G){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,U,H,G),Ee.scissor(F.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){Ee.setScissorTest(We=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,H=!0){let G=0;if(M){let N=!1;if(I!==null){const se=I.texture.format;N=se===ec||se===Ql||se===Jl}if(N){const se=I.texture.type,pe=se===Un||se===Hi||se===ar||se===lr||se===Kl||se===Zl,Se=Ae.getClearColor(),_e=Ae.getClearAlpha(),Fe=Se.r,ze=Se.g,Le=Se.b;pe?(g[0]=Fe,g[1]=ze,g[2]=Le,g[3]=_e,C.clearBufferuiv(C.COLOR,0,g)):(d[0]=Fe,d[1]=ze,d[2]=Le,d[3]=_e,C.clearBufferiv(C.COLOR,0,d))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT),H&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ae.dispose(),$.dispose(),Ce.dispose(),Te.dispose(),Dt.dispose(),Tt.dispose(),O.dispose(),fe.dispose(),Xe.dispose(),K.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",An),oe.removeEventListener("sessionend",Tc),xi.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=xt.autoReset,U=we.enabled,H=we.autoUpdate,G=we.needsUpdate,N=we.type;L(),xt.autoReset=M,we.enabled=U,we.autoUpdate=H,we.needsUpdate=G,we.type=N}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){const U=M.target;U.removeEventListener("dispose",Z),be(U)}function be(M){He(M),Te.remove(M)}function He(M){const U=Te.get(M).programs;U!==void 0&&(U.forEach(function(H){K.releaseProgram(H)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,G,N,se){U===null&&(U=ye);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Se=ff(M,U,H,G,N);Ee.setMaterial(G,pe);let _e=H.index,Fe=1;if(G.wireframe===!0){if(_e=v.getWireframeAttribute(H),_e===void 0)return;Fe=2}const ze=H.drawRange,Le=H.attributes.position;let Ze=ze.start*Fe,it=(ze.start+ze.count)*Fe;se!==null&&(Ze=Math.max(Ze,se.start*Fe),it=Math.min(it,(se.start+se.count)*Fe)),_e!==null?(Ze=Math.max(Ze,0),it=Math.min(it,_e.count)):Le!=null&&(Ze=Math.max(Ze,0),it=Math.min(it,Le.count));const Et=it-Ze;if(Et<0||Et===1/0)return;fe.setup(N,G,Se,H,_e);let pt,lt=me;if(_e!==null&&(pt=w.get(_e),lt=Be,lt.setIndex(pt)),N.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*bt()),lt.setMode(C.LINES)):lt.setMode(C.TRIANGLES);else if(N.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Ee.setLineWidth(Ue*bt()),N.isLineSegments?lt.setMode(C.LINES):N.isLineLoop?lt.setMode(C.LINE_LOOP):lt.setMode(C.LINE_STRIP)}else N.isPoints?lt.setMode(C.POINTS):N.isSprite&&lt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))lt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ue=N._multiDrawStarts,Mt=N._multiDrawCounts,et=N._multiDrawCount,Kt=_e?w.get(_e).bytesPerElement:1,Wi=Te.get(G).currentProgram.getUniforms();for(let Zt=0;Zt<et;Zt++)Wi.setValue(C,"_gl_DrawID",Zt),lt.render(Ue[Zt]/Kt,Mt[Zt])}else if(N.isInstancedMesh)lt.renderInstances(Ze,Et,N.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mt=Math.min(H.instanceCount,Ue);lt.renderInstances(Ze,Et,Mt)}else lt.render(Ze,Et)};function ut(M,U,H){M.transparent===!0&&M.side===cn&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,Tr(M,U,H),M.side=ei,M.needsUpdate=!0,Tr(M,U,H),M.side=cn):Tr(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),m=Ce.get(H),m.init(U),E.push(m),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const G=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const se=N.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const Se=se[pe];ut(Se,H,N),G.add(Se)}else ut(se,H,N),G.add(se)}),m=E.pop(),G},this.compileAsync=function(M,U,H=null){const G=this.compile(M,U,H);return new Promise(N=>{function se(){if(G.forEach(function(pe){Te.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){N(M);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let nt=null;function Nn(M){nt&&nt(M)}function An(){xi.stop()}function Tc(){xi.start()}const xi=new Lu;xi.setAnimationLoop(Nn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(M){nt=M,oe.setAnimationLoop(M),M===null?xi.stop():xi.start()},oe.addEventListener("sessionstart",An),oe.addEventListener("sessionend",Tc),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,I),m=Ce.get(M,E.length),m.init(U),E.push(m),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Je.setFromProjectionMatrix(Q,Ln,U.reversedDepth),j=this.localClippingEnabled,Ve=ae.init(this.clippingPlanes,j),_=$.get(M,T.length),_.init(),T.push(_),oe.enabled===!0&&oe.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&qo(se,U,-1/0,S.sortObjects)}qo(M,U,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(ne,le),$e=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,$e&&Ae.addToRenderList(_,M),this.info.render.frame++,Ve===!0&&ae.beginShadows();const H=m.state.shadowsArray;we.render(H,M,U),Ve===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(N.length>0)for(let pe=0,Se=se.length;pe<Se;pe++){const _e=se[pe];Ac(G,N,M,_e)}$e&&Ae.render(M);for(let pe=0,Se=se.length;pe<Se;pe++){const _e=se[pe];wc(_,M,_e,_e.viewport)}}else N.length>0&&Ac(G,N,M,U),$e&&Ae.render(M),wc(_,M,U);I!==null&&R===0&&(je.updateMultisampleRenderTarget(I),je.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(S,M,U),fe.resetDefaultState(),y=-1,x=null,E.pop(),E.length>0?(m=E[E.length-1],Ve===!0&&ae.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?_=T[T.length-1]:_=null};function qo(M,U,H,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Je.intersectsSprite(M)){G&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const pe=O.update(M),Se=M.material;Se.visible&&_.push(M,pe,Se,H,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Je.intersectsObject(M))){const pe=O.update(M),Se=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(Se)){const _e=pe.groups;for(let Fe=0,ze=_e.length;Fe<ze;Fe++){const Le=_e[Fe],Ze=Se[Le.materialIndex];Ze&&Ze.visible&&_.push(M,pe,Ze,H,Ie.z,Le)}}else Se.visible&&_.push(M,pe,Se,H,Ie.z,null)}}const se=M.children;for(let pe=0,Se=se.length;pe<Se;pe++)qo(se[pe],U,H,G)}function wc(M,U,H,G){const N=M.opaque,se=M.transmissive,pe=M.transparent;m.setupLightsView(H),Ve===!0&&ae.setGlobalState(S.clippingPlanes,H),G&&Ee.viewport(P.copy(G)),N.length>0&&Er(N,U,H),se.length>0&&Er(se,U,H),pe.length>0&&Er(pe,U,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ac(M,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new bn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Kn:Un,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const se=m.state.transmissionRenderTarget[G.id],pe=G.viewport||P;se.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const Se=S.getRenderTarget(),_e=S.getActiveCubeFace(),Fe=S.getActiveMipmapLevel();S.setRenderTarget(se),S.getClearColor(V),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),$e&&Ae.render(H);const ze=S.toneMapping;S.toneMapping=fi;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Ve===!0&&ae.setGlobalState(S.clippingPlanes,G),Er(M,H,G),je.updateMultisampleRenderTarget(se),je.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let it=0,Et=U.length;it<Et;it++){const pt=U[it],lt=pt.object,Ue=pt.geometry,Mt=pt.material,et=pt.group;if(Mt.side===cn&&lt.layers.test(G.layers)){const Kt=Mt.side;Mt.side=Yt,Mt.needsUpdate=!0,Rc(lt,H,G,Ue,Mt,et),Mt.side=Kt,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(je.updateMultisampleRenderTarget(se),je.updateRenderTargetMipmap(se))}S.setRenderTarget(Se,_e,Fe),S.setClearColor(V,Y),Le!==void 0&&(G.viewport=Le),S.toneMapping=ze}function Er(M,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,se=M.length;N<se;N++){const pe=M[N],Se=pe.object,_e=pe.geometry,Fe=pe.group;let ze=pe.material;ze.allowOverride===!0&&G!==null&&(ze=G),Se.layers.test(H.layers)&&Rc(Se,U,H,_e,ze,Fe)}}function Rc(M,U,H,G,N,se){M.onBeforeRender(S,U,H,G,N,se),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,U,H,G,M,se),N.transparent===!0&&N.side===cn&&N.forceSinglePass===!1?(N.side=Yt,N.needsUpdate=!0,S.renderBufferDirect(H,U,G,N,M,se),N.side=ei,N.needsUpdate=!0,S.renderBufferDirect(H,U,G,N,M,se),N.side=cn):S.renderBufferDirect(H,U,G,N,M,se),M.onAfterRender(S,U,H,G,N,se)}function Tr(M,U,H){U.isScene!==!0&&(U=ye);const G=Te.get(M),N=m.state.lights,se=m.state.shadowsArray,pe=N.state.version,Se=K.getParameters(M,N.state,se,U,H),_e=K.getProgramCacheKey(Se);let Fe=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?Tt:Dt).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",Z),Fe=new Map,G.programs=Fe);let ze=Fe.get(_e);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===pe)return Pc(M,Se),ze}else Se.uniforms=K.getUniforms(M),M.onBeforeCompile(Se,S),ze=K.acquireProgram(Se,_e),Fe.set(_e,ze),G.uniforms=Se.uniforms;const Le=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ae.uniform),Pc(M,Se),G.needsLights=pf(M),G.lightsStateVersion=pe,G.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Cc(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=po.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Pc(M,U){const H=Te.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ff(M,U,H,G,N){U.isScene!==!0&&(U=ye),je.resetTextureUnits();const se=U.fog,pe=G.isMeshStandardMaterial?U.environment:null,Se=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Es,_e=(G.isMeshStandardMaterial?Tt:Dt).get(G.envMap||pe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!H.morphAttributes.position,Ze=!!H.morphAttributes.normal,it=!!H.morphAttributes.color;let Et=fi;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Et=S.toneMapping);const pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=pt!==void 0?pt.length:0,Ue=Te.get(G),Mt=m.state.lights;if(Ve===!0&&(j===!0||M!==x)){const Wt=M===x&&G.id===y;ae.setState(G,M,Wt)}let et=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Mt.state.version||Ue.outputColorSpace!==Se||N.isBatchedMesh&&Ue.batching===!1||!N.isBatchedMesh&&Ue.batching===!0||N.isBatchedMesh&&Ue.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ue.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ue.instancing===!1||!N.isInstancedMesh&&Ue.instancing===!0||N.isSkinnedMesh&&Ue.skinning===!1||!N.isSkinnedMesh&&Ue.skinning===!0||N.isInstancedMesh&&Ue.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ue.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ue.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ue.instancingMorph===!1&&N.morphTexture!==null||Ue.envMap!==_e||G.fog===!0&&Ue.fog!==se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ae.numPlanes||Ue.numIntersection!==ae.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==ze||Ue.morphTargets!==Le||Ue.morphNormals!==Ze||Ue.morphColors!==it||Ue.toneMapping!==Et||Ue.morphTargetsCount!==lt)&&(et=!0):(et=!0,Ue.__version=G.version);let Kt=Ue.currentProgram;et===!0&&(Kt=Tr(G,U,N));let Wi=!1,Zt=!1,Bs=!1;const yt=Kt.getUniforms(),on=Ue.uniforms;if(Ee.useProgram(Kt.program)&&(Wi=!0,Zt=!0,Bs=!0),G.id!==y&&(y=G.id,Zt=!0),Wi||x!==M){Ee.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",M.projectionMatrix),yt.setValue(C,"viewMatrix",M.matrixWorldInverse);const $t=yt.map.cameraPosition;$t!==void 0&&$t.setValue(C,xe.setFromMatrixPosition(M.matrixWorld)),ke.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Zt=!0,Bs=!0)}if(N.isSkinnedMesh){yt.setOptional(C,N,"bindMatrix"),yt.setOptional(C,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),yt.setValue(C,"boneTexture",Wt.boneTexture,je))}N.isBatchedMesh&&(yt.setOptional(C,N,"batchingTexture"),yt.setValue(C,"batchingTexture",N._matricesTexture,je),yt.setOptional(C,N,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",N._indirectTexture,je),yt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",N._colorsTexture,je));const an=H.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&re.update(N,H,Kt),(Zt||Ue.receiveShadow!==N.receiveShadow)&&(Ue.receiveShadow=N.receiveShadow,yt.setValue(C,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(on.envMap.value=_e,on.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(on.envMapIntensity.value=U.environmentIntensity),Zt&&(yt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&df(on,Bs),se&&G.fog===!0&&ee.refreshFogUniforms(on,se),ee.refreshMaterialUniforms(on,G,k,J,m.state.transmissionRenderTarget[M.id]),po.upload(C,Cc(Ue),on,je)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(po.upload(C,Cc(Ue),on,je),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(C,"center",N.center),yt.setValue(C,"modelViewMatrix",N.modelViewMatrix),yt.setValue(C,"normalMatrix",N.normalMatrix),yt.setValue(C,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let $t=0,Yo=Wt.length;$t<Yo;$t++){const Mi=Wt[$t];Xe.update(Mi,Kt),Xe.bind(Mi,Kt)}}return Kt}function df(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function pf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,H){const G=Te.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Te.get(M.texture).__webglTexture=U,Te.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const H=Te.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const mf=C.createFramebuffer();this.setRenderTarget=function(M,U=0,H=0){I=M,b=U,R=H;let G=!0,N=null,se=!1,pe=!1;if(M){const _e=Te.get(M);if(_e.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)je.setupRenderTarget(M);else if(_e.__hasExternalTextures)je.rebindTextures(M,Te.get(M.texture).__webglTexture,Te.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(_e.__boundDepthTexture!==Le){if(Le!==null&&Te.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const ze=Te.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?N=ze[U][H]:N=ze[U],se=!0):M.samples>0&&je.useMultisampledRTT(M)===!1?N=Te.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[H]:N=ze,P.copy(M.viewport),F.copy(M.scissor),B=M.scissorTest}else P.copy(ue).multiplyScalar(k).floor(),F.copy(Ne).multiplyScalar(k).floor(),B=We;if(H!==0&&(N=mf),Ee.bindFramebuffer(C.FRAMEBUFFER,N)&&G&&Ee.drawBuffers(M,N),Ee.viewport(P),Ee.scissor(F),Ee.setScissorTest(B),se){const _e=Te.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,H)}else if(pe){const _e=U;for(let Fe=0;Fe<M.textures.length;Fe++){const ze=Te.get(M.textures[Fe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,H,_e)}}else if(M!==null&&H!==0){const _e=Te.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,H)}y=-1},this.readRenderTargetPixels=function(M,U,H,G,N,se,pe,Se=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Ee.bindFramebuffer(C.FRAMEBUFFER,_e);try{const Fe=M.textures[Se],ze=Fe.format,Le=Fe.type;if(!ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&H>=0&&H<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),C.readPixels(U,H,G,N,Re.convert(ze),Re.convert(Le),se))}finally{const Fe=I!==null?Te.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,G,N,se,pe,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(U>=0&&U<=M.width-G&&H>=0&&H<=M.height-N){Ee.bindFramebuffer(C.FRAMEBUFFER,_e);const Fe=M.textures[Se],ze=Fe.format,Le=Fe.type;if(!ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,se.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Se),C.readPixels(U,H,G,N,Re.convert(ze),Re.convert(Le),0);const it=I!==null?Te.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,it);const Et=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await od(C,Et,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,se),C.deleteBuffer(Ze),C.deleteSync(Et),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,H=0){const G=Math.pow(2,-H),N=Math.floor(M.image.width*G),se=Math.floor(M.image.height*G),pe=U!==null?U.x:0,Se=U!==null?U.y:0;je.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,pe,Se,N,se),Ee.unbindTexture()};const gf=C.createFramebuffer(),_f=C.createFramebuffer();this.copyTextureToTexture=function(M,U,H=null,G=null,N=0,se=null){se===null&&(N!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=N,N=0):se=0);let pe,Se,_e,Fe,ze,Le,Ze,it,Et;const pt=M.isCompressedTexture?M.mipmaps[se]:M.image;if(H!==null)pe=H.max.x-H.min.x,Se=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,Fe=H.min.x,ze=H.min.y,Le=H.isBox3?H.min.z:0;else{const an=Math.pow(2,-N);pe=Math.floor(pt.width*an),Se=Math.floor(pt.height*an),M.isDataArrayTexture?_e=pt.depth:M.isData3DTexture?_e=Math.floor(pt.depth*an):_e=1,Fe=0,ze=0,Le=0}G!==null?(Ze=G.x,it=G.y,Et=G.z):(Ze=0,it=0,Et=0);const lt=Re.convert(U.format),Ue=Re.convert(U.type);let Mt;U.isData3DTexture?(je.setTexture3D(U,0),Mt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(je.setTexture2DArray(U,0),Mt=C.TEXTURE_2D_ARRAY):(je.setTexture2D(U,0),Mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const et=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wi=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),Bs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le);const yt=M.isDataArrayTexture||M.isData3DTexture,on=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const an=Te.get(M),Wt=Te.get(U),$t=Te.get(an.__renderTarget),Yo=Te.get(Wt.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let Mi=0;Mi<_e;Mi++)yt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(M).__webglTexture,N,Le+Mi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,se,Et+Mi)),C.blitFramebuffer(Fe,ze,pe,Se,Ze,it,pe,Se,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||Te.has(M)){const an=Te.get(M),Wt=Te.get(U);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,gf),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,_f);for(let $t=0;$t<_e;$t++)yt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,an.__webglTexture,N,Le+$t):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,an.__webglTexture,N),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,se,Et+$t):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,se),N!==0?C.blitFramebuffer(Fe,ze,pe,Se,Ze,it,pe,Se,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(Mt,se,Ze,it,Et+$t,Fe,ze,pe,Se):C.copyTexSubImage2D(Mt,se,Ze,it,Fe,ze,pe,Se);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Mt,se,Ze,it,Et,pe,Se,_e,lt,Ue,pt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,se,Ze,it,Et,pe,Se,_e,lt,pt.data):C.texSubImage3D(Mt,se,Ze,it,Et,pe,Se,_e,lt,Ue,pt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,se,Ze,it,pe,Se,lt,Ue,pt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,se,Ze,it,pt.width,pt.height,lt,pt.data):C.texSubImage2D(C.TEXTURE_2D,se,Ze,it,pe,Se,lt,Ue,pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,et),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bs),se===0&&U.generateMipmaps&&C.generateMipmap(Mt),Ee.unbindTexture()},this.initRenderTarget=function(M){Te.get(M).__webglFramebuffer===void 0&&je.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?je.setTextureCube(M,0):M.isData3DTexture?je.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?je.setTexture2DArray(M,0):je.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){b=0,R=0,I=null,Ee.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const ve={air:{id:0,name:"Air",solid:!1},grass:{id:1,name:"Grass",solid:!0,hardness:.6,color:6203463,tex:{top:0,side:3,bottom:2},biomeTint:!0},dirt:{id:2,name:"Dirt",solid:!0,hardness:.5,color:8081971,tex:{all:2}},stone:{id:3,name:"Stone",solid:!0,hardness:1.5,color:9276813,tex:{all:1},drop:"cobblestone"},wood:{id:4,name:"Wood",solid:!0,hardness:1,color:9069115,tex:{side:4,top:5,bottom:5}},leaves:{id:5,name:"Leaves",solid:!0,hardness:.2,color:4160053,tex:{all:6},biomeTint:!0,dropChance:{apple:.06}},sand:{id:6,name:"Sand",solid:!0,hardness:.5,color:14274447,tex:{all:7}},water:{id:7,name:"Water",solid:!1,liquid:!0,color:3827400,tex:{all:8}},coal_ore:{id:8,name:"Coal Ore",solid:!0,hardness:1.5,color:5197647,tex:{all:9},drop:"coal"},iron_ore:{id:9,name:"Iron Ore",solid:!0,hardness:2,color:11894625,tex:{all:10}},cobblestone:{id:10,name:"Cobblestone",solid:!0,hardness:2,color:8026746,tex:{all:11}},planks:{id:11,name:"Planks",solid:!0,hardness:1,color:12358744,tex:{all:12}},glass:{id:12,name:"Glass",solid:!0,hardness:.3,color:13166847,tex:{all:13},transparent:!0},bedrock:{id:13,name:"Bedrock",solid:!0,hardness:-1,color:3355443,tex:{all:14}},gravel:{id:14,name:"Gravel",solid:!0,hardness:.6,color:8024690,tex:{all:15}},tallgrass:{id:15,name:"Tall Grass",solid:!1,hardness:0,color:6203463,tex:{all:32},decoration:!0,biomeTint:!0},flower_red:{id:16,name:"Red Flower",solid:!1,hardness:0,color:16724787,tex:{all:33},decoration:!0},flower_yellow:{id:17,name:"Yellow Flower",solid:!1,hardness:0,color:16777011,tex:{all:34},decoration:!0},snow:{id:18,name:"Snow",solid:!0,hardness:.2,color:15790320,tex:{all:19}},torch:{id:19,name:"Torch",solid:!1,hardness:0,color:16755251,tex:{all:28},decoration:!0,lightLevel:14},brick:{id:20,name:"Brick",solid:!0,hardness:1.5,color:10177084,tex:{all:16}},obsidian:{id:21,name:"Obsidian",solid:!0,hardness:5,color:1706542,tex:{all:17}},bookshelf:{id:22,name:"Bookshelf",solid:!0,hardness:1,color:9069115,tex:{side:18,top:12,bottom:12}},wool:{id:23,name:"Wool",solid:!0,hardness:.8,color:15790320,tex:{all:20}},crafting_table:{id:24,name:"Crafting Table",solid:!0,hardness:1,color:9069115,tex:{side:22,top:21,bottom:12}},ladder:{id:25,name:"Ladder",solid:!1,hardness:.4,color:9069115,tex:{all:27},decoration:!0},clay:{id:26,name:"Clay",solid:!0,hardness:.6,color:10396850,tex:{all:23}},gold_ore:{id:27,name:"Gold Ore",solid:!0,hardness:3,color:16576078,tex:{all:24}},diamond_ore:{id:28,name:"Diamond Ore",solid:!0,hardness:4,color:4516064,tex:{all:25},drop:"diamond"},mossy_cobblestone:{id:29,name:"Mossy Cobblestone",solid:!0,hardness:2,color:6982250,tex:{all:26}},furnace:{id:30,name:"Furnace",solid:!0,hardness:3.5,color:9276813,tex:{side:41,top:39,bottom:39,front:40}},bed:{id:31,name:"Bed",solid:!1,hardness:.2,color:16724787,tex:{all:46},decoration:!0},sandstone:{id:32,name:"Sandstone",solid:!0,hardness:1,color:14274447,tex:{all:29}},gold_block:{id:33,name:"Gold Block",solid:!0,hardness:3,color:16576078,tex:{all:37}},diamond_block:{id:34,name:"Diamond Block",solid:!0,hardness:4,color:4516064,tex:{all:38}},dead_bush:{id:35,name:"Dead Bush",solid:!1,hardness:0,color:9072187,tex:{all:35},decoration:!0},vines:{id:36,name:"Vines",solid:!1,hardness:0,color:4160053,tex:{all:36},decoration:!0,biomeTint:!0},stone_slab:{id:37,name:"Stone Slab",solid:!0,hardness:1.5,color:9276813,tex:{all:1},halfBlock:!0},wooden_slab:{id:38,name:"Wooden Slab",solid:!0,hardness:1,color:12358744,tex:{all:12},halfBlock:!0},fence:{id:39,name:"Fence",solid:!0,hardness:1,color:12358744,tex:{all:47},fenceBlock:!0},wooden_door:{id:40,name:"Wooden Door",solid:!0,hardness:1,color:9069115,tex:{all:4},doorBlock:!0},iron_door:{id:41,name:"Iron Door",solid:!0,hardness:3,color:12632256,tex:{all:31},doorBlock:!0},stone_brick:{id:42,name:"Stone Brick",solid:!0,hardness:1.5,color:8026746,tex:{all:30}},iron_block:{id:43,name:"Iron Block",solid:!0,hardness:3,color:12632256,tex:{all:31}},oak_stairs:{id:44,name:"Oak Stairs",solid:!0,hardness:1,color:12358744,tex:{all:12},stairBlock:!0},stone_stairs:{id:45,name:"Stone Stairs",solid:!0,hardness:1.5,color:9276813,tex:{all:11},stairBlock:!0},chest:{id:46,name:"Chest",solid:!0,hardness:1.5,color:9069115,tex:{side:44,top:45,bottom:45,front:44}},tnt:{id:47,name:"TNT",solid:!0,hardness:0,color:16724787,tex:{side:42,top:43,bottom:43}},pumpkin:{id:48,name:"Pumpkin",solid:!0,hardness:1,color:14716960,tex:{side:48,top:49,bottom:49,front:50}},hay:{id:49,name:"Hay Bale",solid:!0,hardness:.5,color:13017152,tex:{side:51,top:52,bottom:52}},flower_blue:{id:50,name:"Blue Flower",solid:!1,hardness:0,color:4227327,tex:{all:53},decoration:!0},flower_magenta:{id:51,name:"Pink Flower",solid:!1,hardness:0,color:12599488,tex:{all:54},decoration:!0},mushroom_red:{id:52,name:"Red Mushroom",solid:!1,hardness:0,color:13119536,tex:{all:55},decoration:!0},mushroom_brown:{id:53,name:"Brown Mushroom",solid:!1,hardness:0,color:10119738,tex:{all:56},decoration:!0},ice:{id:54,name:"Ice",solid:!0,hardness:.5,color:10930406,tex:{all:57},transparent:!0},packed_ice:{id:55,name:"Packed Ice",solid:!0,hardness:.6,color:9352923,tex:{all:58}},jungle_log:{id:56,name:"Jungle Wood",solid:!0,hardness:1,color:6965283,tex:{side:59,top:5,bottom:5}},jungle_leaves:{id:57,name:"Jungle Leaves",solid:!0,hardness:.2,color:3833893,tex:{all:60},biomeTint:!0,dropChance:{apple:.06}},spruce_log:{id:58,name:"Spruce Wood",solid:!0,hardness:1,color:4008472,tex:{side:61,top:5,bottom:5}},spruce_leaves:{id:59,name:"Spruce Leaves",solid:!0,hardness:.2,color:2972224,tex:{all:62},biomeTint:!0,dropChance:{apple:.04}},lava:{id:60,name:"Lava",solid:!1,liquid:!0,color:16729088,tex:{all:63},lightLevel:15,damage:4}},Nl=Object.fromEntries(Object.values(ve).map(i=>[i.id,i])),Bu=Object.fromEntries(Object.entries(ve).map(([i,e])=>[e.id,i])),D_=["grass","dirt","stone","wood","cobblestone","planks","glass","sand","water","torch"],Jr=[{id:"sheep",hp:8,speed:1.2,color:16777215,passive:!0,drops:[{item:"wool",min:1,max:3}]},{id:"pig",hp:10,speed:1.3,color:15769760,passive:!0,drops:[{item:"raw_porkchop",min:1,max:3}]},{id:"chicken",hp:4,speed:1,color:16777215,passive:!0,drops:[{item:"raw_chicken",min:1,max:2},{item:"feather",min:0,max:2}]},{id:"zombie",hp:20,speed:1.5,color:6065482,passive:!1,damage:3,drops:[{item:"rotten_flesh",min:0,max:2}],xp:5},{id:"skeleton",hp:20,speed:1.4,color:13684936,passive:!1,damage:4,drops:[{item:"bone",min:0,max:2},{item:"arrow",min:0,max:2}],xp:5,ranged:!0},{id:"creeper",hp:20,speed:1.2,color:4243520,passive:!1,damage:0,drops:[{item:"gunpowder",min:0,max:2}],xp:5,explosive:!0}];function pc(i){const e=[];for(const t of i.drops||[]){const n=t.min+Math.floor(Math.random()*(t.max-t.min+1));n>0&&e.push({item:t.item,count:n})}return e}const Vt={wooden_pickaxe:{name:"Wooden Pickaxe",maxDurability:59,speed:2,type:"pickaxe",tier:0,color:"#a07850",emoji:"⛏"},stone_pickaxe:{name:"Stone Pickaxe",maxDurability:131,speed:4,type:"pickaxe",tier:1,color:"#909090",emoji:"⛏"},iron_pickaxe:{name:"Iron Pickaxe",maxDurability:250,speed:6,type:"pickaxe",tier:2,color:"#c8c8c8",emoji:"⛏"},diamond_pickaxe:{name:"Diamond Pickaxe",maxDurability:1561,speed:8,type:"pickaxe",tier:3,color:"#44e8e0",emoji:"⛏"},wooden_axe:{name:"Wooden Axe",maxDurability:59,speed:2,type:"axe",tier:0,color:"#a07850",emoji:"🪓"},stone_axe:{name:"Stone Axe",maxDurability:131,speed:4,type:"axe",tier:1,color:"#909090",emoji:"🪓"},iron_axe:{name:"Iron Axe",maxDurability:250,speed:6,type:"axe",tier:2,color:"#c8c8c8",emoji:"🪓"},wooden_shovel:{name:"Wooden Shovel",maxDurability:59,speed:2,type:"shovel",tier:0,color:"#a07850",emoji:"🪛"},stone_shovel:{name:"Stone Shovel",maxDurability:131,speed:4,type:"shovel",tier:1,color:"#909090",emoji:"🪛"},wooden_sword:{name:"Wooden Sword",maxDurability:59,damage:5,type:"sword",tier:0,color:"#a07850",emoji:"⚔"},stone_sword:{name:"Stone Sword",maxDurability:131,damage:6,type:"sword",tier:1,color:"#909090",emoji:"⚔"},iron_sword:{name:"Iron Sword",maxDurability:250,damage:7,type:"sword",tier:2,color:"#c8c8c8",emoji:"⚔"},diamond_sword:{name:"Diamond Sword",maxDurability:1561,damage:9,type:"sword",tier:3,color:"#44e8e0",emoji:"⚔"},bow:{name:"Bow",maxDurability:384,damage:1,type:"bow",tier:0,color:"#8b6914",emoji:"🏹"}},ui=new Set(Object.keys(Vt)),L_={pickaxe:new Set(["stone","cobblestone","coal_ore","iron_ore","gold_ore","diamond_ore","brick","obsidian","mossy_cobblestone","gravel"]),axe:new Set(["wood","planks","bookshelf","crafting_table","leaves"]),shovel:new Set(["dirt","grass","sand","gravel","clay","snow"])};function I_(i,e){const t=Vt[i];if(!t||!t.speed)return 1;const n=L_[t.type];return n&&n.has(e)?t.speed:1}function U_(i){return Vt[i]?.damage??3}function N_(i){const e=Math.max(0,Math.min(1,i));return Math.floor(2+e*7)}const Ui={apple:{name:"Apple",hunger:4,saturation:2.4,color:"#e83333",emoji:"🍎"},bread:{name:"Bread",hunger:5,saturation:6,color:"#c8a050",emoji:"🍞"},raw_porkchop:{name:"Raw Porkchop",hunger:3,saturation:1.8,color:"#f0a0a0",emoji:"🥩"},cooked_porkchop:{name:"Cooked Porkchop",hunger:8,saturation:12.8,color:"#8b4513",emoji:"🍖"},raw_chicken:{name:"Raw Chicken",hunger:2,saturation:1.2,color:"#ffe0c0",emoji:"🍗"},cooked_chicken:{name:"Cooked Chicken",hunger:6,saturation:7.2,color:"#d4a856",emoji:"🍗"},cookie:{name:"Cookie",hunger:2,saturation:.4,color:"#c8a050",emoji:"🍪"},rotten_flesh:{name:"Rotten Flesh",hunger:4,saturation:.8,color:"#7a5f3a",poison:!0,emoji:"🦴"}},Fl=new Set(Object.keys(Ui)),Qr={iron_ingot:{name:"Iron Ingot",color:"#c8c8c8",emoji:"🔩"},gold_ingot:{name:"Gold Ingot",color:"#ffd700",emoji:"🔩"},coal:{name:"Coal",color:"#333333",emoji:"🪨"},sticks:{name:"Sticks",color:"#a07850",emoji:"🪵"},bone:{name:"Bone",color:"#d8d8c0",emoji:"🦴"},feather:{name:"Feather",color:"#f0f0f0",emoji:"🪶"},gunpowder:{name:"Gunpowder",color:"#555555",emoji:"💣"},arrow:{name:"Arrow",color:"#8b6914",emoji:"🏹"},diamond:{name:"Diamond",color:"#44e8e0",emoji:"💎"},string:{name:"String",color:"#e0e0e0",emoji:"🧵"},leather:{name:"Leather",color:"#8b5a2b",emoji:"🟫"},flint:{name:"Flint",color:"#444444",emoji:"🪨"}},Nt={leather_helmet:{name:"Leather Cap",slot:"helmet",material:"leather",damageReduction:1,maxDurability:55,color:"#8b5a2b",emoji:"🪖"},leather_chestplate:{name:"Leather Tunic",slot:"chestplate",material:"leather",damageReduction:3,maxDurability:80,color:"#8b5a2b",emoji:"👕"},leather_leggings:{name:"Leather Pants",slot:"leggings",material:"leather",damageReduction:2,maxDurability:75,color:"#8b5a2b",emoji:"👖"},leather_boots:{name:"Leather Boots",slot:"boots",material:"leather",damageReduction:1,maxDurability:65,color:"#8b5a2b",emoji:"👢"},iron_helmet:{name:"Iron Helmet",slot:"helmet",material:"iron",damageReduction:2,maxDurability:165,color:"#c8c8c8",emoji:"🪖"},iron_chestplate:{name:"Iron Chestplate",slot:"chestplate",material:"iron",damageReduction:6,maxDurability:240,color:"#c8c8c8",emoji:"👕"},iron_leggings:{name:"Iron Leggings",slot:"leggings",material:"iron",damageReduction:5,maxDurability:225,color:"#c8c8c8",emoji:"👖"},iron_boots:{name:"Iron Boots",slot:"boots",material:"iron",damageReduction:2,maxDurability:195,color:"#c8c8c8",emoji:"👢"},diamond_helmet:{name:"Diamond Helmet",slot:"helmet",material:"diamond",damageReduction:3,maxDurability:363,color:"#44e8e0",emoji:"🪖"},diamond_chestplate:{name:"Diamond Chestplate",slot:"chestplate",material:"diamond",damageReduction:8,maxDurability:528,color:"#44e8e0",emoji:"👕"},diamond_leggings:{name:"Diamond Leggings",slot:"leggings",material:"diamond",damageReduction:6,maxDurability:495,color:"#44e8e0",emoji:"👖"},diamond_boots:{name:"Diamond Boots",slot:"boots",material:"diamond",damageReduction:3,maxDurability:429,color:"#44e8e0",emoji:"👢"}},Eo=new Set(Object.keys(Nt));function F_(){return{helmet:null,chestplate:null,leggings:null,boots:null}}class B_{constructor(){this.map=new Map}get(e){return Nt[e]?this.map.get(e)??Nt[e].maxDurability:0}damage(e){if(!Nt[e])return!1;const t=this.get(e)-1;return t<=0?(this.map.delete(e),!0):(this.map.set(e,t),!1)}set(e,t){this.map.set(e,t)}}class O_{constructor(e,t){this.camera=e,this.domElement=t,this.position=new D(0,40,0),this.velocity=new D,this.rotation=new De,this.speed=7,this.sprintSpeed=11,this.jumpForce=8,this.gravity=22,this.eyeHeight=1.62,this.crouchEyeHeight=1.15,this.bodyHeight=1.8,this.crouchBodyHeight=1.4,this.bodyRadius=.31,this.grounded=!1,this.keys=new Set,this.sprinting=!1,this.flying=!1,this.crouching=!1,this.coyoteTime=0,this.fallStartY=null,this.mouseSensitivity=1,window.addEventListener("keydown",n=>this.keys.add(n.code)),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("mousemove",n=>{if(document.pointerLockElement!==this.domElement)return;const s=.002*this.mouseSensitivity;this.rotation.x-=n.movementX*s,this.rotation.y=Math.max(-1.5,Math.min(1.5,this.rotation.y-n.movementY*s))})}isInWater(e){const t=Math.floor(this.position.x),n=Math.floor(this.position.y),s=Math.floor(this.position.z);return e.getBlock(t,n,s).liquid}collides(e,t){const n=Math.floor(t.x-this.bodyRadius),s=Math.floor(t.x+this.bodyRadius),r=Math.floor(t.y-this.eyeHeight),o=Math.floor(t.y-this.eyeHeight+this.bodyHeight-.001),a=Math.floor(t.z-this.bodyRadius),l=Math.floor(t.z+this.bodyRadius);for(let c=r;c<=o;c++)for(let h=a;h<=l;h++)for(let u=n;u<=s;u++)if(e.getBlock(u,c,h).solid)return!0;return!1}moveAxis(e,t,n){if(!n)return;const s=Math.ceil(Math.abs(n)/.05),r=n/s;for(let o=0;o<s;o++){const a=this.position.clone();if(a[t]+=r,this.collides(e,a)){t==="y"&&(r<0&&(this.grounded=!0),this.velocity.y=0);return}this.position.copy(a)}}resolvePenetration(e){if(!this.collides(e,this.position))return!1;const t=this.position.clone(),n=[[0,0],[.2,0],[-.2,0],[0,.2],[0,-.2],[.2,.2],[-.2,.2],[.2,-.2],[-.2,-.2],[.4,0],[-.4,0],[0,.4],[0,-.4]];for(let s=0;s<=16;s++){const r=s*.25;for(const[o,a]of n){const l=new D(t.x+o,t.y+r,t.z+a);if(!this.collides(e,l))return this.position.copy(l),r>0&&this.velocity.y<0&&(this.velocity.y=0),!0}}return!1}update(e,t){this.resolvePenetration(t);const n=this.rotation.x,s=new D(-Math.sin(n),0,-Math.cos(n)).normalize(),r=new D().crossVectors(s,new D(0,1,0)).normalize(),o=new D;if(this.keys.has("KeyW")&&o.add(s),this.keys.has("KeyS")&&o.sub(s),this.keys.has("KeyA")&&o.sub(r),this.keys.has("KeyD")&&o.add(r),this.flying){const f=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?this.sprintSpeed*1.5:this.speed*1.5;this.keys.has("Space")&&(o.y+=1),(this.keys.has("ControlLeft")||this.keys.has("ControlRight"))&&(o.y-=1),o.lengthSq()>0&&o.normalize().multiplyScalar(f*e),this.position.add(o),this.camera.position.copy(this.position),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotation.x,this.camera.rotation.x=this.rotation.y;return}this.crouching=!this.flying&&(this.keys.has("ControlLeft")||this.keys.has("ControlRight")),this.sprinting=!this.crouching&&(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"));const a=this.isInWater(t),l=a?.4:1,c=this.crouching?this.speed*.35:this.sprinting?this.sprintSpeed:this.speed;o.lengthSq()>0&&o.normalize().multiplyScalar(c*l*e),a?(this.velocity.y-=this.gravity*.3*e,this.keys.has("Space")&&(this.velocity.y+=10*e),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"))&&(this.velocity.y-=8*e),this.velocity.y*=.85):(this.velocity.y-=this.gravity*e,this.keys.has("Space")&&(this.grounded||this.coyoteTime>0)&&!this.crouching&&(this.velocity.y=this.jumpForce,this.grounded=!1,this.coyoteTime=0));const h=this.grounded;if(this.grounded=!1,this.moveAxis(t,"x",o.x),this.moveAxis(t,"z",o.z),this.moveAxis(t,"y",this.velocity.y*e),this.resolvePenetration(t),this.grounded){if(this.coyoteTime=.12,this.fallStartY!==null){const f=this.fallStartY-this.position.y;f>4&&(this.fallDamage=f),this.fallStartY=null}}else h?(this.coyoteTime=.12,this.fallStartY=this.position.y):this.coyoteTime=Math.max(0,this.coyoteTime-e);const u=this.crouching?this.crouchEyeHeight:this.eyeHeight;this.camera.position.copy(this.position),this.camera.position.y-=this.eyeHeight-u,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.rotation.x,this.camera.rotation.x=this.rotation.y}}const mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const k_=new fc(-1,1,1,-1,0,1);class z_ extends Bt{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}}const H_=new z_;class Ou{constructor(e){this._mesh=new ct(H_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,k_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class V_ extends vr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=So.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ou(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ih extends vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class G_ extends vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class W_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V_(mo),this.copyPass.material.blending=$n,this.clock=new qd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ih!==void 0&&(o instanceof Ih?n=!0:o instanceof G_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class X_ extends vr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const q_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ws extends vr{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new bn(r,o,{type:Kn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new bn(r,o,{type:Kn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=q_;this.highPassUniforms=So.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new De(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=So.clone(mo.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:Ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new In,this._fsQuad=new Ou(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ws.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ws.BlurDirectionX=new De(1,0);ws.BlurDirectionY=new De(0,1);const Bl=new ge(8306926),Uh=new ge(657952),Nh=new ge(16750950);function Y_(i){const e=new Pd;e.background=new ge(Bl);const t=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new P_({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(n.domElement),n.shadowMap.enabled=!0,n.shadowMap.type=ou;const s=new Wd(16777215,.55);e.add(s);const r=new Gd(16773841,.85);r.position.set(20,45,20),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,r.shadow.camera.left=-60,r.shadow.camera.right=60,r.shadow.camera.top=60,r.shadow.camera.bottom=-60,r.shadow.camera.near=.5,r.shadow.camera.far=200,r.shadow.bias=-5e-4,r.shadow.normalBias=.02,e.add(r);const o=new W_(n),a=new X_(e,t);o.addPass(a);const l=new ws(new De(window.innerWidth,window.innerHeight),.5,.4,.6);return o.addPass(l),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),o.setSize(window.innerWidth,window.innerHeight)}),{scene:e,camera:t,renderer:n,sun:r,ambient:s,composer:o}}function $_(i){const e=Math.sin(i);return e>.1?Bl.clone():e<-.3?Uh.clone():e>0?Bl.clone().lerp(Nh,(.1-e)/.1):Nh.clone().lerp(Uh,-e/.3)}class j_{constructor(){this.ws=null,this.handlers=new Map}connect(e){this.ws=new WebSocket(e),this.ws.onmessage=t=>{let n;try{n=JSON.parse(t.data)}catch{return}n?.type&&(this.handlers.get(n.type)||[]).forEach(s=>s(n))}}on(e,t){this.handlers.has(e)||this.handlers.set(e,[]),this.handlers.get(e).push(t)}send(e,t){!this.ws||this.ws.readyState!==WebSocket.OPEN||this.ws.send(JSON.stringify({type:e,...t}))}}const K_={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Z_=typeof import.meta<"u"&&K_&&"./"||"/",ku=`${Z_}textures/effects/`,zu=new Pu;function mi(i,{wrap:e=Dn,srgb:t=!0}={}){const n=zu.load(`${ku}${i}`,s=>{s.needsUpdate=!0});return n.magFilter=Rt,n.minFilter=Rt,n.generateMipmaps=!1,n.wrapS=e,n.wrapT=e,t&&(n.colorSpace=Ft),n}const J_=5;function Q_(){return mi("crack_anylength.png")}function ev(){return mi("default_cloud.png")}function tv(){return mi("smoke_puff.png")}function nv(){return mi("tnt_smoke.png")}function iv(){return mi("tnt_blast.png")}function sv(){return[mi("snowdrift_snowflake1.png"),mi("snowdrift_snowflake2.png")]}function rv(){return mi("snowdrift_raindrop.png")}function ov(){const i=zu.load(`${ku}sunrisebg.png`);return i.colorSpace=Ft,i.minFilter=fn,i.magFilter=fn,i.wrapS=Dn,i.wrapT=Dn,i.generateMipmaps=!1,i}const To=J_;function av(){const i=[],e=1/To;for(let t=0;t<To;t++){const n=Q_();n.repeat.set(1,e),n.offset.set(0,1-(t+1)*e),n.needsUpdate=!0,i.push(n)}return i}class lv{constructor(e){this.scene=e,this.textures=av(),this.material=new In({transparent:!0,opacity:.95,alphaTest:.05,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4,side:ei}),this.mesh=new ct(new rn(1.002,1.002,1.002),this.material),this.mesh.visible=!1,this.scene.add(this.mesh),this.stage=-1}start(e,t,n){this.mesh.position.set(e+.5,t+.5,n+.5),this.mesh.visible=!0,this.stage=-1,this.material.map=null}stop(){this.mesh.visible=!1,this.stage=-1,this.material.map=null}setProgress(e){const t=Math.min(To-1,Math.max(0,Math.floor(e*To)));t!==this.stage&&(this.stage=t,this.material.map=this.textures[t],this.material.needsUpdate=!0)}}const X=new(window.AudioContext||window.webkitAudioContext);function As(i=.1){const e=X.sampleRate,t=i*e,n=X.createBuffer(1,t,e),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}function gt(i,e,t){const n=X.createBufferSource();n.buffer=As(i);const s=X.createBiquadFilter();s.type="lowpass",s.frequency.value=t;const r=X.createGain();r.gain.value=e,n.connect(s),s.connect(r),r.connect(X.destination),n.start(),n.stop(X.currentTime+i)}function Yn(i,e,t,n="square"){const s=X.createOscillator();s.type=n,s.frequency.value=i;const r=X.createGain();r.gain.setValueAtTime(t,X.currentTime),r.gain.exponentialRampToValueAtTime(.001,X.currentTime+e),s.connect(r),r.connect(X.destination),s.start(),s.stop(X.currentTime+e)}const li={stone:()=>gt(.08,.35,1800),dirt:()=>gt(.1,.25,600),grass:()=>gt(.1,.25,600),wood:()=>Yn(180,.06,.2,"sawtooth"),sand:()=>gt(.12,.2,400),leaves:()=>gt(.05,.15,1200),water:()=>gt(.08,.1,800),default:()=>gt(.08,.25,1200)};function cv(i){const e=i.toLowerCase().replace(/\s/g,"_");return e.includes("stone")||e.includes("ore")?li.stone:e.includes("dirt")?li.dirt:e.includes("grass")?li.grass:e.includes("wood")||e.includes("plank")||e.includes("tree")?li.wood:e.includes("sand")?li.sand:e.includes("leaves")?li.leaves:e.includes("water")?li.water:li.default}function hv(i){X.state==="suspended"&&X.resume(),cv(i)()}function uv(i){X.state==="suspended"&&X.resume();const e=i.toLowerCase().replace(/\s/g,"_");e.includes("stone")||e.includes("ore")?gt(.05,.2,1800):e.includes("dirt")||e.includes("grass")?gt(.06,.15,600):e.includes("wood")||e.includes("plank")||e.includes("tree")?Yn(220,.04,.15,"sawtooth"):e.includes("sand")?gt(.07,.12,400):e.includes("leaves")?gt(.03,.1,1200):gt(.05,.15,1200)}function fv(i){X.state==="suspended"&&X.resume();const e=i.toLowerCase().replace(/\s/g,"_");e.includes("stone")||e.includes("ore")?gt(.03,.12,1800):e.includes("dirt")||e.includes("grass")?gt(.03,.08,600):e.includes("wood")||e.includes("plank")?Yn(200,.02,.08,"sawtooth"):e.includes("sand")?gt(.04,.06,400):gt(.03,.08,1200)}function dv(i="day"){X.state==="suspended"&&X.resume();const e=X.createOscillator(),t=X.createOscillator();e.type="sine",t.type="sine",e.frequency.value=i==="cave"?55:110,t.frequency.value=i==="cave"?82.5:164.8;const n=X.createGain();n.gain.setValueAtTime(.02,X.currentTime),n.gain.exponentialRampToValueAtTime(.001,X.currentTime+4),e.connect(n),t.connect(n),n.connect(X.destination),e.start(),t.start(),e.stop(X.currentTime+4),t.stop(X.currentTime+4)}function Rs(i,e="idle"){if(X.state==="suspended"&&X.resume(),i==="sheep")if(e==="hurt"||e==="death"){const t=X.createOscillator();t.type="sine",t.frequency.setValueAtTime(600,X.currentTime),t.frequency.exponentialRampToValueAtTime(300,X.currentTime+.3);const n=X.createGain();n.gain.setValueAtTime(.2,X.currentTime),n.gain.exponentialRampToValueAtTime(.001,X.currentTime+.3),t.connect(n),n.connect(X.destination),t.start(),t.stop(X.currentTime+.3)}else gt(.08,.05,2e3);else if(i==="zombie")if(e==="hurt"||e==="death"){const t=X.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(90,X.currentTime),t.frequency.linearRampToValueAtTime(60,X.currentTime+.4);const n=X.createBiquadFilter();n.type="lowpass",n.frequency.value=400;const s=X.createGain();s.gain.setValueAtTime(.15,X.currentTime),s.gain.exponentialRampToValueAtTime(.001,X.currentTime+.4),t.connect(n),n.connect(s),s.connect(X.destination),t.start(),t.stop(X.currentTime+.4)}else gt(.1,.04,300);else if(i==="creeper")if(e==="explode")gv();else if(e==="hiss"){const t=X.createBufferSource();t.buffer=As(1.5);const n=X.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(600,X.currentTime),n.frequency.linearRampToValueAtTime(3e3,X.currentTime+1.5);const s=X.createGain();s.gain.setValueAtTime(0,X.currentTime),s.gain.linearRampToValueAtTime(.15,X.currentTime+.3),s.gain.linearRampToValueAtTime(.2,X.currentTime+1.2),t.connect(n),n.connect(s),s.connect(X.destination),t.start(),t.stop(X.currentTime+1.5)}else e==="hurt"||e==="death"?gt(.2,.1,500):gt(.15,.03,400);else i==="skeleton"?e==="hurt"||e==="death"?(gt(.06,.15,2e3),Yn(300,.05,.1,"square")):e==="shoot"?(Yn(200,.08,.08,"triangle"),setTimeout(()=>Yn(180,.06,.06,"triangle"),80)):gt(.08,.02,2e3):i==="pig"?gt(.12,.06,500):i==="chicken"&&Yn(800,.05,.06,"sine")}function pv(){X.state==="suspended"&&X.resume();const i=X.createBufferSource();i.buffer=As(1.5);const e=X.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(200,X.currentTime),e.frequency.exponentialRampToValueAtTime(40,X.currentTime+1.5);const t=X.createGain();t.gain.setValueAtTime(.35,X.currentTime),t.gain.exponentialRampToValueAtTime(.001,X.currentTime+1.5),i.connect(e),e.connect(t),t.connect(X.destination),i.start(),i.stop(X.currentTime+1.5)}function mv(){gt(.05,.4,4e3),setTimeout(()=>pv(),100)}function gv(){X.state==="suspended"&&X.resume(),gt(.25,.5,1200),setTimeout(()=>{const i=X.createBufferSource();i.buffer=As(.4);const e=X.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(300,X.currentTime),e.frequency.exponentialRampToValueAtTime(60,X.currentTime+.4);const t=X.createGain();t.gain.setValueAtTime(.4,X.currentTime),t.gain.exponentialRampToValueAtTime(.001,X.currentTime+.4),i.connect(e),e.connect(t),t.connect(X.destination),i.start(),i.stop(X.currentTime+.4)},50)}function _v(){X.state==="suspended"&&X.resume();const i=X.createOscillator();i.type="square",i.frequency.value=150;const e=X.createGain();e.gain.setValueAtTime(.15,X.currentTime),e.gain.exponentialRampToValueAtTime(.001,X.currentTime+.15),i.connect(e),e.connect(X.destination),i.start(),i.stop(X.currentTime+.15)}function Hu(){X.state==="suspended"&&X.resume(),[523,659,784].forEach((e,t)=>{const n=X.createOscillator();n.type="sine",n.frequency.value=e;const s=X.createGain();s.gain.setValueAtTime(.1,X.currentTime+t*.08),s.gain.exponentialRampToValueAtTime(.001,X.currentTime+t*.08+.15),n.connect(s),s.connect(X.destination),n.start(X.currentTime+t*.08),n.stop(X.currentTime+t*.08+.15)})}let Xn=null,Pn=null,dr=1;function Vu(i){dr=Math.max(0,Math.min(1,i)),Pn&&(Pn.gain.value=.08*dr)}function vv(){if(X.state==="suspended"&&X.resume(),Xn)return;const i=2,e=X.sampleRate,t=Math.floor(i*e),n=X.createBuffer(1,t,e),s=n.getChannelData(0);for(let o=0;o<t;o++)s[o]=Math.random()*2-1;Xn=X.createBufferSource(),Xn.buffer=n,Xn.loop=!0;const r=X.createBiquadFilter();r.type="lowpass",r.frequency.value=2e3,Pn=X.createGain(),Pn.gain.value=0,Pn.gain.linearRampToValueAtTime(.08*dr,X.currentTime+1),Xn.connect(r),r.connect(Pn),Pn.connect(X.destination),Xn.start()}function xv(){if(!Xn||!Pn)return;const i=Xn;Pn.gain.linearRampToValueAtTime(.001,X.currentTime+1),setTimeout(()=>{try{i.stop()}catch{}},1100),Xn=null,Pn=null}function Mv(i){X.state==="suspended"&&X.resume();const e=.015*dr;if(i==="jungle"||i==="swamp"){const t=[1200,1800,2200,1500],n=t[Math.floor(Math.random()*t.length)];Yn(n,.08,e,"sine"),setTimeout(()=>Yn(n*.8,.06,e*.7,"sine"),120)}else if(i==="desert"){const t=X.createBufferSource();t.buffer=As(.5);const n=X.createBiquadFilter();n.type="bandpass",n.frequency.value=400,n.Q.value=3;const s=X.createGain();s.gain.setValueAtTime(e,X.currentTime),s.gain.exponentialRampToValueAtTime(.001,X.currentTime+.5),t.connect(n),n.connect(s),s.connect(X.destination),t.start(),t.stop(X.currentTime+.5)}else if(i==="taiga"||i==="snow"){const t=X.createBufferSource();t.buffer=As(.8);const n=X.createBiquadFilter();n.type="lowpass",n.frequency.value=300;const s=X.createGain();s.gain.setValueAtTime(e*.8,X.currentTime),s.gain.exponentialRampToValueAtTime(.001,X.currentTime+.8),t.connect(n),n.connect(s),s.connect(X.destination),t.start(),t.stop(X.currentTime+.8)}}let Ca=!1;function yv(){if(Ca)return;Ca=!0;const i=[261.6,293.7,329.6,392,440,523.3,587.3,659.3];function e(){if(!Ca)return;X.state==="suspended"&&X.resume();const t=.025*dr,n=i[Math.floor(Math.random()*i.length)],s=1.5+Math.random()*2,r=X.createOscillator();r.type="sine",r.frequency.value=n;const o=X.createGain();o.gain.setValueAtTime(0,X.currentTime),o.gain.linearRampToValueAtTime(t,X.currentTime+.3),o.gain.setValueAtTime(t,X.currentTime+s*.6),o.gain.exponentialRampToValueAtTime(.001,X.currentTime+s);const a=X.createDelay();a.delayTime.value=.15;const l=X.createGain();l.gain.value=.15,r.connect(o),o.connect(X.destination),o.connect(a),a.connect(l),l.connect(X.destination),r.start(),r.stop(X.currentTime+s)}setInterval(()=>{Math.random()<.6&&e()},3e3+Math.random()*3e3),e()}const Sv=tv(),bv=nv(),Ev=iv();class Tv{constructor(e){this.scene=e,this.particles=[],this._baseMaterial=new ms({map:Sv,blending:jn,depthWrite:!1,depthTest:!0,transparent:!0}),this._smokeMaterial=new ms({map:bv,blending:jn,depthWrite:!1,depthTest:!0,transparent:!0}),this._blastMaterial=new ms({map:Ev,blending:Ms,depthWrite:!1,depthTest:!0,transparent:!0})}_createParticle(e){let t=this._baseMaterial;e.kind==="smoke"?t=this._smokeMaterial:e.kind==="blast"&&(t=this._blastMaterial);const n=t.clone();n.color.set(e.color||16777215),n.opacity=e.opacity??.9;const s=new oc(n);s.position.set(e.x,e.y,e.z),s.scale.setScalar(e.size||.1),this.scene.add(s);const r={sprite:s,velocity:e.velocity.clone(),life:e.life??.8,maxLife:e.life??.8,baseSize:e.size||.1,isLeaf:e.isLeaf||!1};return this.particles.push(r),r}spawn(e,t,n,s,r=6){for(let o=0;o<r;o++)this._createParticle({x:e+.5+(Math.random()-.5)*.8,y:t+.5+(Math.random()-.5)*.4,z:n+.5+(Math.random()-.5)*.8,color:s,size:.08+Math.random()*.12,opacity:.85+Math.random()*.15,life:.6+Math.random()*.4,velocity:new D((Math.random()-.5)*3.5,Math.random()*2.5+1.2,(Math.random()-.5)*3.5)})}spawnBlockBreak(e,t,n,s,r=12){for(let o=0;o<r;o++){const a=.6+Math.random()*.4;this._createParticle({x:e+.5+(Math.random()-.5)*.55,y:t+.5+(Math.random()-.5)*.55,z:n+.5+(Math.random()-.5)*.55,color:new ge(s).multiplyScalar(a),size:.06+Math.random()*.14,opacity:.8+Math.random()*.2,life:.45+Math.random()*.35,velocity:new D((Math.random()-.5)*5,Math.random()*4+2,(Math.random()-.5)*5)})}}spawnFootstep(e,t,n,s=10518624){for(let r=0;r<4;r++)this._createParticle({x:e+(Math.random()-.5)*.35,y:t+.02+Math.random()*.08,z:n+(Math.random()-.5)*.35,color:new ge(s).multiplyScalar(.4+Math.random()*.6),size:.035+Math.random()*.055,opacity:.45+Math.random()*.25,life:.25+Math.random()*.2,velocity:new D((Math.random()-.5)*.5,Math.random()*.4+.05,(Math.random()-.5)*.5)})}spawnSplash(e,t,n){for(let s=0;s<10;s++){const r=Math.random()>.4;this._createParticle({x:e+(Math.random()-.5)*.55,y:t+.1+Math.random()*.4,z:n+(Math.random()-.5)*.55,color:r?16777215:4495837,size:.05+Math.random()*.1,opacity:.55+Math.random()*.25,life:.35+Math.random()*.35,velocity:new D((Math.random()-.5)*2.5,Math.random()*3+1.2,(Math.random()-.5)*2.5)})}}spawnLeaf(e,t,n){const s=Math.random()>.45;this._createParticle({x:e+(Math.random()-.5)*3,y:t+1.5+Math.random()*2,z:n+(Math.random()-.5)*3,color:s?5938730:10189338,size:.07+Math.random()*.1,opacity:.55+Math.random()*.25,life:2.5+Math.random()*4,isLeaf:!0,velocity:new D((Math.random()-.5)*.6,-(.25+Math.random()*.5),(Math.random()-.5)*.6)})}spawnTorchFire(e,t,n){const s=[16746496,16763904,16729088,16755234];for(let r=0;r<2;r++)this._createParticle({x:e+(Math.random()-.5)*.12,y:t+.3+Math.random()*.25,z:n+(Math.random()-.5)*.12,color:s[Math.floor(Math.random()*s.length)],size:.04+Math.random()*.06,opacity:.7+Math.random()*.3,life:.35+Math.random()*.45,velocity:new D((Math.random()-.5)*.25,Math.random()*1.2+.5,(Math.random()-.5)*.25)})}spawnCollectSparkle(e,t,n){for(let s=0;s<6;s++)this._createParticle({x:e+(Math.random()-.5)*.3,y:t+(Math.random()-.5)*.3,z:n+(Math.random()-.5)*.3,color:16768324,size:.04+Math.random()*.06,opacity:.6+Math.random()*.4,life:.3+Math.random()*.3,velocity:new D((Math.random()-.5)*1.5,Math.random()*1.5+1,(Math.random()-.5)*1.5)})}spawnExplosion(e,t,n,s=1.2){for(let r=0;r<6;r++)this._createParticle({kind:"blast",x:e+(Math.random()-.5)*s,y:t+.4+Math.random()*s*.8,z:n+(Math.random()-.5)*s,color:16755268,size:.6+Math.random()*.5,opacity:.9,life:.35+Math.random()*.25,velocity:new D((Math.random()-.5)*4,Math.random()*2+1,(Math.random()-.5)*4)});for(let r=0;r<14;r++)this._createParticle({kind:"smoke",x:e+(Math.random()-.5)*s*1.3,y:t+.3+Math.random()*s,z:n+(Math.random()-.5)*s*1.3,color:new ge(11184810).multiplyScalar(.7+Math.random()*.3),size:.5+Math.random()*.6,opacity:.6+Math.random()*.3,life:1.2+Math.random()*.8,velocity:new D((Math.random()-.5)*2.5,Math.random()*1.5+.5,(Math.random()-.5)*2.5)})}update(e,t){for(let n=this.particles.length-1;n>=0;n--){const s=this.particles[n];if(s.life-=e,s.life<=0){this.scene.remove(s.sprite),s.sprite.material.dispose(),this.particles.splice(n,1);continue}const r=s.life/s.maxLife;if(s.isLeaf){s.velocity.x+=Math.sin(Date.now()*.0018+n)*e*.3,s.velocity.z+=Math.cos(Date.now()*.0022+n)*e*.25,s.sprite.position.addScaledVector(s.velocity,e),s.sprite.rotation.z+=e*.4;const o=t.getSurfaceY(Math.floor(s.sprite.position.x),Math.floor(s.sprite.position.z));s.sprite.position.y<o+.05&&(s.sprite.position.y=o+.05,s.life=0)}else{s.velocity.y-=12*e,s.sprite.position.addScaledVector(s.velocity,e);const o=t.getSurfaceY(Math.floor(s.sprite.position.x),Math.floor(s.sprite.position.z));s.sprite.position.y<o+.03&&(s.sprite.position.y=o+.03,s.velocity.y*=-.3,s.velocity.x*=.7,s.velocity.z*=.7)}s.sprite.material.opacity=Math.max(0,r*.85),s.sprite.scale.setScalar(s.baseSize*(.2+r*.8))}}}const Hn=.25,wv=1.5;function Av(){const e=document.createElement("canvas");e.width=32,e.height=32;const t=e.getContext("2d"),n=32/2,s=t.createRadialGradient(n,n,n*.4,n,n,n);s.addColorStop(0,"rgba(255, 255, 255, 0.0)"),s.addColorStop(.6,"rgba(255, 255, 255, 0.0)"),s.addColorStop(.75,"rgba(255, 255, 255, 0.25)"),s.addColorStop(.9,"rgba(255, 255, 255, 0.5)"),s.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=s,t.fillRect(0,0,32,32);const r=new cc(e);return r.needsUpdate=!0,r}const Rv=Av();class Cv{constructor(e,t,n,s,r,o){this.scene=e,this.blockName=r,this.age=0,this.pickedUp=!1;const a=new rn(Hn,Hn,Hn),l=new Cu({color:o||16777215,roughness:.5,metalness:.1,emissive:new ge(o||16777215).multiplyScalar(.25)});this.mesh=new ct(a,l),this.mesh.position.set(t,n,s),this.scene.add(this.mesh);const c=new ms({map:Rv,blending:Ms,transparent:!0,opacity:.3,depthWrite:!1,depthTest:!0});this.glowSprite=new oc(c),this.glowSprite.scale.set(Hn*3,Hn*3,1),this.mesh.add(this.glowSprite),this.velocity=new D((Math.random()-.5)*2,Math.random()*2+1,(Math.random()-.5)*2)}update(e,t,n,s){if(this.pickedUp)return!0;this.age+=e,this.velocity.y-=12*e,this.mesh.position.addScaledVector(this.velocity,e),this.mesh.rotation.y+=e*3,this.mesh.rotation.x+=e*1.5;const r=t.getSurfaceY(Math.floor(this.mesh.position.x),Math.floor(this.mesh.position.z));if(this.mesh.position.y<r+Hn/2&&(this.mesh.position.y=r+Hn/2,this.velocity.y=0,this.velocity.x*=.9,this.velocity.z*=.9),Math.abs(this.velocity.y)<.1&&this.mesh.position.y<=r+Hn/2+.05){const o=Math.sin(this.age*3)*.08;this.mesh.position.y=r+Hn/2+o;const a=.2+Math.sin(this.age*2.5)*.1;this.glowSprite.material.opacity=a}return this.mesh.position.distanceTo(n)<wv?(this.pickedUp=!0,s(this.blockName),this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.glowSprite.material.dispose(),!0):this.age>300?(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.glowSprite.material.dispose(),!0):!1}}class Pv{constructor(e){this.scene=e,this.items=[]}spawn(e,t,n,s,r){this.items.push(new Cv(this.scene,e,t,n,s,r))}update(e,t,n,s){for(let r=this.items.length-1;r>=0;r--)this.items[r].update(e,t,n,s)&&this.items.splice(r,1)}}const Dv=75,Lv=2.5,Iv=ev();class Uv{constructor(e){this.scene=e,this.clouds=[],this.geometry=new _r(1,1),this.material=new Vi({map:Iv,color:16777215,transparent:!0,opacity:.55,depthWrite:!1,side:cn}),this._lastPlayerX=0,this._timePhase=0}spawnCloud(e,t,n){const s=new Mn;s.position.set(e,Dv+(Math.random()-.5)*6,t);for(let r=0;r<n;r++){const o=new ct(this.geometry,this.material);o.scale.set(3+Math.random()*6,1,2+Math.random()*4),o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*14,(Math.random()-.5)*.8,(Math.random()-.5)*8),o.rotation.z=Math.random()*Math.PI*2,s.add(o)}this.scene.add(s),this.clouds.push({group:s,speed:(.3+Math.random()*.7)*Lv})}init(e=10,t=350){for(let n=0;n<e;n++)this.spawnCloud((Math.random()-.5)*t,(Math.random()-.5)*t,6+Math.floor(Math.random()*10))}update(e,t,n){this._lastPlayerX=t,n!==void 0&&(this._timePhase=n,this._updateTint(n));for(const s of this.clouds)s.group.position.x+=s.speed*e,s.group.position.x>t+250&&(s.group.position.x=t-250,s.group.position.z=(Math.random()-.5)*350)}setTint(e){this._timePhase=e,this._updateTint(e)}_updateTint(e){const t=Math.sin(e);let n;if(t>.35)n=new ge(16777215);else if(t>.05){const s=(t-.05)/.3;n=new ge(16777215).lerp(new ge(16772829),1-s)}else if(t>-.1){const s=(t+.1)/.15;n=new ge(16746598).lerp(new ge(16764040),s)}else if(t>-.4){const s=(t+.4)/.3;n=new ge(5596808).lerp(new ge(8952251),s)}else n=new ge(3359846);this.material.color.copy(n)}}const Nv=rv(),Fv=sv(),Bv=Fv[0];class Ov{constructor(e){this.scene=e;const t=new us(380,48,24),n=new Ht({uniforms:{uTopColor:{value:new ge(3377356)},uHorizonColor:{value:new ge(10079487)},uBottomColor:{value:new ge(8306926)},uSunDirection:{value:new D(0,1,0)},uSunGlow:{value:.5}},vertexShader:`
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
      `,side:Yt,depthWrite:!1,fog:!1});this.skyDome=new ct(t,n),this.skyDome.frustumCulled=!1,this.skyDome.renderOrder=-1,e.add(this.skyDome);const s=new us(4,16,16),r=new In({color:16772744,fog:!1});this.sunMesh=new ct(s,r),this.sunMesh.frustumCulled=!1,e.add(this.sunMesh);const o=new us(3,16,16),a=new In({color:14540287,fog:!1});this.moonMesh=new ct(o,a),this.moonMesh.frustumCulled=!1,e.add(this.moonMesh);const l=2e3,c=new Float32Array(l*3),h=new Float32Array(l*3);for(let m=0;m<l;m++){const T=Math.random()*Math.PI*2,E=Math.acos(Math.random()*2-1),S=400;c[m*3]=S*Math.sin(E)*Math.cos(T),c[m*3+1]=Math.abs(S*Math.cos(E)),c[m*3+2]=S*Math.sin(E)*Math.sin(T);const A=.3+Math.random()*.7;h[m*3]=A,h[m*3+1]=A,h[m*3+2]=A+Math.random()*.2}const u=new Bt;u.setAttribute("position",new ft(c,3)),u.setAttribute("color",new ft(h,3));const f=new lc({size:1.5,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,fog:!1,sizeAttenuation:!0});this.stars=new wu(u,f),this.stars.frustumCulled=!1,e.add(this.stars);const p=new us(10,16,16),g=new In({color:16763972,transparent:!0,opacity:.18,fog:!1,depthWrite:!1});this.sunGlow=new ct(p,g),this.sunGlow.frustumCulled=!1,e.add(this.sunGlow);const d=ov(),_=new ms({map:d,blending:Ms,transparent:!0,opacity:.5,depthWrite:!1,fog:!1,depthTest:!0});this.godRaySprite=new oc(_),this.godRaySprite.scale.set(80,80,1),this.godRaySprite.frustumCulled=!1,e.add(this.godRaySprite)}update(e,t){const n=Math.sin(e),s=Math.cos(e),r=350,o=t.x+s*r,a=t.y+n*r-50,l=t.z;this.sunMesh.position.set(o,a,l),this.sunGlow.position.copy(this.sunMesh.position),this.godRaySprite.position.copy(this.sunMesh.position),this.moonMesh.position.set(t.x-s*r,t.y-n*r-50,t.z),this.skyDome.position.copy(t);const c=Math.max(0,-n),h=Math.max(0,n),u=new ge().lerpColors(new ge(657952),new ge(3377356),h),f=new ge().lerpColors(new ge(1118515),new ge(10079487),h),p=new ge().lerpColors(new ge(657944),new ge(8306926),h);this.skyDome.material.uniforms.uTopColor.value.copy(u),this.skyDome.material.uniforms.uHorizonColor.value.copy(f),this.skyDome.material.uniforms.uBottomColor.value.copy(p);const g=new D(s,n,0).normalize();this.skyDome.material.uniforms.uSunDirection.value.copy(g),this.skyDome.material.uniforms.uSunGlow.value=Math.max(0,n),this.stars.material.opacity=c*.9,this.stars.position.set(t.x,0,t.z),this.sunGlow.material.opacity=Math.max(0,n)*.18,this.godRaySprite.material.opacity=Math.max(0,n)*.5,this.godRaySprite.visible=n>-.15,this.sunMesh.visible=n>-.2,this.sunGlow.visible=n>-.2,this.moonMesh.visible=n<.2}}class kv{constructor(e){this.scene=e,this.raining=!1,this.snowing=!1,this.particles=null,this.particlePositions=null,this.particleVelocities=null,this.particleCount=3e3,this.weatherTimer=0,this.nextWeatherChange=60+Math.random()*120,this.lightningFlash=0,this.lightningTimer=0,this.lightningNextDelay=5+Math.random()*15,this.fogNearOverride=null,this.fogFarOverride=null}get lightningIntensity(){return this.lightningFlash}startRain(){this.stop(),this.raining=!0,this._createParticles(Nv,.55,14,8952268),this.lightningTimer=2+Math.random()*6,this.lightningNextDelay=5+Math.random()*15,this.fogNearOverride=30,this.fogFarOverride=180}startSnow(){this.stop(),this.snowing=!0,this._createParticles(Bv,.7,2.5,16777215),this.fogNearOverride=50,this.fogFarOverride=250}stop(){this.particles&&(this.scene.remove(this.particles),this.particles.geometry.dispose(),this.particles.material.dispose(),this.particles=null),this.raining=!1,this.snowing=!1,this.lightningFlash=0,this.lightningTimer=0,this.fogNearOverride=null,this.fogFarOverride=null}_createParticles(e,t,n,s){const r=new Float32Array(this.particleCount*3);this.particleVelocities=new Float32Array(this.particleCount);const o=80;for(let c=0;c<this.particleCount;c++)r[c*3]=(Math.random()-.5)*o,r[c*3+1]=Math.random()*60,r[c*3+2]=(Math.random()-.5)*o,this.particleVelocities[c]=n+Math.random()*n*.5;const a=new Bt;a.setAttribute("position",new ft(r,3));const l=new lc({map:e,color:s,size:t,transparent:!0,opacity:.7,depthWrite:!1,fog:!1,sizeAttenuation:!0,blending:jn});this.particles=new wu(a,l),this.particles.frustumCulled=!1,this.scene.add(this.particles)}update(e,t,n){if(this.weatherTimer+=e,this.weatherTimer>=this.nextWeatherChange&&(this.weatherTimer=0,this.nextWeatherChange=60+Math.random()*120,this.raining||this.snowing?this.stop():n==="snow"?this.startSnow():n!=="desert"&&Math.random()>.5&&this.startRain()),this.raining?(this.lightningTimer-=e,this.lightningTimer<=0&&this.lightningFlash<=0&&(this.lightningFlash=1,this.lightningTimer=this.lightningNextDelay,this.lightningNextDelay=5+Math.random()*15),this.lightningFlash>0&&(this.lightningFlash=Math.max(0,this.lightningFlash-e*8))):this.lightningFlash=0,!this.particles)return;const s=this.particles.geometry.attributes.position.array,r=80,o=Date.now()*.001;for(let a=0;a<this.particleCount;a++)s[a*3+1]-=this.particleVelocities[a]*e,this.snowing?(s[a*3]+=Math.sin(o*1.5+a*.1)*e*.6,s[a*3+2]+=Math.cos(o*1.3+a*.13)*e*.5):this.raining&&(s[a*3]+=Math.sin(o*.7+a*.05)*e*.4),s[a*3+1]<0&&(s[a*3]=(Math.random()-.5)*r,s[a*3+1]=50+Math.random()*10,s[a*3+2]=(Math.random()-.5)*r);this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.position.set(t.x,t.y-30,t.z),this.scene.fog&&(this.raining?(this.scene.fog.near=25,this.scene.fog.far=170):this.snowing&&(this.scene.fog.near=45,this.scene.fog.far=240))}}const Pa={};function zv(i){if(Pa[i])return Pa[i];const e=64,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");switch(i){case"creeper":Fh(n,e);break;case"sheep":Hv(n,e);break;case"pig":Vv(n,e);break;case"chicken":Gv(n,e);break;case"zombie":Wv(n,e);break;case"skeleton":Xv(n,e);break;default:Fh(n,e);break}const s=new cc(t);return s.magFilter=Rt,s.minFilter=Rt,s.colorSpace=Ft,s.needsUpdate=!0,Pa[i]=s,s}function Fh(i,e){i.fillStyle="#4CAF50",i.fillRect(0,0,e,e),i.fillStyle="#111111",i.fillRect(10,14,14,14),i.fillRect(40,14,14,14),i.fillRect(10,36,44,8),i.fillRect(18,44,8,10),i.fillRect(28,44,8,10),i.fillRect(38,44,8,10),i.fillRect(14,44,36,5),i.fillStyle="#2E7D32",i.fillRect(28,28,8,8),i.fillStyle="rgba(0,0,0,0.08)",i.fillRect(0,0,e,4),i.fillRect(0,e-4,e,4),i.fillRect(0,0,4,e),i.fillRect(e-4,0,4,e)}function Hv(i,e){i.fillStyle="#e8e4dc",i.fillRect(0,0,e,e),i.fillStyle="rgba(255,255,255,0.3)";for(let t=0;t<20;t++){const n=Math.random()*e,s=Math.random()*e;i.beginPath(),i.arc(n,s,3+Math.random()*2,0,Math.PI*2),i.fill()}i.fillStyle="#1a1a1a",i.fillRect(14,22,8,8),i.fillRect(42,22,8,8),i.fillStyle="#333333",i.fillRect(28,34,8,6),i.fillStyle="#555555",i.fillRect(26,42,12,3)}function Vv(i,e){i.fillStyle="#f4a0a0",i.fillRect(0,0,e,e),i.fillStyle="#1a1a1a",i.fillRect(14,20,7,7),i.fillRect(43,20,7,7),i.fillStyle="#f8c0c0",i.fillRect(20,32,24,16),i.fillStyle="#c07070",i.fillRect(25,36,6,5),i.fillRect(35,36,6,5),i.fillStyle="#a05050",i.fillRect(26,44,12,3)}function Gv(i,e){i.fillStyle="#fefef0",i.fillRect(0,0,e,e),i.fillStyle="#dd2222",i.beginPath(),i.moveTo(16,0),i.lineTo(20,8),i.lineTo(26,2),i.lineTo(32,8),i.lineTo(38,3),i.lineTo(44,8),i.lineTo(48,0),i.fill(),i.fillStyle="#111111",i.fillRect(16,20,6,6),i.fillRect(42,20,6,6),i.fillStyle="#f0a020",i.beginPath(),i.moveTo(24,32),i.lineTo(40,32),i.lineTo(32,44),i.fill(),i.fillStyle="#cc2222",i.beginPath(),i.arc(32,48,5,0,Math.PI),i.fill()}function Wv(i,e){i.fillStyle="#5a8a4a",i.fillRect(0,0,e,e),i.fillStyle="rgba(0,0,0,0.06)";for(let t=0;t<15;t++)i.fillRect(Math.random()*e,Math.random()*e,5+Math.random()*6,3+Math.random()*4);i.fillStyle="#0a0a0a",i.fillRect(12,20,12,14),i.fillRect(40,20,12,14),i.fillStyle="#2a3a2a",i.fillRect(15,24,6,6),i.fillRect(43,24,6,6),i.fillStyle="#3a6a3a",i.fillRect(28,30,8,8),i.fillStyle="#0a0a0a",i.fillRect(16,44,32,8),i.fillStyle="#cccc88",i.fillRect(18,44,5,4),i.fillRect(26,44,5,4),i.fillRect(34,44,5,4),i.fillRect(42,44,5,4)}function Xv(i,e){i.fillStyle="#e8e0d0",i.fillRect(0,0,e,e),i.fillStyle="rgba(200,195,180,0.3)";for(let t=0;t<12;t++)i.fillRect(Math.random()*e,Math.random()*e,4+Math.random()*4,2+Math.random()*2);i.fillStyle="#000000",i.fillRect(10,18,16,16),i.fillRect(38,18,16,16),i.fillStyle="#000000",i.fillRect(28,36,8,10),i.fillStyle="#000000";for(let t=48;t<58;t+=3)i.fillRect(16,t,32,1);i.fillRect(22,48,1,10),i.fillRect(28,48,1,10),i.fillRect(34,48,1,10),i.fillRect(40,48,1,10)}function mt(i,e,t,n,s){const r={color:n};return s&&(r.map=s),new ct(new rn(i,e,t),new Cu(r))}function qv(i){const e=new Mn,t=zv(i.id);if(i.id==="sheep"){const n=mt(.65,.4,.5,15790320);n.position.y=.5,e.add(n);const s=mt(.32,.32,.32,15262940,t);s.position.set(.28,.62,0),e.add(s);for(const[r,o]of[[-.18,-.12],[.18,-.12],[-.18,.12],[.18,.12]]){const a=mt(.1,.28,.1,4864554);a.position.set(r,.14,o),e.add(a)}}else if(i.id==="pig"){const n=mt(.6,.4,.45,15769760);n.position.y=.48,e.add(n);const s=mt(.32,.28,.32,16031904,t);s.position.set(.28,.52,0),e.add(s);const r=mt(.15,.08,.1,14712960);r.position.set(.44,.5,0),e.add(r);for(const[o,a]of[[-.15,-.1],[.15,-.1],[-.15,.1],[.15,.1]]){const l=mt(.1,.28,.1,12611696);l.position.set(o,.14,a),e.add(l)}}else if(i.id==="chicken"){const n=mt(.3,.25,.4,16119285);n.position.y=.35,e.add(n);const s=mt(.18,.18,.18,16711408,t);s.position.set(.18,.52,0),e.add(s);const r=mt(.08,.04,.04,15769632);r.position.set(.28,.5,0),e.add(r);const o=mt(.03,.06,.03,13378082);o.position.set(.24,.44,0),e.add(o);for(const[a,l]of[[-.05,-.05],[.05,-.05]]){const c=mt(.04,.2,.04,13672480);c.position.set(a,.1,l),e.add(c)}}else if(i.id==="skeleton"){const n=mt(.4,.55,.22,13684936);n.position.y=.58,e.add(n);const s=mt(.3,.3,.3,15261904,t);s.position.set(0,.98,0),e.add(s);for(const[a,l]of[[-.08,0],[.08,0]]){const c=mt(.08,.38,.08,12632248);c.position.set(a,.19,l),e.add(c)}const r=mt(.08,.4,.08,13684936);r.position.set(.28,.55,.12),r.rotation.z=-.2,e.add(r);const o=mt(.08,.4,.08,13684936);o.position.set(-.28,.55,-.12),o.rotation.z=.2,e.add(o)}else if(i.id==="creeper"){const n=mt(.4,.7,.3,4243520);n.position.y=.65,e.add(n);const s=mt(.35,.35,.35,5025616,t);s.position.set(0,1.1,0),e.add(s);for(const[r,o]of[[-.14,-.1],[.14,-.1],[-.14,.1],[.14,.1]]){const a=mt(.1,.3,.12,3186736);a.position.set(r,.15,o),e.add(a)}}else{const n=mt(.48,.55,.28,5933642);n.position.y=.58,e.add(n);const s=mt(.32,.32,.32,5933642,t);s.position.set(0,.98,0),e.add(s);for(const[a,l]of[[-.1,0],[.1,0]]){const c=mt(.12,.38,.12,4876976);c.position.set(a,.19,l),e.add(c)}const r=mt(.1,.42,.1,5933642);r.position.set(.32,.55,.12),r.rotation.z=-.3,e.add(r);const o=mt(.1,.42,.1,5933642);o.position.set(-.32,.55,-.12),o.rotation.z=.3,e.add(o)}return e.frustumCulled=!0,e}function Yv(i,e,t){const n=i.mesh;if(t){const r=Math.sin(i.bobPhase||0)*.25,o=n.children.filter(a=>a.geometry&&a.position.y<.3&&a.position.y>.05);for(let a=0;a<o.length;a++)o[a].rotation.x=(a%2===0?1:-1)*r;n.position.y+=Math.sin((i.bobPhase||0)*2)*.006,i.bobPhase=(i.bobPhase||0)+e*8}else{const r=n.children.filter(o=>o.geometry&&o.position.y<.3&&o.position.y>.05);for(const o of r)o.rotation.x*=.9}const s=n.children[1];s&&(s.rotation.y=Math.sin(i.dir)*.25)}function Cs(i){i.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}const Bh=[{name:"Planks",in:{wood:1},out:{planks:4}},{name:"Sticks",in:{planks:2},out:{sticks:4}},{name:"Crafting Table",in:{planks:4},out:{crafting_table:1}},{name:"Torch",in:{sticks:1,coal:1},out:{torch:4}},{name:"Wooden Pickaxe",in:{planks:3,sticks:2},out:{wooden_pickaxe:1}},{name:"Stone Pickaxe",in:{cobblestone:3,sticks:2},out:{stone_pickaxe:1}},{name:"Iron Pickaxe",in:{iron_ingot:3,sticks:2},out:{iron_pickaxe:1}},{name:"Diamond Pickaxe",in:{diamond:3,sticks:2},out:{diamond_pickaxe:1}},{name:"Wooden Axe",in:{planks:3,sticks:2},out:{wooden_axe:1}},{name:"Stone Axe",in:{cobblestone:3,sticks:2},out:{stone_axe:1}},{name:"Iron Axe",in:{iron_ingot:3,sticks:2},out:{iron_axe:1}},{name:"Wooden Shovel",in:{planks:1,sticks:2},out:{wooden_shovel:1}},{name:"Stone Shovel",in:{cobblestone:1,sticks:2},out:{stone_shovel:1}},{name:"Wooden Sword",in:{planks:2,sticks:1},out:{wooden_sword:1}},{name:"Stone Sword",in:{cobblestone:2,sticks:1},out:{stone_sword:1}},{name:"Iron Sword",in:{iron_ingot:2,sticks:1},out:{iron_sword:1}},{name:"Diamond Sword",in:{diamond:2,sticks:1},out:{diamond_sword:1}},{name:"Bow",in:{sticks:3,string:3},out:{bow:1}},{name:"Arrow",in:{flint:1,sticks:1,feather:1},out:{arrow:4}},{name:"Furnace",in:{cobblestone:8},out:{furnace:1}},{name:"Bed",in:{wool:3,planks:3},out:{bed:1}},{name:"Leather Helmet",in:{leather:5},out:{leather_helmet:1}},{name:"Leather Chestplate",in:{leather:8},out:{leather_chestplate:1}},{name:"Leather Leggings",in:{leather:7},out:{leather_leggings:1}},{name:"Leather Boots",in:{leather:4},out:{leather_boots:1}},{name:"Iron Helmet",in:{iron_ingot:5},out:{iron_helmet:1}},{name:"Iron Chestplate",in:{iron_ingot:8},out:{iron_chestplate:1}},{name:"Iron Leggings",in:{iron_ingot:7},out:{iron_leggings:1}},{name:"Iron Boots",in:{iron_ingot:4},out:{iron_boots:1}},{name:"Diamond Helmet",in:{diamond:5},out:{diamond_helmet:1}},{name:"Diamond Chestplate",in:{diamond:8},out:{diamond_chestplate:1}},{name:"Diamond Leggings",in:{diamond:7},out:{diamond_leggings:1}},{name:"Diamond Boots",in:{diamond:4},out:{diamond_boots:1}},{name:"Bookshelf",in:{planks:6},out:{bookshelf:1}},{name:"Stone Slab",in:{stone:3},out:{stone_slab:6}},{name:"Wooden Slab",in:{planks:3},out:{wooden_slab:6}},{name:"Fence",in:{planks:4,sticks:2},out:{fence:3}},{name:"Wooden Door",in:{planks:6},out:{wooden_door:3}},{name:"Iron Door",in:{iron_ingot:6},out:{iron_door:3}},{name:"Stone Brick",in:{stone:4},out:{stone_brick:4}},{name:"Iron Block",in:{iron_ingot:9},out:{iron_block:1}},{name:"Oak Stairs",in:{planks:6},out:{oak_stairs:4}},{name:"Stone Stairs",in:{cobblestone:6},out:{stone_stairs:4}},{name:"Chest",in:{planks:8},out:{chest:1}},{name:"TNT",in:{sand:4,gunpowder:5},out:{tnt:1}},{name:"Brick Block",in:{clay:4},out:{brick:1}},{name:"Cook Pork",in:{raw_porkchop:1,coal:1},out:{cooked_porkchop:1}},{name:"Cook Chicken",in:{raw_chicken:1,coal:1},out:{cooked_chicken:1}}],Gu=[{in:"iron_ore",out:"iron_ingot",timeSec:10},{in:"gold_ore",out:"gold_ingot",timeSec:10},{in:"sand",out:"glass",timeSec:8},{in:"raw_porkchop",out:"cooked_porkchop",timeSec:6},{in:"raw_chicken",out:"cooked_chicken",timeSec:6},{in:"cobblestone",out:"stone",timeSec:5}],$v={coal:80,planks:15,wood:15,sticks:5};function Wu(i){return $v[i]||0}const jv=64;function Kv(i){return ui.has(i)||Eo.has(i)?1:jv}let eo=null;function Zv(i,e=2800){if(eo||(eo=document.getElementById("toast-container")),!eo)return;const t=document.createElement("div");t.className="toast",t.textContent=i,eo.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},e)}function Qs(i){if(ve[i]){const e=ve[i],t=e.tex?.all??e.tex?.side??e.tex?.top??1;return{label:e.name,tile:t,color:null}}return Vt[i]?{label:Vt[i].name,tile:null,color:Vt[i].color,emoji:Vt[i].emoji}:Ui[i]?{label:Ui[i].name,tile:null,color:Ui[i].color,emoji:Ui[i].emoji}:Nt[i]?{label:Nt[i].name,tile:null,color:Nt[i].color,emoji:Nt[i].emoji}:Qr[i]?{label:Qr[i].name,tile:null,color:Qr[i].color,emoji:Qr[i].emoji}:{label:i,tile:null,color:"#888",emoji:"?"}}class Jv{constructor(){this.hotbarEl=document.getElementById("hotbar"),this.overlayEl=document.getElementById("overlay"),this.inventoryEl=document.getElementById("inventory"),this.craftingEl=document.getElementById("crafting"),this.itemNameEl=document.getElementById("item-name-popup"),this.activeSlot=0,this.hotbar=[...D_],this.inventory=new Map(this.hotbar.map(e=>[e,64])),this.toolDurability=new Map,this.armorSlots=F_(),this.armorDurability=new B_,this._itemNameTimer=0,window.addEventListener("keydown",e=>{const t=Number(e.key);t>=1&&t<=9&&this.selectSlot(t-1),e.code==="KeyE"&&this.toggleInventory()}),window.addEventListener("wheel",e=>{const t=(this.activeSlot+(e.deltaY>0?1:-1)+this.hotbar.length)%this.hotbar.length;this.selectSlot(t)}),this.inventoryEl.addEventListener("click",e=>{const t=e.target.closest("[data-item]");t&&this.moveToHotbar(t.dataset.item);const n=e.target.closest("[data-armor]");n&&this.equipArmorFromInventory(n.dataset.armor)}),this.render()}getTotalArmorReduction(){let e=0;for(const[t,n]of Object.entries(this.armorSlots))n&&Nt[n]&&this.armorDurability.get(n)>0&&(e+=Nt[n].damageReduction);return e}damageArmor(){let e=!1;for(const[t,n]of Object.entries(this.armorSlots))n&&Nt[n]&&this.armorDurability.damage(n)&&(this.armorSlots[t]=null,this.inventory.set(n,(this.inventory.get(n)||0)-1),(this.inventory.get(n)||0)<=0&&this.inventory.delete(n),e=!0);return e&&this.render(),e}toggleInventory(){this.inventoryEl.classList.toggle("visible"),this.inventoryEl.classList.contains("visible")&&document.exitPointerLock()}activeBlock(){return this.hotbar[this.activeSlot]}activeIsFood(){return Fl.has(this.hotbar[this.activeSlot])}activeIsTool(){return ui.has(this.hotbar[this.activeSlot])}activeIsBow(){return this.hotbar[this.activeSlot]==="bow"}selectSlot(e){this.activeSlot=Math.max(0,Math.min(this.hotbar.length-1,e)),this.render(),this._showItemName(this.hotbar[this.activeSlot])}_showItemName(e){if(!this.itemNameEl)return;const t=Qs(e);this.itemNameEl.textContent=t.label,this.itemNameEl.classList.add("visible"),this._itemNameTimer=1.5}tickItemName(e){this._itemNameTimer>0&&this.itemNameEl&&(this._itemNameTimer-=e,this._itemNameTimer<=0&&this.itemNameEl.classList.remove("visible"))}addItem(e,t=1){const n=Kv(e),s=this.inventory.get(e)||0,r=Math.min(s+t,n);return r>s&&this.inventory.set(e,r),ui.has(e)&&!this.toolDurability.has(e)&&this.toolDurability.set(e,Vt[e].maxDurability),Eo.has(e)&&!this.armorDurability.map.has(e)&&this.armorDurability.set(e,Nt[e].maxDurability),this.render(),r-s}consumeItem(e,t=1){const n=this.inventory.get(e)||0;return n<t?!1:(this.inventory.set(e,n-t),this.inventory.get(e)===0&&this.inventory.delete(e),this.render(),!0)}damageTool(e){if(!ui.has(e))return!1;const t=(this.toolDurability.get(e)??Vt[e].maxDurability)-1;if(t<=0){this.toolDurability.delete(e),this.consumeItem(e,1);for(let n=0;n<this.hotbar.length;n++)this.hotbar[n]===e&&(this.inventory.get(e)||0)===0&&(this.hotbar[n]="air");return!0}return this.toolDurability.set(e,t),this.render(),!1}equipArmorFromInventory(e){const t=this.activeBlock();if(!t||t==="air"){const s=this.armorSlots[e];s&&(this.addItem(s,1),this.armorSlots[e]=null,this.render());return}if(!Nt[t]||Nt[t].slot!==e)return;const n=this.armorSlots[e];if(n&&this.addItem(n,1),this.armorSlots[e]=t,this.consumeItem(t,1),!this.inventory.has(t))for(let s=0;s<this.hotbar.length;s++)this.hotbar[s]===t&&(this.hotbar[s]="air");this.render()}tryCraft(e){const t=Bh.find(n=>n.name===e);if(!t)return!1;for(const[n,s]of Object.entries(t.in))if((this.inventory.get(n)||0)<s)return!1;for(const[n,s]of Object.entries(t.in))this.inventory.set(n,this.inventory.get(n)-s),this.inventory.get(n)===0&&this.inventory.delete(n);for(const[n,s]of Object.entries(t.out))this.addItem(n,s);return this.render(),!0}moveToHotbar(e){const t=this.hotbar[this.activeSlot];t&&t!=="air"&&this.inventory.set(t,this.inventory.get(t)||0),this.hotbar[this.activeSlot]=e,this.render()}renderOverlay(e){this.overlayEl.textContent=e}_slotIconHtml(e,t=32){const n=Qs(e);if(n.tile!=null){const s=n.tile%16,r=Math.floor(n.tile/16);return`<div class="icon" style="${window.__atlasDataUrl?`background-image:url('${window.__atlasDataUrl}');`:""}--tile-x:${s};--tile-y:${r};width:${t}px;height:${t}px;"></div>`}return`<div class="icon item-icon" style="width:${t}px;height:${t}px;background-color:${n.color||"#888"};font-size:${t*.55}px;line-height:${t}px;text-align:center;">${n.emoji||""}</div>`}_durabilityBar(e,t=40){if(ui.has(e)){const n=Vt[e],r=(this.toolDurability.get(e)??n.maxDurability)/n.maxDurability,o=Math.round(r*120);return`<div style="position:absolute;bottom:2px;left:2px;right:2px;height:3px;background:#333;">
        <div style="width:${(r*100).toFixed(0)}%;height:100%;background:hsl(${o},100%,45%);"></div>
      </div>`}if(Eo.has(e)){const n=Nt[e],r=(this.armorDurability.get(e)??n.maxDurability)/n.maxDurability,o=Math.round(r*120);return`<div style="position:absolute;bottom:2px;left:2px;right:2px;height:3px;background:#333;">
        <div style="width:${(r*100).toFixed(0)}%;height:100%;background:hsl(${o},100%,45%);"></div>
      </div>`}return""}render(){this.hotbarEl.innerHTML=this.hotbar.map((l,c)=>{const h=this.inventory.get(l)||0,u=Qs(l),f=this._durabilityBar(l,40);return`<div class="slot ${c===this.activeSlot?"active":""}" data-slot="${c}" title="${u.label}">
        ${this._slotIconHtml(l,32)}
        <small>${h>0?h:""}</small>
        ${f}
      </div>`}).join(""),this.hotbarEl.querySelectorAll("[data-slot]").forEach(l=>{l.onclick=()=>this.selectSlot(Number(l.dataset.slot))});const e=[...this.inventory.entries()].filter(([,l])=>l>0),t=(l,c)=>{const h=this.armorSlots[l];return`<div class="inv-slot armor-slot" data-armor="${l}" title="${c}${h?": "+(Nt[h]?.name||h):""}" style="background:rgba(0,0,0,0.6);border:2px solid rgba(255,255,255,0.15);">
        ${h?`${this._slotIconHtml(h,24)}`:`<span style="font-size:18px;color:#555;">${c.charAt(0)}</span>`}
        ${h?this._durabilityBar(h,42):""}
        ${h?`<small style="position:absolute;bottom:2px;right:3px;font-size:10px;color:#aaa;">${this.armorDurability.get(h)??Nt[h]?.maxDurability}</small>`:""}
      </div>`};this.inventoryEl.innerHTML=`
      <div style="grid-column:1/-1;text-align:center;font-size:16px;margin-bottom:8px;font-weight:bold;">Inventory</div>
      ${e.map(([l,c])=>{const h=Qs(l),u=this._durabilityBar(l,40);return`<div class="inv-slot" data-item="${l}" draggable="true" title="${h.label}">
          ${this._slotIconHtml(l,24)}
          <small style="position:absolute;bottom:2px;right:3px;font-size:11px;font-weight:bold;color:#fff;text-shadow:1px 1px 0 #000;">${c}</small>
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
    `;let n=null;const s=l=>{const c=l.target.closest(".inv-slot");c&&(n=c.dataset.item,l.dataTransfer.setData("text/plain",n),c.style.opacity="0.5")},r=l=>{const c=l.target.closest(".inv-slot");c&&(c.style.opacity="1"),n=null},o=l=>{l.target.closest(".inv-slot")&&l.preventDefault()},a=l=>{l.preventDefault();const c=l.target.closest(".inv-slot");if(!c)return;const h=c.dataset.item,u=l.dataTransfer.getData("text/plain");if(!u||u===h)return;const f=this.inventory.get(u)||0,p=this.inventory.get(h)||0;this.inventory.set(h,f),this.inventory.set(u,p),this.render()};this.inventoryEl.removeEventListener("dragstart",s),this.inventoryEl.removeEventListener("dragend",r),this.inventoryEl.removeEventListener("dragover",o),this.inventoryEl.removeEventListener("drop",a),this.inventoryEl.addEventListener("dragstart",s),this.inventoryEl.addEventListener("dragend",r),this.inventoryEl.addEventListener("dragover",o),this.inventoryEl.addEventListener("drop",a),this.craftingEl.innerHTML=`
      <div style="font-weight:bold;margin-bottom:6px;font-size:13px;">Crafting</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;">
        ${Bh.map(l=>{const c=Object.entries(l.in).every(([h,u])=>(this.inventory.get(h)||0)>=u);return`<button data-craft="${l.name}" class="${c?"craftable":""}" style="padding:3px 5px;font-size:10px;background:${c?"#3a5a3a":"#555"};border:1px solid ${c?"#6f6":"#888"};color:#fff;cursor:pointer;font-family:monospace;text-align:left;" title="${Object.entries(l.in).map(([h,u])=>`${u}x ${h}`).join(" + ")}">${l.name}</button>`}).join("")}
      </div>
      <div style="margin-top:8px;font-size:10px;color:#aaa;">
        <div style="font-weight:bold;margin-bottom:3px;">Smelting (use Furnace):</div>
        ${Gu.map(l=>`<div>${l.in} → ${l.out} (${l.timeSec}s)</div>`).join("")}
      </div>
    `,this.craftingEl.querySelectorAll("button[data-craft]").forEach(l=>{l.onclick=()=>{const c=this.tryCraft(l.dataset.craft);l.style.background=c?"#383":"#833",setTimeout(()=>this.render(),220)}})}}const Da=.35,Qv=1.8,Oh=.03;class ex{constructor(e){this.camera=e,this.mesh=new ct(new rn(Da,Da,Da),new Vi({color:6203463})),this.mesh.frustumCulled=!1,this.camera.add(this.mesh),this.mesh.position.set(.35,-.25,-.55),this.mesh.rotation.set(0,-.3,.1),this.punchTime=0,this.idlePhase=0}setBlock(e){e&&this.mesh.material.color.setHex(e.color||8947848)}punch(){this.punchTime=.15}update(e){this.idlePhase+=e*Qv;const t=Math.sin(this.idlePhase)*Oh,n=Math.cos(this.idlePhase*.7)*Oh;let s=0;if(this.punchTime>0){this.punchTime-=e;const r=1-this.punchTime/.15;s=r<.4?r*.3:(.15-r)*.15}this.mesh.position.x=.35+t,this.mesh.position.y=-.25+n,this.mesh.position.z=-.55-s}}let Ol=null;function tx(i){Ol=i}function nx(i){return Ol?Ol(i):{label:i,tile:null,color:"#888",emoji:"?"}}const Fi=new Map;function ix(i,e,t){return`${i},${e},${t}`}function ko(i,e,t){const n=ix(i,e,t);return Fi.has(n)||Fi.set(n,{input:null,fuel:null,output:null,burnTimeLeft:0,burnTimeTotal:0,progress:0,activeRecipe:null}),Fi.get(n)}function Xu(i){return Gu.find(e=>e.in===i)||null}function La(i,e=32){const t=nx(i);if(t.tile!=null){const n=t.tile%16,s=Math.floor(t.tile/16);return`<div class="icon" style="${window.__atlasDataUrl?`background-image:url('${window.__atlasDataUrl}');`:""}--tile-x:${n};--tile-y:${s};width:${e}px;height:${e}px;"></div>`}return`<div class="icon item-icon" style="width:${e}px;height:${e}px;background-color:${t.color||"#888"};font-size:${e*.55}px;line-height:${e}px;text-align:center;">${t.emoji||"?"}</div>`}function zo(i,e,t,n){const s=document.getElementById("furnace-panel");if(!s)return;const r=n.burnTimeLeft>0&&n.progress>0?(n.progress*100).toFixed(0):0,o=n.burnTimeLeft>0,a=n.burnTimeLeft>0&&n.activeRecipe;s.innerHTML=`
    <div style="grid-column:1/-1;text-align:center;font-size:16px;margin-bottom:8px;font-weight:bold;">Furnace</div>

    <!-- Input slot -->
    <div class="furnace-slot" id="furnace-input-slot" title="Input">
      ${n.input?`<div class="furnace-item">${La(n.input.name,28)}<small>${n.input.count}</small></div>`:'<div class="furnace-empty">In</div>'}
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
      ${n.output?`<div class="furnace-item">${La(n.output.name,28)}<small>${n.output.count}</small></div>`:'<div class="furnace-empty">Out</div>'}
    </div>

    <!-- Fuel slot -->
    <div class="furnace-slot" id="furnace-fuel-slot" title="Fuel">
      ${n.fuel?`<div class="furnace-item">${La(n.fuel.name,28)}<small>${n.fuel.count}</small></div>`:'<div class="furnace-empty">Fuel</div>'}
      <div class="furnace-flame ${o?"active":""}"></div>
    </div>

    <div class="furnace-fuel-bar">
      <div class="furnace-fuel-fill" style="width:${n.burnTimeTotal>0?n.burnTimeLeft/n.burnTimeTotal*100:0}%"></div>
    </div>

    <div style="grid-column:1/-1;font-size:10px;color:#888;text-align:center;margin-top:4px;">
      Smelt: iron_ore, gold_ore, sand, raw_porkchop, raw_chicken, cobblestone<br>
      Fuel: coal(80s), planks(15s), wood(15s), sticks(5s)
    </div>
  `;const l=s.querySelector("#furnace-input-slot"),c=s.querySelector("#furnace-output-slot"),h=s.querySelector("#furnace-fuel-slot");l&&window._furnacePutItem&&l.addEventListener("click",()=>window._furnacePutItem("input")),c&&window._furnaceTakeItem&&c.addEventListener("click",()=>window._furnaceTakeItem("output")),h&&window._furnacePutItem&&h.addEventListener("click",()=>window._furnacePutItem("fuel"))}function sx(i,e,t){const n=document.getElementById("furnace-panel");if(!n)return;const s=ko(i,e,t);n.dataset.furnaceWx=i,n.dataset.furnaceWy=e,n.dataset.furnaceWz=t,zo(i,e,t,s),n.classList.add("visible")}function kh(){const i=document.getElementById("furnace-panel");i&&i.classList.remove("visible")}function zh(){const i=document.getElementById("furnace-panel");return i?i.classList.contains("visible"):!1}function rx(i,e,t,n,s){const r=document.getElementById("furnace-panel");if(!r||!r.classList.contains("visible"))return;const o=parseInt(r.dataset.furnaceWx),a=parseInt(r.dataset.furnaceWy),l=parseInt(r.dataset.furnaceWz),c=ko(o,a,l),h=s.activeBlock();if(!(!h||h==="air")){if(n==="input"){if(c.input)return;const u=Xu(h);if(!u||!s.consumeItem(h,1))return;c.input={name:h,count:1},c.activeRecipe=u,c.progress||(c.progress=0)}else if(n==="fuel"){if(Wu(h)<=0||!s.consumeItem(h,1))return;c.fuel&&c.fuel.name===h?c.fuel.count++:c.fuel={name:h,count:1}}zo(o,a,l,c)}}function ox(i,e){const t=document.getElementById("furnace-panel");if(!t||!t.classList.contains("visible"))return;const n=parseInt(t.dataset.furnaceWx),s=parseInt(t.dataset.furnaceWy),r=parseInt(t.dataset.furnaceWz),o=ko(n,s,r);i==="output"&&o.output&&(e.addItem(o.output.name,o.output.count),o.output=null),zo(n,s,r,o)}function ax(i){for(const[t,n]of Fi){if(!n.input||!n.activeRecipe){n.progress=0,n.burnTimeLeft>0&&(n.burnTimeLeft-=i),n.burnTimeLeft<=0&&(n.burnTimeLeft=0,n.burnTimeTotal=0);continue}const s=n.activeRecipe;if(!n.input||n.input.name!==s.in){n.activeRecipe=Xu(n.input?.name),n.progress=0,n.burnTimeLeft>0&&(n.burnTimeLeft-=i);continue}if(n.burnTimeLeft<=0&&n.fuel&&n.fuel.count>0){const r=Wu(n.fuel.name);r>0&&(n.fuel.count--,n.fuel.count<=0&&(n.fuel=null),n.burnTimeLeft=r,n.burnTimeTotal=r)}n.burnTimeLeft>0?(n.progress+=i/(s.timeSec||10),n.burnTimeLeft-=i,n.burnTimeLeft<=0&&(n.burnTimeLeft=0,n.burnTimeTotal=0),n.progress>=1&&(n.input.count--,n.input.count<=0&&(n.input=null),n.output&&n.output.name===s.out?n.output.count++:n.output={name:s.out,count:1},n.progress=0,n.input||(n.activeRecipe=null))):n.progress>0&&(n.progress=Math.max(0,n.progress-i*.3))}const e=document.getElementById("furnace-panel");if(e&&e.classList.contains("visible")){const t=parseInt(e.dataset.furnaceWx),n=parseInt(e.dataset.furnaceWy),s=parseInt(e.dataset.furnaceWz);if(!isNaN(t)&&!isNaN(n)&&!isNaN(s)){const r=ko(t,n,s);zo(t,n,s,r)}}}function lx(){const i={};for(const[e,t]of Fi)i[e]={...t};return i}function cx(i){if(i){Fi.clear();for(const[e,t]of Object.entries(i))Fi.set(e,{...t})}}const de=16,_n=128,to=[{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]},{dir:[1,0,0],corners:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{dir:[-1,0,0],corners:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{dir:[0,-1,0],corners:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]}],hx=[[[[-1,0,1],[0,-1,1],[-1,-1,1]],[[1,0,1],[0,-1,1],[1,-1,1]],[[1,0,1],[0,1,1],[1,1,1]],[[-1,0,1],[0,1,1],[-1,1,1]]],[[[1,0,-1],[0,-1,-1],[1,-1,-1]],[[-1,0,-1],[0,-1,-1],[-1,-1,-1]],[[-1,0,-1],[0,1,-1],[-1,1,-1]],[[1,0,-1],[0,1,-1],[1,1,-1]]],[[[1,0,1],[1,-1,0],[1,-1,1]],[[1,0,-1],[1,-1,0],[1,-1,-1]],[[1,0,-1],[1,1,0],[1,1,-1]],[[1,0,1],[1,1,0],[1,1,1]]],[[[-1,0,-1],[-1,-1,0],[-1,-1,-1]],[[-1,0,1],[-1,-1,0],[-1,-1,1]],[[-1,0,1],[-1,1,0],[-1,1,1]],[[-1,0,-1],[-1,1,0],[-1,1,-1]]],[[[-1,1,0],[0,1,1],[-1,1,1]],[[1,1,0],[0,1,1],[1,1,1]],[[1,1,0],[0,1,-1],[1,1,-1]],[[-1,1,0],[0,1,-1],[-1,1,-1]]],[[[-1,-1,0],[0,-1,-1],[-1,-1,-1]],[[1,-1,0],[0,-1,-1],[1,-1,-1]],[[1,-1,0],[0,-1,1],[1,-1,1]],[[-1,-1,0],[0,-1,1],[-1,-1,1]]]],ux=[.5,.7,.85,1],fx=[.85,.85,.75,.75,1,.6],Ia=16,dx=4;let Gn=new Vi({color:16777215,vertexColors:!0}),kl=null;const qu={value:0};let zl=null,Hl=null;function Hh(i){i.magFilter=Rt,i.minFilter=Rt,i.generateMipmaps=!1,i.colorSpace=Ft,Gn=new Vi({map:i,transparent:!1,vertexColors:!0}),kl=new Ht({uniforms:{uTime:qu,uTexture:{value:i}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1}),zl=new In({map:i,vertexColors:!0,transparent:!0,alphaTest:.5,side:cn}),Hl=new Vi({map:i,vertexColors:!0,transparent:!0,alphaTest:.5,side:cn})}function px(i){qu.value=i}function Ua(i,e){return i?.tex?e===4&&i.tex.top!==void 0?i.tex.top:e===5&&i.tex.bottom!==void 0?i.tex.bottom:i.tex.side!==void 0?i.tex.side:i.tex.all!==void 0?i.tex.all:1:1}function no(i,e){const t=e%Ia,n=Math.floor(e/Ia),s=1/Ia,r=1/dx,o=s*.02,a=r*.02,l=t*s+o,c=1-(n+1)*r+a,h=(t+1)*s-o,u=1-n*r-a;i.push(l,c,h,c,h,u,l,u)}class Vh{constructor(e,t){this.cx=e,this.cz=t,this.key=`${e},${t}`,this.blocks=new Uint16Array(de*_n*de),this.mesh=null,this.liquidMesh=null,this.emissiveMesh=null,this.decorationMesh=null,this.dirty=!0}idx(e,t,n){return e+de*(n+de*t)}get(e,t,n){return this.blocks[this.idx(e,t,n)]||0}set(e,t,n,s){this.blocks[this.idx(e,t,n)]=s,this.dirty=!0}buildMesh(e){const t=[],n=[],s=[],r=[];let o=0;const a=[],l=[],c=[],h=[];let u=0;const f=[],p=[],g=[],d=[];let _=0;const m=[],T=[],E=[];let S=0;for(let b=0;b<_n;b++)for(let R=0;R<de;R++)for(let I=0;I<de;I++){const y=this.get(I,b,R);if(!y)continue;const x=Nl[y];if(!x)continue;if(x.decoration){const B=this.cx*de+I,V=this.cz*de+R;if(x.id===19){const Y=[[[0,0,.5],[1,0,.5],[1,1,.5],[0,1,.5]],[[.5,0,0],[.5,0,1],[.5,1,1],[.5,1,0]]];for(const q of Y){for(const[J,k,ne]of q)a.push(B+J,b+k,V+ne),c.push(1,.9,.65);no(l,28),h.push(u,u+1,u+2,u,u+2,u+3),h.push(u+2,u+1,u,u+3,u+2,u),u+=4}}else{const Y=Ua(x,2),q=[[[0,0,.5],[1,0,.5],[1,1,.5],[0,1,.5]],[[.5,0,0],[.5,0,1],[.5,1,1],[.5,1,0]]];for(const J of q){for(const[k,ne,le]of J)if(f.push(B+k,b+ne,V+le),x.biomeTint){const ue=e.generator.biomeColor(B,V);g.push(ue.r,ue.g,ue.b)}else g.push(1,1,1);no(p,Y),d.push(_,_+1,_+2,_,_+2,_+3),d.push(_+2,_+1,_,_+3,_+2,_),_+=4}}continue}if(x.liquid){for(let B=0;B<to.length;B++){const V=to[B],Y=I+V.dir[0],q=b+V.dir[1],J=R+V.dir[2],k=e.getBlock(this.cx*de+Y,q,this.cz*de+J);if(!(k&&(k.solid||k.liquid))){for(const[ne,le,ue]of V.corners){let Ne=b+le;B===4&&x.liquid&&(Ne-=.125),m.push(this.cx*de+I+ne,Ne,this.cz*de+R+ue)}no(T,Ua(x,B)),E.push(S,S+1,S+2,S,S+2,S+3),S+=4}}continue}const P=this.cx*de+I,F=this.cz*de+R;for(let B=0;B<to.length;B++){const V=to[B],Y=I+V.dir[0],q=b+V.dir[1],J=R+V.dir[2],k=e.getBlock(this.cx*de+Y,q,this.cz*de+J);if(k&&k.solid&&!k.decoration&&!(x.transparent&&k.transparent))continue;const ne=[];for(let ue=0;ue<4;ue++){const[Ne,We,Je]=hx[B][ue],Ve=e.getBlock(P+Ne[0],b+Ne[1],F+Ne[2])?.solid?1:0,j=e.getBlock(P+We[0],b+We[1],F+We[2])?.solid?1:0,Q=e.getBlock(P+Je[0],b+Je[1],F+Je[2])?.solid?1:0;ne.push(Ve&&j?0:3-Ve-j-Q)}const le=fx[B];for(let ue=0;ue<4;ue++){const[Ne,We,Je]=V.corners[ue];t.push(P+Ne,b+We,F+Je);const Ve=ux[ne[ue]]*le;if(x.biomeTint){const j=e.generator.biomeColor(P,F);s.push(Ve*j.r,Ve*j.g,Ve*j.b)}else s.push(Ve,Ve,Ve)}no(n,Ua(x,B)),ne[0]+ne[2]>ne[1]+ne[3]?r.push(o,o+1,o+2,o,o+2,o+3):r.push(o,o+1,o+3,o+1,o+2,o+3),o+=4}}const A=new Bt;if(A.setAttribute("position",new ft(t,3)),A.setAttribute("uv",new ft(n,2)),A.setAttribute("color",new ft(s,3)),A.setIndex(r),A.computeVertexNormals(),this.mesh?(this.mesh.geometry.dispose(),this.mesh.geometry=A,this.mesh.material=Gn):(this.mesh=new ct(A,Gn),this.mesh.frustumCulled=!0,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0),a.length>0){const b=new Bt;b.setAttribute("position",new ft(a,3)),b.setAttribute("uv",new ft(l,2)),b.setAttribute("color",new ft(c,3)),b.setIndex(h),b.computeVertexNormals(),this.emissiveMesh?(this.emissiveMesh.geometry.dispose(),this.emissiveMesh.geometry=b,this.emissiveMesh.material=zl||Gn):(this.emissiveMesh=new ct(b,zl||Gn),this.emissiveMesh.frustumCulled=!0)}else this.emissiveMesh&&(this.emissiveMesh.geometry.dispose(),this.emissiveMesh=null);if(f.length>0){const b=new Bt;b.setAttribute("position",new ft(f,3)),b.setAttribute("uv",new ft(p,2)),b.setAttribute("color",new ft(g,3)),b.setIndex(d),b.computeVertexNormals(),this.decorationMesh?(this.decorationMesh.geometry.dispose(),this.decorationMesh.geometry=b,this.decorationMesh.material=Hl||Gn):(this.decorationMesh=new ct(b,Hl||Gn),this.decorationMesh.frustumCulled=!0)}else this.decorationMesh&&(this.decorationMesh.geometry.dispose(),this.decorationMesh=null);if(m.length>0){const b=new Bt;b.setAttribute("position",new ft(m,3)),b.setAttribute("uv",new ft(T,2)),b.setIndex(E),b.computeVertexNormals(),this.liquidMesh?(this.liquidMesh.geometry.dispose(),this.liquidMesh.geometry=b,this.liquidMesh.material=kl||Gn):(this.liquidMesh=new ct(b,kl||Gn),this.liquidMesh.frustumCulled=!0,this.liquidMesh.receiveShadow=!0)}else this.liquidMesh&&(this.liquidMesh.geometry.dispose(),this.liquidMesh=null);return this.dirty=!1,{mesh:this.mesh,liquidMesh:this.liquidMesh,emissiveMesh:this.emissiveMesh,decorationMesh:this.decorationMesh}}disposeMesh(){this.mesh&&(this.mesh.geometry.dispose(),this.mesh=null),this.liquidMesh&&(this.liquidMesh.geometry.dispose(),this.liquidMesh=null),this.emissiveMesh&&(this.emissiveMesh.geometry.dispose(),this.emissiveMesh=null),this.decorationMesh&&(this.decorationMesh.geometry.dispose(),this.decorationMesh=null)}}function mx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Na={exports:{}},Gh;function gx(){return Gh||(Gh=1,(function(i){(function(e){function t(c){function h(u,f,p){this.x=u,this.y=f,this.z=p}h.prototype.dot2=function(u,f){return this.x*u+this.y*f},h.prototype.dot3=function(u,f,p){return this.x*u+this.y*f+this.z*p},this.grad3=[new h(1,1,0),new h(-1,1,0),new h(1,-1,0),new h(-1,-1,0),new h(1,0,1),new h(-1,0,1),new h(1,0,-1),new h(-1,0,-1),new h(0,1,1),new h(0,-1,1),new h(0,1,-1),new h(0,-1,-1)],this.p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],this.perm=new Array(512),this.gradP=new Array(512),this.seed(c||0)}t.prototype.seed=function(c){c>0&&c<1&&(c*=65536),c=Math.floor(c),c<256&&(c|=c<<8);for(var h=this.p,u=0;u<256;u++){var f;u&1?f=h[u]^c&255:f=h[u]^c>>8&255;var p=this.perm,g=this.gradP;p[u]=p[u+256]=f,g[u]=g[u+256]=this.grad3[f%12]}};var n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,r=1/3,o=1/6;t.prototype.simplex2=function(c,h){var u,f,p,g=(c+h)*n,d=Math.floor(c+g),_=Math.floor(h+g),m=(d+_)*s,T=c-d+m,E=h-_+m,S,A;T>E?(S=1,A=0):(S=0,A=1);var b=T-S+s,R=E-A+s,I=T-1+2*s,y=E-1+2*s;d&=255,_&=255;var x=this.perm,P=this.gradP,F=P[d+x[_]],B=P[d+S+x[_+A]],V=P[d+1+x[_+1]],Y=.5-T*T-E*E;Y<0?u=0:(Y*=Y,u=Y*Y*F.dot2(T,E));var q=.5-b*b-R*R;q<0?f=0:(q*=q,f=q*q*B.dot2(b,R));var J=.5-I*I-y*y;return J<0?p=0:(J*=J,p=J*J*V.dot2(I,y)),70*(u+f+p)},t.prototype.simplex3=function(c,h,u){var f,p,g,d,_=(c+h+u)*r,m=Math.floor(c+_),T=Math.floor(h+_),E=Math.floor(u+_),S=(m+T+E)*o,A=c-m+S,b=h-T+S,R=u-E+S,I,y,x,P,F,B;A>=b?b>=R?(I=1,y=0,x=0,P=1,F=1,B=0):A>=R?(I=1,y=0,x=0,P=1,F=0,B=1):(I=0,y=0,x=1,P=1,F=0,B=1):b<R?(I=0,y=0,x=1,P=0,F=1,B=1):A<R?(I=0,y=1,x=0,P=0,F=1,B=1):(I=0,y=1,x=0,P=1,F=1,B=0);var V=A-I+o,Y=b-y+o,q=R-x+o,J=A-P+2*o,k=b-F+2*o,ne=R-B+2*o,le=A-1+3*o,ue=b-1+3*o,Ne=R-1+3*o;m&=255,T&=255,E&=255;var We=this.perm,Je=this.gradP,Ve=Je[m+We[T+We[E]]],j=Je[m+I+We[T+y+We[E+x]]],Q=Je[m+P+We[T+F+We[E+B]]],xe=Je[m+1+We[T+1+We[E+1]]],Ie=.5-A*A-b*b-R*R;Ie<0?f=0:(Ie*=Ie,f=Ie*Ie*Ve.dot3(A,b,R));var ye=.5-V*V-Y*Y-q*q;ye<0?p=0:(ye*=ye,p=ye*ye*j.dot3(V,Y,q));var $e=.5-J*J-k*k-ne*ne;$e<0?g=0:($e*=$e,g=$e*$e*Q.dot3(J,k,ne));var bt=.5-le*le-ue*ue-Ne*Ne;return bt<0?d=0:(bt*=bt,d=bt*bt*xe.dot3(le,ue,Ne)),32*(f+p+g+d)};function a(c){return c*c*c*(c*(c*6-15)+10)}function l(c,h,u){return(1-u)*c+u*h}t.prototype.perlin2=function(c,h){var u=Math.floor(c),f=Math.floor(h);c=c-u,h=h-f,u=u&255,f=f&255;var p=this.perm,g=this.gradP,d=g[u+p[f]].dot2(c,h),_=g[u+p[f+1]].dot2(c,h-1),m=g[u+1+p[f]].dot2(c-1,h),T=g[u+1+p[f+1]].dot2(c-1,h-1),E=a(c);return l(l(d,m,E),l(_,T,E),a(h))},t.prototype.perlin3=function(c,h,u){var f=Math.floor(c),p=Math.floor(h),g=Math.floor(u);c=c-f,h=h-p,u=u-g,f=f&255,p=p&255,g=g&255;var d=this.perm,_=this.gradP,m=_[f+d[p+d[g]]].dot3(c,h,u),T=_[f+d[p+d[g+1]]].dot3(c,h,u-1),E=_[f+d[p+1+d[g]]].dot3(c,h-1,u),S=_[f+d[p+1+d[g+1]]].dot3(c,h-1,u-1),A=_[f+1+d[p+d[g]]].dot3(c-1,h,u),b=_[f+1+d[p+d[g+1]]].dot3(c-1,h,u-1),R=_[f+1+d[p+1+d[g]]].dot3(c-1,h-1,u),I=_[f+1+d[p+1+d[g+1]]].dot3(c-1,h-1,u-1),y=a(c),x=a(h),P=a(u);return l(l(l(m,A,y),l(T,b,y),P),l(l(E,R,y),l(S,I,y),P),x)},e.Noise=t})(i.exports)})(Na)),Na.exports}var _x=gx();const vx=mx(_x),{Noise:xx}=vx,Li=34;class Mx{constructor(e=1337){this.seed=e,this.noise=new xx(e)}heightAt(e,t){const n=this.noise.perlin2(e/200,t/200)*12,s=this.noise.perlin2(e/80+500,t/80+500)*8,r=this.noise.perlin2(e/18+1e3,t/18+1e3)*4,o=Math.abs(this.noise.perlin2(e/45+2e3,t/45+2e3)),a=(1-o)*(1-o)*22,l=this.noise.perlin2(e/120+3e3,t/120+3e3),c=l>.4?(l-.4)*-10:0,h=48+n+s+r+a+c;return Math.max(3,Math.floor(h))}biomeAt(e,t,n){const s=this.noise.perlin2((e+999)/180,(t+999)/180),r=this.noise.perlin2((e-500)/160,(t+1200)/160);return n!==void 0&&n>=Li&&n<=Li+3?s<-.3?"snow":"beach":s>.45&&r<.3?"desert":s<-.3&&r>.1?"snow":s>.3&&r>.4?"jungle":s>0&&r>.35&&s<.5?"swamp":s>-.1&&s<.3&&r>.2?"forest":s<-.1&&s>=-.35&&r>0?"taiga":r<-.25&&s>.1?"savanna":"plains"}biomeColor(e,t){const n=this.biomeAt(e,t);return n==="desert"?{r:.85,g:.78,b:.48}:n==="snow"?{r:.65,g:.85,b:.92}:n==="jungle"?{r:.22,g:.78,b:.22}:n==="swamp"?{r:.42,g:.55,b:.3}:n==="taiga"?{r:.38,g:.62,b:.4}:n==="forest"?{r:.32,g:.72,b:.28}:n==="savanna"?{r:.72,g:.72,b:.32}:n==="beach"?{r:.8,g:.78,b:.55}:{r:.52,g:.78,b:.35}}oreAt(e,t,n){const s=this.noise.perlin3(e/11,t/11,n/11);return t<12&&s>.68?"diamond_ore":t<24&&s>.65?"gold_ore":t<40&&s>.62?"iron_ore":t<60&&s>.53?"coal_ore":null}isCave(e,t,n){if(t<=1)return!1;const s=Math.max(0,(58-t)/58)*.15,r=e+500,o=t+500,a=n+500;if(this.noise.perlin3(r*.05,o*.03,a*.05)+s>.5)return!0;const c=e+1e3,h=t+1e3,u=n+1e3,f=this.noise.perlin3(c*.04,h*.02,u*.04);return Math.abs(f)<.04+s*.15}_hash2D(e,t){let n=e*374761393+t*668265263+this.seed*2654435761>>>0;return n=(n^n>>13)>>>0,n=n*1274126177>>>0,(n&65535)/65535}shouldPlaceVillage(e,t){const n=Math.floor(e/3),s=Math.floor(t/3);return this._hash2D(n*7+3,s*11+5)>.968}getVillageCenter(e,t){const n=Math.floor(e/3),s=Math.floor(t/3),r=Math.floor(this._hash2D(n*13+7,s*17+11)*32),o=Math.floor(this._hash2D(n*19+3,s*5+13)*32);return{wx:n*3*16+8+r,wz:s*3*16+8+o}}shouldPlaceDungeon(e,t){return this._hash2D(e*7+3,t*11+5)>.985}shouldPlacePyramid(e,t){return this._hash2D(e*13+7,t*17+11)>.975}generateVillage(e,t,n,s){const{wx:r,wz:o}=this.getVillageCenter(n,s),a=e.getSurfaceY(r,o),l=this.biomeAt(r,o,a);if(l!=="plains"&&l!=="desert")return;let c=!0;for(let f=-16;f<=16;f+=8){for(let p=-16;p<=16;p+=8){const g=e.getSurfaceY(r+f,o+p);if(Math.abs(g-a)>4){c=!1;break}}if(!c)break}if(!c)return;const h=a+1,u=[{rx:-12,rz:-12},{rx:0,rz:-14},{rx:12,rz:-10},{rx:-14,rz:0},{rx:0,rz:0},{rx:14,rz:2},{rx:-10,rz:12},{rx:4,rz:14}];for(const{rx:f,rz:p}of u){const g=r+f,d=o+p,_=e.getSurfaceY(g,d)+1,m=Math.round((h+_)/2);this._buildSmallHouse(e,g,m,d)}this._buildPaths(e,r,h,o,u)}_buildSmallHouse(e,t,n,s){const r=t-2,o=s-2,a="cobblestone",l="planks",c="wood",h="glass",u="planks";for(let f=0;f<5;f++)for(let p=0;p<5;p++){for(let g=0;g<6;g++)e.setBlock(r+f,n+g,o+p,"air");e.setBlock(r+f,n,o+p,a)}for(let f=1;f<=3;f++)for(let p=0;p<5;p++)for(let g=0;g<5;g++)if(p===0||p===4||g===0||g===4){const d=(p===0||p===4)&&(g===0||g===4);if(g===4&&p===2&&(f===1||f===2))continue;if(f===2&&g===0&&(p===1||p===3)){e.setBlock(r+p,n+f,o+g,h);continue}if(f===2&&p===4&&(g===1||g===3)){e.setBlock(r+p,n+f,o+g,h);continue}if(f===2&&p===0&&(g===1||g===3)){e.setBlock(r+p,n+f,o+g,h);continue}e.setBlock(r+p,n+f,o+g,d?c:l)}for(let f=0;f<5;f++)for(let p=0;p<5;p++)e.setBlock(r+f,n+4,o+p,u);for(let f=1;f<=3;f++)e.setBlock(r+f,n+5,o+1,u),e.setBlock(r+f,n+5,o+2,u),e.setBlock(r+f,n+5,o+3,u);e.setBlock(r+2,n+2,o+2,"torch")}_buildPaths(e,t,n,s,r){for(const{rx:o,rz:a}of r){const l=t+o,c=s+a;let h=t,u=s;for(;Math.abs(h-l)>1||Math.abs(u-c)>1;){const f=Math.sign(l-h),p=Math.sign(c-u);Math.abs(l-h)>Math.abs(c-u)?h+=f:(Math.abs(c-u)>Math.abs(l-h)||(h+=f),u+=p);const g=e.getSurfaceY(h,u)+1;e.setBlock(h,g,u,"gravel")}}for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++){const l=e.getSurfaceY(t+o,s+a)+1;e.setBlock(t+o,l,s+a,"gravel")}}generateDungeon(e,t,n,s){const r=Math.floor(this._hash2D(n*5+3,s*7+11)*10)+3,o=Math.floor(this._hash2D(n*9+7,s*3+13)*10)+3,a=Math.floor(this._hash2D(n*11+1,s*13+5)*20)+10,l=n*16+r,c=s*16+o,h=e.getSurfaceY(l,c);if(a>h-6)return;const u=l-3,f=c-3;for(let p=0;p<6;p++)for(let g=0;g<7;g++)for(let d=0;d<7;d++)g===0||g===6||d===0||d===6||p===0||p===5?(g===0||g===6)&&(d===0||d===6)||this._hash2D((u+g)*3+7,(f+d)*5+1)>.7?e.setBlock(u+g,a+p,f+d,"mossy_cobblestone"):e.setBlock(u+g,a+p,f+d,"cobblestone"):e.setBlock(u+g,a+p,f+d,"air");e.setBlock(l,a+1,c,"mossy_cobblestone"),e.setBlock(l+1,a+1,c+1,"crafting_table"),e.setBlock(l-1,a+1,c-1,"crafting_table"),e.setBlock(l+2,a+2,c,"torch")}generatePyramid(e,t,n,s){const r=Math.floor(this._hash2D(n*3+1,s*7+5)*8)+4,o=Math.floor(this._hash2D(n*5+9,s*3+2)*8)+4,a=n*16+r,l=s*16+o,c=e.getSurfaceY(a,l);if(this.biomeAt(a,l,c)!=="desert")return;const u=c+1,f=4;for(let T=0;T<=f;T++){const E=(f-T)*2+1,S=T;for(let A=0;A<E;A++)for(let b=0;b<E;b++)e.setBlock(a-f+S+A,u+T,l-f+S+b,"sandstone")}const p=u-3;for(let T=0;T<3;T++)for(let E=-1;E<=1;E++)for(let S=-1;S<=1;S++)e.setBlock(a+E,p+T,l+S,"air");for(let T=0;T<3;T++)for(let E=-2;E<=2;E++)for(let S=-2;S<=2;S++)(Math.abs(E)===2||Math.abs(S)===2)&&e.setBlock(a+E,p+T,l+S,"sandstone");for(let T=-1;T<=1;T++)for(let E=-1;E<=1;E++)e.setBlock(a+T,p-1,l+E,"sandstone"),e.setBlock(a+T,p+3,l+E,"sandstone");e.setBlock(a,p,l,"gold_block"),e.setBlock(a+1,p,l,"diamond_block"),e.setBlock(a-1,p,l,"diamond_block"),e.setBlock(a,p,l+1,"gold_block"),e.setBlock(a,p,l-1,"gold_block"),e.setBlock(a,p+1,l,"torch");const g=Math.floor(this._hash2D(a+3,l+7)*4),d=[[1,0],[-1,0],[0,1],[0,-1]],[_,m]=d[g];e.setBlock(a+_*f,u+1,l+m*f,"air"),e.setBlock(a+_*f,u,l+m*f,"air"),e.setBlock(a+_,p+2,l+m,"air"),e.setBlock(a+_,p+1,l+m,"air"),e.setBlock(a+_,p,l+m,"air")}}class pr{constructor(e=1337){this.seed=e,this.generator=new Mx(e),this.chunks=new Map,this.listeners=new Set,this._inStructureGen=!1}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emitChange(e){this.listeners.forEach(t=>t(e))}chunkKey(e,t){return`${e},${t}`}hash2D(e,t){let n=e*374761393+t*668265263+this.seed*2654435761>>>0;return n=(n^n>>13)>>>0,n=n*1274126177>>>0,(n&65535)/65535}_bid(e){return ve[e]?.id??0}_treeSpot(e,t,n=4.5,s=.35){return Math.abs(e)<=6&&Math.abs(t)<=6?!1:this.generator.noise.perlin2(e/n,t/n)>s}shouldPlaceTree(e,t,n,s){return n<=3||Math.abs(e)<=6&&Math.abs(t)<=6?!1:s==="jungle"?this.generator.noise.perlin2((e+900)/30,(t-600)/30)<-.1?!1:this._treeSpot(e,t,3.5,.3):s==="taiga"?this._treeSpot(e,t,5,.38):s==="swamp"?this._treeSpot(e,t,5,.4):s==="forest"?this.generator.noise.perlin2((e+1200)/50,(t-800)/50)<.1?!1:this._treeSpot(e,t,4.5,.35):s==="plains"?this._treeSpot(e,t,8,.55):s==="savanna"?this._treeSpot(e,t,10,.65):!1}shouldPlaceCactus(e,t,n,s){return s!=="desert"||n<=22||Math.abs(e)<=6&&Math.abs(t)<=6?!1:this._treeSpot(e,t,6,.6)}shouldPlaceDeadBush(e,t,n,s){return s!=="desert"||n<=22||Math.abs(e)<=6&&Math.abs(t)<=6?!1:this._treeSpot(e,t,5,.55)}_generateTerrain(e,t){const n=new Vh(e,t),s=[],r=[],o=[];for(let a=0;a<de;a++)for(let l=0;l<de;l++){const c=e*de+l,h=t*de+a,u=this.generator.heightAt(c,h),f=this.generator.biomeAt(c,h,u);for(let p=0;p<_n;p++){let g=0;if(p===0){g=ve.bedrock.id,n.set(l,p,a,g);continue}if(p<=u){p===u?f==="desert"?g=ve.sand.id:f==="snow"?g=ve.snow.id:f==="beach"?g=this.hash2D(c+a,h-l)>.5?ve.sand.id:ve.gravel.id:f==="swamp"?u<=Li+1&&this.generator.noise.perlin2(c*.5,h*.5)>.3?g=ve.water.id:g=ve.grass.id:f==="taiga"&&this.generator.noise.perlin2(c*.7+100,h*.7)>.4?g=ve.snow.id:g=ve.grass.id:p>=u-3?f==="desert"||f==="beach"?g=ve.sand.id:g=ve.dirt.id:g=ve.stone.id;const d=p<u-4?this.generator.oreAt(c,p,h):null;d&&(g=ve[d].id)}g!==0&&p>1&&p<u-1&&p>20&&this.generator.isCave(c,p,h)&&(g=0),p<=Li&&p>u&&(g=ve.water.id),n.set(l,p,a,g)}if(f!=="desert"&&f!=="beach"&&u>Li+1){const p=this.generator.noise.perlin2(c*.3+777,h*.3+777),g=this.hash2D(c*17+3,h*13+7);if(p>.68)u+1<_n&&n.set(l,u+1,a,ve.tallgrass.id);else if(p>.63){let d;f==="plains"||f==="savanna"?g>.75?d=ve.flower_red.id:g>.5?d=ve.flower_yellow.id:g>.25?d=ve.flower_blue.id:d=ve.flower_magenta.id:f==="forest"?d=g>.5?ve.flower_red.id:ve.flower_blue.id:d=g>.5?ve.flower_red.id:ve.flower_yellow.id,u+1<_n&&n.set(l,u+1,a,d)}else if(p<-.78&&(f==="forest"||f==="swamp")&&u+1<_n){const d=g>.5?ve.mushroom_red.id:ve.mushroom_brown.id;n.set(l,u+1,a,d)}(f==="plains"||f==="savanna")&&p<-.85&&g>.6&&u+1<_n&&n.set(l,u+1,a,ve.pumpkin.id)}this.shouldPlaceTree(c,h,u,f)&&s.push({wx:c,wz:h,h:u,biome:f}),this.shouldPlaceCactus(c,h,u,f)&&r.push({wx:c,wz:h,h:u}),this.shouldPlaceDeadBush(c,h,u,f)&&o.push({wx:c,wz:h,h:u})}if(!this._inStructureGen){this._inStructureGen=!0;try{this.generator.shouldPlaceVillage(e,t)&&this.generator.generateVillage(this,n,e,t),this.generator.shouldPlaceDungeon(e,t)&&this.generator.generateDungeon(this,n,e,t),this.generator.shouldPlacePyramid(e,t)&&this.generator.generatePyramid(this,n,e,t)}finally{this._inStructureGen=!1}}return{chunk:n,treePositions:s,cactusPositions:r,deadBushPositions:o}}_applyOakTree(e,t,n){const s=4+Math.floor(this.hash2D(e*3+1,t*5+7)*3);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,ve.wood.id,!1);const r=n+s;for(let a=-2;a<=2;a++)for(let l=-2;l<=2;l++)Math.abs(l)===2&&Math.abs(a)===2||this._setBlockIfChunkExists(e+l,r-1,t+a,ve.leaves.id,!0);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++)this._setBlockIfChunkExists(e+l,r,t+a,ve.leaves.id,!0);this._setBlockIfChunkExists(e,r+1,t,ve.leaves.id,!0);const o=[[1,0,e*7+3,t*11+2],[-1,0,e*13+5,t*7+9],[0,1,e*5+11,t*17+3],[0,-1,e*19+7,t*3+13]];for(const[a,l,c,h]of o)this.hash2D(c,h)>.3&&this._setBlockIfChunkExists(e+a,r+1,t+l,ve.leaves.id,!0)}_applyTree(e,t,n,s){s==="jungle"?this._applyJungleTree(e,t,n):s==="taiga"?this._applySpruceTree(e,t,n):s==="swamp"?this._applySwampTree(e,t,n):this._applyOakTree(e,t,n)}_applyJungleTree(e,t,n){const s=8+Math.floor(this.hash2D(e*3+1,t*5+7)*5);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,ve.wood.id,!1),this._setBlockIfChunkExists(e+1,a,t,ve.wood.id,!1),this._setBlockIfChunkExists(e,a,t+1,ve.wood.id,!1),this._setBlockIfChunkExists(e+1,a,t+1,ve.wood.id,!1);const r=n+s,o=ve.leaves.id;for(let a=-3;a<=4;a++)for(let l=-3;l<=4;l++)Math.abs(a-.5)+Math.abs(l-.5)<4.5&&this._setBlockIfChunkExists(e+a,r-2,t+l,o,!0);for(let a=-3;a<=4;a++)for(let l=-3;l<=4;l++)Math.abs(a-.5)+Math.abs(l-.5)<4&&(this._setBlockIfChunkExists(e+a,r-1,t+l,o,!0),this._setBlockIfChunkExists(e+a,r,t+l,o,!0));for(let a=1;a<=3;a++){const l=4-a;for(let c=-l;c<=l+1;c++)for(let h=-l;h<=l+1;h++)Math.abs(c-.5)+Math.abs(h-.5)<l+.5&&this._setBlockIfChunkExists(e+c,r+a,t+h,o,!0)}for(let a=0;a<8;a++){const l=e-3+Math.floor(this.hash2D(e+a*7,t+a*3)*7),c=t-3+Math.floor(this.hash2D(e+a*5,t+a*9)*7),h=1+Math.floor(this.hash2D(e+a,t+a*2)*4);for(let u=0;u<h;u++)this._setBlockIfChunkExists(l,r-1-u,c,ve.vines.id,!0)}}_applySpruceTree(e,t,n){const s=6+Math.floor(this.hash2D(e*7+3,t*9+2)*5);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,ve.wood.id,!1);const r=n+s,o=ve.leaves.id;for(let a=0;a<6;a++){const l=3-a;if(l<0)break;const c=r-1+a;for(let h=-l;h<=l;h++)for(let u=-l;u<=l;u++)Math.abs(h)+Math.abs(u)<=l+1&&this._setBlockIfChunkExists(e+h,c,t+u,o,!0)}this._setBlockIfChunkExists(e,r+3,t,o,!0),this._setBlockIfChunkExists(e,r+4,t,o,!0)}_applySwampTree(e,t,n){const s=3+Math.floor(this.hash2D(e*3+1,t*5+7)*3);for(let a=n+1;a<=n+s;a++)this._setBlockIfChunkExists(e,a,t,ve.wood.id,!1);const r=n+s,o=ve.leaves.id;for(let a=-1;a<=2;a++){const l=a<=0?2:3-a;for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)Math.abs(c)+Math.abs(h)<=l+.5&&this._setBlockIfChunkExists(e+c,r+a,t+h,o,!0)}for(let a=0;a<6;a++){const l=[[1,0],[-1,0],[0,1],[0,-1]][a%4],c=2+Math.floor(this.hash2D(e+a,t+a*2)*3);for(let h=0;h<c;h++)this._setBlockIfChunkExists(e+l[0]*2,r-h,t+l[1]*2,ve.vines.id,!0)}}_applyCactus(e,t,n){const s=2+Math.floor(this.hash2D(e*2+1,t*3+7)*2);for(let r=0;r<s;r++)this._setBlockIfChunkExists(e,n+1+r,t,ve.wood.id,!0);if(s>=3&&this.hash2D(e*5+3,t*11+2)>.5){const r=this.hash2D(e*7+1,t*3+5)>.5?1:-1;this._setBlockIfChunkExists(e+r,n+s-1,t,ve.wood.id,!0),this._setBlockIfChunkExists(e+r,n+s-2,t,ve.wood.id,!0)}}_applyDeadBush(e,t,n){this._setBlockIfChunkExists(e,n+1,t,ve.dead_bush.id,!0)}_applyFlowingWater(e,t,n){const s=ve.water.id,r=[];for(let a=0;a<de;a++)for(let l=0;l<de;l++){const c=t*de+l,h=n*de+a;for(let u=Li;u>=Li-6;u--){const f=e.get(l,u,a);if(f===s){const p=[[1,0],[-1,0],[0,1],[0,-1]];for(const[g,d]of p){const _=c+g,m=h+d,T=this.getBlock(_,u,m),E=this.getBlock(_,u-1,m);!T.solid&&!T.liquid&&E.solid&&r.push({wx:_,wy:u,wz:m,dist:1})}break}if(f!==0&&f!==s)break}}const o=new Set;for(;r.length>0;){const a=r.shift(),l=`${a.wx},${a.wy},${a.wz}`;if(o.has(l)||(o.add(l),this.setBlock(a.wx,a.wy,a.wz,"water"),a.dist>=4))continue;const c=[[1,0],[-1,0],[0,1],[0,-1]];for(const[h,u]of c){const f=a.wx+h,p=a.wz+u,g=`${f},${a.wy},${p}`;if(o.has(g))continue;const d=this.getBlock(f,a.wy,p),_=this.getBlock(f,a.wy-1,p);!d.solid&&!d.liquid&&_.solid&&r.push({wx:f,wy:a.wy,wz:p,dist:a.dist+1})}}}getOrCreateChunk(e,t){const n=this.chunkKey(e,t);if(this.chunks.has(n))return this.chunks.get(n);const{chunk:s,treePositions:r,cactusPositions:o,deadBushPositions:a}=this._generateTerrain(e,t);this.chunks.set(n,s);for(const{wx:l,wz:c,h,biome:u}of r)this._applyTree(l,c,h,u);for(const{wx:l,wz:c,h}of o)this._applyCactus(l,c,h);for(const{wx:l,wz:c,h}of a)this._applyDeadBush(l,c,h);return this._applyFlowingWater(s,e,t),s}getChunk(e,t){return this.chunks.get(this.chunkKey(e,t))}_setBlockIfChunkExists(e,t,n,s,r=!1){if(t<0||t>=_n)return;const o=Math.floor(e/de),a=Math.floor(n/de);let l=this.getChunk(o,a);if(!l){const u=this._generateTerrain(o,a);this.chunks.set(this.chunkKey(o,a),u.chunk),l=u.chunk}const c=(e%de+de)%de,h=(n%de+de)%de;if(r){const u=l.get(c,t,h),f=Nl[u];if(u!==ve.air.id&&!(f&&f.decoration))return}l.set(c,t,h,s)}getBlock(e,t,n){if(t<0||t>=_n)return ve.air;const s=Math.floor(e/de),r=Math.floor(n/de),o=this.getOrCreateChunk(s,r),a=(e%de+de)%de,l=(n%de+de)%de;return Nl[o.get(a,t,l)]||ve.air}getSurfaceY(e,t){for(let n=_n-1;n>=0;n--){const s=this.getBlock(e,n,t);if(s.solid&&!s.liquid)return n}return 1}setBlock(e,t,n,s){if(t<0||t>=_n)return;const r=Math.floor(e/de),o=Math.floor(n/de),a=this.getOrCreateChunk(r,o),l=(e%de+de)%de,c=(n%de+de)%de;a.set(l,t,c,ve[s]?.id??ve.air.id);const h=new Set([this.chunkKey(r,o)]);l===0&&h.add(this.chunkKey(r-1,o)),l===de-1&&h.add(this.chunkKey(r+1,o)),c===0&&h.add(this.chunkKey(r,o-1)),c===de-1&&h.add(this.chunkKey(r,o+1)),s==="air"&&this._spreadWaterAt(e,t,n,h),this.emitChange({wx:e,wy:t,wz:n,blockName:s,chunkX:r,chunkZ:o,affectedChunkKeys:[...h]})}_spreadWaterAt(e,t,n,s,r=0){if(r>5)return;const o=[[e,t+1,n],[e-1,t,n],[e+1,t,n],[e,t,n-1],[e,t,n+1]];let a=!1;for(const[l,c,h]of o)if(this.getBlock(l,c,h).liquid){a=!0;break}if(a){const l=Math.floor(e/de),c=Math.floor(n/de),h=this.getOrCreateChunk(l,c),u=(e%de+de)%de,f=(n%de+de)%de;if(h.set(u,t,f,ve.water.id),s.add(this.chunkKey(l,c)),t>0){const p=this.getBlock(e,t-1,n);if(!p.solid&&!p.liquid){const g=Math.floor(e/de),d=Math.floor(n/de),_=this.getOrCreateChunk(g,d),m=(e%de+de)%de,T=(n%de+de)%de;_.set(m,t-1,T,ve.water.id),s.add(this.chunkKey(g,d))}}}}serialize(){return{seed:this.seed,chunks:[...this.chunks.entries()].map(([e,t])=>({key:e,blocks:Array.from(t.blocks)}))}}static fromSave(e){const t=new pr(e.seed);for(const n of e.chunks||[]){const[s,r]=n.key.split(",").map(Number),o=new Vh(s,r);o.blocks=Uint16Array.from(n.blocks),t.chunks.set(n.key,o)}return t}}const yx="mc-clone-db",Sx=1,gi="worlds",Wh="chunks",Xh="meta";let io=null;function mc(){return io?Promise.resolve(io):new Promise((i,e)=>{const t=indexedDB.open(yx,Sx);t.onupgradeneeded=n=>{const s=n.target.result;s.objectStoreNames.contains(gi)||s.createObjectStore(gi,{keyPath:"id"}),s.objectStoreNames.contains(Wh)||s.createObjectStore(Wh),s.objectStoreNames.contains(Xh)||s.createObjectStore(Xh)},t.onsuccess=n=>{io=n.target.result,i(io)},t.onerror=n=>e(n.target.error)})}function Ho(){return typeof indexedDB<"u"}async function Yu(i,e){if(!Ho()){localStorage.setItem(`mc-clone-world-${i}`,JSON.stringify(e));return}try{const n=(await mc()).transaction(gi,"readwrite");return n.objectStore(gi).put({id:i,...e,savedAt:Date.now()}),new Promise((r,o)=>{n.oncomplete=r,n.onerror=()=>o(n.error)})}catch(t){console.warn("IndexedDB save failed, falling back to localStorage:",t);try{localStorage.setItem(`mc-clone-world-${i}`,JSON.stringify(e))}catch(n){console.error("localStorage save also failed:",n)}}}async function bx(i){if(!Ho()){const e=localStorage.getItem(`mc-clone-world-${i}`);return e?JSON.parse(e):null}try{const n=(await mc()).transaction(gi,"readonly").objectStore(gi);return new Promise((s,r)=>{const o=n.get(i);o.onsuccess=()=>s(o.result||null),o.onerror=()=>r(o.error)})}catch(e){console.warn("IndexedDB load failed, trying localStorage:",e);const t=localStorage.getItem(`mc-clone-world-${i}`);return t?JSON.parse(t):null}}async function Ex(i){if(!Ho()){localStorage.removeItem(`mc-clone-world-${i}`);return}try{const t=(await mc()).transaction(gi,"readwrite");return t.objectStore(gi).delete(i),new Promise((s,r)=>{t.oncomplete=s,t.onerror=()=>r(t.error)})}catch{localStorage.removeItem(`mc-clone-world-${i}`)}}function xr(){try{return JSON.parse(localStorage.getItem("mc-clone-worlds")||"[]")}catch{return[]}}function gc(i){localStorage.setItem("mc-clone-worlds",JSON.stringify(i))}async function Tx(){if(!Ho()||localStorage.getItem("mc-clone-idb-migrated"))return;const e=xr();for(const t of e){const n=`mc-clone-world-${t.id}`,s=localStorage.getItem(n);if(s)try{const r=JSON.parse(s);await Yu(t.id,r),localStorage.removeItem(n)}catch(r){console.warn(`Migration failed for world ${t.id}:`,r)}}localStorage.setItem("mc-clone-idb-migrated","1"),console.log(`Migrated ${e.length} worlds to IndexedDB`)}const z=16,wo=16,$u=4,Vl=z*wo,Gl=z*$u;function wx(i){return function(){let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Bi(i,e,t){return i<e?e:i>t?t:i}function Vo(i){return{r:i>>16&255,g:i>>8&255,b:i&255}}function Ax({r:i,g:e,b:t},n){return{r:Bi(i+n,0,255),g:Bi(e+n,0,255),b:Bi(t+n,0,255)}}function wt(i,e,t,n){const s=Vo(e);for(let r=0;r<z;r++)for(let o=0;o<z;o++){const a=(n()-.5)*2*t,l=Ax(s,a),c=(r*z+o)*4;i[c]=l.r,i[c+1]=l.g,i[c+2]=l.b,i[c+3]=255}}function W(i,e,t,n,s,r,o=255){if(e<0||e>=z||t<0||t>=z)return;const a=(t*z+e)*4;i[a]=n,i[a+1]=s,i[a+2]=r,i[a+3]=o}function _c(i,e,t){const n=(t*z+e)*4;return{r:i[n],g:i[n+1],b:i[n+2],a:i[n+3]}}function Rx(i,e){wt(i,6989898,12,e);for(let t=0;t<16;t++){const n=e()*z|0,s=e()*z|0,r=_c(i,n,s);W(i,n,s,r.r*.85,r.g*.92,r.b*.85)}for(let t=0;t<8;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,130,200,90)}}function Cx(i,e){wt(i,9067061,14,e);for(let t=0;t<z;t++){const n=3+((e()*3|0)-1);for(let s=0;s<n;s++){const r=(e()-.5)*24;W(i,t,s,95+r,165+r*.5,70+r*.4)}e()>.75&&W(i,t,n,70,130,50)}}function Px(i,e){wt(i,8806467,16,e);for(let t=0;t<4;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,60,40,25)}}function Go(i,e){wt(i,8684676,14,e);for(let t=0;t<6;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,95,95,95)}for(let t=0;t<4;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,165,165,165)}}function ju(i,e){wt(i,7368816,8,e);const t=[{cx:4,cy:3,r:3},{cx:11,cy:4,r:3},{cx:3,cy:10,r:3},{cx:12,cy:11,r:3},{cx:8,cy:8,r:2}];for(let n=0;n<z;n++)for(let s=0;s<z;s++){const r=(n*z+s)*4;i[r]=i[r]*.55,i[r+1]=i[r+1]*.55,i[r+2]=i[r+2]*.55}for(const n of t)for(let s=-n.r;s<=n.r;s++)for(let r=-n.r;r<=n.r;r++){if(r*r+s*s>n.r*n.r)continue;const o=n.cx+r,a=n.cy+s;if(o<0||o>=z||a<0||a>=z)continue;const l=(e()-.5)*20,h=r===-1&&s===-1?175:130;W(i,o,a,h+l,h+l,h+l)}}function Dx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=n+(t*.3|0)&3;let r=95;s===0?r=60:s===1?r=90:s===2?r=110:r=75;const o=(e()-.5)*12;W(i,n,t,r+o,(r+o)*.65,(r+o)*.4)}}function Lx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=n-7.5,r=t-7.5,o=Math.sqrt(s*s+r*r),l=130+(Math.sin(o*1.2)*.5+.5)*35,c=(e()-.5)*14;W(i,n,t,(l+c)*.92,(l+c)*.65,(l+c)*.38)}}function Ix(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*36;if(e()<.1)W(i,n,t,30,60,25,255);else{const o=Bi(70+s,0,255),a=Bi(140+s,0,255),l=Bi(45+s*.5,0,255);W(i,n,t,o,a,l)}}}function Ux(i,e){wt(i,14865562,14,e);for(let t=0;t<3;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,200,180,130)}}function Nx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=Math.sin((n+t)*.6)*12,r=(e()-.5)*10,o=50+r*.4,a=110+r+s*.3,l=200+s+r*.5;W(i,n,t,o,a,l)}}function Fx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=Math.sin(n*.7+t*.4)*.3+.7,r=(e()-.5)*30,o=220+r,a=90*s+r*.5,l=20+r*.3;W(i,n,t,o,a,l)}}function so(i,e,t,n){wt(i,e,14,n);const s=Vo(t);for(let r=0;r<7;r++){const o=n()*(z-4)+2|0,a=n()*(z-4)+2|0,l=1+(n()*2|0);for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++){if(h*h+c*c>l*l||n()>.65)continue;const u=o+h,f=a+c,p=(n()-.5)*30;W(i,u,f,s.r+p,s.g+p,s.b+p)}}}function Ns(i,e){for(let t=0;t<z;t++){const n=t%4===0;for(let s=0;s<z;s++){let r=168;n?r=90:t%4===3&&(r=140);const o=(e()-.5)*18;W(i,s,t,(r+o)*.92,(r+o)*.72,(r+o)*.45)}}for(let t=2;t<z;t+=4)for(let n=1;n<z;n+=7)W(i,n,t,50,38,22)}function Bx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)if(n===0||t===0||n===z-1||t===z-1)W(i,n,t,220,240,250,230);else{const r=(e()-.5)*12;W(i,n,t,200+r,230+r,245+r,60)}for(let t=0;t<6;t++){const n=2+(e()*(z-4)|0),s=2+(e()*(z-4)|0);W(i,n,s,255,255,255,200)}}function Ox(i,e){wt(i,3750201,18,e);for(let t=0;t<14;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,18,18,18)}}function kx(i,e){wt(i,8289400,18,e);for(let t=0;t<14;t++){const n=e()*z|0,s=e()*z|0,r=e()>.5;W(i,n,s,r?50:175,r?50:175,r?50:170)}}function zx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(t/4|0)%2===0?0:4,r=t%4===0||t%4===3,o=(n+s)%8===0||(n+s)%8===7;if(r||o)W(i,n,t,80,70,65);else{const a=(e()-.5)*18;W(i,n,t,165+a,75+a*.5,55+a*.4)}}}function Hx(i,e){wt(i,1706538,8,e);for(let t=0;t<8;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,90,60,130)}for(let t=0;t<3;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,160,110,200)}}function Vx(i,e){Ns(i,e);for(let t=3;t<13;t++)for(let n=0;n<z;n++){const s=n/2|0,r=[[180,30,30],[40,90,180],[160,130,30],[60,130,50],[120,50,140],[190,110,40],[80,80,80],[200,200,100]],o=r[s%r.length],a=n%2===0,l=(e()-.5)*18,c=a?o[0]*.7:o[0],h=a?o[1]*.7:o[1],u=a?o[2]*.7:o[2];W(i,n,t,c+l,h+l,u+l)}}function Gx(i,e){wt(i,16185080,8,e);for(let t=0;t<6;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,220,225,235)}}function Wx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*18;W(i,n,t,165+s,200+s,230+s,220)}for(let t=0;t<4;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,100,140,180)}}function Xx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*16;W(i,n,t,235+s,235+s,240+s)}}function qx(i,e){Ns(i,e);for(let t=4;t<=12;t+=4){for(let n=1;n<z-1;n++)W(i,n,t,60,45,30);for(let n=1;n<z-1;n++)W(i,t,n,60,45,30)}}function Yx(i,e){Ns(i,e);for(let t=3;t<6;t++)for(let n=3;n<13;n++)W(i,n,t,200,200,200);for(let t=8;t<12;t++)for(let n=5;n<11;n++)W(i,n,t,90,60,30)}function $x(i,e){wt(i,10922934,10,e)}function jx(i,e){ju(i,e);for(let t=0;t<28;t++){const n=e()*z|0,s=e()*z|0;if(e()>.6){const r=_c(i,n,s);W(i,n,s,r.r*.6,r.g*.9+30,r.b*.5)}}}function Kx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)W(i,n,t,0,0,0,0);for(let t=0;t<z;t++)W(i,2,t,110,75,40,255),W(i,3,t,140,95,50,255),W(i,12,t,110,75,40,255),W(i,13,t,140,95,50,255);for(let t of[3,7,11])for(let n=3;n<=12;n++)W(i,n,t,130,90,50,255),W(i,n,t+1,100,70,35,255)}function Zx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)W(i,n,t,0,0,0,0);for(let t=8;t<14;t++)W(i,7,t,95,65,35,255),W(i,8,t,130,90,50,255);W(i,7,5,255,220,100,255),W(i,8,5,255,240,130,255),W(i,7,6,255,180,60,255),W(i,8,6,255,200,80,255),W(i,7,7,200,130,40,255),W(i,8,7,220,150,50,255);for(let t=3;t<9;t++)for(let n=5;n<11;n++)if(_c(i,n,t).a===0){const r=Math.abs(n-7.5)+Math.abs(t-6),o=Math.max(0,60-r*12);o>0&&W(i,n,t,255,200,80,o)}}function Jx(i,e){wt(i,14469258,10,e);for(let t of[4,11])for(let n=0;n<z;n++){const s=(e()-.5)*14;W(i,n,t,175+s,150+s,90+s)}}function Qx(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=t===0||t===8,r=t<8?n===0||n===8:(n+4)%16===0||(n+4)%16===8;if(s||r)W(i,n,t,60,60,60);else{const o=(e()-.5)*18;W(i,n,t,130+o,130+o,130+o)}}}function eM(i,e){wt(i,14474460,12,e);for(let t=0;t<z;t++)W(i,t,0,180,180,180),W(i,t,z-1,180,180,180),W(i,0,t,180,180,180),W(i,z-1,t,180,180,180)}function tM(i,e){wt(i,16174906,12,e);for(let t=0;t<z;t++)W(i,t,0,200,160,30),W(i,t,z-1,200,160,30),W(i,0,t,200,160,30),W(i,z-1,t,200,160,30)}function nM(i,e){wt(i,7268320,12,e);for(let t=0;t<5;t++){const n=1+(e()*(z-2)|0),s=1+(e()*(z-2)|0);W(i,n,s,255,255,255)}}function iM(i,e){Go(i,e);for(let t=0;t<z;t++)W(i,t,0,50,50,50),W(i,t,z-1,50,50,50),W(i,0,t,50,50,50),W(i,z-1,t,50,50,50)}function sM(i,e){Go(i,e);for(let t=4;t<13;t++)for(let n=3;n<13;n++)if(t>6&&n>4&&n<12){const r=(e()-.5)*30;W(i,n,t,200+r,80+r*.6,30+r*.3)}else W(i,n,t,30,30,30);for(let t=3;t<=12;t++)W(i,t,4,50,50,50),W(i,t,12,50,50,50);for(let t=4;t<=12;t++)W(i,3,t,50,50,50),W(i,12,t,50,50,50)}function rM(i,e){Go(i,e);for(let t=0;t<z;t++)W(i,t,0,50,50,50),W(i,t,z-1,50,50,50)}function oM(i,e){wt(i,12593192,14,e);for(let n of[3,12])for(let s=0;s<z;s++)W(i,s,n,240,240,240);const t=(n,s,r)=>{for(let o=0;o<r.length;o++)for(let a=0;a<r[o].length;a++)r[o][a]==="1"&&W(i,n+a,s+o,30,30,30)};t(2,5,["111","010","010"]),t(6,5,["101","111","101"]),t(11,5,["111","010","010"])}function aM(i,e){wt(i,10493984,12,e);for(let t=6;t<10;t++)W(i,7,t,200,200,100),W(i,8,t,240,240,140);W(i,7,4,30,30,30),W(i,8,4,30,30,30)}function lM(i,e){Ns(i,e);for(let t=0;t<z;t++)W(i,t,5,70,50,30);for(let t=6;t<9;t++)for(let n=7;n<10;n++)W(i,n,t,80,60,25);W(i,8,7,250,220,80)}function cM(i,e){Ns(i,e);for(let t=0;t<z;t++)W(i,t,0,70,50,30),W(i,t,z-1,70,50,30),W(i,0,t,70,50,30),W(i,z-1,t,70,50,30)}function hM(i,e){wt(i,14170168,12,e);for(let t=1;t<5;t++)for(let n=2;n<14;n++){const s=(e()-.5)*14;W(i,n,t,240+s,240+s,245+s)}for(let t=0;t<z;t++)W(i,t,0,90,90,90),W(i,t,z-1,90,90,90),W(i,0,t,90,90,90),W(i,z-1,t,90,90,90)}function uM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)W(i,n,t,0,0,0,0);for(let t=0;t<z;t++)for(let n=6;n<=9;n++){const s=(e()-.5)*14,r=n===6||n===9,o=(r?100:145)+s,a=(r?70:100)+s,l=(r?40:60)+s;W(i,n,t,o,a,l,255)}for(let t of[4,10])for(let n=0;n<z;n++){const s=(e()-.5)*14;W(i,n,t,130+s,90+s,50+s,255),W(i,n,t+1,100+s,70+s,38+s,255)}}function fM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)W(i,n,t,0,0,0,0);for(let t=0;t<8;t++){const n=1+(e()*(z-2)|0),s=6+(e()*7|0);let r=n;for(let o=0;o<s;o++){const a=z-1-o,l=(e()-.5)*25;W(i,r,a,90+l,160+l,60+l,255),e()<.25&&(r+=e()<.5?-1:1),r=Bi(r,0,z-1)}}}function ro(i,e,t){for(let r=0;r<z;r++)for(let o=0;o<z;o++)W(i,o,r,0,0,0,0);const n=Vo(e);for(let r=8;r<z;r++)W(i,7,r,60,110,40,255),W(i,8,r,90,150,60,255);W(i,5,10,70,130,50,255),W(i,10,12,70,130,50,255);const s=[[7,3],[8,3],[7,4],[8,4],[5,5],[6,5],[9,5],[10,5],[5,6],[6,6],[9,6],[10,6],[7,7],[8,7]];for(const[r,o]of s){const a=(t()-.5)*30;W(i,r,o,n.r+a,n.g+a,n.b+a,255)}W(i,7,5,255,230,80,255),W(i,8,5,255,230,80,255),W(i,7,6,220,200,60,255),W(i,8,6,220,200,60,255)}function dM(i,e){for(let n=0;n<z;n++)for(let s=0;s<z;s++)W(i,s,n,0,0,0,0);const t=[[[7,14],[7,10],[5,8],[4,6]],[[8,14],[8,11],[10,9],[11,6]],[[7,12],[9,10],[11,8]],[[8,13],[6,11],[4,9]]];for(const n of t)for(const[s,r]of n){const o=(e()-.5)*20;W(i,s,r,110+o,80+o,40+o,255)}}function pM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++)if(e()<.32){const s=(e()-.5)*30;W(i,n,t,50+s,110+s,40+s,255)}else W(i,n,t,0,0,0,0)}function Ku(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(n+1)%4===0?-25:0,r=(e()-.5)*16;W(i,n,t,220+r+s,130+r+s*.5,30+r+s*.3)}}function mM(i,e){wt(i,12083994,14,e);for(let t=5;t<11;t++)for(let n=6;n<10;n++)W(i,n,t,90,130,50)}function gM(i,e){Ku(i,e);for(const[t,n]of[[3,5],[11,5]])for(let s=0;s<3;s++)for(let r=0;r<3-s;r++)W(i,t+r,n+s,30,15,5);for(let t=3;t<13;t++)W(i,t,11,30,15,5),W(i,t,12,30,15,5);for(let t of[4,7,10])W(i,t,11,220,130,30)}function _M(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*18,r=t%2===0?0:-10;W(i,n,t,200+s+r,160+s+r,60+s)}}function vM(i,e){wt(i,13017152,18,e);for(let t=6;t<10;t++)for(let n=6;n<10;n++)W(i,n,t,110,80,30)}function qh(i,e,t){for(let s=0;s<z;s++)for(let r=0;r<z;r++)W(i,r,s,0,0,0,0);const n=Vo(e);for(let s=8;s<z;s++)for(let r=6;r<10;r++)W(i,r,s,230,220,200,255);for(let s=3;s<9;s++)for(let r=4;r<12;r++){const o=(t()-.5)*24;W(i,r,s,n.r+o,n.g+o,n.b+o,255)}W(i,5,5,255,255,255,255),W(i,9,6,255,255,255,255),W(i,7,4,255,255,255,255)}function xM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=n+(t*.4|0)&3;let r=105;s===0?r=70:s===1?r=100:s===2?r=120:r=85;const o=(e()-.5)*12;W(i,n,t,(r+o)*.9,(r+o)*.55,(r+o)*.35)}}function MM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*32;e()<.08?W(i,n,t,20,50,20,255):W(i,n,t,50+s,130+s,35+s*.5,255)}}function yM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=n+(t*.3|0)&3;let r=50;s===0?r=30:s===1?r=50:s===2?r=70:r=40;const o=(e()-.5)*10;W(i,n,t,(r+o)*.95,(r+o)*.7,(r+o)*.45)}}function SM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*28;e()<.1?W(i,n,t,15,35,25,255):W(i,n,t,45+s,95+s,65+s,255)}}function bM(i,e){for(let t=0;t<z;t++)for(let n=0;n<z;n++){const s=(e()-.5)*14;W(i,n,t,175+s,210+s,240+s,255)}for(let t=0;t<6;t++){const n=e()*z|0,s=e()*z|0;W(i,n,s,130,170,220,255)}}const Yh=[(i,e)=>Rx(i,e),(i,e)=>Go(i,e),(i,e)=>Px(i,e),(i,e)=>Cx(i,e),(i,e)=>Dx(i,e),(i,e)=>Lx(i,e),(i,e)=>Ix(i,e),(i,e)=>Ux(i,e),(i,e)=>Nx(i,e),(i,e)=>so(i,8684676,2105376,e),(i,e)=>so(i,8684676,13144160,e),(i,e)=>ju(i,e),(i,e)=>Ns(i,e),(i,e)=>Bx(i,e),(i,e)=>Ox(i,e),(i,e)=>kx(i,e),(i,e)=>zx(i,e),(i,e)=>Hx(i,e),(i,e)=>Vx(i,e),(i,e)=>Gx(i,e),(i,e)=>Xx(i,e),(i,e)=>qx(i,e),(i,e)=>Yx(i,e),(i,e)=>$x(i,e),(i,e)=>so(i,8684676,16570446,e),(i,e)=>so(i,8684676,7268320,e),(i,e)=>jx(i,e),(i,e)=>Kx(i),(i,e)=>Zx(i),(i,e)=>Jx(i,e),(i,e)=>Qx(i,e),(i,e)=>eM(i,e),(i,e)=>fM(i,e),(i,e)=>ro(i,16728128,e),(i,e)=>ro(i,16769088,e),(i,e)=>dM(i,e),(i,e)=>pM(i,e),(i,e)=>tM(i,e),(i,e)=>nM(i,e),(i,e)=>iM(i,e),(i,e)=>sM(i,e),(i,e)=>rM(i,e),(i,e)=>oM(i,e),(i,e)=>aM(i,e),(i,e)=>lM(i,e),(i,e)=>cM(i,e),(i,e)=>hM(i,e),(i,e)=>uM(i,e),(i,e)=>Ku(i,e),(i,e)=>mM(i,e),(i,e)=>gM(i,e),(i,e)=>_M(i,e),(i,e)=>vM(i,e),(i,e)=>ro(i,4227327,e),(i,e)=>ro(i,12599488,e),(i,e)=>qh(i,13119536,e),(i,e)=>qh(i,10119738,e),(i,e)=>Wx(i,e),(i,e)=>bM(i,e),(i,e)=>xM(i,e),(i,e)=>MM(i,e),(i,e)=>yM(i,e),(i,e)=>SM(i,e),(i,e)=>Fx(i,e)];function EM(){const i=document.createElement("canvas");i.width=Vl,i.height=Gl;const e=i.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,Vl,Gl);for(let t=0;t<Yh.length;t++){const n=t%wo,s=t/wo|0,r=e.createImageData(z,z),o=wx(305441741+t*7919);Yh[t](r.data,o),e.putImageData(r,n*z,s*z)}return i}const TM={cols:wo,rows:$u,tileSize:z,width:Vl,height:Gl};let Jn=5;const wM=document.getElementById("app"),{scene:Ye,camera:dn,renderer:yn,sun:$h,ambient:AM,composer:Fa}=Y_(wM);Ye.fog=new rc(9420776,60,Jn*de*1.5);const vc=4;let gs=null,Pe=null,Ut=null,St=null,en=null;const Ao=[];Tx().catch(()=>{});async function RM(i){const e=await bx(i);if(!e)return null;try{if(e?.version===vc&&e.world)return{world:pr.fromSave(e.world),player:e.player||null,hud:e.hud||null,furnaces:e.furnaces||null,spawnPoint:e.player?.spawnPoint||null,dayCount:e.dayCount,timeT:e.timeT};if(e?.seed&&e?.chunks)return{world:pr.fromSave(e),player:null,hud:null,furnaces:null,spawnPoint:null,dayCount:null,timeT:null}}catch{}return null}function xc(){if(!gs||!Pe)return;const i={version:vc,world:Pe.serialize(),player:{px:te.position.x,py:te.position.y,pz:te.position.z,rx:te.rotation.x,ry:te.rotation.y,health:Sn,hunger:un,xp:Tn,xpLevel:ti,spawnPoint:_s},hud:{activeSlot:Oe.activeSlot,inventory:[...Oe.inventory.entries()],hotbar:[...Oe.hotbar],toolDurability:[...Oe.toolDurability.entries()],armorSlots:{...Oe.armorSlots},armorDurability:[...Oe.armorDurability.map.entries()]},furnaces:lx(),dayCount:Oi,timeT:nn.t};Yu(gs,i).catch(n=>console.warn("Save failed:",n));const e=xr(),t=e.find(n=>n.id===gs);t&&(t.lastPlayed=Date.now()),gc(e)}function Zu(i,e){const t=`world_${Date.now()}_${Math.floor(Math.random()*1e4)}`,n=e?Number(e):Math.floor(Math.random()*1e5);Pe=new pr(n),Ut=null,St=null,gs=t;const s=xr();return s.push({id:t,name:i,seed:n,created:Date.now(),lastPlayed:Date.now()}),gc(s),xc(),t}function CM(i){Ex(i).catch(()=>{});const e=xr().filter(t=>t.id!==i);gc(e)}const Oe=new Jv;St&&(Oe.activeSlot=Math.max(0,Math.min(Oe.hotbar.length-1,St.activeSlot||0)),St.inventory&&(Oe.inventory=new Map(St.inventory)),St.hotbar&&(Oe.hotbar=St.hotbar.slice(0,Oe.hotbar.length)),St.toolDurability&&(Oe.toolDurability=new Map(St.toolDurability)),Oe.render());const nr=new ex(dn),ir=new lv(Ye),Ps=new Tv(Ye),Gi=new Pv(Ye),Ju=new Uv(Ye);Ju.init(15,400);const PM=new Ov(Ye),jt=new kv(Ye);let sn=!1,Oi=0,Ro=!1,ki=0;const Wn=[],Qu=28,DM=12;let _s=null,Co=!1,ds=0;const Wl=1.5;tx(Qs);window._furnacePutItem=i=>rx(0,0,0,i,Oe);window._furnaceTakeItem=i=>ox(i,Oe);const zi=new Map,LM=20;function IM(){for(const[t,n]of zi){const[s,r,o]=t.split(",").map(Number);Pe.getBlock(s,r,o).id!==19&&(Ye.remove(n),zi.delete(t))}const i=te.position,e=[];for(const[t,n]of zi){const s=n.position.distanceTo(i);e.push({key:t,light:n,dist:s})}e.sort((t,n)=>t.dist-n.dist);for(let t=0;t<e.length;t++)e[t].light.intensity=t<LM?1.5:0}function UM(i,e){const t=Math.round(i.x),n=Math.round(i.y),s=Math.round(i.z),r=e*e;for(let a=-e;a<=e;a++)for(let l=-e;l<=e;l++)for(let c=-e;c<=e;c++){if(a*a+l*l+c*c>r)continue;const h=Pe.getBlock(t+a,n+l,s+c);h.solid&&h.hardness!==-1&&Pe.setBlock(t+a,n+l,s+c,"air")}const o=te.position.distanceTo(i);if(o<e+2){const a=Math.max(0,Math.floor((1-Math.max(0,o-1)/(e+2))*12));a>0&&Ni(a,"Blown up by a Creeper")}}let Tn=0,ti=0;const Ds=10;let Sn=20,un=20,Ba=0,er=0,tr=0,Ci=10,Mr=!1,pi=!1,Oa=0,jh="day",ka=0,oo=0;const Xl=document.getElementById("health-bar"),NM=document.getElementById("hunger-bar"),FM=document.getElementById("xp-bar"),ef=document.getElementById("title-screen"),Ls=document.getElementById("pause-screen"),Po=document.getElementById("death-screen"),BM=document.getElementById("death-message");function yr(){let i="";for(let e=0;e<10;e++){const t=Sn-e*2;t>=2?i+='<span class="heart"></span>':t===1?i+='<span class="heart half"></span>':i+='<span class="heart empty"></span>'}Xl.innerHTML=i}function Sr(){let i="";for(let e=0;e<10;e++){const t=un-e*2;t>=2?i+='<span class="hunger"></span>':t===1?i+='<span class="hunger half"></span>':i+='<span class="hunger empty"></span>'}NM.innerHTML=i}function br(){const i=Math.min(100,Tn/Ds*100);FM.innerHTML=`<div class="fill" style="width:${i}%"></div><span class="level">${ti}</span>`}const ao=document.getElementById("underwater-overlay"),qs=document.getElementById("air-bar"),Do=document.getElementById("damage-vignette"),sr=document.getElementById("hit-marker");let go=0,_o=0,Kh=0;function OM(){Do&&(Do.classList.add("active"),go=.3)}function tf(){sr&&(sr.classList.add("active"),_o=.15,setTimeout(()=>sr.classList.remove("active"),150))}function kM(){const i=document.getElementById("app");i&&(i.classList.add("shake"),setTimeout(()=>i.classList.remove("shake"),400))}function Ni(i,e){if(sn)return;const t=Oe.getTotalArmorReduction();let n=i;if(t>0){const s=Math.min(.8,t*.04),r=Math.ceil(i*s);n=i-r,n<1&&(n=0),(n>0||r>0)&&Oe.damageArmor()}n<=0||(Sn=Math.max(0,Sn-n),yr(),_v(),OM(),kM(),Sn<=0&&zM(e))}function zM(i){BM.textContent=i||"You died!",Po.classList.remove("hidden"),document.exitPointerLock(),pi=!0}function HM(){Sn=20,un=20,Tn=0,ti=0,er=0,tr=0,Ci=10,or&&(clearTimeout(or),or=null),yr(),Sr(),br();const i=_s?Lo(_s.x,_s.z,10):Lo(0,0,10);te.position.copy(i),te.velocity.set(0,0,0),Po.classList.add("hidden"),pi=!1,yn.domElement.requestPointerLock()}function VM(i,e,t){if(Co)return;const n=nn.t/nn.dayLength*Math.PI*2;if(!(Math.sin(n)<-.1)){dt("You can only sleep at night.");return}Co=!0,ds=Wl,_s={x:i,y:e,z:t},dt("Sleeping...")}function GM(){const i=nn.dayLength,e=i*.23;for(;nn.t>e;)nn.t-=i;nn.t=e,Oi++,dt(`Good morning! Day ${Oi}`),Co=!1,ds=0;for(let t=ot.length-1;t>=0;t--)ot[t].type.passive||(Ye.remove(ot[t].mesh),Cs(ot[t].mesh),ot.splice(t,1))}yr();Sr();br();const hs=document.getElementById("chat"),_i=document.getElementById("chat-input");function dt(i){const e=document.createElement("div");for(e.className="msg",e.textContent=i,hs.appendChild(e),hs.scrollTop=hs.scrollHeight;hs.children.length>20;)hs.removeChild(hs.firstChild)}function WM(){_i.classList.add("visible"),_i.focus(),document.exitPointerLock()}function Zh(){_i.classList.remove("visible"),_i.value="",Oe.inventoryEl.classList.contains("visible")||yn.domElement.requestPointerLock()}_i.addEventListener("keydown",i=>{if(i.code==="Enter"){const e=_i.value.trim();e&&(dt(`<You> ${e}`),vn.send("chat",{text:e})),Zh()}i.code==="Escape"&&Zh()});const nf=`./textures/minecraft-atlas.png?v=${vc}`;window.__atlasInfo=TM;window.__atlasDataUrl=nf;const XM=new Pu;XM.load(nf,i=>{Hh(i),Pe&&tu()},void 0,i=>{console.warn("Atlas PNG failed to load, falling back to procedural:",i);const e=EM(),t=new cc(e);t.magFilter=Rt,t.minFilter=Rt,t.generateMipmaps=!1,t.colorSpace=Ft,Hh(t),window.__atlasDataUrl=e.toDataURL(),Pe&&tu()});const te=new O_(dn,yn.domElement);function Lo(i=0,e=0,t=8){const n=new D;for(let r=0;r<=t;r++)for(let o=-r;o<=r;o++)for(let a=-r;a<=r;a++){if(Math.max(Math.abs(a),Math.abs(o))!==r)continue;const l=i+a,c=e+o,h=Pe.getSurfaceY(l,c)+1+te.eyeHeight+.05;if(n.set(l+.5,h,c+.5),!te.collides(Pe,n))return n.clone()}const s=new D(i+.5,Pe.getSurfaceY(i,e)+1+te.eyeHeight+.05,e+.5);for(let r=0;r<20;r++){if(!te.collides(Pe,s))return s.clone();s.y+=.5}return s}yn.domElement.addEventListener("click",()=>yn.domElement.requestPointerLock());const Mc=document.getElementById("title-main"),yc=document.getElementById("title-worlds"),sf=document.getElementById("title-new-world"),lo=document.getElementById("world-list");function rf(){const i=xr();if(i.length===0){lo.innerHTML='<div style="color:var(--color-text-muted); padding:16px; text-align:center; font-family:var(--font-ui);">No worlds yet. Create one!</div>';return}lo.innerHTML=i.map(e=>{const t=new Date(e.lastPlayed).toLocaleDateString();return`<div class="world-item" data-id="${e.id}">
      <div>
        <div class="name">${e.name}</div>
        <div class="info">Seed: ${e.seed} | Last played: ${t}</div>
      </div>
      <button class="delete-btn" data-del="${e.id}">Delete</button>
    </div>`}).join(""),lo.querySelectorAll(".world-item").forEach(e=>{e.addEventListener("click",async t=>{if(t.target.classList.contains("delete-btn"))return;const n=e.dataset.id,s=await RM(n);s&&(Pe=s.world,Ut=s.player,St=s.hud,en=s,gs=n,Sc(!1))})}),lo.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),confirm("Delete this world?")&&(CM(e.dataset.del),rf())})})}function Fs(i){[Mc,yc,sf].forEach(e=>e.classList.add("hidden")),i&&i.classList.remove("hidden")}function Sc(i){for(Fs(null),ef.classList.add("hidden"),Mr=!0,sn=i,Ut?(te.position.set(Ut.px||0,Ut.py||40,Ut.pz||0),te.rotation.set(Ut.rx||0,Ut.ry||0),Ut.health!=null&&(Sn=Ut.health,yr()),Ut.hunger!=null&&(un=Ut.hunger,Sr()),Ut.xp!=null&&(Tn=Ut.xp),Ut.xpLevel!=null&&(ti=Ut.xpLevel),br()):te.position.copy(Lo(0,0,10)),St&&(Oe.activeSlot=Math.max(0,Math.min(Oe.hotbar.length-1,St.activeSlot||0)),St.inventory&&(Oe.inventory=new Map(St.inventory)),St.hotbar&&(Oe.hotbar=St.hotbar.slice(0,Oe.hotbar.length)),St.toolDurability&&(Oe.toolDurability=new Map(St.toolDurability)),St.armorSlots&&(Oe.armorSlots={...St.armorSlots}),St.armorDurability&&(Oe.armorDurability.map=new Map(St.armorDurability)),Oe.render());Ao.length>0;){const e=Ao.shift();Pe.setBlock(e.wx,e.wy,e.wz,e.blockName)}yn.domElement.requestPointerLock(),Ec(!0),en&&en.spawnPoint&&(_s=en.spawnPoint),en&&en.furnaces&&cx(en.furnaces),en&&en.dayCount!=null&&(Oi=en.dayCount),en&&en.timeT!=null&&(nn.t=en.timeT),ty(),jM(),yv(),Vu(ht.volume/100)}document.getElementById("btn-singleplayer").addEventListener("click",()=>{rf(),Fs(yc)});document.getElementById("btn-back-title").addEventListener("click",()=>Fs(Mc));document.getElementById("btn-back-worlds").addEventListener("click",()=>Fs(yc));document.getElementById("btn-create-world").addEventListener("click",()=>Fs(sf));document.getElementById("btn-start-new").addEventListener("click",()=>{const i=document.getElementById("new-world-name").value.trim()||"New World",e=document.getElementById("new-world-seed").value.trim();Zu(i,e),Sc(!1)});document.getElementById("new-world-name").addEventListener("keydown",i=>{i.code==="Enter"&&document.getElementById("btn-start-new").click()});document.getElementById("new-world-seed").addEventListener("keydown",i=>{i.code==="Enter"&&document.getElementById("btn-start-new").click()});document.getElementById("btn-creative").addEventListener("click",()=>{Zu("Creative World",""),Sc(!0)});const of=document.getElementById("settings-screen"),Ys=document.getElementById("settings-render-distance"),$s=document.getElementById("settings-fov"),js=document.getElementById("settings-volume"),Ks=document.getElementById("settings-sensitivity");let ht={renderDistance:5,fov:75,volume:100,sensitivity:100};try{const i=JSON.parse(localStorage.getItem("mc-clone-settings")||"{}");i.renderDistance&&(ht.renderDistance=i.renderDistance),i.fov&&(ht.fov=i.fov),i.volume!=null&&(ht.volume=i.volume),i.sensitivity&&(ht.sensitivity=i.sensitivity)}catch{}Jn=ht.renderDistance;dn.fov=ht.fov;dn.updateProjectionMatrix();te.mouseSensitivity=ht.sensitivity/100;function qM(){localStorage.setItem("mc-clone-settings",JSON.stringify(ht))}function Wo(){Jn=ht.renderDistance,dn.fov=ht.fov,dn.updateProjectionMatrix(),te.mouseSensitivity=ht.sensitivity/100,Vu(ht.volume/100),Ye.fog.near=Jn*de*.5,Ye.fog.far=Jn*de*1.5,qM(),Mr&&Ec(!0)}Ys&&(Ys.value=ht.renderDistance,document.getElementById("settings-rd-value").textContent=ht.renderDistance,Ys.addEventListener("input",()=>{ht.renderDistance=Number(Ys.value),document.getElementById("settings-rd-value").textContent=Ys.value,Wo()}));$s&&($s.value=ht.fov,document.getElementById("settings-fov-value").textContent=ht.fov,$s.addEventListener("input",()=>{ht.fov=Number($s.value),document.getElementById("settings-fov-value").textContent=$s.value,Wo()}));js&&(js.value=ht.volume,document.getElementById("settings-vol-value").textContent=ht.volume,js.addEventListener("input",()=>{ht.volume=Number(js.value),document.getElementById("settings-vol-value").textContent=js.value,Wo()}));Ks&&(Ks.value=ht.sensitivity,document.getElementById("settings-sens-value").textContent=ht.sensitivity,Ks.addEventListener("input",()=>{ht.sensitivity=Number(Ks.value),document.getElementById("settings-sens-value").textContent=Ks.value,Wo()}));document.getElementById("btn-settings").addEventListener("click",()=>{Ls.classList.add("hidden"),of.classList.remove("hidden")});document.getElementById("btn-settings-back").addEventListener("click",()=>{of.classList.add("hidden"),Ls.classList.remove("hidden")});document.getElementById("btn-resume").addEventListener("click",()=>{Ls.classList.add("hidden"),pi=!1,yn.domElement.requestPointerLock()});document.getElementById("btn-save-quit").addEventListener("click",()=>{uf(),Ls.classList.add("hidden"),ef.classList.remove("hidden"),Fs(Mc),Mr=!1,pi=!1,Pe=null,gs=null,Ut=null,St=null,$M()});document.getElementById("btn-respawn").addEventListener("click",()=>HM());const Io=new Yd,Xo=new Mn,vs=new Mn,xs=new Mn,hi=new Mn;Ye.add(Xo);Ye.add(vs);Ye.add(xs);Ye.add(hi);const rr=new ct(new rn(1.005,1.005,1.005),new In({color:0,wireframe:!0,transparent:!0,opacity:.6}));rr.visible=!1;Ye.add(rr);const Qn=new Map;let Jh=Number.NaN,Qh=Number.NaN;const eu=new D;let za=0;const vn=new j_,Zs=new Map,vo=new Mn;Ye.add(vo);const ot=[],YM=12;let Ha=!1;function ql(i=!1,e=!1){if(ot.length>=YM)return;const t=Math.random()*Math.PI*2,n=12+Math.random()*16,s=te.position.x+Math.cos(t)*n,r=te.position.z+Math.sin(t)*n,o=Pe.getSurfaceY(Math.floor(s),Math.floor(r));let a=Jr;i?a=Jr.filter(h=>!h.passive):e&&(a=Jr.filter(h=>h.passive)),a.length===0&&(a=Jr);const l=a[Math.floor(Math.random()*a.length)],c=qv(l);c.position.set(s,o+1,r),Ye.add(c),ot.push({type:l,mesh:c,dir:Math.random()*Math.PI*2,bobPhase:0,hp:l.hp})}function $M(){for(const i of ot)Ye.remove(i.mesh),Cs(i.mesh);ot.length=0}function jM(){for(let i=0;i<6;i++)ql(!1,!0)}function af(i,e,t,n,s=!1){const r=new ct(new rn(.1,.1,.5),new In({color:9136404}));r.position.copy(i),r.lookAt(i.clone().add(e)),Ye.add(r),Wn.push({mesh:r,velocity:e.clone().multiplyScalar(t),damage:n,age:0,fromPlayer:s,stuck:!1,stuckTimer:0,stuckPos:null})}function KM(i){for(let e=Wn.length-1;e>=0;e--){const t=Wn[e];if(t.stuck){if(t.stuckTimer-=i,t.mesh.position.distanceTo(te.position)<1.8&&!t.fromPlayer){Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Oe.addItem("arrow",1),Hu(),Wn.splice(e,1);continue}t.stuckTimer<=0&&(Gi.spawn(t.stuckPos.x,t.stuckPos.y+.5,t.stuckPos.z,"arrow",9136404),Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Wn.splice(e,1));continue}t.age+=i,t.velocity.y-=DM*i;const n=t.velocity.clone().multiplyScalar(i),s=t.mesh.position.clone().add(n);if(n.lengthSq()>1e-4){const c=t.mesh.position.clone().add(t.velocity);t.mesh.lookAt(c)}const r=Math.floor(s.x),o=Math.floor(s.y),a=Math.floor(s.z),l=Pe.getBlock(r,o,a);if(l.solid&&!l.liquid){t.stuck=!0,t.stuckTimer=3,t.stuckPos=t.mesh.position.clone(),t.mesh.position.copy(s),t.mesh.position.addScaledVector(t.velocity.clone().normalize(),-.1);continue}if(t.fromPlayer){for(const c of ot)if(s.distanceTo(c.mesh.position)<.8){if(c.hp=(c.hp||c.type.hp)-t.damage,dt(`Arrow hit ${c.type.id} for ${t.damage} dmg`),Rs(c.type.id,"hurt"),Ps.spawn(s.x,s.y,s.z,16755200,5),c.type.passive&&(c.fleeTimer=4),c.hp<=0){dt(`${c.type.id} died!`),Rs(c.type.id,"death");const u=c.mesh.position.clone();if(Ye.remove(c.mesh),Cs(c.mesh),ot.splice(ot.indexOf(c),1),!sn){const p=pc(c.type);for(const g of p)for(let d=0;d<g.count;d++)Gi.spawn(u.x,u.y+.5,u.z,g.item,c.type.color)}const f=c.type.xp??(c.type.passive?2:5);for(Tn+=f;Tn>=Ds;)Tn-=Ds,ti++,dt(`Level up! Now level ${ti}`);br()}Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Wn.splice(e,1);break}if(e<0||!Wn[e])continue}if(!t.fromPlayer&&s.distanceTo(te.position)<1.2){Ni(t.damage,"Shot by a skeleton"),dt(`You were hit by an arrow for ${t.damage} dmg`),Ps.spawn(te.position.x,te.position.y+1,te.position.z,16724787,8),tf(),Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Wn.splice(e,1);continue}if(t.age>60){Ye.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),Wn.splice(e,1);continue}t.mesh.position.copy(s)}}function ZM(i,e){return`${i},${e}`}function lf(i){const[e,t]=i.split(",").map(Number);return{cx:e,cz:t}}function JM(i,e,t=Jn){const n=new Set;for(let s=-t;s<=t;s++)for(let r=-t;r<=t;r++)n.add(ZM(i+r,e+s));return n}function bc(i){const{cx:e,cz:t}=lf(i),n=Pe.getOrCreateChunk(e,t),{mesh:s,liquidMesh:r,emissiveMesh:o,decorationMesh:a}=n.buildMesh(Pe),l=Qn.get(i);l?(l.liquidMesh&&!r&&vs.remove(l.liquidMesh),!l.liquidMesh&&r&&vs.add(r),l.emissiveMesh&&!o&&xs.remove(l.emissiveMesh),!l.emissiveMesh&&o&&xs.add(o),l.decorationMesh&&!a&&hi.remove(l.decorationMesh),!l.decorationMesh&&a&&hi.add(a),l.decorationMesh&&a&&l.decorationMesh!==a&&(hi.remove(l.decorationMesh),hi.add(a)),Qn.set(i,{mesh:s,liquidMesh:r,emissiveMesh:o,decorationMesh:a})):(Qn.set(i,{mesh:s,liquidMesh:r,emissiveMesh:o,decorationMesh:a}),Xo.add(s),r&&vs.add(r),o&&xs.add(o),a&&hi.add(a))}function QM(i){const e=Qn.get(i);if(!e)return;const{cx:t,cz:n}=lf(i),s=Pe.getChunk(t,n);s&&s.disposeMesh(),Xo.remove(e.mesh),e.liquidMesh&&vs.remove(e.liquidMesh),e.emissiveMesh&&xs.remove(e.emissiveMesh),e.decorationMesh&&hi.remove(e.decorationMesh),Qn.delete(i)}function ey(i,e){const t=JM(i,e,Jn);for(const n of Qn.keys())t.has(n)||QM(n);for(const n of t)Qn.has(n)||bc(n)}function tu(){for(const i of Qn.keys())bc(i)}function Ec(i=!1){const e=Math.floor(te.position.x/de),t=Math.floor(te.position.z/de);!i&&e===Jh&&t===Qh||(Jh=e,Qh=t,ey(e,t))}function ty(){Pe.onChange(i=>{for(const e of i.affectedChunkKeys||[])Qn.has(e)&&bc(e)})}function cf(){Io.setFromCamera(new De(0,0),dn);const i=Io.intersectObjects([...Xo.children,...vs.children,...xs.children,...hi.children],!1);if(!i.length)return null;const e=i[0]?.face;if(!e?.normal)return null;const t=i[0].point.clone().addScaledVector(e.normal,-.01);return{wx:Math.floor(t.x),wy:Math.floor(t.y),wz:Math.floor(t.z),nx:Math.floor(t.x+e.normal.x),ny:Math.floor(t.y+e.normal.y),nz:Math.floor(t.z+e.normal.z)}}let zt=null;const ny=.45;function hf(i){const e=Pe.getBlock(i.wx,i.wy,i.wz);if(Pe.setBlock(i.wx,i.wy,i.wz,"air"),hv(e.name),Ps.spawn(i.wx,i.wy,i.wz,e.color||8947848,7),!sn){const n=e.drop||Bu[e.id]||e.name.toLowerCase().replaceAll(" ","_");if(Gi.spawn(i.wx+.5,i.wy+.5,i.wz+.5,n,e.color),e.dropChance)for(const[s,r]of Object.entries(e.dropChance))Math.random()<r&&(Gi.spawn(i.wx+.5,i.wy+1.5,i.wz+.5,s,16724787),dt("Found an apple!"))}const t=Oe.activeBlock();if(ui.has(t)&&Oe.damageTool(t)&&dt(`Your ${Vt[t].name} broke!`),vn.send("set_block",{wx:i.wx,wy:i.wy,wz:i.wz,blockName:"air"}),e.id===19){const n=`${i.wx},${i.wy},${i.wz}`,s=zi.get(n);s&&(Ye.remove(s),zi.delete(n))}}let Uo=0,or=null;window.addEventListener("mousedown",i=>{const e=cf();if(i.button===0){Io.setFromCamera(new De(0,0),dn);const t=Io.intersectObjects(ot.map(n=>n.mesh),!0);if(t.length>0&&t[0].distance<4){let s=t[0].object;for(;s.parent&&s.parent!==Ye;)s=s.parent;const r=ot.find(o=>o.mesh===s);if(r){const o=Oe.activeBlock(),a=U_(o);r.hp=(r.hp||r.type.hp)-a,dt(`Hit ${r.type.id} for ${a} dmg (${Math.max(0,r.hp)}/${r.type.hp} HP)`),Rs(r.type.id,"hurt"),tf(),ui.has(o)&&Oe.damageTool(o)&&dt(`Your ${Vt[o].name} broke!`);const l=r.mesh.position.x-te.position.x,c=r.mesh.position.z-te.position.z,h=Math.sqrt(l*l+c*c)||1;if(r.mesh.position.x+=l/h*.9,r.mesh.position.z+=c/h*.9,r.mesh.position.y+=.4,r.type.passive&&(r.fleeTimer=4),r.hp<=0){dt(`${r.type.id} died!`),Rs(r.type.id,"death");const u=r.mesh.position.clone();if(Ye.remove(r.mesh),Cs(r.mesh),ot.splice(ot.indexOf(r),1),!sn){const p=pc(r.type);for(const g of p)for(let d=0;d<g.count;d++)Gi.spawn(u.x,u.y+.5,u.z,g.item,r.type.color)}const f=r.type.xp??(r.type.passive?2:5);for(Tn+=f,dt(`+${f} XP`);Tn>=Ds;)Tn-=Ds,ti++,dt(`Level up! Now level ${ti}`);br(),Ps.spawn(u.x,u.y+.5,u.z,8453920,f)}nr.punch();return}}}if(i.button===2&&Uo<=0){const t=Oe.activeBlock();if(Fl.has(t)&&un<20){const n=Ui[t];if(Oe.consumeItem(t,1)){un=Math.min(20,un+n.hunger),Sr(),Uo=.5,dt(`Ate ${n.name} (+${n.hunger} hunger)`),n.poison&&(dt("You feel sick..."),or=setTimeout(()=>{or=null,Ni(2,"Food poisoning")},4e3));return}}}if(e){if(i.button===0){const t=Pe.getBlock(e.wx,e.wy,e.wz);if(t.hardness===-1)return;if(t.solid||t.decoration)if(t.decoration)hf(e),nr.punch();else{const n=Bu[t.id]||"";zt={wx:e.wx,wy:e.wy,wz:e.wz,block:t,blockKey:n,progress:0},ir.start(e.wx,e.wy,e.wz),nr.punch()}}if(i.button===2){const t=Oe.activeBlock();if(t==="bow"&&Oe.inventory.get("arrow")>0){Ro=!0,ki=0;return}if(e){const s=Pe.getBlock(e.wx,e.wy,e.wz);if(s.name==="Furnace"){sx(e.wx,e.wy,e.wz);return}if(s.name==="Bed"){VM(e.wx,e.wy,e.wz);return}}if(!ve[t]||ui.has(t)||Fl.has(t)||Eo.has(t))return;const n=Pe.getBlock(e.nx,e.ny,e.nz);if(!n.solid&&!n.liquid){const s=te.position.x,r=te.position.y,o=te.position.z;if(!(e.nx>=Math.floor(s-te.bodyRadius)&&e.nx<=Math.floor(s+te.bodyRadius)&&e.ny>=Math.floor(r-te.eyeHeight)&&e.ny<=Math.floor(r-te.eyeHeight+te.bodyHeight)&&e.nz>=Math.floor(o-te.bodyRadius)&&e.nz<=Math.floor(o+te.bodyRadius))&&(sn||Oe.consumeItem(t,1))&&(Pe.setBlock(e.nx,e.ny,e.nz,t),uv(t),vn.send("set_block",{wx:e.nx,wy:e.ny,wz:e.nz,blockName:t}),t==="torch")){const l=`${e.nx},${e.ny},${e.nz}`;if(!zi.has(l)){const c=new Hd(16755251,1.5,12,2);c.position.set(e.nx+.5,e.ny+.75,e.nz+.5),Ye.add(c),zi.set(l,c)}}}}}});window.addEventListener("mouseup",i=>{if(i.button===0&&(zt=null,ir.stop()),i.button===2){if(Ro&&ki>.05){const e=Math.min(1,ki),t=N_(e),n=new D;dn.getWorldDirection(n);const s=te.position.clone();s.y+=1,af(s,n,Qu*Math.min(1,e),t,!0),Oe.consumeItem("arrow",1),Oe.damageTool("bow"),dt(`Shot arrow (${t} dmg)`)}Ro=!1,ki=0}});window.addEventListener("contextmenu",i=>i.preventDefault());window.addEventListener("keydown",i=>{if(i.code==="Escape"&&Mr){if(Po&&!Po.classList.contains("hidden"))return;if(zh()){kh(),yn.domElement.requestPointerLock();return}pi=!pi,pi?(Ls.classList.remove("hidden"),document.exitPointerLock()):(Ls.classList.add("hidden"),yn.domElement.requestPointerLock())}if(i.code==="KeyF"&&(te.flying=!te.flying,te.velocity.set(0,0,0)),i.code==="KeyG"&&(sn=!sn,dt(sn?"Creative mode enabled":"Survival mode enabled")),i.code==="KeyE"){const e=Oe.inventoryEl?.classList?.contains("visible");if(zh()){kh(),yn.domElement.requestPointerLock();return}setTimeout(()=>{e&&!Oe.inventoryEl?.classList?.contains("visible")&&!_i.classList.contains("visible")&&yn.domElement.requestPointerLock()},50)}i.code==="KeyT"&&!_i.classList.contains("visible")&&WM()});const nn={t:0,dayLength:900};let nu=0,iu=0,Va=null;function uf(){xc()}setInterval(()=>xc(),8e3);window.addEventListener("beforeunload",uf);const No=new URLSearchParams(location.search).get("server");No&&(vn.connect(No),vn.on("welcome",i=>{for(const e of i.players)if(e.id!==i.id){const t=new ct(new rn(.6,1.8,.6),new Vi({color:3368703}));Zs.set(e.id,t),vo.add(t)}if(!Pe){Ao.push(...i.blockEdits||[]);return}for(const e of i.blockEdits||[])Pe.setBlock(e.wx,e.wy,e.wz,e.blockName)}),vn.on("player_joined",i=>{const e=new ct(new rn(.6,1.8,.6),new Vi({color:3368703}));Zs.set(i.player.id,e),vo.add(e)}),vn.on("player_state",i=>{const e=Zs.get(i.id);e&&e.position.set(i.state.x,i.state.y,i.state.z)}),vn.on("player_left",i=>{const e=Zs.get(i.id);e&&(vo.remove(e),Zs.delete(i.id))}),vn.on("set_block",i=>{if(!Pe){Ao.push(i);return}Pe.setBlock(i.wx,i.wy,i.wz,i.blockName)}),vn.on("chat",i=>dt(`<${i.id.slice(0,4)}> ${i.text}`)));let su=performance.now();function xo(i){const e=Math.min((i-su)/1e3,.033);if(su=i,!Mr||pi){Fa.render(),requestAnimationFrame(xo);return}if(Co){ds-=e;const g=document.getElementById("title-screen");if(document.getElementById("app"),g&&!g.style.background&&ds<Wl*.8){let d=document.getElementById("sleep-overlay");d||(d=document.createElement("div"),d.id="sleep-overlay",d.style.cssText="position:fixed;inset:0;background:#000;z-index:200;transition:opacity 0.5s;pointer-events:none;opacity:0;",document.body.appendChild(d));const _=1-ds/Wl;d.style.opacity=Math.min(1,_*1.5)}if(ds<=0){GM();const d=document.getElementById("sleep-overlay");d&&(d.style.opacity="0",setTimeout(()=>{d.parentNode&&d.parentNode.removeChild(d)},600))}Fa.render(),requestAnimationFrame(xo);return}if(go>0&&(go-=e,go<=0&&Do&&Do.classList.remove("active")),_o>0&&(_o-=e,_o<=0&&sr&&sr.classList.remove("active")),Ro){ki=Math.min(1,ki+e);const g=document.getElementById("bow-charge"),d=document.getElementById("bow-charge-fill");g&&g.classList.add("active"),d&&(d.style.width=`${(ki*100).toFixed(0)}%`)}else{const g=document.getElementById("bow-charge");g&&g.classList.remove("active")}Sn<=6?Xl.classList.add("low-health"):Xl.classList.remove("low-health"),te.update(e,Pe),Ps.update(e,Pe),Gi.update(e,Pe,te.position,g=>{Oe.addItem(g,1),Hu();const d=performance.now();d-Kh>2e3&&(Kh=d,g&&Zv(`+1 ${g.replace(/_/g," ")}`))}),KM(e),ax(e),Ju.update(e,te.position.x),Uo=Math.max(0,Uo-e),Oe.tickItemName(e),nn.t=(nn.t+e)%nn.dayLength;const t=nn.t/nn.dayLength*Math.PI*2,n=Math.sin(t),s=n<-.1;PM.update(t,te.position);const r=Pe.generator.biomeAt(Math.floor(te.position.x),Math.floor(te.position.z));jt.update(e,te.position,r),nr.update(e),nr.setBlock(ve[Oe.activeBlock()]||ve.stone),te.position.y<-10&&(te.position.copy(Lo(0,0,10)),te.velocity.set(0,0,0));const o=te.sprinting?ht.fov+10:ht.fov;if(dn.fov+=(o-dn.fov)*(1-Math.exp(-15*e)),dn.updateProjectionMatrix(),za-=e,te.grounded&&za<=0&&te.position.distanceTo(eu)>=1.5){eu.copy(te.position),za=.25;const d=Pe.getBlock(Math.floor(te.position.x),Math.floor(te.position.y-1.7),Math.floor(te.position.z));fv(d.name||"stone")}if(zt){const g=Va;if(!g||g.wx!==zt.wx||g.wy!==zt.wy||g.wz!==zt.wz)zt=null,ir.stop();else{const d=I_(Oe.activeBlock(),zt.blockKey);zt.progress+=e/((zt.block.hardness||1)*ny)*d,ir.setProgress(zt.progress),zt.progress>=1&&(hf(zt),zt=null,ir.stop())}}for(let g=ot.length-1;g>=0;g--){const d=ot[g],_=Math.sqrt((d.mesh.position.x-te.position.x)**2+(d.mesh.position.z-te.position.z)**2),m=Math.abs(d.mesh.position.y-te.position.y);if(d.type.explosive&&!d.type.passive&&(!d.exploding&&_<2.5&&m<3&&(d.exploding=!0,d.flashTimer=1.5,d.flashPhase=0,dt("A creeper is about to explode!")),d.exploding)){d.flashTimer-=e,d.flashPhase=(d.flashPhase||0)+e*12;const A=Math.sin(d.flashPhase)>0;if(d.mesh.traverse(I=>{I.isMesh&&I.material.emissive?.setHex(A?16777215:0)}),d.flashTimer<=0){const I=d.mesh.position.clone();if(UM(I,3),Ps.spawn(I.x,I.y,I.z,16746496,50),dt("BOOM! A creeper exploded!"),!sn)for(const y of pc(d.type))for(let x=0;x<y.count;x++)Gi.spawn(I.x,I.y+.5,I.z,y.item,d.type.color);Ye.remove(d.mesh),Cs(d.mesh),ot.splice(g,1);continue}const b=d.mesh.position.y-.05;Pe.getBlock(Math.floor(d.mesh.position.x),Math.floor(b),Math.floor(d.mesh.position.z)).solid?d.mesh.position.y=Math.floor(b)+1:d.mesh.position.y-=9*e;continue}if(d.lastStuckCheckPos||(d.lastStuckCheckPos=d.mesh.position.clone(),d.stuckTimer=0),d.stuckTimer+=e,d.stuckTimer>=2&&(d.mesh.position.distanceTo(d.lastStuckCheckPos)<.4&&(d.mesh.position.y+=1.8,d.dir+=(Math.random()-.5)*Math.PI),d.lastStuckCheckPos.copy(d.mesh.position),d.stuckTimer=0),d.type.ranged&&!d.type.passive)if(_<18&&m<5){if(d.shootCooldown=(d.shootCooldown||0)-e,d.mesh.rotation.y=Math.atan2(te.position.x-d.mesh.position.x,te.position.z-d.mesh.position.z),d.shootCooldown<=0){d.shootCooldown=2+Math.random()*1.5;const b=d.mesh.position.clone();b.y+=.9;const R=new D(te.position.x-b.x,te.position.y-b.y,te.position.z-b.z).normalize();R.x+=(Math.random()-.5)*.15,R.y+=(Math.random()-.5)*.1,R.z+=(Math.random()-.5)*.15,R.normalize(),af(b,R,Qu*.85,4,!1)}}else d.shootCooldown=1;if(!d.type.passive&&!d.type.ranged)if(_<32&&m<6){d.dir=Math.atan2(te.position.x-d.mesh.position.x,te.position.z-d.mesh.position.z),d.mesh.rotation.y=d.dir;const R=d.type.speed*.7,I=Math.sin(d.dir)*R*e,y=Math.cos(d.dir)*R*e,x=Math.floor(d.mesh.position.y+.5),P=d.mesh.position.x+I,F=d.mesh.position.z+y;let B=!1,V=!1;const Y=Pe.getBlock(Math.floor(P),x,Math.floor(d.mesh.position.z)),q=Pe.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(F));if(Y.solid?Pe.getBlock(Math.floor(P),x+1,Math.floor(d.mesh.position.z)).solid?B=!0:(d.mesh.position.x=P,d.mesh.position.y+=1):d.mesh.position.x=P,q.solid?Pe.getBlock(Math.floor(d.mesh.position.x),x+1,Math.floor(F)).solid?V=!0:(d.mesh.position.z=F,d.mesh.position.y+=1):d.mesh.position.z=F,B&&!V&&(d.mesh.position.x+=Math.cos(d.dir)*R*e),V&&!B&&(d.mesh.position.z+=-Math.sin(d.dir)*R*e),_<1.8&&m<2.5&&(d.attackCooldown=(d.attackCooldown||0)-e,d.attackCooldown<=0)){d.attackCooldown=1.2,Rs(d.type.id,"hurt");const J=d.type.damage||3;Ni(J,`Killed by ${d.type.id}`),dt(`${d.type.id} hit you for ${J} HP`);const k=te.position.x-d.mesh.position.x,ne=te.position.z-d.mesh.position.z,le=Math.sqrt(k*k+ne*ne)||1;te.velocity.x+=k/le*4,te.velocity.z+=ne/le*4,te.velocity.y+=2.5}}else{d.dir+=(Math.random()-.5)*e*.5;const R=d.type.speed*.4,I=Math.sin(d.dir)*R*e,y=Math.cos(d.dir)*R*e,x=Math.floor(d.mesh.position.y+.5),P=d.mesh.position.x+I,F=d.mesh.position.z+y,B=Pe.getBlock(Math.floor(P),x,Math.floor(d.mesh.position.z)),V=Pe.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(F));B.solid?d.dir+=Math.PI/2:d.mesh.position.x=P,V.solid?d.dir+=Math.PI/2:d.mesh.position.z=F,d.mesh.rotation.y=d.dir}else if(d.type.passive){if(d.fleeTimer&&d.fleeTimer>0){d.fleeTimer-=e;const b=Math.atan2(d.mesh.position.x-te.position.x,d.mesh.position.z-te.position.z);d.dir=b;const R=d.type.speed*1.5,I=Math.sin(d.dir)*R*e,y=Math.cos(d.dir)*R*e,x=Math.floor(d.mesh.position.y+.5),P=d.mesh.position.x+I,F=d.mesh.position.z+y,B=Pe.getBlock(Math.floor(P),x,Math.floor(d.mesh.position.z)),V=Pe.getBlock(Math.floor(d.mesh.position.x),x,Math.floor(F));B.solid?d.dir+=Math.PI/2:d.mesh.position.x=P,V.solid?d.dir+=Math.PI/2:d.mesh.position.z=F}else{d.dir+=(Math.random()-.5)*e*.5;const b=d.type.speed*.6,R=Math.sin(d.dir)*b*e,I=Math.cos(d.dir)*b*e,y=Math.floor(d.mesh.position.y+.5),x=d.mesh.position.x+R,P=d.mesh.position.z+I,F=Pe.getBlock(Math.floor(x),y,Math.floor(d.mesh.position.z)),B=Pe.getBlock(Math.floor(d.mesh.position.x),y,Math.floor(P));F.solid?d.dir+=Math.PI/2:d.mesh.position.x=x,B.solid?d.dir+=Math.PI/2:d.mesh.position.z=P}d.mesh.rotation.y=d.dir}const T=d.mesh.position.y-.05;Pe.getBlock(Math.floor(d.mesh.position.x),Math.floor(T),Math.floor(d.mesh.position.z)).solid?d.mesh.position.y=Math.floor(T)+1:d.mesh.position.y-=9*e;const S=Math.abs(Math.sin(d.dir)*d.type.speed*e)>.001;Yv(d,e,S),d.mesh.position.y<-10&&(d.mesh.position.y=Pe.getSurfaceY(Math.floor(d.mesh.position.x),Math.floor(d.mesh.position.z))+1+.7)}$h.position.set(Math.cos(t)*50,n*50,20),$h.intensity=Math.max(.05,n*.8+.2),AM.intensity=Math.max(.1,n*.45+.3);const a=$_(t);if(te.isInWater(Pe)?(Ye.fog.color.set(1718890),Ye.fog.near=2,Ye.fog.far=25,Ye.background.set(1718890)):(Ye.fog.color.copy(a),Ye.fog.near=Jn*de*.5,Ye.fog.far=Jn*de*1.5,Ye.background.copy(a),(jt.raining||jt.snowing)&&Ye.background.multiplyScalar(.6)),s&&!Ha){dt("Night falls. Monsters approach...");for(let g=0;g<3;g++)ql(!0,!1)}if(!s&&Ha){Oi++,dt(`Day ${Oi} — good morning!`);for(let g=ot.length-1;g>=0;g--)ot[g].type.passive||(Ye.remove(ot[g].mesh),Cs(ot[g].mesh),ot.splice(g,1))}if(Ha=s,s?oo=0:(oo+=e,oo>=30&&(oo=0,ot.filter(d=>d.type.passive).length<4&&ql(!1,!0))),Oa+=e,Oa>=8){Oa=0;const g=te.position.y;let d="day";g<15?d="cave":s&&(d="night"),d!==jh&&(jh=d,dv(d)),g>=15&&Mv(r)}if(jt.raining&&!jt._audioRaining?(jt._audioRaining=!0,vv()):!jt.raining&&jt._audioRaining&&(jt._audioRaining=!1,xv()),jt.lightningFlash>.9&&!jt._lastLightningPlayed?(jt._lastLightningPlayed=!0,mv()):jt.lightningFlash<.1&&(jt._lastLightningPlayed=!1),ka+=e,ka>=3&&(ka=0,ot.length>0)){const g=ot[Math.floor(Math.random()*ot.length)];Math.sqrt((g.mesh.position.x-te.position.x)**2+(g.mesh.position.z-te.position.z)**2)<20&&Rs(g.type.id,"idle")}Ec(!1),i-iu>=100&&(Va=cf(),iu=i);const l=Va;if(l&&Pe.getBlock(l.wx,l.wy,l.wz).name!=="Air"?(rr.visible=!0,rr.position.set(l.wx+.5,l.wy+.5,l.wz+.5)):rr.visible=!1,te.fallDamage){const g=te.fallDamage,d=Math.floor(g-3);d>0&&(Ni(d,"Fell from a high place"),dt(`Oof! Fell ${g.toFixed(1)} blocks (-${d} HP)`)),te.fallDamage=null}const c=s?"Night":n>.5?"Noon":n>0?"Day":"Dusk",h=Oe.activeBlock(),u=Vt[h]||Ui[h]||ve[h],f=[`XYZ ${te.position.x.toFixed(1)} ${te.position.y.toFixed(1)} ${te.position.z.toFixed(1)}`,`Day ${Oi} | ${c}`,`Level ${ti} | XP ${Tn}/${Ds}`,`Biome: ${Pe.generator.biomeAt(Math.floor(te.position.x),Math.floor(te.position.z))}`,`Block: ${l&&Pe.getBlock(l.wx,l.wy,l.wz).name||"none"}`,u?`Held: ${u.name}${Vt[h]?` (${Oe.toolDurability.get(h)??Vt[h].maxDurability}/${Vt[h].maxDurability} dur)`:""}`:"",zt?`Breaking ${(zt.progress*100).toFixed(0)}%`:"",`FPS ${(1/e).toFixed(0)}`,No?"Multiplayer":"Singleplayer",te.flying?"[FLYING] (F to toggle)":"",sn?"[CREATIVE] (G to toggle)":""];if(Oe.renderOverlay(f.filter(Boolean).join(`
`)),No&&vn.send("player_state",{state:{x:te.position.x,y:te.position.y,z:te.position.z,yaw:te.rotation.x,pitch:te.rotation.y}}),te.isInWater(Pe)){if(Ci-=e,Ci<=0&&!sn&&(Ci=1.5,Ni(2,"Drowned")),ao&&ao.classList.add("active"),qs){qs.classList.add("active");const g=10,d=Math.max(0,Math.ceil(Ci/10*g));let _="";for(let m=0;m<g;m++)_+=`<span class="bubble ${m>=d?"empty":""}"></span>`;qs.innerHTML=_}}else Ci=Math.min(10,Ci+e*3),ao&&ao.classList.remove("active"),qs&&qs.classList.remove("active");if(!sn){const g=te.sprinting?15:30;Ba+=e,Ba>=g&&(Ba=0,un>0&&(un=Math.max(0,un-1),Sr())),un>=18&&Sn<20?(er+=e,er>=4&&(er=0,Sn=Math.min(20,Sn+1),yr())):er=0,un<=0?(tr+=e,tr>=3&&(tr=0,Ni(1,"Starved to death"))):tr=0}IM(),nu+=e,px(nu),Fa.render(),requestAnimationFrame(xo)}requestAnimationFrame(xo);
