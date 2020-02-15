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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39803_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39803_SHARP_));
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
var seq__39804 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39805 = null;
var count__39806 = (0);
var i__39807 = (0);
while(true){
if((i__39807 < count__39806)){
var n = cljs.core._nth.call(null,chunk__39805,i__39807);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39808 = seq__39804;
var G__39809 = chunk__39805;
var G__39810 = count__39806;
var G__39811 = (i__39807 + (1));
seq__39804 = G__39808;
chunk__39805 = G__39809;
count__39806 = G__39810;
i__39807 = G__39811;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39804);
if(temp__5735__auto__){
var seq__39804__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39804__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39804__$1);
var G__39812 = cljs.core.chunk_rest.call(null,seq__39804__$1);
var G__39813 = c__4550__auto__;
var G__39814 = cljs.core.count.call(null,c__4550__auto__);
var G__39815 = (0);
seq__39804 = G__39812;
chunk__39805 = G__39813;
count__39806 = G__39814;
i__39807 = G__39815;
continue;
} else {
var n = cljs.core.first.call(null,seq__39804__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__39816 = cljs.core.next.call(null,seq__39804__$1);
var G__39817 = null;
var G__39818 = (0);
var G__39819 = (0);
seq__39804 = G__39816;
chunk__39805 = G__39817;
count__39806 = G__39818;
i__39807 = G__39819;
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
return cljs.core.some.call(null,(function (p__39820){
var vec__39821 = p__39820;
var _ = cljs.core.nth.call(null,vec__39821,(0),null);
var v = cljs.core.nth.call(null,vec__39821,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__39824){
var vec__39825 = p__39824;
var k = cljs.core.nth.call(null,vec__39825,(0),null);
var v = cljs.core.nth.call(null,vec__39825,(1),null);
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

var seq__39837_39845 = cljs.core.seq.call(null,deps);
var chunk__39838_39846 = null;
var count__39839_39847 = (0);
var i__39840_39848 = (0);
while(true){
if((i__39840_39848 < count__39839_39847)){
var dep_39849 = cljs.core._nth.call(null,chunk__39838_39846,i__39840_39848);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_39849;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39849));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39849,(depth + (1)),state);
} else {
}


var G__39850 = seq__39837_39845;
var G__39851 = chunk__39838_39846;
var G__39852 = count__39839_39847;
var G__39853 = (i__39840_39848 + (1));
seq__39837_39845 = G__39850;
chunk__39838_39846 = G__39851;
count__39839_39847 = G__39852;
i__39840_39848 = G__39853;
continue;
} else {
var temp__5735__auto___39854 = cljs.core.seq.call(null,seq__39837_39845);
if(temp__5735__auto___39854){
var seq__39837_39855__$1 = temp__5735__auto___39854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39837_39855__$1)){
var c__4550__auto___39856 = cljs.core.chunk_first.call(null,seq__39837_39855__$1);
var G__39857 = cljs.core.chunk_rest.call(null,seq__39837_39855__$1);
var G__39858 = c__4550__auto___39856;
var G__39859 = cljs.core.count.call(null,c__4550__auto___39856);
var G__39860 = (0);
seq__39837_39845 = G__39857;
chunk__39838_39846 = G__39858;
count__39839_39847 = G__39859;
i__39840_39848 = G__39860;
continue;
} else {
var dep_39861 = cljs.core.first.call(null,seq__39837_39855__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_39861;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_39861));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_39861,(depth + (1)),state);
} else {
}


var G__39862 = cljs.core.next.call(null,seq__39837_39855__$1);
var G__39863 = null;
var G__39864 = (0);
var G__39865 = (0);
seq__39837_39845 = G__39862;
chunk__39838_39846 = G__39863;
count__39839_39847 = G__39864;
i__39840_39848 = G__39865;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39841){
var vec__39842 = p__39841;
var seq__39843 = cljs.core.seq.call(null,vec__39842);
var first__39844 = cljs.core.first.call(null,seq__39843);
var seq__39843__$1 = cljs.core.next.call(null,seq__39843);
var x = first__39844;
var xs = seq__39843__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39842,seq__39843,first__39844,seq__39843__$1,x,xs,get_deps__$1){
return (function (p1__39828_SHARP_){
return clojure.set.difference.call(null,p1__39828_SHARP_,x);
});})(vec__39842,seq__39843,first__39844,seq__39843__$1,x,xs,get_deps__$1))
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
var seq__39866 = cljs.core.seq.call(null,provides);
var chunk__39867 = null;
var count__39868 = (0);
var i__39869 = (0);
while(true){
if((i__39869 < count__39868)){
var prov = cljs.core._nth.call(null,chunk__39867,i__39869);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39878_39886 = cljs.core.seq.call(null,requires);
var chunk__39879_39887 = null;
var count__39880_39888 = (0);
var i__39881_39889 = (0);
while(true){
if((i__39881_39889 < count__39880_39888)){
var req_39890 = cljs.core._nth.call(null,chunk__39879_39887,i__39881_39889);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39890,prov);


var G__39891 = seq__39878_39886;
var G__39892 = chunk__39879_39887;
var G__39893 = count__39880_39888;
var G__39894 = (i__39881_39889 + (1));
seq__39878_39886 = G__39891;
chunk__39879_39887 = G__39892;
count__39880_39888 = G__39893;
i__39881_39889 = G__39894;
continue;
} else {
var temp__5735__auto___39895 = cljs.core.seq.call(null,seq__39878_39886);
if(temp__5735__auto___39895){
var seq__39878_39896__$1 = temp__5735__auto___39895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39878_39896__$1)){
var c__4550__auto___39897 = cljs.core.chunk_first.call(null,seq__39878_39896__$1);
var G__39898 = cljs.core.chunk_rest.call(null,seq__39878_39896__$1);
var G__39899 = c__4550__auto___39897;
var G__39900 = cljs.core.count.call(null,c__4550__auto___39897);
var G__39901 = (0);
seq__39878_39886 = G__39898;
chunk__39879_39887 = G__39899;
count__39880_39888 = G__39900;
i__39881_39889 = G__39901;
continue;
} else {
var req_39902 = cljs.core.first.call(null,seq__39878_39896__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39902,prov);


var G__39903 = cljs.core.next.call(null,seq__39878_39896__$1);
var G__39904 = null;
var G__39905 = (0);
var G__39906 = (0);
seq__39878_39886 = G__39903;
chunk__39879_39887 = G__39904;
count__39880_39888 = G__39905;
i__39881_39889 = G__39906;
continue;
}
} else {
}
}
break;
}


var G__39907 = seq__39866;
var G__39908 = chunk__39867;
var G__39909 = count__39868;
var G__39910 = (i__39869 + (1));
seq__39866 = G__39907;
chunk__39867 = G__39908;
count__39868 = G__39909;
i__39869 = G__39910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39866);
if(temp__5735__auto__){
var seq__39866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39866__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39866__$1);
var G__39911 = cljs.core.chunk_rest.call(null,seq__39866__$1);
var G__39912 = c__4550__auto__;
var G__39913 = cljs.core.count.call(null,c__4550__auto__);
var G__39914 = (0);
seq__39866 = G__39911;
chunk__39867 = G__39912;
count__39868 = G__39913;
i__39869 = G__39914;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39866__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39882_39915 = cljs.core.seq.call(null,requires);
var chunk__39883_39916 = null;
var count__39884_39917 = (0);
var i__39885_39918 = (0);
while(true){
if((i__39885_39918 < count__39884_39917)){
var req_39919 = cljs.core._nth.call(null,chunk__39883_39916,i__39885_39918);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39919,prov);


var G__39920 = seq__39882_39915;
var G__39921 = chunk__39883_39916;
var G__39922 = count__39884_39917;
var G__39923 = (i__39885_39918 + (1));
seq__39882_39915 = G__39920;
chunk__39883_39916 = G__39921;
count__39884_39917 = G__39922;
i__39885_39918 = G__39923;
continue;
} else {
var temp__5735__auto___39924__$1 = cljs.core.seq.call(null,seq__39882_39915);
if(temp__5735__auto___39924__$1){
var seq__39882_39925__$1 = temp__5735__auto___39924__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39882_39925__$1)){
var c__4550__auto___39926 = cljs.core.chunk_first.call(null,seq__39882_39925__$1);
var G__39927 = cljs.core.chunk_rest.call(null,seq__39882_39925__$1);
var G__39928 = c__4550__auto___39926;
var G__39929 = cljs.core.count.call(null,c__4550__auto___39926);
var G__39930 = (0);
seq__39882_39915 = G__39927;
chunk__39883_39916 = G__39928;
count__39884_39917 = G__39929;
i__39885_39918 = G__39930;
continue;
} else {
var req_39931 = cljs.core.first.call(null,seq__39882_39925__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39931,prov);


var G__39932 = cljs.core.next.call(null,seq__39882_39925__$1);
var G__39933 = null;
var G__39934 = (0);
var G__39935 = (0);
seq__39882_39915 = G__39932;
chunk__39883_39916 = G__39933;
count__39884_39917 = G__39934;
i__39885_39918 = G__39935;
continue;
}
} else {
}
}
break;
}


var G__39936 = cljs.core.next.call(null,seq__39866__$1);
var G__39937 = null;
var G__39938 = (0);
var G__39939 = (0);
seq__39866 = G__39936;
chunk__39867 = G__39937;
count__39868 = G__39938;
i__39869 = G__39939;
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
var seq__39940_39944 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39941_39945 = null;
var count__39942_39946 = (0);
var i__39943_39947 = (0);
while(true){
if((i__39943_39947 < count__39942_39946)){
var ns_39948 = cljs.core._nth.call(null,chunk__39941_39945,i__39943_39947);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39948);


var G__39949 = seq__39940_39944;
var G__39950 = chunk__39941_39945;
var G__39951 = count__39942_39946;
var G__39952 = (i__39943_39947 + (1));
seq__39940_39944 = G__39949;
chunk__39941_39945 = G__39950;
count__39942_39946 = G__39951;
i__39943_39947 = G__39952;
continue;
} else {
var temp__5735__auto___39953 = cljs.core.seq.call(null,seq__39940_39944);
if(temp__5735__auto___39953){
var seq__39940_39954__$1 = temp__5735__auto___39953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39940_39954__$1)){
var c__4550__auto___39955 = cljs.core.chunk_first.call(null,seq__39940_39954__$1);
var G__39956 = cljs.core.chunk_rest.call(null,seq__39940_39954__$1);
var G__39957 = c__4550__auto___39955;
var G__39958 = cljs.core.count.call(null,c__4550__auto___39955);
var G__39959 = (0);
seq__39940_39944 = G__39956;
chunk__39941_39945 = G__39957;
count__39942_39946 = G__39958;
i__39943_39947 = G__39959;
continue;
} else {
var ns_39960 = cljs.core.first.call(null,seq__39940_39954__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39960);


var G__39961 = cljs.core.next.call(null,seq__39940_39954__$1);
var G__39962 = null;
var G__39963 = (0);
var G__39964 = (0);
seq__39940_39944 = G__39961;
chunk__39941_39945 = G__39962;
count__39942_39946 = G__39963;
i__39943_39947 = G__39964;
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
var G__39965__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39966__i = 0, G__39966__a = new Array(arguments.length -  0);
while (G__39966__i < G__39966__a.length) {G__39966__a[G__39966__i] = arguments[G__39966__i + 0]; ++G__39966__i;}
  args = new cljs.core.IndexedSeq(G__39966__a,0,null);
} 
return G__39965__delegate.call(this,args);};
G__39965.cljs$lang$maxFixedArity = 0;
G__39965.cljs$lang$applyTo = (function (arglist__39967){
var args = cljs.core.seq(arglist__39967);
return G__39965__delegate(args);
});
G__39965.cljs$core$IFn$_invoke$arity$variadic = G__39965__delegate;
return G__39965;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__39968_SHARP_,p2__39969_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39968_SHARP_)),p2__39969_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__39970_SHARP_,p2__39971_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__39970_SHARP_),p2__39971_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__39972 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__39972.addCallback(((function (G__39972){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__39972))
);

G__39972.addErrback(((function (G__39972){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__39972))
);

return G__39972;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39973){if((e39973 instanceof Error)){
var e = e39973;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39973;

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
}catch (e39974){if((e39974 instanceof Error)){
var e = e39974;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39974;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39975 = cljs.core._EQ_;
var expr__39976 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39975.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39976))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__39975.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39976))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__39975.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39976))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__39975,expr__39976){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39975,expr__39976))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39978,callback){
var map__39979 = p__39978;
var map__39979__$1 = (((((!((map__39979 == null))))?(((((map__39979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39979):map__39979);
var file_msg = map__39979__$1;
var request_url = cljs.core.get.call(null,map__39979__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__39979,map__39979__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39979,map__39979__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__){
return (function (state_40017){
var state_val_40018 = (state_40017[(1)]);
if((state_val_40018 === (7))){
var inst_40013 = (state_40017[(2)]);
var state_40017__$1 = state_40017;
var statearr_40019_40045 = state_40017__$1;
(statearr_40019_40045[(2)] = inst_40013);

(statearr_40019_40045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (1))){
var state_40017__$1 = state_40017;
var statearr_40020_40046 = state_40017__$1;
(statearr_40020_40046[(2)] = null);

(statearr_40020_40046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (4))){
var inst_39983 = (state_40017[(7)]);
var inst_39983__$1 = (state_40017[(2)]);
var state_40017__$1 = (function (){var statearr_40021 = state_40017;
(statearr_40021[(7)] = inst_39983__$1);

return statearr_40021;
})();
if(cljs.core.truth_(inst_39983__$1)){
var statearr_40022_40047 = state_40017__$1;
(statearr_40022_40047[(1)] = (5));

} else {
var statearr_40023_40048 = state_40017__$1;
(statearr_40023_40048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (15))){
var inst_39998 = (state_40017[(8)]);
var inst_39996 = (state_40017[(9)]);
var inst_40000 = inst_39998.call(null,inst_39996);
var state_40017__$1 = state_40017;
var statearr_40024_40049 = state_40017__$1;
(statearr_40024_40049[(2)] = inst_40000);

(statearr_40024_40049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (13))){
var inst_40007 = (state_40017[(2)]);
var state_40017__$1 = state_40017;
var statearr_40025_40050 = state_40017__$1;
(statearr_40025_40050[(2)] = inst_40007);

(statearr_40025_40050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (6))){
var state_40017__$1 = state_40017;
var statearr_40026_40051 = state_40017__$1;
(statearr_40026_40051[(2)] = null);

(statearr_40026_40051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (17))){
var inst_40004 = (state_40017[(2)]);
var state_40017__$1 = state_40017;
var statearr_40027_40052 = state_40017__$1;
(statearr_40027_40052[(2)] = inst_40004);

(statearr_40027_40052[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (3))){
var inst_40015 = (state_40017[(2)]);
var state_40017__$1 = state_40017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40017__$1,inst_40015);
} else {
if((state_val_40018 === (12))){
var state_40017__$1 = state_40017;
var statearr_40028_40053 = state_40017__$1;
(statearr_40028_40053[(2)] = null);

(statearr_40028_40053[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (2))){
var state_40017__$1 = state_40017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40017__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40018 === (11))){
var inst_39988 = (state_40017[(10)]);
var inst_39994 = figwheel.client.file_reloading.blocking_load.call(null,inst_39988);
var state_40017__$1 = state_40017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40017__$1,(14),inst_39994);
} else {
if((state_val_40018 === (9))){
var inst_39988 = (state_40017[(10)]);
var state_40017__$1 = state_40017;
if(cljs.core.truth_(inst_39988)){
var statearr_40029_40054 = state_40017__$1;
(statearr_40029_40054[(1)] = (11));

} else {
var statearr_40030_40055 = state_40017__$1;
(statearr_40030_40055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (5))){
var inst_39989 = (state_40017[(11)]);
var inst_39983 = (state_40017[(7)]);
var inst_39988 = cljs.core.nth.call(null,inst_39983,(0),null);
var inst_39989__$1 = cljs.core.nth.call(null,inst_39983,(1),null);
var state_40017__$1 = (function (){var statearr_40031 = state_40017;
(statearr_40031[(10)] = inst_39988);

(statearr_40031[(11)] = inst_39989__$1);

return statearr_40031;
})();
if(cljs.core.truth_(inst_39989__$1)){
var statearr_40032_40056 = state_40017__$1;
(statearr_40032_40056[(1)] = (8));

} else {
var statearr_40033_40057 = state_40017__$1;
(statearr_40033_40057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (14))){
var inst_39988 = (state_40017[(10)]);
var inst_39998 = (state_40017[(8)]);
var inst_39996 = (state_40017[(2)]);
var inst_39997 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39998__$1 = cljs.core.get.call(null,inst_39997,inst_39988);
var state_40017__$1 = (function (){var statearr_40034 = state_40017;
(statearr_40034[(8)] = inst_39998__$1);

(statearr_40034[(9)] = inst_39996);

return statearr_40034;
})();
if(cljs.core.truth_(inst_39998__$1)){
var statearr_40035_40058 = state_40017__$1;
(statearr_40035_40058[(1)] = (15));

} else {
var statearr_40036_40059 = state_40017__$1;
(statearr_40036_40059[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (16))){
var inst_39996 = (state_40017[(9)]);
var inst_40002 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39996);
var state_40017__$1 = state_40017;
var statearr_40037_40060 = state_40017__$1;
(statearr_40037_40060[(2)] = inst_40002);

(statearr_40037_40060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (10))){
var inst_40009 = (state_40017[(2)]);
var state_40017__$1 = (function (){var statearr_40038 = state_40017;
(statearr_40038[(12)] = inst_40009);

return statearr_40038;
})();
var statearr_40039_40061 = state_40017__$1;
(statearr_40039_40061[(2)] = null);

(statearr_40039_40061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40018 === (8))){
var inst_39989 = (state_40017[(11)]);
var inst_39991 = eval(inst_39989);
var state_40017__$1 = state_40017;
var statearr_40040_40062 = state_40017__$1;
(statearr_40040_40062[(2)] = inst_39991);

(statearr_40040_40062[(1)] = (10));


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
});})(c__29675__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29581__auto__ = null;
var figwheel$client$file_reloading$state_machine__29581__auto____0 = (function (){
var statearr_40041 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40041[(0)] = figwheel$client$file_reloading$state_machine__29581__auto__);

(statearr_40041[(1)] = (1));

return statearr_40041;
});
var figwheel$client$file_reloading$state_machine__29581__auto____1 = (function (state_40017){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_40017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e40042){if((e40042 instanceof Object)){
var ex__29584__auto__ = e40042;
var statearr_40043_40063 = state_40017;
(statearr_40043_40063[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40064 = state_40017;
state_40017 = G__40064;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29581__auto__ = function(state_40017){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29581__auto____1.call(this,state_40017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29581__auto____0;
figwheel$client$file_reloading$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29581__auto____1;
return figwheel$client$file_reloading$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__))
})();
var state__29677__auto__ = (function (){var statearr_40044 = f__29676__auto__.call(null);
(statearr_40044[(6)] = c__29675__auto__);

return statearr_40044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__))
);

return c__29675__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40066 = arguments.length;
switch (G__40066) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40068,callback){
var map__40069 = p__40068;
var map__40069__$1 = (((((!((map__40069 == null))))?(((((map__40069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40069):map__40069);
var file_msg = map__40069__$1;
var namespace = cljs.core.get.call(null,map__40069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40069,map__40069__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40069,map__40069__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40071){
var map__40072 = p__40071;
var map__40072__$1 = (((((!((map__40072 == null))))?(((((map__40072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40072):map__40072);
var file_msg = map__40072__$1;
var namespace = cljs.core.get.call(null,map__40072__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40074){
var map__40075 = p__40074;
var map__40075__$1 = (((((!((map__40075 == null))))?(((((map__40075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40075):map__40075);
var file_msg = map__40075__$1;
var namespace = cljs.core.get.call(null,map__40075__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40077,callback){
var map__40078 = p__40077;
var map__40078__$1 = (((((!((map__40078 == null))))?(((((map__40078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40078):map__40078);
var file_msg = map__40078__$1;
var request_url = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40078__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29675__auto___40128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___40128,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___40128,out){
return (function (state_40113){
var state_val_40114 = (state_40113[(1)]);
if((state_val_40114 === (1))){
var inst_40087 = cljs.core.seq.call(null,files);
var inst_40088 = cljs.core.first.call(null,inst_40087);
var inst_40089 = cljs.core.next.call(null,inst_40087);
var inst_40090 = files;
var state_40113__$1 = (function (){var statearr_40115 = state_40113;
(statearr_40115[(7)] = inst_40090);

(statearr_40115[(8)] = inst_40089);

(statearr_40115[(9)] = inst_40088);

return statearr_40115;
})();
var statearr_40116_40129 = state_40113__$1;
(statearr_40116_40129[(2)] = null);

(statearr_40116_40129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40114 === (2))){
var inst_40096 = (state_40113[(10)]);
var inst_40090 = (state_40113[(7)]);
var inst_40095 = cljs.core.seq.call(null,inst_40090);
var inst_40096__$1 = cljs.core.first.call(null,inst_40095);
var inst_40097 = cljs.core.next.call(null,inst_40095);
var inst_40098 = (inst_40096__$1 == null);
var inst_40099 = cljs.core.not.call(null,inst_40098);
var state_40113__$1 = (function (){var statearr_40117 = state_40113;
(statearr_40117[(10)] = inst_40096__$1);

(statearr_40117[(11)] = inst_40097);

return statearr_40117;
})();
if(inst_40099){
var statearr_40118_40130 = state_40113__$1;
(statearr_40118_40130[(1)] = (4));

} else {
var statearr_40119_40131 = state_40113__$1;
(statearr_40119_40131[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40114 === (3))){
var inst_40111 = (state_40113[(2)]);
var state_40113__$1 = state_40113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40113__$1,inst_40111);
} else {
if((state_val_40114 === (4))){
var inst_40096 = (state_40113[(10)]);
var inst_40101 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40096);
var state_40113__$1 = state_40113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40113__$1,(7),inst_40101);
} else {
if((state_val_40114 === (5))){
var inst_40107 = cljs.core.async.close_BANG_.call(null,out);
var state_40113__$1 = state_40113;
var statearr_40120_40132 = state_40113__$1;
(statearr_40120_40132[(2)] = inst_40107);

(statearr_40120_40132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40114 === (6))){
var inst_40109 = (state_40113[(2)]);
var state_40113__$1 = state_40113;
var statearr_40121_40133 = state_40113__$1;
(statearr_40121_40133[(2)] = inst_40109);

(statearr_40121_40133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40114 === (7))){
var inst_40097 = (state_40113[(11)]);
var inst_40103 = (state_40113[(2)]);
var inst_40104 = cljs.core.async.put_BANG_.call(null,out,inst_40103);
var inst_40090 = inst_40097;
var state_40113__$1 = (function (){var statearr_40122 = state_40113;
(statearr_40122[(7)] = inst_40090);

(statearr_40122[(12)] = inst_40104);

return statearr_40122;
})();
var statearr_40123_40134 = state_40113__$1;
(statearr_40123_40134[(2)] = null);

(statearr_40123_40134[(1)] = (2));


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
});})(c__29675__auto___40128,out))
;
return ((function (switch__29580__auto__,c__29675__auto___40128,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____0 = (function (){
var statearr_40124 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40124[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__);

(statearr_40124[(1)] = (1));

return statearr_40124;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____1 = (function (state_40113){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_40113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e40125){if((e40125 instanceof Object)){
var ex__29584__auto__ = e40125;
var statearr_40126_40135 = state_40113;
(statearr_40126_40135[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40136 = state_40113;
state_40113 = G__40136;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__ = function(state_40113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____1.call(this,state_40113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___40128,out))
})();
var state__29677__auto__ = (function (){var statearr_40127 = f__29676__auto__.call(null);
(statearr_40127[(6)] = c__29675__auto___40128);

return statearr_40127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___40128,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40137,opts){
var map__40138 = p__40137;
var map__40138__$1 = (((((!((map__40138 == null))))?(((((map__40138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40138):map__40138);
var eval_body = cljs.core.get.call(null,map__40138__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code__$1 = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code__$1,opts);
}catch (e40140){var e = e40140;
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
return (function (p1__40141_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40141_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__40142){
var vec__40143 = p__40142;
var k = cljs.core.nth.call(null,vec__40143,(0),null);
var v = cljs.core.nth.call(null,vec__40143,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40146){
var vec__40147 = p__40146;
var k = cljs.core.nth.call(null,vec__40147,(0),null);
var v = cljs.core.nth.call(null,vec__40147,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40153,p__40154){
var map__40155 = p__40153;
var map__40155__$1 = (((((!((map__40155 == null))))?(((((map__40155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40155):map__40155);
var opts = map__40155__$1;
var before_jsload = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40155__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40156 = p__40154;
var map__40156__$1 = (((((!((map__40156 == null))))?(((((map__40156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40156):map__40156);
var msg = map__40156__$1;
var files = cljs.core.get.call(null,map__40156__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40156__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40156__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40310){
var state_val_40311 = (state_40310[(1)]);
if((state_val_40311 === (7))){
var inst_40173 = (state_40310[(7)]);
var inst_40171 = (state_40310[(8)]);
var inst_40170 = (state_40310[(9)]);
var inst_40172 = (state_40310[(10)]);
var inst_40178 = cljs.core._nth.call(null,inst_40171,inst_40173);
var inst_40179 = figwheel.client.file_reloading.eval_body.call(null,inst_40178,opts);
var inst_40180 = (inst_40173 + (1));
var tmp40312 = inst_40171;
var tmp40313 = inst_40170;
var tmp40314 = inst_40172;
var inst_40170__$1 = tmp40313;
var inst_40171__$1 = tmp40312;
var inst_40172__$1 = tmp40314;
var inst_40173__$1 = inst_40180;
var state_40310__$1 = (function (){var statearr_40315 = state_40310;
(statearr_40315[(7)] = inst_40173__$1);

(statearr_40315[(8)] = inst_40171__$1);

(statearr_40315[(9)] = inst_40170__$1);

(statearr_40315[(11)] = inst_40179);

(statearr_40315[(10)] = inst_40172__$1);

return statearr_40315;
})();
var statearr_40316_40399 = state_40310__$1;
(statearr_40316_40399[(2)] = null);

(statearr_40316_40399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (20))){
var inst_40213 = (state_40310[(12)]);
var inst_40221 = figwheel.client.file_reloading.sort_files.call(null,inst_40213);
var state_40310__$1 = state_40310;
var statearr_40317_40400 = state_40310__$1;
(statearr_40317_40400[(2)] = inst_40221);

(statearr_40317_40400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (27))){
var state_40310__$1 = state_40310;
var statearr_40318_40401 = state_40310__$1;
(statearr_40318_40401[(2)] = null);

(statearr_40318_40401[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (1))){
var inst_40162 = (state_40310[(13)]);
var inst_40159 = before_jsload.call(null,files);
var inst_40160 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40161 = (function (){return ((function (inst_40162,inst_40159,inst_40160,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40150_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40150_SHARP_);
});
;})(inst_40162,inst_40159,inst_40160,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40162__$1 = cljs.core.filter.call(null,inst_40161,files);
var inst_40163 = cljs.core.not_empty.call(null,inst_40162__$1);
var state_40310__$1 = (function (){var statearr_40319 = state_40310;
(statearr_40319[(14)] = inst_40159);

(statearr_40319[(13)] = inst_40162__$1);

(statearr_40319[(15)] = inst_40160);

return statearr_40319;
})();
if(cljs.core.truth_(inst_40163)){
var statearr_40320_40402 = state_40310__$1;
(statearr_40320_40402[(1)] = (2));

} else {
var statearr_40321_40403 = state_40310__$1;
(statearr_40321_40403[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (24))){
var state_40310__$1 = state_40310;
var statearr_40322_40404 = state_40310__$1;
(statearr_40322_40404[(2)] = null);

(statearr_40322_40404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (39))){
var inst_40263 = (state_40310[(16)]);
var state_40310__$1 = state_40310;
var statearr_40323_40405 = state_40310__$1;
(statearr_40323_40405[(2)] = inst_40263);

(statearr_40323_40405[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (46))){
var inst_40305 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40324_40406 = state_40310__$1;
(statearr_40324_40406[(2)] = inst_40305);

(statearr_40324_40406[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (4))){
var inst_40207 = (state_40310[(2)]);
var inst_40208 = cljs.core.List.EMPTY;
var inst_40209 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40208);
var inst_40210 = (function (){return ((function (inst_40207,inst_40208,inst_40209,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40151_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40151_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40151_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40151_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_40207,inst_40208,inst_40209,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40211 = cljs.core.filter.call(null,inst_40210,files);
var inst_40212 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40213 = cljs.core.concat.call(null,inst_40211,inst_40212);
var state_40310__$1 = (function (){var statearr_40325 = state_40310;
(statearr_40325[(17)] = inst_40207);

(statearr_40325[(18)] = inst_40209);

(statearr_40325[(12)] = inst_40213);

return statearr_40325;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40326_40407 = state_40310__$1;
(statearr_40326_40407[(1)] = (16));

} else {
var statearr_40327_40408 = state_40310__$1;
(statearr_40327_40408[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (15))){
var inst_40197 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40328_40409 = state_40310__$1;
(statearr_40328_40409[(2)] = inst_40197);

(statearr_40328_40409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (21))){
var inst_40223 = (state_40310[(19)]);
var inst_40223__$1 = (state_40310[(2)]);
var inst_40224 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40223__$1);
var state_40310__$1 = (function (){var statearr_40329 = state_40310;
(statearr_40329[(19)] = inst_40223__$1);

return statearr_40329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40310__$1,(22),inst_40224);
} else {
if((state_val_40311 === (31))){
var inst_40308 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40310__$1,inst_40308);
} else {
if((state_val_40311 === (32))){
var inst_40263 = (state_40310[(16)]);
var inst_40268 = inst_40263.cljs$lang$protocol_mask$partition0$;
var inst_40269 = (inst_40268 & (64));
var inst_40270 = inst_40263.cljs$core$ISeq$;
var inst_40271 = (cljs.core.PROTOCOL_SENTINEL === inst_40270);
var inst_40272 = ((inst_40269) || (inst_40271));
var state_40310__$1 = state_40310;
if(cljs.core.truth_(inst_40272)){
var statearr_40330_40410 = state_40310__$1;
(statearr_40330_40410[(1)] = (35));

} else {
var statearr_40331_40411 = state_40310__$1;
(statearr_40331_40411[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (40))){
var inst_40285 = (state_40310[(20)]);
var inst_40284 = (state_40310[(2)]);
var inst_40285__$1 = cljs.core.get.call(null,inst_40284,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40286 = cljs.core.get.call(null,inst_40284,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40287 = cljs.core.not_empty.call(null,inst_40285__$1);
var state_40310__$1 = (function (){var statearr_40332 = state_40310;
(statearr_40332[(20)] = inst_40285__$1);

(statearr_40332[(21)] = inst_40286);

return statearr_40332;
})();
if(cljs.core.truth_(inst_40287)){
var statearr_40333_40412 = state_40310__$1;
(statearr_40333_40412[(1)] = (41));

} else {
var statearr_40334_40413 = state_40310__$1;
(statearr_40334_40413[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (33))){
var state_40310__$1 = state_40310;
var statearr_40335_40414 = state_40310__$1;
(statearr_40335_40414[(2)] = false);

(statearr_40335_40414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (13))){
var inst_40183 = (state_40310[(22)]);
var inst_40187 = cljs.core.chunk_first.call(null,inst_40183);
var inst_40188 = cljs.core.chunk_rest.call(null,inst_40183);
var inst_40189 = cljs.core.count.call(null,inst_40187);
var inst_40170 = inst_40188;
var inst_40171 = inst_40187;
var inst_40172 = inst_40189;
var inst_40173 = (0);
var state_40310__$1 = (function (){var statearr_40336 = state_40310;
(statearr_40336[(7)] = inst_40173);

(statearr_40336[(8)] = inst_40171);

(statearr_40336[(9)] = inst_40170);

(statearr_40336[(10)] = inst_40172);

return statearr_40336;
})();
var statearr_40337_40415 = state_40310__$1;
(statearr_40337_40415[(2)] = null);

(statearr_40337_40415[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (22))){
var inst_40223 = (state_40310[(19)]);
var inst_40231 = (state_40310[(23)]);
var inst_40227 = (state_40310[(24)]);
var inst_40226 = (state_40310[(25)]);
var inst_40226__$1 = (state_40310[(2)]);
var inst_40227__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40226__$1);
var inst_40228 = (function (){var all_files = inst_40223;
var res_SINGLEQUOTE_ = inst_40226__$1;
var res = inst_40227__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40223,inst_40231,inst_40227,inst_40226,inst_40226__$1,inst_40227__$1,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40152_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40152_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40223,inst_40231,inst_40227,inst_40226,inst_40226__$1,inst_40227__$1,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40229 = cljs.core.filter.call(null,inst_40228,inst_40226__$1);
var inst_40230 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40231__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40230);
var inst_40232 = cljs.core.not_empty.call(null,inst_40231__$1);
var state_40310__$1 = (function (){var statearr_40338 = state_40310;
(statearr_40338[(26)] = inst_40229);

(statearr_40338[(23)] = inst_40231__$1);

(statearr_40338[(24)] = inst_40227__$1);

(statearr_40338[(25)] = inst_40226__$1);

return statearr_40338;
})();
if(cljs.core.truth_(inst_40232)){
var statearr_40339_40416 = state_40310__$1;
(statearr_40339_40416[(1)] = (23));

} else {
var statearr_40340_40417 = state_40310__$1;
(statearr_40340_40417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (36))){
var state_40310__$1 = state_40310;
var statearr_40341_40418 = state_40310__$1;
(statearr_40341_40418[(2)] = false);

(statearr_40341_40418[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (41))){
var inst_40285 = (state_40310[(20)]);
var inst_40289 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40290 = cljs.core.map.call(null,inst_40289,inst_40285);
var inst_40291 = cljs.core.pr_str.call(null,inst_40290);
var inst_40292 = ["figwheel-no-load meta-data: ",inst_40291].join('');
var inst_40293 = figwheel.client.utils.log.call(null,inst_40292);
var state_40310__$1 = state_40310;
var statearr_40342_40419 = state_40310__$1;
(statearr_40342_40419[(2)] = inst_40293);

(statearr_40342_40419[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (43))){
var inst_40286 = (state_40310[(21)]);
var inst_40296 = (state_40310[(2)]);
var inst_40297 = cljs.core.not_empty.call(null,inst_40286);
var state_40310__$1 = (function (){var statearr_40343 = state_40310;
(statearr_40343[(27)] = inst_40296);

return statearr_40343;
})();
if(cljs.core.truth_(inst_40297)){
var statearr_40344_40420 = state_40310__$1;
(statearr_40344_40420[(1)] = (44));

} else {
var statearr_40345_40421 = state_40310__$1;
(statearr_40345_40421[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (29))){
var inst_40229 = (state_40310[(26)]);
var inst_40223 = (state_40310[(19)]);
var inst_40231 = (state_40310[(23)]);
var inst_40227 = (state_40310[(24)]);
var inst_40263 = (state_40310[(16)]);
var inst_40226 = (state_40310[(25)]);
var inst_40259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40262 = (function (){var all_files = inst_40223;
var res_SINGLEQUOTE_ = inst_40226;
var res = inst_40227;
var files_not_loaded = inst_40229;
var dependencies_that_loaded = inst_40231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40263,inst_40226,inst_40259,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40261){
var map__40346 = p__40261;
var map__40346__$1 = (((((!((map__40346 == null))))?(((((map__40346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40346):map__40346);
var namespace = cljs.core.get.call(null,map__40346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40263,inst_40226,inst_40259,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40263__$1 = cljs.core.group_by.call(null,inst_40262,inst_40229);
var inst_40265 = (inst_40263__$1 == null);
var inst_40266 = cljs.core.not.call(null,inst_40265);
var state_40310__$1 = (function (){var statearr_40348 = state_40310;
(statearr_40348[(16)] = inst_40263__$1);

(statearr_40348[(28)] = inst_40259);

return statearr_40348;
})();
if(inst_40266){
var statearr_40349_40422 = state_40310__$1;
(statearr_40349_40422[(1)] = (32));

} else {
var statearr_40350_40423 = state_40310__$1;
(statearr_40350_40423[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (44))){
var inst_40286 = (state_40310[(21)]);
var inst_40299 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40286);
var inst_40300 = cljs.core.pr_str.call(null,inst_40299);
var inst_40301 = ["not required: ",inst_40300].join('');
var inst_40302 = figwheel.client.utils.log.call(null,inst_40301);
var state_40310__$1 = state_40310;
var statearr_40351_40424 = state_40310__$1;
(statearr_40351_40424[(2)] = inst_40302);

(statearr_40351_40424[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (6))){
var inst_40204 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40352_40425 = state_40310__$1;
(statearr_40352_40425[(2)] = inst_40204);

(statearr_40352_40425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (28))){
var inst_40229 = (state_40310[(26)]);
var inst_40256 = (state_40310[(2)]);
var inst_40257 = cljs.core.not_empty.call(null,inst_40229);
var state_40310__$1 = (function (){var statearr_40353 = state_40310;
(statearr_40353[(29)] = inst_40256);

return statearr_40353;
})();
if(cljs.core.truth_(inst_40257)){
var statearr_40354_40426 = state_40310__$1;
(statearr_40354_40426[(1)] = (29));

} else {
var statearr_40355_40427 = state_40310__$1;
(statearr_40355_40427[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (25))){
var inst_40227 = (state_40310[(24)]);
var inst_40243 = (state_40310[(2)]);
var inst_40244 = cljs.core.not_empty.call(null,inst_40227);
var state_40310__$1 = (function (){var statearr_40356 = state_40310;
(statearr_40356[(30)] = inst_40243);

return statearr_40356;
})();
if(cljs.core.truth_(inst_40244)){
var statearr_40357_40428 = state_40310__$1;
(statearr_40357_40428[(1)] = (26));

} else {
var statearr_40358_40429 = state_40310__$1;
(statearr_40358_40429[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (34))){
var inst_40279 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
if(cljs.core.truth_(inst_40279)){
var statearr_40359_40430 = state_40310__$1;
(statearr_40359_40430[(1)] = (38));

} else {
var statearr_40360_40431 = state_40310__$1;
(statearr_40360_40431[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (17))){
var state_40310__$1 = state_40310;
var statearr_40361_40432 = state_40310__$1;
(statearr_40361_40432[(2)] = recompile_dependents);

(statearr_40361_40432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (3))){
var state_40310__$1 = state_40310;
var statearr_40362_40433 = state_40310__$1;
(statearr_40362_40433[(2)] = null);

(statearr_40362_40433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (12))){
var inst_40200 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40363_40434 = state_40310__$1;
(statearr_40363_40434[(2)] = inst_40200);

(statearr_40363_40434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (2))){
var inst_40162 = (state_40310[(13)]);
var inst_40169 = cljs.core.seq.call(null,inst_40162);
var inst_40170 = inst_40169;
var inst_40171 = null;
var inst_40172 = (0);
var inst_40173 = (0);
var state_40310__$1 = (function (){var statearr_40364 = state_40310;
(statearr_40364[(7)] = inst_40173);

(statearr_40364[(8)] = inst_40171);

(statearr_40364[(9)] = inst_40170);

(statearr_40364[(10)] = inst_40172);

return statearr_40364;
})();
var statearr_40365_40435 = state_40310__$1;
(statearr_40365_40435[(2)] = null);

(statearr_40365_40435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (23))){
var inst_40229 = (state_40310[(26)]);
var inst_40223 = (state_40310[(19)]);
var inst_40231 = (state_40310[(23)]);
var inst_40227 = (state_40310[(24)]);
var inst_40226 = (state_40310[(25)]);
var inst_40234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40236 = (function (){var all_files = inst_40223;
var res_SINGLEQUOTE_ = inst_40226;
var res = inst_40227;
var files_not_loaded = inst_40229;
var dependencies_that_loaded = inst_40231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40234,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40235){
var map__40366 = p__40235;
var map__40366__$1 = (((((!((map__40366 == null))))?(((((map__40366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40366):map__40366);
var request_url = cljs.core.get.call(null,map__40366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40234,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40237 = cljs.core.reverse.call(null,inst_40231);
var inst_40238 = cljs.core.map.call(null,inst_40236,inst_40237);
var inst_40239 = cljs.core.pr_str.call(null,inst_40238);
var inst_40240 = figwheel.client.utils.log.call(null,inst_40239);
var state_40310__$1 = (function (){var statearr_40368 = state_40310;
(statearr_40368[(31)] = inst_40234);

return statearr_40368;
})();
var statearr_40369_40436 = state_40310__$1;
(statearr_40369_40436[(2)] = inst_40240);

(statearr_40369_40436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (35))){
var state_40310__$1 = state_40310;
var statearr_40370_40437 = state_40310__$1;
(statearr_40370_40437[(2)] = true);

(statearr_40370_40437[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (19))){
var inst_40213 = (state_40310[(12)]);
var inst_40219 = figwheel.client.file_reloading.expand_files.call(null,inst_40213);
var state_40310__$1 = state_40310;
var statearr_40371_40438 = state_40310__$1;
(statearr_40371_40438[(2)] = inst_40219);

(statearr_40371_40438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (11))){
var state_40310__$1 = state_40310;
var statearr_40372_40439 = state_40310__$1;
(statearr_40372_40439[(2)] = null);

(statearr_40372_40439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (9))){
var inst_40202 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40373_40440 = state_40310__$1;
(statearr_40373_40440[(2)] = inst_40202);

(statearr_40373_40440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (5))){
var inst_40173 = (state_40310[(7)]);
var inst_40172 = (state_40310[(10)]);
var inst_40175 = (inst_40173 < inst_40172);
var inst_40176 = inst_40175;
var state_40310__$1 = state_40310;
if(cljs.core.truth_(inst_40176)){
var statearr_40374_40441 = state_40310__$1;
(statearr_40374_40441[(1)] = (7));

} else {
var statearr_40375_40442 = state_40310__$1;
(statearr_40375_40442[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (14))){
var inst_40183 = (state_40310[(22)]);
var inst_40192 = cljs.core.first.call(null,inst_40183);
var inst_40193 = figwheel.client.file_reloading.eval_body.call(null,inst_40192,opts);
var inst_40194 = cljs.core.next.call(null,inst_40183);
var inst_40170 = inst_40194;
var inst_40171 = null;
var inst_40172 = (0);
var inst_40173 = (0);
var state_40310__$1 = (function (){var statearr_40376 = state_40310;
(statearr_40376[(7)] = inst_40173);

(statearr_40376[(8)] = inst_40171);

(statearr_40376[(32)] = inst_40193);

(statearr_40376[(9)] = inst_40170);

(statearr_40376[(10)] = inst_40172);

return statearr_40376;
})();
var statearr_40377_40443 = state_40310__$1;
(statearr_40377_40443[(2)] = null);

(statearr_40377_40443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (45))){
var state_40310__$1 = state_40310;
var statearr_40378_40444 = state_40310__$1;
(statearr_40378_40444[(2)] = null);

(statearr_40378_40444[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (26))){
var inst_40229 = (state_40310[(26)]);
var inst_40223 = (state_40310[(19)]);
var inst_40231 = (state_40310[(23)]);
var inst_40227 = (state_40310[(24)]);
var inst_40226 = (state_40310[(25)]);
var inst_40246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40248 = (function (){var all_files = inst_40223;
var res_SINGLEQUOTE_ = inst_40226;
var res = inst_40227;
var files_not_loaded = inst_40229;
var dependencies_that_loaded = inst_40231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40246,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40247){
var map__40379 = p__40247;
var map__40379__$1 = (((((!((map__40379 == null))))?(((((map__40379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40379):map__40379);
var namespace = cljs.core.get.call(null,map__40379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40379__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40246,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40249 = cljs.core.map.call(null,inst_40248,inst_40227);
var inst_40250 = cljs.core.pr_str.call(null,inst_40249);
var inst_40251 = figwheel.client.utils.log.call(null,inst_40250);
var inst_40252 = (function (){var all_files = inst_40223;
var res_SINGLEQUOTE_ = inst_40226;
var res = inst_40227;
var files_not_loaded = inst_40229;
var dependencies_that_loaded = inst_40231;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40246,inst_40248,inst_40249,inst_40250,inst_40251,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40229,inst_40223,inst_40231,inst_40227,inst_40226,inst_40246,inst_40248,inst_40249,inst_40250,inst_40251,state_val_40311,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40253 = setTimeout(inst_40252,(10));
var state_40310__$1 = (function (){var statearr_40381 = state_40310;
(statearr_40381[(33)] = inst_40251);

(statearr_40381[(34)] = inst_40246);

return statearr_40381;
})();
var statearr_40382_40445 = state_40310__$1;
(statearr_40382_40445[(2)] = inst_40253);

(statearr_40382_40445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (16))){
var state_40310__$1 = state_40310;
var statearr_40383_40446 = state_40310__$1;
(statearr_40383_40446[(2)] = reload_dependents);

(statearr_40383_40446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (38))){
var inst_40263 = (state_40310[(16)]);
var inst_40281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40263);
var state_40310__$1 = state_40310;
var statearr_40384_40447 = state_40310__$1;
(statearr_40384_40447[(2)] = inst_40281);

(statearr_40384_40447[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (30))){
var state_40310__$1 = state_40310;
var statearr_40385_40448 = state_40310__$1;
(statearr_40385_40448[(2)] = null);

(statearr_40385_40448[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (10))){
var inst_40183 = (state_40310[(22)]);
var inst_40185 = cljs.core.chunked_seq_QMARK_.call(null,inst_40183);
var state_40310__$1 = state_40310;
if(inst_40185){
var statearr_40386_40449 = state_40310__$1;
(statearr_40386_40449[(1)] = (13));

} else {
var statearr_40387_40450 = state_40310__$1;
(statearr_40387_40450[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (18))){
var inst_40217 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
if(cljs.core.truth_(inst_40217)){
var statearr_40388_40451 = state_40310__$1;
(statearr_40388_40451[(1)] = (19));

} else {
var statearr_40389_40452 = state_40310__$1;
(statearr_40389_40452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (42))){
var state_40310__$1 = state_40310;
var statearr_40390_40453 = state_40310__$1;
(statearr_40390_40453[(2)] = null);

(statearr_40390_40453[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (37))){
var inst_40276 = (state_40310[(2)]);
var state_40310__$1 = state_40310;
var statearr_40391_40454 = state_40310__$1;
(statearr_40391_40454[(2)] = inst_40276);

(statearr_40391_40454[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40311 === (8))){
var inst_40183 = (state_40310[(22)]);
var inst_40170 = (state_40310[(9)]);
var inst_40183__$1 = cljs.core.seq.call(null,inst_40170);
var state_40310__$1 = (function (){var statearr_40392 = state_40310;
(statearr_40392[(22)] = inst_40183__$1);

return statearr_40392;
})();
if(inst_40183__$1){
var statearr_40393_40455 = state_40310__$1;
(statearr_40393_40455[(1)] = (10));

} else {
var statearr_40394_40456 = state_40310__$1;
(statearr_40394_40456[(1)] = (11));

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
});})(c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29580__auto__,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____0 = (function (){
var statearr_40395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40395[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__);

(statearr_40395[(1)] = (1));

return statearr_40395;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____1 = (function (state_40310){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_40310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e40396){if((e40396 instanceof Object)){
var ex__29584__auto__ = e40396;
var statearr_40397_40457 = state_40310;
(statearr_40397_40457[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40458 = state_40310;
state_40310 = G__40458;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__ = function(state_40310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____1.call(this,state_40310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29677__auto__ = (function (){var statearr_40398 = f__29676__auto__.call(null);
(statearr_40398[(6)] = c__29675__auto__);

return statearr_40398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__,map__40155,map__40155__$1,opts,before_jsload,on_jsload,reload_dependents,map__40156,map__40156__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29675__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40461,link){
var map__40462 = p__40461;
var map__40462__$1 = (((((!((map__40462 == null))))?(((((map__40462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40462):map__40462);
var file = cljs.core.get.call(null,map__40462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__40462,map__40462__$1,file){
return (function (p1__40459_SHARP_,p2__40460_SHARP_){
if(cljs.core._EQ_.call(null,p1__40459_SHARP_,p2__40460_SHARP_)){
return p1__40459_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__40462,map__40462__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40465){
var map__40466 = p__40465;
var map__40466__$1 = (((((!((map__40466 == null))))?(((((map__40466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40466):map__40466);
var match_length = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40464_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40464_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40468_SHARP_,p2__40469_SHARP_){
return cljs.core.assoc.call(null,p1__40468_SHARP_,cljs.core.get.call(null,p2__40469_SHARP_,key),p2__40469_SHARP_);
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
var loaded_f_datas_40470 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40470);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40470);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40471,p__40472){
var map__40473 = p__40471;
var map__40473__$1 = (((((!((map__40473 == null))))?(((((map__40473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40473):map__40473);
var on_cssload = cljs.core.get.call(null,map__40473__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40474 = p__40472;
var map__40474__$1 = (((((!((map__40474 == null))))?(((((map__40474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40474):map__40474);
var files_msg = map__40474__$1;
var files = cljs.core.get.call(null,map__40474__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1581732099145
