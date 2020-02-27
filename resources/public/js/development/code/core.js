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
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"sine","sine",-619916490),(function (p__28356){
var map__28357 = p__28356;
var map__28357__$1 = (((((!((map__28357 == null))))?(((((map__28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28357):map__28357);
var lset = map__28357__$1;
var y_b = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_t = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var sq__GT_span = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_m = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var amp = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var x_l = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"x-l","x-l",-1139978965));
var y_off = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"y-off","y-off",-1713117714));
var size = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var x_r = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"x-r","x-r",-1651891086));
cljs.core.prn.call(null,"input is",y_m);

var your_sine_ness_QMARK_ = code.util.rand_b_w.call(null,0.2,(12));
var sin_or_cos_QMARK_ = ((((5) > your_sine_ness_QMARK_))?quil.core.sin:quil.core.cos);
var t__GT_b_or_b__GT_t_QMARK_ = ((((5) < your_sine_ness_QMARK_))?true:false);
var seq__28359 = cljs.core.seq.call(null,sq__GT_span);
var chunk__28361 = null;
var count__28362 = (0);
var i__28363 = (0);
while(true){
if((i__28363 < count__28362)){
var line = cljs.core._nth.call(null,chunk__28361,i__28363);
var sine_input_28365 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_28366 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_28365 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_28366);
} else {
quil.core.line.call(null,line,end_y_point_28366,line,y_t);
}


var G__28367 = seq__28359;
var G__28368 = chunk__28361;
var G__28369 = count__28362;
var G__28370 = (i__28363 + (1));
seq__28359 = G__28367;
chunk__28361 = G__28368;
count__28362 = G__28369;
i__28363 = G__28370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28359);
if(temp__5735__auto__){
var seq__28359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28359__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28359__$1);
var G__28371 = cljs.core.chunk_rest.call(null,seq__28359__$1);
var G__28372 = c__4550__auto__;
var G__28373 = cljs.core.count.call(null,c__4550__auto__);
var G__28374 = (0);
seq__28359 = G__28371;
chunk__28361 = G__28372;
count__28362 = G__28373;
i__28363 = G__28374;
continue;
} else {
var line = cljs.core.first.call(null,seq__28359__$1);
var sine_input_28375 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_28376 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_28375 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_28376);
} else {
quil.core.line.call(null,line,end_y_point_28376,line,y_t);
}


var G__28377 = cljs.core.next.call(null,seq__28359__$1);
var G__28378 = null;
var G__28379 = (0);
var G__28380 = (0);
seq__28359 = G__28377;
chunk__28361 = G__28378;
count__28362 = G__28379;
i__28363 = G__28380;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"full","full",436801220),(function (p__28381){
var map__28382 = p__28381;
var map__28382__$1 = (((((!((map__28382 == null))))?(((((map__28382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28382):map__28382);
var lset = map__28382__$1;
var sq__GT_span = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_b = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_m = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var y_t = cljs.core.get.call(null,map__28382__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var seq__28384 = cljs.core.seq.call(null,sq__GT_span);
var chunk__28385 = null;
var count__28386 = (0);
var i__28387 = (0);
while(true){
if((i__28387 < count__28386)){
var line = cljs.core._nth.call(null,chunk__28385,i__28387);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__28388 = seq__28384;
var G__28389 = chunk__28385;
var G__28390 = count__28386;
var G__28391 = (i__28387 + (1));
seq__28384 = G__28388;
chunk__28385 = G__28389;
count__28386 = G__28390;
i__28387 = G__28391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28384);
if(temp__5735__auto__){
var seq__28384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28384__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28384__$1);
var G__28392 = cljs.core.chunk_rest.call(null,seq__28384__$1);
var G__28393 = c__4550__auto__;
var G__28394 = cljs.core.count.call(null,c__4550__auto__);
var G__28395 = (0);
seq__28384 = G__28392;
chunk__28385 = G__28393;
count__28386 = G__28394;
i__28387 = G__28395;
continue;
} else {
var line = cljs.core.first.call(null,seq__28384__$1);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__28396 = cljs.core.next.call(null,seq__28384__$1);
var G__28397 = null;
var G__28398 = (0);
var G__28399 = (0);
seq__28384 = G__28396;
chunk__28385 = G__28397;
count__28386 = G__28398;
i__28387 = G__28399;
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
code.core.draw_square = (function code$core$draw_square(p__28401,size,margin){
var vec__28402 = p__28401;
var x = cljs.core.nth.call(null,vec__28402,(0),null);
var y = cljs.core.nth.call(null,vec__28402,(1),null);

var smult = ((function (vec__28402,x,y){
return (function (p1__28400_SHARP_){
return (size / p1__28400_SHARP_);
});})(vec__28402,x,y))
;
var amp = (size / smult.call(null,(8)));
var sin_a = smult.call(null,code.util.rand_b_w.call(null,(size / (4)),size));
var outer_sq = (((size + margin) - size) / (2));
quil.core.stroke.call(null,quil.core.color.call(null,(180),(10),(1)));

quil.core.stroke_weight.call(null,code.util._PERCENT_of.call(null,0.25,quil.core.width.call(null)));

var tr__26877__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_sq,outer_sq], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto__);

quil.core.rect.call(null,x,y,size,size);

return code.core.draw_lines.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545),new cljs.core.Keyword(null,"x-l","x-l",-1139978965),new cljs.core.Keyword(null,"amp","amp",271690571),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"y-off","y-off",-1713117714),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x-r","x-r",-1651891086),new cljs.core.Keyword(null,"y-b","y-b",-478406788),new cljs.core.Keyword(null,"y-t","y-t",1394268126)],[cljs.core.range.call(null,x,(size + x)),x,amp,code.core.rnd_draw_line_method.call(null),code.util.rand_b_w.call(null,(y + (15)),((y + size) - (15))),size,(x + size),(y + size),y]));
}finally {quil.core.pop_matrix.call(null);
}});
code.core.draw_state = (function code$core$draw_state(state){
quil.core.background.call(null,(240));

var num_squares_28433 = (3);
var sq_outer_28434 = code.util._PERCENT_of.call(null,33.33,quil.core.width.call(null));
var sq_inner_28435 = code.util._PERCENT_of.call(null,(60),sq_outer_28434);
var offset_28436 = ((num_squares_28433 / (2)) * (sq_outer_28434 + sq_inner_28435));
var halfw_28437 = ((quil.core.width.call(null) / (2)) - offset_28436);
var halfh_28438 = ((quil.core.height.call(null) / (2)) - offset_28436);
var seq__28405_28439 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_28433));
var chunk__28406_28440 = null;
var count__28407_28441 = (0);
var i__28408_28442 = (0);
while(true){
if((i__28408_28442 < count__28407_28441)){
var l_28443 = cljs.core._nth.call(null,chunk__28406_28440,i__28408_28442);
var seq__28421_28444 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_28433));
var chunk__28423_28445 = null;
var count__28424_28446 = (0);
var i__28425_28447 = (0);
while(true){
if((i__28425_28447 < count__28424_28446)){
var yr_28448 = cljs.core._nth.call(null,chunk__28423_28445,i__28425_28447);
var xpos_28449 = (sq_outer_28434 * l_28443);
var ypos_28450 = (sq_outer_28434 * yr_28448);
quil.core.rect.call(null,xpos_28449,ypos_28450,sq_outer_28434,sq_outer_28434);

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_28449,ypos_28450], null),sq_inner_28435,(sq_outer_28434 - sq_inner_28435));


var G__28451 = seq__28421_28444;
var G__28452 = chunk__28423_28445;
var G__28453 = count__28424_28446;
var G__28454 = (i__28425_28447 + (1));
seq__28421_28444 = G__28451;
chunk__28423_28445 = G__28452;
count__28424_28446 = G__28453;
i__28425_28447 = G__28454;
continue;
} else {
var temp__5735__auto___28455 = cljs.core.seq.call(null,seq__28421_28444);
if(temp__5735__auto___28455){
var seq__28421_28456__$1 = temp__5735__auto___28455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28421_28456__$1)){
var c__4550__auto___28457 = cljs.core.chunk_first.call(null,seq__28421_28456__$1);
var G__28458 = cljs.core.chunk_rest.call(null,seq__28421_28456__$1);
var G__28459 = c__4550__auto___28457;
var G__28460 = cljs.core.count.call(null,c__4550__auto___28457);
var G__28461 = (0);
seq__28421_28444 = G__28458;
chunk__28423_28445 = G__28459;
count__28424_28446 = G__28460;
i__28425_28447 = G__28461;
continue;
} else {
var yr_28462 = cljs.core.first.call(null,seq__28421_28456__$1);
var xpos_28463 = (sq_outer_28434 * l_28443);
var ypos_28464 = (sq_outer_28434 * yr_28462);
quil.core.rect.call(null,xpos_28463,ypos_28464,sq_outer_28434,sq_outer_28434);

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_28463,ypos_28464], null),sq_inner_28435,(sq_outer_28434 - sq_inner_28435));


var G__28465 = cljs.core.next.call(null,seq__28421_28456__$1);
var G__28466 = null;
var G__28467 = (0);
var G__28468 = (0);
seq__28421_28444 = G__28465;
chunk__28423_28445 = G__28466;
count__28424_28446 = G__28467;
i__28425_28447 = G__28468;
continue;
}
} else {
}
}
break;
}


var G__28469 = seq__28405_28439;
var G__28470 = chunk__28406_28440;
var G__28471 = count__28407_28441;
var G__28472 = (i__28408_28442 + (1));
seq__28405_28439 = G__28469;
chunk__28406_28440 = G__28470;
count__28407_28441 = G__28471;
i__28408_28442 = G__28472;
continue;
} else {
var temp__5735__auto___28473 = cljs.core.seq.call(null,seq__28405_28439);
if(temp__5735__auto___28473){
var seq__28405_28474__$1 = temp__5735__auto___28473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28405_28474__$1)){
var c__4550__auto___28475 = cljs.core.chunk_first.call(null,seq__28405_28474__$1);
var G__28476 = cljs.core.chunk_rest.call(null,seq__28405_28474__$1);
var G__28477 = c__4550__auto___28475;
var G__28478 = cljs.core.count.call(null,c__4550__auto___28475);
var G__28479 = (0);
seq__28405_28439 = G__28476;
chunk__28406_28440 = G__28477;
count__28407_28441 = G__28478;
i__28408_28442 = G__28479;
continue;
} else {
var l_28480 = cljs.core.first.call(null,seq__28405_28474__$1);
var seq__28427_28481 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_28433));
var chunk__28429_28482 = null;
var count__28430_28483 = (0);
var i__28431_28484 = (0);
while(true){
if((i__28431_28484 < count__28430_28483)){
var yr_28485 = cljs.core._nth.call(null,chunk__28429_28482,i__28431_28484);
var xpos_28486 = (sq_outer_28434 * l_28480);
var ypos_28487 = (sq_outer_28434 * yr_28485);
quil.core.rect.call(null,xpos_28486,ypos_28487,sq_outer_28434,sq_outer_28434);

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_28486,ypos_28487], null),sq_inner_28435,(sq_outer_28434 - sq_inner_28435));


var G__28488 = seq__28427_28481;
var G__28489 = chunk__28429_28482;
var G__28490 = count__28430_28483;
var G__28491 = (i__28431_28484 + (1));
seq__28427_28481 = G__28488;
chunk__28429_28482 = G__28489;
count__28430_28483 = G__28490;
i__28431_28484 = G__28491;
continue;
} else {
var temp__5735__auto___28492__$1 = cljs.core.seq.call(null,seq__28427_28481);
if(temp__5735__auto___28492__$1){
var seq__28427_28493__$1 = temp__5735__auto___28492__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28427_28493__$1)){
var c__4550__auto___28494 = cljs.core.chunk_first.call(null,seq__28427_28493__$1);
var G__28495 = cljs.core.chunk_rest.call(null,seq__28427_28493__$1);
var G__28496 = c__4550__auto___28494;
var G__28497 = cljs.core.count.call(null,c__4550__auto___28494);
var G__28498 = (0);
seq__28427_28481 = G__28495;
chunk__28429_28482 = G__28496;
count__28430_28483 = G__28497;
i__28431_28484 = G__28498;
continue;
} else {
var yr_28499 = cljs.core.first.call(null,seq__28427_28493__$1);
var xpos_28500 = (sq_outer_28434 * l_28480);
var ypos_28501 = (sq_outer_28434 * yr_28499);
quil.core.rect.call(null,xpos_28500,ypos_28501,sq_outer_28434,sq_outer_28434);

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_28500,ypos_28501], null),sq_inner_28435,(sq_outer_28434 - sq_inner_28435));


var G__28502 = cljs.core.next.call(null,seq__28427_28493__$1);
var G__28503 = null;
var G__28504 = (0);
var G__28505 = (0);
seq__28427_28481 = G__28502;
chunk__28429_28482 = G__28503;
count__28430_28483 = G__28504;
i__28431_28484 = G__28505;
continue;
}
} else {
}
}
break;
}


var G__28506 = cljs.core.next.call(null,seq__28405_28474__$1);
var G__28507 = null;
var G__28508 = (0);
var G__28509 = (0);
seq__28405_28439 = G__28506;
chunk__28406_28440 = G__28507;
count__28407_28441 = G__28508;
i__28408_28442 = G__28509;
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
var G__28510__delegate = function (args){
return cljs.core.apply.call(null,code.core.update_state,args);
};
var G__28510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28511__i = 0, G__28511__a = new Array(arguments.length -  0);
while (G__28511__i < G__28511__a.length) {G__28511__a[G__28511__i] = arguments[G__28511__i + 0]; ++G__28511__i;}
  args = new cljs.core.IndexedSeq(G__28511__a,0,null);
} 
return G__28510__delegate.call(this,args);};
G__28510.cljs$lang$maxFixedArity = 0;
G__28510.cljs$lang$applyTo = (function (arglist__28512){
var args = cljs.core.seq(arglist__28512);
return G__28510__delegate(args);
});
G__28510.cljs$core$IFn$_invoke$arity$variadic = G__28510__delegate;
return G__28510;
})()
:code.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1500),(1500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.core.setup))?(function() { 
var G__28513__delegate = function (args){
return cljs.core.apply.call(null,code.core.setup,args);
};
var G__28513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28514__i = 0, G__28514__a = new Array(arguments.length -  0);
while (G__28514__i < G__28514__a.length) {G__28514__a[G__28514__i] = arguments[G__28514__i + 0]; ++G__28514__i;}
  args = new cljs.core.IndexedSeq(G__28514__a,0,null);
} 
return G__28513__delegate.call(this,args);};
G__28513.cljs$lang$maxFixedArity = 0;
G__28513.cljs$lang$applyTo = (function (arglist__28515){
var args = cljs.core.seq(arglist__28515);
return G__28513__delegate(args);
});
G__28513.cljs$core$IFn$_invoke$arity$variadic = G__28513__delegate;
return G__28513;
})()
:code.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.core.draw_state))?(function() { 
var G__28516__delegate = function (args){
return cljs.core.apply.call(null,code.core.draw_state,args);
};
var G__28516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28517__i = 0, G__28517__a = new Array(arguments.length -  0);
while (G__28517__i < G__28517__a.length) {G__28517__a[G__28517__i] = arguments[G__28517__i + 0]; ++G__28517__i;}
  args = new cljs.core.IndexedSeq(G__28517__a,0,null);
} 
return G__28516__delegate.call(this,args);};
G__28516.cljs$lang$maxFixedArity = 0;
G__28516.cljs$lang$applyTo = (function (arglist__28518){
var args = cljs.core.seq(arglist__28518);
return G__28516__delegate(args);
});
G__28516.cljs$core$IFn$_invoke$arity$variadic = G__28516__delegate;
return G__28516;
})()
:code.core.draw_state));
});
goog.exportSymbol('code.core.code', code.core.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26471__26472__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26471__26472__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.core.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.core.run_sketch', code.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1582833647170
