// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26227_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26227_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26228 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26229 = null;
var count__26230 = (0);
var i__26231 = (0);
while(true){
if((i__26231 < count__26230)){
var n = cljs.core._nth.call(null,chunk__26229,i__26231);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26232 = seq__26228;
var G__26233 = chunk__26229;
var G__26234 = count__26230;
var G__26235 = (i__26231 + (1));
seq__26228 = G__26232;
chunk__26229 = G__26233;
count__26230 = G__26234;
i__26231 = G__26235;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26228);
if(temp__5735__auto__){
var seq__26228__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26228__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26228__$1);
var G__26236 = cljs.core.chunk_rest.call(null,seq__26228__$1);
var G__26237 = c__4550__auto__;
var G__26238 = cljs.core.count.call(null,c__4550__auto__);
var G__26239 = (0);
seq__26228 = G__26236;
chunk__26229 = G__26237;
count__26230 = G__26238;
i__26231 = G__26239;
continue;
} else {
var n = cljs.core.first.call(null,seq__26228__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__26240 = cljs.core.next.call(null,seq__26228__$1);
var G__26241 = null;
var G__26242 = (0);
var G__26243 = (0);
seq__26228 = G__26240;
chunk__26229 = G__26241;
count__26230 = G__26242;
i__26231 = G__26243;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__26244){
var vec__26245 = p__26244;
var _ = cljs.core.nth.call(null,vec__26245,(0),null);
var v = cljs.core.nth.call(null,vec__26245,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__26248){
var vec__26249 = p__26248;
var k = cljs.core.nth.call(null,vec__26249,(0),null);
var v = cljs.core.nth.call(null,vec__26249,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26261_26269 = cljs.core.seq.call(null,deps);
var chunk__26262_26270 = null;
var count__26263_26271 = (0);
var i__26264_26272 = (0);
while(true){
if((i__26264_26272 < count__26263_26271)){
var dep_26273 = cljs.core._nth.call(null,chunk__26262_26270,i__26264_26272);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26273;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26273));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26273,(depth + (1)),state);
} else {
}


var G__26274 = seq__26261_26269;
var G__26275 = chunk__26262_26270;
var G__26276 = count__26263_26271;
var G__26277 = (i__26264_26272 + (1));
seq__26261_26269 = G__26274;
chunk__26262_26270 = G__26275;
count__26263_26271 = G__26276;
i__26264_26272 = G__26277;
continue;
} else {
var temp__5735__auto___26278 = cljs.core.seq.call(null,seq__26261_26269);
if(temp__5735__auto___26278){
var seq__26261_26279__$1 = temp__5735__auto___26278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26261_26279__$1)){
var c__4550__auto___26280 = cljs.core.chunk_first.call(null,seq__26261_26279__$1);
var G__26281 = cljs.core.chunk_rest.call(null,seq__26261_26279__$1);
var G__26282 = c__4550__auto___26280;
var G__26283 = cljs.core.count.call(null,c__4550__auto___26280);
var G__26284 = (0);
seq__26261_26269 = G__26281;
chunk__26262_26270 = G__26282;
count__26263_26271 = G__26283;
i__26264_26272 = G__26284;
continue;
} else {
var dep_26285 = cljs.core.first.call(null,seq__26261_26279__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_26285;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_26285));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_26285,(depth + (1)),state);
} else {
}


var G__26286 = cljs.core.next.call(null,seq__26261_26279__$1);
var G__26287 = null;
var G__26288 = (0);
var G__26289 = (0);
seq__26261_26269 = G__26286;
chunk__26262_26270 = G__26287;
count__26263_26271 = G__26288;
i__26264_26272 = G__26289;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26265){
var vec__26266 = p__26265;
var seq__26267 = cljs.core.seq.call(null,vec__26266);
var first__26268 = cljs.core.first.call(null,seq__26267);
var seq__26267__$1 = cljs.core.next.call(null,seq__26267);
var x = first__26268;
var xs = seq__26267__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26266,seq__26267,first__26268,seq__26267__$1,x,xs,get_deps__$1){
return (function (p1__26252_SHARP_){
return clojure.set.difference.call(null,p1__26252_SHARP_,x);
});})(vec__26266,seq__26267,first__26268,seq__26267__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26290 = cljs.core.seq.call(null,provides);
var chunk__26291 = null;
var count__26292 = (0);
var i__26293 = (0);
while(true){
if((i__26293 < count__26292)){
var prov = cljs.core._nth.call(null,chunk__26291,i__26293);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26302_26310 = cljs.core.seq.call(null,requires);
var chunk__26303_26311 = null;
var count__26304_26312 = (0);
var i__26305_26313 = (0);
while(true){
if((i__26305_26313 < count__26304_26312)){
var req_26314 = cljs.core._nth.call(null,chunk__26303_26311,i__26305_26313);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26314,prov);


var G__26315 = seq__26302_26310;
var G__26316 = chunk__26303_26311;
var G__26317 = count__26304_26312;
var G__26318 = (i__26305_26313 + (1));
seq__26302_26310 = G__26315;
chunk__26303_26311 = G__26316;
count__26304_26312 = G__26317;
i__26305_26313 = G__26318;
continue;
} else {
var temp__5735__auto___26319 = cljs.core.seq.call(null,seq__26302_26310);
if(temp__5735__auto___26319){
var seq__26302_26320__$1 = temp__5735__auto___26319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26302_26320__$1)){
var c__4550__auto___26321 = cljs.core.chunk_first.call(null,seq__26302_26320__$1);
var G__26322 = cljs.core.chunk_rest.call(null,seq__26302_26320__$1);
var G__26323 = c__4550__auto___26321;
var G__26324 = cljs.core.count.call(null,c__4550__auto___26321);
var G__26325 = (0);
seq__26302_26310 = G__26322;
chunk__26303_26311 = G__26323;
count__26304_26312 = G__26324;
i__26305_26313 = G__26325;
continue;
} else {
var req_26326 = cljs.core.first.call(null,seq__26302_26320__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26326,prov);


var G__26327 = cljs.core.next.call(null,seq__26302_26320__$1);
var G__26328 = null;
var G__26329 = (0);
var G__26330 = (0);
seq__26302_26310 = G__26327;
chunk__26303_26311 = G__26328;
count__26304_26312 = G__26329;
i__26305_26313 = G__26330;
continue;
}
} else {
}
}
break;
}


var G__26331 = seq__26290;
var G__26332 = chunk__26291;
var G__26333 = count__26292;
var G__26334 = (i__26293 + (1));
seq__26290 = G__26331;
chunk__26291 = G__26332;
count__26292 = G__26333;
i__26293 = G__26334;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26290);
if(temp__5735__auto__){
var seq__26290__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26290__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26290__$1);
var G__26335 = cljs.core.chunk_rest.call(null,seq__26290__$1);
var G__26336 = c__4550__auto__;
var G__26337 = cljs.core.count.call(null,c__4550__auto__);
var G__26338 = (0);
seq__26290 = G__26335;
chunk__26291 = G__26336;
count__26292 = G__26337;
i__26293 = G__26338;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26290__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26306_26339 = cljs.core.seq.call(null,requires);
var chunk__26307_26340 = null;
var count__26308_26341 = (0);
var i__26309_26342 = (0);
while(true){
if((i__26309_26342 < count__26308_26341)){
var req_26343 = cljs.core._nth.call(null,chunk__26307_26340,i__26309_26342);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26343,prov);


var G__26344 = seq__26306_26339;
var G__26345 = chunk__26307_26340;
var G__26346 = count__26308_26341;
var G__26347 = (i__26309_26342 + (1));
seq__26306_26339 = G__26344;
chunk__26307_26340 = G__26345;
count__26308_26341 = G__26346;
i__26309_26342 = G__26347;
continue;
} else {
var temp__5735__auto___26348__$1 = cljs.core.seq.call(null,seq__26306_26339);
if(temp__5735__auto___26348__$1){
var seq__26306_26349__$1 = temp__5735__auto___26348__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26306_26349__$1)){
var c__4550__auto___26350 = cljs.core.chunk_first.call(null,seq__26306_26349__$1);
var G__26351 = cljs.core.chunk_rest.call(null,seq__26306_26349__$1);
var G__26352 = c__4550__auto___26350;
var G__26353 = cljs.core.count.call(null,c__4550__auto___26350);
var G__26354 = (0);
seq__26306_26339 = G__26351;
chunk__26307_26340 = G__26352;
count__26308_26341 = G__26353;
i__26309_26342 = G__26354;
continue;
} else {
var req_26355 = cljs.core.first.call(null,seq__26306_26349__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26355,prov);


var G__26356 = cljs.core.next.call(null,seq__26306_26349__$1);
var G__26357 = null;
var G__26358 = (0);
var G__26359 = (0);
seq__26306_26339 = G__26356;
chunk__26307_26340 = G__26357;
count__26308_26341 = G__26358;
i__26309_26342 = G__26359;
continue;
}
} else {
}
}
break;
}


var G__26360 = cljs.core.next.call(null,seq__26290__$1);
var G__26361 = null;
var G__26362 = (0);
var G__26363 = (0);
seq__26290 = G__26360;
chunk__26291 = G__26361;
count__26292 = G__26362;
i__26293 = G__26363;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26364_26368 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26365_26369 = null;
var count__26366_26370 = (0);
var i__26367_26371 = (0);
while(true){
if((i__26367_26371 < count__26366_26370)){
var ns_26372 = cljs.core._nth.call(null,chunk__26365_26369,i__26367_26371);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26372);


var G__26373 = seq__26364_26368;
var G__26374 = chunk__26365_26369;
var G__26375 = count__26366_26370;
var G__26376 = (i__26367_26371 + (1));
seq__26364_26368 = G__26373;
chunk__26365_26369 = G__26374;
count__26366_26370 = G__26375;
i__26367_26371 = G__26376;
continue;
} else {
var temp__5735__auto___26377 = cljs.core.seq.call(null,seq__26364_26368);
if(temp__5735__auto___26377){
var seq__26364_26378__$1 = temp__5735__auto___26377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26364_26378__$1)){
var c__4550__auto___26379 = cljs.core.chunk_first.call(null,seq__26364_26378__$1);
var G__26380 = cljs.core.chunk_rest.call(null,seq__26364_26378__$1);
var G__26381 = c__4550__auto___26379;
var G__26382 = cljs.core.count.call(null,c__4550__auto___26379);
var G__26383 = (0);
seq__26364_26368 = G__26380;
chunk__26365_26369 = G__26381;
count__26366_26370 = G__26382;
i__26367_26371 = G__26383;
continue;
} else {
var ns_26384 = cljs.core.first.call(null,seq__26364_26378__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26384);


var G__26385 = cljs.core.next.call(null,seq__26364_26378__$1);
var G__26386 = null;
var G__26387 = (0);
var G__26388 = (0);
seq__26364_26368 = G__26385;
chunk__26365_26369 = G__26386;
count__26366_26370 = G__26387;
i__26367_26371 = G__26388;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26389__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26390__i = 0, G__26390__a = new Array(arguments.length -  0);
while (G__26390__i < G__26390__a.length) {G__26390__a[G__26390__i] = arguments[G__26390__i + 0]; ++G__26390__i;}
  args = new cljs.core.IndexedSeq(G__26390__a,0,null);
} 
return G__26389__delegate.call(this,args);};
G__26389.cljs$lang$maxFixedArity = 0;
G__26389.cljs$lang$applyTo = (function (arglist__26391){
var args = cljs.core.seq(arglist__26391);
return G__26389__delegate(args);
});
G__26389.cljs$core$IFn$_invoke$arity$variadic = G__26389__delegate;
return G__26389;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__26392_SHARP_,p2__26393_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26392_SHARP_)),p2__26393_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__26394_SHARP_,p2__26395_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26394_SHARP_),p2__26395_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__26396 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__26396.addCallback(((function (G__26396){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__26396))
);

G__26396.addErrback(((function (G__26396){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__26396))
);

return G__26396;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e26397){if((e26397 instanceof Error)){
var e = e26397;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26397;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26398){if((e26398 instanceof Error)){
var e = e26398;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26398;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26399 = cljs.core._EQ_;
var expr__26400 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26399.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26400))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__26399.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26400))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__26399.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__26400))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__26399,expr__26400){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26399,expr__26400))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26402,callback){
var map__26403 = p__26402;
var map__26403__$1 = (((((!((map__26403 == null))))?(((((map__26403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26403):map__26403);
var file_msg = map__26403__$1;
var request_url = cljs.core.get.call(null,map__26403__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__26403,map__26403__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26403,map__26403__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__){
return (function (state_26441){
var state_val_26442 = (state_26441[(1)]);
if((state_val_26442 === (7))){
var inst_26437 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26443_26469 = state_26441__$1;
(statearr_26443_26469[(2)] = inst_26437);

(statearr_26443_26469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (1))){
var state_26441__$1 = state_26441;
var statearr_26444_26470 = state_26441__$1;
(statearr_26444_26470[(2)] = null);

(statearr_26444_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (4))){
var inst_26407 = (state_26441[(7)]);
var inst_26407__$1 = (state_26441[(2)]);
var state_26441__$1 = (function (){var statearr_26445 = state_26441;
(statearr_26445[(7)] = inst_26407__$1);

return statearr_26445;
})();
if(cljs.core.truth_(inst_26407__$1)){
var statearr_26446_26471 = state_26441__$1;
(statearr_26446_26471[(1)] = (5));

} else {
var statearr_26447_26472 = state_26441__$1;
(statearr_26447_26472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (15))){
var inst_26420 = (state_26441[(8)]);
var inst_26422 = (state_26441[(9)]);
var inst_26424 = inst_26422.call(null,inst_26420);
var state_26441__$1 = state_26441;
var statearr_26448_26473 = state_26441__$1;
(statearr_26448_26473[(2)] = inst_26424);

(statearr_26448_26473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (13))){
var inst_26431 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26449_26474 = state_26441__$1;
(statearr_26449_26474[(2)] = inst_26431);

(statearr_26449_26474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (6))){
var state_26441__$1 = state_26441;
var statearr_26450_26475 = state_26441__$1;
(statearr_26450_26475[(2)] = null);

(statearr_26450_26475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (17))){
var inst_26428 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
var statearr_26451_26476 = state_26441__$1;
(statearr_26451_26476[(2)] = inst_26428);

(statearr_26451_26476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (3))){
var inst_26439 = (state_26441[(2)]);
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26441__$1,inst_26439);
} else {
if((state_val_26442 === (12))){
var state_26441__$1 = state_26441;
var statearr_26452_26477 = state_26441__$1;
(statearr_26452_26477[(2)] = null);

(statearr_26452_26477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (2))){
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26441__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26442 === (11))){
var inst_26412 = (state_26441[(10)]);
var inst_26418 = figwheel.client.file_reloading.blocking_load.call(null,inst_26412);
var state_26441__$1 = state_26441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26441__$1,(14),inst_26418);
} else {
if((state_val_26442 === (9))){
var inst_26412 = (state_26441[(10)]);
var state_26441__$1 = state_26441;
if(cljs.core.truth_(inst_26412)){
var statearr_26453_26478 = state_26441__$1;
(statearr_26453_26478[(1)] = (11));

} else {
var statearr_26454_26479 = state_26441__$1;
(statearr_26454_26479[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (5))){
var inst_26407 = (state_26441[(7)]);
var inst_26413 = (state_26441[(11)]);
var inst_26412 = cljs.core.nth.call(null,inst_26407,(0),null);
var inst_26413__$1 = cljs.core.nth.call(null,inst_26407,(1),null);
var state_26441__$1 = (function (){var statearr_26455 = state_26441;
(statearr_26455[(10)] = inst_26412);

(statearr_26455[(11)] = inst_26413__$1);

return statearr_26455;
})();
if(cljs.core.truth_(inst_26413__$1)){
var statearr_26456_26480 = state_26441__$1;
(statearr_26456_26480[(1)] = (8));

} else {
var statearr_26457_26481 = state_26441__$1;
(statearr_26457_26481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (14))){
var inst_26412 = (state_26441[(10)]);
var inst_26422 = (state_26441[(9)]);
var inst_26420 = (state_26441[(2)]);
var inst_26421 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26422__$1 = cljs.core.get.call(null,inst_26421,inst_26412);
var state_26441__$1 = (function (){var statearr_26458 = state_26441;
(statearr_26458[(8)] = inst_26420);

(statearr_26458[(9)] = inst_26422__$1);

return statearr_26458;
})();
if(cljs.core.truth_(inst_26422__$1)){
var statearr_26459_26482 = state_26441__$1;
(statearr_26459_26482[(1)] = (15));

} else {
var statearr_26460_26483 = state_26441__$1;
(statearr_26460_26483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (16))){
var inst_26420 = (state_26441[(8)]);
var inst_26426 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26420);
var state_26441__$1 = state_26441;
var statearr_26461_26484 = state_26441__$1;
(statearr_26461_26484[(2)] = inst_26426);

(statearr_26461_26484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (10))){
var inst_26433 = (state_26441[(2)]);
var state_26441__$1 = (function (){var statearr_26462 = state_26441;
(statearr_26462[(12)] = inst_26433);

return statearr_26462;
})();
var statearr_26463_26485 = state_26441__$1;
(statearr_26463_26485[(2)] = null);

(statearr_26463_26485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26442 === (8))){
var inst_26413 = (state_26441[(11)]);
var inst_26415 = eval(inst_26413);
var state_26441__$1 = state_26441;
var statearr_26464_26486 = state_26441__$1;
(statearr_26464_26486[(2)] = inst_26415);

(statearr_26464_26486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22786__auto__))
;
return ((function (switch__22691__auto__,c__22786__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22692__auto__ = null;
var figwheel$client$file_reloading$state_machine__22692__auto____0 = (function (){
var statearr_26465 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26465[(0)] = figwheel$client$file_reloading$state_machine__22692__auto__);

(statearr_26465[(1)] = (1));

return statearr_26465;
});
var figwheel$client$file_reloading$state_machine__22692__auto____1 = (function (state_26441){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_26441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e26466){if((e26466 instanceof Object)){
var ex__22695__auto__ = e26466;
var statearr_26467_26487 = state_26441;
(statearr_26467_26487[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26488 = state_26441;
state_26441 = G__26488;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22692__auto__ = function(state_26441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22692__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22692__auto____1.call(this,state_26441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22692__auto____0;
figwheel$client$file_reloading$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22692__auto____1;
return figwheel$client$file_reloading$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_26468 = f__22787__auto__.call(null);
(statearr_26468[(6)] = c__22786__auto__);

return statearr_26468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__26490 = arguments.length;
switch (G__26490) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26492,callback){
var map__26493 = p__26492;
var map__26493__$1 = (((((!((map__26493 == null))))?(((((map__26493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493):map__26493);
var file_msg = map__26493__$1;
var namespace = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26493,map__26493__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26493,map__26493__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__26495){
var map__26496 = p__26495;
var map__26496__$1 = (((((!((map__26496 == null))))?(((((map__26496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26496):map__26496);
var file_msg = map__26496__$1;
var namespace = cljs.core.get.call(null,map__26496__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26498){
var map__26499 = p__26498;
var map__26499__$1 = (((((!((map__26499 == null))))?(((((map__26499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26499):map__26499);
var file_msg = map__26499__$1;
var namespace = cljs.core.get.call(null,map__26499__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26501,callback){
var map__26502 = p__26501;
var map__26502__$1 = (((((!((map__26502 == null))))?(((((map__26502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26502):map__26502);
var file_msg = map__26502__$1;
var request_url = cljs.core.get.call(null,map__26502__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26502__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22786__auto___26552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___26552,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___26552,out){
return (function (state_26537){
var state_val_26538 = (state_26537[(1)]);
if((state_val_26538 === (1))){
var inst_26511 = cljs.core.seq.call(null,files);
var inst_26512 = cljs.core.first.call(null,inst_26511);
var inst_26513 = cljs.core.next.call(null,inst_26511);
var inst_26514 = files;
var state_26537__$1 = (function (){var statearr_26539 = state_26537;
(statearr_26539[(7)] = inst_26514);

(statearr_26539[(8)] = inst_26512);

(statearr_26539[(9)] = inst_26513);

return statearr_26539;
})();
var statearr_26540_26553 = state_26537__$1;
(statearr_26540_26553[(2)] = null);

(statearr_26540_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (2))){
var inst_26514 = (state_26537[(7)]);
var inst_26520 = (state_26537[(10)]);
var inst_26519 = cljs.core.seq.call(null,inst_26514);
var inst_26520__$1 = cljs.core.first.call(null,inst_26519);
var inst_26521 = cljs.core.next.call(null,inst_26519);
var inst_26522 = (inst_26520__$1 == null);
var inst_26523 = cljs.core.not.call(null,inst_26522);
var state_26537__$1 = (function (){var statearr_26541 = state_26537;
(statearr_26541[(11)] = inst_26521);

(statearr_26541[(10)] = inst_26520__$1);

return statearr_26541;
})();
if(inst_26523){
var statearr_26542_26554 = state_26537__$1;
(statearr_26542_26554[(1)] = (4));

} else {
var statearr_26543_26555 = state_26537__$1;
(statearr_26543_26555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (3))){
var inst_26535 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26537__$1,inst_26535);
} else {
if((state_val_26538 === (4))){
var inst_26520 = (state_26537[(10)]);
var inst_26525 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26520);
var state_26537__$1 = state_26537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26537__$1,(7),inst_26525);
} else {
if((state_val_26538 === (5))){
var inst_26531 = cljs.core.async.close_BANG_.call(null,out);
var state_26537__$1 = state_26537;
var statearr_26544_26556 = state_26537__$1;
(statearr_26544_26556[(2)] = inst_26531);

(statearr_26544_26556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (6))){
var inst_26533 = (state_26537[(2)]);
var state_26537__$1 = state_26537;
var statearr_26545_26557 = state_26537__$1;
(statearr_26545_26557[(2)] = inst_26533);

(statearr_26545_26557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26538 === (7))){
var inst_26521 = (state_26537[(11)]);
var inst_26527 = (state_26537[(2)]);
var inst_26528 = cljs.core.async.put_BANG_.call(null,out,inst_26527);
var inst_26514 = inst_26521;
var state_26537__$1 = (function (){var statearr_26546 = state_26537;
(statearr_26546[(7)] = inst_26514);

(statearr_26546[(12)] = inst_26528);

return statearr_26546;
})();
var statearr_26547_26558 = state_26537__$1;
(statearr_26547_26558[(2)] = null);

(statearr_26547_26558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22786__auto___26552,out))
;
return ((function (switch__22691__auto__,c__22786__auto___26552,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____0 = (function (){
var statearr_26548 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26548[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__);

(statearr_26548[(1)] = (1));

return statearr_26548;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____1 = (function (state_26537){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_26537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e26549){if((e26549 instanceof Object)){
var ex__22695__auto__ = e26549;
var statearr_26550_26559 = state_26537;
(statearr_26550_26559[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26560 = state_26537;
state_26537 = G__26560;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__ = function(state_26537){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____1.call(this,state_26537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___26552,out))
})();
var state__22788__auto__ = (function (){var statearr_26551 = f__22787__auto__.call(null);
(statearr_26551[(6)] = c__22786__auto___26552);

return statearr_26551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___26552,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26561,opts){
var map__26562 = p__26561;
var map__26562__$1 = (((((!((map__26562 == null))))?(((((map__26562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26562):map__26562);
var eval_body = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26564){var e = e26564;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26565_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26565_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26566){
var vec__26567 = p__26566;
var k = cljs.core.nth.call(null,vec__26567,(0),null);
var v = cljs.core.nth.call(null,vec__26567,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26570){
var vec__26571 = p__26570;
var k = cljs.core.nth.call(null,vec__26571,(0),null);
var v = cljs.core.nth.call(null,vec__26571,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26577,p__26578){
var map__26579 = p__26577;
var map__26579__$1 = (((((!((map__26579 == null))))?(((((map__26579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);
var opts = map__26579__$1;
var before_jsload = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26579__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26580 = p__26578;
var map__26580__$1 = (((((!((map__26580 == null))))?(((((map__26580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26580):map__26580);
var msg = map__26580__$1;
var files = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26580__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26734){
var state_val_26735 = (state_26734[(1)]);
if((state_val_26735 === (7))){
var inst_26596 = (state_26734[(7)]);
var inst_26595 = (state_26734[(8)]);
var inst_26594 = (state_26734[(9)]);
var inst_26597 = (state_26734[(10)]);
var inst_26602 = cljs.core._nth.call(null,inst_26595,inst_26597);
var inst_26603 = figwheel.client.file_reloading.eval_body.call(null,inst_26602,opts);
var inst_26604 = (inst_26597 + (1));
var tmp26736 = inst_26596;
var tmp26737 = inst_26595;
var tmp26738 = inst_26594;
var inst_26594__$1 = tmp26738;
var inst_26595__$1 = tmp26737;
var inst_26596__$1 = tmp26736;
var inst_26597__$1 = inst_26604;
var state_26734__$1 = (function (){var statearr_26739 = state_26734;
(statearr_26739[(11)] = inst_26603);

(statearr_26739[(7)] = inst_26596__$1);

(statearr_26739[(8)] = inst_26595__$1);

(statearr_26739[(9)] = inst_26594__$1);

(statearr_26739[(10)] = inst_26597__$1);

return statearr_26739;
})();
var statearr_26740_26823 = state_26734__$1;
(statearr_26740_26823[(2)] = null);

(statearr_26740_26823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (20))){
var inst_26637 = (state_26734[(12)]);
var inst_26645 = figwheel.client.file_reloading.sort_files.call(null,inst_26637);
var state_26734__$1 = state_26734;
var statearr_26741_26824 = state_26734__$1;
(statearr_26741_26824[(2)] = inst_26645);

(statearr_26741_26824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (27))){
var state_26734__$1 = state_26734;
var statearr_26742_26825 = state_26734__$1;
(statearr_26742_26825[(2)] = null);

(statearr_26742_26825[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (1))){
var inst_26586 = (state_26734[(13)]);
var inst_26583 = before_jsload.call(null,files);
var inst_26584 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26585 = (function (){return ((function (inst_26586,inst_26583,inst_26584,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26574_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26574_SHARP_);
});
;})(inst_26586,inst_26583,inst_26584,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26586__$1 = cljs.core.filter.call(null,inst_26585,files);
var inst_26587 = cljs.core.not_empty.call(null,inst_26586__$1);
var state_26734__$1 = (function (){var statearr_26743 = state_26734;
(statearr_26743[(13)] = inst_26586__$1);

(statearr_26743[(14)] = inst_26583);

(statearr_26743[(15)] = inst_26584);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26587)){
var statearr_26744_26826 = state_26734__$1;
(statearr_26744_26826[(1)] = (2));

} else {
var statearr_26745_26827 = state_26734__$1;
(statearr_26745_26827[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (24))){
var state_26734__$1 = state_26734;
var statearr_26746_26828 = state_26734__$1;
(statearr_26746_26828[(2)] = null);

(statearr_26746_26828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (39))){
var inst_26687 = (state_26734[(16)]);
var state_26734__$1 = state_26734;
var statearr_26747_26829 = state_26734__$1;
(statearr_26747_26829[(2)] = inst_26687);

(statearr_26747_26829[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (46))){
var inst_26729 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26748_26830 = state_26734__$1;
(statearr_26748_26830[(2)] = inst_26729);

(statearr_26748_26830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (4))){
var inst_26631 = (state_26734[(2)]);
var inst_26632 = cljs.core.List.EMPTY;
var inst_26633 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26632);
var inst_26634 = (function (){return ((function (inst_26631,inst_26632,inst_26633,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26575_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26575_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26575_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__26575_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_26631,inst_26632,inst_26633,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26635 = cljs.core.filter.call(null,inst_26634,files);
var inst_26636 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26637 = cljs.core.concat.call(null,inst_26635,inst_26636);
var state_26734__$1 = (function (){var statearr_26749 = state_26734;
(statearr_26749[(12)] = inst_26637);

(statearr_26749[(17)] = inst_26633);

(statearr_26749[(18)] = inst_26631);

return statearr_26749;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26750_26831 = state_26734__$1;
(statearr_26750_26831[(1)] = (16));

} else {
var statearr_26751_26832 = state_26734__$1;
(statearr_26751_26832[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (15))){
var inst_26621 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26752_26833 = state_26734__$1;
(statearr_26752_26833[(2)] = inst_26621);

(statearr_26752_26833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (21))){
var inst_26647 = (state_26734[(19)]);
var inst_26647__$1 = (state_26734[(2)]);
var inst_26648 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26647__$1);
var state_26734__$1 = (function (){var statearr_26753 = state_26734;
(statearr_26753[(19)] = inst_26647__$1);

return statearr_26753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26734__$1,(22),inst_26648);
} else {
if((state_val_26735 === (31))){
var inst_26732 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26734__$1,inst_26732);
} else {
if((state_val_26735 === (32))){
var inst_26687 = (state_26734[(16)]);
var inst_26692 = inst_26687.cljs$lang$protocol_mask$partition0$;
var inst_26693 = (inst_26692 & (64));
var inst_26694 = inst_26687.cljs$core$ISeq$;
var inst_26695 = (cljs.core.PROTOCOL_SENTINEL === inst_26694);
var inst_26696 = ((inst_26693) || (inst_26695));
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26696)){
var statearr_26754_26834 = state_26734__$1;
(statearr_26754_26834[(1)] = (35));

} else {
var statearr_26755_26835 = state_26734__$1;
(statearr_26755_26835[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (40))){
var inst_26709 = (state_26734[(20)]);
var inst_26708 = (state_26734[(2)]);
var inst_26709__$1 = cljs.core.get.call(null,inst_26708,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26710 = cljs.core.get.call(null,inst_26708,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26711 = cljs.core.not_empty.call(null,inst_26709__$1);
var state_26734__$1 = (function (){var statearr_26756 = state_26734;
(statearr_26756[(21)] = inst_26710);

(statearr_26756[(20)] = inst_26709__$1);

return statearr_26756;
})();
if(cljs.core.truth_(inst_26711)){
var statearr_26757_26836 = state_26734__$1;
(statearr_26757_26836[(1)] = (41));

} else {
var statearr_26758_26837 = state_26734__$1;
(statearr_26758_26837[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (33))){
var state_26734__$1 = state_26734;
var statearr_26759_26838 = state_26734__$1;
(statearr_26759_26838[(2)] = false);

(statearr_26759_26838[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (13))){
var inst_26607 = (state_26734[(22)]);
var inst_26611 = cljs.core.chunk_first.call(null,inst_26607);
var inst_26612 = cljs.core.chunk_rest.call(null,inst_26607);
var inst_26613 = cljs.core.count.call(null,inst_26611);
var inst_26594 = inst_26612;
var inst_26595 = inst_26611;
var inst_26596 = inst_26613;
var inst_26597 = (0);
var state_26734__$1 = (function (){var statearr_26760 = state_26734;
(statearr_26760[(7)] = inst_26596);

(statearr_26760[(8)] = inst_26595);

(statearr_26760[(9)] = inst_26594);

(statearr_26760[(10)] = inst_26597);

return statearr_26760;
})();
var statearr_26761_26839 = state_26734__$1;
(statearr_26761_26839[(2)] = null);

(statearr_26761_26839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (22))){
var inst_26647 = (state_26734[(19)]);
var inst_26651 = (state_26734[(23)]);
var inst_26650 = (state_26734[(24)]);
var inst_26655 = (state_26734[(25)]);
var inst_26650__$1 = (state_26734[(2)]);
var inst_26651__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26650__$1);
var inst_26652 = (function (){var all_files = inst_26647;
var res_SINGLEQUOTE_ = inst_26650__$1;
var res = inst_26651__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26647,inst_26651,inst_26650,inst_26655,inst_26650__$1,inst_26651__$1,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26576_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26576_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26647,inst_26651,inst_26650,inst_26655,inst_26650__$1,inst_26651__$1,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26653 = cljs.core.filter.call(null,inst_26652,inst_26650__$1);
var inst_26654 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26655__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26654);
var inst_26656 = cljs.core.not_empty.call(null,inst_26655__$1);
var state_26734__$1 = (function (){var statearr_26762 = state_26734;
(statearr_26762[(23)] = inst_26651__$1);

(statearr_26762[(26)] = inst_26653);

(statearr_26762[(24)] = inst_26650__$1);

(statearr_26762[(25)] = inst_26655__$1);

return statearr_26762;
})();
if(cljs.core.truth_(inst_26656)){
var statearr_26763_26840 = state_26734__$1;
(statearr_26763_26840[(1)] = (23));

} else {
var statearr_26764_26841 = state_26734__$1;
(statearr_26764_26841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (36))){
var state_26734__$1 = state_26734;
var statearr_26765_26842 = state_26734__$1;
(statearr_26765_26842[(2)] = false);

(statearr_26765_26842[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (41))){
var inst_26709 = (state_26734[(20)]);
var inst_26713 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26714 = cljs.core.map.call(null,inst_26713,inst_26709);
var inst_26715 = cljs.core.pr_str.call(null,inst_26714);
var inst_26716 = ["figwheel-no-load meta-data: ",inst_26715].join('');
var inst_26717 = figwheel.client.utils.log.call(null,inst_26716);
var state_26734__$1 = state_26734;
var statearr_26766_26843 = state_26734__$1;
(statearr_26766_26843[(2)] = inst_26717);

(statearr_26766_26843[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (43))){
var inst_26710 = (state_26734[(21)]);
var inst_26720 = (state_26734[(2)]);
var inst_26721 = cljs.core.not_empty.call(null,inst_26710);
var state_26734__$1 = (function (){var statearr_26767 = state_26734;
(statearr_26767[(27)] = inst_26720);

return statearr_26767;
})();
if(cljs.core.truth_(inst_26721)){
var statearr_26768_26844 = state_26734__$1;
(statearr_26768_26844[(1)] = (44));

} else {
var statearr_26769_26845 = state_26734__$1;
(statearr_26769_26845[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (29))){
var inst_26647 = (state_26734[(19)]);
var inst_26651 = (state_26734[(23)]);
var inst_26653 = (state_26734[(26)]);
var inst_26650 = (state_26734[(24)]);
var inst_26655 = (state_26734[(25)]);
var inst_26687 = (state_26734[(16)]);
var inst_26683 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26686 = (function (){var all_files = inst_26647;
var res_SINGLEQUOTE_ = inst_26650;
var res = inst_26651;
var files_not_loaded = inst_26653;
var dependencies_that_loaded = inst_26655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26687,inst_26683,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26685){
var map__26770 = p__26685;
var map__26770__$1 = (((((!((map__26770 == null))))?(((((map__26770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26770):map__26770);
var namespace = cljs.core.get.call(null,map__26770__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26687,inst_26683,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26687__$1 = cljs.core.group_by.call(null,inst_26686,inst_26653);
var inst_26689 = (inst_26687__$1 == null);
var inst_26690 = cljs.core.not.call(null,inst_26689);
var state_26734__$1 = (function (){var statearr_26772 = state_26734;
(statearr_26772[(28)] = inst_26683);

(statearr_26772[(16)] = inst_26687__$1);

return statearr_26772;
})();
if(inst_26690){
var statearr_26773_26846 = state_26734__$1;
(statearr_26773_26846[(1)] = (32));

} else {
var statearr_26774_26847 = state_26734__$1;
(statearr_26774_26847[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (44))){
var inst_26710 = (state_26734[(21)]);
var inst_26723 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26710);
var inst_26724 = cljs.core.pr_str.call(null,inst_26723);
var inst_26725 = ["not required: ",inst_26724].join('');
var inst_26726 = figwheel.client.utils.log.call(null,inst_26725);
var state_26734__$1 = state_26734;
var statearr_26775_26848 = state_26734__$1;
(statearr_26775_26848[(2)] = inst_26726);

(statearr_26775_26848[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (6))){
var inst_26628 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26776_26849 = state_26734__$1;
(statearr_26776_26849[(2)] = inst_26628);

(statearr_26776_26849[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (28))){
var inst_26653 = (state_26734[(26)]);
var inst_26680 = (state_26734[(2)]);
var inst_26681 = cljs.core.not_empty.call(null,inst_26653);
var state_26734__$1 = (function (){var statearr_26777 = state_26734;
(statearr_26777[(29)] = inst_26680);

return statearr_26777;
})();
if(cljs.core.truth_(inst_26681)){
var statearr_26778_26850 = state_26734__$1;
(statearr_26778_26850[(1)] = (29));

} else {
var statearr_26779_26851 = state_26734__$1;
(statearr_26779_26851[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (25))){
var inst_26651 = (state_26734[(23)]);
var inst_26667 = (state_26734[(2)]);
var inst_26668 = cljs.core.not_empty.call(null,inst_26651);
var state_26734__$1 = (function (){var statearr_26780 = state_26734;
(statearr_26780[(30)] = inst_26667);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26668)){
var statearr_26781_26852 = state_26734__$1;
(statearr_26781_26852[(1)] = (26));

} else {
var statearr_26782_26853 = state_26734__$1;
(statearr_26782_26853[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (34))){
var inst_26703 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26703)){
var statearr_26783_26854 = state_26734__$1;
(statearr_26783_26854[(1)] = (38));

} else {
var statearr_26784_26855 = state_26734__$1;
(statearr_26784_26855[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (17))){
var state_26734__$1 = state_26734;
var statearr_26785_26856 = state_26734__$1;
(statearr_26785_26856[(2)] = recompile_dependents);

(statearr_26785_26856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (3))){
var state_26734__$1 = state_26734;
var statearr_26786_26857 = state_26734__$1;
(statearr_26786_26857[(2)] = null);

(statearr_26786_26857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (12))){
var inst_26624 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26787_26858 = state_26734__$1;
(statearr_26787_26858[(2)] = inst_26624);

(statearr_26787_26858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (2))){
var inst_26586 = (state_26734[(13)]);
var inst_26593 = cljs.core.seq.call(null,inst_26586);
var inst_26594 = inst_26593;
var inst_26595 = null;
var inst_26596 = (0);
var inst_26597 = (0);
var state_26734__$1 = (function (){var statearr_26788 = state_26734;
(statearr_26788[(7)] = inst_26596);

(statearr_26788[(8)] = inst_26595);

(statearr_26788[(9)] = inst_26594);

(statearr_26788[(10)] = inst_26597);

return statearr_26788;
})();
var statearr_26789_26859 = state_26734__$1;
(statearr_26789_26859[(2)] = null);

(statearr_26789_26859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (23))){
var inst_26647 = (state_26734[(19)]);
var inst_26651 = (state_26734[(23)]);
var inst_26653 = (state_26734[(26)]);
var inst_26650 = (state_26734[(24)]);
var inst_26655 = (state_26734[(25)]);
var inst_26658 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26660 = (function (){var all_files = inst_26647;
var res_SINGLEQUOTE_ = inst_26650;
var res = inst_26651;
var files_not_loaded = inst_26653;
var dependencies_that_loaded = inst_26655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26658,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26659){
var map__26790 = p__26659;
var map__26790__$1 = (((((!((map__26790 == null))))?(((((map__26790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26790):map__26790);
var request_url = cljs.core.get.call(null,map__26790__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26658,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26661 = cljs.core.reverse.call(null,inst_26655);
var inst_26662 = cljs.core.map.call(null,inst_26660,inst_26661);
var inst_26663 = cljs.core.pr_str.call(null,inst_26662);
var inst_26664 = figwheel.client.utils.log.call(null,inst_26663);
var state_26734__$1 = (function (){var statearr_26792 = state_26734;
(statearr_26792[(31)] = inst_26658);

return statearr_26792;
})();
var statearr_26793_26860 = state_26734__$1;
(statearr_26793_26860[(2)] = inst_26664);

(statearr_26793_26860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (35))){
var state_26734__$1 = state_26734;
var statearr_26794_26861 = state_26734__$1;
(statearr_26794_26861[(2)] = true);

(statearr_26794_26861[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (19))){
var inst_26637 = (state_26734[(12)]);
var inst_26643 = figwheel.client.file_reloading.expand_files.call(null,inst_26637);
var state_26734__$1 = state_26734;
var statearr_26795_26862 = state_26734__$1;
(statearr_26795_26862[(2)] = inst_26643);

(statearr_26795_26862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (11))){
var state_26734__$1 = state_26734;
var statearr_26796_26863 = state_26734__$1;
(statearr_26796_26863[(2)] = null);

(statearr_26796_26863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (9))){
var inst_26626 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26797_26864 = state_26734__$1;
(statearr_26797_26864[(2)] = inst_26626);

(statearr_26797_26864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (5))){
var inst_26596 = (state_26734[(7)]);
var inst_26597 = (state_26734[(10)]);
var inst_26599 = (inst_26597 < inst_26596);
var inst_26600 = inst_26599;
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26600)){
var statearr_26798_26865 = state_26734__$1;
(statearr_26798_26865[(1)] = (7));

} else {
var statearr_26799_26866 = state_26734__$1;
(statearr_26799_26866[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (14))){
var inst_26607 = (state_26734[(22)]);
var inst_26616 = cljs.core.first.call(null,inst_26607);
var inst_26617 = figwheel.client.file_reloading.eval_body.call(null,inst_26616,opts);
var inst_26618 = cljs.core.next.call(null,inst_26607);
var inst_26594 = inst_26618;
var inst_26595 = null;
var inst_26596 = (0);
var inst_26597 = (0);
var state_26734__$1 = (function (){var statearr_26800 = state_26734;
(statearr_26800[(7)] = inst_26596);

(statearr_26800[(8)] = inst_26595);

(statearr_26800[(9)] = inst_26594);

(statearr_26800[(32)] = inst_26617);

(statearr_26800[(10)] = inst_26597);

return statearr_26800;
})();
var statearr_26801_26867 = state_26734__$1;
(statearr_26801_26867[(2)] = null);

(statearr_26801_26867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (45))){
var state_26734__$1 = state_26734;
var statearr_26802_26868 = state_26734__$1;
(statearr_26802_26868[(2)] = null);

(statearr_26802_26868[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (26))){
var inst_26647 = (state_26734[(19)]);
var inst_26651 = (state_26734[(23)]);
var inst_26653 = (state_26734[(26)]);
var inst_26650 = (state_26734[(24)]);
var inst_26655 = (state_26734[(25)]);
var inst_26670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26672 = (function (){var all_files = inst_26647;
var res_SINGLEQUOTE_ = inst_26650;
var res = inst_26651;
var files_not_loaded = inst_26653;
var dependencies_that_loaded = inst_26655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26670,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26671){
var map__26803 = p__26671;
var map__26803__$1 = (((((!((map__26803 == null))))?(((((map__26803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26803):map__26803);
var namespace = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26670,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26673 = cljs.core.map.call(null,inst_26672,inst_26651);
var inst_26674 = cljs.core.pr_str.call(null,inst_26673);
var inst_26675 = figwheel.client.utils.log.call(null,inst_26674);
var inst_26676 = (function (){var all_files = inst_26647;
var res_SINGLEQUOTE_ = inst_26650;
var res = inst_26651;
var files_not_loaded = inst_26653;
var dependencies_that_loaded = inst_26655;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26670,inst_26672,inst_26673,inst_26674,inst_26675,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26647,inst_26651,inst_26653,inst_26650,inst_26655,inst_26670,inst_26672,inst_26673,inst_26674,inst_26675,state_val_26735,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26677 = setTimeout(inst_26676,(10));
var state_26734__$1 = (function (){var statearr_26805 = state_26734;
(statearr_26805[(33)] = inst_26670);

(statearr_26805[(34)] = inst_26675);

return statearr_26805;
})();
var statearr_26806_26869 = state_26734__$1;
(statearr_26806_26869[(2)] = inst_26677);

(statearr_26806_26869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (16))){
var state_26734__$1 = state_26734;
var statearr_26807_26870 = state_26734__$1;
(statearr_26807_26870[(2)] = reload_dependents);

(statearr_26807_26870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (38))){
var inst_26687 = (state_26734[(16)]);
var inst_26705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26687);
var state_26734__$1 = state_26734;
var statearr_26808_26871 = state_26734__$1;
(statearr_26808_26871[(2)] = inst_26705);

(statearr_26808_26871[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (30))){
var state_26734__$1 = state_26734;
var statearr_26809_26872 = state_26734__$1;
(statearr_26809_26872[(2)] = null);

(statearr_26809_26872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (10))){
var inst_26607 = (state_26734[(22)]);
var inst_26609 = cljs.core.chunked_seq_QMARK_.call(null,inst_26607);
var state_26734__$1 = state_26734;
if(inst_26609){
var statearr_26810_26873 = state_26734__$1;
(statearr_26810_26873[(1)] = (13));

} else {
var statearr_26811_26874 = state_26734__$1;
(statearr_26811_26874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (18))){
var inst_26641 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
if(cljs.core.truth_(inst_26641)){
var statearr_26812_26875 = state_26734__$1;
(statearr_26812_26875[(1)] = (19));

} else {
var statearr_26813_26876 = state_26734__$1;
(statearr_26813_26876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (42))){
var state_26734__$1 = state_26734;
var statearr_26814_26877 = state_26734__$1;
(statearr_26814_26877[(2)] = null);

(statearr_26814_26877[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (37))){
var inst_26700 = (state_26734[(2)]);
var state_26734__$1 = state_26734;
var statearr_26815_26878 = state_26734__$1;
(statearr_26815_26878[(2)] = inst_26700);

(statearr_26815_26878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26735 === (8))){
var inst_26607 = (state_26734[(22)]);
var inst_26594 = (state_26734[(9)]);
var inst_26607__$1 = cljs.core.seq.call(null,inst_26594);
var state_26734__$1 = (function (){var statearr_26816 = state_26734;
(statearr_26816[(22)] = inst_26607__$1);

return statearr_26816;
})();
if(inst_26607__$1){
var statearr_26817_26879 = state_26734__$1;
(statearr_26817_26879[(1)] = (10));

} else {
var statearr_26818_26880 = state_26734__$1;
(statearr_26818_26880[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22691__auto__,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____0 = (function (){
var statearr_26819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26819[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__);

(statearr_26819[(1)] = (1));

return statearr_26819;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____1 = (function (state_26734){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_26734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e26820){if((e26820 instanceof Object)){
var ex__22695__auto__ = e26820;
var statearr_26821_26881 = state_26734;
(statearr_26821_26881[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26882 = state_26734;
state_26734 = G__26882;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__ = function(state_26734){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____1.call(this,state_26734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22788__auto__ = (function (){var statearr_26822 = f__22787__auto__.call(null);
(statearr_26822[(6)] = c__22786__auto__);

return statearr_26822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,map__26579,map__26579__$1,opts,before_jsload,on_jsload,reload_dependents,map__26580,map__26580__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22786__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26885,link){
var map__26886 = p__26885;
var map__26886__$1 = (((((!((map__26886 == null))))?(((((map__26886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26886):map__26886);
var file = cljs.core.get.call(null,map__26886__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__26886,map__26886__$1,file){
return (function (p1__26883_SHARP_,p2__26884_SHARP_){
if(cljs.core._EQ_.call(null,p1__26883_SHARP_,p2__26884_SHARP_)){
return p1__26883_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__26886,map__26886__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26889){
var map__26890 = p__26889;
var map__26890__$1 = (((((!((map__26890 == null))))?(((((map__26890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26890):map__26890);
var match_length = cljs.core.get.call(null,map__26890__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26890__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26888_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26888_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26892_SHARP_,p2__26893_SHARP_){
return cljs.core.assoc.call(null,p1__26892_SHARP_,cljs.core.get.call(null,p2__26893_SHARP_,key),p2__26893_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_26894 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26894);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26894);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26895,p__26896){
var map__26897 = p__26895;
var map__26897__$1 = (((((!((map__26897 == null))))?(((((map__26897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26897):map__26897);
var on_cssload = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26898 = p__26896;
var map__26898__$1 = (((((!((map__26898 == null))))?(((((map__26898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26898):map__26898);
var files_msg = map__26898__$1;
var files = cljs.core.get.call(null,map__26898__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1581113873659
