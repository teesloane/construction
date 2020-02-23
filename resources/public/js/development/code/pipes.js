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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__30393){
var map__30394 = p__30393;
var map__30394__$1 = (((((!((map__30394 == null))))?(((((map__30394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30394):map__30394);
var config = map__30394__$1;
var pipe_width = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__30394__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),pipe_width);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((pipe_width + bar_int_buffer) - (bar_width / (2)));
var seq__30396 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__30398 = null;
var count__30399 = (0);
var i__30400 = (0);
while(true){
if((i__30400 < count__30399)){
var b = cljs.core._nth.call(null,chunk__30398,i__30400);
var x_30402 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_30402,pipe_width,bar_width,ifh);


var G__30403 = seq__30396;
var G__30404 = chunk__30398;
var G__30405 = count__30399;
var G__30406 = (i__30400 + (1));
seq__30396 = G__30403;
chunk__30398 = G__30404;
count__30399 = G__30405;
i__30400 = G__30406;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30396);
if(temp__5735__auto__){
var seq__30396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30396__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30396__$1);
var G__30407 = cljs.core.chunk_rest.call(null,seq__30396__$1);
var G__30408 = c__4550__auto__;
var G__30409 = cljs.core.count.call(null,c__4550__auto__);
var G__30410 = (0);
seq__30396 = G__30407;
chunk__30398 = G__30408;
count__30399 = G__30409;
i__30400 = G__30410;
continue;
} else {
var b = cljs.core.first.call(null,seq__30396__$1);
var x_30411 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_30411,pipe_width,bar_width,ifh);


var G__30412 = cljs.core.next.call(null,seq__30396__$1);
var G__30413 = null;
var G__30414 = (0);
var G__30415 = (0);
seq__30396 = G__30412;
chunk__30398 = G__30413;
count__30399 = G__30414;
i__30400 = G__30415;
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
 * The first layer of pipes, these run horizontally behind build-vert-pipes
 *   These start flush with inner frame xl and  xr.
 *   They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
 *   These lines end with a circle at their tip.
 */
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__30416){
var map__30417 = p__30416;
var map__30417__$1 = (((((!((map__30417 == null))))?(((((map__30417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30417):map__30417);
var config = map__30417__$1;
var pipe_width = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (6);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var first_bar_width = code.util._PERCENT_of.call(null,(66),ifw);
var set_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code.util._PERCENT_of.call(null,(33),ifw),code.util._PERCENT_of.call(null,(66),ifw)], null);
var seq__30419 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__30421 = null;
var count__30422 = (0);
var i__30423 = (0);
while(true){
if((i__30423 < count__30422)){
var bar = cljs.core._nth.call(null,chunk__30421,i__30423);
var bar_type_30425 = cljs.core.even_QMARK_.call(null,bar);
var y_top_offset_30426 = ((3) * pipe_width);
var y_pos_30427 = (y_top_offset_30426 + (bar * pipe_width));
var lpipe_x_30428 = pipe_width;
var lpipe_y_30429 = y_pos_30427;
var lpipe_w_30430 = ((bar_type_30425)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_30431 = (pipe_width + lpipe_w_30430);
var circ_r_30432 = pipe_width;
var circ1_y_30433 = ((circ_r_30432 / (2)) + y_pos_30427);
var circ2_y_30434 = circ1_y_30433;
var circ2_x_30435 = (space_between_bars + circ1_x_30431);
var rpipe_x_30436 = circ2_x_30435;
var rpipe_w_30437 = (fw - circ2_x_30435);
var cc_off_30438 = (1);
if(bar_type_30425){
quil.core.rect.call(null,lpipe_x_30428,lpipe_y_30429,lpipe_w_30430,pipe_width);

quil.core.ellipse.call(null,circ1_x_30431,circ1_y_30433,circ_r_30432,circ_r_30432);

quil.core.rect.call(null,rpipe_x_30436,y_pos_30427,rpipe_w_30437,pipe_width);

quil.core.ellipse.call(null,circ2_x_30435,circ1_y_30433,circ_r_30432,circ_r_30432);
} else {
quil.core.rect.call(null,lpipe_x_30428,lpipe_y_30429,lpipe_w_30430,pipe_width);

quil.core.arc.call(null,(circ1_x_30431 - cc_off_30438),circ1_y_30433,circ_r_30432,circ_r_30432,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_30436,y_pos_30427,rpipe_w_30437,pipe_width);

quil.core.arc.call(null,(cc_off_30438 + circ2_x_30435),circ1_y_30433,circ_r_30432,circ_r_30432,quil.core.HALF_PI,(- quil.core.HALF_PI));
}


var G__30439 = seq__30419;
var G__30440 = chunk__30421;
var G__30441 = count__30422;
var G__30442 = (i__30423 + (1));
seq__30419 = G__30439;
chunk__30421 = G__30440;
count__30422 = G__30441;
i__30423 = G__30442;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30419);
if(temp__5735__auto__){
var seq__30419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30419__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30419__$1);
var G__30443 = cljs.core.chunk_rest.call(null,seq__30419__$1);
var G__30444 = c__4550__auto__;
var G__30445 = cljs.core.count.call(null,c__4550__auto__);
var G__30446 = (0);
seq__30419 = G__30443;
chunk__30421 = G__30444;
count__30422 = G__30445;
i__30423 = G__30446;
continue;
} else {
var bar = cljs.core.first.call(null,seq__30419__$1);
var bar_type_30447 = cljs.core.even_QMARK_.call(null,bar);
var y_top_offset_30448 = ((3) * pipe_width);
var y_pos_30449 = (y_top_offset_30448 + (bar * pipe_width));
var lpipe_x_30450 = pipe_width;
var lpipe_y_30451 = y_pos_30449;
var lpipe_w_30452 = ((bar_type_30447)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_30453 = (pipe_width + lpipe_w_30452);
var circ_r_30454 = pipe_width;
var circ1_y_30455 = ((circ_r_30454 / (2)) + y_pos_30449);
var circ2_y_30456 = circ1_y_30455;
var circ2_x_30457 = (space_between_bars + circ1_x_30453);
var rpipe_x_30458 = circ2_x_30457;
var rpipe_w_30459 = (fw - circ2_x_30457);
var cc_off_30460 = (1);
if(bar_type_30447){
quil.core.rect.call(null,lpipe_x_30450,lpipe_y_30451,lpipe_w_30452,pipe_width);

quil.core.ellipse.call(null,circ1_x_30453,circ1_y_30455,circ_r_30454,circ_r_30454);

quil.core.rect.call(null,rpipe_x_30458,y_pos_30449,rpipe_w_30459,pipe_width);

quil.core.ellipse.call(null,circ2_x_30457,circ1_y_30455,circ_r_30454,circ_r_30454);
} else {
quil.core.rect.call(null,lpipe_x_30450,lpipe_y_30451,lpipe_w_30452,pipe_width);

quil.core.arc.call(null,(circ1_x_30453 - cc_off_30460),circ1_y_30455,circ_r_30454,circ_r_30454,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_30458,y_pos_30449,rpipe_w_30459,pipe_width);

quil.core.arc.call(null,(cc_off_30460 + circ2_x_30457),circ1_y_30455,circ_r_30454,circ_r_30454,quil.core.HALF_PI,(- quil.core.HALF_PI));
}


var G__30461 = cljs.core.next.call(null,seq__30419__$1);
var G__30462 = null;
var G__30463 = (0);
var G__30464 = (0);
seq__30419 = G__30461;
chunk__30421 = G__30462;
count__30422 = G__30463;
i__30423 = G__30464;
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
var G__30465__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__30465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30466__i = 0, G__30466__a = new Array(arguments.length -  0);
while (G__30466__i < G__30466__a.length) {G__30466__a[G__30466__i] = arguments[G__30466__i + 0]; ++G__30466__i;}
  args = new cljs.core.IndexedSeq(G__30466__a,0,null);
} 
return G__30465__delegate.call(this,args);};
G__30465.cljs$lang$maxFixedArity = 0;
G__30465.cljs$lang$applyTo = (function (arglist__30467){
var args = cljs.core.seq(arglist__30467);
return G__30465__delegate(args);
});
G__30465.cljs$core$IFn$_invoke$arity$variadic = G__30465__delegate;
return G__30465;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__30468__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__30468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30469__i = 0, G__30469__a = new Array(arguments.length -  0);
while (G__30469__i < G__30469__a.length) {G__30469__a[G__30469__i] = arguments[G__30469__i + 0]; ++G__30469__i;}
  args = new cljs.core.IndexedSeq(G__30469__a,0,null);
} 
return G__30468__delegate.call(this,args);};
G__30468.cljs$lang$maxFixedArity = 0;
G__30468.cljs$lang$applyTo = (function (arglist__30470){
var args = cljs.core.seq(arglist__30470);
return G__30468__delegate(args);
});
G__30468.cljs$core$IFn$_invoke$arity$variadic = G__30468__delegate;
return G__30468;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__30471__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__30471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30472__i = 0, G__30472__a = new Array(arguments.length -  0);
while (G__30472__i < G__30472__a.length) {G__30472__a[G__30472__i] = arguments[G__30472__i + 0]; ++G__30472__i;}
  args = new cljs.core.IndexedSeq(G__30472__a,0,null);
} 
return G__30471__delegate.call(this,args);};
G__30471.cljs$lang$maxFixedArity = 0;
G__30471.cljs$lang$applyTo = (function (arglist__30473){
var args = cljs.core.seq(arglist__30473);
return G__30471__delegate(args);
});
G__30471.cljs$core$IFn$_invoke$arity$variadic = G__30471__delegate;
return G__30471;
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

//# sourceMappingURL=pipes.js.map?rel=1582476811540
