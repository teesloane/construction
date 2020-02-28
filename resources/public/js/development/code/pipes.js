// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.pipes');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
code.pipes.fg_pipes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
code.pipes.get_stroke_weight = (function code$pipes$get_stroke_weight(){
return quil.core.stroke_weight.call(null,(4));
});
/**
 * Draws vertical pipes within the structure of build-frame,
 *   pipes are spread evenly across the frame, default numbering 5.
 *   Seems to be using the same x-y grid with the offset from build-frame; ie
 *   the offset-from-edge sets (0,0) to be (offset-from-edge, offset-from-edge)
 */
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__69969){
var map__69970 = p__69969;
var map__69970__$1 = (((((!((map__69970 == null))))?(((((map__69970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69970):map__69970);
var config = map__69970__$1;
var frame_width = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var pipe_width = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__69970__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = pipe_width;
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3333,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((frame_width + bar_int_buffer) - (frame_width / (2)));
var seq__69972 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__69974 = null;
var count__69975 = (0);
var i__69976 = (0);
while(true){
if((i__69976 < count__69975)){
var b = cljs.core._nth.call(null,chunk__69974,i__69976);
var x_69978 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_69978,frame_width,bar_width,ifh);


var G__69979 = seq__69972;
var G__69980 = chunk__69974;
var G__69981 = count__69975;
var G__69982 = (i__69976 + (1));
seq__69972 = G__69979;
chunk__69974 = G__69980;
count__69975 = G__69981;
i__69976 = G__69982;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__69972);
if(temp__5735__auto__){
var seq__69972__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69972__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__69972__$1);
var G__69983 = cljs.core.chunk_rest.call(null,seq__69972__$1);
var G__69984 = c__4550__auto__;
var G__69985 = cljs.core.count.call(null,c__4550__auto__);
var G__69986 = (0);
seq__69972 = G__69983;
chunk__69974 = G__69984;
count__69975 = G__69985;
i__69976 = G__69986;
continue;
} else {
var b = cljs.core.first.call(null,seq__69972__$1);
var x_69987 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_69987,frame_width,bar_width,ifh);


var G__69988 = cljs.core.next.call(null,seq__69972__$1);
var G__69989 = null;
var G__69990 = (0);
var G__69991 = (0);
seq__69972 = G__69988;
chunk__69974 = G__69989;
count__69975 = G__69990;
i__69976 = G__69991;
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
var seq__69992 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__69994 = null;
var count__69995 = (0);
var i__69996 = (0);
while(true){
if((i__69996 < count__69995)){
var f = cljs.core._nth.call(null,chunk__69994,i__69996);
var map__70002_70006 = f;
var map__70002_70007__$1 = (((((!((map__70002_70006 == null))))?(((((map__70002_70006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70002_70006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70002_70006):map__70002_70006);
var vals_70008 = map__70002_70007__$1;
var lpipe_w_70009 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_70010 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_70011 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_70012 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_70013 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_70014 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_70015 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_70016 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_70017 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_70018 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_70019 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_70020 = cljs.core.get.call(null,map__70002_70007__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_70016,lpipe_y_70013,lpipe_w_70009,pipe_width_70010);

quil.core.arc.call(null,(circ1_x_70012 - cc_off_70020),circ1_y_70015,circ_r_70019,circ_r_70019,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_70017,y_pos_70011,rpipe_w_70018,pipe_width_70010);

quil.core.arc.call(null,(cc_off_70020 + circ2_x_70014),circ1_y_70015,circ_r_70019,circ_r_70019,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__70021 = seq__69992;
var G__70022 = chunk__69994;
var G__70023 = count__69995;
var G__70024 = (i__69996 + (1));
seq__69992 = G__70021;
chunk__69994 = G__70022;
count__69995 = G__70023;
i__69996 = G__70024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__69992);
if(temp__5735__auto__){
var seq__69992__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69992__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__69992__$1);
var G__70025 = cljs.core.chunk_rest.call(null,seq__69992__$1);
var G__70026 = c__4550__auto__;
var G__70027 = cljs.core.count.call(null,c__4550__auto__);
var G__70028 = (0);
seq__69992 = G__70025;
chunk__69994 = G__70026;
count__69995 = G__70027;
i__69996 = G__70028;
continue;
} else {
var f = cljs.core.first.call(null,seq__69992__$1);
var map__70004_70029 = f;
var map__70004_70030__$1 = (((((!((map__70004_70029 == null))))?(((((map__70004_70029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70004_70029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70004_70029):map__70004_70029);
var vals_70031 = map__70004_70030__$1;
var lpipe_w_70032 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_70033 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_70034 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_70035 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_70036 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_70037 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_70038 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_70039 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_70040 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_70041 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_70042 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_70043 = cljs.core.get.call(null,map__70004_70030__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_70039,lpipe_y_70036,lpipe_w_70032,pipe_width_70033);

quil.core.arc.call(null,(circ1_x_70035 - cc_off_70043),circ1_y_70038,circ_r_70042,circ_r_70042,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_70040,y_pos_70034,rpipe_w_70041,pipe_width_70033);

quil.core.arc.call(null,(cc_off_70043 + circ2_x_70037),circ1_y_70038,circ_r_70042,circ_r_70042,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__70044 = cljs.core.next.call(null,seq__69992__$1);
var G__70045 = null;
var G__70046 = (0);
var G__70047 = (0);
seq__69992 = G__70044;
chunk__69994 = G__70045;
count__69995 = G__70046;
i__69996 = G__70047;
continue;
}
} else {
return null;
}
}
break;
}
});
code.pipes.noise_state = cljs.core.atom.call(null,(0));
/**
 * The first layer of pipes, these run horizontally behind build-vert-pipes
 *   These start flush with inner frame xl and  xr.
 *   They end random-ishly somewhere inside the frame, either 1/3 or 2/3 the way across
 *   These lines end with a circle at their tip.
 */
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__70048){
var map__70049 = p__70048;
var map__70049__$1 = (((((!((map__70049 == null))))?(((((map__70049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70049):map__70049);
var config = map__70049__$1;
var pipe_width = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var frame_width = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var fw = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_pipes = cljs.core.get.call(null,map__70049__$1,new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653));
cljs.core.swap_BANG_.call(null,code.pipes.noise_state,((function (map__70049,map__70049__$1,config,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes){
return (function (r){
return (r + 0.002);
});})(map__70049,map__70049__$1,config,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes))
);

var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var rand_l = quil.core.map_range.call(null,quil.core.noise.call(null,cljs.core.deref.call(null,code.pipes.noise_state)),(0),(1),(5),(95));
var rand_r = code.util.rand_b_w.call(null,(5),(80));
var set_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code.util._PERCENT_of.call(null,rand_l,ifw),code.util._PERCENT_of.call(null,rand_l,ifw)], null);
var pipe_width_n = code.util._PERCENT_of.call(null,(75),pipe_width);
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__70051_70057 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_pipes));
var chunk__70053_70058 = null;
var count__70054_70059 = (0);
var i__70055_70060 = (0);
while(true){
if((i__70055_70060 < count__70054_70059)){
var bar_70061 = cljs.core._nth.call(null,chunk__70053_70058,i__70055_70060);
var bar_type_70062 = cljs.core.even_QMARK_.call(null,bar_70061);
var y_top_offset_70063 = (0);
var y_pos_70064 = (y_top_offset_70063 + (bar_70061 * pipe_width));
var lpipe_x_70065 = frame_width;
var lpipe_y_70066 = y_pos_70064;
var lpipe_w_70067 = ((bar_type_70062)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_70068 = (frame_width + lpipe_w_70067);
var circ_r_70069 = pipe_width;
var circ1_y_70070 = ((circ_r_70069 / (2)) + y_pos_70064);
var circ2_y_70071 = circ1_y_70070;
var circ2_x_70072 = (space_between_bars + circ1_x_70068);
var rpipe_x_70073 = circ2_x_70072;
var rpipe_w_70074 = (fw - circ2_x_70072);
var cc_off_70075 = code.util._PERCENT_of.call(null,0.35,quil.core.width.call(null));
if(bar_type_70062){
quil.core.rect.call(null,lpipe_x_70065,lpipe_y_70066,lpipe_w_70067,pipe_width);

quil.core.ellipse.call(null,circ1_x_70068,circ1_y_70070,circ_r_70069,circ_r_70069);

quil.core.rect.call(null,rpipe_x_70073,y_pos_70064,rpipe_w_70074,pipe_width);

quil.core.ellipse.call(null,circ2_x_70072,circ1_y_70070,circ_r_70069,circ_r_70069);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_70066,circ2_x_70072,circ1_y_70070,rpipe_x_70073,lpipe_x_70065,rpipe_w_70074,circ_r_70069,cc_off_70075,lpipe_w_70067,pipe_width,y_pos_70064,circ1_x_70068]));
}


var G__70076 = seq__70051_70057;
var G__70077 = chunk__70053_70058;
var G__70078 = count__70054_70059;
var G__70079 = (i__70055_70060 + (1));
seq__70051_70057 = G__70076;
chunk__70053_70058 = G__70077;
count__70054_70059 = G__70078;
i__70055_70060 = G__70079;
continue;
} else {
var temp__5735__auto___70080 = cljs.core.seq.call(null,seq__70051_70057);
if(temp__5735__auto___70080){
var seq__70051_70081__$1 = temp__5735__auto___70080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70051_70081__$1)){
var c__4550__auto___70082 = cljs.core.chunk_first.call(null,seq__70051_70081__$1);
var G__70083 = cljs.core.chunk_rest.call(null,seq__70051_70081__$1);
var G__70084 = c__4550__auto___70082;
var G__70085 = cljs.core.count.call(null,c__4550__auto___70082);
var G__70086 = (0);
seq__70051_70057 = G__70083;
chunk__70053_70058 = G__70084;
count__70054_70059 = G__70085;
i__70055_70060 = G__70086;
continue;
} else {
var bar_70087 = cljs.core.first.call(null,seq__70051_70081__$1);
var bar_type_70088 = cljs.core.even_QMARK_.call(null,bar_70087);
var y_top_offset_70089 = (0);
var y_pos_70090 = (y_top_offset_70089 + (bar_70087 * pipe_width));
var lpipe_x_70091 = frame_width;
var lpipe_y_70092 = y_pos_70090;
var lpipe_w_70093 = ((bar_type_70088)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_70094 = (frame_width + lpipe_w_70093);
var circ_r_70095 = pipe_width;
var circ1_y_70096 = ((circ_r_70095 / (2)) + y_pos_70090);
var circ2_y_70097 = circ1_y_70096;
var circ2_x_70098 = (space_between_bars + circ1_x_70094);
var rpipe_x_70099 = circ2_x_70098;
var rpipe_w_70100 = (fw - circ2_x_70098);
var cc_off_70101 = code.util._PERCENT_of.call(null,0.35,quil.core.width.call(null));
if(bar_type_70088){
quil.core.rect.call(null,lpipe_x_70091,lpipe_y_70092,lpipe_w_70093,pipe_width);

quil.core.ellipse.call(null,circ1_x_70094,circ1_y_70096,circ_r_70095,circ_r_70095);

quil.core.rect.call(null,rpipe_x_70099,y_pos_70090,rpipe_w_70100,pipe_width);

quil.core.ellipse.call(null,circ2_x_70098,circ1_y_70096,circ_r_70095,circ_r_70095);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_70092,circ2_x_70098,circ1_y_70096,rpipe_x_70099,lpipe_x_70091,rpipe_w_70100,circ_r_70095,cc_off_70101,lpipe_w_70093,pipe_width,y_pos_70090,circ1_x_70094]));
}


var G__70102 = cljs.core.next.call(null,seq__70051_70081__$1);
var G__70103 = null;
var G__70104 = (0);
var G__70105 = (0);
seq__70051_70057 = G__70102;
chunk__70053_70058 = G__70103;
count__70054_70059 = G__70104;
i__70055_70060 = G__70105;
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
var _ = cljs.core.prn.call(null,"offset from top is",inner_height,offset_from_top,height_of_batch,height_of_all_batches);
var offset_batch = (function (){var x = (span_h / ((3) + num_batches));
return (x + (x / (3)));
})();
var config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fw","fw",-2145665918),new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082),new cljs.core.Keyword(null,"offset-from-top","offset-from-top",-491332979),new cljs.core.Keyword(null,"num-batches","num-batches",-1590046766),new cljs.core.Keyword(null,"ifw","ifw",411867642),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"fh","fh",-1663396998),new cljs.core.Keyword(null,"ifh","ifh",943985660),new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653)],[span_w,frame_width,offset_from_top,num_batches,(span_w - pipe_width),pipe_width,span_h,inner_height,num_pipes]);
var seq_layers = ((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,_,offset_batch,config){
return (function (func){
var seq__70106 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"num-batches","num-batches",-1590046766).cljs$core$IFn$_invoke$arity$1(config)));
var chunk__70107 = null;
var count__70108 = (0);
var i__70109 = (0);
while(true){
if((i__70109 < count__70108)){
var amt = cljs.core._nth.call(null,chunk__70107,i__70109);
var tr__26877__auto___70110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___70110);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__70111 = seq__70106;
var G__70112 = chunk__70107;
var G__70113 = count__70108;
var G__70114 = (i__70109 + (1));
seq__70106 = G__70111;
chunk__70107 = G__70112;
count__70108 = G__70113;
i__70109 = G__70114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__70106);
if(temp__5735__auto__){
var seq__70106__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70106__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__70106__$1);
var G__70115 = cljs.core.chunk_rest.call(null,seq__70106__$1);
var G__70116 = c__4550__auto__;
var G__70117 = cljs.core.count.call(null,c__4550__auto__);
var G__70118 = (0);
seq__70106 = G__70115;
chunk__70107 = G__70116;
count__70108 = G__70117;
i__70109 = G__70118;
continue;
} else {
var amt = cljs.core.first.call(null,seq__70106__$1);
var tr__26877__auto___70119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___70119);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__70120 = cljs.core.next.call(null,seq__70106__$1);
var G__70121 = null;
var G__70122 = (0);
var G__70123 = (0);
seq__70106 = G__70120;
chunk__70107 = G__70121;
count__70108 = G__70122;
i__70109 = G__70123;
continue;
}
} else {
return null;
}
}
break;
}
});})(pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,_,offset_batch,config))
;
quil.core.rect.call(null,(0),(0),span_w,frame_width);

quil.core.rect.call(null,span_w,(0),frame_width,span_h);

quil.core.rect.call(null,frame_width,span_h,span_w,frame_width);

quil.core.rect.call(null,(0),frame_width,frame_width,span_h);

seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_bg_horiz_pipes,config));

code.pipes.build_vert_pipes.call(null,config);

return seq_layers.call(null,cljs.core.partial.call(null,code.pipes.build_fg_horiz_pipes,code.pipes.fg_pipes));
});
code.pipes.setup = (function code$pipes$setup(){
quil.core.frame_rate.call(null,(24));

quil.core.smooth.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return cljs.core.PersistentArrayMap.EMPTY;
});
code.pipes.update_state = (function code$pipes$update_state(state){
return cljs.core.PersistentArrayMap.EMPTY;
});
code.pipes.draw_state = (function code$pipes$draw_state(state){
quil.core.stroke_weight.call(null,code.util._PERCENT_of.call(null,0.25,quil.core.width.call(null)));

quil.core.background.call(null,(240));

return code.pipes.build_frame.call(null);
});
code.pipes.run_sketch = (function code$pipes$run_sketch(){
code.pipes.code = (function code$pipes$run_sketch_$_code(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"code",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,code.pipes.update_state))?(function() { 
var G__70124__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__70124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70125__i = 0, G__70125__a = new Array(arguments.length -  0);
while (G__70125__i < G__70125__a.length) {G__70125__a[G__70125__i] = arguments[G__70125__i + 0]; ++G__70125__i;}
  args = new cljs.core.IndexedSeq(G__70125__a,0,null);
} 
return G__70124__delegate.call(this,args);};
G__70124.cljs$lang$maxFixedArity = 0;
G__70124.cljs$lang$applyTo = (function (arglist__70126){
var args = cljs.core.seq(arglist__70126);
return G__70124__delegate(args);
});
G__70124.cljs$core$IFn$_invoke$arity$variadic = G__70124__delegate;
return G__70124;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__70127__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__70127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70128__i = 0, G__70128__a = new Array(arguments.length -  0);
while (G__70128__i < G__70128__a.length) {G__70128__a[G__70128__i] = arguments[G__70128__i + 0]; ++G__70128__i;}
  args = new cljs.core.IndexedSeq(G__70128__a,0,null);
} 
return G__70127__delegate.call(this,args);};
G__70127.cljs$lang$maxFixedArity = 0;
G__70127.cljs$lang$applyTo = (function (arglist__70129){
var args = cljs.core.seq(arglist__70129);
return G__70127__delegate(args);
});
G__70127.cljs$core$IFn$_invoke$arity$variadic = G__70127__delegate;
return G__70127;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__70130__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__70130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70131__i = 0, G__70131__a = new Array(arguments.length -  0);
while (G__70131__i < G__70131__a.length) {G__70131__a[G__70131__i] = arguments[G__70131__i + 0]; ++G__70131__i;}
  args = new cljs.core.IndexedSeq(G__70131__a,0,null);
} 
return G__70130__delegate.call(this,args);};
G__70130.cljs$lang$maxFixedArity = 0;
G__70130.cljs$lang$applyTo = (function (arglist__70132){
var args = cljs.core.seq(arglist__70132);
return G__70130__delegate(args);
});
G__70130.cljs$core$IFn$_invoke$arity$variadic = G__70130__delegate;
return G__70130;
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

//# sourceMappingURL=pipes.js.map?rel=1582851950118
