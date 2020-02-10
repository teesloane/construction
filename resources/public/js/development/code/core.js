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
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"sine","sine",-619916490),(function (p__47994){
var map__47995 = p__47994;
var map__47995__$1 = (((((!((map__47995 == null))))?(((((map__47995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47995):map__47995);
var lset = map__47995__$1;
var y_b = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_t = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var sq__GT_span = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_m = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var amp = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var x_l = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"x-l","x-l",-1139978965));
var y_off = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"y-off","y-off",-1713117714));
var size = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var x_r = cljs.core.get.call(null,map__47995__$1,new cljs.core.Keyword(null,"x-r","x-r",-1651891086));
cljs.core.prn.call(null,"input is",y_m);

var seq__47997 = cljs.core.seq.call(null,sq__GT_span);
var chunk__47999 = null;
var count__48000 = (0);
var i__48001 = (0);
while(true){
if((i__48001 < count__48000)){
var line = cljs.core._nth.call(null,chunk__47999,i__48001);
var sine_input_48003 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var y_offset_48004 = (y_t + cljs.core.rand.call(null,size));
var __48005 = cljs.core.prn.call(null,"offset is",y_off);
var end_y_point_48006 = (y_off + (amp * quil.core.sin.call(null,(sine_input_48003 * (10)))));
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,end_y_point_48006);


var G__48007 = seq__47997;
var G__48008 = chunk__47999;
var G__48009 = count__48000;
var G__48010 = (i__48001 + (1));
seq__47997 = G__48007;
chunk__47999 = G__48008;
count__48000 = G__48009;
i__48001 = G__48010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47997);
if(temp__5735__auto__){
var seq__47997__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47997__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47997__$1);
var G__48011 = cljs.core.chunk_rest.call(null,seq__47997__$1);
var G__48012 = c__4550__auto__;
var G__48013 = cljs.core.count.call(null,c__4550__auto__);
var G__48014 = (0);
seq__47997 = G__48011;
chunk__47999 = G__48012;
count__48000 = G__48013;
i__48001 = G__48014;
continue;
} else {
var line = cljs.core.first.call(null,seq__47997__$1);
var sine_input_48015 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var y_offset_48016 = (y_t + cljs.core.rand.call(null,size));
var __48017 = cljs.core.prn.call(null,"offset is",y_off);
var end_y_point_48018 = (y_off + (amp * quil.core.sin.call(null,(sine_input_48015 * (10)))));
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,end_y_point_48018);


var G__48019 = cljs.core.next.call(null,seq__47997__$1);
var G__48020 = null;
var G__48021 = (0);
var G__48022 = (0);
seq__47997 = G__48019;
chunk__47999 = G__48020;
count__48000 = G__48021;
i__48001 = G__48022;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"full","full",436801220),(function (p__48023){
var map__48024 = p__48023;
var map__48024__$1 = (((((!((map__48024 == null))))?(((((map__48024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48024):map__48024);
var lset = map__48024__$1;
var sq__GT_span = cljs.core.get.call(null,map__48024__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_b = cljs.core.get.call(null,map__48024__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_m = cljs.core.get.call(null,map__48024__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var y_t = cljs.core.get.call(null,map__48024__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var seq__48026 = cljs.core.seq.call(null,sq__GT_span);
var chunk__48027 = null;
var count__48028 = (0);
var i__48029 = (0);
while(true){
if((i__48029 < count__48028)){
var line = cljs.core._nth.call(null,chunk__48027,i__48029);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__48030 = seq__48026;
var G__48031 = chunk__48027;
var G__48032 = count__48028;
var G__48033 = (i__48029 + (1));
seq__48026 = G__48030;
chunk__48027 = G__48031;
count__48028 = G__48032;
i__48029 = G__48033;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48026);
if(temp__5735__auto__){
var seq__48026__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48026__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48026__$1);
var G__48034 = cljs.core.chunk_rest.call(null,seq__48026__$1);
var G__48035 = c__4550__auto__;
var G__48036 = cljs.core.count.call(null,c__4550__auto__);
var G__48037 = (0);
seq__48026 = G__48034;
chunk__48027 = G__48035;
count__48028 = G__48036;
i__48029 = G__48037;
continue;
} else {
var line = cljs.core.first.call(null,seq__48026__$1);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__48038 = cljs.core.next.call(null,seq__48026__$1);
var G__48039 = null;
var G__48040 = (0);
var G__48041 = (0);
seq__48026 = G__48038;
chunk__48027 = G__48039;
count__48028 = G__48040;
i__48029 = G__48041;
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
return cljs.core.rand_nth.call(null,cljs.core.keys.call(null,cljs.core.methods$.call(null,code.core.draw_lines)));
});
code.core.draw_square = (function code$core$draw_square(p__48043,size,margin){
var vec__48044 = p__48043;
var x = cljs.core.nth.call(null,vec__48044,(0),null);
var y = cljs.core.nth.call(null,vec__48044,(1),null);

var smult = ((function (vec__48044,x,y){
return (function (p1__48042_SHARP_){
return (size / p1__48042_SHARP_);
});})(vec__48044,x,y))
;
var amp = (size / smult.call(null,(8)));
var sin_a = smult.call(null,code.util.rand_b_w.call(null,(size / (4)),size));
var outer_sq = (((size + margin) - size) / (2));
var offset = smult.call(null,2.2);
var tr__26896__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_sq,outer_sq], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto__);

quil.core.rect.call(null,x,y,size,size);

return code.core.draw_lines.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545),new cljs.core.Keyword(null,"x-l","x-l",-1139978965),new cljs.core.Keyword(null,"amp","amp",271690571),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"y-off","y-off",-1713117714),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x-r","x-r",-1651891086),new cljs.core.Keyword(null,"y-b","y-b",-478406788),new cljs.core.Keyword(null,"y-t","y-t",1394268126)],[cljs.core.range.call(null,x,(size + x)),x,amp,code.core.rnd_draw_line_method.call(null),code.util.rand_b_w.call(null,(y + (10)),((y + size) - (10))),size,(x + size),(y + size),y]));
}finally {quil.core.pop_matrix.call(null);
}});
code.core.draw_state = (function code$core$draw_state(state){
quil.core.background.call(null,(240));

var sq_div_48075 = (12);
var margin_48076 = (30);
var num_squares_48077 = (6);
var size_48078 = (quil.core.width.call(null) / sq_div_48075);
var offset_48079 = ((num_squares_48077 / (2)) * (margin_48076 + size_48078));
var halfw_48080 = ((quil.core.width.call(null) / (2)) - offset_48079);
var halfh_48081 = ((quil.core.height.call(null) / (2)) - offset_48079);
var seq__48047_48082 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_48077));
var chunk__48048_48083 = null;
var count__48049_48084 = (0);
var i__48050_48085 = (0);
while(true){
if((i__48050_48085 < count__48049_48084)){
var l_48086 = cljs.core._nth.call(null,chunk__48048_48083,i__48050_48085);
var seq__48063_48087 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_48077));
var chunk__48065_48088 = null;
var count__48066_48089 = (0);
var i__48067_48090 = (0);
while(true){
if((i__48067_48090 < count__48066_48089)){
var yr_48091 = cljs.core._nth.call(null,chunk__48065_48088,i__48067_48090);
var xpos_48092 = ((margin_48076 * l_48086) + (size_48078 * l_48086));
var ypos_48093 = ((margin_48076 * yr_48091) + (size_48078 * yr_48091));
var tr__26896__auto___48094 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_48080,halfh_48081], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___48094);

quil.core.rect.call(null,xpos_48092,ypos_48093,(margin_48076 + size_48078),(margin_48076 + size_48078));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_48092,ypos_48093], null),size_48078,margin_48076);
}finally {quil.core.pop_matrix.call(null);
}

var G__48095 = seq__48063_48087;
var G__48096 = chunk__48065_48088;
var G__48097 = count__48066_48089;
var G__48098 = (i__48067_48090 + (1));
seq__48063_48087 = G__48095;
chunk__48065_48088 = G__48096;
count__48066_48089 = G__48097;
i__48067_48090 = G__48098;
continue;
} else {
var temp__5735__auto___48099 = cljs.core.seq.call(null,seq__48063_48087);
if(temp__5735__auto___48099){
var seq__48063_48100__$1 = temp__5735__auto___48099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48063_48100__$1)){
var c__4550__auto___48101 = cljs.core.chunk_first.call(null,seq__48063_48100__$1);
var G__48102 = cljs.core.chunk_rest.call(null,seq__48063_48100__$1);
var G__48103 = c__4550__auto___48101;
var G__48104 = cljs.core.count.call(null,c__4550__auto___48101);
var G__48105 = (0);
seq__48063_48087 = G__48102;
chunk__48065_48088 = G__48103;
count__48066_48089 = G__48104;
i__48067_48090 = G__48105;
continue;
} else {
var yr_48106 = cljs.core.first.call(null,seq__48063_48100__$1);
var xpos_48107 = ((margin_48076 * l_48086) + (size_48078 * l_48086));
var ypos_48108 = ((margin_48076 * yr_48106) + (size_48078 * yr_48106));
var tr__26896__auto___48109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_48080,halfh_48081], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___48109);

quil.core.rect.call(null,xpos_48107,ypos_48108,(margin_48076 + size_48078),(margin_48076 + size_48078));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_48107,ypos_48108], null),size_48078,margin_48076);
}finally {quil.core.pop_matrix.call(null);
}

var G__48110 = cljs.core.next.call(null,seq__48063_48100__$1);
var G__48111 = null;
var G__48112 = (0);
var G__48113 = (0);
seq__48063_48087 = G__48110;
chunk__48065_48088 = G__48111;
count__48066_48089 = G__48112;
i__48067_48090 = G__48113;
continue;
}
} else {
}
}
break;
}


var G__48114 = seq__48047_48082;
var G__48115 = chunk__48048_48083;
var G__48116 = count__48049_48084;
var G__48117 = (i__48050_48085 + (1));
seq__48047_48082 = G__48114;
chunk__48048_48083 = G__48115;
count__48049_48084 = G__48116;
i__48050_48085 = G__48117;
continue;
} else {
var temp__5735__auto___48118 = cljs.core.seq.call(null,seq__48047_48082);
if(temp__5735__auto___48118){
var seq__48047_48119__$1 = temp__5735__auto___48118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48047_48119__$1)){
var c__4550__auto___48120 = cljs.core.chunk_first.call(null,seq__48047_48119__$1);
var G__48121 = cljs.core.chunk_rest.call(null,seq__48047_48119__$1);
var G__48122 = c__4550__auto___48120;
var G__48123 = cljs.core.count.call(null,c__4550__auto___48120);
var G__48124 = (0);
seq__48047_48082 = G__48121;
chunk__48048_48083 = G__48122;
count__48049_48084 = G__48123;
i__48050_48085 = G__48124;
continue;
} else {
var l_48125 = cljs.core.first.call(null,seq__48047_48119__$1);
var seq__48069_48126 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_48077));
var chunk__48071_48127 = null;
var count__48072_48128 = (0);
var i__48073_48129 = (0);
while(true){
if((i__48073_48129 < count__48072_48128)){
var yr_48130 = cljs.core._nth.call(null,chunk__48071_48127,i__48073_48129);
var xpos_48131 = ((margin_48076 * l_48125) + (size_48078 * l_48125));
var ypos_48132 = ((margin_48076 * yr_48130) + (size_48078 * yr_48130));
var tr__26896__auto___48133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_48080,halfh_48081], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___48133);

quil.core.rect.call(null,xpos_48131,ypos_48132,(margin_48076 + size_48078),(margin_48076 + size_48078));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_48131,ypos_48132], null),size_48078,margin_48076);
}finally {quil.core.pop_matrix.call(null);
}

var G__48134 = seq__48069_48126;
var G__48135 = chunk__48071_48127;
var G__48136 = count__48072_48128;
var G__48137 = (i__48073_48129 + (1));
seq__48069_48126 = G__48134;
chunk__48071_48127 = G__48135;
count__48072_48128 = G__48136;
i__48073_48129 = G__48137;
continue;
} else {
var temp__5735__auto___48138__$1 = cljs.core.seq.call(null,seq__48069_48126);
if(temp__5735__auto___48138__$1){
var seq__48069_48139__$1 = temp__5735__auto___48138__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48069_48139__$1)){
var c__4550__auto___48140 = cljs.core.chunk_first.call(null,seq__48069_48139__$1);
var G__48141 = cljs.core.chunk_rest.call(null,seq__48069_48139__$1);
var G__48142 = c__4550__auto___48140;
var G__48143 = cljs.core.count.call(null,c__4550__auto___48140);
var G__48144 = (0);
seq__48069_48126 = G__48141;
chunk__48071_48127 = G__48142;
count__48072_48128 = G__48143;
i__48073_48129 = G__48144;
continue;
} else {
var yr_48145 = cljs.core.first.call(null,seq__48069_48139__$1);
var xpos_48146 = ((margin_48076 * l_48125) + (size_48078 * l_48125));
var ypos_48147 = ((margin_48076 * yr_48145) + (size_48078 * yr_48145));
var tr__26896__auto___48148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_48080,halfh_48081], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26896__auto___48148);

quil.core.rect.call(null,xpos_48146,ypos_48147,(margin_48076 + size_48078),(margin_48076 + size_48078));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_48146,ypos_48147], null),size_48078,margin_48076);
}finally {quil.core.pop_matrix.call(null);
}

var G__48149 = cljs.core.next.call(null,seq__48069_48139__$1);
var G__48150 = null;
var G__48151 = (0);
var G__48152 = (0);
seq__48069_48126 = G__48149;
chunk__48071_48127 = G__48150;
count__48072_48128 = G__48151;
i__48073_48129 = G__48152;
continue;
}
} else {
}
}
break;
}


var G__48153 = cljs.core.next.call(null,seq__48047_48119__$1);
var G__48154 = null;
var G__48155 = (0);
var G__48156 = (0);
seq__48047_48082 = G__48153;
chunk__48048_48083 = G__48154;
count__48049_48084 = G__48155;
i__48050_48085 = G__48156;
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
var G__48157__delegate = function (args){
return cljs.core.apply.call(null,code.core.update_state,args);
};
var G__48157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48158__i = 0, G__48158__a = new Array(arguments.length -  0);
while (G__48158__i < G__48158__a.length) {G__48158__a[G__48158__i] = arguments[G__48158__i + 0]; ++G__48158__i;}
  args = new cljs.core.IndexedSeq(G__48158__a,0,null);
} 
return G__48157__delegate.call(this,args);};
G__48157.cljs$lang$maxFixedArity = 0;
G__48157.cljs$lang$applyTo = (function (arglist__48159){
var args = cljs.core.seq(arglist__48159);
return G__48157__delegate(args);
});
G__48157.cljs$core$IFn$_invoke$arity$variadic = G__48157__delegate;
return G__48157;
})()
:code.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.core.setup))?(function() { 
var G__48160__delegate = function (args){
return cljs.core.apply.call(null,code.core.setup,args);
};
var G__48160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48161__i = 0, G__48161__a = new Array(arguments.length -  0);
while (G__48161__i < G__48161__a.length) {G__48161__a[G__48161__i] = arguments[G__48161__i + 0]; ++G__48161__i;}
  args = new cljs.core.IndexedSeq(G__48161__a,0,null);
} 
return G__48160__delegate.call(this,args);};
G__48160.cljs$lang$maxFixedArity = 0;
G__48160.cljs$lang$applyTo = (function (arglist__48162){
var args = cljs.core.seq(arglist__48162);
return G__48160__delegate(args);
});
G__48160.cljs$core$IFn$_invoke$arity$variadic = G__48160__delegate;
return G__48160;
})()
:code.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.core.draw_state))?(function() { 
var G__48163__delegate = function (args){
return cljs.core.apply.call(null,code.core.draw_state,args);
};
var G__48163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48164__i = 0, G__48164__a = new Array(arguments.length -  0);
while (G__48164__i < G__48164__a.length) {G__48164__a[G__48164__i] = arguments[G__48164__i + 0]; ++G__48164__i;}
  args = new cljs.core.IndexedSeq(G__48164__a,0,null);
} 
return G__48163__delegate.call(this,args);};
G__48163.cljs$lang$maxFixedArity = 0;
G__48163.cljs$lang$applyTo = (function (arglist__48165){
var args = cljs.core.seq(arglist__48165);
return G__48163__delegate(args);
});
G__48163.cljs$core$IFn$_invoke$arity$variadic = G__48163__delegate;
return G__48163;
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

//# sourceMappingURL=core.js.map?rel=1581372817347
