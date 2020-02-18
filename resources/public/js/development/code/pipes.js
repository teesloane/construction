// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
/**
 * Draws vertical pipes within the structure of build-frame,
 *   pipes are spread evenly across the frame, default numbering 5.
 *   Seems to be using the same x-y grid with the offset from build-frame; ie
 *   the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
 */
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__35160){
var map__35161 = p__35160;
var map__35161__$1 = (((((!((map__35161 == null))))?(((((map__35161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35161):map__35161);
var config = map__35161__$1;
var pipe_width = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__35161__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),pipe_width);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((pipe_width + bar_int_buffer) - (bar_width / (2)));
var seq__35163 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__35165 = null;
var count__35166 = (0);
var i__35167 = (0);
while(true){
if((i__35167 < count__35166)){
var b = cljs.core._nth.call(null,chunk__35165,i__35167);
var x_35169 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_35169,pipe_width,bar_width,ifh);


var G__35170 = seq__35163;
var G__35171 = chunk__35165;
var G__35172 = count__35166;
var G__35173 = (i__35167 + (1));
seq__35163 = G__35170;
chunk__35165 = G__35171;
count__35166 = G__35172;
i__35167 = G__35173;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35163);
if(temp__5735__auto__){
var seq__35163__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35163__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35163__$1);
var G__35174 = cljs.core.chunk_rest.call(null,seq__35163__$1);
var G__35175 = c__4550__auto__;
var G__35176 = cljs.core.count.call(null,c__4550__auto__);
var G__35177 = (0);
seq__35163 = G__35174;
chunk__35165 = G__35175;
count__35166 = G__35176;
i__35167 = G__35177;
continue;
} else {
var b = cljs.core.first.call(null,seq__35163__$1);
var x_35178 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_35178,pipe_width,bar_width,ifh);


var G__35179 = cljs.core.next.call(null,seq__35163__$1);
var G__35180 = null;
var G__35181 = (0);
var G__35182 = (0);
seq__35163 = G__35179;
chunk__35165 = G__35180;
count__35166 = G__35181;
i__35167 = G__35182;
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
 * The first layer of pipes, these run horizontall behind build-vert-pipes
 *   These start flush with inner frame xl and  xr.
 *   They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
 *   These lines end with a circle at their tip.
 */
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__35183){
var map__35184 = p__35183;
var map__35184__$1 = (((((!((map__35184 == null))))?(((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35184):map__35184);
var config = map__35184__$1;
var pipe_width = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__35184__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
quil.core.rect.call(null,(10),(20),code.util._PERCENT_of.call(null,(66),ifw),pipe_width);

return quil.core.ellipse.call(null,(pipe_width + code.util._PERCENT_of.call(null,(66),ifw)),(25),(10),(10));
});
/**
 * Builds the outer rectangular frame which is made of 4 long, thin rectangles.
 */
code.pipes.build_frame = (function code$pipes$build_frame(){
var pipe_width = code.util._PERCENT_of.call(null,(2),quil.core.width.call(null));
var offset_from_edge = code.util._PERCENT_of.call(null,(25),quil.core.width.call(null));
var span_w = ((quil.core.width.call(null) - offset_from_edge) - pipe_width);
var span_h = ((quil.core.height.call(null) - offset_from_edge) - pipe_width);
var tx = (offset_from_edge / (2));
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),pipe_width,new cljs.core.Keyword(null,"fw","fw",-2145665918),span_w,new cljs.core.Keyword(null,"fh","fh",-1663396998),span_h,new cljs.core.Keyword(null,"ifw","ifw",411867642),(span_w - pipe_width),new cljs.core.Keyword(null,"ifh","ifh",943985660),(span_h - pipe_width)], null);
var tr__26877__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,tx], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto__);

quil.core.rect.call(null,(0),(0),span_w,pipe_width);

quil.core.rect.call(null,span_w,(0),pipe_width,span_h);

quil.core.rect.call(null,pipe_width,span_h,span_w,pipe_width);

quil.core.rect.call(null,(0),pipe_width,pipe_width,span_h);

code.pipes.build_bg_horiz_pipes.call(null,config);

return code.pipes.build_vert_pipes.call(null,config);
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
var G__35186__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__35186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35187__i = 0, G__35187__a = new Array(arguments.length -  0);
while (G__35187__i < G__35187__a.length) {G__35187__a[G__35187__i] = arguments[G__35187__i + 0]; ++G__35187__i;}
  args = new cljs.core.IndexedSeq(G__35187__a,0,null);
} 
return G__35186__delegate.call(this,args);};
G__35186.cljs$lang$maxFixedArity = 0;
G__35186.cljs$lang$applyTo = (function (arglist__35188){
var args = cljs.core.seq(arglist__35188);
return G__35186__delegate(args);
});
G__35186.cljs$core$IFn$_invoke$arity$variadic = G__35186__delegate;
return G__35186;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__35189__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__35189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35190__i = 0, G__35190__a = new Array(arguments.length -  0);
while (G__35190__i < G__35190__a.length) {G__35190__a[G__35190__i] = arguments[G__35190__i + 0]; ++G__35190__i;}
  args = new cljs.core.IndexedSeq(G__35190__a,0,null);
} 
return G__35189__delegate.call(this,args);};
G__35189.cljs$lang$maxFixedArity = 0;
G__35189.cljs$lang$applyTo = (function (arglist__35191){
var args = cljs.core.seq(arglist__35191);
return G__35189__delegate(args);
});
G__35189.cljs$core$IFn$_invoke$arity$variadic = G__35189__delegate;
return G__35189;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__35192__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__35192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35193__i = 0, G__35193__a = new Array(arguments.length -  0);
while (G__35193__i < G__35193__a.length) {G__35193__a[G__35193__i] = arguments[G__35193__i + 0]; ++G__35193__i;}
  args = new cljs.core.IndexedSeq(G__35193__a,0,null);
} 
return G__35192__delegate.call(this,args);};
G__35192.cljs$lang$maxFixedArity = 0;
G__35192.cljs$lang$applyTo = (function (arglist__35194){
var args = cljs.core.seq(arglist__35194);
return G__35192__delegate(args);
});
G__35192.cljs$core$IFn$_invoke$arity$variadic = G__35192__delegate;
return G__35192;
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

//# sourceMappingURL=pipes.js.map?rel=1581992295755
