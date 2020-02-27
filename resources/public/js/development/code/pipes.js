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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__28744){
var map__28745 = p__28744;
var map__28745__$1 = (((((!((map__28745 == null))))?(((((map__28745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28745):map__28745);
var config = map__28745__$1;
var pipe_width = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),pipe_width);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((pipe_width + bar_int_buffer) - (bar_width / (2)));
var seq__28747 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__28749 = null;
var count__28750 = (0);
var i__28751 = (0);
while(true){
if((i__28751 < count__28750)){
var b = cljs.core._nth.call(null,chunk__28749,i__28751);
var x_28753 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_28753,pipe_width,bar_width,ifh);


var G__28754 = seq__28747;
var G__28755 = chunk__28749;
var G__28756 = count__28750;
var G__28757 = (i__28751 + (1));
seq__28747 = G__28754;
chunk__28749 = G__28755;
count__28750 = G__28756;
i__28751 = G__28757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28747);
if(temp__5735__auto__){
var seq__28747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28747__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28747__$1);
var G__28758 = cljs.core.chunk_rest.call(null,seq__28747__$1);
var G__28759 = c__4550__auto__;
var G__28760 = cljs.core.count.call(null,c__4550__auto__);
var G__28761 = (0);
seq__28747 = G__28758;
chunk__28749 = G__28759;
count__28750 = G__28760;
i__28751 = G__28761;
continue;
} else {
var b = cljs.core.first.call(null,seq__28747__$1);
var x_28762 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_28762,pipe_width,bar_width,ifh);


var G__28763 = cljs.core.next.call(null,seq__28747__$1);
var G__28764 = null;
var G__28765 = (0);
var G__28766 = (0);
seq__28747 = G__28763;
chunk__28749 = G__28764;
count__28750 = G__28765;
i__28751 = G__28766;
continue;
}
} else {
return null;
}
}
break;
}
});
code.pipes.fg_pipes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Used for drawing the overlaying top bars, alongside bg-bars
 *   Requires state! (@fg-pipes)
 */
code.pipes.build_fg_horiz_pipes = (function code$pipes$build_fg_horiz_pipes(p__28767){
var map__28768 = p__28767;
var map__28768__$1 = (((((!((map__28768 == null))))?(((((map__28768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28768):map__28768);
var lpipe_w = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var as = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var lpipe_y = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var vals = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var rpipe_w = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off = cljs.core.get.call(null,map__28768__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x,lpipe_y,lpipe_w,pipe_width);

quil.core.arc.call(null,(circ1_x - cc_off),circ1_y,circ_r,circ_r,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x,y_pos,rpipe_w,pipe_width);

return quil.core.arc.call(null,(cc_off + circ2_x),circ1_y,circ_r,circ_r,quil.core.HALF_PI,(- quil.core.HALF_PI));
});
/**
 * The first layer of pipes, these run horizontally behind build-vert-pipes
 *   These start flush with inner frame xl and  xr.
 *   They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
 *   These lines end with a circle at their tip.
 */
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__28770){
var map__28771 = p__28770;
var map__28771__$1 = (((((!((map__28771 == null))))?(((((map__28771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28771):map__28771);
var config = map__28771__$1;
var pipe_width = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__28771__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (6);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var first_bar_width = code.util._PERCENT_of.call(null,(66),ifw);
var set_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code.util._PERCENT_of.call(null,(33),ifw),code.util._PERCENT_of.call(null,(66),ifw)], null);
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__28773_28779 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__28775_28780 = null;
var count__28776_28781 = (0);
var i__28777_28782 = (0);
while(true){
if((i__28777_28782 < count__28776_28781)){
var bar_28783 = cljs.core._nth.call(null,chunk__28775_28780,i__28777_28782);
var bar_type_28784 = cljs.core.even_QMARK_.call(null,bar_28783);
var y_top_offset_28785 = ((3) * pipe_width);
var y_pos_28786 = (y_top_offset_28785 + (bar_28783 * pipe_width));
var lpipe_x_28787 = pipe_width;
var lpipe_y_28788 = y_pos_28786;
var lpipe_w_28789 = ((bar_type_28784)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_28790 = (pipe_width + lpipe_w_28789);
var circ_r_28791 = pipe_width;
var circ1_y_28792 = ((circ_r_28791 / (2)) + y_pos_28786);
var circ2_y_28793 = circ1_y_28792;
var circ2_x_28794 = (space_between_bars + circ1_x_28790);
var rpipe_x_28795 = circ2_x_28794;
var rpipe_w_28796 = (fw - circ2_x_28794);
var cc_off_28797 = (1);
if(bar_type_28784){
quil.core.rect.call(null,lpipe_x_28787,lpipe_y_28788,lpipe_w_28789,pipe_width);

quil.core.ellipse.call(null,circ1_x_28790,circ1_y_28792,circ_r_28791,circ_r_28791);

quil.core.rect.call(null,rpipe_x_28795,y_pos_28786,rpipe_w_28796,pipe_width);

quil.core.ellipse.call(null,circ2_x_28794,circ1_y_28792,circ_r_28791,circ_r_28791);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_28788,circ2_x_28794,circ1_y_28792,rpipe_x_28795,lpipe_x_28787,rpipe_w_28796,circ_r_28791,cc_off_28797,lpipe_w_28789,pipe_width,y_pos_28786,circ1_x_28790]));
}


var G__28798 = seq__28773_28779;
var G__28799 = chunk__28775_28780;
var G__28800 = count__28776_28781;
var G__28801 = (i__28777_28782 + (1));
seq__28773_28779 = G__28798;
chunk__28775_28780 = G__28799;
count__28776_28781 = G__28800;
i__28777_28782 = G__28801;
continue;
} else {
var temp__5735__auto___28802 = cljs.core.seq.call(null,seq__28773_28779);
if(temp__5735__auto___28802){
var seq__28773_28803__$1 = temp__5735__auto___28802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28773_28803__$1)){
var c__4550__auto___28804 = cljs.core.chunk_first.call(null,seq__28773_28803__$1);
var G__28805 = cljs.core.chunk_rest.call(null,seq__28773_28803__$1);
var G__28806 = c__4550__auto___28804;
var G__28807 = cljs.core.count.call(null,c__4550__auto___28804);
var G__28808 = (0);
seq__28773_28779 = G__28805;
chunk__28775_28780 = G__28806;
count__28776_28781 = G__28807;
i__28777_28782 = G__28808;
continue;
} else {
var bar_28809 = cljs.core.first.call(null,seq__28773_28803__$1);
var bar_type_28810 = cljs.core.even_QMARK_.call(null,bar_28809);
var y_top_offset_28811 = ((3) * pipe_width);
var y_pos_28812 = (y_top_offset_28811 + (bar_28809 * pipe_width));
var lpipe_x_28813 = pipe_width;
var lpipe_y_28814 = y_pos_28812;
var lpipe_w_28815 = ((bar_type_28810)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_28816 = (pipe_width + lpipe_w_28815);
var circ_r_28817 = pipe_width;
var circ1_y_28818 = ((circ_r_28817 / (2)) + y_pos_28812);
var circ2_y_28819 = circ1_y_28818;
var circ2_x_28820 = (space_between_bars + circ1_x_28816);
var rpipe_x_28821 = circ2_x_28820;
var rpipe_w_28822 = (fw - circ2_x_28820);
var cc_off_28823 = (1);
if(bar_type_28810){
quil.core.rect.call(null,lpipe_x_28813,lpipe_y_28814,lpipe_w_28815,pipe_width);

quil.core.ellipse.call(null,circ1_x_28816,circ1_y_28818,circ_r_28817,circ_r_28817);

quil.core.rect.call(null,rpipe_x_28821,y_pos_28812,rpipe_w_28822,pipe_width);

quil.core.ellipse.call(null,circ2_x_28820,circ1_y_28818,circ_r_28817,circ_r_28817);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_28814,circ2_x_28820,circ1_y_28818,rpipe_x_28821,lpipe_x_28813,rpipe_w_28822,circ_r_28817,cc_off_28823,lpipe_w_28815,pipe_width,y_pos_28812,circ1_x_28816]));
}


var G__28824 = cljs.core.next.call(null,seq__28773_28803__$1);
var G__28825 = null;
var G__28826 = (0);
var G__28827 = (0);
seq__28773_28779 = G__28824;
chunk__28775_28780 = G__28825;
count__28776_28781 = G__28826;
i__28777_28782 = G__28827;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,code.pipes.fg_pipes,cljs.core.deref.call(null,local_horiz_cache));
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

code.pipes.build_vert_pipes.call(null,config);

var seq__28828 = cljs.core.seq.call(null,cljs.core.deref.call(null,code.pipes.fg_pipes));
var chunk__28829 = null;
var count__28830 = (0);
var i__28831 = (0);
while(true){
if((i__28831 < count__28830)){
var f = cljs.core._nth.call(null,chunk__28829,i__28831);
code.pipes.build_fg_horiz_pipes.call(null,f);


var G__28832 = seq__28828;
var G__28833 = chunk__28829;
var G__28834 = count__28830;
var G__28835 = (i__28831 + (1));
seq__28828 = G__28832;
chunk__28829 = G__28833;
count__28830 = G__28834;
i__28831 = G__28835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28828);
if(temp__5735__auto__){
var seq__28828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28828__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28828__$1);
var G__28836 = cljs.core.chunk_rest.call(null,seq__28828__$1);
var G__28837 = c__4550__auto__;
var G__28838 = cljs.core.count.call(null,c__4550__auto__);
var G__28839 = (0);
seq__28828 = G__28836;
chunk__28829 = G__28837;
count__28830 = G__28838;
i__28831 = G__28839;
continue;
} else {
var f = cljs.core.first.call(null,seq__28828__$1);
code.pipes.build_fg_horiz_pipes.call(null,f);


var G__28840 = cljs.core.next.call(null,seq__28828__$1);
var G__28841 = null;
var G__28842 = (0);
var G__28843 = (0);
seq__28828 = G__28840;
chunk__28829 = G__28841;
count__28830 = G__28842;
i__28831 = G__28843;
continue;
}
} else {
return null;
}
}
break;
}
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
var G__28844__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__28844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28845__i = 0, G__28845__a = new Array(arguments.length -  0);
while (G__28845__i < G__28845__a.length) {G__28845__a[G__28845__i] = arguments[G__28845__i + 0]; ++G__28845__i;}
  args = new cljs.core.IndexedSeq(G__28845__a,0,null);
} 
return G__28844__delegate.call(this,args);};
G__28844.cljs$lang$maxFixedArity = 0;
G__28844.cljs$lang$applyTo = (function (arglist__28846){
var args = cljs.core.seq(arglist__28846);
return G__28844__delegate(args);
});
G__28844.cljs$core$IFn$_invoke$arity$variadic = G__28844__delegate;
return G__28844;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__28847__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__28847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28848__i = 0, G__28848__a = new Array(arguments.length -  0);
while (G__28848__i < G__28848__a.length) {G__28848__a[G__28848__i] = arguments[G__28848__i + 0]; ++G__28848__i;}
  args = new cljs.core.IndexedSeq(G__28848__a,0,null);
} 
return G__28847__delegate.call(this,args);};
G__28847.cljs$lang$maxFixedArity = 0;
G__28847.cljs$lang$applyTo = (function (arglist__28849){
var args = cljs.core.seq(arglist__28849);
return G__28847__delegate(args);
});
G__28847.cljs$core$IFn$_invoke$arity$variadic = G__28847__delegate;
return G__28847;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__28850__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__28850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28851__i = 0, G__28851__a = new Array(arguments.length -  0);
while (G__28851__i < G__28851__a.length) {G__28851__a[G__28851__i] = arguments[G__28851__i + 0]; ++G__28851__i;}
  args = new cljs.core.IndexedSeq(G__28851__a,0,null);
} 
return G__28850__delegate.call(this,args);};
G__28850.cljs$lang$maxFixedArity = 0;
G__28850.cljs$lang$applyTo = (function (arglist__28852){
var args = cljs.core.seq(arglist__28852);
return G__28850__delegate(args);
});
G__28850.cljs$core$IFn$_invoke$arity$variadic = G__28850__delegate;
return G__28850;
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

//# sourceMappingURL=pipes.js.map?rel=1582834570138
