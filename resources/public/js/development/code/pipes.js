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
code.pipes.build_vert_pipes = (function code$pipes$build_vert_pipes(p__66567){
var map__66568 = p__66567;
var map__66568__$1 = (((((!((map__66568 == null))))?(((((map__66568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66568):map__66568);
var config = map__66568__$1;
var frame_width = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var pipe_width = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var fw = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var ifw = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var fh = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifh = cljs.core.get.call(null,map__66568__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_bars = (5);
var bar_width = pipe_width;
var bar_int_buffer = code.util._PERCENT_of.call(null,3.3333,ifw);
var bar_interval = ((ifw / num_bars) + bar_int_buffer);
var bar_offset = ((frame_width + bar_int_buffer) - (frame_width / (2)));
var seq__66570 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_bars));
var chunk__66572 = null;
var count__66573 = (0);
var i__66574 = (0);
while(true){
if((i__66574 < count__66573)){
var b = cljs.core._nth.call(null,chunk__66572,i__66574);
var x_66576 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_66576,frame_width,bar_width,ifh);


var G__66577 = seq__66570;
var G__66578 = chunk__66572;
var G__66579 = count__66573;
var G__66580 = (i__66574 + (1));
seq__66570 = G__66577;
chunk__66572 = G__66578;
count__66573 = G__66579;
i__66574 = G__66580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66570);
if(temp__5735__auto__){
var seq__66570__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66570__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66570__$1);
var G__66581 = cljs.core.chunk_rest.call(null,seq__66570__$1);
var G__66582 = c__4550__auto__;
var G__66583 = cljs.core.count.call(null,c__4550__auto__);
var G__66584 = (0);
seq__66570 = G__66581;
chunk__66572 = G__66582;
count__66573 = G__66583;
i__66574 = G__66584;
continue;
} else {
var b = cljs.core.first.call(null,seq__66570__$1);
var x_66585 = (bar_offset + (b * bar_interval));
quil.core.rect.call(null,x_66585,frame_width,bar_width,ifh);


var G__66586 = cljs.core.next.call(null,seq__66570__$1);
var G__66587 = null;
var G__66588 = (0);
var G__66589 = (0);
seq__66570 = G__66586;
chunk__66572 = G__66587;
count__66573 = G__66588;
i__66574 = G__66589;
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
var seq__66590 = cljs.core.seq.call(null,cljs.core.deref.call(null,pipes_list));
var chunk__66592 = null;
var count__66593 = (0);
var i__66594 = (0);
while(true){
if((i__66594 < count__66593)){
var f = cljs.core._nth.call(null,chunk__66592,i__66594);
var map__66600_66604 = f;
var map__66600_66605__$1 = (((((!((map__66600_66604 == null))))?(((((map__66600_66604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66600_66604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66600_66604):map__66600_66604);
var vals_66606 = map__66600_66605__$1;
var lpipe_w_66607 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_66608 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_66609 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_66610 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_66611 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_66612 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_66613 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_66614 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_66615 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_66616 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_66617 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_66618 = cljs.core.get.call(null,map__66600_66605__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_66614,lpipe_y_66611,lpipe_w_66607,pipe_width_66608);

quil.core.arc.call(null,(circ1_x_66610 - cc_off_66618),circ1_y_66613,circ_r_66617,circ_r_66617,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_66615,y_pos_66609,rpipe_w_66616,pipe_width_66608);

quil.core.arc.call(null,(cc_off_66618 + circ2_x_66612),circ1_y_66613,circ_r_66617,circ_r_66617,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__66619 = seq__66590;
var G__66620 = chunk__66592;
var G__66621 = count__66593;
var G__66622 = (i__66594 + (1));
seq__66590 = G__66619;
chunk__66592 = G__66620;
count__66593 = G__66621;
i__66594 = G__66622;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66590);
if(temp__5735__auto__){
var seq__66590__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66590__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66590__$1);
var G__66623 = cljs.core.chunk_rest.call(null,seq__66590__$1);
var G__66624 = c__4550__auto__;
var G__66625 = cljs.core.count.call(null,c__4550__auto__);
var G__66626 = (0);
seq__66590 = G__66623;
chunk__66592 = G__66624;
count__66593 = G__66625;
i__66594 = G__66626;
continue;
} else {
var f = cljs.core.first.call(null,seq__66590__$1);
var map__66602_66627 = f;
var map__66602_66628__$1 = (((((!((map__66602_66627 == null))))?(((((map__66602_66627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66602_66627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66602_66627):map__66602_66627);
var vals_66629 = map__66602_66628__$1;
var lpipe_w_66630 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689));
var pipe_width_66631 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var y_pos_66632 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"y-pos","y-pos",1563825948));
var circ1_x_66633 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593));
var lpipe_y_66634 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963));
var circ2_x_66635 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455));
var circ1_y_66636 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292));
var lpipe_x_66637 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683));
var rpipe_x_66638 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005));
var rpipe_w_66639 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562));
var circ_r_66640 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030));
var cc_off_66641 = cljs.core.get.call(null,map__66602_66628__$1,new cljs.core.Keyword(null,"cc-off","cc-off",-183165484));
quil.core.rect.call(null,lpipe_x_66637,lpipe_y_66634,lpipe_w_66630,pipe_width_66631);

quil.core.arc.call(null,(circ1_x_66633 - cc_off_66641),circ1_y_66636,circ_r_66640,circ_r_66640,(- quil.core.HALF_PI),quil.core.HALF_PI);

quil.core.rect.call(null,rpipe_x_66638,y_pos_66632,rpipe_w_66639,pipe_width_66631);

quil.core.arc.call(null,(cc_off_66641 + circ2_x_66635),circ1_y_66636,circ_r_66640,circ_r_66640,quil.core.HALF_PI,(- quil.core.HALF_PI));


var G__66642 = cljs.core.next.call(null,seq__66590__$1);
var G__66643 = null;
var G__66644 = (0);
var G__66645 = (0);
seq__66590 = G__66642;
chunk__66592 = G__66643;
count__66593 = G__66644;
i__66594 = G__66645;
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
code.pipes.build_bg_horiz_pipes = (function code$pipes$build_bg_horiz_pipes(p__66646){
var map__66647 = p__66646;
var map__66647__$1 = (((((!((map__66647 == null))))?(((((map__66647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66647):map__66647);
var config = map__66647__$1;
var pipe_width = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010));
var frame_width = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var fw = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"fw","fw",-2145665918));
var fh = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"fh","fh",-1663396998));
var ifw = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"ifw","ifw",411867642));
var ifh = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"ifh","ifh",943985660));
var num_pipes = cljs.core.get.call(null,map__66647__$1,new cljs.core.Keyword(null,"num-pipes","num-pipes",1765542653));
var space_between_bars = code.util._PERCENT_of.call(null,(11),ifw);
var rand_l = code.util.rand_b_w.call(null,(5),(80));
var rand_r = code.util.rand_b_w.call(null,(5),(80));
var set_width = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code.util._PERCENT_of.call(null,rand_l,ifw),code.util._PERCENT_of.call(null,rand_r,ifw)], null);
var pipe_width_n = code.util._PERCENT_of.call(null,(75),pipe_width);
var local_horiz_cache = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var seq__66649_66655 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_pipes));
var chunk__66651_66656 = null;
var count__66652_66657 = (0);
var i__66653_66658 = (0);
while(true){
if((i__66653_66658 < count__66652_66657)){
var bar_66659 = cljs.core._nth.call(null,chunk__66651_66656,i__66653_66658);
var bar_type_66660 = cljs.core.even_QMARK_.call(null,bar_66659);
var y_top_offset_66661 = (0);
var y_pos_66662 = (y_top_offset_66661 + (bar_66659 * pipe_width));
var lpipe_x_66663 = frame_width;
var lpipe_y_66664 = y_pos_66662;
var lpipe_w_66665 = ((bar_type_66660)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_66666 = (frame_width + lpipe_w_66665);
var circ_r_66667 = pipe_width;
var circ1_y_66668 = ((circ_r_66667 / (2)) + y_pos_66662);
var circ2_y_66669 = circ1_y_66668;
var circ2_x_66670 = (space_between_bars + circ1_x_66666);
var rpipe_x_66671 = circ2_x_66670;
var rpipe_w_66672 = (fw - circ2_x_66670);
var cc_off_66673 = code.util._PERCENT_of.call(null,0.35,quil.core.width.call(null));
if(bar_type_66660){
quil.core.rect.call(null,lpipe_x_66663,lpipe_y_66664,lpipe_w_66665,pipe_width);

quil.core.ellipse.call(null,circ1_x_66666,circ1_y_66668,circ_r_66667,circ_r_66667);

quil.core.rect.call(null,rpipe_x_66671,y_pos_66662,rpipe_w_66672,pipe_width);

quil.core.ellipse.call(null,circ2_x_66670,circ1_y_66668,circ_r_66667,circ_r_66667);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_66664,circ2_x_66670,circ1_y_66668,rpipe_x_66671,lpipe_x_66663,rpipe_w_66672,circ_r_66667,cc_off_66673,lpipe_w_66665,pipe_width,y_pos_66662,circ1_x_66666]));
}


var G__66674 = seq__66649_66655;
var G__66675 = chunk__66651_66656;
var G__66676 = count__66652_66657;
var G__66677 = (i__66653_66658 + (1));
seq__66649_66655 = G__66674;
chunk__66651_66656 = G__66675;
count__66652_66657 = G__66676;
i__66653_66658 = G__66677;
continue;
} else {
var temp__5735__auto___66678 = cljs.core.seq.call(null,seq__66649_66655);
if(temp__5735__auto___66678){
var seq__66649_66679__$1 = temp__5735__auto___66678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66649_66679__$1)){
var c__4550__auto___66680 = cljs.core.chunk_first.call(null,seq__66649_66679__$1);
var G__66681 = cljs.core.chunk_rest.call(null,seq__66649_66679__$1);
var G__66682 = c__4550__auto___66680;
var G__66683 = cljs.core.count.call(null,c__4550__auto___66680);
var G__66684 = (0);
seq__66649_66655 = G__66681;
chunk__66651_66656 = G__66682;
count__66652_66657 = G__66683;
i__66653_66658 = G__66684;
continue;
} else {
var bar_66685 = cljs.core.first.call(null,seq__66649_66679__$1);
var bar_type_66686 = cljs.core.even_QMARK_.call(null,bar_66685);
var y_top_offset_66687 = (0);
var y_pos_66688 = (y_top_offset_66687 + (bar_66685 * pipe_width));
var lpipe_x_66689 = frame_width;
var lpipe_y_66690 = y_pos_66688;
var lpipe_w_66691 = ((bar_type_66686)?cljs.core.first.call(null,set_width):cljs.core.second.call(null,set_width));
var circ1_x_66692 = (frame_width + lpipe_w_66691);
var circ_r_66693 = pipe_width;
var circ1_y_66694 = ((circ_r_66693 / (2)) + y_pos_66688);
var circ2_y_66695 = circ1_y_66694;
var circ2_x_66696 = (space_between_bars + circ1_x_66692);
var rpipe_x_66697 = circ2_x_66696;
var rpipe_w_66698 = (fw - circ2_x_66696);
var cc_off_66699 = code.util._PERCENT_of.call(null,0.35,quil.core.width.call(null));
if(bar_type_66686){
quil.core.rect.call(null,lpipe_x_66689,lpipe_y_66690,lpipe_w_66691,pipe_width);

quil.core.ellipse.call(null,circ1_x_66692,circ1_y_66694,circ_r_66693,circ_r_66693);

quil.core.rect.call(null,rpipe_x_66697,y_pos_66688,rpipe_w_66698,pipe_width);

quil.core.ellipse.call(null,circ2_x_66696,circ1_y_66694,circ_r_66693,circ_r_66693);
} else {
cljs.core.swap_BANG_.call(null,local_horiz_cache,cljs.core.conj,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lpipe-y","lpipe-y",-833267963),new cljs.core.Keyword(null,"circ2-x","circ2-x",-1413546455),new cljs.core.Keyword(null,"circ1-y","circ1-y",1207973292),new cljs.core.Keyword(null,"rpipe-x","rpipe-x",2065481005),new cljs.core.Keyword(null,"lpipe-x","lpipe-x",-1180441683),new cljs.core.Keyword(null,"rpipe-w","rpipe-w",-443648562),new cljs.core.Keyword(null,"circ-r","circ-r",-1572630030),new cljs.core.Keyword(null,"cc-off","cc-off",-183165484),new cljs.core.Keyword(null,"lpipe-w","lpipe-w",1006429689),new cljs.core.Keyword(null,"pipe-width","pipe-width",252386010),new cljs.core.Keyword(null,"y-pos","y-pos",1563825948),new cljs.core.Keyword(null,"circ1-x","circ1-x",-1999914593)],[lpipe_y_66690,circ2_x_66696,circ1_y_66694,rpipe_x_66697,lpipe_x_66689,rpipe_w_66698,circ_r_66693,cc_off_66699,lpipe_w_66691,pipe_width,y_pos_66688,circ1_x_66692]));
}


var G__66700 = cljs.core.next.call(null,seq__66649_66679__$1);
var G__66701 = null;
var G__66702 = (0);
var G__66703 = (0);
seq__66649_66655 = G__66700;
chunk__66651_66656 = G__66701;
count__66652_66657 = G__66702;
i__66653_66658 = G__66703;
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
var seq__66704 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),new cljs.core.Keyword(null,"num-batches","num-batches",-1590046766).cljs$core$IFn$_invoke$arity$1(config)));
var chunk__66705 = null;
var count__66706 = (0);
var i__66707 = (0);
while(true){
if((i__66707 < count__66706)){
var amt = cljs.core._nth.call(null,chunk__66705,i__66707);
var tr__26877__auto___66708 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___66708);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__66709 = seq__66704;
var G__66710 = chunk__66705;
var G__66711 = count__66706;
var G__66712 = (i__66707 + (1));
seq__66704 = G__66709;
chunk__66705 = G__66710;
count__66706 = G__66711;
i__66707 = G__66712;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__66704);
if(temp__5735__auto__){
var seq__66704__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66704__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__66704__$1);
var G__66713 = cljs.core.chunk_rest.call(null,seq__66704__$1);
var G__66714 = c__4550__auto__;
var G__66715 = cljs.core.count.call(null,c__4550__auto__);
var G__66716 = (0);
seq__66704 = G__66713;
chunk__66705 = G__66714;
count__66706 = G__66715;
i__66707 = G__66716;
continue;
} else {
var amt = cljs.core.first.call(null,seq__66704__$1);
var tr__26877__auto___66717 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),((offset_from_top / (2)) + (offset_from_top * amt))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto___66717);

func.call(null);
}finally {quil.core.pop_matrix.call(null);
}

var G__66718 = cljs.core.next.call(null,seq__66704__$1);
var G__66719 = null;
var G__66720 = (0);
var G__66721 = (0);
seq__66704 = G__66718;
chunk__66705 = G__66719;
count__66706 = G__66720;
i__66707 = G__66721;
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
quil.core.frame_rate.call(null,(1));

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
var G__66722__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.update_state,args);
};
var G__66722 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66723__i = 0, G__66723__a = new Array(arguments.length -  0);
while (G__66723__i < G__66723__a.length) {G__66723__a[G__66723__i] = arguments[G__66723__i + 0]; ++G__66723__i;}
  args = new cljs.core.IndexedSeq(G__66723__a,0,null);
} 
return G__66722__delegate.call(this,args);};
G__66722.cljs$lang$maxFixedArity = 0;
G__66722.cljs$lang$applyTo = (function (arglist__66724){
var args = cljs.core.seq(arglist__66724);
return G__66722__delegate(args);
});
G__66722.cljs$core$IFn$_invoke$arity$variadic = G__66722__delegate;
return G__66722;
})()
:code.pipes.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.pipes.setup))?(function() { 
var G__66725__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.setup,args);
};
var G__66725 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66726__i = 0, G__66726__a = new Array(arguments.length -  0);
while (G__66726__i < G__66726__a.length) {G__66726__a[G__66726__i] = arguments[G__66726__i + 0]; ++G__66726__i;}
  args = new cljs.core.IndexedSeq(G__66726__a,0,null);
} 
return G__66725__delegate.call(this,args);};
G__66725.cljs$lang$maxFixedArity = 0;
G__66725.cljs$lang$applyTo = (function (arglist__66727){
var args = cljs.core.seq(arglist__66727);
return G__66725__delegate(args);
});
G__66725.cljs$core$IFn$_invoke$arity$variadic = G__66725__delegate;
return G__66725;
})()
:code.pipes.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.pipes.draw_state))?(function() { 
var G__66728__delegate = function (args){
return cljs.core.apply.call(null,code.pipes.draw_state,args);
};
var G__66728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66729__i = 0, G__66729__a = new Array(arguments.length -  0);
while (G__66729__i < G__66729__a.length) {G__66729__a[G__66729__i] = arguments[G__66729__i + 0]; ++G__66729__i;}
  args = new cljs.core.IndexedSeq(G__66729__a,0,null);
} 
return G__66728__delegate.call(this,args);};
G__66728.cljs$lang$maxFixedArity = 0;
G__66728.cljs$lang$applyTo = (function (arglist__66730){
var args = cljs.core.seq(arglist__66730);
return G__66728__delegate(args);
});
G__66728.cljs$core$IFn$_invoke$arity$variadic = G__66728__delegate;
return G__66728;
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

//# sourceMappingURL=pipes.js.map?rel=1582850551336
