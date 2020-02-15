// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e41463){if((e41463 instanceof Error)){
var e = e41463;
return "Error: Unable to stringify";
} else {
throw e41463;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__41466 = arguments.length;
switch (G__41466) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__41464_SHARP_){
if(typeof p1__41464_SHARP_ === 'string'){
return p1__41464_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__41464_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41469 = arguments.length;
var i__4731__auto___41470 = (0);
while(true){
if((i__4731__auto___41470 < len__4730__auto___41469)){
args__4736__auto__.push((arguments[i__4731__auto___41470]));

var G__41471 = (i__4731__auto___41470 + (1));
i__4731__auto___41470 = G__41471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq41468){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41468));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41473 = arguments.length;
var i__4731__auto___41474 = (0);
while(true){
if((i__4731__auto___41474 < len__4730__auto___41473)){
args__4736__auto__.push((arguments[i__4731__auto___41474]));

var G__41475 = (i__4731__auto___41474 + (1));
i__4731__auto___41474 = G__41475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq41472){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41472));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41476){
var map__41477 = p__41476;
var map__41477__$1 = (((((!((map__41477 == null))))?(((((map__41477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41477):map__41477);
var message = cljs.core.get.call(null,map__41477__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41477__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29675__auto___41556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___41556,ch){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___41556,ch){
return (function (state_41528){
var state_val_41529 = (state_41528[(1)]);
if((state_val_41529 === (7))){
var inst_41524 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41530_41557 = state_41528__$1;
(statearr_41530_41557[(2)] = inst_41524);

(statearr_41530_41557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (1))){
var state_41528__$1 = state_41528;
var statearr_41531_41558 = state_41528__$1;
(statearr_41531_41558[(2)] = null);

(statearr_41531_41558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (4))){
var inst_41481 = (state_41528[(7)]);
var inst_41481__$1 = (state_41528[(2)]);
var state_41528__$1 = (function (){var statearr_41532 = state_41528;
(statearr_41532[(7)] = inst_41481__$1);

return statearr_41532;
})();
if(cljs.core.truth_(inst_41481__$1)){
var statearr_41533_41559 = state_41528__$1;
(statearr_41533_41559[(1)] = (5));

} else {
var statearr_41534_41560 = state_41528__$1;
(statearr_41534_41560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (15))){
var inst_41488 = (state_41528[(8)]);
var inst_41503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41488);
var inst_41504 = cljs.core.first.call(null,inst_41503);
var inst_41505 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41504);
var inst_41506 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41505)].join('');
var inst_41507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_41506);
var state_41528__$1 = state_41528;
var statearr_41535_41561 = state_41528__$1;
(statearr_41535_41561[(2)] = inst_41507);

(statearr_41535_41561[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (13))){
var inst_41512 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41536_41562 = state_41528__$1;
(statearr_41536_41562[(2)] = inst_41512);

(statearr_41536_41562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (6))){
var state_41528__$1 = state_41528;
var statearr_41537_41563 = state_41528__$1;
(statearr_41537_41563[(2)] = null);

(statearr_41537_41563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (17))){
var inst_41510 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41538_41564 = state_41528__$1;
(statearr_41538_41564[(2)] = inst_41510);

(statearr_41538_41564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (3))){
var inst_41526 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41528__$1,inst_41526);
} else {
if((state_val_41529 === (12))){
var inst_41487 = (state_41528[(9)]);
var inst_41501 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41487,opts);
var state_41528__$1 = state_41528;
if(inst_41501){
var statearr_41539_41565 = state_41528__$1;
(statearr_41539_41565[(1)] = (15));

} else {
var statearr_41540_41566 = state_41528__$1;
(statearr_41540_41566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (2))){
var state_41528__$1 = state_41528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41528__$1,(4),ch);
} else {
if((state_val_41529 === (11))){
var inst_41488 = (state_41528[(8)]);
var inst_41493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41494 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41488);
var inst_41495 = cljs.core.async.timeout.call(null,(1000));
var inst_41496 = [inst_41494,inst_41495];
var inst_41497 = (new cljs.core.PersistentVector(null,2,(5),inst_41493,inst_41496,null));
var state_41528__$1 = state_41528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41528__$1,(14),inst_41497);
} else {
if((state_val_41529 === (9))){
var inst_41488 = (state_41528[(8)]);
var inst_41514 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_41515 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41488);
var inst_41516 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41515);
var inst_41517 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41516)].join('');
var inst_41518 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_41517);
var state_41528__$1 = (function (){var statearr_41541 = state_41528;
(statearr_41541[(10)] = inst_41514);

return statearr_41541;
})();
var statearr_41542_41567 = state_41528__$1;
(statearr_41542_41567[(2)] = inst_41518);

(statearr_41542_41567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (5))){
var inst_41481 = (state_41528[(7)]);
var inst_41483 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41484 = (new cljs.core.PersistentArrayMap(null,2,inst_41483,null));
var inst_41485 = (new cljs.core.PersistentHashSet(null,inst_41484,null));
var inst_41486 = figwheel.client.focus_msgs.call(null,inst_41485,inst_41481);
var inst_41487 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41486);
var inst_41488 = cljs.core.first.call(null,inst_41486);
var inst_41489 = figwheel.client.autoload_QMARK_.call(null);
var state_41528__$1 = (function (){var statearr_41543 = state_41528;
(statearr_41543[(9)] = inst_41487);

(statearr_41543[(8)] = inst_41488);

return statearr_41543;
})();
if(cljs.core.truth_(inst_41489)){
var statearr_41544_41568 = state_41528__$1;
(statearr_41544_41568[(1)] = (8));

} else {
var statearr_41545_41569 = state_41528__$1;
(statearr_41545_41569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (14))){
var inst_41499 = (state_41528[(2)]);
var state_41528__$1 = state_41528;
var statearr_41546_41570 = state_41528__$1;
(statearr_41546_41570[(2)] = inst_41499);

(statearr_41546_41570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (16))){
var state_41528__$1 = state_41528;
var statearr_41547_41571 = state_41528__$1;
(statearr_41547_41571[(2)] = null);

(statearr_41547_41571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (10))){
var inst_41520 = (state_41528[(2)]);
var state_41528__$1 = (function (){var statearr_41548 = state_41528;
(statearr_41548[(11)] = inst_41520);

return statearr_41548;
})();
var statearr_41549_41572 = state_41528__$1;
(statearr_41549_41572[(2)] = null);

(statearr_41549_41572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41529 === (8))){
var inst_41487 = (state_41528[(9)]);
var inst_41491 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41487,opts);
var state_41528__$1 = state_41528;
if(cljs.core.truth_(inst_41491)){
var statearr_41550_41573 = state_41528__$1;
(statearr_41550_41573[(1)] = (11));

} else {
var statearr_41551_41574 = state_41528__$1;
(statearr_41551_41574[(1)] = (12));

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
});})(c__29675__auto___41556,ch))
;
return ((function (switch__29580__auto__,c__29675__auto___41556,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____0 = (function (){
var statearr_41552 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41552[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__);

(statearr_41552[(1)] = (1));

return statearr_41552;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____1 = (function (state_41528){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_41528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e41553){if((e41553 instanceof Object)){
var ex__29584__auto__ = e41553;
var statearr_41554_41575 = state_41528;
(statearr_41554_41575[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41576 = state_41528;
state_41528 = G__41576;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__ = function(state_41528){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____1.call(this,state_41528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29581__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___41556,ch))
})();
var state__29677__auto__ = (function (){var statearr_41555 = f__29676__auto__.call(null);
(statearr_41555[(6)] = c__29675__auto___41556);

return statearr_41555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___41556,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41577_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41577_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_41583 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41583){
return (function figwheel$client$eval_javascript_STAR__STAR_(code__$1,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41581 = true;
var _STAR_print_fn_STAR__temp_val__41582 = ((function (_STAR_print_newline_STAR__orig_val__41579,_STAR_print_fn_STAR__orig_val__41580,_STAR_print_newline_STAR__temp_val__41581,sb,base_path_41583){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__41579,_STAR_print_fn_STAR__orig_val__41580,_STAR_print_newline_STAR__temp_val__41581,sb,base_path_41583))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41581;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41582;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code__$1,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41580;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41579;
}}catch (e41578){if((e41578 instanceof Error)){
var e = e41578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41583], null));
} else {
var e = e41578;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41583))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41584){
var map__41585 = p__41584;
var map__41585__$1 = (((((!((map__41585 == null))))?(((((map__41585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41585):map__41585);
var opts = map__41585__$1;
var build_id = cljs.core.get.call(null,map__41585__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41585,map__41585__$1,opts,build_id){
return (function (p__41587){
var vec__41588 = p__41587;
var seq__41589 = cljs.core.seq.call(null,vec__41588);
var first__41590 = cljs.core.first.call(null,seq__41589);
var seq__41589__$1 = cljs.core.next.call(null,seq__41589);
var map__41591 = first__41590;
var map__41591__$1 = (((((!((map__41591 == null))))?(((((map__41591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41591):map__41591);
var msg = map__41591__$1;
var msg_name = cljs.core.get.call(null,map__41591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41589__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__41588,seq__41589,first__41590,seq__41589__$1,map__41591,map__41591__$1,msg,msg_name,_,map__41585,map__41585__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41588,seq__41589,first__41590,seq__41589__$1,map__41591,map__41591__$1,msg,msg_name,_,map__41585,map__41585__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41585,map__41585__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41593){
var vec__41594 = p__41593;
var seq__41595 = cljs.core.seq.call(null,vec__41594);
var first__41596 = cljs.core.first.call(null,seq__41595);
var seq__41595__$1 = cljs.core.next.call(null,seq__41595);
var map__41597 = first__41596;
var map__41597__$1 = (((((!((map__41597 == null))))?(((((map__41597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);
var msg = map__41597__$1;
var msg_name = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41595__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41599){
var map__41600 = p__41599;
var map__41600__$1 = (((((!((map__41600 == null))))?(((((map__41600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41600):map__41600);
var on_compile_warning = cljs.core.get.call(null,map__41600__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41600__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41600,map__41600__$1,on_compile_warning,on_compile_fail){
return (function (p__41602){
var vec__41603 = p__41602;
var seq__41604 = cljs.core.seq.call(null,vec__41603);
var first__41605 = cljs.core.first.call(null,seq__41604);
var seq__41604__$1 = cljs.core.next.call(null,seq__41604);
var map__41606 = first__41605;
var map__41606__$1 = (((((!((map__41606 == null))))?(((((map__41606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41606):map__41606);
var msg = map__41606__$1;
var msg_name = cljs.core.get.call(null,map__41606__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__41604__$1;
var pred__41608 = cljs.core._EQ_;
var expr__41609 = msg_name;
if(cljs.core.truth_(pred__41608.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41609))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41608.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41609))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41600,map__41600__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__,msg_hist,msg_names,msg){
return (function (state_41698){
var state_val_41699 = (state_41698[(1)]);
if((state_val_41699 === (7))){
var inst_41618 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41618)){
var statearr_41700_41747 = state_41698__$1;
(statearr_41700_41747[(1)] = (8));

} else {
var statearr_41701_41748 = state_41698__$1;
(statearr_41701_41748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (20))){
var inst_41692 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41702_41749 = state_41698__$1;
(statearr_41702_41749[(2)] = inst_41692);

(statearr_41702_41749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (27))){
var inst_41688 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41703_41750 = state_41698__$1;
(statearr_41703_41750[(2)] = inst_41688);

(statearr_41703_41750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (1))){
var inst_41611 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41698__$1 = state_41698;
if(cljs.core.truth_(inst_41611)){
var statearr_41704_41751 = state_41698__$1;
(statearr_41704_41751[(1)] = (2));

} else {
var statearr_41705_41752 = state_41698__$1;
(statearr_41705_41752[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (24))){
var inst_41690 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41706_41753 = state_41698__$1;
(statearr_41706_41753[(2)] = inst_41690);

(statearr_41706_41753[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (4))){
var inst_41696 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41698__$1,inst_41696);
} else {
if((state_val_41699 === (15))){
var inst_41694 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41707_41754 = state_41698__$1;
(statearr_41707_41754[(2)] = inst_41694);

(statearr_41707_41754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (21))){
var inst_41647 = (state_41698[(2)]);
var inst_41648 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41649 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41648);
var state_41698__$1 = (function (){var statearr_41708 = state_41698;
(statearr_41708[(7)] = inst_41647);

return statearr_41708;
})();
var statearr_41709_41755 = state_41698__$1;
(statearr_41709_41755[(2)] = inst_41649);

(statearr_41709_41755[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (31))){
var inst_41677 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41677){
var statearr_41710_41756 = state_41698__$1;
(statearr_41710_41756[(1)] = (34));

} else {
var statearr_41711_41757 = state_41698__$1;
(statearr_41711_41757[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (32))){
var inst_41686 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41712_41758 = state_41698__$1;
(statearr_41712_41758[(2)] = inst_41686);

(statearr_41712_41758[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (33))){
var inst_41673 = (state_41698[(2)]);
var inst_41674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41675 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41674);
var state_41698__$1 = (function (){var statearr_41713 = state_41698;
(statearr_41713[(8)] = inst_41673);

return statearr_41713;
})();
var statearr_41714_41759 = state_41698__$1;
(statearr_41714_41759[(2)] = inst_41675);

(statearr_41714_41759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (13))){
var inst_41632 = figwheel.client.heads_up.clear.call(null);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(16),inst_41632);
} else {
if((state_val_41699 === (22))){
var inst_41653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41654 = figwheel.client.heads_up.append_warning_message.call(null,inst_41653);
var state_41698__$1 = state_41698;
var statearr_41715_41760 = state_41698__$1;
(statearr_41715_41760[(2)] = inst_41654);

(statearr_41715_41760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (36))){
var inst_41684 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41716_41761 = state_41698__$1;
(statearr_41716_41761[(2)] = inst_41684);

(statearr_41716_41761[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (29))){
var inst_41664 = (state_41698[(2)]);
var inst_41665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41666 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41665);
var state_41698__$1 = (function (){var statearr_41717 = state_41698;
(statearr_41717[(9)] = inst_41664);

return statearr_41717;
})();
var statearr_41718_41762 = state_41698__$1;
(statearr_41718_41762[(2)] = inst_41666);

(statearr_41718_41762[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (6))){
var inst_41613 = (state_41698[(10)]);
var state_41698__$1 = state_41698;
var statearr_41719_41763 = state_41698__$1;
(statearr_41719_41763[(2)] = inst_41613);

(statearr_41719_41763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (28))){
var inst_41660 = (state_41698[(2)]);
var inst_41661 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41662 = figwheel.client.heads_up.display_warning.call(null,inst_41661);
var state_41698__$1 = (function (){var statearr_41720 = state_41698;
(statearr_41720[(11)] = inst_41660);

return statearr_41720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(29),inst_41662);
} else {
if((state_val_41699 === (25))){
var inst_41658 = figwheel.client.heads_up.clear.call(null);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(28),inst_41658);
} else {
if((state_val_41699 === (34))){
var inst_41679 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(37),inst_41679);
} else {
if((state_val_41699 === (17))){
var inst_41638 = (state_41698[(2)]);
var inst_41639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41640 = figwheel.client.auto_jump_to_error.call(null,opts,inst_41639);
var state_41698__$1 = (function (){var statearr_41721 = state_41698;
(statearr_41721[(12)] = inst_41638);

return statearr_41721;
})();
var statearr_41722_41764 = state_41698__$1;
(statearr_41722_41764[(2)] = inst_41640);

(statearr_41722_41764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (3))){
var inst_41630 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41630){
var statearr_41723_41765 = state_41698__$1;
(statearr_41723_41765[(1)] = (13));

} else {
var statearr_41724_41766 = state_41698__$1;
(statearr_41724_41766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (12))){
var inst_41626 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41725_41767 = state_41698__$1;
(statearr_41725_41767[(2)] = inst_41626);

(statearr_41725_41767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (2))){
var inst_41613 = (state_41698[(10)]);
var inst_41613__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41698__$1 = (function (){var statearr_41726 = state_41698;
(statearr_41726[(10)] = inst_41613__$1);

return statearr_41726;
})();
if(cljs.core.truth_(inst_41613__$1)){
var statearr_41727_41768 = state_41698__$1;
(statearr_41727_41768[(1)] = (5));

} else {
var statearr_41728_41769 = state_41698__$1;
(statearr_41728_41769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (23))){
var inst_41656 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41656){
var statearr_41729_41770 = state_41698__$1;
(statearr_41729_41770[(1)] = (25));

} else {
var statearr_41730_41771 = state_41698__$1;
(statearr_41730_41771[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (35))){
var state_41698__$1 = state_41698;
var statearr_41731_41772 = state_41698__$1;
(statearr_41731_41772[(2)] = null);

(statearr_41731_41772[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (19))){
var inst_41651 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41651){
var statearr_41732_41773 = state_41698__$1;
(statearr_41732_41773[(1)] = (22));

} else {
var statearr_41733_41774 = state_41698__$1;
(statearr_41733_41774[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (11))){
var inst_41622 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41734_41775 = state_41698__$1;
(statearr_41734_41775[(2)] = inst_41622);

(statearr_41734_41775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (9))){
var inst_41624 = figwheel.client.heads_up.clear.call(null);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(12),inst_41624);
} else {
if((state_val_41699 === (5))){
var inst_41615 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41698__$1 = state_41698;
var statearr_41735_41776 = state_41698__$1;
(statearr_41735_41776[(2)] = inst_41615);

(statearr_41735_41776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (14))){
var inst_41642 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41642){
var statearr_41736_41777 = state_41698__$1;
(statearr_41736_41777[(1)] = (18));

} else {
var statearr_41737_41778 = state_41698__$1;
(statearr_41737_41778[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (26))){
var inst_41668 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41698__$1 = state_41698;
if(inst_41668){
var statearr_41738_41779 = state_41698__$1;
(statearr_41738_41779[(1)] = (30));

} else {
var statearr_41739_41780 = state_41698__$1;
(statearr_41739_41780[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (16))){
var inst_41634 = (state_41698[(2)]);
var inst_41635 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41636 = figwheel.client.heads_up.display_exception.call(null,inst_41635);
var state_41698__$1 = (function (){var statearr_41740 = state_41698;
(statearr_41740[(13)] = inst_41634);

return statearr_41740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(17),inst_41636);
} else {
if((state_val_41699 === (30))){
var inst_41670 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41671 = figwheel.client.heads_up.display_warning.call(null,inst_41670);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(33),inst_41671);
} else {
if((state_val_41699 === (10))){
var inst_41628 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41741_41781 = state_41698__$1;
(statearr_41741_41781[(2)] = inst_41628);

(statearr_41741_41781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (18))){
var inst_41644 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41645 = figwheel.client.heads_up.display_exception.call(null,inst_41644);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(21),inst_41645);
} else {
if((state_val_41699 === (37))){
var inst_41681 = (state_41698[(2)]);
var state_41698__$1 = state_41698;
var statearr_41742_41782 = state_41698__$1;
(statearr_41742_41782[(2)] = inst_41681);

(statearr_41742_41782[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41699 === (8))){
var inst_41620 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41698__$1 = state_41698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41698__$1,(11),inst_41620);
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
});})(c__29675__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29580__auto__,c__29675__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____0 = (function (){
var statearr_41743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41743[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__);

(statearr_41743[(1)] = (1));

return statearr_41743;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____1 = (function (state_41698){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_41698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e41744){if((e41744 instanceof Object)){
var ex__29584__auto__ = e41744;
var statearr_41745_41783 = state_41698;
(statearr_41745_41783[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41784 = state_41698;
state_41698 = G__41784;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__ = function(state_41698){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____1.call(this,state_41698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__,msg_hist,msg_names,msg))
})();
var state__29677__auto__ = (function (){var statearr_41746 = f__29676__auto__.call(null);
(statearr_41746[(6)] = c__29675__auto__);

return statearr_41746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__,msg_hist,msg_names,msg))
);

return c__29675__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29675__auto___41813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___41813,ch){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___41813,ch){
return (function (state_41799){
var state_val_41800 = (state_41799[(1)]);
if((state_val_41800 === (1))){
var state_41799__$1 = state_41799;
var statearr_41801_41814 = state_41799__$1;
(statearr_41801_41814[(2)] = null);

(statearr_41801_41814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (2))){
var state_41799__$1 = state_41799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41799__$1,(4),ch);
} else {
if((state_val_41800 === (3))){
var inst_41797 = (state_41799[(2)]);
var state_41799__$1 = state_41799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41799__$1,inst_41797);
} else {
if((state_val_41800 === (4))){
var inst_41787 = (state_41799[(7)]);
var inst_41787__$1 = (state_41799[(2)]);
var state_41799__$1 = (function (){var statearr_41802 = state_41799;
(statearr_41802[(7)] = inst_41787__$1);

return statearr_41802;
})();
if(cljs.core.truth_(inst_41787__$1)){
var statearr_41803_41815 = state_41799__$1;
(statearr_41803_41815[(1)] = (5));

} else {
var statearr_41804_41816 = state_41799__$1;
(statearr_41804_41816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (5))){
var inst_41787 = (state_41799[(7)]);
var inst_41789 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41787);
var state_41799__$1 = state_41799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41799__$1,(8),inst_41789);
} else {
if((state_val_41800 === (6))){
var state_41799__$1 = state_41799;
var statearr_41805_41817 = state_41799__$1;
(statearr_41805_41817[(2)] = null);

(statearr_41805_41817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (7))){
var inst_41795 = (state_41799[(2)]);
var state_41799__$1 = state_41799;
var statearr_41806_41818 = state_41799__$1;
(statearr_41806_41818[(2)] = inst_41795);

(statearr_41806_41818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41800 === (8))){
var inst_41791 = (state_41799[(2)]);
var state_41799__$1 = (function (){var statearr_41807 = state_41799;
(statearr_41807[(8)] = inst_41791);

return statearr_41807;
})();
var statearr_41808_41819 = state_41799__$1;
(statearr_41808_41819[(2)] = null);

(statearr_41808_41819[(1)] = (2));


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
});})(c__29675__auto___41813,ch))
;
return ((function (switch__29580__auto__,c__29675__auto___41813,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29581__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29581__auto____0 = (function (){
var statearr_41809 = [null,null,null,null,null,null,null,null,null];
(statearr_41809[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29581__auto__);

(statearr_41809[(1)] = (1));

return statearr_41809;
});
var figwheel$client$heads_up_plugin_$_state_machine__29581__auto____1 = (function (state_41799){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_41799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e41810){if((e41810 instanceof Object)){
var ex__29584__auto__ = e41810;
var statearr_41811_41820 = state_41799;
(statearr_41811_41820[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41821 = state_41799;
state_41799 = G__41821;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29581__auto__ = function(state_41799){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29581__auto____1.call(this,state_41799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29581__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29581__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___41813,ch))
})();
var state__29677__auto__ = (function (){var statearr_41812 = f__29676__auto__.call(null);
(statearr_41812[(6)] = c__29675__auto___41813);

return statearr_41812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___41813,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__){
return (function (state_41827){
var state_val_41828 = (state_41827[(1)]);
if((state_val_41828 === (1))){
var inst_41822 = cljs.core.async.timeout.call(null,(3000));
var state_41827__$1 = state_41827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41827__$1,(2),inst_41822);
} else {
if((state_val_41828 === (2))){
var inst_41824 = (state_41827[(2)]);
var inst_41825 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41827__$1 = (function (){var statearr_41829 = state_41827;
(statearr_41829[(7)] = inst_41824);

return statearr_41829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41827__$1,inst_41825);
} else {
return null;
}
}
});})(c__29675__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____0 = (function (){
var statearr_41830 = [null,null,null,null,null,null,null,null];
(statearr_41830[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__);

(statearr_41830[(1)] = (1));

return statearr_41830;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____1 = (function (state_41827){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_41827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e41831){if((e41831 instanceof Object)){
var ex__29584__auto__ = e41831;
var statearr_41832_41834 = state_41827;
(statearr_41832_41834[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41835 = state_41827;
state_41827 = G__41835;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__ = function(state_41827){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____1.call(this,state_41827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29581__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__))
})();
var state__29677__auto__ = (function (){var statearr_41833 = f__29676__auto__.call(null);
(statearr_41833[(6)] = c__29675__auto__);

return statearr_41833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__))
);

return c__29675__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__,figwheel_version,temp__5735__auto__){
return (function (state_41842){
var state_val_41843 = (state_41842[(1)]);
if((state_val_41843 === (1))){
var inst_41836 = cljs.core.async.timeout.call(null,(2000));
var state_41842__$1 = state_41842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41842__$1,(2),inst_41836);
} else {
if((state_val_41843 === (2))){
var inst_41838 = (state_41842[(2)]);
var inst_41839 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_41840 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_41839);
var state_41842__$1 = (function (){var statearr_41844 = state_41842;
(statearr_41844[(7)] = inst_41838);

return statearr_41844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41842__$1,inst_41840);
} else {
return null;
}
}
});})(c__29675__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____0 = (function (){
var statearr_41845 = [null,null,null,null,null,null,null,null];
(statearr_41845[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__);

(statearr_41845[(1)] = (1));

return statearr_41845;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____1 = (function (state_41842){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_41842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e41846){if((e41846 instanceof Object)){
var ex__29584__auto__ = e41846;
var statearr_41847_41849 = state_41842;
(statearr_41847_41849[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41850 = state_41842;
state_41842 = G__41850;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__ = function(state_41842){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____1.call(this,state_41842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__,figwheel_version,temp__5735__auto__))
})();
var state__29677__auto__ = (function (){var statearr_41848 = f__29676__auto__.call(null);
(statearr_41848[(6)] = c__29675__auto__);

return statearr_41848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__,figwheel_version,temp__5735__auto__))
);

return c__29675__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__41851){
var map__41852 = p__41851;
var map__41852__$1 = (((((!((map__41852 == null))))?(((((map__41852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41852):map__41852);
var file = cljs.core.get.call(null,map__41852__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41852__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__41854 = "";
var G__41854__$1 = (cljs.core.truth_(file)?[G__41854,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__41854);
var G__41854__$2 = (cljs.core.truth_(line)?[G__41854__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__41854__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__41854__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__41854__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41855){
var map__41856 = p__41855;
var map__41856__$1 = (((((!((map__41856 == null))))?(((((map__41856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41856):map__41856);
var ed = map__41856__$1;
var exception_data = cljs.core.get.call(null,map__41856__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41856__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_41859 = (function (){var G__41858 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41858)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__41858;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_41859);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41860){
var map__41861 = p__41860;
var map__41861__$1 = (((((!((map__41861 == null))))?(((((map__41861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41861):map__41861);
var w = map__41861__$1;
var message = cljs.core.get.call(null,map__41861__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41863 = cljs.core.seq.call(null,plugins);
var chunk__41864 = null;
var count__41865 = (0);
var i__41866 = (0);
while(true){
if((i__41866 < count__41865)){
var vec__41873 = cljs.core._nth.call(null,chunk__41864,i__41866);
var k = cljs.core.nth.call(null,vec__41873,(0),null);
var plugin = cljs.core.nth.call(null,vec__41873,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41879 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41863,chunk__41864,count__41865,i__41866,pl_41879,vec__41873,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41879.call(null,msg_hist);
});})(seq__41863,chunk__41864,count__41865,i__41866,pl_41879,vec__41873,k,plugin))
);
} else {
}


var G__41880 = seq__41863;
var G__41881 = chunk__41864;
var G__41882 = count__41865;
var G__41883 = (i__41866 + (1));
seq__41863 = G__41880;
chunk__41864 = G__41881;
count__41865 = G__41882;
i__41866 = G__41883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41863);
if(temp__5735__auto__){
var seq__41863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41863__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41863__$1);
var G__41884 = cljs.core.chunk_rest.call(null,seq__41863__$1);
var G__41885 = c__4550__auto__;
var G__41886 = cljs.core.count.call(null,c__4550__auto__);
var G__41887 = (0);
seq__41863 = G__41884;
chunk__41864 = G__41885;
count__41865 = G__41886;
i__41866 = G__41887;
continue;
} else {
var vec__41876 = cljs.core.first.call(null,seq__41863__$1);
var k = cljs.core.nth.call(null,vec__41876,(0),null);
var plugin = cljs.core.nth.call(null,vec__41876,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41888 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41863,chunk__41864,count__41865,i__41866,pl_41888,vec__41876,k,plugin,seq__41863__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41888.call(null,msg_hist);
});})(seq__41863,chunk__41864,count__41865,i__41866,pl_41888,vec__41876,k,plugin,seq__41863__$1,temp__5735__auto__))
);
} else {
}


var G__41889 = cljs.core.next.call(null,seq__41863__$1);
var G__41890 = null;
var G__41891 = (0);
var G__41892 = (0);
seq__41863 = G__41889;
chunk__41864 = G__41890;
count__41865 = G__41891;
i__41866 = G__41892;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__41894 = arguments.length;
switch (G__41894) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__41895_41900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__41896_41901 = null;
var count__41897_41902 = (0);
var i__41898_41903 = (0);
while(true){
if((i__41898_41903 < count__41897_41902)){
var msg_41904 = cljs.core._nth.call(null,chunk__41896_41901,i__41898_41903);
figwheel.client.socket.handle_incoming_message.call(null,msg_41904);


var G__41905 = seq__41895_41900;
var G__41906 = chunk__41896_41901;
var G__41907 = count__41897_41902;
var G__41908 = (i__41898_41903 + (1));
seq__41895_41900 = G__41905;
chunk__41896_41901 = G__41906;
count__41897_41902 = G__41907;
i__41898_41903 = G__41908;
continue;
} else {
var temp__5735__auto___41909 = cljs.core.seq.call(null,seq__41895_41900);
if(temp__5735__auto___41909){
var seq__41895_41910__$1 = temp__5735__auto___41909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41895_41910__$1)){
var c__4550__auto___41911 = cljs.core.chunk_first.call(null,seq__41895_41910__$1);
var G__41912 = cljs.core.chunk_rest.call(null,seq__41895_41910__$1);
var G__41913 = c__4550__auto___41911;
var G__41914 = cljs.core.count.call(null,c__4550__auto___41911);
var G__41915 = (0);
seq__41895_41900 = G__41912;
chunk__41896_41901 = G__41913;
count__41897_41902 = G__41914;
i__41898_41903 = G__41915;
continue;
} else {
var msg_41916 = cljs.core.first.call(null,seq__41895_41910__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_41916);


var G__41917 = cljs.core.next.call(null,seq__41895_41910__$1);
var G__41918 = null;
var G__41919 = (0);
var G__41920 = (0);
seq__41895_41900 = G__41917;
chunk__41896_41901 = G__41918;
count__41897_41902 = G__41919;
i__41898_41903 = G__41920;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41925 = arguments.length;
var i__4731__auto___41926 = (0);
while(true){
if((i__4731__auto___41926 < len__4730__auto___41925)){
args__4736__auto__.push((arguments[i__4731__auto___41926]));

var G__41927 = (i__4731__auto___41926 + (1));
i__4731__auto___41926 = G__41927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41922){
var map__41923 = p__41922;
var map__41923__$1 = (((((!((map__41923 == null))))?(((((map__41923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41923):map__41923);
var opts = map__41923__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41921){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41921));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41928){if((e41928 instanceof Error)){
var e = e41928;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41928;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__41929){
var map__41930 = p__41929;
var map__41930__$1 = (((((!((map__41930 == null))))?(((((map__41930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41930):map__41930);
var msg_name = cljs.core.get.call(null,map__41930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1581732100395
