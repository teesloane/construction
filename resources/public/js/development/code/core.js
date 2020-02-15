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
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"sine","sine",-619916490),(function (p__35726){
var map__35727 = p__35726;
var map__35727__$1 = (((((!((map__35727 == null))))?(((((map__35727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35727):map__35727);
var lset = map__35727__$1;
var y_b = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_t = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var sq__GT_span = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_m = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var amp = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var x_l = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"x-l","x-l",-1139978965));
var y_off = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"y-off","y-off",-1713117714));
var size = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var x_r = cljs.core.get.call(null,map__35727__$1,new cljs.core.Keyword(null,"x-r","x-r",-1651891086));
cljs.core.prn.call(null,"input is",y_m);

var your_sine_ness_QMARK_ = code.util.rand_b_w.call(null,0.2,(12));
var sin_or_cos_QMARK_ = ((((5) > your_sine_ness_QMARK_))?quil.core.sin:quil.core.cos);
var t__GT_b_or_b__GT_t_QMARK_ = ((((5) < your_sine_ness_QMARK_))?true:false);
var seq__35729 = cljs.core.seq.call(null,sq__GT_span);
var chunk__35731 = null;
var count__35732 = (0);
var i__35733 = (0);
while(true){
if((i__35733 < count__35732)){
var line = cljs.core._nth.call(null,chunk__35731,i__35733);
var sine_input_35735 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_35736 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_35735 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_35736);
} else {
quil.core.line.call(null,line,end_y_point_35736,line,y_t);
}


var G__35737 = seq__35729;
var G__35738 = chunk__35731;
var G__35739 = count__35732;
var G__35740 = (i__35733 + (1));
seq__35729 = G__35737;
chunk__35731 = G__35738;
count__35732 = G__35739;
i__35733 = G__35740;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35729);
if(temp__5735__auto__){
var seq__35729__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35729__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35729__$1);
var G__35741 = cljs.core.chunk_rest.call(null,seq__35729__$1);
var G__35742 = c__4550__auto__;
var G__35743 = cljs.core.count.call(null,c__4550__auto__);
var G__35744 = (0);
seq__35729 = G__35741;
chunk__35731 = G__35742;
count__35732 = G__35743;
i__35733 = G__35744;
continue;
} else {
var line = cljs.core.first.call(null,seq__35729__$1);
var sine_input_35745 = code.util.map_n__GT_0_1.call(null,line,x_l,x_r);
var end_y_point_35746 = (y_off + (amp * sin_or_cos_QMARK_.call(null,(sine_input_35745 * your_sine_ness_QMARK_))));
quil.core.stroke_weight.call(null,(2));

if(t__GT_b_or_b__GT_t_QMARK_){
quil.core.line.call(null,line,y_b,line,end_y_point_35746);
} else {
quil.core.line.call(null,line,end_y_point_35746,line,y_t);
}


var G__35747 = cljs.core.next.call(null,seq__35729__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35729 = G__35747;
chunk__35731 = G__35748;
count__35732 = G__35749;
i__35733 = G__35750;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,code.core.draw_lines,new cljs.core.Keyword(null,"full","full",436801220),(function (p__35751){
var map__35752 = p__35751;
var map__35752__$1 = (((((!((map__35752 == null))))?(((((map__35752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35752):map__35752);
var lset = map__35752__$1;
var sq__GT_span = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545));
var y_b = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"y-b","y-b",-478406788));
var y_m = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"y-m","y-m",-1004991097));
var y_t = cljs.core.get.call(null,map__35752__$1,new cljs.core.Keyword(null,"y-t","y-t",1394268126));
var seq__35754 = cljs.core.seq.call(null,sq__GT_span);
var chunk__35755 = null;
var count__35756 = (0);
var i__35757 = (0);
while(true){
if((i__35757 < count__35756)){
var line = cljs.core._nth.call(null,chunk__35755,i__35757);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__35758 = seq__35754;
var G__35759 = chunk__35755;
var G__35760 = count__35756;
var G__35761 = (i__35757 + (1));
seq__35754 = G__35758;
chunk__35755 = G__35759;
count__35756 = G__35760;
i__35757 = G__35761;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35754);
if(temp__5735__auto__){
var seq__35754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35754__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35754__$1);
var G__35762 = cljs.core.chunk_rest.call(null,seq__35754__$1);
var G__35763 = c__4550__auto__;
var G__35764 = cljs.core.count.call(null,c__4550__auto__);
var G__35765 = (0);
seq__35754 = G__35762;
chunk__35755 = G__35763;
count__35756 = G__35764;
i__35757 = G__35765;
continue;
} else {
var line = cljs.core.first.call(null,seq__35754__$1);
quil.core.stroke_weight.call(null,(2));

quil.core.line.call(null,line,y_b,line,y_t);


var G__35766 = cljs.core.next.call(null,seq__35754__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__35754 = G__35766;
chunk__35755 = G__35767;
count__35756 = G__35768;
i__35757 = G__35769;
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
code.core.draw_square = (function code$core$draw_square(p__35771,size,margin){
var vec__35772 = p__35771;
var x = cljs.core.nth.call(null,vec__35772,(0),null);
var y = cljs.core.nth.call(null,vec__35772,(1),null);

var smult = ((function (vec__35772,x,y){
return (function (p1__35770_SHARP_){
return (size / p1__35770_SHARP_);
});})(vec__35772,x,y))
;
var amp = (size / smult.call(null,(8)));
var sin_a = smult.call(null,code.util.rand_b_w.call(null,(size / (4)),size));
var outer_sq = (((size + margin) - size) / (2));
quil.core.stroke.call(null,quil.core.color.call(null,(180),(10),(1)));

quil.core.stroke_weight.call(null,code.util._PERCENT_of.call(null,0.125,quil.core.width.call(null)));

var tr__26776__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [outer_sq,outer_sq], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26776__auto__);

quil.core.rect.call(null,x,y,size,size);

return code.core.draw_lines.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sq->span","sq->span",-1710099545),new cljs.core.Keyword(null,"x-l","x-l",-1139978965),new cljs.core.Keyword(null,"amp","amp",271690571),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"y-off","y-off",-1713117714),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"x-r","x-r",-1651891086),new cljs.core.Keyword(null,"y-b","y-b",-478406788),new cljs.core.Keyword(null,"y-t","y-t",1394268126)],[cljs.core.range.call(null,x,(size + x)),x,amp,code.core.rnd_draw_line_method.call(null),code.util.rand_b_w.call(null,(y + (15)),((y + size) - (15))),size,(x + size),(y + size),y]));
}finally {quil.core.pop_matrix.call(null);
}});
code.core.draw_state = (function code$core$draw_state(state){
quil.core.no_loop.call(null);

quil.core.background.call(null,(240));

var sq_div_35803 = (12);
var margin_35804 = code.util._PERCENT_of.call(null,(4),quil.core.width.call(null));
var num_squares_35805 = (6);
var size_35806 = (quil.core.width.call(null) / sq_div_35803);
var offset_35807 = ((num_squares_35805 / (2)) * (margin_35804 + size_35806));
var halfw_35808 = ((quil.core.width.call(null) / (2)) - offset_35807);
var halfh_35809 = ((quil.core.height.call(null) / (2)) - offset_35807);
var seq__35775_35810 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_35805));
var chunk__35776_35811 = null;
var count__35777_35812 = (0);
var i__35778_35813 = (0);
while(true){
if((i__35778_35813 < count__35777_35812)){
var l_35814 = cljs.core._nth.call(null,chunk__35776_35811,i__35778_35813);
var seq__35791_35815 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_35805));
var chunk__35793_35816 = null;
var count__35794_35817 = (0);
var i__35795_35818 = (0);
while(true){
if((i__35795_35818 < count__35794_35817)){
var yr_35819 = cljs.core._nth.call(null,chunk__35793_35816,i__35795_35818);
var xpos_35820 = ((margin_35804 * l_35814) + (size_35806 * l_35814));
var ypos_35821 = ((margin_35804 * yr_35819) + (size_35806 * yr_35819));
var tr__26776__auto___35822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_35808,halfh_35809], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26776__auto___35822);

quil.core.rect.call(null,xpos_35820,ypos_35821,(margin_35804 + size_35806),(margin_35804 + size_35806));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_35820,ypos_35821], null),size_35806,margin_35804);
}finally {quil.core.pop_matrix.call(null);
}

var G__35823 = seq__35791_35815;
var G__35824 = chunk__35793_35816;
var G__35825 = count__35794_35817;
var G__35826 = (i__35795_35818 + (1));
seq__35791_35815 = G__35823;
chunk__35793_35816 = G__35824;
count__35794_35817 = G__35825;
i__35795_35818 = G__35826;
continue;
} else {
var temp__5735__auto___35827 = cljs.core.seq.call(null,seq__35791_35815);
if(temp__5735__auto___35827){
var seq__35791_35828__$1 = temp__5735__auto___35827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35791_35828__$1)){
var c__4550__auto___35829 = cljs.core.chunk_first.call(null,seq__35791_35828__$1);
var G__35830 = cljs.core.chunk_rest.call(null,seq__35791_35828__$1);
var G__35831 = c__4550__auto___35829;
var G__35832 = cljs.core.count.call(null,c__4550__auto___35829);
var G__35833 = (0);
seq__35791_35815 = G__35830;
chunk__35793_35816 = G__35831;
count__35794_35817 = G__35832;
i__35795_35818 = G__35833;
continue;
} else {
var yr_35834 = cljs.core.first.call(null,seq__35791_35828__$1);
var xpos_35835 = ((margin_35804 * l_35814) + (size_35806 * l_35814));
var ypos_35836 = ((margin_35804 * yr_35834) + (size_35806 * yr_35834));
var tr__26776__auto___35837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_35808,halfh_35809], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26776__auto___35837);

quil.core.rect.call(null,xpos_35835,ypos_35836,(margin_35804 + size_35806),(margin_35804 + size_35806));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_35835,ypos_35836], null),size_35806,margin_35804);
}finally {quil.core.pop_matrix.call(null);
}

var G__35838 = cljs.core.next.call(null,seq__35791_35828__$1);
var G__35839 = null;
var G__35840 = (0);
var G__35841 = (0);
seq__35791_35815 = G__35838;
chunk__35793_35816 = G__35839;
count__35794_35817 = G__35840;
i__35795_35818 = G__35841;
continue;
}
} else {
}
}
break;
}


var G__35842 = seq__35775_35810;
var G__35843 = chunk__35776_35811;
var G__35844 = count__35777_35812;
var G__35845 = (i__35778_35813 + (1));
seq__35775_35810 = G__35842;
chunk__35776_35811 = G__35843;
count__35777_35812 = G__35844;
i__35778_35813 = G__35845;
continue;
} else {
var temp__5735__auto___35846 = cljs.core.seq.call(null,seq__35775_35810);
if(temp__5735__auto___35846){
var seq__35775_35847__$1 = temp__5735__auto___35846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35775_35847__$1)){
var c__4550__auto___35848 = cljs.core.chunk_first.call(null,seq__35775_35847__$1);
var G__35849 = cljs.core.chunk_rest.call(null,seq__35775_35847__$1);
var G__35850 = c__4550__auto___35848;
var G__35851 = cljs.core.count.call(null,c__4550__auto___35848);
var G__35852 = (0);
seq__35775_35810 = G__35849;
chunk__35776_35811 = G__35850;
count__35777_35812 = G__35851;
i__35778_35813 = G__35852;
continue;
} else {
var l_35853 = cljs.core.first.call(null,seq__35775_35847__$1);
var seq__35797_35854 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),num_squares_35805));
var chunk__35799_35855 = null;
var count__35800_35856 = (0);
var i__35801_35857 = (0);
while(true){
if((i__35801_35857 < count__35800_35856)){
var yr_35858 = cljs.core._nth.call(null,chunk__35799_35855,i__35801_35857);
var xpos_35859 = ((margin_35804 * l_35853) + (size_35806 * l_35853));
var ypos_35860 = ((margin_35804 * yr_35858) + (size_35806 * yr_35858));
var tr__26776__auto___35861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_35808,halfh_35809], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26776__auto___35861);

quil.core.rect.call(null,xpos_35859,ypos_35860,(margin_35804 + size_35806),(margin_35804 + size_35806));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_35859,ypos_35860], null),size_35806,margin_35804);
}finally {quil.core.pop_matrix.call(null);
}

var G__35862 = seq__35797_35854;
var G__35863 = chunk__35799_35855;
var G__35864 = count__35800_35856;
var G__35865 = (i__35801_35857 + (1));
seq__35797_35854 = G__35862;
chunk__35799_35855 = G__35863;
count__35800_35856 = G__35864;
i__35801_35857 = G__35865;
continue;
} else {
var temp__5735__auto___35866__$1 = cljs.core.seq.call(null,seq__35797_35854);
if(temp__5735__auto___35866__$1){
var seq__35797_35867__$1 = temp__5735__auto___35866__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35797_35867__$1)){
var c__4550__auto___35868 = cljs.core.chunk_first.call(null,seq__35797_35867__$1);
var G__35869 = cljs.core.chunk_rest.call(null,seq__35797_35867__$1);
var G__35870 = c__4550__auto___35868;
var G__35871 = cljs.core.count.call(null,c__4550__auto___35868);
var G__35872 = (0);
seq__35797_35854 = G__35869;
chunk__35799_35855 = G__35870;
count__35800_35856 = G__35871;
i__35801_35857 = G__35872;
continue;
} else {
var yr_35873 = cljs.core.first.call(null,seq__35797_35867__$1);
var xpos_35874 = ((margin_35804 * l_35853) + (size_35806 * l_35853));
var ypos_35875 = ((margin_35804 * yr_35873) + (size_35806 * yr_35873));
var tr__26776__auto___35876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [halfw_35808,halfh_35809], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26776__auto___35876);

quil.core.rect.call(null,xpos_35874,ypos_35875,(margin_35804 + size_35806),(margin_35804 + size_35806));

code.core.draw_square.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xpos_35874,ypos_35875], null),size_35806,margin_35804);
}finally {quil.core.pop_matrix.call(null);
}

var G__35877 = cljs.core.next.call(null,seq__35797_35867__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35797_35854 = G__35877;
chunk__35799_35855 = G__35878;
count__35800_35856 = G__35879;
i__35801_35857 = G__35880;
continue;
}
} else {
}
}
break;
}


var G__35881 = cljs.core.next.call(null,seq__35775_35847__$1);
var G__35882 = null;
var G__35883 = (0);
var G__35884 = (0);
seq__35775_35810 = G__35881;
chunk__35776_35811 = G__35882;
count__35777_35812 = G__35883;
i__35778_35813 = G__35884;
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
var G__35885__delegate = function (args){
return cljs.core.apply.call(null,code.core.update_state,args);
};
var G__35885 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35886__i = 0, G__35886__a = new Array(arguments.length -  0);
while (G__35886__i < G__35886__a.length) {G__35886__a[G__35886__i] = arguments[G__35886__i + 0]; ++G__35886__i;}
  args = new cljs.core.IndexedSeq(G__35886__a,0,null);
} 
return G__35885__delegate.call(this,args);};
G__35885.cljs$lang$maxFixedArity = 0;
G__35885.cljs$lang$applyTo = (function (arglist__35887){
var args = cljs.core.seq(arglist__35887);
return G__35885__delegate(args);
});
G__35885.cljs$core$IFn$_invoke$arity$variadic = G__35885__delegate;
return G__35885;
})()
:code.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2800),(2800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,code.core.setup))?(function() { 
var G__35888__delegate = function (args){
return cljs.core.apply.call(null,code.core.setup,args);
};
var G__35888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35889__i = 0, G__35889__a = new Array(arguments.length -  0);
while (G__35889__i < G__35889__a.length) {G__35889__a[G__35889__i] = arguments[G__35889__i + 0]; ++G__35889__i;}
  args = new cljs.core.IndexedSeq(G__35889__a,0,null);
} 
return G__35888__delegate.call(this,args);};
G__35888.cljs$lang$maxFixedArity = 0;
G__35888.cljs$lang$applyTo = (function (arglist__35890){
var args = cljs.core.seq(arglist__35890);
return G__35888__delegate(args);
});
G__35888.cljs$core$IFn$_invoke$arity$variadic = G__35888__delegate;
return G__35888;
})()
:code.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,code.core.draw_state))?(function() { 
var G__35891__delegate = function (args){
return cljs.core.apply.call(null,code.core.draw_state,args);
};
var G__35891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35892__i = 0, G__35892__a = new Array(arguments.length -  0);
while (G__35892__i < G__35892__a.length) {G__35892__a[G__35892__i] = arguments[G__35892__i + 0]; ++G__35892__i;}
  args = new cljs.core.IndexedSeq(G__35892__a,0,null);
} 
return G__35891__delegate.call(this,args);};
G__35891.cljs$lang$maxFixedArity = 0;
G__35891.cljs$lang$applyTo = (function (arglist__35893){
var args = cljs.core.seq(arglist__35893);
return G__35891__delegate(args);
});
G__35891.cljs$core$IFn$_invoke$arity$variadic = G__35891__delegate;
return G__35891;
})()
:code.core.draw_state));
});
goog.exportSymbol('code.core.code', code.core.code);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26370__26371__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26370__26371__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),code.core.code,new cljs.core.Keyword(null,"host-id","host-id",742376279),"code"], null));
}
});
goog.exportSymbol('code.core.run_sketch', code.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1581732095357
