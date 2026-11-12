"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=s(function(D,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),o=require('@stdlib/ndarray-base-stride/dist'),p=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-daxpb/dist').ndarray,u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function x(a){var r,i,e;return e=a[0],r=u(a[1]),i=u(a[2]),m(d(e,0),r,i,l(e),o(e,0),p(e)),e}v.exports=x
});var c=require("path").join,f=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=n(),t,q=f(c(__dirname,"./native.js"));b(q)?t=g:t=q;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
