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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__31757){
var map__31758 = p__31757;
var map__31758__$1 = (((((!((map__31758 == null))))?(((((map__31758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31758):map__31758);
var config = map__31758__$1;
var pipe_width = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__31758__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),pipe_width);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((pipe_width + bar_int_buffer) - (bar_width / (2)));
var seq__31760 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__31762 = null;
var count__31763 = (0);
var i__31764 = (0);
while(true){
if((i__31764 < count__31763)){
var b = cljs.core._nth.call(null,chunk__31762,i__31764);
var x_31766 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_31766,pipe_width,bar_width,ifh);


var G__31767 = seq__31760;
var G__31768 = chunk__31762;
var G__31769 = count__31763;
var G__31770 = (i__31764 + (1));
seq__31760 = G__31767;
chunk__31762 = G__31768;
count__31763 = G__31769;
i__31764 = G__31770;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31760);
if(temp__5735__auto__){
var seq__31760__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31760__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31760__$1);
var G__31771 = cljs.core.chunk_rest.call(null,seq__31760__$1);
var G__31772 = c__4550__auto__;
var G__31773 = cljs.core.count.call(null,c__4550__auto__);
var G__31774 = (0);
seq__31760 = G__31771;
chunk__31762 = G__31772;
count__31763 = G__31773;
i__31764 = G__31774;
continue;
} else {
var b = cljs.core.first.call(null,seq__31760__$1);
var x_31775 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_31775,pipe_width,bar_width,ifh);


var G__31776 = cljs.core.next.call(null,seq__31760__$1);
var G__31777 = null;
var G__31778 = (0);
var G__31779 = (0);
seq__31760 = G__31776;
chunk__31762 = G__31777;
count__31763 = G__31778;
i__31764 = G__31779;
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
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__31780){
var map__31781 = p__31780;
var map__31781__$1 = (((((!((map__31781 == null))))?(((((map__31781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31781):map__31781);
var config = map__31781__$1;
var pipe_width = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__31781__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (3);
var space_between_bars = code.util._PERCENT_of.call(null,(13),ifw);
var first_bar_width = code.util._PERCENT_of.call(null,(33),ifw);
var seq__31783 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__31785 = null;
var count__31786 = (0);
var i__31787 = (0);
while(true){
if((i__31787 < count__31786)){
var bar = cljs.core._nth.call(null,chunk__31785,i__31787);
var y_top_offset_31789 = ((3) * pipe_width);
var y_pos_31790 = (y_top_offset_31789 + (bar * ((2) * pipe_width)));
var lpipe_x_31791 = pipe_width;
var lpipe_y_31792 = y_pos_31790;
var lpipe_w_31793 = first_bar_width;
var circ1_x_31794 = (pipe_width + first_bar_width);
var circ_r_31795 = pipe_width;
var circ1_y_31796 = ((circ_r_31795 / (2)) + y_pos_31790);
var circ2_y_31797 = circ1_y_31796;
var circ2_x_31798 = (space_between_bars + circ1_x_31794);
var rpipe_x_31799 = circ2_x_31798;
var rpipe_w_31800 = (fw - circ2_x_31798);
quil.core.rect.call(null,lpipe_x_31791,lpipe_y_31792,lpipe_w_31793,pipe_width);

quil.core.ellipse.call(null,circ1_x_31794,circ1_y_31796,circ_r_31795,circ_r_31795);

quil.core.rect.call(null,rpipe_x_31799,y_pos_31790,rpipe_w_31800,pipe_width);

quil.core.ellipse.call(null,circ2_x_31798,circ1_y_31796,circ_r_31795,circ_r_31795);

cljs.core.prn.call(null,"hi");


var G__31801 = seq__31783;
var G__31802 = chunk__31785;
var G__31803 = count__31786;
var G__31804 = (i__31787 + (1));
seq__31783 = G__31801;
chunk__31785 = G__31802;
count__31786 = G__31803;
i__31787 = G__31804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31783);
if(temp__5735__auto__){
var seq__31783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31783__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31783__$1);
var G__31805 = cljs.core.chunk_rest.call(null,seq__31783__$1);
var G__31806 = c__4550__auto__;
var G__31807 = cljs.core.count.call(null,c__4550__auto__);
var G__31808 = (0);
seq__31783 = G__31805;
chunk__31785 = G__31806;
count__31786 = G__31807;
i__31787 = G__31808;
continue;
} else {
var bar = cljs.core.first.call(null,seq__31783__$1);
var y_top_offset_31809 = ((3) * pipe_width);
var y_pos_31810 = (y_top_offset_31809 + (bar * ((2) * pipe_width)));
var lpipe_x_31811 = pipe_width;
var lpipe_y_31812 = y_pos_31810;
var lpipe_w_31813 = first_bar_width;
var circ1_x_31814 = (pipe_width + first_bar_width);
var circ_r_31815 = pipe_width;
var circ1_y_31816 = ((circ_r_31815 / (2)) + y_pos_31810);
var circ2_y_31817 = circ1_y_31816;
var circ2_x_31818 = (space_between_bars + circ1_x_31814);
var rpipe_x_31819 = circ2_x_31818;
var rpipe_w_31820 = (fw - circ2_x_31818);
quil.core.rect.call(null,lpipe_x_31811,lpipe_y_31812,lpipe_w_31813,pipe_width);

quil.core.ellipse.call(null,circ1_x_31814,circ1_y_31816,circ_r_31815,circ_r_31815);

quil.core.rect.call(null,rpipe_x_31819,y_pos_31810,rpipe_w_31820,pipe_width);

quil.core.ellipse.call(null,circ2_x_31818,circ1_y_31816,circ_r_31815,circ_r_31815);

cljs.core.prn.call(null,"hi");


var G__31821 = cljs.core.next.call(null,seq__31783__$1);
var G__31822 = null;
var G__31823 = (0);
var G__31824 = (0);
seq__31783 = G__31821;
chunk__31785 = G__31822;
count__31786 = G__31823;
i__31787 = G__31824;
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
var pipe_width = code.util._PERCENT_of.call(null,2.5,quil.core.width.call(null));
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
var G__31825__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__31825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31826__i = 0, G__31826__a = new Array(arguments.length -  0);
while (G__31826__i < G__31826__a.length) {G__31826__a[G__31826__i] = arguments[G__31826__i + 0]; ++G__31826__i;}
  args = new cljs.core.IndexedSeq(G__31826__a,0,null);
} 
return G__31825__delegate.call(this,args);};
G__31825.cljs$lang$maxFixedArity = 0;
G__31825.cljs$lang$applyTo = (function (arglist__31827){
var args = cljs.core.seq(arglist__31827);
return G__31825__delegate(args);
});
G__31825.cljs$core$IFn$_invoke$arity$variadic = G__31825__delegate;
return G__31825;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__31828__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__31828 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31829__i = 0, G__31829__a = new Array(arguments.length -  0);
while (G__31829__i < G__31829__a.length) {G__31829__a[G__31829__i] = arguments[G__31829__i + 0]; ++G__31829__i;}
  args = new cljs.core.IndexedSeq(G__31829__a,0,null);
} 
return G__31828__delegate.call(this,args);};
G__31828.cljs$lang$maxFixedArity = 0;
G__31828.cljs$lang$applyTo = (function (arglist__31830){
var args = cljs.core.seq(arglist__31830);
return G__31828__delegate(args);
});
G__31828.cljs$core$IFn$_invoke$arity$variadic = G__31828__delegate;
return G__31828;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__31831__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__31831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31832__i = 0, G__31832__a = new Array(arguments.length -  0);
while (G__31832__i < G__31832__a.length) {G__31832__a[G__31832__i] = arguments[G__31832__i + 0]; ++G__31832__i;}
  args = new cljs.core.IndexedSeq(G__31832__a,0,null);
} 
return G__31831__delegate.call(this,args);};
G__31831.cljs$lang$maxFixedArity = 0;
G__31831.cljs$lang$applyTo = (function (arglist__31833){
var args = cljs.core.seq(arglist__31833);
return G__31831__delegate(args);
});
G__31831.cljs$core$IFn$_invoke$arity$variadic = G__31831__delegate;
return G__31831;
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

//# sourceMappingURL=pipes.js.map?rel=1582037161908
