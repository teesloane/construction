// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
code.pipes.fg_pipes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Draws vertical pipes within the structure of build-frame,
 *   pipes are spread evenly across the frame, default numbering 5.
 *   Seems to be using the same x-y grid with the offset from build-frame; ie
 *   the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
 */
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__39946){
var map__39947 = p__39946;
var map__39947__$1 = (((((!((map__39947 == null))))?(((((map__39947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39947):map__39947);
var config = map__39947__$1;
var frame_width = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var pipe_width = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__39947__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = pipe_width;
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3333,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((frame_width + bar_int_buffer) - (frame_width / (2)));
var seq__39949 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__39951 = null;
var count__39952 = (0);
var i__39953 = (0);
while(true){
if((i__39953 < count__39952)){
var b = cljs.core._nth.call(null,chunk__39951,i__39953);
var x_39955 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_39955,frame_width,bar_width,ifh);


var G__39956 = seq__39949;
var G__39957 = chunk__39951;
var G__39958 = count__39952;
var G__39959 = (i__39953 + (1));
seq__39949 = G__39956;
chunk__39951 = G__39957;
count__39952 = G__39958;
i__39953 = G__39959;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39949);
if(temp__5735__auto__){
var seq__39949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39949__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39949__$1);
var G__39960 = cljs.core.chunk_rest.call(null,seq__39949__$1);
var G__39961 = c__4550__auto__;
var G__39962 = cljs.core.count.call(null,c__4550__auto__);
var G__39963 = (0);
seq__39949 = G__39960;
chunk__39951 = G__39961;
count__39952 = G__39962;
i__39953 = G__39963;
continue;
} else {
var b = cljs.core.first.call(null,seq__39949__$1);
var x_39964 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_39964,frame_width,bar_width,ifh);


var G__39965 = cljs.core.next.call(null,seq__39949__$1);
var G__39966 = null;
var G__39967 = (0);
var G__39968 = (0);
seq__39949 = G__39965;
chunk__39951 = G__39966;
count__39952 = G__39967;
i__39953 = G__39968;
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
var seq__39969 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__39971 = null;
var count__39972 = (0);
var i__39973 = (0);
while(true){
if((i__39973 < count__39972)){
var f = cljs.core._nth.call(null,chunk__39971,i__39973);
var map__39979_39983 = f;
var map__39979_39984__$1 = (((((!((map__39979_39983 == null))))?(((((map__39979_39983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39979_39983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39979_39983):map__39979_39983);
var vals_39985 = map__39979_39984__$1;
var lpipe_w_39986 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_39987 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_39988 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_39989 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_39990 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_39991 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_39992 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_39993 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_39994 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_39995 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_39996 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_39997 = cljs.core.get.call(null,map__39979_39984__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_39993,lpipe_y_39990,lpipe_w_39986,pipe_width_39987);

quil.core.arc.call(null,(circ1_x_39989 - cc_off_39997),circ1_y_39992,circ_r_39996,circ_r_39996,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_39994,y_pos_39988,rpipe_w_39995,pipe_width_39987);

quil.core.arc.call(null,(cc_off_39997 + circ2_x_39991),circ1_y_39992,circ_r_39996,circ_r_39996,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__39998 = seq__39969;
var G__39999 = chunk__39971;
var G__40000 = count__39972;
var G__40001 = (i__39973 + (1));
seq__39969 = G__39998;
chunk__39971 = G__39999;
count__39972 = G__40000;
i__39973 = G__40001;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39969);
if(temp__5735__auto__){
var seq__39969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39969__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39969__$1);
var G__40002 = cljs.core.chunk_rest.call(null,seq__39969__$1);
var G__40003 = c__4550__auto__;
var G__40004 = cljs.core.count.call(null,c__4550__auto__);
var G__40005 = (0);
seq__39969 = G__40002;
chunk__39971 = G__40003;
count__39972 = G__40004;
i__39973 = G__40005;
continue;
} else {
var f = cljs.core.first.call(null,seq__39969__$1);
var map__39981_40006 = f;
var map__39981_40007__$1 = (((((!((map__39981_40006 == null))))?(((((map__39981_40006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39981_40006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39981_40006):map__39981_40006);
var vals_40008 = map__39981_40007__$1;
var lpipe_w_40009 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_40010 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_40011 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_40012 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_40013 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_40014 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_40015 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_40016 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_40017 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_40018 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_40019 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_40020 = cljs.core.get.call(null,map__39981_40007__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_40016,lpipe_y_40013,lpipe_w_40009,pipe_width_40010);

quil.core.arc.call(null,(circ1_x_40012 - cc_off_40020),circ1_y_40015,circ_r_40019,circ_r_40019,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_40017,y_pos_40011,rpipe_w_40018,pipe_width_40010);

quil.core.arc.call(null,(cc_off_40020 + circ2_x_40014),circ1_y_40015,circ_r_40019,circ_r_40019,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__40021 = cljs.core.next.call(null,seq__39969__$1);
var G__40022 = null;
var G__40023 = (0);
var G__40024 = (0);
seq__39969 = G__40021;
chunk__39971 = G__40022;
count__39972 = G__40023;
i__39973 = G__40024;
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
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__40025){
var map__40026 = p__40025;
var map__40026__$1 = (((((!((map__40026 == null))))?(((((map__40026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40026):map__40026);
var state = map__40026__$1;
var pipe_width = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var frame_width = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var fw = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_pipes = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653));
var noise_seeds = cljs.core.get.call(null,map__40026__$1,new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269));
var holding_seeds = cljs.core.atom.call(null,noise_seeds);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var get_rand_val_BANG_ = ((function (holding_seeds,space_between_bars,map__40026,map__40026__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (){
var f = cljs.core.first.call(null,cljs.core.deref.call(null,code.pipes.noise_seed_shadow));
cljs.core.swap_BANG_.call(null,code.pipes.noise_seed_shadow,((function (f,holding_seeds,space_between_bars,map__40026,map__40026__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (x){
return cljs.core.rest.call(null,x);
});})(f,holding_seeds,space_between_bars,map__40026,map__40026__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
);

return quil.core.map_range.call(null,quil.core.noise.call(null,f),(0),(1),(5),code.util._PERCENT_of.call(null,(95),quil.core.width.call(null)));
});})(holding_seeds,space_between_bars,map__40026,map__40026__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
;
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__40028_40034 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_pipes));
var chunk__40030_40035 = null;
var count__40031_40036 = (0);
var i__40032_40037 = (0);
while(true){
if((i__40032_40037 < count__40031_40036)){
var bar_40038 = cljs.core._nth.call(null,chunk__40030_40035,i__40032_40037);
var bar_type_40039 = cljs.core.even_QMARK_.call(null,bar_40038);
var y_top_offset_40040 = (0);
var y_pos_40041 = (y_top_offset_40040 + (bar_40038 * pipe_width));
var lpipe_x_40042 = frame_width;
var lpipe_y_40043 = y_pos_40041;
var lpipe_w_40044 = get_rand_val_BANG_.call(null);
var circ1_x_40045 = (frame_width + lpipe_w_40044);
var circ_r_40046 = pipe_width;
var circ1_y_40047 = ((circ_r_40046 / (2)) + y_pos_40041);
var circ2_y_40048 = circ1_y_40047;
var circ2_x_40049 = (space_between_bars + circ1_x_40045);
var rpipe_x_40050 = circ2_x_40049;
var rpipe_w_40051 = (fw - circ2_x_40049);
var cc_off_40052 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_40039){
quil.core.fill.call(null,lpipe_w_40044,(172),(60));

quil.core.rect.call(null,lpipe_x_40042,lpipe_y_40043,lpipe_w_40044,pipe_width);

quil.core.fill.call(null,((200) + lpipe_w_40044),(130),(100));

quil.core.ellipse.call(null,circ1_x_40045,circ1_y_40047,circ_r_40046,circ_r_40046);

quil.core.fill.call(null,(46),lpipe_w_40044,(113));

quil.core.rect.call(null,rpipe_x_40050,y_pos_40041,rpipe_w_40051,pipe_width);

quil.core.fill.call(null,(80),(200),lpipe_w_40044);

quil.core.ellipse.call(null,circ2_x_40049,circ1_y_40047,circ_r_40046,circ_r_40046);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_40043,circ2_x_40049,circ1_y_40047,rpipe_x_40050,lpipe_x_40042,rpipe_w_40051,circ_r_40046,cc_off_40052,lpipe_w_40044,pipe_width,y_pos_40041,circ1_x_40045]));
}


var G__40053 = seq__40028_40034;
var G__40054 = chunk__40030_40035;
var G__40055 = count__40031_40036;
var G__40056 = (i__40032_40037 + (1));
seq__40028_40034 = G__40053;
chunk__40030_40035 = G__40054;
count__40031_40036 = G__40055;
i__40032_40037 = G__40056;
continue;
} else {
var temp__5735__auto___40057 = cljs.core.seq.call(null,seq__40028_40034);
if(temp__5735__auto___40057){
var seq__40028_40058__$1 = temp__5735__auto___40057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40028_40058__$1)){
var c__4550__auto___40059 = cljs.core.chunk_first.call(null,seq__40028_40058__$1);
var G__40060 = cljs.core.chunk_rest.call(null,seq__40028_40058__$1);
var G__40061 = c__4550__auto___40059;
var G__40062 = cljs.core.count.call(null,c__4550__auto___40059);
var G__40063 = (0);
seq__40028_40034 = G__40060;
chunk__40030_40035 = G__40061;
count__40031_40036 = G__40062;
i__40032_40037 = G__40063;
continue;
} else {
var bar_40064 = cljs.core.first.call(null,seq__40028_40058__$1);
var bar_type_40065 = cljs.core.even_QMARK_.call(null,bar_40064);
var y_top_offset_40066 = (0);
var y_pos_40067 = (y_top_offset_40066 + (bar_40064 * pipe_width));
var lpipe_x_40068 = frame_width;
var lpipe_y_40069 = y_pos_40067;
var lpipe_w_40070 = get_rand_val_BANG_.call(null);
var circ1_x_40071 = (frame_width + lpipe_w_40070);
var circ_r_40072 = pipe_width;
var circ1_y_40073 = ((circ_r_40072 / (2)) + y_pos_40067);
var circ2_y_40074 = circ1_y_40073;
var circ2_x_40075 = (space_between_bars + circ1_x_40071);
var rpipe_x_40076 = circ2_x_40075;
var rpipe_w_40077 = (fw - circ2_x_40075);
var cc_off_40078 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_40065){
quil.core.fill.call(null,lpipe_w_40070,(172),(60));

quil.core.rect.call(null,lpipe_x_40068,lpipe_y_40069,lpipe_w_40070,pipe_width);

quil.core.fill.call(null,((200) + lpipe_w_40070),(130),(100));

quil.core.ellipse.call(null,circ1_x_40071,circ1_y_40073,circ_r_40072,circ_r_40072);

quil.core.fill.call(null,(46),lpipe_w_40070,(113));

quil.core.rect.call(null,rpipe_x_40076,y_pos_40067,rpipe_w_40077,pipe_width);

quil.core.fill.call(null,(80),(200),lpipe_w_40070);

quil.core.ellipse.call(null,circ2_x_40075,circ1_y_40073,circ_r_40072,circ_r_40072);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_40069,circ2_x_40075,circ1_y_40073,rpipe_x_40076,lpipe_x_40068,rpipe_w_40077,circ_r_40072,cc_off_40078,lpipe_w_40070,pipe_width,y_pos_40067,circ1_x_40071]));
}


var G__40079 = cljs.core.next.call(null,seq__40028_40058__$1);
var G__40080 = null;
var G__40081 = (0);
var G__40082 = (0);
seq__40028_40034 = G__40079;
chunk__40030_40035 = G__40080;
count__40031_40036 = G__40081;
i__40032_40037 = G__40082;
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
code.pipes.build_frame = (function code$pipes$build_frame(p__40083){
var map__40084 = p__40083;
var map__40084__$1 = (((((!((map__40084 == null))))?(((((map__40084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40084):map__40084);
var state = map__40084__$1;
var span_w = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"span-w","span-w",262919217));
var frame_width = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var span_h = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"span-h","span-h",-1783515273));
var seq_layers = cljs.core.get.call(null,map__40084__$1,new cljs.core.Keyword(null,"seq-layers","seq-layers",-1053498178));
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
var seq__40086 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_batches));
var chunk__40087 = null;
var count__40088 = (0);
var i__40089 = (0);
while(true){
if((i__40089 < count__40088)){
var amt = cljs.core._nth.call(null,chunk__40087,i__40089);
var tr__21251__auto___40094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto___40094);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__40095 = seq__40086;
var G__40096 = chunk__40087;
var G__40097 = count__40088;
var G__40098 = (i__40089 + (1));
seq__40086 = G__40095;
chunk__40087 = G__40096;
count__40088 = G__40097;
i__40089 = G__40098;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40086);
if(temp__5735__auto__){
var seq__40086__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40086__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40086__$1);
var G__40099 = cljs.core.chunk_rest.call(null,seq__40086__$1);
var G__40100 = c__4550__auto__;
var G__40101 = cljs.core.count.call(null,c__4550__auto__);
var G__40102 = (0);
seq__40086 = G__40099;
chunk__40087 = G__40100;
count__40088 = G__40101;
i__40089 = G__40102;
continue;
} else {
var amt = cljs.core.first.call(null,seq__40086__$1);
var tr__21251__auto___40103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__21251__auto___40103);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__40104 = cljs.core.next.call(null,seq__40086__$1);
var G__40105 = null;
var G__40106 = (0);
var G__40107 = (0);
seq__40086 = G__40104;
chunk__40087 = G__40105;
count__40088 = G__40106;
i__40089 = G__40107;
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
return (function code$pipes$setup_$_iter__40090(s__40091){
return (new cljs.core.LazySeq(null,((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers){
return (function (){
var s__40091__$1 = s__40091;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__40091__$1);
if(temp__5735__auto__){
var s__40091__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40091__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__40091__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__40093 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__40092 = (0);
while(true){
if((i__40092 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__40092);
cljs.core.chunk_append.call(null,b__40093,cljs.core.rand.call(null,(100)));

var G__40108 = (i__40092 + (1));
i__40092 = G__40108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40093),code$pipes$setup_$_iter__40090.call(null,cljs.core.chunk_rest.call(null,s__40091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40093),null);
}
} else {
var i = cljs.core.first.call(null,s__40091__$2);
return cljs.core.cons.call(null,cljs.core.rand.call(null,(100)),code$pipes$setup_$_iter__40090.call(null,cljs.core.rest.call(null,s__40091__$2)));
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
var G__40109__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__40109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40110__i = 0, G__40110__a = new Array(arguments.length -  0);
while (G__40110__i < G__40110__a.length) {G__40110__a[G__40110__i] = arguments[G__40110__i + 0]; ++G__40110__i;}
  args = new cljs.core.IndexedSeq(G__40110__a,0,null);
} 
return G__40109__delegate.call(this,args);};
G__40109.cljs$lang$maxFixedArity = 0;
G__40109.cljs$lang$applyTo = (function (arglist__40111){
var args = cljs.core.seq(arglist__40111);
return G__40109__delegate(args);
});
G__40109.cljs$core$IFn$_invoke$arity$variadic = G__40109__delegate;
return G__40109;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1500),(1500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__40112__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__40112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40113__i = 0, G__40113__a = new Array(arguments.length -  0);
while (G__40113__i < G__40113__a.length) {G__40113__a[G__40113__i] = arguments[G__40113__i + 0]; ++G__40113__i;}
  args = new cljs.core.IndexedSeq(G__40113__a,0,null);
} 
return G__40112__delegate.call(this,args);};
G__40112.cljs$lang$maxFixedArity = 0;
G__40112.cljs$lang$applyTo = (function (arglist__40114){
var args = cljs.core.seq(arglist__40114);
return G__40112__delegate(args);
});
G__40112.cljs$core$IFn$_invoke$arity$variadic = G__40112__delegate;
return G__40112;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__40115__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__40115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40116__i = 0, G__40116__a = new Array(arguments.length -  0);
while (G__40116__i < G__40116__a.length) {G__40116__a[G__40116__i] = arguments[G__40116__i + 0]; ++G__40116__i;}
  args = new cljs.core.IndexedSeq(G__40116__a,0,null);
} 
return G__40115__delegate.call(this,args);};
G__40115.cljs$lang$maxFixedArity = 0;
G__40115.cljs$lang$applyTo = (function (arglist__40117){
var args = cljs.core.seq(arglist__40117);
return G__40115__delegate(args);
});
G__40115.cljs$core$IFn$_invoke$arity$variadic = G__40115__delegate;
return G__40115;
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

//# sourceMappingURL=pipes.js.map?rel=1582920501773
