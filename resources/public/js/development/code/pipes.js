// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
code.pipes.fg_pipes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
code.pipes.colors = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(3200),(100)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1000),(100),(1)], null)], null);
/**
 * Draws vertical pipes within the structure of build-frame,
 *   pipes are spread evenly across the frame, default numbering 5.
 *   Seems to be using the same x-y grid with the offset from build-frame; ie
 *   the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
 */
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__41693){
var map__41694 = p__41693;
var map__41694__$1 = (((((!((map__41694 == null))))?(((((map__41694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41694):map__41694);
var config = map__41694__$1;
var frame_width = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var pipe_width = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__41694__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = pipe_width;
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3333,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((frame_width + bar_int_buffer) - (frame_width / (2)));
var seq__41696 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__41698 = null;
var count__41699 = (0);
var i__41700 = (0);
while(true){
if((i__41700 < count__41699)){
var b = cljs.core._nth.call(null,chunk__41698,i__41700);
var x_41702 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_41702,frame_width,bar_width,ifh);


var G__41703 = seq__41696;
var G__41704 = chunk__41698;
var G__41705 = count__41699;
var G__41706 = (i__41700 + (1));
seq__41696 = G__41703;
chunk__41698 = G__41704;
count__41699 = G__41705;
i__41700 = G__41706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41696);
if(temp__5735__auto__){
var seq__41696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41696__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41696__$1);
var G__41707 = cljs.core.chunk_rest.call(null,seq__41696__$1);
var G__41708 = c__4550__auto__;
var G__41709 = cljs.core.count.call(null,c__4550__auto__);
var G__41710 = (0);
seq__41696 = G__41707;
chunk__41698 = G__41708;
count__41699 = G__41709;
i__41700 = G__41710;
continue;
} else {
var b = cljs.core.first.call(null,seq__41696__$1);
var x_41711 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_41711,frame_width,bar_width,ifh);


var G__41712 = cljs.core.next.call(null,seq__41696__$1);
var G__41713 = null;
var G__41714 = (0);
var G__41715 = (0);
seq__41696 = G__41712;
chunk__41698 = G__41713;
count__41699 = G__41714;
i__41700 = G__41715;
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
 * Used for drawing the overlaying top bars, alongside bg-bars
 *   Requires state! (@fg-pipes)
 */
code.pipes.build_fg_horiz_pipes = (function code$pipes$build_fg_horiz_pipes(pipes_list){
var seq__41716 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__41718 = null;
var count__41719 = (0);
var i__41720 = (0);
while(true){
if((i__41720 < count__41719)){
var f = cljs.core._nth.call(null,chunk__41718,i__41720);
var map__41726_41730 = f;
var map__41726_41731__$1 = (((((!((map__41726_41730 == null))))?(((((map__41726_41730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41726_41730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41726_41730):map__41726_41730);
var vals_41732 = map__41726_41731__$1;
var lpipe_w_41733 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_41734 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_41735 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_41736 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_41737 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_41738 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_41739 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_41740 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_41741 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_41742 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_41743 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_41744 = cljs.core.get.call(null,map__41726_41731__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_41740,lpipe_y_41737,lpipe_w_41733,pipe_width_41734);

quil.core.arc.call(null,(circ1_x_41736 - cc_off_41744),circ1_y_41739,circ_r_41743,circ_r_41743,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_41741,y_pos_41735,rpipe_w_41742,pipe_width_41734);

quil.core.arc.call(null,(cc_off_41744 + circ2_x_41738),circ1_y_41739,circ_r_41743,circ_r_41743,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__41745 = seq__41716;
var G__41746 = chunk__41718;
var G__41747 = count__41719;
var G__41748 = (i__41720 + (1));
seq__41716 = G__41745;
chunk__41718 = G__41746;
count__41719 = G__41747;
i__41720 = G__41748;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41716);
if(temp__5735__auto__){
var seq__41716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41716__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41716__$1);
var G__41749 = cljs.core.chunk_rest.call(null,seq__41716__$1);
var G__41750 = c__4550__auto__;
var G__41751 = cljs.core.count.call(null,c__4550__auto__);
var G__41752 = (0);
seq__41716 = G__41749;
chunk__41718 = G__41750;
count__41719 = G__41751;
i__41720 = G__41752;
continue;
} else {
var f = cljs.core.first.call(null,seq__41716__$1);
var map__41728_41753 = f;
var map__41728_41754__$1 = (((((!((map__41728_41753 == null))))?(((((map__41728_41753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41728_41753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41728_41753):map__41728_41753);
var vals_41755 = map__41728_41754__$1;
var lpipe_w_41756 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_41757 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_41758 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_41759 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_41760 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_41761 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_41762 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_41763 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_41764 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_41765 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_41766 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_41767 = cljs.core.get.call(null,map__41728_41754__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_41763,lpipe_y_41760,lpipe_w_41756,pipe_width_41757);

quil.core.arc.call(null,(circ1_x_41759 - cc_off_41767),circ1_y_41762,circ_r_41766,circ_r_41766,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_41764,y_pos_41758,rpipe_w_41765,pipe_width_41757);

quil.core.arc.call(null,(cc_off_41767 + circ2_x_41761),circ1_y_41762,circ_r_41766,circ_r_41766,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__41768 = cljs.core.next.call(null,seq__41716__$1);
var G__41769 = null;
var G__41770 = (0);
var G__41771 = (0);
seq__41716 = G__41768;
chunk__41718 = G__41769;
count__41719 = G__41770;
i__41720 = G__41771;
continue;
}
} else {
return null;
}
}
break;
}
});
code.pipes.noise_seed_shadow = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * The first layer of pipes, these run horizontally behind build-vert-pipes
 *   These start flush with inner frame xl and  xr.
 *   They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
 *   These lines end with a circle at their tip.
 */
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__41772){
var map__41773 = p__41772;
var map__41773__$1 = (((((!((map__41773 == null))))?(((((map__41773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41773):map__41773);
var state = map__41773__$1;
var pipe_width = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var frame_width = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var fw = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_pipes = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653));
var noise_seeds = cljs.core.get.call(null,map__41773__$1,new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269));
var holding_seeds = cljs.core.atom.call(null,noise_seeds);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var get_rand_val_BANG_ = ((function (holding_seeds,space_between_bars,map__41773,map__41773__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (){
var f = cljs.core.first.call(null,cljs.core.deref.call(null,code.pipes.noise_seed_shadow));
cljs.core.swap_BANG_.call(null,code.pipes.noise_seed_shadow,((function (f,holding_seeds,space_between_bars,map__41773,map__41773__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (x){
return cljs.core.rest.call(null,x);
});})(f,holding_seeds,space_between_bars,map__41773,map__41773__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
);

return quil.core.map_range.call(null,quil.core.noise.call(null,f),(0),(1),(5),code.util._PERCENT_of.call(null,(95),quil.core.width.call(null)));
});})(holding_seeds,space_between_bars,map__41773,map__41773__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
;
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__41775_41781 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_pipes));
var chunk__41777_41782 = null;
var count__41778_41783 = (0);
var i__41779_41784 = (0);
while(true){
if((i__41779_41784 < count__41778_41783)){
var bar_41785 = cljs.core._nth.call(null,chunk__41777_41782,i__41779_41784);
var bar_type_41786 = cljs.core.even_QMARK_.call(null,bar_41785);
var y_top_offset_41787 = (0);
var y_pos_41788 = (y_top_offset_41787 + (bar_41785 * pipe_width));
var lpipe_x_41789 = frame_width;
var lpipe_y_41790 = y_pos_41788;
var lpipe_w_41791 = get_rand_val_BANG_.call(null);
var circ1_x_41792 = (frame_width + lpipe_w_41791);
var circ_r_41793 = pipe_width;
var circ1_y_41794 = ((circ_r_41793 / (2)) + y_pos_41788);
var circ2_y_41795 = circ1_y_41794;
var circ2_x_41796 = (space_between_bars + circ1_x_41792);
var rpipe_x_41797 = circ2_x_41796;
var rpipe_w_41798 = (fw - circ2_x_41796);
var cc_off_41799 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_41786){
quil.core.fill.call(null,lpipe_w_41791,(172),(60));

quil.core.rect.call(null,lpipe_x_41789,lpipe_y_41790,lpipe_w_41791,pipe_width);

quil.core.fill.call(null,((200) + lpipe_w_41791),(130),(100));

quil.core.ellipse.call(null,circ1_x_41792,circ1_y_41794,circ_r_41793,circ_r_41793);

quil.core.fill.call(null,(46),lpipe_w_41791,(113));

quil.core.rect.call(null,rpipe_x_41797,y_pos_41788,rpipe_w_41798,pipe_width);

quil.core.fill.call(null,(80),(200),lpipe_w_41791);

quil.core.ellipse.call(null,circ2_x_41796,circ1_y_41794,circ_r_41793,circ_r_41793);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_41790,circ2_x_41796,circ1_y_41794,rpipe_x_41797,lpipe_x_41789,rpipe_w_41798,circ_r_41793,cc_off_41799,lpipe_w_41791,pipe_width,y_pos_41788,circ1_x_41792]));
}


var G__41800 = seq__41775_41781;
var G__41801 = chunk__41777_41782;
var G__41802 = count__41778_41783;
var G__41803 = (i__41779_41784 + (1));
seq__41775_41781 = G__41800;
chunk__41777_41782 = G__41801;
count__41778_41783 = G__41802;
i__41779_41784 = G__41803;
continue;
} else {
var temp__5735__auto___41804 = cljs.core.seq.call(null,seq__41775_41781);
if(temp__5735__auto___41804){
var seq__41775_41805__$1 = temp__5735__auto___41804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41775_41805__$1)){
var c__4550__auto___41806 = cljs.core.chunk_first.call(null,seq__41775_41805__$1);
var G__41807 = cljs.core.chunk_rest.call(null,seq__41775_41805__$1);
var G__41808 = c__4550__auto___41806;
var G__41809 = cljs.core.count.call(null,c__4550__auto___41806);
var G__41810 = (0);
seq__41775_41781 = G__41807;
chunk__41777_41782 = G__41808;
count__41778_41783 = G__41809;
i__41779_41784 = G__41810;
continue;
} else {
var bar_41811 = cljs.core.first.call(null,seq__41775_41805__$1);
var bar_type_41812 = cljs.core.even_QMARK_.call(null,bar_41811);
var y_top_offset_41813 = (0);
var y_pos_41814 = (y_top_offset_41813 + (bar_41811 * pipe_width));
var lpipe_x_41815 = frame_width;
var lpipe_y_41816 = y_pos_41814;
var lpipe_w_41817 = get_rand_val_BANG_.call(null);
var circ1_x_41818 = (frame_width + lpipe_w_41817);
var circ_r_41819 = pipe_width;
var circ1_y_41820 = ((circ_r_41819 / (2)) + y_pos_41814);
var circ2_y_41821 = circ1_y_41820;
var circ2_x_41822 = (space_between_bars + circ1_x_41818);
var rpipe_x_41823 = circ2_x_41822;
var rpipe_w_41824 = (fw - circ2_x_41822);
var cc_off_41825 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_41812){
quil.core.fill.call(null,lpipe_w_41817,(172),(60));

quil.core.rect.call(null,lpipe_x_41815,lpipe_y_41816,lpipe_w_41817,pipe_width);

quil.core.fill.call(null,((200) + lpipe_w_41817),(130),(100));

quil.core.ellipse.call(null,circ1_x_41818,circ1_y_41820,circ_r_41819,circ_r_41819);

quil.core.fill.call(null,(46),lpipe_w_41817,(113));

quil.core.rect.call(null,rpipe_x_41823,y_pos_41814,rpipe_w_41824,pipe_width);

quil.core.fill.call(null,(80),(200),lpipe_w_41817);

quil.core.ellipse.call(null,circ2_x_41822,circ1_y_41820,circ_r_41819,circ_r_41819);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_41816,circ2_x_41822,circ1_y_41820,rpipe_x_41823,lpipe_x_41815,rpipe_w_41824,circ_r_41819,cc_off_41825,lpipe_w_41817,pipe_width,y_pos_41814,circ1_x_41818]));
}


var G__41826 = cljs.core.next.call(null,seq__41775_41805__$1);
var G__41827 = null;
var G__41828 = (0);
var G__41829 = (0);
seq__41775_41781 = G__41826;
chunk__41777_41782 = G__41827;
count__41778_41783 = G__41828;
i__41779_41784 = G__41829;
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
code.pipes.build_frame = (function code$pipes$build_frame(p__41830){
var map__41831 = p__41830;
var map__41831__$1 = (((((!((map__41831 == null))))?(((((map__41831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41831):map__41831);
var state = map__41831__$1;
var span_w = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"span-w","span-w",262919217));
var frame_width = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var span_h = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"span-h","span-h",-1783515273));
var seq_layers = cljs.core.get.call(null,map__41831__$1,new cljs.core.Keyword(null,"seq-layers","seq-layers",-1053498178));
quil.core.rect.call(null,(0),(0),span_w,frame_width);

quil.core.rect.call(null,span_w,(0),frame_width,span_h);

quil.core.rect.call(null,frame_width,span_h,span_w,frame_width);

quil.core.rect.call(null,(0),frame_width,frame_width,span_h);

seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_bg_horiz_pipes,state));

code.pipes.build_vert_pipes.call(null,state);

return seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_fg_horiz_pipes,code.pipes.fg_pipes));
});
code.pipes.setup = (function code$pipes$setup(){
quil.core.frame_rate.call(null,(24));

quil.core.smooth.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

var pipe_width = code.util._PERCENT_of.call(null,1.5,quil.core.width.call(null));
var frame_width = code.util._PERCENT_of.call(null,(3),quil.core.width.call(null));
var offset_from_edge = code.util._PERCENT_of.call(null,(25),quil.core.width.call(null));
var span_w = (quil.core.width.call(null) - frame_width);
var span_h = (quil.core.height.call(null) - frame_width);
var inner_height = (span_h - frame_width);
var tx = (offset_from_edge / (2));
var num_batches = (6);
var num_pipes = (5);
var height_of_batch = ((pipe_width + pipe_width) + (pipe_width * num_pipes));
var height_of_all_batches = (height_of_batch * num_batches);
var offset_from_top = ((inner_height - height_of_all_batches) / (2));
var offset_batch = (function (){var x = (span_h / ((3) + num_batches));
return (x + (x / (3)));
})();
var seq_layers = ((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch){
return (function (func){
var seq__41833 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_batches));
var chunk__41834 = null;
var count__41835 = (0);
var i__41836 = (0);
while(true){
if((i__41836 < count__41835)){
var amt = cljs.core._nth.call(null,chunk__41834,i__41836);
var tr__21251__auto___41841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto___41841);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__41842 = seq__41833;
var G__41843 = chunk__41834;
var G__41844 = count__41835;
var G__41845 = (i__41836 + (1));
seq__41833 = G__41842;
chunk__41834 = G__41843;
count__41835 = G__41844;
i__41836 = G__41845;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41833);
if(temp__5735__auto__){
var seq__41833__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41833__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41833__$1);
var G__41846 = cljs.core.chunk_rest.call(null,seq__41833__$1);
var G__41847 = c__4550__auto__;
var G__41848 = cljs.core.count.call(null,c__4550__auto__);
var G__41849 = (0);
seq__41833 = G__41846;
chunk__41834 = G__41847;
count__41835 = G__41848;
i__41836 = G__41849;
continue;
} else {
var amt = cljs.core.first.call(null,seq__41833__$1);
var tr__21251__auto___41850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto___41850);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__41851 = cljs.core.next.call(null,seq__41833__$1);
var G__41852 = null;
var G__41853 = (0);
var G__41854 = (0);
seq__41833 = G__41851;
chunk__41834 = G__41852;
count__41835 = G__41853;
i__41836 = G__41854;
continue;
}
} else {
return null;
}
}
break;
}
});})(pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fw","fw",-2145665918),new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),new cljs.core.Keyword(null,"offset-from-top","offset-from-top",-491332979),new cljs.core.Keyword(null,"span-w","span-w",262919217),new cljs.core.Keyword(null,"num-batches","num-batches",-1590046766),new cljs.core.Keyword(null,"span-h","span-h",-1783515273),new cljs.core.Keyword(null,"ifw","ifw",411867642),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"fh","fh",-1663396998),new cljs.core.Keyword(null,"ifh","ifh",943985660),new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653),new cljs.core.Keyword(null,"seq-layers","seq-layers",-1053498178)],[span_w,(function (){var iter__4523__auto__ = ((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers){
return (function code$pipes$setup_$_iter__41837(s__41838){
return (new cljs.core.LazySeq(null,((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers){
return (function (){
var s__41838__$1 = s__41838;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__41838__$1);
if(temp__5735__auto__){
var s__41838__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41838__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__41838__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__41840 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__41839 = (0);
while(true){
if((i__41839 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__41839);
cljs.core.chunk_append.call(null,b__41840,cljs.core.rand.call(null,(100)));

var G__41855 = (i__41839 + (1));
i__41839 = G__41855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41840),code$pipes$setup_$_iter__41837.call(null,cljs.core.chunk_rest.call(null,s__41838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41840),null);
}
} else {
var i = cljs.core.first.call(null,s__41838__$2);
return cljs.core.cons.call(null,cljs.core.rand.call(null,(100)),code$pipes$setup_$_iter__41837.call(null,cljs.core.rest.call(null,s__41838__$2)));
}
} else {
return null;
}
break;
}
});})(pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers))
,null,null));
});})(pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(0),(num_pipes * num_batches)));
})(),frame_width,offset_from_top,span_w,num_batches,span_h,(span_w - pipe_width),pipe_width,span_h,inner_height,num_pipes,seq_layers]);
});
code.pipes.update_state = (function code$pipes$update_state(state){
var inc_d_seeds = cljs.core.map.call(null,(function (x){
return (x + 0.01);
}),new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269).cljs$core$IFn$_invoke$arity$1(state));
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269),inc_d_seeds);
cljs.core.reset_BANG_.call(null,code.pipes.noise_seed_shadow,new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269).cljs$core$IFn$_invoke$arity$1(new_state));

return new_state;
});
code.pipes.draw_state = (function code$pipes$draw_state(state){
quil.core.stroke_weight.call(null,code.util._PERCENT_of.call(null,0.25,quil.core.width.call(null)));

quil.core.background.call(null,(240));

return code.pipes.build_frame.call(null,state);
});
code.pipes.run_sketch = (function code$pipes$run_sketch(){
code.pipes.code = (function code$pipes$run_sketch_$_code(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"code",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,code.pipes.update_state))?(function() { 
var G__41856__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__41856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41857__i = 0, G__41857__a = new Array(arguments.length -  0);
while (G__41857__i < G__41857__a.length) {G__41857__a[G__41857__i] = arguments[G__41857__i + 0]; ++G__41857__i;}
  args = new cljs.core.IndexedSeq(G__41857__a,0,null);
} 
return G__41856__delegate.call(this,args);};
G__41856.cljs$lang$maxFixedArity = 0;
G__41856.cljs$lang$applyTo = (function (arglist__41858){
var args = cljs.core.seq(arglist__41858);
return G__41856__delegate(args);
});
G__41856.cljs$core$IFn$_invoke$arity$variadic = G__41856__delegate;
return G__41856;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1500),(1500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__41859__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__41859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41860__i = 0, G__41860__a = new Array(arguments.length -  0);
while (G__41860__i < G__41860__a.length) {G__41860__a[G__41860__i] = arguments[G__41860__i + 0]; ++G__41860__i;}
  args = new cljs.core.IndexedSeq(G__41860__a,0,null);
} 
return G__41859__delegate.call(this,args);};
G__41859.cljs$lang$maxFixedArity = 0;
G__41859.cljs$lang$applyTo = (function (arglist__41861){
var args = cljs.core.seq(arglist__41861);
return G__41859__delegate(args);
});
G__41859.cljs$core$IFn$_invoke$arity$variadic = G__41859__delegate;
return G__41859;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__41862__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__41862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41863__i = 0, G__41863__a = new Array(arguments.length -  0);
while (G__41863__i < G__41863__a.length) {G__41863__a[G__41863__i] = arguments[G__41863__i + 0]; ++G__41863__i;}
  args = new cljs.core.IndexedSeq(G__41863__a,0,null);
} 
return G__41862__delegate.call(this,args);};
G__41862.cljs$lang$maxFixedArity = 0;
G__41862.cljs$lang$applyTo = (function (arglist__41864){
var args = cljs.core.seq(arglist__41864);
return G__41862__delegate(args);
});
G__41862.cljs$core$IFn$_invoke$arity$variadic = G__41862__delegate;
return G__41862;
})()
:code.pipes.draw_state));
});
goog.exportSymbol('code.pipes.code', code.pipes.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20845__20846__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20845__20846__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.pipes.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.pipes.run_sketch', code.pipes.run_sketch);

//# sourceMappingURL=pipes.js.map?rel=1582921289825
