// Compiled by ClojureScript 1.10.520 {}
goog.provide('code.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('code.util');
code.core.setup = (function code$core$setup(){
quil.core.frame_rate.call(null,(1));

quil.core.smooth.call(null,(2));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return cljs.core.PersistentArrayMap.EMPTY;
});
code.core.update_state = (function code$core$update_state(state){
return cljs.core.PersistentArrayMap.EMPTY;
});
if((typeof code !== 'undefined') && (typeof code.core !== 'undefined') && (typeof code.core.draw_lines !== 'undefined')){
} else {
code.core.draw_lines = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"code.core","draw-lines"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (lset){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lset);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"sine","sine",-619916490),(function (p__65453){
var map__65454 = p__65453;
var map__65454__$1 = (((((!((map__65454 == null))))?(((((map__65454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65454):map__65454);
var lset = map__65454__$1;
var y_b = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_t = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var sq__GT_span = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_m = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var amp = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var x_l = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"x-l","x-l",-1139978965));
var y_off = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"y-off","y-off",-1713117714));
var size = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var x_r = cljs.core.get.call(null,map__65454__$1,new cljs.core.Keyword(null,"x-r","x-r",-1651891086));
cljs.core.prn.call(null,"input is",y_m);

var your_sine_ness_QMARK_ = code.util.rand_b_w.call(null,0.2,(12));
var sin_or_cos_QMARK_ = ((((5) > your_sine_ness_QMARK_))?quil.core.sin:quil.core.cos);
var t__GT_b_or_b__GT_t_QMARK_ = ((((5) < your_sine_ness_QMARK_))?true:false);
var seq__65456 = cljs.core.seq.call(null,sq__GT_span);
var chunk__65458 = null;
var count__65459 = (0);
var i__65460 = (0);
while(true){
if((i__65460 < count__65459)){
var line = cljs.core._nth.call(null,chunk__65458,i__65460);
var sine_input_65462 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_65463 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_65462 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_65463);
} else {
quil.core.line.call(null,line,end_y_point_65463,line,y_t);
}


var G__65464 = seq__65456;
var G__65465 = chunk__65458;
var G__65466 = count__65459;
var G__65467 = (i__65460 + (1));
seq__65456 = G__65464;
chunk__65458 = G__65465;
count__65459 = G__65466;
i__65460 = G__65467;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__65456);
if(temp__5735__auto__){
var seq__65456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65456__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__65456__$1);
var G__65468 = cljs.core.chunk_rest.call(null,seq__65456__$1);
var G__65469 = c__4550__auto__;
var G__65470 = cljs.core.count.call(null,c__4550__auto__);
var G__65471 = (0);
seq__65456 = G__65468;
chunk__65458 = G__65469;
count__65459 = G__65470;
i__65460 = G__65471;
continue;
} else {
var line = cljs.core.first.call(null,seq__65456__$1);
var sine_input_65472 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_65473 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_65472 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_65473);
} else {
quil.core.line.call(null,line,end_y_point_65473,line,y_t);
}


var G__65474 = cljs.core.next.call(null,seq__65456__$1);
var G__65475 = null;
var G__65476 = (0);
var G__65477 = (0);
seq__65456 = G__65474;
chunk__65458 = G__65475;
count__65459 = G__65476;
i__65460 = G__65477;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"full","full",436801220),(function (p__65478){
var map__65479 = p__65478;
var map__65479__$1 = (((((!((map__65479 == null))))?(((((map__65479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65479):map__65479);
var lset = map__65479__$1;
var sq__GT_span = cljs.core.get.call(null,map__65479__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_b = cljs.core.get.call(null,map__65479__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_m = cljs.core.get.call(null,map__65479__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var y_t = cljs.core.get.call(null,map__65479__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var seq__65481 = cljs.core.seq.call(null,sq__GT_span);
var chunk__65482 = null;
var count__65483 = (0);
var i__65484 = (0);
while(true){
if((i__65484 < count__65483)){
var line = cljs.core._nth.call(null,chunk__65482,i__65484);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__65485 = seq__65481;
var G__65486 = chunk__65482;
var G__65487 = count__65483;
var G__65488 = (i__65484 + (1));
seq__65481 = G__65485;
chunk__65482 = G__65486;
count__65483 = G__65487;
i__65484 = G__65488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__65481);
if(temp__5735__auto__){
var seq__65481__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65481__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__65481__$1);
var G__65489 = cljs.core.chunk_rest.call(null,seq__65481__$1);
var G__65490 = c__4550__auto__;
var G__65491 = cljs.core.count.call(null,c__4550__auto__);
var G__65492 = (0);
seq__65481 = G__65489;
chunk__65482 = G__65490;
count__65483 = G__65491;
i__65484 = G__65492;
continue;
} else {
var line = cljs.core.first.call(null,seq__65481__$1);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__65493 = cljs.core.next.call(null,seq__65481__$1);
var G__65494 = null;
var G__65495 = (0);
var G__65496 = (0);
seq__65481 = G__65493;
chunk__65482 = G__65494;
count__65483 = G__65495;
i__65484 = G__65496;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"empty","empty",767870958),(function (lset){
return null;
}));
code.core.rnd_draw_line_method = (function code$core$rnd_draw_line_method(){
return cljs.core.rand_nth.call(null,cljs.core.conj.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,code.core.draw_lines)),new cljs.core.Keyword(null,"empty","empty",767870958)));
});
code.core.draw_square = (function code$core$draw_square(p__65498,size,margin){
var vec__65499 = p__65498;
var x = cljs.core.nth.call(null,vec__65499,(0),null);
var y = cljs.core.nth.call(null,vec__65499,(1),null);

var smult = ((function (vec__65499,x,y){
return (function (p1__65497_SHARP_){
return (size / p1__65497_SHARP_);
});})(vec__65499,x,y))
;
var amp = (size / smult.call(null,(8)));
var sin_a = smult.call(null,code.util.rand_b_w.call(null,(size / (4)),size));
var outer_sq = (((size + margin) - size) / (2));
quil.core.stroke.call(null,quil.core.color.call(null,(180),(10),(1)));

quil.core.stroke_weight.call(null,code.util._PERCENT_of.call(null,0.125,quil.core.width.call(null)));

var tr__26896__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_sq,outer_sq], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto__);

quil.core.rect.call(null,x,y,size,size);

return code.core.draw_lines.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545),new cljs.core.Keyword(null,"x-l","x-l",-1139978965),new cljs.core.Keyword(null,"amp","amp",271690571),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"y-off","y-off",-1713117714),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x-r","x-r",-1651891086),new cljs.core.Keyword(null,"y-b","y-b",-478406788),new cljs.core.Keyword(null,"y-t","y-t",1394268126)],[cljs.core.range.call(null,x,(size + x)),x,amp,code.core.rnd_draw_line_method.call(null),code.util.rand_b_w.call(null,(y + (15)),((y + size) - (15))),size,(x + size),(y + size),y]));
}finally {quil.core.pop_matrix.call(null);
}});
code.core.draw_state = (function code$core$draw_state(state){
quil.core.no_loop.call(null);

quil.core.background.call(null,(240));

var sq_div_65530 = (12);
var margin_65531 = code.util._PERCENT_of.call(null,(4),quil.core.width.call(null));
var num_squares_65532 = (6);
var size_65533 = (quil.core.width.call(null) / sq_div_65530);
var offset_65534 = ((num_squares_65532 / (2)) * (margin_65531 + size_65533));
var halfw_65535 = ((quil.core.width.call(null) / (2)) - offset_65534);
var halfh_65536 = ((quil.core.height.call(null) / (2)) - offset_65534);
var seq__65502_65537 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_65532));
var chunk__65503_65538 = null;
var count__65504_65539 = (0);
var i__65505_65540 = (0);
while(true){
if((i__65505_65540 < count__65504_65539)){
var l_65541 = cljs.core._nth.call(null,chunk__65503_65538,i__65505_65540);
var seq__65518_65542 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_65532));
var chunk__65520_65543 = null;
var count__65521_65544 = (0);
var i__65522_65545 = (0);
while(true){
if((i__65522_65545 < count__65521_65544)){
var yr_65546 = cljs.core._nth.call(null,chunk__65520_65543,i__65522_65545);
var xpos_65547 = ((margin_65531 * l_65541) + (size_65533 * l_65541));
var ypos_65548 = ((margin_65531 * yr_65546) + (size_65533 * yr_65546));
var tr__26896__auto___65549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_65535,halfh_65536], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___65549);

quil.core.rect.call(null,xpos_65547,ypos_65548,(margin_65531 + size_65533),(margin_65531 + size_65533));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_65547,ypos_65548], null),size_65533,margin_65531);
}finally {quil.core.pop_matrix.call(null);
}

var G__65550 = seq__65518_65542;
var G__65551 = chunk__65520_65543;
var G__65552 = count__65521_65544;
var G__65553 = (i__65522_65545 + (1));
seq__65518_65542 = G__65550;
chunk__65520_65543 = G__65551;
count__65521_65544 = G__65552;
i__65522_65545 = G__65553;
continue;
} else {
var temp__5735__auto___65554 = cljs.core.seq.call(null,seq__65518_65542);
if(temp__5735__auto___65554){
var seq__65518_65555__$1 = temp__5735__auto___65554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65518_65555__$1)){
var c__4550__auto___65556 = cljs.core.chunk_first.call(null,seq__65518_65555__$1);
var G__65557 = cljs.core.chunk_rest.call(null,seq__65518_65555__$1);
var G__65558 = c__4550__auto___65556;
var G__65559 = cljs.core.count.call(null,c__4550__auto___65556);
var G__65560 = (0);
seq__65518_65542 = G__65557;
chunk__65520_65543 = G__65558;
count__65521_65544 = G__65559;
i__65522_65545 = G__65560;
continue;
} else {
var yr_65561 = cljs.core.first.call(null,seq__65518_65555__$1);
var xpos_65562 = ((margin_65531 * l_65541) + (size_65533 * l_65541));
var ypos_65563 = ((margin_65531 * yr_65561) + (size_65533 * yr_65561));
var tr__26896__auto___65564 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_65535,halfh_65536], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___65564);

quil.core.rect.call(null,xpos_65562,ypos_65563,(margin_65531 + size_65533),(margin_65531 + size_65533));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_65562,ypos_65563], null),size_65533,margin_65531);
}finally {quil.core.pop_matrix.call(null);
}

var G__65565 = cljs.core.next.call(null,seq__65518_65555__$1);
var G__65566 = null;
var G__65567 = (0);
var G__65568 = (0);
seq__65518_65542 = G__65565;
chunk__65520_65543 = G__65566;
count__65521_65544 = G__65567;
i__65522_65545 = G__65568;
continue;
}
} else {
}
}
break;
}


var G__65569 = seq__65502_65537;
var G__65570 = chunk__65503_65538;
var G__65571 = count__65504_65539;
var G__65572 = (i__65505_65540 + (1));
seq__65502_65537 = G__65569;
chunk__65503_65538 = G__65570;
count__65504_65539 = G__65571;
i__65505_65540 = G__65572;
continue;
} else {
var temp__5735__auto___65573 = cljs.core.seq.call(null,seq__65502_65537);
if(temp__5735__auto___65573){
var seq__65502_65574__$1 = temp__5735__auto___65573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65502_65574__$1)){
var c__4550__auto___65575 = cljs.core.chunk_first.call(null,seq__65502_65574__$1);
var G__65576 = cljs.core.chunk_rest.call(null,seq__65502_65574__$1);
var G__65577 = c__4550__auto___65575;
var G__65578 = cljs.core.count.call(null,c__4550__auto___65575);
var G__65579 = (0);
seq__65502_65537 = G__65576;
chunk__65503_65538 = G__65577;
count__65504_65539 = G__65578;
i__65505_65540 = G__65579;
continue;
} else {
var l_65580 = cljs.core.first.call(null,seq__65502_65574__$1);
var seq__65524_65581 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_65532));
var chunk__65526_65582 = null;
var count__65527_65583 = (0);
var i__65528_65584 = (0);
while(true){
if((i__65528_65584 < count__65527_65583)){
var yr_65585 = cljs.core._nth.call(null,chunk__65526_65582,i__65528_65584);
var xpos_65586 = ((margin_65531 * l_65580) + (size_65533 * l_65580));
var ypos_65587 = ((margin_65531 * yr_65585) + (size_65533 * yr_65585));
var tr__26896__auto___65588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_65535,halfh_65536], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___65588);

quil.core.rect.call(null,xpos_65586,ypos_65587,(margin_65531 + size_65533),(margin_65531 + size_65533));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_65586,ypos_65587], null),size_65533,margin_65531);
}finally {quil.core.pop_matrix.call(null);
}

var G__65589 = seq__65524_65581;
var G__65590 = chunk__65526_65582;
var G__65591 = count__65527_65583;
var G__65592 = (i__65528_65584 + (1));
seq__65524_65581 = G__65589;
chunk__65526_65582 = G__65590;
count__65527_65583 = G__65591;
i__65528_65584 = G__65592;
continue;
} else {
var temp__5735__auto___65593__$1 = cljs.core.seq.call(null,seq__65524_65581);
if(temp__5735__auto___65593__$1){
var seq__65524_65594__$1 = temp__5735__auto___65593__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65524_65594__$1)){
var c__4550__auto___65595 = cljs.core.chunk_first.call(null,seq__65524_65594__$1);
var G__65596 = cljs.core.chunk_rest.call(null,seq__65524_65594__$1);
var G__65597 = c__4550__auto___65595;
var G__65598 = cljs.core.count.call(null,c__4550__auto___65595);
var G__65599 = (0);
seq__65524_65581 = G__65596;
chunk__65526_65582 = G__65597;
count__65527_65583 = G__65598;
i__65528_65584 = G__65599;
continue;
} else {
var yr_65600 = cljs.core.first.call(null,seq__65524_65594__$1);
var xpos_65601 = ((margin_65531 * l_65580) + (size_65533 * l_65580));
var ypos_65602 = ((margin_65531 * yr_65600) + (size_65533 * yr_65600));
var tr__26896__auto___65603 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_65535,halfh_65536], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___65603);

quil.core.rect.call(null,xpos_65601,ypos_65602,(margin_65531 + size_65533),(margin_65531 + size_65533));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_65601,ypos_65602], null),size_65533,margin_65531);
}finally {quil.core.pop_matrix.call(null);
}

var G__65604 = cljs.core.next.call(null,seq__65524_65594__$1);
var G__65605 = null;
var G__65606 = (0);
var G__65607 = (0);
seq__65524_65581 = G__65604;
chunk__65526_65582 = G__65605;
count__65527_65583 = G__65606;
i__65528_65584 = G__65607;
continue;
}
} else {
}
}
break;
}


var G__65608 = cljs.core.next.call(null,seq__65502_65574__$1);
var G__65609 = null;
var G__65610 = (0);
var G__65611 = (0);
seq__65502_65537 = G__65608;
chunk__65503_65538 = G__65609;
count__65504_65539 = G__65610;
i__65505_65540 = G__65611;
continue;
}
} else {
}
}
break;
}

return cljs.core.prn.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,code.core.draw_lines)));
});
code.core.run_sketch = (function code$core$run_sketch(){
code.core.code = (function code$core$run_sketch_$_code(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"code",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,code.core.update_state))?(function() { 
var G__65612__delegate = function (args){
return cljs.core.apply.call(null,code.core.update_state,args);
};
var G__65612 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65613__i = 0, G__65613__a = new Array(arguments.length -  0);
while (G__65613__i < G__65613__a.length) {G__65613__a[G__65613__i] = arguments[G__65613__i + 0]; ++G__65613__i;}
  args = new cljs.core.IndexedSeq(G__65613__a,0,null);
} 
return G__65612__delegate.call(this,args);};
G__65612.cljs$lang$maxFixedArity = 0;
G__65612.cljs$lang$applyTo = (function (arglist__65614){
var args = cljs.core.seq(arglist__65614);
return G__65612__delegate(args);
});
G__65612.cljs$core$IFn$_invoke$arity$variadic = G__65612__delegate;
return G__65612;
})()
:code.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2800),(2800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.core.setup))?(function() { 
var G__65615__delegate = function (args){
return cljs.core.apply.call(null,code.core.setup,args);
};
var G__65615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65616__i = 0, G__65616__a = new Array(arguments.length -  0);
while (G__65616__i < G__65616__a.length) {G__65616__a[G__65616__i] = arguments[G__65616__i + 0]; ++G__65616__i;}
  args = new cljs.core.IndexedSeq(G__65616__a,0,null);
} 
return G__65615__delegate.call(this,args);};
G__65615.cljs$lang$maxFixedArity = 0;
G__65615.cljs$lang$applyTo = (function (arglist__65617){
var args = cljs.core.seq(arglist__65617);
return G__65615__delegate(args);
});
G__65615.cljs$core$IFn$_invoke$arity$variadic = G__65615__delegate;
return G__65615;
})()
:code.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.core.draw_state))?(function() { 
var G__65618__delegate = function (args){
return cljs.core.apply.call(null,code.core.draw_state,args);
};
var G__65618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65619__i = 0, G__65619__a = new Array(arguments.length -  0);
while (G__65619__i < G__65619__a.length) {G__65619__a[G__65619__i] = arguments[G__65619__i + 0]; ++G__65619__i;}
  args = new cljs.core.IndexedSeq(G__65619__a,0,null);
} 
return G__65618__delegate.call(this,args);};
G__65618.cljs$lang$maxFixedArity = 0;
G__65618.cljs$lang$applyTo = (function (arglist__65620){
var args = cljs.core.seq(arglist__65620);
return G__65618__delegate(args);
});
G__65618.cljs$core$IFn$_invoke$arity$variadic = G__65618__delegate;
return G__65618;
})()
:code.core.draw_state));
});
goog.exportSymbol('code.core.code', code.core.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26490__26491__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26490__26491__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.core.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.core.run_sketch', code.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581378091040
