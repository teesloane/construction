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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__32685){
var map__32686 = p__32685;
var map__32686__$1 = (((((!((map__32686 == null))))?(((((map__32686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32686):map__32686);
var config = map__32686__$1;
var pipe_width = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__32686__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = code.util._PERCENT_of.call(null,(75),pipe_width);
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((pipe_width + bar_int_buffer) - (bar_width / (2)));
var seq__32688 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__32690 = null;
var count__32691 = (0);
var i__32692 = (0);
while(true){
if((i__32692 < count__32691)){
var b = cljs.core._nth.call(null,chunk__32690,i__32692);
var x_32694 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_32694,pipe_width,bar_width,ifh);


var G__32695 = seq__32688;
var G__32696 = chunk__32690;
var G__32697 = count__32691;
var G__32698 = (i__32692 + (1));
seq__32688 = G__32695;
chunk__32690 = G__32696;
count__32691 = G__32697;
i__32692 = G__32698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32688);
if(temp__5735__auto__){
var seq__32688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32688__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32688__$1);
var G__32699 = cljs.core.chunk_rest.call(null,seq__32688__$1);
var G__32700 = c__4550__auto__;
var G__32701 = cljs.core.count.call(null,c__4550__auto__);
var G__32702 = (0);
seq__32688 = G__32699;
chunk__32690 = G__32700;
count__32691 = G__32701;
i__32692 = G__32702;
continue;
} else {
var b = cljs.core.first.call(null,seq__32688__$1);
var x_32703 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_32703,pipe_width,bar_width,ifh);


var G__32704 = cljs.core.next.call(null,seq__32688__$1);
var G__32705 = null;
var G__32706 = (0);
var G__32707 = (0);
seq__32688 = G__32704;
chunk__32690 = G__32705;
count__32691 = G__32706;
i__32692 = G__32707;
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
code.pipes.build_fg_horiz_pipes = (function code$pipes$build_fg_horiz_pipes(pipes_list){
var seq__32708 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__32710 = null;
var count__32711 = (0);
var i__32712 = (0);
while(true){
if((i__32712 < count__32711)){
var f = cljs.core._nth.call(null,chunk__32710,i__32712);
var map__32718_32722 = f;
var map__32718_32723__$1 = (((((!((map__32718_32722 == null))))?(((((map__32718_32722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32718_32722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32718_32722):map__32718_32722);
var vals_32724 = map__32718_32723__$1;
var lpipe_w_32725 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_32726 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_32727 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_32728 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_32729 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_32730 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_32731 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_32732 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_32733 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_32734 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_32735 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_32736 = cljs.core.get.call(null,map__32718_32723__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_32732,lpipe_y_32729,lpipe_w_32725,pipe_width_32726);

quil.core.arc.call(null,(circ1_x_32728 - cc_off_32736),circ1_y_32731,circ_r_32735,circ_r_32735,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_32733,y_pos_32727,rpipe_w_32734,pipe_width_32726);

quil.core.arc.call(null,(cc_off_32736 + circ2_x_32730),circ1_y_32731,circ_r_32735,circ_r_32735,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__32737 = seq__32708;
var G__32738 = chunk__32710;
var G__32739 = count__32711;
var G__32740 = (i__32712 + (1));
seq__32708 = G__32737;
chunk__32710 = G__32738;
count__32711 = G__32739;
i__32712 = G__32740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32708);
if(temp__5735__auto__){
var seq__32708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32708__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32708__$1);
var G__32741 = cljs.core.chunk_rest.call(null,seq__32708__$1);
var G__32742 = c__4550__auto__;
var G__32743 = cljs.core.count.call(null,c__4550__auto__);
var G__32744 = (0);
seq__32708 = G__32741;
chunk__32710 = G__32742;
count__32711 = G__32743;
i__32712 = G__32744;
continue;
} else {
var f = cljs.core.first.call(null,seq__32708__$1);
var map__32720_32745 = f;
var map__32720_32746__$1 = (((((!((map__32720_32745 == null))))?(((((map__32720_32745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32720_32745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32720_32745):map__32720_32745);
var vals_32747 = map__32720_32746__$1;
var lpipe_w_32748 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_32749 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_32750 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_32751 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_32752 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_32753 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_32754 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_32755 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_32756 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_32757 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_32758 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_32759 = cljs.core.get.call(null,map__32720_32746__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_32755,lpipe_y_32752,lpipe_w_32748,pipe_width_32749);

quil.core.arc.call(null,(circ1_x_32751 - cc_off_32759),circ1_y_32754,circ_r_32758,circ_r_32758,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_32756,y_pos_32750,rpipe_w_32757,pipe_width_32749);

quil.core.arc.call(null,(cc_off_32759 + circ2_x_32753),circ1_y_32754,circ_r_32758,circ_r_32758,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__32760 = cljs.core.next.call(null,seq__32708__$1);
var G__32761 = null;
var G__32762 = (0);
var G__32763 = (0);
seq__32708 = G__32760;
chunk__32710 = G__32761;
count__32711 = G__32762;
i__32712 = G__32763;
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
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__32764){
var map__32765 = p__32764;
var map__32765__$1 = (((((!((map__32765 == null))))?(((((map__32765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32765):map__32765);
var config = map__32765__$1;
var pipe_width = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (6);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var first_bar_width = code.util._PERCENT_of.call(null,(66),ifw);
var set_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code.util._PERCENT_of.call(null,(33),ifw),code.util._PERCENT_of.call(null,(66),ifw)], null);
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__32767_32773 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__32769_32774 = null;
var count__32770_32775 = (0);
var i__32771_32776 = (0);
while(true){
if((i__32771_32776 < count__32770_32775)){
var bar_32777 = cljs.core._nth.call(null,chunk__32769_32774,i__32771_32776);
var bar_type_32778 = cljs.core.even_QMARK_.call(null,bar_32777);
var y_top_offset_32779 = ((3) * pipe_width);
var y_pos_32780 = (y_top_offset_32779 + (bar_32777 * pipe_width));
var lpipe_x_32781 = pipe_width;
var lpipe_y_32782 = y_pos_32780;
var lpipe_w_32783 = ((bar_type_32778)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_32784 = (pipe_width + lpipe_w_32783);
var circ_r_32785 = pipe_width;
var circ1_y_32786 = ((circ_r_32785 / (2)) + y_pos_32780);
var circ2_y_32787 = circ1_y_32786;
var circ2_x_32788 = (space_between_bars + circ1_x_32784);
var rpipe_x_32789 = circ2_x_32788;
var rpipe_w_32790 = (fw - circ2_x_32788);
var cc_off_32791 = (1);
if(bar_type_32778){
quil.core.rect.call(null,lpipe_x_32781,lpipe_y_32782,lpipe_w_32783,pipe_width);

quil.core.ellipse.call(null,circ1_x_32784,circ1_y_32786,circ_r_32785,circ_r_32785);

quil.core.rect.call(null,rpipe_x_32789,y_pos_32780,rpipe_w_32790,pipe_width);

quil.core.ellipse.call(null,circ2_x_32788,circ1_y_32786,circ_r_32785,circ_r_32785);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_32782,circ2_x_32788,circ1_y_32786,rpipe_x_32789,lpipe_x_32781,rpipe_w_32790,circ_r_32785,cc_off_32791,lpipe_w_32783,pipe_width,y_pos_32780,circ1_x_32784]));
}


var G__32792 = seq__32767_32773;
var G__32793 = chunk__32769_32774;
var G__32794 = count__32770_32775;
var G__32795 = (i__32771_32776 + (1));
seq__32767_32773 = G__32792;
chunk__32769_32774 = G__32793;
count__32770_32775 = G__32794;
i__32771_32776 = G__32795;
continue;
} else {
var temp__5735__auto___32796 = cljs.core.seq.call(null,seq__32767_32773);
if(temp__5735__auto___32796){
var seq__32767_32797__$1 = temp__5735__auto___32796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32767_32797__$1)){
var c__4550__auto___32798 = cljs.core.chunk_first.call(null,seq__32767_32797__$1);
var G__32799 = cljs.core.chunk_rest.call(null,seq__32767_32797__$1);
var G__32800 = c__4550__auto___32798;
var G__32801 = cljs.core.count.call(null,c__4550__auto___32798);
var G__32802 = (0);
seq__32767_32773 = G__32799;
chunk__32769_32774 = G__32800;
count__32770_32775 = G__32801;
i__32771_32776 = G__32802;
continue;
} else {
var bar_32803 = cljs.core.first.call(null,seq__32767_32797__$1);
var bar_type_32804 = cljs.core.even_QMARK_.call(null,bar_32803);
var y_top_offset_32805 = ((3) * pipe_width);
var y_pos_32806 = (y_top_offset_32805 + (bar_32803 * pipe_width));
var lpipe_x_32807 = pipe_width;
var lpipe_y_32808 = y_pos_32806;
var lpipe_w_32809 = ((bar_type_32804)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_32810 = (pipe_width + lpipe_w_32809);
var circ_r_32811 = pipe_width;
var circ1_y_32812 = ((circ_r_32811 / (2)) + y_pos_32806);
var circ2_y_32813 = circ1_y_32812;
var circ2_x_32814 = (space_between_bars + circ1_x_32810);
var rpipe_x_32815 = circ2_x_32814;
var rpipe_w_32816 = (fw - circ2_x_32814);
var cc_off_32817 = (1);
if(bar_type_32804){
quil.core.rect.call(null,lpipe_x_32807,lpipe_y_32808,lpipe_w_32809,pipe_width);

quil.core.ellipse.call(null,circ1_x_32810,circ1_y_32812,circ_r_32811,circ_r_32811);

quil.core.rect.call(null,rpipe_x_32815,y_pos_32806,rpipe_w_32816,pipe_width);

quil.core.ellipse.call(null,circ2_x_32814,circ1_y_32812,circ_r_32811,circ_r_32811);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_32808,circ2_x_32814,circ1_y_32812,rpipe_x_32815,lpipe_x_32807,rpipe_w_32816,circ_r_32811,cc_off_32817,lpipe_w_32809,pipe_width,y_pos_32806,circ1_x_32810]));
}


var G__32818 = cljs.core.next.call(null,seq__32767_32797__$1);
var G__32819 = null;
var G__32820 = (0);
var G__32821 = (0);
seq__32767_32773 = G__32818;
chunk__32769_32774 = G__32819;
count__32770_32775 = G__32820;
i__32771_32776 = G__32821;
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
var num_batches = (3);
var offset_batch = code.util._PERCENT_of.call(null,33.3,span_h);
var config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),pipe_width,new cljs.core.Keyword(null,"fw","fw",-2145665918),span_w,new cljs.core.Keyword(null,"fh","fh",-1663396998),span_h,new cljs.core.Keyword(null,"ifw","ifw",411867642),(span_w - pipe_width),new cljs.core.Keyword(null,"ifh","ifh",943985660),(span_h - pipe_width)], null);
var seq_layers = ((function (pipe_width,offset_from_edge,span_w,span_h,tx,num_batches,offset_batch,config){
return (function (func){
var seq__32822 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_batches));
var chunk__32823 = null;
var count__32824 = (0);
var i__32825 = (0);
while(true){
if((i__32825 < count__32824)){
var amt = cljs.core._nth.call(null,chunk__32823,i__32825);
var tr__26877__auto___32826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(amt * offset_batch)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___32826);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__32827 = seq__32822;
var G__32828 = chunk__32823;
var G__32829 = count__32824;
var G__32830 = (i__32825 + (1));
seq__32822 = G__32827;
chunk__32823 = G__32828;
count__32824 = G__32829;
i__32825 = G__32830;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32822);
if(temp__5735__auto__){
var seq__32822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32822__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32822__$1);
var G__32831 = cljs.core.chunk_rest.call(null,seq__32822__$1);
var G__32832 = c__4550__auto__;
var G__32833 = cljs.core.count.call(null,c__4550__auto__);
var G__32834 = (0);
seq__32822 = G__32831;
chunk__32823 = G__32832;
count__32824 = G__32833;
i__32825 = G__32834;
continue;
} else {
var amt = cljs.core.first.call(null,seq__32822__$1);
var tr__26877__auto___32835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(amt * offset_batch)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___32835);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__32836 = cljs.core.next.call(null,seq__32822__$1);
var G__32837 = null;
var G__32838 = (0);
var G__32839 = (0);
seq__32822 = G__32836;
chunk__32823 = G__32837;
count__32824 = G__32838;
i__32825 = G__32839;
continue;
}
} else {
return null;
}
}
break;
}
});})(pipe_width,offset_from_edge,span_w,span_h,tx,num_batches,offset_batch,config))
;
var tr__26877__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,tx], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto__);

quil.core.rect.call(null,(0),(0),span_w,pipe_width);

quil.core.rect.call(null,span_w,(0),pipe_width,span_h);

quil.core.rect.call(null,pipe_width,span_h,span_w,pipe_width);

quil.core.rect.call(null,(0),pipe_width,pipe_width,span_h);

seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_bg_horiz_pipes,config));

code.pipes.build_vert_pipes.call(null,config);

return seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_fg_horiz_pipes,code.pipes.fg_pipes));
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
var G__32840__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__32840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32841__i = 0, G__32841__a = new Array(arguments.length -  0);
while (G__32841__i < G__32841__a.length) {G__32841__a[G__32841__i] = arguments[G__32841__i + 0]; ++G__32841__i;}
  args = new cljs.core.IndexedSeq(G__32841__a,0,null);
} 
return G__32840__delegate.call(this,args);};
G__32840.cljs$lang$maxFixedArity = 0;
G__32840.cljs$lang$applyTo = (function (arglist__32842){
var args = cljs.core.seq(arglist__32842);
return G__32840__delegate(args);
});
G__32840.cljs$core$IFn$_invoke$arity$variadic = G__32840__delegate;
return G__32840;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__32843__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__32843 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32844__i = 0, G__32844__a = new Array(arguments.length -  0);
while (G__32844__i < G__32844__a.length) {G__32844__a[G__32844__i] = arguments[G__32844__i + 0]; ++G__32844__i;}
  args = new cljs.core.IndexedSeq(G__32844__a,0,null);
} 
return G__32843__delegate.call(this,args);};
G__32843.cljs$lang$maxFixedArity = 0;
G__32843.cljs$lang$applyTo = (function (arglist__32845){
var args = cljs.core.seq(arglist__32845);
return G__32843__delegate(args);
});
G__32843.cljs$core$IFn$_invoke$arity$variadic = G__32843__delegate;
return G__32843;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__32846__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__32846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32847__i = 0, G__32847__a = new Array(arguments.length -  0);
while (G__32847__i < G__32847__a.length) {G__32847__a[G__32847__i] = arguments[G__32847__i + 0]; ++G__32847__i;}
  args = new cljs.core.IndexedSeq(G__32847__a,0,null);
} 
return G__32846__delegate.call(this,args);};
G__32846.cljs$lang$maxFixedArity = 0;
G__32846.cljs$lang$applyTo = (function (arglist__32848){
var args = cljs.core.seq(arglist__32848);
return G__32846__delegate(args);
});
G__32846.cljs$core$IFn$_invoke$arity$variadic = G__32846__delegate;
return G__32846;
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

//# sourceMappingURL=pipes.js.map?rel=1582836463413
