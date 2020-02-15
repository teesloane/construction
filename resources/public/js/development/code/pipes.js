// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
/**
 * Builds the outer rectangular frame which is made of 4 long, thin rectangles.
 */
code.pipes.build_frame = (function code$pipes$build_frame(){
var thickness = code.util._PERCENT_of.call(null,(2),quil.core.width.call(null));
var offset_from_edge = (50);
var span_w = ((quil.core.width.call(null) - offset_from_edge) - thickness);
var span_h = ((quil.core.height.call(null) - offset_from_edge) - thickness);
quil.core.rect.call(null,(0),(0),span_w,thickness);

quil.core.rect.call(null,span_w,(0),thickness,span_h);

quil.core.rect.call(null,thickness,span_h,span_w,thickness);

return quil.core.rect.call(null,(0),thickness,thickness,span_h);
});
code.pipes.setup = (function code$pipes$setup(){
quil.core.frame_rate.call(null,(1));

quil.core.smooth.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return cljs.core.PersistentArrayMap.EMPTY;
});
code.pipes.update_state = (function code$pipes$update_state(state){
return cljs.core.PersistentArrayMap.EMPTY;
});
code.pipes.draw_state = (function code$pipes$draw_state(state){
quil.core.background.call(null,(240));

var tr__26878__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26878__auto__);

return code.pipes.build_frame.call(null);
}finally {quil.core.pop_matrix.call(null);
}});
code.pipes.run_sketch = (function code$pipes$run_sketch(){
code.pipes.code = (function code$pipes$run_sketch_$_code(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"code",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,code.pipes.update_state))?(function() { 
var G__27558__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__27558 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27559__i = 0, G__27559__a = new Array(arguments.length -  0);
while (G__27559__i < G__27559__a.length) {G__27559__a[G__27559__i] = arguments[G__27559__i + 0]; ++G__27559__i;}
  args = new cljs.core.IndexedSeq(G__27559__a,0,null);
} 
return G__27558__delegate.call(this,args);};
G__27558.cljs$lang$maxFixedArity = 0;
G__27558.cljs$lang$applyTo = (function (arglist__27560){
var args = cljs.core.seq(arglist__27560);
return G__27558__delegate(args);
});
G__27558.cljs$core$IFn$_invoke$arity$variadic = G__27558__delegate;
return G__27558;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__27561__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__27561 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27562__i = 0, G__27562__a = new Array(arguments.length -  0);
while (G__27562__i < G__27562__a.length) {G__27562__a[G__27562__i] = arguments[G__27562__i + 0]; ++G__27562__i;}
  args = new cljs.core.IndexedSeq(G__27562__a,0,null);
} 
return G__27561__delegate.call(this,args);};
G__27561.cljs$lang$maxFixedArity = 0;
G__27561.cljs$lang$applyTo = (function (arglist__27563){
var args = cljs.core.seq(arglist__27563);
return G__27561__delegate(args);
});
G__27561.cljs$core$IFn$_invoke$arity$variadic = G__27561__delegate;
return G__27561;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__27564__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__27564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27565__i = 0, G__27565__a = new Array(arguments.length -  0);
while (G__27565__i < G__27565__a.length) {G__27565__a[G__27565__i] = arguments[G__27565__i + 0]; ++G__27565__i;}
  args = new cljs.core.IndexedSeq(G__27565__a,0,null);
} 
return G__27564__delegate.call(this,args);};
G__27564.cljs$lang$maxFixedArity = 0;
G__27564.cljs$lang$applyTo = (function (arglist__27566){
var args = cljs.core.seq(arglist__27566);
return G__27564__delegate(args);
});
G__27564.cljs$core$IFn$_invoke$arity$variadic = G__27564__delegate;
return G__27564;
})()
:code.pipes.draw_state));
});
goog.exportSymbol('code.pipes.code', code.pipes.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26472__26473__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26472__26473__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.pipes.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.pipes.run_sketch', code.pipes.run_sketch);

//# sourceMappingURL=pipes.js.map?rel=1581735987460
