// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41116){
var map__41117 = p__41116;
var map__41117__$1 = (((((!((map__41117 == null))))?(((((map__41117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41117):map__41117);
var m = map__41117__$1;
var n = cljs.core.get.call(null,map__41117__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41117__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41119_41151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41120_41152 = null;
var count__41121_41153 = (0);
var i__41122_41154 = (0);
while(true){
if((i__41122_41154 < count__41121_41153)){
var f_41155 = cljs.core._nth.call(null,chunk__41120_41152,i__41122_41154);
cljs.core.println.call(null,"  ",f_41155);


var G__41156 = seq__41119_41151;
var G__41157 = chunk__41120_41152;
var G__41158 = count__41121_41153;
var G__41159 = (i__41122_41154 + (1));
seq__41119_41151 = G__41156;
chunk__41120_41152 = G__41157;
count__41121_41153 = G__41158;
i__41122_41154 = G__41159;
continue;
} else {
var temp__5735__auto___41160 = cljs.core.seq.call(null,seq__41119_41151);
if(temp__5735__auto___41160){
var seq__41119_41161__$1 = temp__5735__auto___41160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41119_41161__$1)){
var c__4550__auto___41162 = cljs.core.chunk_first.call(null,seq__41119_41161__$1);
var G__41163 = cljs.core.chunk_rest.call(null,seq__41119_41161__$1);
var G__41164 = c__4550__auto___41162;
var G__41165 = cljs.core.count.call(null,c__4550__auto___41162);
var G__41166 = (0);
seq__41119_41151 = G__41163;
chunk__41120_41152 = G__41164;
count__41121_41153 = G__41165;
i__41122_41154 = G__41166;
continue;
} else {
var f_41167 = cljs.core.first.call(null,seq__41119_41161__$1);
cljs.core.println.call(null,"  ",f_41167);


var G__41168 = cljs.core.next.call(null,seq__41119_41161__$1);
var G__41169 = null;
var G__41170 = (0);
var G__41171 = (0);
seq__41119_41151 = G__41168;
chunk__41120_41152 = G__41169;
count__41121_41153 = G__41170;
i__41122_41154 = G__41171;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41172 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41172);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41172)))?cljs.core.second.call(null,arglists_41172):arglists_41172));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41123_41173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41124_41174 = null;
var count__41125_41175 = (0);
var i__41126_41176 = (0);
while(true){
if((i__41126_41176 < count__41125_41175)){
var vec__41137_41177 = cljs.core._nth.call(null,chunk__41124_41174,i__41126_41176);
var name_41178 = cljs.core.nth.call(null,vec__41137_41177,(0),null);
var map__41140_41179 = cljs.core.nth.call(null,vec__41137_41177,(1),null);
var map__41140_41180__$1 = (((((!((map__41140_41179 == null))))?(((((map__41140_41179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41140_41179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41140_41179):map__41140_41179);
var doc_41181 = cljs.core.get.call(null,map__41140_41180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41182 = cljs.core.get.call(null,map__41140_41180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41178);

cljs.core.println.call(null," ",arglists_41182);

if(cljs.core.truth_(doc_41181)){
cljs.core.println.call(null," ",doc_41181);
} else {
}


var G__41183 = seq__41123_41173;
var G__41184 = chunk__41124_41174;
var G__41185 = count__41125_41175;
var G__41186 = (i__41126_41176 + (1));
seq__41123_41173 = G__41183;
chunk__41124_41174 = G__41184;
count__41125_41175 = G__41185;
i__41126_41176 = G__41186;
continue;
} else {
var temp__5735__auto___41187 = cljs.core.seq.call(null,seq__41123_41173);
if(temp__5735__auto___41187){
var seq__41123_41188__$1 = temp__5735__auto___41187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41123_41188__$1)){
var c__4550__auto___41189 = cljs.core.chunk_first.call(null,seq__41123_41188__$1);
var G__41190 = cljs.core.chunk_rest.call(null,seq__41123_41188__$1);
var G__41191 = c__4550__auto___41189;
var G__41192 = cljs.core.count.call(null,c__4550__auto___41189);
var G__41193 = (0);
seq__41123_41173 = G__41190;
chunk__41124_41174 = G__41191;
count__41125_41175 = G__41192;
i__41126_41176 = G__41193;
continue;
} else {
var vec__41142_41194 = cljs.core.first.call(null,seq__41123_41188__$1);
var name_41195 = cljs.core.nth.call(null,vec__41142_41194,(0),null);
var map__41145_41196 = cljs.core.nth.call(null,vec__41142_41194,(1),null);
var map__41145_41197__$1 = (((((!((map__41145_41196 == null))))?(((((map__41145_41196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41145_41196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41145_41196):map__41145_41196);
var doc_41198 = cljs.core.get.call(null,map__41145_41197__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41199 = cljs.core.get.call(null,map__41145_41197__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41195);

cljs.core.println.call(null," ",arglists_41199);

if(cljs.core.truth_(doc_41198)){
cljs.core.println.call(null," ",doc_41198);
} else {
}


var G__41200 = cljs.core.next.call(null,seq__41123_41188__$1);
var G__41201 = null;
var G__41202 = (0);
var G__41203 = (0);
seq__41123_41173 = G__41200;
chunk__41124_41174 = G__41201;
count__41125_41175 = G__41202;
i__41126_41176 = G__41203;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__41147 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41148 = null;
var count__41149 = (0);
var i__41150 = (0);
while(true){
if((i__41150 < count__41149)){
var role = cljs.core._nth.call(null,chunk__41148,i__41150);
var temp__5735__auto___41204__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41204__$1)){
var spec_41205 = temp__5735__auto___41204__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41205));
} else {
}


var G__41206 = seq__41147;
var G__41207 = chunk__41148;
var G__41208 = count__41149;
var G__41209 = (i__41150 + (1));
seq__41147 = G__41206;
chunk__41148 = G__41207;
count__41149 = G__41208;
i__41150 = G__41209;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__41147);
if(temp__5735__auto____$1){
var seq__41147__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41147__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41147__$1);
var G__41210 = cljs.core.chunk_rest.call(null,seq__41147__$1);
var G__41211 = c__4550__auto__;
var G__41212 = cljs.core.count.call(null,c__4550__auto__);
var G__41213 = (0);
seq__41147 = G__41210;
chunk__41148 = G__41211;
count__41149 = G__41212;
i__41150 = G__41213;
continue;
} else {
var role = cljs.core.first.call(null,seq__41147__$1);
var temp__5735__auto___41214__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41214__$2)){
var spec_41215 = temp__5735__auto___41214__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41215));
} else {
}


var G__41216 = cljs.core.next.call(null,seq__41147__$1);
var G__41217 = null;
var G__41218 = (0);
var G__41219 = (0);
seq__41147 = G__41216;
chunk__41148 = G__41217;
count__41149 = G__41218;
i__41150 = G__41219;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41220 = cljs.core.conj.call(null,via,t);
var G__41221 = cljs.core.ex_cause.call(null,t);
via = G__41220;
t = G__41221;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41224 = datafied_throwable;
var map__41224__$1 = (((((!((map__41224 == null))))?(((((map__41224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41224):map__41224);
var via = cljs.core.get.call(null,map__41224__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__41224__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__41224__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41225 = cljs.core.last.call(null,via);
var map__41225__$1 = (((((!((map__41225 == null))))?(((((map__41225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41225):map__41225);
var type = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__41225__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41226 = data;
var map__41226__$1 = (((((!((map__41226 == null))))?(((((map__41226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41226):map__41226);
var problems = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41227 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__41227__$1 = (((((!((map__41227 == null))))?(((((map__41227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41227):map__41227);
var top_data = map__41227__$1;
var source = cljs.core.get.call(null,map__41227__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__41232 = phase;
var G__41232__$1 = (((G__41232 instanceof cljs.core.Keyword))?G__41232.fqn:null);
switch (G__41232__$1) {
case "read-source":
var map__41233 = data;
var map__41233__$1 = (((((!((map__41233 == null))))?(((((map__41233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41233):map__41233);
var line = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__41233__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41235 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__41235__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__41235,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41235);
var G__41235__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__41235__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41235__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__41235__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41235__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41236 = top_data;
var G__41236__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__41236,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41236);
var G__41236__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__41236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41236__$1);
var G__41236__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__41236__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41236__$2);
var G__41236__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__41236__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41236__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__41236__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41236__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41237 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__41237,(0),null);
var method = cljs.core.nth.call(null,vec__41237,(1),null);
var file = cljs.core.nth.call(null,vec__41237,(2),null);
var line = cljs.core.nth.call(null,vec__41237,(3),null);
var G__41240 = top_data;
var G__41240__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__41240,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41240);
var G__41240__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__41240__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41240__$1);
var G__41240__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__41240__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41240__$2);
var G__41240__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__41240__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41240__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__41240__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41240__$4;
}

break;
case "execution":
var vec__41241 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__41241,(0),null);
var method = cljs.core.nth.call(null,vec__41241,(1),null);
var file = cljs.core.nth.call(null,vec__41241,(2),null);
var line = cljs.core.nth.call(null,vec__41241,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__41241,source__$1,method,file,line,G__41232,G__41232__$1,map__41224,map__41224__$1,via,trace,phase,map__41225,map__41225__$1,type,message,data,map__41226,map__41226__$1,problems,fn,caller,map__41227,map__41227__$1,top_data,source){
return (function (p1__41223_SHARP_){
var or__4131__auto__ = (p1__41223_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__41223_SHARP_);
}
});})(vec__41241,source__$1,method,file,line,G__41232,G__41232__$1,map__41224,map__41224__$1,via,trace,phase,map__41225,map__41225__$1,type,message,data,map__41226,map__41226__$1,problems,fn,caller,map__41227,map__41227__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__41244 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41244__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__41244,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41244);
var G__41244__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__41244__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41244__$1);
var G__41244__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__41244__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41244__$2);
var G__41244__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__41244__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41244__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__41244__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41244__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41232__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41248){
var map__41249 = p__41248;
var map__41249__$1 = (((((!((map__41249 == null))))?(((((map__41249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41249):map__41249);
var triage_data = map__41249__$1;
var phase = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__41249__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41251 = phase;
var G__41251__$1 = (((G__41251 instanceof cljs.core.Keyword))?G__41251.fqn:null);
switch (G__41251__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41252_41261 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41253_41262 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41254_41263 = true;
var _STAR_print_fn_STAR__temp_val__41255_41264 = ((function (_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41254_41263;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41255_41264;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,_STAR_print_fn_STAR__temp_val__41255_41264,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,_STAR_print_fn_STAR__temp_val__41255_41264,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__41246_SHARP_){
return cljs.core.dissoc.call(null,p1__41246_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,_STAR_print_fn_STAR__temp_val__41255_41264,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__41252_41261,_STAR_print_fn_STAR__orig_val__41253_41262,_STAR_print_newline_STAR__temp_val__41254_41263,_STAR_print_fn_STAR__temp_val__41255_41264,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41253_41262;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41252_41261;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41256_41265 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41257_41266 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41258_41267 = true;
var _STAR_print_fn_STAR__temp_val__41259_41268 = ((function (_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41258_41267;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41259_41268;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,_STAR_print_fn_STAR__temp_val__41259_41268,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,_STAR_print_fn_STAR__temp_val__41259_41268,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__41247_SHARP_){
return cljs.core.dissoc.call(null,p1__41247_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,_STAR_print_fn_STAR__temp_val__41259_41268,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__41256_41265,_STAR_print_fn_STAR__orig_val__41257_41266,_STAR_print_newline_STAR__temp_val__41258_41267,_STAR_print_fn_STAR__temp_val__41259_41268,sb__4661__auto__,G__41251,G__41251__$1,loc,class_name,simple_class,cause_type,format,map__41249,map__41249__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41257_41266;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41256_41265;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41251__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1581732100009
