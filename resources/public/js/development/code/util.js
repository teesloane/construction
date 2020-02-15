// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.util');
goog.require('cljs.core');
goog.require('quil.core');
code.util.map_n__GT_0_1 = (function code$util$map_n__GT_0_1(n,in_min,in_max){
return quil.core.map_range.call(null,n,in_min,in_max,(0),(1));
});
code.util.rand_b_w = (function code$util$rand_b_w(a,b){
return quil.core.map_range.call(null,cljs.core.rand.call(null,(1)),(0),(1),a,b);
});
code.util._PERCENT_of = (function code$util$_PERCENT_of(a,b){
return ((a / (100)) * b);
});

//# sourceMappingURL=util.js.map?rel=1581732095188
