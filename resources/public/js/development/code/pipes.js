// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
/**
 * Draws vertical pipes within the structure of build-frame,
 *   pipes are spread evently across the frame, default numbering 5.
 *   Seems to be using the same x-y grid with the offset from build-frame; ie
 *   the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
 *   @param: `f-off` - the thickness of the frame bars
 *   @param: `frame-width` - the span of the frame, inclusive of the bars.
 *   
 */
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(f_off,frame_width,frame_height){
var ifw = (frame_width - f_off);
var ifh = (frame_height - f_off);
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),f_off);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((f_off + bar_int_buffer) - (bar_width / (2)));
var seq__33002 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__33004 = null;
var count__33005 = (0);
var i__33006 = (0);
while(true){
if((i__33006 < count__33005)){
var b = cljs.core._nth.call(null,chunk__33004,i__33006);
var x_33008 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_33008,f_off,bar_width,ifh);


var G__33009 = seq__33002;
var G__33010 = chunk__33004;
var G__33011 = count__33005;
var G__33012 = (i__33006 + (1));
seq__33002 = G__33009;
chunk__33004 = G__33010;
count__33005 = G__33011;
i__33006 = G__33012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__33002);
if(temp__5735__auto__){
var seq__33002__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33002__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__33002__$1);
var G__33013 = cljs.core.chunk_rest.call(null,seq__33002__$1);
var G__33014 = c__4550__auto__;
var G__33015 = cljs.core.count.call(null,c__4550__auto__);
var G__33016 = (0);
seq__33002 = G__33013;
chunk__33004 = G__33014;
count__33005 = G__33015;
i__33006 = G__33016;
continue;
} else {
var b = cljs.core.first.call(null,seq__33002__$1);
var x_33017 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_33017,f_off,bar_width,ifh);


var G__33018 = cljs.core.next.call(null,seq__33002__$1);
var G__33019 = null;
var G__33020 = (0);
var G__33021 = (0);
seq__33002 = G__33018;
chunk__33004 = G__33019;
count__33005 = G__33020;
i__33006 = G__33021;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Builds the outer rectangular frame which is made of 4 long, thin rectangles.
 */
code.pipes.build_frame = (function code$pipes$build_frame(){
var thickness = code.util._PERCENT_of.call(null,(2),quil.core.width.call(null));
var offset_from_edge = code.util._PERCENT_of.call(null,(25),quil.core.width.call(null));
var span_w = ((quil.core.width.call(null) - offset_from_edge) - thickness);
var span_h = ((quil.core.height.call(null) - offset_from_edge) - thickness);
var tx = (offset_from_edge / (2));
var tr__26877__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,tx], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto__);

quil.core.rect.call(null,(0),(0),span_w,thickness);

quil.core.rect.call(null,span_w,(0),thickness,span_h);

quil.core.rect.call(null,thickness,span_h,span_w,thickness);

quil.core.rect.call(null,(0),thickness,thickness,span_h);

return code.pipes.build_vert_pipes.call(null,thickness,span_w,span_h);
}finally {quil.core.pop_matrix.call(null);
}});
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

return code.pipes.build_frame.call(null);
});
code.pipes.run_sketch = (function code$pipes$run_sketch(){
code.pipes.code = (function code$pipes$run_sketch_$_code(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"code",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,code.pipes.update_state))?(function() { 
var G__33022__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__33022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33023__i = 0, G__33023__a = new Array(arguments.length -  0);
while (G__33023__i < G__33023__a.length) {G__33023__a[G__33023__i] = arguments[G__33023__i + 0]; ++G__33023__i;}
  args = new cljs.core.IndexedSeq(G__33023__a,0,null);
} 
return G__33022__delegate.call(this,args);};
G__33022.cljs$lang$maxFixedArity = 0;
G__33022.cljs$lang$applyTo = (function (arglist__33024){
var args = cljs.core.seq(arglist__33024);
return G__33022__delegate(args);
});
G__33022.cljs$core$IFn$_invoke$arity$variadic = G__33022__delegate;
return G__33022;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__33025__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__33025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33026__i = 0, G__33026__a = new Array(arguments.length -  0);
while (G__33026__i < G__33026__a.length) {G__33026__a[G__33026__i] = arguments[G__33026__i + 0]; ++G__33026__i;}
  args = new cljs.core.IndexedSeq(G__33026__a,0,null);
} 
return G__33025__delegate.call(this,args);};
G__33025.cljs$lang$maxFixedArity = 0;
G__33025.cljs$lang$applyTo = (function (arglist__33027){
var args = cljs.core.seq(arglist__33027);
return G__33025__delegate(args);
});
G__33025.cljs$core$IFn$_invoke$arity$variadic = G__33025__delegate;
return G__33025;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__33028__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__33028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33029__i = 0, G__33029__a = new Array(arguments.length -  0);
while (G__33029__i < G__33029__a.length) {G__33029__a[G__33029__i] = arguments[G__33029__i + 0]; ++G__33029__i;}
  args = new cljs.core.IndexedSeq(G__33029__a,0,null);
} 
return G__33028__delegate.call(this,args);};
G__33028.cljs$lang$maxFixedArity = 0;
G__33028.cljs$lang$applyTo = (function (arglist__33030){
var args = cljs.core.seq(arglist__33030);
return G__33028__delegate(args);
});
G__33028.cljs$core$IFn$_invoke$arity$variadic = G__33028__delegate;
return G__33028;
})()
:code.pipes.draw_state));
});
goog.exportSymbol('code.pipes.code', code.pipes.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26471__26472__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26471__26472__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.pipes.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.pipes.run_sketch', code.pipes.run_sketch);

//# sourceMappingURL=pipes.js.map?rel=1581946433626
