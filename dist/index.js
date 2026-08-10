"use strict";var n=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=n(function(f,u){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),c=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-daxpb/dist').ndarray,t=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function o(a){var r,i,e;return e=a[0],r=t(a[1]),i=t(a[2]),l(s(e,0),r,i,c(e),q(e,0),d(e)),e}u.exports=o
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
