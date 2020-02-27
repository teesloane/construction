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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__34475){
var map__34476 = p__34475;
var map__34476__$1 = (((((!((map__34476 == null))))?(((((map__34476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34476):map__34476);
var config = map__34476__$1;
var frame_width = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var pipe_width = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__34476__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = pipe_width;
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3333,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((frame_width + bar_int_buffer) - (frame_width / (2)));
var seq__34478 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__34480 = null;
var count__34481 = (0);
var i__34482 = (0);
while(true){
if((i__34482 < count__34481)){
var b = cljs.core._nth.call(null,chunk__34480,i__34482);
var x_34484 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_34484,frame_width,bar_width,ifh);


var G__34485 = seq__34478;
var G__34486 = chunk__34480;
var G__34487 = count__34481;
var G__34488 = (i__34482 + (1));
seq__34478 = G__34485;
chunk__34480 = G__34486;
count__34481 = G__34487;
i__34482 = G__34488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34478);
if(temp__5735__auto__){
var seq__34478__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34478__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34478__$1);
var G__34489 = cljs.core.chunk_rest.call(null,seq__34478__$1);
var G__34490 = c__4550__auto__;
var G__34491 = cljs.core.count.call(null,c__4550__auto__);
var G__34492 = (0);
seq__34478 = G__34489;
chunk__34480 = G__34490;
count__34481 = G__34491;
i__34482 = G__34492;
continue;
} else {
var b = cljs.core.first.call(null,seq__34478__$1);
var x_34493 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_34493,frame_width,bar_width,ifh);


var G__34494 = cljs.core.next.call(null,seq__34478__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__34478 = G__34494;
chunk__34480 = G__34495;
count__34481 = G__34496;
i__34482 = G__34497;
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
var seq__34498 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__34500 = null;
var count__34501 = (0);
var i__34502 = (0);
while(true){
if((i__34502 < count__34501)){
var f = cljs.core._nth.call(null,chunk__34500,i__34502);
var map__34508_34512 = f;
var map__34508_34513__$1 = (((((!((map__34508_34512 == null))))?(((((map__34508_34512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508_34512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508_34512):map__34508_34512);
var vals_34514 = map__34508_34513__$1;
var lpipe_w_34515 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_34516 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_34517 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_34518 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_34519 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_34520 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_34521 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_34522 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_34523 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_34524 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_34525 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_34526 = cljs.core.get.call(null,map__34508_34513__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_34522,lpipe_y_34519,lpipe_w_34515,pipe_width_34516);

quil.core.arc.call(null,(circ1_x_34518 - cc_off_34526),circ1_y_34521,circ_r_34525,circ_r_34525,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_34523,y_pos_34517,rpipe_w_34524,pipe_width_34516);

quil.core.arc.call(null,(cc_off_34526 + circ2_x_34520),circ1_y_34521,circ_r_34525,circ_r_34525,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__34527 = seq__34498;
var G__34528 = chunk__34500;
var G__34529 = count__34501;
var G__34530 = (i__34502 + (1));
seq__34498 = G__34527;
chunk__34500 = G__34528;
count__34501 = G__34529;
i__34502 = G__34530;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34498);
if(temp__5735__auto__){
var seq__34498__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34498__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34498__$1);
var G__34531 = cljs.core.chunk_rest.call(null,seq__34498__$1);
var G__34532 = c__4550__auto__;
var G__34533 = cljs.core.count.call(null,c__4550__auto__);
var G__34534 = (0);
seq__34498 = G__34531;
chunk__34500 = G__34532;
count__34501 = G__34533;
i__34502 = G__34534;
continue;
} else {
var f = cljs.core.first.call(null,seq__34498__$1);
var map__34510_34535 = f;
var map__34510_34536__$1 = (((((!((map__34510_34535 == null))))?(((((map__34510_34535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34510_34535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34510_34535):map__34510_34535);
var vals_34537 = map__34510_34536__$1;
var lpipe_w_34538 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_34539 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_34540 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_34541 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_34542 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_34543 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_34544 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_34545 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_34546 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_34547 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_34548 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_34549 = cljs.core.get.call(null,map__34510_34536__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_34545,lpipe_y_34542,lpipe_w_34538,pipe_width_34539);

quil.core.arc.call(null,(circ1_x_34541 - cc_off_34549),circ1_y_34544,circ_r_34548,circ_r_34548,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_34546,y_pos_34540,rpipe_w_34547,pipe_width_34539);

quil.core.arc.call(null,(cc_off_34549 + circ2_x_34543),circ1_y_34544,circ_r_34548,circ_r_34548,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__34550 = cljs.core.next.call(null,seq__34498__$1);
var G__34551 = null;
var G__34552 = (0);
var G__34553 = (0);
seq__34498 = G__34550;
chunk__34500 = G__34551;
count__34501 = G__34552;
i__34502 = G__34553;
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
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__34554){
var map__34555 = p__34554;
var map__34555__$1 = (((((!((map__34555 == null))))?(((((map__34555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34555):map__34555);
var state = map__34555__$1;
var pipe_width = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var frame_width = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var fw = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_pipes = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653));
var noise_seeds = cljs.core.get.call(null,map__34555__$1,new cljs.core.Keyword(null,"noise-seeds","noise-seeds",-1969382269));
var holding_seeds = cljs.core.atom.call(null,noise_seeds);
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var get_rand_val_BANG_ = ((function (holding_seeds,space_between_bars,map__34555,map__34555__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (){
var f = cljs.core.first.call(null,cljs.core.deref.call(null,code.pipes.noise_seed_shadow));
cljs.core.swap_BANG_.call(null,code.pipes.noise_seed_shadow,((function (f,holding_seeds,space_between_bars,map__34555,map__34555__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds){
return (function (x){
return cljs.core.rest.call(null,x);
});})(f,holding_seeds,space_between_bars,map__34555,map__34555__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
);

return quil.core.map_range.call(null,quil.core.noise.call(null,f),(0),(1),(5),quil.core.width.call(null));
});})(holding_seeds,space_between_bars,map__34555,map__34555__$1,state,pipe_width,frame_width,fw,fh,ifw,ifh,num_pipes,noise_seeds))
;
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__34557_34563 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_pipes));
var chunk__34559_34564 = null;
var count__34560_34565 = (0);
var i__34561_34566 = (0);
while(true){
if((i__34561_34566 < count__34560_34565)){
var bar_34567 = cljs.core._nth.call(null,chunk__34559_34564,i__34561_34566);
var bar_type_34568 = cljs.core.even_QMARK_.call(null,bar_34567);
var y_top_offset_34569 = (0);
var y_pos_34570 = (y_top_offset_34569 + (bar_34567 * pipe_width));
var lpipe_x_34571 = frame_width;
var lpipe_y_34572 = y_pos_34570;
var lpipe_w_34573 = get_rand_val_BANG_.call(null);
var circ1_x_34574 = (frame_width + lpipe_w_34573);
var circ_r_34575 = pipe_width;
var circ1_y_34576 = ((circ_r_34575 / (2)) + y_pos_34570);
var circ2_y_34577 = circ1_y_34576;
var circ2_x_34578 = (space_between_bars + circ1_x_34574);
var rpipe_x_34579 = circ2_x_34578;
var rpipe_w_34580 = (fw - circ2_x_34578);
var cc_off_34581 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_34568){
quil.core.fill.call(null,lpipe_w_34573,(176),(60));

quil.core.rect.call(null,lpipe_x_34571,lpipe_y_34572,lpipe_w_34573,pipe_width);

quil.core.fill.call(null,(146),lpipe_w_34573,(100));

quil.core.ellipse.call(null,circ1_x_34574,circ1_y_34576,circ_r_34575,circ_r_34575);

quil.core.fill.call(null,(255));

quil.core.fill.call(null,(46),lpipe_w_34573,(113));

quil.core.rect.call(null,rpipe_x_34579,y_pos_34570,rpipe_w_34580,pipe_width);

quil.core.fill.call(null,lpipe_w_34573);

quil.core.ellipse.call(null,circ2_x_34578,circ1_y_34576,circ_r_34575,circ_r_34575);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_34572,circ2_x_34578,circ1_y_34576,rpipe_x_34579,lpipe_x_34571,rpipe_w_34580,circ_r_34575,cc_off_34581,lpipe_w_34573,pipe_width,y_pos_34570,circ1_x_34574]));
}


var G__34582 = seq__34557_34563;
var G__34583 = chunk__34559_34564;
var G__34584 = count__34560_34565;
var G__34585 = (i__34561_34566 + (1));
seq__34557_34563 = G__34582;
chunk__34559_34564 = G__34583;
count__34560_34565 = G__34584;
i__34561_34566 = G__34585;
continue;
} else {
var temp__5735__auto___34586 = cljs.core.seq.call(null,seq__34557_34563);
if(temp__5735__auto___34586){
var seq__34557_34587__$1 = temp__5735__auto___34586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34557_34587__$1)){
var c__4550__auto___34588 = cljs.core.chunk_first.call(null,seq__34557_34587__$1);
var G__34589 = cljs.core.chunk_rest.call(null,seq__34557_34587__$1);
var G__34590 = c__4550__auto___34588;
var G__34591 = cljs.core.count.call(null,c__4550__auto___34588);
var G__34592 = (0);
seq__34557_34563 = G__34589;
chunk__34559_34564 = G__34590;
count__34560_34565 = G__34591;
i__34561_34566 = G__34592;
continue;
} else {
var bar_34593 = cljs.core.first.call(null,seq__34557_34587__$1);
var bar_type_34594 = cljs.core.even_QMARK_.call(null,bar_34593);
var y_top_offset_34595 = (0);
var y_pos_34596 = (y_top_offset_34595 + (bar_34593 * pipe_width));
var lpipe_x_34597 = frame_width;
var lpipe_y_34598 = y_pos_34596;
var lpipe_w_34599 = get_rand_val_BANG_.call(null);
var circ1_x_34600 = (frame_width + lpipe_w_34599);
var circ_r_34601 = pipe_width;
var circ1_y_34602 = ((circ_r_34601 / (2)) + y_pos_34596);
var circ2_y_34603 = circ1_y_34602;
var circ2_x_34604 = (space_between_bars + circ1_x_34600);
var rpipe_x_34605 = circ2_x_34604;
var rpipe_w_34606 = (fw - circ2_x_34604);
var cc_off_34607 = code.util._PERCENT_of.call(null,0.2,quil.core.width.call(null));
if(bar_type_34594){
quil.core.fill.call(null,lpipe_w_34599,(176),(60));

quil.core.rect.call(null,lpipe_x_34597,lpipe_y_34598,lpipe_w_34599,pipe_width);

quil.core.fill.call(null,(146),lpipe_w_34599,(100));

quil.core.ellipse.call(null,circ1_x_34600,circ1_y_34602,circ_r_34601,circ_r_34601);

quil.core.fill.call(null,(255));

quil.core.fill.call(null,(46),lpipe_w_34599,(113));

quil.core.rect.call(null,rpipe_x_34605,y_pos_34596,rpipe_w_34606,pipe_width);

quil.core.fill.call(null,lpipe_w_34599);

quil.core.ellipse.call(null,circ2_x_34604,circ1_y_34602,circ_r_34601,circ_r_34601);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_34598,circ2_x_34604,circ1_y_34602,rpipe_x_34605,lpipe_x_34597,rpipe_w_34606,circ_r_34601,cc_off_34607,lpipe_w_34599,pipe_width,y_pos_34596,circ1_x_34600]));
}


var G__34608 = cljs.core.next.call(null,seq__34557_34587__$1);
var G__34609 = null;
var G__34610 = (0);
var G__34611 = (0);
seq__34557_34563 = G__34608;
chunk__34559_34564 = G__34609;
count__34560_34565 = G__34610;
i__34561_34566 = G__34611;
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
code.pipes.build_frame = (function code$pipes$build_frame(p__34612){
var map__34613 = p__34612;
var map__34613__$1 = (((((!((map__34613 == null))))?(((((map__34613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34613):map__34613);
var state = map__34613__$1;
var span_w = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"span-w","span-w",262919217));
var frame_width = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var span_h = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"span-h","span-h",-1783515273));
var seq_layers = cljs.core.get.call(null,map__34613__$1,new cljs.core.Keyword(null,"seq-layers","seq-layers",-1053498178));
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
var seq__34615 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_batches));
var chunk__34616 = null;
var count__34617 = (0);
var i__34618 = (0);
while(true){
if((i__34618 < count__34617)){
var amt = cljs.core._nth.call(null,chunk__34616,i__34618);
var tr__26877__auto___34623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___34623);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__34624 = seq__34615;
var G__34625 = chunk__34616;
var G__34626 = count__34617;
var G__34627 = (i__34618 + (1));
seq__34615 = G__34624;
chunk__34616 = G__34625;
count__34617 = G__34626;
i__34618 = G__34627;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__34615);
if(temp__5735__auto__){
var seq__34615__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34615__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34615__$1);
var G__34628 = cljs.core.chunk_rest.call(null,seq__34615__$1);
var G__34629 = c__4550__auto__;
var G__34630 = cljs.core.count.call(null,c__4550__auto__);
var G__34631 = (0);
seq__34615 = G__34628;
chunk__34616 = G__34629;
count__34617 = G__34630;
i__34618 = G__34631;
continue;
} else {
var amt = cljs.core.first.call(null,seq__34615__$1);
var tr__26877__auto___34632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___34632);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__34633 = cljs.core.next.call(null,seq__34615__$1);
var G__34634 = null;
var G__34635 = (0);
var G__34636 = (0);
seq__34615 = G__34633;
chunk__34616 = G__34634;
count__34617 = G__34635;
i__34618 = G__34636;
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
return (function code$pipes$setup_$_iter__34619(s__34620){
return (new cljs.core.LazySeq(null,((function (pipe_width,frame_width,offset_from_edge,span_w,span_h,inner_height,tx,num_batches,num_pipes,height_of_batch,height_of_all_batches,offset_from_top,offset_batch,seq_layers){
return (function (){
var s__34620__$1 = s__34620;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34620__$1);
if(temp__5735__auto__){
var s__34620__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34620__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34620__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34622 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34621 = (0);
while(true){
if((i__34621 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34621);
cljs.core.chunk_append.call(null,b__34622,cljs.core.rand.call(null,(100)));

var G__34637 = (i__34621 + (1));
i__34621 = G__34637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34622),code$pipes$setup_$_iter__34619.call(null,cljs.core.chunk_rest.call(null,s__34620__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34622),null);
}
} else {
var i = cljs.core.first.call(null,s__34620__$2);
return cljs.core.cons.call(null,cljs.core.rand.call(null,(100)),code$pipes$setup_$_iter__34619.call(null,cljs.core.rest.call(null,s__34620__$2)));
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
var G__34638__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__34638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34639__i = 0, G__34639__a = new Array(arguments.length -  0);
while (G__34639__i < G__34639__a.length) {G__34639__a[G__34639__i] = arguments[G__34639__i + 0]; ++G__34639__i;}
  args = new cljs.core.IndexedSeq(G__34639__a,0,null);
} 
return G__34638__delegate.call(this,args);};
G__34638.cljs$lang$maxFixedArity = 0;
G__34638.cljs$lang$applyTo = (function (arglist__34640){
var args = cljs.core.seq(arglist__34640);
return G__34638__delegate(args);
});
G__34638.cljs$core$IFn$_invoke$arity$variadic = G__34638__delegate;
return G__34638;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__34641__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__34641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34642__i = 0, G__34642__a = new Array(arguments.length -  0);
while (G__34642__i < G__34642__a.length) {G__34642__a[G__34642__i] = arguments[G__34642__i + 0]; ++G__34642__i;}
  args = new cljs.core.IndexedSeq(G__34642__a,0,null);
} 
return G__34641__delegate.call(this,args);};
G__34641.cljs$lang$maxFixedArity = 0;
G__34641.cljs$lang$applyTo = (function (arglist__34643){
var args = cljs.core.seq(arglist__34643);
return G__34641__delegate(args);
});
G__34641.cljs$core$IFn$_invoke$arity$variadic = G__34641__delegate;
return G__34641;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__34644__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__34644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34645__i = 0, G__34645__a = new Array(arguments.length -  0);
while (G__34645__i < G__34645__a.length) {G__34645__a[G__34645__i] = arguments[G__34645__i + 0]; ++G__34645__i;}
  args = new cljs.core.IndexedSeq(G__34645__a,0,null);
} 
return G__34644__delegate.call(this,args);};
G__34644.cljs$lang$maxFixedArity = 0;
G__34644.cljs$lang$applyTo = (function (arglist__34646){
var args = cljs.core.seq(arglist__34646);
return G__34644__delegate(args);
});
G__34644.cljs$core$IFn$_invoke$arity$variadic = G__34644__delegate;
return G__34644;
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

//# sourceMappingURL=pipes.js.map?rel=1582895813303
