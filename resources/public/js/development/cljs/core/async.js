// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36594 = arguments.length;
switch (G__36594) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36595 = (function (f,blockable,meta36596){
this.f = f;
this.blockable = blockable;
this.meta36596 = meta36596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36597,meta36596__$1){
var self__ = this;
var _36597__$1 = this;
return (new cljs.core.async.t_cljs$core$async36595(self__.f,self__.blockable,meta36596__$1));
});

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36597){
var self__ = this;
var _36597__$1 = this;
return self__.meta36596;
});

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async36595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36596","meta36596",-225893379,null)], null);
});

cljs.core.async.t_cljs$core$async36595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36595";

cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36595");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36595.
 */
cljs.core.async.__GT_t_cljs$core$async36595 = (function cljs$core$async$__GT_t_cljs$core$async36595(f__$1,blockable__$1,meta36596){
return (new cljs.core.async.t_cljs$core$async36595(f__$1,blockable__$1,meta36596));
});

}

return (new cljs.core.async.t_cljs$core$async36595(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__36601 = arguments.length;
switch (G__36601) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36604 = arguments.length;
switch (G__36604) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__36607 = arguments.length;
switch (G__36607) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36609 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36609);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36609,ret){
return (function (){
return fn1.call(null,val_36609);
});})(val_36609,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36611 = arguments.length;
switch (G__36611) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___36613 = n;
var x_36614 = (0);
while(true){
if((x_36614 < n__4607__auto___36613)){
(a[x_36614] = (0));

var G__36615 = (x_36614 + (1));
x_36614 = G__36615;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36616 = (i + (1));
i = G__36616;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36617 = (function (flag,meta36618){
this.flag = flag;
this.meta36618 = meta36618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36619,meta36618__$1){
var self__ = this;
var _36619__$1 = this;
return (new cljs.core.async.t_cljs$core$async36617(self__.flag,meta36618__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36619){
var self__ = this;
var _36619__$1 = this;
return self__.meta36618;
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36618","meta36618",-1649643436,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async36617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36617";

cljs.core.async.t_cljs$core$async36617.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36617");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36617.
 */
cljs.core.async.__GT_t_cljs$core$async36617 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async36617(flag__$1,meta36618){
return (new cljs.core.async.t_cljs$core$async36617(flag__$1,meta36618));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async36617(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36620 = (function (flag,cb,meta36621){
this.flag = flag;
this.cb = cb;
this.meta36621 = meta36621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36622,meta36621__$1){
var self__ = this;
var _36622__$1 = this;
return (new cljs.core.async.t_cljs$core$async36620(self__.flag,self__.cb,meta36621__$1));
});

cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36622){
var self__ = this;
var _36622__$1 = this;
return self__.meta36621;
});

cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async36620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async36620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36621","meta36621",1410364450,null)], null);
});

cljs.core.async.t_cljs$core$async36620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36620";

cljs.core.async.t_cljs$core$async36620.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async36620");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36620.
 */
cljs.core.async.__GT_t_cljs$core$async36620 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async36620(flag__$1,cb__$1,meta36621){
return (new cljs.core.async.t_cljs$core$async36620(flag__$1,cb__$1,meta36621));
});

}

return (new cljs.core.async.t_cljs$core$async36620(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36623_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36623_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36624_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36624_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36625 = (i + (1));
i = G__36625;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36631 = arguments.length;
var i__4731__auto___36632 = (0);
while(true){
if((i__4731__auto___36632 < len__4730__auto___36631)){
args__4736__auto__.push((arguments[i__4731__auto___36632]));

var G__36633 = (i__4731__auto___36632 + (1));
i__4731__auto___36632 = G__36633;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36628){
var map__36629 = p__36628;
var map__36629__$1 = (((((!((map__36629 == null))))?(((((map__36629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36629):map__36629);
var opts = map__36629__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36626){
var G__36627 = cljs.core.first.call(null,seq36626);
var seq36626__$1 = cljs.core.next.call(null,seq36626);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36627,seq36626__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__36635 = arguments.length;
switch (G__36635) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29675__auto___36681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___36681){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___36681){
return (function (state_36659){
var state_val_36660 = (state_36659[(1)]);
if((state_val_36660 === (7))){
var inst_36655 = (state_36659[(2)]);
var state_36659__$1 = state_36659;
var statearr_36661_36682 = state_36659__$1;
(statearr_36661_36682[(2)] = inst_36655);

(statearr_36661_36682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (1))){
var state_36659__$1 = state_36659;
var statearr_36662_36683 = state_36659__$1;
(statearr_36662_36683[(2)] = null);

(statearr_36662_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (4))){
var inst_36638 = (state_36659[(7)]);
var inst_36638__$1 = (state_36659[(2)]);
var inst_36639 = (inst_36638__$1 == null);
var state_36659__$1 = (function (){var statearr_36663 = state_36659;
(statearr_36663[(7)] = inst_36638__$1);

return statearr_36663;
})();
if(cljs.core.truth_(inst_36639)){
var statearr_36664_36684 = state_36659__$1;
(statearr_36664_36684[(1)] = (5));

} else {
var statearr_36665_36685 = state_36659__$1;
(statearr_36665_36685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (13))){
var state_36659__$1 = state_36659;
var statearr_36666_36686 = state_36659__$1;
(statearr_36666_36686[(2)] = null);

(statearr_36666_36686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (6))){
var inst_36638 = (state_36659[(7)]);
var state_36659__$1 = state_36659;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36659__$1,(11),to,inst_36638);
} else {
if((state_val_36660 === (3))){
var inst_36657 = (state_36659[(2)]);
var state_36659__$1 = state_36659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36659__$1,inst_36657);
} else {
if((state_val_36660 === (12))){
var state_36659__$1 = state_36659;
var statearr_36667_36687 = state_36659__$1;
(statearr_36667_36687[(2)] = null);

(statearr_36667_36687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (2))){
var state_36659__$1 = state_36659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36659__$1,(4),from);
} else {
if((state_val_36660 === (11))){
var inst_36648 = (state_36659[(2)]);
var state_36659__$1 = state_36659;
if(cljs.core.truth_(inst_36648)){
var statearr_36668_36688 = state_36659__$1;
(statearr_36668_36688[(1)] = (12));

} else {
var statearr_36669_36689 = state_36659__$1;
(statearr_36669_36689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (9))){
var state_36659__$1 = state_36659;
var statearr_36670_36690 = state_36659__$1;
(statearr_36670_36690[(2)] = null);

(statearr_36670_36690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (5))){
var state_36659__$1 = state_36659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36671_36691 = state_36659__$1;
(statearr_36671_36691[(1)] = (8));

} else {
var statearr_36672_36692 = state_36659__$1;
(statearr_36672_36692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (14))){
var inst_36653 = (state_36659[(2)]);
var state_36659__$1 = state_36659;
var statearr_36673_36693 = state_36659__$1;
(statearr_36673_36693[(2)] = inst_36653);

(statearr_36673_36693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (10))){
var inst_36645 = (state_36659[(2)]);
var state_36659__$1 = state_36659;
var statearr_36674_36694 = state_36659__$1;
(statearr_36674_36694[(2)] = inst_36645);

(statearr_36674_36694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36660 === (8))){
var inst_36642 = cljs.core.async.close_BANG_.call(null,to);
var state_36659__$1 = state_36659;
var statearr_36675_36695 = state_36659__$1;
(statearr_36675_36695[(2)] = inst_36642);

(statearr_36675_36695[(1)] = (10));


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
});})(c__29675__auto___36681))
;
return ((function (switch__29580__auto__,c__29675__auto___36681){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_36676 = [null,null,null,null,null,null,null,null];
(statearr_36676[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_36676[(1)] = (1));

return statearr_36676;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_36659){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36677){if((e36677 instanceof Object)){
var ex__29584__auto__ = e36677;
var statearr_36678_36696 = state_36659;
(statearr_36678_36696[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36697 = state_36659;
state_36659 = G__36697;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_36659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_36659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___36681))
})();
var state__29677__auto__ = (function (){var statearr_36679 = f__29676__auto__.call(null);
(statearr_36679[(6)] = c__29675__auto___36681);

return statearr_36679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___36681))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36698){
var vec__36699 = p__36698;
var v = cljs.core.nth.call(null,vec__36699,(0),null);
var p = cljs.core.nth.call(null,vec__36699,(1),null);
var job = vec__36699;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29675__auto___36870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results){
return (function (state_36706){
var state_val_36707 = (state_36706[(1)]);
if((state_val_36707 === (1))){
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36706__$1,(2),res,v);
} else {
if((state_val_36707 === (2))){
var inst_36703 = (state_36706[(2)]);
var inst_36704 = cljs.core.async.close_BANG_.call(null,res);
var state_36706__$1 = (function (){var statearr_36708 = state_36706;
(statearr_36708[(7)] = inst_36703);

return statearr_36708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36706__$1,inst_36704);
} else {
return null;
}
}
});})(c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results))
;
return ((function (switch__29580__auto__,c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_36709 = [null,null,null,null,null,null,null,null];
(statearr_36709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__);

(statearr_36709[(1)] = (1));

return statearr_36709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1 = (function (state_36706){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36710){if((e36710 instanceof Object)){
var ex__29584__auto__ = e36710;
var statearr_36711_36871 = state_36706;
(statearr_36711_36871[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36872 = state_36706;
state_36706 = G__36872;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = function(state_36706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1.call(this,state_36706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results))
})();
var state__29677__auto__ = (function (){var statearr_36712 = f__29676__auto__.call(null);
(statearr_36712[(6)] = c__29675__auto___36870);

return statearr_36712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___36870,res,vec__36699,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36713){
var vec__36714 = p__36713;
var v = cljs.core.nth.call(null,vec__36714,(0),null);
var p = cljs.core.nth.call(null,vec__36714,(1),null);
var job = vec__36714;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___36873 = n;
var __36874 = (0);
while(true){
if((__36874 < n__4607__auto___36873)){
var G__36717_36875 = type;
var G__36717_36876__$1 = (((G__36717_36875 instanceof cljs.core.Keyword))?G__36717_36875.fqn:null);
switch (G__36717_36876__$1) {
case "compute":
var c__29675__auto___36878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36874,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (__36874,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function (state_36730){
var state_val_36731 = (state_36730[(1)]);
if((state_val_36731 === (1))){
var state_36730__$1 = state_36730;
var statearr_36732_36879 = state_36730__$1;
(statearr_36732_36879[(2)] = null);

(statearr_36732_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (2))){
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36730__$1,(4),jobs);
} else {
if((state_val_36731 === (3))){
var inst_36728 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36730__$1,inst_36728);
} else {
if((state_val_36731 === (4))){
var inst_36720 = (state_36730[(2)]);
var inst_36721 = process.call(null,inst_36720);
var state_36730__$1 = state_36730;
if(cljs.core.truth_(inst_36721)){
var statearr_36733_36880 = state_36730__$1;
(statearr_36733_36880[(1)] = (5));

} else {
var statearr_36734_36881 = state_36730__$1;
(statearr_36734_36881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (5))){
var state_36730__$1 = state_36730;
var statearr_36735_36882 = state_36730__$1;
(statearr_36735_36882[(2)] = null);

(statearr_36735_36882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (6))){
var state_36730__$1 = state_36730;
var statearr_36736_36883 = state_36730__$1;
(statearr_36736_36883[(2)] = null);

(statearr_36736_36883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36731 === (7))){
var inst_36726 = (state_36730[(2)]);
var state_36730__$1 = state_36730;
var statearr_36737_36884 = state_36730__$1;
(statearr_36737_36884[(2)] = inst_36726);

(statearr_36737_36884[(1)] = (3));


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
});})(__36874,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
;
return ((function (__36874,switch__29580__auto__,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_36738 = [null,null,null,null,null,null,null];
(statearr_36738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__);

(statearr_36738[(1)] = (1));

return statearr_36738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1 = (function (state_36730){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36739){if((e36739 instanceof Object)){
var ex__29584__auto__ = e36739;
var statearr_36740_36885 = state_36730;
(statearr_36740_36885[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36886 = state_36730;
state_36730 = G__36886;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = function(state_36730){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1.call(this,state_36730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__;
})()
;})(__36874,switch__29580__auto__,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
})();
var state__29677__auto__ = (function (){var statearr_36741 = f__29676__auto__.call(null);
(statearr_36741[(6)] = c__29675__auto___36878);

return statearr_36741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(__36874,c__29675__auto___36878,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
);


break;
case "async":
var c__29675__auto___36887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36874,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (__36874,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function (state_36754){
var state_val_36755 = (state_36754[(1)]);
if((state_val_36755 === (1))){
var state_36754__$1 = state_36754;
var statearr_36756_36888 = state_36754__$1;
(statearr_36756_36888[(2)] = null);

(statearr_36756_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (2))){
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36754__$1,(4),jobs);
} else {
if((state_val_36755 === (3))){
var inst_36752 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36754__$1,inst_36752);
} else {
if((state_val_36755 === (4))){
var inst_36744 = (state_36754[(2)]);
var inst_36745 = async.call(null,inst_36744);
var state_36754__$1 = state_36754;
if(cljs.core.truth_(inst_36745)){
var statearr_36757_36889 = state_36754__$1;
(statearr_36757_36889[(1)] = (5));

} else {
var statearr_36758_36890 = state_36754__$1;
(statearr_36758_36890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (5))){
var state_36754__$1 = state_36754;
var statearr_36759_36891 = state_36754__$1;
(statearr_36759_36891[(2)] = null);

(statearr_36759_36891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (6))){
var state_36754__$1 = state_36754;
var statearr_36760_36892 = state_36754__$1;
(statearr_36760_36892[(2)] = null);

(statearr_36760_36892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36755 === (7))){
var inst_36750 = (state_36754[(2)]);
var state_36754__$1 = state_36754;
var statearr_36761_36893 = state_36754__$1;
(statearr_36761_36893[(2)] = inst_36750);

(statearr_36761_36893[(1)] = (3));


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
});})(__36874,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
;
return ((function (__36874,switch__29580__auto__,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_36762 = [null,null,null,null,null,null,null];
(statearr_36762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__);

(statearr_36762[(1)] = (1));

return statearr_36762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1 = (function (state_36754){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36763){if((e36763 instanceof Object)){
var ex__29584__auto__ = e36763;
var statearr_36764_36894 = state_36754;
(statearr_36764_36894[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36895 = state_36754;
state_36754 = G__36895;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = function(state_36754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1.call(this,state_36754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__;
})()
;})(__36874,switch__29580__auto__,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
})();
var state__29677__auto__ = (function (){var statearr_36765 = f__29676__auto__.call(null);
(statearr_36765[(6)] = c__29675__auto___36887);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(__36874,c__29675__auto___36887,G__36717_36875,G__36717_36876__$1,n__4607__auto___36873,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36717_36876__$1)].join('')));

}

var G__36896 = (__36874 + (1));
__36874 = G__36896;
continue;
} else {
}
break;
}

var c__29675__auto___36897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___36897,jobs,results,process,async){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___36897,jobs,results,process,async){
return (function (state_36787){
var state_val_36788 = (state_36787[(1)]);
if((state_val_36788 === (7))){
var inst_36783 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
var statearr_36789_36898 = state_36787__$1;
(statearr_36789_36898[(2)] = inst_36783);

(statearr_36789_36898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (1))){
var state_36787__$1 = state_36787;
var statearr_36790_36899 = state_36787__$1;
(statearr_36790_36899[(2)] = null);

(statearr_36790_36899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (4))){
var inst_36768 = (state_36787[(7)]);
var inst_36768__$1 = (state_36787[(2)]);
var inst_36769 = (inst_36768__$1 == null);
var state_36787__$1 = (function (){var statearr_36791 = state_36787;
(statearr_36791[(7)] = inst_36768__$1);

return statearr_36791;
})();
if(cljs.core.truth_(inst_36769)){
var statearr_36792_36900 = state_36787__$1;
(statearr_36792_36900[(1)] = (5));

} else {
var statearr_36793_36901 = state_36787__$1;
(statearr_36793_36901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (6))){
var inst_36773 = (state_36787[(8)]);
var inst_36768 = (state_36787[(7)]);
var inst_36773__$1 = cljs.core.async.chan.call(null,(1));
var inst_36774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36775 = [inst_36768,inst_36773__$1];
var inst_36776 = (new cljs.core.PersistentVector(null,2,(5),inst_36774,inst_36775,null));
var state_36787__$1 = (function (){var statearr_36794 = state_36787;
(statearr_36794[(8)] = inst_36773__$1);

return statearr_36794;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36787__$1,(8),jobs,inst_36776);
} else {
if((state_val_36788 === (3))){
var inst_36785 = (state_36787[(2)]);
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36787__$1,inst_36785);
} else {
if((state_val_36788 === (2))){
var state_36787__$1 = state_36787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36787__$1,(4),from);
} else {
if((state_val_36788 === (9))){
var inst_36780 = (state_36787[(2)]);
var state_36787__$1 = (function (){var statearr_36795 = state_36787;
(statearr_36795[(9)] = inst_36780);

return statearr_36795;
})();
var statearr_36796_36902 = state_36787__$1;
(statearr_36796_36902[(2)] = null);

(statearr_36796_36902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (5))){
var inst_36771 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36787__$1 = state_36787;
var statearr_36797_36903 = state_36787__$1;
(statearr_36797_36903[(2)] = inst_36771);

(statearr_36797_36903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36788 === (8))){
var inst_36773 = (state_36787[(8)]);
var inst_36778 = (state_36787[(2)]);
var state_36787__$1 = (function (){var statearr_36798 = state_36787;
(statearr_36798[(10)] = inst_36778);

return statearr_36798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36787__$1,(9),results,inst_36773);
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
});})(c__29675__auto___36897,jobs,results,process,async))
;
return ((function (switch__29580__auto__,c__29675__auto___36897,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_36799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__);

(statearr_36799[(1)] = (1));

return statearr_36799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1 = (function (state_36787){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36800){if((e36800 instanceof Object)){
var ex__29584__auto__ = e36800;
var statearr_36801_36904 = state_36787;
(statearr_36801_36904[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_36787;
state_36787 = G__36905;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = function(state_36787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1.call(this,state_36787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___36897,jobs,results,process,async))
})();
var state__29677__auto__ = (function (){var statearr_36802 = f__29676__auto__.call(null);
(statearr_36802[(6)] = c__29675__auto___36897);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___36897,jobs,results,process,async))
);


var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__,jobs,results,process,async){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__,jobs,results,process,async){
return (function (state_36840){
var state_val_36841 = (state_36840[(1)]);
if((state_val_36841 === (7))){
var inst_36836 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
var statearr_36842_36906 = state_36840__$1;
(statearr_36842_36906[(2)] = inst_36836);

(statearr_36842_36906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (20))){
var state_36840__$1 = state_36840;
var statearr_36843_36907 = state_36840__$1;
(statearr_36843_36907[(2)] = null);

(statearr_36843_36907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (1))){
var state_36840__$1 = state_36840;
var statearr_36844_36908 = state_36840__$1;
(statearr_36844_36908[(2)] = null);

(statearr_36844_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (4))){
var inst_36805 = (state_36840[(7)]);
var inst_36805__$1 = (state_36840[(2)]);
var inst_36806 = (inst_36805__$1 == null);
var state_36840__$1 = (function (){var statearr_36845 = state_36840;
(statearr_36845[(7)] = inst_36805__$1);

return statearr_36845;
})();
if(cljs.core.truth_(inst_36806)){
var statearr_36846_36909 = state_36840__$1;
(statearr_36846_36909[(1)] = (5));

} else {
var statearr_36847_36910 = state_36840__$1;
(statearr_36847_36910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (15))){
var inst_36818 = (state_36840[(8)]);
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36840__$1,(18),to,inst_36818);
} else {
if((state_val_36841 === (21))){
var inst_36831 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
var statearr_36848_36911 = state_36840__$1;
(statearr_36848_36911[(2)] = inst_36831);

(statearr_36848_36911[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (13))){
var inst_36833 = (state_36840[(2)]);
var state_36840__$1 = (function (){var statearr_36849 = state_36840;
(statearr_36849[(9)] = inst_36833);

return statearr_36849;
})();
var statearr_36850_36912 = state_36840__$1;
(statearr_36850_36912[(2)] = null);

(statearr_36850_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (6))){
var inst_36805 = (state_36840[(7)]);
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36840__$1,(11),inst_36805);
} else {
if((state_val_36841 === (17))){
var inst_36826 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
if(cljs.core.truth_(inst_36826)){
var statearr_36851_36913 = state_36840__$1;
(statearr_36851_36913[(1)] = (19));

} else {
var statearr_36852_36914 = state_36840__$1;
(statearr_36852_36914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (3))){
var inst_36838 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36840__$1,inst_36838);
} else {
if((state_val_36841 === (12))){
var inst_36815 = (state_36840[(10)]);
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36840__$1,(14),inst_36815);
} else {
if((state_val_36841 === (2))){
var state_36840__$1 = state_36840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36840__$1,(4),results);
} else {
if((state_val_36841 === (19))){
var state_36840__$1 = state_36840;
var statearr_36853_36915 = state_36840__$1;
(statearr_36853_36915[(2)] = null);

(statearr_36853_36915[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (11))){
var inst_36815 = (state_36840[(2)]);
var state_36840__$1 = (function (){var statearr_36854 = state_36840;
(statearr_36854[(10)] = inst_36815);

return statearr_36854;
})();
var statearr_36855_36916 = state_36840__$1;
(statearr_36855_36916[(2)] = null);

(statearr_36855_36916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (9))){
var state_36840__$1 = state_36840;
var statearr_36856_36917 = state_36840__$1;
(statearr_36856_36917[(2)] = null);

(statearr_36856_36917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (5))){
var state_36840__$1 = state_36840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36857_36918 = state_36840__$1;
(statearr_36857_36918[(1)] = (8));

} else {
var statearr_36858_36919 = state_36840__$1;
(statearr_36858_36919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (14))){
var inst_36818 = (state_36840[(8)]);
var inst_36820 = (state_36840[(11)]);
var inst_36818__$1 = (state_36840[(2)]);
var inst_36819 = (inst_36818__$1 == null);
var inst_36820__$1 = cljs.core.not.call(null,inst_36819);
var state_36840__$1 = (function (){var statearr_36859 = state_36840;
(statearr_36859[(8)] = inst_36818__$1);

(statearr_36859[(11)] = inst_36820__$1);

return statearr_36859;
})();
if(inst_36820__$1){
var statearr_36860_36920 = state_36840__$1;
(statearr_36860_36920[(1)] = (15));

} else {
var statearr_36861_36921 = state_36840__$1;
(statearr_36861_36921[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (16))){
var inst_36820 = (state_36840[(11)]);
var state_36840__$1 = state_36840;
var statearr_36862_36922 = state_36840__$1;
(statearr_36862_36922[(2)] = inst_36820);

(statearr_36862_36922[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (10))){
var inst_36812 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
var statearr_36863_36923 = state_36840__$1;
(statearr_36863_36923[(2)] = inst_36812);

(statearr_36863_36923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (18))){
var inst_36823 = (state_36840[(2)]);
var state_36840__$1 = state_36840;
var statearr_36864_36924 = state_36840__$1;
(statearr_36864_36924[(2)] = inst_36823);

(statearr_36864_36924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36841 === (8))){
var inst_36809 = cljs.core.async.close_BANG_.call(null,to);
var state_36840__$1 = state_36840;
var statearr_36865_36925 = state_36840__$1;
(statearr_36865_36925[(2)] = inst_36809);

(statearr_36865_36925[(1)] = (10));


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
});})(c__29675__auto__,jobs,results,process,async))
;
return ((function (switch__29580__auto__,c__29675__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_36866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__);

(statearr_36866[(1)] = (1));

return statearr_36866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1 = (function (state_36840){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36867){if((e36867 instanceof Object)){
var ex__29584__auto__ = e36867;
var statearr_36868_36926 = state_36840;
(statearr_36868_36926[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36927 = state_36840;
state_36840 = G__36927;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__ = function(state_36840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1.call(this,state_36840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__,jobs,results,process,async))
})();
var state__29677__auto__ = (function (){var statearr_36869 = f__29676__auto__.call(null);
(statearr_36869[(6)] = c__29675__auto__);

return statearr_36869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__,jobs,results,process,async))
);

return c__29675__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__36929 = arguments.length;
switch (G__36929) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__36932 = arguments.length;
switch (G__36932) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__36935 = arguments.length;
switch (G__36935) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29675__auto___36984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___36984,tc,fc){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___36984,tc,fc){
return (function (state_36961){
var state_val_36962 = (state_36961[(1)]);
if((state_val_36962 === (7))){
var inst_36957 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36963_36985 = state_36961__$1;
(statearr_36963_36985[(2)] = inst_36957);

(statearr_36963_36985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (1))){
var state_36961__$1 = state_36961;
var statearr_36964_36986 = state_36961__$1;
(statearr_36964_36986[(2)] = null);

(statearr_36964_36986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (4))){
var inst_36938 = (state_36961[(7)]);
var inst_36938__$1 = (state_36961[(2)]);
var inst_36939 = (inst_36938__$1 == null);
var state_36961__$1 = (function (){var statearr_36965 = state_36961;
(statearr_36965[(7)] = inst_36938__$1);

return statearr_36965;
})();
if(cljs.core.truth_(inst_36939)){
var statearr_36966_36987 = state_36961__$1;
(statearr_36966_36987[(1)] = (5));

} else {
var statearr_36967_36988 = state_36961__$1;
(statearr_36967_36988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (13))){
var state_36961__$1 = state_36961;
var statearr_36968_36989 = state_36961__$1;
(statearr_36968_36989[(2)] = null);

(statearr_36968_36989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (6))){
var inst_36938 = (state_36961[(7)]);
var inst_36944 = p.call(null,inst_36938);
var state_36961__$1 = state_36961;
if(cljs.core.truth_(inst_36944)){
var statearr_36969_36990 = state_36961__$1;
(statearr_36969_36990[(1)] = (9));

} else {
var statearr_36970_36991 = state_36961__$1;
(statearr_36970_36991[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (3))){
var inst_36959 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36961__$1,inst_36959);
} else {
if((state_val_36962 === (12))){
var state_36961__$1 = state_36961;
var statearr_36971_36992 = state_36961__$1;
(statearr_36971_36992[(2)] = null);

(statearr_36971_36992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (2))){
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36961__$1,(4),ch);
} else {
if((state_val_36962 === (11))){
var inst_36938 = (state_36961[(7)]);
var inst_36948 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36961__$1,(8),inst_36948,inst_36938);
} else {
if((state_val_36962 === (9))){
var state_36961__$1 = state_36961;
var statearr_36972_36993 = state_36961__$1;
(statearr_36972_36993[(2)] = tc);

(statearr_36972_36993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (5))){
var inst_36941 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36942 = cljs.core.async.close_BANG_.call(null,fc);
var state_36961__$1 = (function (){var statearr_36973 = state_36961;
(statearr_36973[(8)] = inst_36941);

return statearr_36973;
})();
var statearr_36974_36994 = state_36961__$1;
(statearr_36974_36994[(2)] = inst_36942);

(statearr_36974_36994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (14))){
var inst_36955 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
var statearr_36975_36995 = state_36961__$1;
(statearr_36975_36995[(2)] = inst_36955);

(statearr_36975_36995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (10))){
var state_36961__$1 = state_36961;
var statearr_36976_36996 = state_36961__$1;
(statearr_36976_36996[(2)] = fc);

(statearr_36976_36996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36962 === (8))){
var inst_36950 = (state_36961[(2)]);
var state_36961__$1 = state_36961;
if(cljs.core.truth_(inst_36950)){
var statearr_36977_36997 = state_36961__$1;
(statearr_36977_36997[(1)] = (12));

} else {
var statearr_36978_36998 = state_36961__$1;
(statearr_36978_36998[(1)] = (13));

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
});})(c__29675__auto___36984,tc,fc))
;
return ((function (switch__29580__auto__,c__29675__auto___36984,tc,fc){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_36979 = [null,null,null,null,null,null,null,null,null];
(statearr_36979[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_36979[(1)] = (1));

return statearr_36979;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_36961){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_36961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e36980){if((e36980 instanceof Object)){
var ex__29584__auto__ = e36980;
var statearr_36981_36999 = state_36961;
(statearr_36981_36999[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36961;
state_36961 = G__37000;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_36961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_36961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___36984,tc,fc))
})();
var state__29677__auto__ = (function (){var statearr_36982 = f__29676__auto__.call(null);
(statearr_36982[(6)] = c__29675__auto___36984);

return statearr_36982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___36984,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__){
return (function (state_37021){
var state_val_37022 = (state_37021[(1)]);
if((state_val_37022 === (7))){
var inst_37017 = (state_37021[(2)]);
var state_37021__$1 = state_37021;
var statearr_37023_37041 = state_37021__$1;
(statearr_37023_37041[(2)] = inst_37017);

(statearr_37023_37041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (1))){
var inst_37001 = init;
var state_37021__$1 = (function (){var statearr_37024 = state_37021;
(statearr_37024[(7)] = inst_37001);

return statearr_37024;
})();
var statearr_37025_37042 = state_37021__$1;
(statearr_37025_37042[(2)] = null);

(statearr_37025_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (4))){
var inst_37004 = (state_37021[(8)]);
var inst_37004__$1 = (state_37021[(2)]);
var inst_37005 = (inst_37004__$1 == null);
var state_37021__$1 = (function (){var statearr_37026 = state_37021;
(statearr_37026[(8)] = inst_37004__$1);

return statearr_37026;
})();
if(cljs.core.truth_(inst_37005)){
var statearr_37027_37043 = state_37021__$1;
(statearr_37027_37043[(1)] = (5));

} else {
var statearr_37028_37044 = state_37021__$1;
(statearr_37028_37044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (6))){
var inst_37008 = (state_37021[(9)]);
var inst_37004 = (state_37021[(8)]);
var inst_37001 = (state_37021[(7)]);
var inst_37008__$1 = f.call(null,inst_37001,inst_37004);
var inst_37009 = cljs.core.reduced_QMARK_.call(null,inst_37008__$1);
var state_37021__$1 = (function (){var statearr_37029 = state_37021;
(statearr_37029[(9)] = inst_37008__$1);

return statearr_37029;
})();
if(inst_37009){
var statearr_37030_37045 = state_37021__$1;
(statearr_37030_37045[(1)] = (8));

} else {
var statearr_37031_37046 = state_37021__$1;
(statearr_37031_37046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (3))){
var inst_37019 = (state_37021[(2)]);
var state_37021__$1 = state_37021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37021__$1,inst_37019);
} else {
if((state_val_37022 === (2))){
var state_37021__$1 = state_37021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37021__$1,(4),ch);
} else {
if((state_val_37022 === (9))){
var inst_37008 = (state_37021[(9)]);
var inst_37001 = inst_37008;
var state_37021__$1 = (function (){var statearr_37032 = state_37021;
(statearr_37032[(7)] = inst_37001);

return statearr_37032;
})();
var statearr_37033_37047 = state_37021__$1;
(statearr_37033_37047[(2)] = null);

(statearr_37033_37047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (5))){
var inst_37001 = (state_37021[(7)]);
var state_37021__$1 = state_37021;
var statearr_37034_37048 = state_37021__$1;
(statearr_37034_37048[(2)] = inst_37001);

(statearr_37034_37048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (10))){
var inst_37015 = (state_37021[(2)]);
var state_37021__$1 = state_37021;
var statearr_37035_37049 = state_37021__$1;
(statearr_37035_37049[(2)] = inst_37015);

(statearr_37035_37049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37022 === (8))){
var inst_37008 = (state_37021[(9)]);
var inst_37011 = cljs.core.deref.call(null,inst_37008);
var state_37021__$1 = state_37021;
var statearr_37036_37050 = state_37021__$1;
(statearr_37036_37050[(2)] = inst_37011);

(statearr_37036_37050[(1)] = (10));


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
});})(c__29675__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29581__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29581__auto____0 = (function (){
var statearr_37037 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37037[(0)] = cljs$core$async$reduce_$_state_machine__29581__auto__);

(statearr_37037[(1)] = (1));

return statearr_37037;
});
var cljs$core$async$reduce_$_state_machine__29581__auto____1 = (function (state_37021){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37038){if((e37038 instanceof Object)){
var ex__29584__auto__ = e37038;
var statearr_37039_37051 = state_37021;
(statearr_37039_37051[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37052 = state_37021;
state_37021 = G__37052;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29581__auto__ = function(state_37021){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29581__auto____1.call(this,state_37021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29581__auto____0;
cljs$core$async$reduce_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29581__auto____1;
return cljs$core$async$reduce_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__))
})();
var state__29677__auto__ = (function (){var statearr_37040 = f__29676__auto__.call(null);
(statearr_37040[(6)] = c__29675__auto__);

return statearr_37040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__))
);

return c__29675__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__,f__$1){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__,f__$1){
return (function (state_37058){
var state_val_37059 = (state_37058[(1)]);
if((state_val_37059 === (1))){
var inst_37053 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_37058__$1 = state_37058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37058__$1,(2),inst_37053);
} else {
if((state_val_37059 === (2))){
var inst_37055 = (state_37058[(2)]);
var inst_37056 = f__$1.call(null,inst_37055);
var state_37058__$1 = state_37058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37058__$1,inst_37056);
} else {
return null;
}
}
});})(c__29675__auto__,f__$1))
;
return ((function (switch__29580__auto__,c__29675__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29581__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29581__auto____0 = (function (){
var statearr_37060 = [null,null,null,null,null,null,null];
(statearr_37060[(0)] = cljs$core$async$transduce_$_state_machine__29581__auto__);

(statearr_37060[(1)] = (1));

return statearr_37060;
});
var cljs$core$async$transduce_$_state_machine__29581__auto____1 = (function (state_37058){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37061){if((e37061 instanceof Object)){
var ex__29584__auto__ = e37061;
var statearr_37062_37064 = state_37058;
(statearr_37062_37064[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37065 = state_37058;
state_37058 = G__37065;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29581__auto__ = function(state_37058){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29581__auto____1.call(this,state_37058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29581__auto____0;
cljs$core$async$transduce_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29581__auto____1;
return cljs$core$async$transduce_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__,f__$1))
})();
var state__29677__auto__ = (function (){var statearr_37063 = f__29676__auto__.call(null);
(statearr_37063[(6)] = c__29675__auto__);

return statearr_37063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__,f__$1))
);

return c__29675__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37067 = arguments.length;
switch (G__37067) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__){
return (function (state_37092){
var state_val_37093 = (state_37092[(1)]);
if((state_val_37093 === (7))){
var inst_37074 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37094_37115 = state_37092__$1;
(statearr_37094_37115[(2)] = inst_37074);

(statearr_37094_37115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (1))){
var inst_37068 = cljs.core.seq.call(null,coll);
var inst_37069 = inst_37068;
var state_37092__$1 = (function (){var statearr_37095 = state_37092;
(statearr_37095[(7)] = inst_37069);

return statearr_37095;
})();
var statearr_37096_37116 = state_37092__$1;
(statearr_37096_37116[(2)] = null);

(statearr_37096_37116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (4))){
var inst_37069 = (state_37092[(7)]);
var inst_37072 = cljs.core.first.call(null,inst_37069);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37092__$1,(7),ch,inst_37072);
} else {
if((state_val_37093 === (13))){
var inst_37086 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37097_37117 = state_37092__$1;
(statearr_37097_37117[(2)] = inst_37086);

(statearr_37097_37117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (6))){
var inst_37077 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37077)){
var statearr_37098_37118 = state_37092__$1;
(statearr_37098_37118[(1)] = (8));

} else {
var statearr_37099_37119 = state_37092__$1;
(statearr_37099_37119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (3))){
var inst_37090 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37092__$1,inst_37090);
} else {
if((state_val_37093 === (12))){
var state_37092__$1 = state_37092;
var statearr_37100_37120 = state_37092__$1;
(statearr_37100_37120[(2)] = null);

(statearr_37100_37120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (2))){
var inst_37069 = (state_37092[(7)]);
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37069)){
var statearr_37101_37121 = state_37092__$1;
(statearr_37101_37121[(1)] = (4));

} else {
var statearr_37102_37122 = state_37092__$1;
(statearr_37102_37122[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (11))){
var inst_37083 = cljs.core.async.close_BANG_.call(null,ch);
var state_37092__$1 = state_37092;
var statearr_37103_37123 = state_37092__$1;
(statearr_37103_37123[(2)] = inst_37083);

(statearr_37103_37123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (9))){
var state_37092__$1 = state_37092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37104_37124 = state_37092__$1;
(statearr_37104_37124[(1)] = (11));

} else {
var statearr_37105_37125 = state_37092__$1;
(statearr_37105_37125[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (5))){
var inst_37069 = (state_37092[(7)]);
var state_37092__$1 = state_37092;
var statearr_37106_37126 = state_37092__$1;
(statearr_37106_37126[(2)] = inst_37069);

(statearr_37106_37126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (10))){
var inst_37088 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37107_37127 = state_37092__$1;
(statearr_37107_37127[(2)] = inst_37088);

(statearr_37107_37127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (8))){
var inst_37069 = (state_37092[(7)]);
var inst_37079 = cljs.core.next.call(null,inst_37069);
var inst_37069__$1 = inst_37079;
var state_37092__$1 = (function (){var statearr_37108 = state_37092;
(statearr_37108[(7)] = inst_37069__$1);

return statearr_37108;
})();
var statearr_37109_37128 = state_37092__$1;
(statearr_37109_37128[(2)] = null);

(statearr_37109_37128[(1)] = (2));


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
});})(c__29675__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_37110 = [null,null,null,null,null,null,null,null];
(statearr_37110[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_37110[(1)] = (1));

return statearr_37110;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_37092){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37111){if((e37111 instanceof Object)){
var ex__29584__auto__ = e37111;
var statearr_37112_37129 = state_37092;
(statearr_37112_37129[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37130 = state_37092;
state_37092 = G__37130;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__))
})();
var state__29677__auto__ = (function (){var statearr_37113 = f__29676__auto__.call(null);
(statearr_37113[(6)] = c__29675__auto__);

return statearr_37113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__))
);

return c__29675__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37131 = (function (ch,cs,meta37132){
this.ch = ch;
this.cs = cs;
this.meta37132 = meta37132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37133,meta37132__$1){
var self__ = this;
var _37133__$1 = this;
return (new cljs.core.async.t_cljs$core$async37131(self__.ch,self__.cs,meta37132__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37133){
var self__ = this;
var _37133__$1 = this;
return self__.meta37132;
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37132","meta37132",-2107393256,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async37131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37131";

cljs.core.async.t_cljs$core$async37131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37131");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37131.
 */
cljs.core.async.__GT_t_cljs$core$async37131 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async37131(ch__$1,cs__$1,meta37132){
return (new cljs.core.async.t_cljs$core$async37131(ch__$1,cs__$1,meta37132));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async37131(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29675__auto___37353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___37353,cs,m,dchan,dctr,done){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___37353,cs,m,dchan,dctr,done){
return (function (state_37268){
var state_val_37269 = (state_37268[(1)]);
if((state_val_37269 === (7))){
var inst_37264 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37270_37354 = state_37268__$1;
(statearr_37270_37354[(2)] = inst_37264);

(statearr_37270_37354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (20))){
var inst_37167 = (state_37268[(7)]);
var inst_37179 = cljs.core.first.call(null,inst_37167);
var inst_37180 = cljs.core.nth.call(null,inst_37179,(0),null);
var inst_37181 = cljs.core.nth.call(null,inst_37179,(1),null);
var state_37268__$1 = (function (){var statearr_37271 = state_37268;
(statearr_37271[(8)] = inst_37180);

return statearr_37271;
})();
if(cljs.core.truth_(inst_37181)){
var statearr_37272_37355 = state_37268__$1;
(statearr_37272_37355[(1)] = (22));

} else {
var statearr_37273_37356 = state_37268__$1;
(statearr_37273_37356[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (27))){
var inst_37136 = (state_37268[(9)]);
var inst_37211 = (state_37268[(10)]);
var inst_37209 = (state_37268[(11)]);
var inst_37216 = (state_37268[(12)]);
var inst_37216__$1 = cljs.core._nth.call(null,inst_37209,inst_37211);
var inst_37217 = cljs.core.async.put_BANG_.call(null,inst_37216__$1,inst_37136,done);
var state_37268__$1 = (function (){var statearr_37274 = state_37268;
(statearr_37274[(12)] = inst_37216__$1);

return statearr_37274;
})();
if(cljs.core.truth_(inst_37217)){
var statearr_37275_37357 = state_37268__$1;
(statearr_37275_37357[(1)] = (30));

} else {
var statearr_37276_37358 = state_37268__$1;
(statearr_37276_37358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (1))){
var state_37268__$1 = state_37268;
var statearr_37277_37359 = state_37268__$1;
(statearr_37277_37359[(2)] = null);

(statearr_37277_37359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (24))){
var inst_37167 = (state_37268[(7)]);
var inst_37186 = (state_37268[(2)]);
var inst_37187 = cljs.core.next.call(null,inst_37167);
var inst_37145 = inst_37187;
var inst_37146 = null;
var inst_37147 = (0);
var inst_37148 = (0);
var state_37268__$1 = (function (){var statearr_37278 = state_37268;
(statearr_37278[(13)] = inst_37148);

(statearr_37278[(14)] = inst_37147);

(statearr_37278[(15)] = inst_37146);

(statearr_37278[(16)] = inst_37186);

(statearr_37278[(17)] = inst_37145);

return statearr_37278;
})();
var statearr_37279_37360 = state_37268__$1;
(statearr_37279_37360[(2)] = null);

(statearr_37279_37360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (39))){
var state_37268__$1 = state_37268;
var statearr_37283_37361 = state_37268__$1;
(statearr_37283_37361[(2)] = null);

(statearr_37283_37361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (4))){
var inst_37136 = (state_37268[(9)]);
var inst_37136__$1 = (state_37268[(2)]);
var inst_37137 = (inst_37136__$1 == null);
var state_37268__$1 = (function (){var statearr_37284 = state_37268;
(statearr_37284[(9)] = inst_37136__$1);

return statearr_37284;
})();
if(cljs.core.truth_(inst_37137)){
var statearr_37285_37362 = state_37268__$1;
(statearr_37285_37362[(1)] = (5));

} else {
var statearr_37286_37363 = state_37268__$1;
(statearr_37286_37363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (15))){
var inst_37148 = (state_37268[(13)]);
var inst_37147 = (state_37268[(14)]);
var inst_37146 = (state_37268[(15)]);
var inst_37145 = (state_37268[(17)]);
var inst_37163 = (state_37268[(2)]);
var inst_37164 = (inst_37148 + (1));
var tmp37280 = inst_37147;
var tmp37281 = inst_37146;
var tmp37282 = inst_37145;
var inst_37145__$1 = tmp37282;
var inst_37146__$1 = tmp37281;
var inst_37147__$1 = tmp37280;
var inst_37148__$1 = inst_37164;
var state_37268__$1 = (function (){var statearr_37287 = state_37268;
(statearr_37287[(13)] = inst_37148__$1);

(statearr_37287[(14)] = inst_37147__$1);

(statearr_37287[(15)] = inst_37146__$1);

(statearr_37287[(17)] = inst_37145__$1);

(statearr_37287[(18)] = inst_37163);

return statearr_37287;
})();
var statearr_37288_37364 = state_37268__$1;
(statearr_37288_37364[(2)] = null);

(statearr_37288_37364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (21))){
var inst_37190 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37292_37365 = state_37268__$1;
(statearr_37292_37365[(2)] = inst_37190);

(statearr_37292_37365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (31))){
var inst_37216 = (state_37268[(12)]);
var inst_37220 = done.call(null,null);
var inst_37221 = cljs.core.async.untap_STAR_.call(null,m,inst_37216);
var state_37268__$1 = (function (){var statearr_37293 = state_37268;
(statearr_37293[(19)] = inst_37220);

return statearr_37293;
})();
var statearr_37294_37366 = state_37268__$1;
(statearr_37294_37366[(2)] = inst_37221);

(statearr_37294_37366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (32))){
var inst_37211 = (state_37268[(10)]);
var inst_37209 = (state_37268[(11)]);
var inst_37210 = (state_37268[(20)]);
var inst_37208 = (state_37268[(21)]);
var inst_37223 = (state_37268[(2)]);
var inst_37224 = (inst_37211 + (1));
var tmp37289 = inst_37209;
var tmp37290 = inst_37210;
var tmp37291 = inst_37208;
var inst_37208__$1 = tmp37291;
var inst_37209__$1 = tmp37289;
var inst_37210__$1 = tmp37290;
var inst_37211__$1 = inst_37224;
var state_37268__$1 = (function (){var statearr_37295 = state_37268;
(statearr_37295[(10)] = inst_37211__$1);

(statearr_37295[(11)] = inst_37209__$1);

(statearr_37295[(22)] = inst_37223);

(statearr_37295[(20)] = inst_37210__$1);

(statearr_37295[(21)] = inst_37208__$1);

return statearr_37295;
})();
var statearr_37296_37367 = state_37268__$1;
(statearr_37296_37367[(2)] = null);

(statearr_37296_37367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (40))){
var inst_37236 = (state_37268[(23)]);
var inst_37240 = done.call(null,null);
var inst_37241 = cljs.core.async.untap_STAR_.call(null,m,inst_37236);
var state_37268__$1 = (function (){var statearr_37297 = state_37268;
(statearr_37297[(24)] = inst_37240);

return statearr_37297;
})();
var statearr_37298_37368 = state_37268__$1;
(statearr_37298_37368[(2)] = inst_37241);

(statearr_37298_37368[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (33))){
var inst_37227 = (state_37268[(25)]);
var inst_37229 = cljs.core.chunked_seq_QMARK_.call(null,inst_37227);
var state_37268__$1 = state_37268;
if(inst_37229){
var statearr_37299_37369 = state_37268__$1;
(statearr_37299_37369[(1)] = (36));

} else {
var statearr_37300_37370 = state_37268__$1;
(statearr_37300_37370[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (13))){
var inst_37157 = (state_37268[(26)]);
var inst_37160 = cljs.core.async.close_BANG_.call(null,inst_37157);
var state_37268__$1 = state_37268;
var statearr_37301_37371 = state_37268__$1;
(statearr_37301_37371[(2)] = inst_37160);

(statearr_37301_37371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (22))){
var inst_37180 = (state_37268[(8)]);
var inst_37183 = cljs.core.async.close_BANG_.call(null,inst_37180);
var state_37268__$1 = state_37268;
var statearr_37302_37372 = state_37268__$1;
(statearr_37302_37372[(2)] = inst_37183);

(statearr_37302_37372[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (36))){
var inst_37227 = (state_37268[(25)]);
var inst_37231 = cljs.core.chunk_first.call(null,inst_37227);
var inst_37232 = cljs.core.chunk_rest.call(null,inst_37227);
var inst_37233 = cljs.core.count.call(null,inst_37231);
var inst_37208 = inst_37232;
var inst_37209 = inst_37231;
var inst_37210 = inst_37233;
var inst_37211 = (0);
var state_37268__$1 = (function (){var statearr_37303 = state_37268;
(statearr_37303[(10)] = inst_37211);

(statearr_37303[(11)] = inst_37209);

(statearr_37303[(20)] = inst_37210);

(statearr_37303[(21)] = inst_37208);

return statearr_37303;
})();
var statearr_37304_37373 = state_37268__$1;
(statearr_37304_37373[(2)] = null);

(statearr_37304_37373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (41))){
var inst_37227 = (state_37268[(25)]);
var inst_37243 = (state_37268[(2)]);
var inst_37244 = cljs.core.next.call(null,inst_37227);
var inst_37208 = inst_37244;
var inst_37209 = null;
var inst_37210 = (0);
var inst_37211 = (0);
var state_37268__$1 = (function (){var statearr_37305 = state_37268;
(statearr_37305[(10)] = inst_37211);

(statearr_37305[(11)] = inst_37209);

(statearr_37305[(20)] = inst_37210);

(statearr_37305[(27)] = inst_37243);

(statearr_37305[(21)] = inst_37208);

return statearr_37305;
})();
var statearr_37306_37374 = state_37268__$1;
(statearr_37306_37374[(2)] = null);

(statearr_37306_37374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (43))){
var state_37268__$1 = state_37268;
var statearr_37307_37375 = state_37268__$1;
(statearr_37307_37375[(2)] = null);

(statearr_37307_37375[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (29))){
var inst_37252 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37308_37376 = state_37268__$1;
(statearr_37308_37376[(2)] = inst_37252);

(statearr_37308_37376[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (44))){
var inst_37261 = (state_37268[(2)]);
var state_37268__$1 = (function (){var statearr_37309 = state_37268;
(statearr_37309[(28)] = inst_37261);

return statearr_37309;
})();
var statearr_37310_37377 = state_37268__$1;
(statearr_37310_37377[(2)] = null);

(statearr_37310_37377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (6))){
var inst_37200 = (state_37268[(29)]);
var inst_37199 = cljs.core.deref.call(null,cs);
var inst_37200__$1 = cljs.core.keys.call(null,inst_37199);
var inst_37201 = cljs.core.count.call(null,inst_37200__$1);
var inst_37202 = cljs.core.reset_BANG_.call(null,dctr,inst_37201);
var inst_37207 = cljs.core.seq.call(null,inst_37200__$1);
var inst_37208 = inst_37207;
var inst_37209 = null;
var inst_37210 = (0);
var inst_37211 = (0);
var state_37268__$1 = (function (){var statearr_37311 = state_37268;
(statearr_37311[(10)] = inst_37211);

(statearr_37311[(11)] = inst_37209);

(statearr_37311[(20)] = inst_37210);

(statearr_37311[(21)] = inst_37208);

(statearr_37311[(30)] = inst_37202);

(statearr_37311[(29)] = inst_37200__$1);

return statearr_37311;
})();
var statearr_37312_37378 = state_37268__$1;
(statearr_37312_37378[(2)] = null);

(statearr_37312_37378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (28))){
var inst_37208 = (state_37268[(21)]);
var inst_37227 = (state_37268[(25)]);
var inst_37227__$1 = cljs.core.seq.call(null,inst_37208);
var state_37268__$1 = (function (){var statearr_37313 = state_37268;
(statearr_37313[(25)] = inst_37227__$1);

return statearr_37313;
})();
if(inst_37227__$1){
var statearr_37314_37379 = state_37268__$1;
(statearr_37314_37379[(1)] = (33));

} else {
var statearr_37315_37380 = state_37268__$1;
(statearr_37315_37380[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (25))){
var inst_37211 = (state_37268[(10)]);
var inst_37210 = (state_37268[(20)]);
var inst_37213 = (inst_37211 < inst_37210);
var inst_37214 = inst_37213;
var state_37268__$1 = state_37268;
if(cljs.core.truth_(inst_37214)){
var statearr_37316_37381 = state_37268__$1;
(statearr_37316_37381[(1)] = (27));

} else {
var statearr_37317_37382 = state_37268__$1;
(statearr_37317_37382[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (34))){
var state_37268__$1 = state_37268;
var statearr_37318_37383 = state_37268__$1;
(statearr_37318_37383[(2)] = null);

(statearr_37318_37383[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (17))){
var state_37268__$1 = state_37268;
var statearr_37319_37384 = state_37268__$1;
(statearr_37319_37384[(2)] = null);

(statearr_37319_37384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (3))){
var inst_37266 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37268__$1,inst_37266);
} else {
if((state_val_37269 === (12))){
var inst_37195 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37320_37385 = state_37268__$1;
(statearr_37320_37385[(2)] = inst_37195);

(statearr_37320_37385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (2))){
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37268__$1,(4),ch);
} else {
if((state_val_37269 === (23))){
var state_37268__$1 = state_37268;
var statearr_37321_37386 = state_37268__$1;
(statearr_37321_37386[(2)] = null);

(statearr_37321_37386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (35))){
var inst_37250 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37322_37387 = state_37268__$1;
(statearr_37322_37387[(2)] = inst_37250);

(statearr_37322_37387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (19))){
var inst_37167 = (state_37268[(7)]);
var inst_37171 = cljs.core.chunk_first.call(null,inst_37167);
var inst_37172 = cljs.core.chunk_rest.call(null,inst_37167);
var inst_37173 = cljs.core.count.call(null,inst_37171);
var inst_37145 = inst_37172;
var inst_37146 = inst_37171;
var inst_37147 = inst_37173;
var inst_37148 = (0);
var state_37268__$1 = (function (){var statearr_37323 = state_37268;
(statearr_37323[(13)] = inst_37148);

(statearr_37323[(14)] = inst_37147);

(statearr_37323[(15)] = inst_37146);

(statearr_37323[(17)] = inst_37145);

return statearr_37323;
})();
var statearr_37324_37388 = state_37268__$1;
(statearr_37324_37388[(2)] = null);

(statearr_37324_37388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (11))){
var inst_37145 = (state_37268[(17)]);
var inst_37167 = (state_37268[(7)]);
var inst_37167__$1 = cljs.core.seq.call(null,inst_37145);
var state_37268__$1 = (function (){var statearr_37325 = state_37268;
(statearr_37325[(7)] = inst_37167__$1);

return statearr_37325;
})();
if(inst_37167__$1){
var statearr_37326_37389 = state_37268__$1;
(statearr_37326_37389[(1)] = (16));

} else {
var statearr_37327_37390 = state_37268__$1;
(statearr_37327_37390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (9))){
var inst_37197 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37328_37391 = state_37268__$1;
(statearr_37328_37391[(2)] = inst_37197);

(statearr_37328_37391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (5))){
var inst_37143 = cljs.core.deref.call(null,cs);
var inst_37144 = cljs.core.seq.call(null,inst_37143);
var inst_37145 = inst_37144;
var inst_37146 = null;
var inst_37147 = (0);
var inst_37148 = (0);
var state_37268__$1 = (function (){var statearr_37329 = state_37268;
(statearr_37329[(13)] = inst_37148);

(statearr_37329[(14)] = inst_37147);

(statearr_37329[(15)] = inst_37146);

(statearr_37329[(17)] = inst_37145);

return statearr_37329;
})();
var statearr_37330_37392 = state_37268__$1;
(statearr_37330_37392[(2)] = null);

(statearr_37330_37392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (14))){
var state_37268__$1 = state_37268;
var statearr_37331_37393 = state_37268__$1;
(statearr_37331_37393[(2)] = null);

(statearr_37331_37393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (45))){
var inst_37258 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37332_37394 = state_37268__$1;
(statearr_37332_37394[(2)] = inst_37258);

(statearr_37332_37394[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (26))){
var inst_37200 = (state_37268[(29)]);
var inst_37254 = (state_37268[(2)]);
var inst_37255 = cljs.core.seq.call(null,inst_37200);
var state_37268__$1 = (function (){var statearr_37333 = state_37268;
(statearr_37333[(31)] = inst_37254);

return statearr_37333;
})();
if(inst_37255){
var statearr_37334_37395 = state_37268__$1;
(statearr_37334_37395[(1)] = (42));

} else {
var statearr_37335_37396 = state_37268__$1;
(statearr_37335_37396[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (16))){
var inst_37167 = (state_37268[(7)]);
var inst_37169 = cljs.core.chunked_seq_QMARK_.call(null,inst_37167);
var state_37268__$1 = state_37268;
if(inst_37169){
var statearr_37336_37397 = state_37268__$1;
(statearr_37336_37397[(1)] = (19));

} else {
var statearr_37337_37398 = state_37268__$1;
(statearr_37337_37398[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (38))){
var inst_37247 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37338_37399 = state_37268__$1;
(statearr_37338_37399[(2)] = inst_37247);

(statearr_37338_37399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (30))){
var state_37268__$1 = state_37268;
var statearr_37339_37400 = state_37268__$1;
(statearr_37339_37400[(2)] = null);

(statearr_37339_37400[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (10))){
var inst_37148 = (state_37268[(13)]);
var inst_37146 = (state_37268[(15)]);
var inst_37156 = cljs.core._nth.call(null,inst_37146,inst_37148);
var inst_37157 = cljs.core.nth.call(null,inst_37156,(0),null);
var inst_37158 = cljs.core.nth.call(null,inst_37156,(1),null);
var state_37268__$1 = (function (){var statearr_37340 = state_37268;
(statearr_37340[(26)] = inst_37157);

return statearr_37340;
})();
if(cljs.core.truth_(inst_37158)){
var statearr_37341_37401 = state_37268__$1;
(statearr_37341_37401[(1)] = (13));

} else {
var statearr_37342_37402 = state_37268__$1;
(statearr_37342_37402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (18))){
var inst_37193 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37343_37403 = state_37268__$1;
(statearr_37343_37403[(2)] = inst_37193);

(statearr_37343_37403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (42))){
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37268__$1,(45),dchan);
} else {
if((state_val_37269 === (37))){
var inst_37136 = (state_37268[(9)]);
var inst_37236 = (state_37268[(23)]);
var inst_37227 = (state_37268[(25)]);
var inst_37236__$1 = cljs.core.first.call(null,inst_37227);
var inst_37237 = cljs.core.async.put_BANG_.call(null,inst_37236__$1,inst_37136,done);
var state_37268__$1 = (function (){var statearr_37344 = state_37268;
(statearr_37344[(23)] = inst_37236__$1);

return statearr_37344;
})();
if(cljs.core.truth_(inst_37237)){
var statearr_37345_37404 = state_37268__$1;
(statearr_37345_37404[(1)] = (39));

} else {
var statearr_37346_37405 = state_37268__$1;
(statearr_37346_37405[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (8))){
var inst_37148 = (state_37268[(13)]);
var inst_37147 = (state_37268[(14)]);
var inst_37150 = (inst_37148 < inst_37147);
var inst_37151 = inst_37150;
var state_37268__$1 = state_37268;
if(cljs.core.truth_(inst_37151)){
var statearr_37347_37406 = state_37268__$1;
(statearr_37347_37406[(1)] = (10));

} else {
var statearr_37348_37407 = state_37268__$1;
(statearr_37348_37407[(1)] = (11));

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
});})(c__29675__auto___37353,cs,m,dchan,dctr,done))
;
return ((function (switch__29580__auto__,c__29675__auto___37353,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29581__auto__ = null;
var cljs$core$async$mult_$_state_machine__29581__auto____0 = (function (){
var statearr_37349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37349[(0)] = cljs$core$async$mult_$_state_machine__29581__auto__);

(statearr_37349[(1)] = (1));

return statearr_37349;
});
var cljs$core$async$mult_$_state_machine__29581__auto____1 = (function (state_37268){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37350){if((e37350 instanceof Object)){
var ex__29584__auto__ = e37350;
var statearr_37351_37408 = state_37268;
(statearr_37351_37408[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37409 = state_37268;
state_37268 = G__37409;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29581__auto__ = function(state_37268){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29581__auto____1.call(this,state_37268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29581__auto____0;
cljs$core$async$mult_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29581__auto____1;
return cljs$core$async$mult_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___37353,cs,m,dchan,dctr,done))
})();
var state__29677__auto__ = (function (){var statearr_37352 = f__29676__auto__.call(null);
(statearr_37352[(6)] = c__29675__auto___37353);

return statearr_37352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___37353,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37411 = arguments.length;
switch (G__37411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37423 = arguments.length;
var i__4731__auto___37424 = (0);
while(true){
if((i__4731__auto___37424 < len__4730__auto___37423)){
args__4736__auto__.push((arguments[i__4731__auto___37424]));

var G__37425 = (i__4731__auto___37424 + (1));
i__4731__auto___37424 = G__37425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37417){
var map__37418 = p__37417;
var map__37418__$1 = (((((!((map__37418 == null))))?(((((map__37418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37418):map__37418);
var opts = map__37418__$1;
var statearr_37420_37426 = state;
(statearr_37420_37426[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__37418,map__37418__$1,opts){
return (function (val){
var statearr_37421_37427 = state;
(statearr_37421_37427[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37418,map__37418__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_37422_37428 = state;
(statearr_37422_37428[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37413){
var G__37414 = cljs.core.first.call(null,seq37413);
var seq37413__$1 = cljs.core.next.call(null,seq37413);
var G__37415 = cljs.core.first.call(null,seq37413__$1);
var seq37413__$2 = cljs.core.next.call(null,seq37413__$1);
var G__37416 = cljs.core.first.call(null,seq37413__$2);
var seq37413__$3 = cljs.core.next.call(null,seq37413__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37414,G__37415,G__37416,seq37413__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37429 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37430){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37430 = meta37430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37431,meta37430__$1){
var self__ = this;
var _37431__$1 = this;
return (new cljs.core.async.t_cljs$core$async37429(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37430__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37431){
var self__ = this;
var _37431__$1 = this;
return self__.meta37430;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37430","meta37430",372896873,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async37429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37429";

cljs.core.async.t_cljs$core$async37429.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37429");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37429.
 */
cljs.core.async.__GT_t_cljs$core$async37429 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async37429(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37430){
return (new cljs.core.async.t_cljs$core$async37429(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37430));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async37429(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29675__auto___37593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37533){
var state_val_37534 = (state_37533[(1)]);
if((state_val_37534 === (7))){
var inst_37448 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37535_37594 = state_37533__$1;
(statearr_37535_37594[(2)] = inst_37448);

(statearr_37535_37594[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (20))){
var inst_37460 = (state_37533[(7)]);
var state_37533__$1 = state_37533;
var statearr_37536_37595 = state_37533__$1;
(statearr_37536_37595[(2)] = inst_37460);

(statearr_37536_37595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (27))){
var state_37533__$1 = state_37533;
var statearr_37537_37596 = state_37533__$1;
(statearr_37537_37596[(2)] = null);

(statearr_37537_37596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (1))){
var inst_37435 = (state_37533[(8)]);
var inst_37435__$1 = calc_state.call(null);
var inst_37437 = (inst_37435__$1 == null);
var inst_37438 = cljs.core.not.call(null,inst_37437);
var state_37533__$1 = (function (){var statearr_37538 = state_37533;
(statearr_37538[(8)] = inst_37435__$1);

return statearr_37538;
})();
if(inst_37438){
var statearr_37539_37597 = state_37533__$1;
(statearr_37539_37597[(1)] = (2));

} else {
var statearr_37540_37598 = state_37533__$1;
(statearr_37540_37598[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (24))){
var inst_37507 = (state_37533[(9)]);
var inst_37493 = (state_37533[(10)]);
var inst_37484 = (state_37533[(11)]);
var inst_37507__$1 = inst_37484.call(null,inst_37493);
var state_37533__$1 = (function (){var statearr_37541 = state_37533;
(statearr_37541[(9)] = inst_37507__$1);

return statearr_37541;
})();
if(cljs.core.truth_(inst_37507__$1)){
var statearr_37542_37599 = state_37533__$1;
(statearr_37542_37599[(1)] = (29));

} else {
var statearr_37543_37600 = state_37533__$1;
(statearr_37543_37600[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (4))){
var inst_37451 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37451)){
var statearr_37544_37601 = state_37533__$1;
(statearr_37544_37601[(1)] = (8));

} else {
var statearr_37545_37602 = state_37533__$1;
(statearr_37545_37602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (15))){
var inst_37478 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37478)){
var statearr_37546_37603 = state_37533__$1;
(statearr_37546_37603[(1)] = (19));

} else {
var statearr_37547_37604 = state_37533__$1;
(statearr_37547_37604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (21))){
var inst_37483 = (state_37533[(12)]);
var inst_37483__$1 = (state_37533[(2)]);
var inst_37484 = cljs.core.get.call(null,inst_37483__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37485 = cljs.core.get.call(null,inst_37483__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37486 = cljs.core.get.call(null,inst_37483__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37533__$1 = (function (){var statearr_37548 = state_37533;
(statearr_37548[(13)] = inst_37485);

(statearr_37548[(11)] = inst_37484);

(statearr_37548[(12)] = inst_37483__$1);

return statearr_37548;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37533__$1,(22),inst_37486);
} else {
if((state_val_37534 === (31))){
var inst_37515 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37515)){
var statearr_37549_37605 = state_37533__$1;
(statearr_37549_37605[(1)] = (32));

} else {
var statearr_37550_37606 = state_37533__$1;
(statearr_37550_37606[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (32))){
var inst_37492 = (state_37533[(14)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37533__$1,(35),out,inst_37492);
} else {
if((state_val_37534 === (33))){
var inst_37483 = (state_37533[(12)]);
var inst_37460 = inst_37483;
var state_37533__$1 = (function (){var statearr_37551 = state_37533;
(statearr_37551[(7)] = inst_37460);

return statearr_37551;
})();
var statearr_37552_37607 = state_37533__$1;
(statearr_37552_37607[(2)] = null);

(statearr_37552_37607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (13))){
var inst_37460 = (state_37533[(7)]);
var inst_37467 = inst_37460.cljs$lang$protocol_mask$partition0$;
var inst_37468 = (inst_37467 & (64));
var inst_37469 = inst_37460.cljs$core$ISeq$;
var inst_37470 = (cljs.core.PROTOCOL_SENTINEL === inst_37469);
var inst_37471 = ((inst_37468) || (inst_37470));
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37471)){
var statearr_37553_37608 = state_37533__$1;
(statearr_37553_37608[(1)] = (16));

} else {
var statearr_37554_37609 = state_37533__$1;
(statearr_37554_37609[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (22))){
var inst_37492 = (state_37533[(14)]);
var inst_37493 = (state_37533[(10)]);
var inst_37491 = (state_37533[(2)]);
var inst_37492__$1 = cljs.core.nth.call(null,inst_37491,(0),null);
var inst_37493__$1 = cljs.core.nth.call(null,inst_37491,(1),null);
var inst_37494 = (inst_37492__$1 == null);
var inst_37495 = cljs.core._EQ_.call(null,inst_37493__$1,change);
var inst_37496 = ((inst_37494) || (inst_37495));
var state_37533__$1 = (function (){var statearr_37555 = state_37533;
(statearr_37555[(14)] = inst_37492__$1);

(statearr_37555[(10)] = inst_37493__$1);

return statearr_37555;
})();
if(cljs.core.truth_(inst_37496)){
var statearr_37556_37610 = state_37533__$1;
(statearr_37556_37610[(1)] = (23));

} else {
var statearr_37557_37611 = state_37533__$1;
(statearr_37557_37611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (36))){
var inst_37483 = (state_37533[(12)]);
var inst_37460 = inst_37483;
var state_37533__$1 = (function (){var statearr_37558 = state_37533;
(statearr_37558[(7)] = inst_37460);

return statearr_37558;
})();
var statearr_37559_37612 = state_37533__$1;
(statearr_37559_37612[(2)] = null);

(statearr_37559_37612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (29))){
var inst_37507 = (state_37533[(9)]);
var state_37533__$1 = state_37533;
var statearr_37560_37613 = state_37533__$1;
(statearr_37560_37613[(2)] = inst_37507);

(statearr_37560_37613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (6))){
var state_37533__$1 = state_37533;
var statearr_37561_37614 = state_37533__$1;
(statearr_37561_37614[(2)] = false);

(statearr_37561_37614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (28))){
var inst_37503 = (state_37533[(2)]);
var inst_37504 = calc_state.call(null);
var inst_37460 = inst_37504;
var state_37533__$1 = (function (){var statearr_37562 = state_37533;
(statearr_37562[(15)] = inst_37503);

(statearr_37562[(7)] = inst_37460);

return statearr_37562;
})();
var statearr_37563_37615 = state_37533__$1;
(statearr_37563_37615[(2)] = null);

(statearr_37563_37615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (25))){
var inst_37529 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37564_37616 = state_37533__$1;
(statearr_37564_37616[(2)] = inst_37529);

(statearr_37564_37616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (34))){
var inst_37527 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37565_37617 = state_37533__$1;
(statearr_37565_37617[(2)] = inst_37527);

(statearr_37565_37617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (17))){
var state_37533__$1 = state_37533;
var statearr_37566_37618 = state_37533__$1;
(statearr_37566_37618[(2)] = false);

(statearr_37566_37618[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (3))){
var state_37533__$1 = state_37533;
var statearr_37567_37619 = state_37533__$1;
(statearr_37567_37619[(2)] = false);

(statearr_37567_37619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (12))){
var inst_37531 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37533__$1,inst_37531);
} else {
if((state_val_37534 === (2))){
var inst_37435 = (state_37533[(8)]);
var inst_37440 = inst_37435.cljs$lang$protocol_mask$partition0$;
var inst_37441 = (inst_37440 & (64));
var inst_37442 = inst_37435.cljs$core$ISeq$;
var inst_37443 = (cljs.core.PROTOCOL_SENTINEL === inst_37442);
var inst_37444 = ((inst_37441) || (inst_37443));
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37444)){
var statearr_37568_37620 = state_37533__$1;
(statearr_37568_37620[(1)] = (5));

} else {
var statearr_37569_37621 = state_37533__$1;
(statearr_37569_37621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (23))){
var inst_37492 = (state_37533[(14)]);
var inst_37498 = (inst_37492 == null);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37498)){
var statearr_37570_37622 = state_37533__$1;
(statearr_37570_37622[(1)] = (26));

} else {
var statearr_37571_37623 = state_37533__$1;
(statearr_37571_37623[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (35))){
var inst_37518 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37518)){
var statearr_37572_37624 = state_37533__$1;
(statearr_37572_37624[(1)] = (36));

} else {
var statearr_37573_37625 = state_37533__$1;
(statearr_37573_37625[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (19))){
var inst_37460 = (state_37533[(7)]);
var inst_37480 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37460);
var state_37533__$1 = state_37533;
var statearr_37574_37626 = state_37533__$1;
(statearr_37574_37626[(2)] = inst_37480);

(statearr_37574_37626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (11))){
var inst_37460 = (state_37533[(7)]);
var inst_37464 = (inst_37460 == null);
var inst_37465 = cljs.core.not.call(null,inst_37464);
var state_37533__$1 = state_37533;
if(inst_37465){
var statearr_37575_37627 = state_37533__$1;
(statearr_37575_37627[(1)] = (13));

} else {
var statearr_37576_37628 = state_37533__$1;
(statearr_37576_37628[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (9))){
var inst_37435 = (state_37533[(8)]);
var state_37533__$1 = state_37533;
var statearr_37577_37629 = state_37533__$1;
(statearr_37577_37629[(2)] = inst_37435);

(statearr_37577_37629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (5))){
var state_37533__$1 = state_37533;
var statearr_37578_37630 = state_37533__$1;
(statearr_37578_37630[(2)] = true);

(statearr_37578_37630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (14))){
var state_37533__$1 = state_37533;
var statearr_37579_37631 = state_37533__$1;
(statearr_37579_37631[(2)] = false);

(statearr_37579_37631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (26))){
var inst_37493 = (state_37533[(10)]);
var inst_37500 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37493);
var state_37533__$1 = state_37533;
var statearr_37580_37632 = state_37533__$1;
(statearr_37580_37632[(2)] = inst_37500);

(statearr_37580_37632[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (16))){
var state_37533__$1 = state_37533;
var statearr_37581_37633 = state_37533__$1;
(statearr_37581_37633[(2)] = true);

(statearr_37581_37633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (38))){
var inst_37523 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37582_37634 = state_37533__$1;
(statearr_37582_37634[(2)] = inst_37523);

(statearr_37582_37634[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (30))){
var inst_37485 = (state_37533[(13)]);
var inst_37493 = (state_37533[(10)]);
var inst_37484 = (state_37533[(11)]);
var inst_37510 = cljs.core.empty_QMARK_.call(null,inst_37484);
var inst_37511 = inst_37485.call(null,inst_37493);
var inst_37512 = cljs.core.not.call(null,inst_37511);
var inst_37513 = ((inst_37510) && (inst_37512));
var state_37533__$1 = state_37533;
var statearr_37583_37635 = state_37533__$1;
(statearr_37583_37635[(2)] = inst_37513);

(statearr_37583_37635[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (10))){
var inst_37435 = (state_37533[(8)]);
var inst_37456 = (state_37533[(2)]);
var inst_37457 = cljs.core.get.call(null,inst_37456,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37458 = cljs.core.get.call(null,inst_37456,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37459 = cljs.core.get.call(null,inst_37456,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37460 = inst_37435;
var state_37533__$1 = (function (){var statearr_37584 = state_37533;
(statearr_37584[(16)] = inst_37459);

(statearr_37584[(17)] = inst_37457);

(statearr_37584[(18)] = inst_37458);

(statearr_37584[(7)] = inst_37460);

return statearr_37584;
})();
var statearr_37585_37636 = state_37533__$1;
(statearr_37585_37636[(2)] = null);

(statearr_37585_37636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (18))){
var inst_37475 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37586_37637 = state_37533__$1;
(statearr_37586_37637[(2)] = inst_37475);

(statearr_37586_37637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (37))){
var state_37533__$1 = state_37533;
var statearr_37587_37638 = state_37533__$1;
(statearr_37587_37638[(2)] = null);

(statearr_37587_37638[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (8))){
var inst_37435 = (state_37533[(8)]);
var inst_37453 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37435);
var state_37533__$1 = state_37533;
var statearr_37588_37639 = state_37533__$1;
(statearr_37588_37639[(2)] = inst_37453);

(statearr_37588_37639[(1)] = (10));


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
});})(c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29580__auto__,c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29581__auto__ = null;
var cljs$core$async$mix_$_state_machine__29581__auto____0 = (function (){
var statearr_37589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37589[(0)] = cljs$core$async$mix_$_state_machine__29581__auto__);

(statearr_37589[(1)] = (1));

return statearr_37589;
});
var cljs$core$async$mix_$_state_machine__29581__auto____1 = (function (state_37533){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37590){if((e37590 instanceof Object)){
var ex__29584__auto__ = e37590;
var statearr_37591_37640 = state_37533;
(statearr_37591_37640[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37641 = state_37533;
state_37533 = G__37641;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29581__auto__ = function(state_37533){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29581__auto____1.call(this,state_37533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29581__auto____0;
cljs$core$async$mix_$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29581__auto____1;
return cljs$core$async$mix_$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29677__auto__ = (function (){var statearr_37592 = f__29676__auto__.call(null);
(statearr_37592[(6)] = c__29675__auto___37593);

return statearr_37592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___37593,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__37643 = arguments.length;
switch (G__37643) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__37647 = arguments.length;
switch (G__37647) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__37645_SHARP_){
if(cljs.core.truth_(p1__37645_SHARP_.call(null,topic))){
return p1__37645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37645_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37648 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37649){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37649 = meta37649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37650,meta37649__$1){
var self__ = this;
var _37650__$1 = this;
return (new cljs.core.async.t_cljs$core$async37648(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37649__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37650){
var self__ = this;
var _37650__$1 = this;
return self__.meta37649;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37649","meta37649",-1413720383,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37648";

cljs.core.async.t_cljs$core$async37648.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37648");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37648.
 */
cljs.core.async.__GT_t_cljs$core$async37648 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37649){
return (new cljs.core.async.t_cljs$core$async37648(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37649));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37648(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29675__auto___37768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___37768,mults,ensure_mult,p){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___37768,mults,ensure_mult,p){
return (function (state_37722){
var state_val_37723 = (state_37722[(1)]);
if((state_val_37723 === (7))){
var inst_37718 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37724_37769 = state_37722__$1;
(statearr_37724_37769[(2)] = inst_37718);

(statearr_37724_37769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (20))){
var state_37722__$1 = state_37722;
var statearr_37725_37770 = state_37722__$1;
(statearr_37725_37770[(2)] = null);

(statearr_37725_37770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (1))){
var state_37722__$1 = state_37722;
var statearr_37726_37771 = state_37722__$1;
(statearr_37726_37771[(2)] = null);

(statearr_37726_37771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (24))){
var inst_37701 = (state_37722[(7)]);
var inst_37710 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37701);
var state_37722__$1 = state_37722;
var statearr_37727_37772 = state_37722__$1;
(statearr_37727_37772[(2)] = inst_37710);

(statearr_37727_37772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (4))){
var inst_37653 = (state_37722[(8)]);
var inst_37653__$1 = (state_37722[(2)]);
var inst_37654 = (inst_37653__$1 == null);
var state_37722__$1 = (function (){var statearr_37728 = state_37722;
(statearr_37728[(8)] = inst_37653__$1);

return statearr_37728;
})();
if(cljs.core.truth_(inst_37654)){
var statearr_37729_37773 = state_37722__$1;
(statearr_37729_37773[(1)] = (5));

} else {
var statearr_37730_37774 = state_37722__$1;
(statearr_37730_37774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (15))){
var inst_37695 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37731_37775 = state_37722__$1;
(statearr_37731_37775[(2)] = inst_37695);

(statearr_37731_37775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (21))){
var inst_37715 = (state_37722[(2)]);
var state_37722__$1 = (function (){var statearr_37732 = state_37722;
(statearr_37732[(9)] = inst_37715);

return statearr_37732;
})();
var statearr_37733_37776 = state_37722__$1;
(statearr_37733_37776[(2)] = null);

(statearr_37733_37776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (13))){
var inst_37677 = (state_37722[(10)]);
var inst_37679 = cljs.core.chunked_seq_QMARK_.call(null,inst_37677);
var state_37722__$1 = state_37722;
if(inst_37679){
var statearr_37734_37777 = state_37722__$1;
(statearr_37734_37777[(1)] = (16));

} else {
var statearr_37735_37778 = state_37722__$1;
(statearr_37735_37778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (22))){
var inst_37707 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
if(cljs.core.truth_(inst_37707)){
var statearr_37736_37779 = state_37722__$1;
(statearr_37736_37779[(1)] = (23));

} else {
var statearr_37737_37780 = state_37722__$1;
(statearr_37737_37780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (6))){
var inst_37653 = (state_37722[(8)]);
var inst_37701 = (state_37722[(7)]);
var inst_37703 = (state_37722[(11)]);
var inst_37701__$1 = topic_fn.call(null,inst_37653);
var inst_37702 = cljs.core.deref.call(null,mults);
var inst_37703__$1 = cljs.core.get.call(null,inst_37702,inst_37701__$1);
var state_37722__$1 = (function (){var statearr_37738 = state_37722;
(statearr_37738[(7)] = inst_37701__$1);

(statearr_37738[(11)] = inst_37703__$1);

return statearr_37738;
})();
if(cljs.core.truth_(inst_37703__$1)){
var statearr_37739_37781 = state_37722__$1;
(statearr_37739_37781[(1)] = (19));

} else {
var statearr_37740_37782 = state_37722__$1;
(statearr_37740_37782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (25))){
var inst_37712 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37741_37783 = state_37722__$1;
(statearr_37741_37783[(2)] = inst_37712);

(statearr_37741_37783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (17))){
var inst_37677 = (state_37722[(10)]);
var inst_37686 = cljs.core.first.call(null,inst_37677);
var inst_37687 = cljs.core.async.muxch_STAR_.call(null,inst_37686);
var inst_37688 = cljs.core.async.close_BANG_.call(null,inst_37687);
var inst_37689 = cljs.core.next.call(null,inst_37677);
var inst_37663 = inst_37689;
var inst_37664 = null;
var inst_37665 = (0);
var inst_37666 = (0);
var state_37722__$1 = (function (){var statearr_37742 = state_37722;
(statearr_37742[(12)] = inst_37664);

(statearr_37742[(13)] = inst_37688);

(statearr_37742[(14)] = inst_37663);

(statearr_37742[(15)] = inst_37666);

(statearr_37742[(16)] = inst_37665);

return statearr_37742;
})();
var statearr_37743_37784 = state_37722__$1;
(statearr_37743_37784[(2)] = null);

(statearr_37743_37784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (3))){
var inst_37720 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37722__$1,inst_37720);
} else {
if((state_val_37723 === (12))){
var inst_37697 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37744_37785 = state_37722__$1;
(statearr_37744_37785[(2)] = inst_37697);

(statearr_37744_37785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (2))){
var state_37722__$1 = state_37722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37722__$1,(4),ch);
} else {
if((state_val_37723 === (23))){
var state_37722__$1 = state_37722;
var statearr_37745_37786 = state_37722__$1;
(statearr_37745_37786[(2)] = null);

(statearr_37745_37786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (19))){
var inst_37653 = (state_37722[(8)]);
var inst_37703 = (state_37722[(11)]);
var inst_37705 = cljs.core.async.muxch_STAR_.call(null,inst_37703);
var state_37722__$1 = state_37722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37722__$1,(22),inst_37705,inst_37653);
} else {
if((state_val_37723 === (11))){
var inst_37663 = (state_37722[(14)]);
var inst_37677 = (state_37722[(10)]);
var inst_37677__$1 = cljs.core.seq.call(null,inst_37663);
var state_37722__$1 = (function (){var statearr_37746 = state_37722;
(statearr_37746[(10)] = inst_37677__$1);

return statearr_37746;
})();
if(inst_37677__$1){
var statearr_37747_37787 = state_37722__$1;
(statearr_37747_37787[(1)] = (13));

} else {
var statearr_37748_37788 = state_37722__$1;
(statearr_37748_37788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (9))){
var inst_37699 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37749_37789 = state_37722__$1;
(statearr_37749_37789[(2)] = inst_37699);

(statearr_37749_37789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (5))){
var inst_37660 = cljs.core.deref.call(null,mults);
var inst_37661 = cljs.core.vals.call(null,inst_37660);
var inst_37662 = cljs.core.seq.call(null,inst_37661);
var inst_37663 = inst_37662;
var inst_37664 = null;
var inst_37665 = (0);
var inst_37666 = (0);
var state_37722__$1 = (function (){var statearr_37750 = state_37722;
(statearr_37750[(12)] = inst_37664);

(statearr_37750[(14)] = inst_37663);

(statearr_37750[(15)] = inst_37666);

(statearr_37750[(16)] = inst_37665);

return statearr_37750;
})();
var statearr_37751_37790 = state_37722__$1;
(statearr_37751_37790[(2)] = null);

(statearr_37751_37790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (14))){
var state_37722__$1 = state_37722;
var statearr_37755_37791 = state_37722__$1;
(statearr_37755_37791[(2)] = null);

(statearr_37755_37791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (16))){
var inst_37677 = (state_37722[(10)]);
var inst_37681 = cljs.core.chunk_first.call(null,inst_37677);
var inst_37682 = cljs.core.chunk_rest.call(null,inst_37677);
var inst_37683 = cljs.core.count.call(null,inst_37681);
var inst_37663 = inst_37682;
var inst_37664 = inst_37681;
var inst_37665 = inst_37683;
var inst_37666 = (0);
var state_37722__$1 = (function (){var statearr_37756 = state_37722;
(statearr_37756[(12)] = inst_37664);

(statearr_37756[(14)] = inst_37663);

(statearr_37756[(15)] = inst_37666);

(statearr_37756[(16)] = inst_37665);

return statearr_37756;
})();
var statearr_37757_37792 = state_37722__$1;
(statearr_37757_37792[(2)] = null);

(statearr_37757_37792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (10))){
var inst_37664 = (state_37722[(12)]);
var inst_37663 = (state_37722[(14)]);
var inst_37666 = (state_37722[(15)]);
var inst_37665 = (state_37722[(16)]);
var inst_37671 = cljs.core._nth.call(null,inst_37664,inst_37666);
var inst_37672 = cljs.core.async.muxch_STAR_.call(null,inst_37671);
var inst_37673 = cljs.core.async.close_BANG_.call(null,inst_37672);
var inst_37674 = (inst_37666 + (1));
var tmp37752 = inst_37664;
var tmp37753 = inst_37663;
var tmp37754 = inst_37665;
var inst_37663__$1 = tmp37753;
var inst_37664__$1 = tmp37752;
var inst_37665__$1 = tmp37754;
var inst_37666__$1 = inst_37674;
var state_37722__$1 = (function (){var statearr_37758 = state_37722;
(statearr_37758[(12)] = inst_37664__$1);

(statearr_37758[(14)] = inst_37663__$1);

(statearr_37758[(17)] = inst_37673);

(statearr_37758[(15)] = inst_37666__$1);

(statearr_37758[(16)] = inst_37665__$1);

return statearr_37758;
})();
var statearr_37759_37793 = state_37722__$1;
(statearr_37759_37793[(2)] = null);

(statearr_37759_37793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (18))){
var inst_37692 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37760_37794 = state_37722__$1;
(statearr_37760_37794[(2)] = inst_37692);

(statearr_37760_37794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (8))){
var inst_37666 = (state_37722[(15)]);
var inst_37665 = (state_37722[(16)]);
var inst_37668 = (inst_37666 < inst_37665);
var inst_37669 = inst_37668;
var state_37722__$1 = state_37722;
if(cljs.core.truth_(inst_37669)){
var statearr_37761_37795 = state_37722__$1;
(statearr_37761_37795[(1)] = (10));

} else {
var statearr_37762_37796 = state_37722__$1;
(statearr_37762_37796[(1)] = (11));

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
});})(c__29675__auto___37768,mults,ensure_mult,p))
;
return ((function (switch__29580__auto__,c__29675__auto___37768,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_37763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37763[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_37763[(1)] = (1));

return statearr_37763;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_37722){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37764){if((e37764 instanceof Object)){
var ex__29584__auto__ = e37764;
var statearr_37765_37797 = state_37722;
(statearr_37765_37797[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37798 = state_37722;
state_37722 = G__37798;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_37722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_37722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___37768,mults,ensure_mult,p))
})();
var state__29677__auto__ = (function (){var statearr_37766 = f__29676__auto__.call(null);
(statearr_37766[(6)] = c__29675__auto___37768);

return statearr_37766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___37768,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__37800 = arguments.length;
switch (G__37800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__37803 = arguments.length;
switch (G__37803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__37806 = arguments.length;
switch (G__37806) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29675__auto___37873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37845){
var state_val_37846 = (state_37845[(1)]);
if((state_val_37846 === (7))){
var state_37845__$1 = state_37845;
var statearr_37847_37874 = state_37845__$1;
(statearr_37847_37874[(2)] = null);

(statearr_37847_37874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (1))){
var state_37845__$1 = state_37845;
var statearr_37848_37875 = state_37845__$1;
(statearr_37848_37875[(2)] = null);

(statearr_37848_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (4))){
var inst_37809 = (state_37845[(7)]);
var inst_37811 = (inst_37809 < cnt);
var state_37845__$1 = state_37845;
if(cljs.core.truth_(inst_37811)){
var statearr_37849_37876 = state_37845__$1;
(statearr_37849_37876[(1)] = (6));

} else {
var statearr_37850_37877 = state_37845__$1;
(statearr_37850_37877[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (15))){
var inst_37841 = (state_37845[(2)]);
var state_37845__$1 = state_37845;
var statearr_37851_37878 = state_37845__$1;
(statearr_37851_37878[(2)] = inst_37841);

(statearr_37851_37878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (13))){
var inst_37834 = cljs.core.async.close_BANG_.call(null,out);
var state_37845__$1 = state_37845;
var statearr_37852_37879 = state_37845__$1;
(statearr_37852_37879[(2)] = inst_37834);

(statearr_37852_37879[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (6))){
var state_37845__$1 = state_37845;
var statearr_37853_37880 = state_37845__$1;
(statearr_37853_37880[(2)] = null);

(statearr_37853_37880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (3))){
var inst_37843 = (state_37845[(2)]);
var state_37845__$1 = state_37845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37845__$1,inst_37843);
} else {
if((state_val_37846 === (12))){
var inst_37831 = (state_37845[(8)]);
var inst_37831__$1 = (state_37845[(2)]);
var inst_37832 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37831__$1);
var state_37845__$1 = (function (){var statearr_37854 = state_37845;
(statearr_37854[(8)] = inst_37831__$1);

return statearr_37854;
})();
if(cljs.core.truth_(inst_37832)){
var statearr_37855_37881 = state_37845__$1;
(statearr_37855_37881[(1)] = (13));

} else {
var statearr_37856_37882 = state_37845__$1;
(statearr_37856_37882[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (2))){
var inst_37808 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37809 = (0);
var state_37845__$1 = (function (){var statearr_37857 = state_37845;
(statearr_37857[(7)] = inst_37809);

(statearr_37857[(9)] = inst_37808);

return statearr_37857;
})();
var statearr_37858_37883 = state_37845__$1;
(statearr_37858_37883[(2)] = null);

(statearr_37858_37883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (11))){
var inst_37809 = (state_37845[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37845,(10),Object,null,(9));
var inst_37818 = chs__$1.call(null,inst_37809);
var inst_37819 = done.call(null,inst_37809);
var inst_37820 = cljs.core.async.take_BANG_.call(null,inst_37818,inst_37819);
var state_37845__$1 = state_37845;
var statearr_37859_37884 = state_37845__$1;
(statearr_37859_37884[(2)] = inst_37820);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (9))){
var inst_37809 = (state_37845[(7)]);
var inst_37822 = (state_37845[(2)]);
var inst_37823 = (inst_37809 + (1));
var inst_37809__$1 = inst_37823;
var state_37845__$1 = (function (){var statearr_37860 = state_37845;
(statearr_37860[(7)] = inst_37809__$1);

(statearr_37860[(10)] = inst_37822);

return statearr_37860;
})();
var statearr_37861_37885 = state_37845__$1;
(statearr_37861_37885[(2)] = null);

(statearr_37861_37885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (5))){
var inst_37829 = (state_37845[(2)]);
var state_37845__$1 = (function (){var statearr_37862 = state_37845;
(statearr_37862[(11)] = inst_37829);

return statearr_37862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37845__$1,(12),dchan);
} else {
if((state_val_37846 === (14))){
var inst_37831 = (state_37845[(8)]);
var inst_37836 = cljs.core.apply.call(null,f,inst_37831);
var state_37845__$1 = state_37845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37845__$1,(16),out,inst_37836);
} else {
if((state_val_37846 === (16))){
var inst_37838 = (state_37845[(2)]);
var state_37845__$1 = (function (){var statearr_37863 = state_37845;
(statearr_37863[(12)] = inst_37838);

return statearr_37863;
})();
var statearr_37864_37886 = state_37845__$1;
(statearr_37864_37886[(2)] = null);

(statearr_37864_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (10))){
var inst_37813 = (state_37845[(2)]);
var inst_37814 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37845__$1 = (function (){var statearr_37865 = state_37845;
(statearr_37865[(13)] = inst_37813);

return statearr_37865;
})();
var statearr_37866_37887 = state_37845__$1;
(statearr_37866_37887[(2)] = inst_37814);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37845__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37846 === (8))){
var inst_37827 = (state_37845[(2)]);
var state_37845__$1 = state_37845;
var statearr_37867_37888 = state_37845__$1;
(statearr_37867_37888[(2)] = inst_37827);

(statearr_37867_37888[(1)] = (5));


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
});})(c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29580__auto__,c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_37868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37868[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_37868[(1)] = (1));

return statearr_37868;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_37845){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37869){if((e37869 instanceof Object)){
var ex__29584__auto__ = e37869;
var statearr_37870_37889 = state_37845;
(statearr_37870_37889[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37890 = state_37845;
state_37845 = G__37890;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_37845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_37845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29677__auto__ = (function (){var statearr_37871 = f__29676__auto__.call(null);
(statearr_37871[(6)] = c__29675__auto___37873);

return statearr_37871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___37873,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__37893 = arguments.length;
switch (G__37893) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___37947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___37947,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___37947,out){
return (function (state_37925){
var state_val_37926 = (state_37925[(1)]);
if((state_val_37926 === (7))){
var inst_37904 = (state_37925[(7)]);
var inst_37905 = (state_37925[(8)]);
var inst_37904__$1 = (state_37925[(2)]);
var inst_37905__$1 = cljs.core.nth.call(null,inst_37904__$1,(0),null);
var inst_37906 = cljs.core.nth.call(null,inst_37904__$1,(1),null);
var inst_37907 = (inst_37905__$1 == null);
var state_37925__$1 = (function (){var statearr_37927 = state_37925;
(statearr_37927[(9)] = inst_37906);

(statearr_37927[(7)] = inst_37904__$1);

(statearr_37927[(8)] = inst_37905__$1);

return statearr_37927;
})();
if(cljs.core.truth_(inst_37907)){
var statearr_37928_37948 = state_37925__$1;
(statearr_37928_37948[(1)] = (8));

} else {
var statearr_37929_37949 = state_37925__$1;
(statearr_37929_37949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (1))){
var inst_37894 = cljs.core.vec.call(null,chs);
var inst_37895 = inst_37894;
var state_37925__$1 = (function (){var statearr_37930 = state_37925;
(statearr_37930[(10)] = inst_37895);

return statearr_37930;
})();
var statearr_37931_37950 = state_37925__$1;
(statearr_37931_37950[(2)] = null);

(statearr_37931_37950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (4))){
var inst_37895 = (state_37925[(10)]);
var state_37925__$1 = state_37925;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37925__$1,(7),inst_37895);
} else {
if((state_val_37926 === (6))){
var inst_37921 = (state_37925[(2)]);
var state_37925__$1 = state_37925;
var statearr_37932_37951 = state_37925__$1;
(statearr_37932_37951[(2)] = inst_37921);

(statearr_37932_37951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (3))){
var inst_37923 = (state_37925[(2)]);
var state_37925__$1 = state_37925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37925__$1,inst_37923);
} else {
if((state_val_37926 === (2))){
var inst_37895 = (state_37925[(10)]);
var inst_37897 = cljs.core.count.call(null,inst_37895);
var inst_37898 = (inst_37897 > (0));
var state_37925__$1 = state_37925;
if(cljs.core.truth_(inst_37898)){
var statearr_37934_37952 = state_37925__$1;
(statearr_37934_37952[(1)] = (4));

} else {
var statearr_37935_37953 = state_37925__$1;
(statearr_37935_37953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (11))){
var inst_37895 = (state_37925[(10)]);
var inst_37914 = (state_37925[(2)]);
var tmp37933 = inst_37895;
var inst_37895__$1 = tmp37933;
var state_37925__$1 = (function (){var statearr_37936 = state_37925;
(statearr_37936[(10)] = inst_37895__$1);

(statearr_37936[(11)] = inst_37914);

return statearr_37936;
})();
var statearr_37937_37954 = state_37925__$1;
(statearr_37937_37954[(2)] = null);

(statearr_37937_37954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (9))){
var inst_37905 = (state_37925[(8)]);
var state_37925__$1 = state_37925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37925__$1,(11),out,inst_37905);
} else {
if((state_val_37926 === (5))){
var inst_37919 = cljs.core.async.close_BANG_.call(null,out);
var state_37925__$1 = state_37925;
var statearr_37938_37955 = state_37925__$1;
(statearr_37938_37955[(2)] = inst_37919);

(statearr_37938_37955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (10))){
var inst_37917 = (state_37925[(2)]);
var state_37925__$1 = state_37925;
var statearr_37939_37956 = state_37925__$1;
(statearr_37939_37956[(2)] = inst_37917);

(statearr_37939_37956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37926 === (8))){
var inst_37895 = (state_37925[(10)]);
var inst_37906 = (state_37925[(9)]);
var inst_37904 = (state_37925[(7)]);
var inst_37905 = (state_37925[(8)]);
var inst_37909 = (function (){var cs = inst_37895;
var vec__37900 = inst_37904;
var v = inst_37905;
var c = inst_37906;
return ((function (cs,vec__37900,v,c,inst_37895,inst_37906,inst_37904,inst_37905,state_val_37926,c__29675__auto___37947,out){
return (function (p1__37891_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37891_SHARP_);
});
;})(cs,vec__37900,v,c,inst_37895,inst_37906,inst_37904,inst_37905,state_val_37926,c__29675__auto___37947,out))
})();
var inst_37910 = cljs.core.filterv.call(null,inst_37909,inst_37895);
var inst_37895__$1 = inst_37910;
var state_37925__$1 = (function (){var statearr_37940 = state_37925;
(statearr_37940[(10)] = inst_37895__$1);

return statearr_37940;
})();
var statearr_37941_37957 = state_37925__$1;
(statearr_37941_37957[(2)] = null);

(statearr_37941_37957[(1)] = (2));


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
});})(c__29675__auto___37947,out))
;
return ((function (switch__29580__auto__,c__29675__auto___37947,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_37942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37942[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_37942[(1)] = (1));

return statearr_37942;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_37925){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e37943){if((e37943 instanceof Object)){
var ex__29584__auto__ = e37943;
var statearr_37944_37958 = state_37925;
(statearr_37944_37958[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_37925;
state_37925 = G__37959;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_37925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_37925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___37947,out))
})();
var state__29677__auto__ = (function (){var statearr_37945 = f__29676__auto__.call(null);
(statearr_37945[(6)] = c__29675__auto___37947);

return statearr_37945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___37947,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__37961 = arguments.length;
switch (G__37961) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___38006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___38006,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___38006,out){
return (function (state_37985){
var state_val_37986 = (state_37985[(1)]);
if((state_val_37986 === (7))){
var inst_37967 = (state_37985[(7)]);
var inst_37967__$1 = (state_37985[(2)]);
var inst_37968 = (inst_37967__$1 == null);
var inst_37969 = cljs.core.not.call(null,inst_37968);
var state_37985__$1 = (function (){var statearr_37987 = state_37985;
(statearr_37987[(7)] = inst_37967__$1);

return statearr_37987;
})();
if(inst_37969){
var statearr_37988_38007 = state_37985__$1;
(statearr_37988_38007[(1)] = (8));

} else {
var statearr_37989_38008 = state_37985__$1;
(statearr_37989_38008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (1))){
var inst_37962 = (0);
var state_37985__$1 = (function (){var statearr_37990 = state_37985;
(statearr_37990[(8)] = inst_37962);

return statearr_37990;
})();
var statearr_37991_38009 = state_37985__$1;
(statearr_37991_38009[(2)] = null);

(statearr_37991_38009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (4))){
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37985__$1,(7),ch);
} else {
if((state_val_37986 === (6))){
var inst_37980 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_37992_38010 = state_37985__$1;
(statearr_37992_38010[(2)] = inst_37980);

(statearr_37992_38010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (3))){
var inst_37982 = (state_37985[(2)]);
var inst_37983 = cljs.core.async.close_BANG_.call(null,out);
var state_37985__$1 = (function (){var statearr_37993 = state_37985;
(statearr_37993[(9)] = inst_37982);

return statearr_37993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37985__$1,inst_37983);
} else {
if((state_val_37986 === (2))){
var inst_37962 = (state_37985[(8)]);
var inst_37964 = (inst_37962 < n);
var state_37985__$1 = state_37985;
if(cljs.core.truth_(inst_37964)){
var statearr_37994_38011 = state_37985__$1;
(statearr_37994_38011[(1)] = (4));

} else {
var statearr_37995_38012 = state_37985__$1;
(statearr_37995_38012[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (11))){
var inst_37962 = (state_37985[(8)]);
var inst_37972 = (state_37985[(2)]);
var inst_37973 = (inst_37962 + (1));
var inst_37962__$1 = inst_37973;
var state_37985__$1 = (function (){var statearr_37996 = state_37985;
(statearr_37996[(8)] = inst_37962__$1);

(statearr_37996[(10)] = inst_37972);

return statearr_37996;
})();
var statearr_37997_38013 = state_37985__$1;
(statearr_37997_38013[(2)] = null);

(statearr_37997_38013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (9))){
var state_37985__$1 = state_37985;
var statearr_37998_38014 = state_37985__$1;
(statearr_37998_38014[(2)] = null);

(statearr_37998_38014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (5))){
var state_37985__$1 = state_37985;
var statearr_37999_38015 = state_37985__$1;
(statearr_37999_38015[(2)] = null);

(statearr_37999_38015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (10))){
var inst_37977 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_38000_38016 = state_37985__$1;
(statearr_38000_38016[(2)] = inst_37977);

(statearr_38000_38016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (8))){
var inst_37967 = (state_37985[(7)]);
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37985__$1,(11),out,inst_37967);
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
});})(c__29675__auto___38006,out))
;
return ((function (switch__29580__auto__,c__29675__auto___38006,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_38001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38001[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_38001[(1)] = (1));

return statearr_38001;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_37985){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_37985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38002){if((e38002 instanceof Object)){
var ex__29584__auto__ = e38002;
var statearr_38003_38017 = state_37985;
(statearr_38003_38017[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38018 = state_37985;
state_37985 = G__38018;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_37985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_37985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___38006,out))
})();
var state__29677__auto__ = (function (){var statearr_38004 = f__29676__auto__.call(null);
(statearr_38004[(6)] = c__29675__auto___38006);

return statearr_38004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___38006,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38020 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38020 = (function (f,ch,meta38021){
this.f = f;
this.ch = ch;
this.meta38021 = meta38021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38022,meta38021__$1){
var self__ = this;
var _38022__$1 = this;
return (new cljs.core.async.t_cljs$core$async38020(self__.f,self__.ch,meta38021__$1));
});

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38022){
var self__ = this;
var _38022__$1 = this;
return self__.meta38021;
});

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38023 = (function (f,ch,meta38021,_,fn1,meta38024){
this.f = f;
this.ch = ch;
this.meta38021 = meta38021;
this._ = _;
this.fn1 = fn1;
this.meta38024 = meta38024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38025,meta38024__$1){
var self__ = this;
var _38025__$1 = this;
return (new cljs.core.async.t_cljs$core$async38023(self__.f,self__.ch,self__.meta38021,self__._,self__.fn1,meta38024__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38025){
var self__ = this;
var _38025__$1 = this;
return self__.meta38024;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38019_SHARP_){
return f1.call(null,(((p1__38019_SHARP_ == null))?null:self__.f.call(null,p1__38019_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38021","meta38021",247398733,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38020","cljs.core.async/t_cljs$core$async38020",1001461268,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38024","meta38024",-1566353176,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async38023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38023";

cljs.core.async.t_cljs$core$async38023.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38023");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38023.
 */
cljs.core.async.__GT_t_cljs$core$async38023 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38023(f__$1,ch__$1,meta38021__$1,___$2,fn1__$1,meta38024){
return (new cljs.core.async.t_cljs$core$async38023(f__$1,ch__$1,meta38021__$1,___$2,fn1__$1,meta38024));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async38023(self__.f,self__.ch,self__.meta38021,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async38020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38021","meta38021",247398733,null)], null);
});

cljs.core.async.t_cljs$core$async38020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38020";

cljs.core.async.t_cljs$core$async38020.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38020");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38020.
 */
cljs.core.async.__GT_t_cljs$core$async38020 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38020(f__$1,ch__$1,meta38021){
return (new cljs.core.async.t_cljs$core$async38020(f__$1,ch__$1,meta38021));
});

}

return (new cljs.core.async.t_cljs$core$async38020(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38026 = (function (f,ch,meta38027){
this.f = f;
this.ch = ch;
this.meta38027 = meta38027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38028,meta38027__$1){
var self__ = this;
var _38028__$1 = this;
return (new cljs.core.async.t_cljs$core$async38026(self__.f,self__.ch,meta38027__$1));
});

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38028){
var self__ = this;
var _38028__$1 = this;
return self__.meta38027;
});

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38026.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async38026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38027","meta38027",-1832944645,null)], null);
});

cljs.core.async.t_cljs$core$async38026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38026";

cljs.core.async.t_cljs$core$async38026.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38026");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38026.
 */
cljs.core.async.__GT_t_cljs$core$async38026 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38026(f__$1,ch__$1,meta38027){
return (new cljs.core.async.t_cljs$core$async38026(f__$1,ch__$1,meta38027));
});

}

return (new cljs.core.async.t_cljs$core$async38026(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38029 = (function (p,ch,meta38030){
this.p = p;
this.ch = ch;
this.meta38030 = meta38030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38031,meta38030__$1){
var self__ = this;
var _38031__$1 = this;
return (new cljs.core.async.t_cljs$core$async38029(self__.p,self__.ch,meta38030__$1));
});

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38031){
var self__ = this;
var _38031__$1 = this;
return self__.meta38030;
});

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async38029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38030","meta38030",-451589552,null)], null);
});

cljs.core.async.t_cljs$core$async38029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38029";

cljs.core.async.t_cljs$core$async38029.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38029");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38029.
 */
cljs.core.async.__GT_t_cljs$core$async38029 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38029(p__$1,ch__$1,meta38030){
return (new cljs.core.async.t_cljs$core$async38029(p__$1,ch__$1,meta38030));
});

}

return (new cljs.core.async.t_cljs$core$async38029(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38033 = arguments.length;
switch (G__38033) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___38073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___38073,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___38073,out){
return (function (state_38054){
var state_val_38055 = (state_38054[(1)]);
if((state_val_38055 === (7))){
var inst_38050 = (state_38054[(2)]);
var state_38054__$1 = state_38054;
var statearr_38056_38074 = state_38054__$1;
(statearr_38056_38074[(2)] = inst_38050);

(statearr_38056_38074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (1))){
var state_38054__$1 = state_38054;
var statearr_38057_38075 = state_38054__$1;
(statearr_38057_38075[(2)] = null);

(statearr_38057_38075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (4))){
var inst_38036 = (state_38054[(7)]);
var inst_38036__$1 = (state_38054[(2)]);
var inst_38037 = (inst_38036__$1 == null);
var state_38054__$1 = (function (){var statearr_38058 = state_38054;
(statearr_38058[(7)] = inst_38036__$1);

return statearr_38058;
})();
if(cljs.core.truth_(inst_38037)){
var statearr_38059_38076 = state_38054__$1;
(statearr_38059_38076[(1)] = (5));

} else {
var statearr_38060_38077 = state_38054__$1;
(statearr_38060_38077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (6))){
var inst_38036 = (state_38054[(7)]);
var inst_38041 = p.call(null,inst_38036);
var state_38054__$1 = state_38054;
if(cljs.core.truth_(inst_38041)){
var statearr_38061_38078 = state_38054__$1;
(statearr_38061_38078[(1)] = (8));

} else {
var statearr_38062_38079 = state_38054__$1;
(statearr_38062_38079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (3))){
var inst_38052 = (state_38054[(2)]);
var state_38054__$1 = state_38054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38054__$1,inst_38052);
} else {
if((state_val_38055 === (2))){
var state_38054__$1 = state_38054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38054__$1,(4),ch);
} else {
if((state_val_38055 === (11))){
var inst_38044 = (state_38054[(2)]);
var state_38054__$1 = state_38054;
var statearr_38063_38080 = state_38054__$1;
(statearr_38063_38080[(2)] = inst_38044);

(statearr_38063_38080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (9))){
var state_38054__$1 = state_38054;
var statearr_38064_38081 = state_38054__$1;
(statearr_38064_38081[(2)] = null);

(statearr_38064_38081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (5))){
var inst_38039 = cljs.core.async.close_BANG_.call(null,out);
var state_38054__$1 = state_38054;
var statearr_38065_38082 = state_38054__$1;
(statearr_38065_38082[(2)] = inst_38039);

(statearr_38065_38082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (10))){
var inst_38047 = (state_38054[(2)]);
var state_38054__$1 = (function (){var statearr_38066 = state_38054;
(statearr_38066[(8)] = inst_38047);

return statearr_38066;
})();
var statearr_38067_38083 = state_38054__$1;
(statearr_38067_38083[(2)] = null);

(statearr_38067_38083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38055 === (8))){
var inst_38036 = (state_38054[(7)]);
var state_38054__$1 = state_38054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38054__$1,(11),out,inst_38036);
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
});})(c__29675__auto___38073,out))
;
return ((function (switch__29580__auto__,c__29675__auto___38073,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_38068 = [null,null,null,null,null,null,null,null,null];
(statearr_38068[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_38068[(1)] = (1));

return statearr_38068;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_38054){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_38054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38069){if((e38069 instanceof Object)){
var ex__29584__auto__ = e38069;
var statearr_38070_38084 = state_38054;
(statearr_38070_38084[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38085 = state_38054;
state_38054 = G__38085;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_38054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_38054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___38073,out))
})();
var state__29677__auto__ = (function (){var statearr_38071 = f__29676__auto__.call(null);
(statearr_38071[(6)] = c__29675__auto___38073);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___38073,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38087 = arguments.length;
switch (G__38087) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29675__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto__){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto__){
return (function (state_38150){
var state_val_38151 = (state_38150[(1)]);
if((state_val_38151 === (7))){
var inst_38146 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
var statearr_38152_38190 = state_38150__$1;
(statearr_38152_38190[(2)] = inst_38146);

(statearr_38152_38190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (20))){
var inst_38116 = (state_38150[(7)]);
var inst_38127 = (state_38150[(2)]);
var inst_38128 = cljs.core.next.call(null,inst_38116);
var inst_38102 = inst_38128;
var inst_38103 = null;
var inst_38104 = (0);
var inst_38105 = (0);
var state_38150__$1 = (function (){var statearr_38153 = state_38150;
(statearr_38153[(8)] = inst_38127);

(statearr_38153[(9)] = inst_38102);

(statearr_38153[(10)] = inst_38104);

(statearr_38153[(11)] = inst_38103);

(statearr_38153[(12)] = inst_38105);

return statearr_38153;
})();
var statearr_38154_38191 = state_38150__$1;
(statearr_38154_38191[(2)] = null);

(statearr_38154_38191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (1))){
var state_38150__$1 = state_38150;
var statearr_38155_38192 = state_38150__$1;
(statearr_38155_38192[(2)] = null);

(statearr_38155_38192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (4))){
var inst_38091 = (state_38150[(13)]);
var inst_38091__$1 = (state_38150[(2)]);
var inst_38092 = (inst_38091__$1 == null);
var state_38150__$1 = (function (){var statearr_38156 = state_38150;
(statearr_38156[(13)] = inst_38091__$1);

return statearr_38156;
})();
if(cljs.core.truth_(inst_38092)){
var statearr_38157_38193 = state_38150__$1;
(statearr_38157_38193[(1)] = (5));

} else {
var statearr_38158_38194 = state_38150__$1;
(statearr_38158_38194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (15))){
var state_38150__$1 = state_38150;
var statearr_38162_38195 = state_38150__$1;
(statearr_38162_38195[(2)] = null);

(statearr_38162_38195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (21))){
var state_38150__$1 = state_38150;
var statearr_38163_38196 = state_38150__$1;
(statearr_38163_38196[(2)] = null);

(statearr_38163_38196[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (13))){
var inst_38102 = (state_38150[(9)]);
var inst_38104 = (state_38150[(10)]);
var inst_38103 = (state_38150[(11)]);
var inst_38105 = (state_38150[(12)]);
var inst_38112 = (state_38150[(2)]);
var inst_38113 = (inst_38105 + (1));
var tmp38159 = inst_38102;
var tmp38160 = inst_38104;
var tmp38161 = inst_38103;
var inst_38102__$1 = tmp38159;
var inst_38103__$1 = tmp38161;
var inst_38104__$1 = tmp38160;
var inst_38105__$1 = inst_38113;
var state_38150__$1 = (function (){var statearr_38164 = state_38150;
(statearr_38164[(9)] = inst_38102__$1);

(statearr_38164[(14)] = inst_38112);

(statearr_38164[(10)] = inst_38104__$1);

(statearr_38164[(11)] = inst_38103__$1);

(statearr_38164[(12)] = inst_38105__$1);

return statearr_38164;
})();
var statearr_38165_38197 = state_38150__$1;
(statearr_38165_38197[(2)] = null);

(statearr_38165_38197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (22))){
var state_38150__$1 = state_38150;
var statearr_38166_38198 = state_38150__$1;
(statearr_38166_38198[(2)] = null);

(statearr_38166_38198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (6))){
var inst_38091 = (state_38150[(13)]);
var inst_38100 = f.call(null,inst_38091);
var inst_38101 = cljs.core.seq.call(null,inst_38100);
var inst_38102 = inst_38101;
var inst_38103 = null;
var inst_38104 = (0);
var inst_38105 = (0);
var state_38150__$1 = (function (){var statearr_38167 = state_38150;
(statearr_38167[(9)] = inst_38102);

(statearr_38167[(10)] = inst_38104);

(statearr_38167[(11)] = inst_38103);

(statearr_38167[(12)] = inst_38105);

return statearr_38167;
})();
var statearr_38168_38199 = state_38150__$1;
(statearr_38168_38199[(2)] = null);

(statearr_38168_38199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (17))){
var inst_38116 = (state_38150[(7)]);
var inst_38120 = cljs.core.chunk_first.call(null,inst_38116);
var inst_38121 = cljs.core.chunk_rest.call(null,inst_38116);
var inst_38122 = cljs.core.count.call(null,inst_38120);
var inst_38102 = inst_38121;
var inst_38103 = inst_38120;
var inst_38104 = inst_38122;
var inst_38105 = (0);
var state_38150__$1 = (function (){var statearr_38169 = state_38150;
(statearr_38169[(9)] = inst_38102);

(statearr_38169[(10)] = inst_38104);

(statearr_38169[(11)] = inst_38103);

(statearr_38169[(12)] = inst_38105);

return statearr_38169;
})();
var statearr_38170_38200 = state_38150__$1;
(statearr_38170_38200[(2)] = null);

(statearr_38170_38200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (3))){
var inst_38148 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38150__$1,inst_38148);
} else {
if((state_val_38151 === (12))){
var inst_38136 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
var statearr_38171_38201 = state_38150__$1;
(statearr_38171_38201[(2)] = inst_38136);

(statearr_38171_38201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (2))){
var state_38150__$1 = state_38150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38150__$1,(4),in$);
} else {
if((state_val_38151 === (23))){
var inst_38144 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
var statearr_38172_38202 = state_38150__$1;
(statearr_38172_38202[(2)] = inst_38144);

(statearr_38172_38202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (19))){
var inst_38131 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
var statearr_38173_38203 = state_38150__$1;
(statearr_38173_38203[(2)] = inst_38131);

(statearr_38173_38203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (11))){
var inst_38102 = (state_38150[(9)]);
var inst_38116 = (state_38150[(7)]);
var inst_38116__$1 = cljs.core.seq.call(null,inst_38102);
var state_38150__$1 = (function (){var statearr_38174 = state_38150;
(statearr_38174[(7)] = inst_38116__$1);

return statearr_38174;
})();
if(inst_38116__$1){
var statearr_38175_38204 = state_38150__$1;
(statearr_38175_38204[(1)] = (14));

} else {
var statearr_38176_38205 = state_38150__$1;
(statearr_38176_38205[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (9))){
var inst_38138 = (state_38150[(2)]);
var inst_38139 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38150__$1 = (function (){var statearr_38177 = state_38150;
(statearr_38177[(15)] = inst_38138);

return statearr_38177;
})();
if(cljs.core.truth_(inst_38139)){
var statearr_38178_38206 = state_38150__$1;
(statearr_38178_38206[(1)] = (21));

} else {
var statearr_38179_38207 = state_38150__$1;
(statearr_38179_38207[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (5))){
var inst_38094 = cljs.core.async.close_BANG_.call(null,out);
var state_38150__$1 = state_38150;
var statearr_38180_38208 = state_38150__$1;
(statearr_38180_38208[(2)] = inst_38094);

(statearr_38180_38208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (14))){
var inst_38116 = (state_38150[(7)]);
var inst_38118 = cljs.core.chunked_seq_QMARK_.call(null,inst_38116);
var state_38150__$1 = state_38150;
if(inst_38118){
var statearr_38181_38209 = state_38150__$1;
(statearr_38181_38209[(1)] = (17));

} else {
var statearr_38182_38210 = state_38150__$1;
(statearr_38182_38210[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (16))){
var inst_38134 = (state_38150[(2)]);
var state_38150__$1 = state_38150;
var statearr_38183_38211 = state_38150__$1;
(statearr_38183_38211[(2)] = inst_38134);

(statearr_38183_38211[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38151 === (10))){
var inst_38103 = (state_38150[(11)]);
var inst_38105 = (state_38150[(12)]);
var inst_38110 = cljs.core._nth.call(null,inst_38103,inst_38105);
var state_38150__$1 = state_38150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38150__$1,(13),out,inst_38110);
} else {
if((state_val_38151 === (18))){
var inst_38116 = (state_38150[(7)]);
var inst_38125 = cljs.core.first.call(null,inst_38116);
var state_38150__$1 = state_38150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38150__$1,(20),out,inst_38125);
} else {
if((state_val_38151 === (8))){
var inst_38104 = (state_38150[(10)]);
var inst_38105 = (state_38150[(12)]);
var inst_38107 = (inst_38105 < inst_38104);
var inst_38108 = inst_38107;
var state_38150__$1 = state_38150;
if(cljs.core.truth_(inst_38108)){
var statearr_38184_38212 = state_38150__$1;
(statearr_38184_38212[(1)] = (10));

} else {
var statearr_38185_38213 = state_38150__$1;
(statearr_38185_38213[(1)] = (11));

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
});})(c__29675__auto__))
;
return ((function (switch__29580__auto__,c__29675__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____0 = (function (){
var statearr_38186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38186[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__);

(statearr_38186[(1)] = (1));

return statearr_38186;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____1 = (function (state_38150){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_38150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38187){if((e38187 instanceof Object)){
var ex__29584__auto__ = e38187;
var statearr_38188_38214 = state_38150;
(statearr_38188_38214[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38215 = state_38150;
state_38150 = G__38215;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__ = function(state_38150){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____1.call(this,state_38150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29581__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto__))
})();
var state__29677__auto__ = (function (){var statearr_38189 = f__29676__auto__.call(null);
(statearr_38189[(6)] = c__29675__auto__);

return statearr_38189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto__))
);

return c__29675__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38217 = arguments.length;
switch (G__38217) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38220 = arguments.length;
switch (G__38220) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38223 = arguments.length;
switch (G__38223) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___38270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___38270,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___38270,out){
return (function (state_38247){
var state_val_38248 = (state_38247[(1)]);
if((state_val_38248 === (7))){
var inst_38242 = (state_38247[(2)]);
var state_38247__$1 = state_38247;
var statearr_38249_38271 = state_38247__$1;
(statearr_38249_38271[(2)] = inst_38242);

(statearr_38249_38271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (1))){
var inst_38224 = null;
var state_38247__$1 = (function (){var statearr_38250 = state_38247;
(statearr_38250[(7)] = inst_38224);

return statearr_38250;
})();
var statearr_38251_38272 = state_38247__$1;
(statearr_38251_38272[(2)] = null);

(statearr_38251_38272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (4))){
var inst_38227 = (state_38247[(8)]);
var inst_38227__$1 = (state_38247[(2)]);
var inst_38228 = (inst_38227__$1 == null);
var inst_38229 = cljs.core.not.call(null,inst_38228);
var state_38247__$1 = (function (){var statearr_38252 = state_38247;
(statearr_38252[(8)] = inst_38227__$1);

return statearr_38252;
})();
if(inst_38229){
var statearr_38253_38273 = state_38247__$1;
(statearr_38253_38273[(1)] = (5));

} else {
var statearr_38254_38274 = state_38247__$1;
(statearr_38254_38274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (6))){
var state_38247__$1 = state_38247;
var statearr_38255_38275 = state_38247__$1;
(statearr_38255_38275[(2)] = null);

(statearr_38255_38275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (3))){
var inst_38244 = (state_38247[(2)]);
var inst_38245 = cljs.core.async.close_BANG_.call(null,out);
var state_38247__$1 = (function (){var statearr_38256 = state_38247;
(statearr_38256[(9)] = inst_38244);

return statearr_38256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38247__$1,inst_38245);
} else {
if((state_val_38248 === (2))){
var state_38247__$1 = state_38247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38247__$1,(4),ch);
} else {
if((state_val_38248 === (11))){
var inst_38227 = (state_38247[(8)]);
var inst_38236 = (state_38247[(2)]);
var inst_38224 = inst_38227;
var state_38247__$1 = (function (){var statearr_38257 = state_38247;
(statearr_38257[(10)] = inst_38236);

(statearr_38257[(7)] = inst_38224);

return statearr_38257;
})();
var statearr_38258_38276 = state_38247__$1;
(statearr_38258_38276[(2)] = null);

(statearr_38258_38276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (9))){
var inst_38227 = (state_38247[(8)]);
var state_38247__$1 = state_38247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38247__$1,(11),out,inst_38227);
} else {
if((state_val_38248 === (5))){
var inst_38227 = (state_38247[(8)]);
var inst_38224 = (state_38247[(7)]);
var inst_38231 = cljs.core._EQ_.call(null,inst_38227,inst_38224);
var state_38247__$1 = state_38247;
if(inst_38231){
var statearr_38260_38277 = state_38247__$1;
(statearr_38260_38277[(1)] = (8));

} else {
var statearr_38261_38278 = state_38247__$1;
(statearr_38261_38278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (10))){
var inst_38239 = (state_38247[(2)]);
var state_38247__$1 = state_38247;
var statearr_38262_38279 = state_38247__$1;
(statearr_38262_38279[(2)] = inst_38239);

(statearr_38262_38279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38248 === (8))){
var inst_38224 = (state_38247[(7)]);
var tmp38259 = inst_38224;
var inst_38224__$1 = tmp38259;
var state_38247__$1 = (function (){var statearr_38263 = state_38247;
(statearr_38263[(7)] = inst_38224__$1);

return statearr_38263;
})();
var statearr_38264_38280 = state_38247__$1;
(statearr_38264_38280[(2)] = null);

(statearr_38264_38280[(1)] = (2));


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
});})(c__29675__auto___38270,out))
;
return ((function (switch__29580__auto__,c__29675__auto___38270,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_38265 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38265[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_38265[(1)] = (1));

return statearr_38265;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_38247){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_38247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38266){if((e38266 instanceof Object)){
var ex__29584__auto__ = e38266;
var statearr_38267_38281 = state_38247;
(statearr_38267_38281[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38282 = state_38247;
state_38247 = G__38282;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_38247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_38247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___38270,out))
})();
var state__29677__auto__ = (function (){var statearr_38268 = f__29676__auto__.call(null);
(statearr_38268[(6)] = c__29675__auto___38270);

return statearr_38268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___38270,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__38284 = arguments.length;
switch (G__38284) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___38350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___38350,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___38350,out){
return (function (state_38322){
var state_val_38323 = (state_38322[(1)]);
if((state_val_38323 === (7))){
var inst_38318 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38324_38351 = state_38322__$1;
(statearr_38324_38351[(2)] = inst_38318);

(statearr_38324_38351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (1))){
var inst_38285 = (new Array(n));
var inst_38286 = inst_38285;
var inst_38287 = (0);
var state_38322__$1 = (function (){var statearr_38325 = state_38322;
(statearr_38325[(7)] = inst_38287);

(statearr_38325[(8)] = inst_38286);

return statearr_38325;
})();
var statearr_38326_38352 = state_38322__$1;
(statearr_38326_38352[(2)] = null);

(statearr_38326_38352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (4))){
var inst_38290 = (state_38322[(9)]);
var inst_38290__$1 = (state_38322[(2)]);
var inst_38291 = (inst_38290__$1 == null);
var inst_38292 = cljs.core.not.call(null,inst_38291);
var state_38322__$1 = (function (){var statearr_38327 = state_38322;
(statearr_38327[(9)] = inst_38290__$1);

return statearr_38327;
})();
if(inst_38292){
var statearr_38328_38353 = state_38322__$1;
(statearr_38328_38353[(1)] = (5));

} else {
var statearr_38329_38354 = state_38322__$1;
(statearr_38329_38354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (15))){
var inst_38312 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38330_38355 = state_38322__$1;
(statearr_38330_38355[(2)] = inst_38312);

(statearr_38330_38355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (13))){
var state_38322__$1 = state_38322;
var statearr_38331_38356 = state_38322__$1;
(statearr_38331_38356[(2)] = null);

(statearr_38331_38356[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (6))){
var inst_38287 = (state_38322[(7)]);
var inst_38308 = (inst_38287 > (0));
var state_38322__$1 = state_38322;
if(cljs.core.truth_(inst_38308)){
var statearr_38332_38357 = state_38322__$1;
(statearr_38332_38357[(1)] = (12));

} else {
var statearr_38333_38358 = state_38322__$1;
(statearr_38333_38358[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (3))){
var inst_38320 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38322__$1,inst_38320);
} else {
if((state_val_38323 === (12))){
var inst_38286 = (state_38322[(8)]);
var inst_38310 = cljs.core.vec.call(null,inst_38286);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38322__$1,(15),out,inst_38310);
} else {
if((state_val_38323 === (2))){
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38322__$1,(4),ch);
} else {
if((state_val_38323 === (11))){
var inst_38302 = (state_38322[(2)]);
var inst_38303 = (new Array(n));
var inst_38286 = inst_38303;
var inst_38287 = (0);
var state_38322__$1 = (function (){var statearr_38334 = state_38322;
(statearr_38334[(7)] = inst_38287);

(statearr_38334[(8)] = inst_38286);

(statearr_38334[(10)] = inst_38302);

return statearr_38334;
})();
var statearr_38335_38359 = state_38322__$1;
(statearr_38335_38359[(2)] = null);

(statearr_38335_38359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (9))){
var inst_38286 = (state_38322[(8)]);
var inst_38300 = cljs.core.vec.call(null,inst_38286);
var state_38322__$1 = state_38322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38322__$1,(11),out,inst_38300);
} else {
if((state_val_38323 === (5))){
var inst_38287 = (state_38322[(7)]);
var inst_38286 = (state_38322[(8)]);
var inst_38295 = (state_38322[(11)]);
var inst_38290 = (state_38322[(9)]);
var inst_38294 = (inst_38286[inst_38287] = inst_38290);
var inst_38295__$1 = (inst_38287 + (1));
var inst_38296 = (inst_38295__$1 < n);
var state_38322__$1 = (function (){var statearr_38336 = state_38322;
(statearr_38336[(11)] = inst_38295__$1);

(statearr_38336[(12)] = inst_38294);

return statearr_38336;
})();
if(cljs.core.truth_(inst_38296)){
var statearr_38337_38360 = state_38322__$1;
(statearr_38337_38360[(1)] = (8));

} else {
var statearr_38338_38361 = state_38322__$1;
(statearr_38338_38361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (14))){
var inst_38315 = (state_38322[(2)]);
var inst_38316 = cljs.core.async.close_BANG_.call(null,out);
var state_38322__$1 = (function (){var statearr_38340 = state_38322;
(statearr_38340[(13)] = inst_38315);

return statearr_38340;
})();
var statearr_38341_38362 = state_38322__$1;
(statearr_38341_38362[(2)] = inst_38316);

(statearr_38341_38362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (10))){
var inst_38306 = (state_38322[(2)]);
var state_38322__$1 = state_38322;
var statearr_38342_38363 = state_38322__$1;
(statearr_38342_38363[(2)] = inst_38306);

(statearr_38342_38363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38323 === (8))){
var inst_38286 = (state_38322[(8)]);
var inst_38295 = (state_38322[(11)]);
var tmp38339 = inst_38286;
var inst_38286__$1 = tmp38339;
var inst_38287 = inst_38295;
var state_38322__$1 = (function (){var statearr_38343 = state_38322;
(statearr_38343[(7)] = inst_38287);

(statearr_38343[(8)] = inst_38286__$1);

return statearr_38343;
})();
var statearr_38344_38364 = state_38322__$1;
(statearr_38344_38364[(2)] = null);

(statearr_38344_38364[(1)] = (2));


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
});})(c__29675__auto___38350,out))
;
return ((function (switch__29580__auto__,c__29675__auto___38350,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_38345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38345[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_38345[(1)] = (1));

return statearr_38345;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_38322){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_38322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38346){if((e38346 instanceof Object)){
var ex__29584__auto__ = e38346;
var statearr_38347_38365 = state_38322;
(statearr_38347_38365[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38366 = state_38322;
state_38322 = G__38366;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_38322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_38322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___38350,out))
})();
var state__29677__auto__ = (function (){var statearr_38348 = f__29676__auto__.call(null);
(statearr_38348[(6)] = c__29675__auto___38350);

return statearr_38348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___38350,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__38368 = arguments.length;
switch (G__38368) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29675__auto___38438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29675__auto___38438,out){
return (function (){
var f__29676__auto__ = (function (){var switch__29580__auto__ = ((function (c__29675__auto___38438,out){
return (function (state_38410){
var state_val_38411 = (state_38410[(1)]);
if((state_val_38411 === (7))){
var inst_38406 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38412_38439 = state_38410__$1;
(statearr_38412_38439[(2)] = inst_38406);

(statearr_38412_38439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (1))){
var inst_38369 = [];
var inst_38370 = inst_38369;
var inst_38371 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38410__$1 = (function (){var statearr_38413 = state_38410;
(statearr_38413[(7)] = inst_38370);

(statearr_38413[(8)] = inst_38371);

return statearr_38413;
})();
var statearr_38414_38440 = state_38410__$1;
(statearr_38414_38440[(2)] = null);

(statearr_38414_38440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (4))){
var inst_38374 = (state_38410[(9)]);
var inst_38374__$1 = (state_38410[(2)]);
var inst_38375 = (inst_38374__$1 == null);
var inst_38376 = cljs.core.not.call(null,inst_38375);
var state_38410__$1 = (function (){var statearr_38415 = state_38410;
(statearr_38415[(9)] = inst_38374__$1);

return statearr_38415;
})();
if(inst_38376){
var statearr_38416_38441 = state_38410__$1;
(statearr_38416_38441[(1)] = (5));

} else {
var statearr_38417_38442 = state_38410__$1;
(statearr_38417_38442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (15))){
var inst_38400 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38418_38443 = state_38410__$1;
(statearr_38418_38443[(2)] = inst_38400);

(statearr_38418_38443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (13))){
var state_38410__$1 = state_38410;
var statearr_38419_38444 = state_38410__$1;
(statearr_38419_38444[(2)] = null);

(statearr_38419_38444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (6))){
var inst_38370 = (state_38410[(7)]);
var inst_38395 = inst_38370.length;
var inst_38396 = (inst_38395 > (0));
var state_38410__$1 = state_38410;
if(cljs.core.truth_(inst_38396)){
var statearr_38420_38445 = state_38410__$1;
(statearr_38420_38445[(1)] = (12));

} else {
var statearr_38421_38446 = state_38410__$1;
(statearr_38421_38446[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (3))){
var inst_38408 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38410__$1,inst_38408);
} else {
if((state_val_38411 === (12))){
var inst_38370 = (state_38410[(7)]);
var inst_38398 = cljs.core.vec.call(null,inst_38370);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38410__$1,(15),out,inst_38398);
} else {
if((state_val_38411 === (2))){
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38410__$1,(4),ch);
} else {
if((state_val_38411 === (11))){
var inst_38378 = (state_38410[(10)]);
var inst_38374 = (state_38410[(9)]);
var inst_38388 = (state_38410[(2)]);
var inst_38389 = [];
var inst_38390 = inst_38389.push(inst_38374);
var inst_38370 = inst_38389;
var inst_38371 = inst_38378;
var state_38410__$1 = (function (){var statearr_38422 = state_38410;
(statearr_38422[(11)] = inst_38390);

(statearr_38422[(12)] = inst_38388);

(statearr_38422[(7)] = inst_38370);

(statearr_38422[(8)] = inst_38371);

return statearr_38422;
})();
var statearr_38423_38447 = state_38410__$1;
(statearr_38423_38447[(2)] = null);

(statearr_38423_38447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (9))){
var inst_38370 = (state_38410[(7)]);
var inst_38386 = cljs.core.vec.call(null,inst_38370);
var state_38410__$1 = state_38410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38410__$1,(11),out,inst_38386);
} else {
if((state_val_38411 === (5))){
var inst_38378 = (state_38410[(10)]);
var inst_38374 = (state_38410[(9)]);
var inst_38371 = (state_38410[(8)]);
var inst_38378__$1 = f.call(null,inst_38374);
var inst_38379 = cljs.core._EQ_.call(null,inst_38378__$1,inst_38371);
var inst_38380 = cljs.core.keyword_identical_QMARK_.call(null,inst_38371,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38381 = ((inst_38379) || (inst_38380));
var state_38410__$1 = (function (){var statearr_38424 = state_38410;
(statearr_38424[(10)] = inst_38378__$1);

return statearr_38424;
})();
if(cljs.core.truth_(inst_38381)){
var statearr_38425_38448 = state_38410__$1;
(statearr_38425_38448[(1)] = (8));

} else {
var statearr_38426_38449 = state_38410__$1;
(statearr_38426_38449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (14))){
var inst_38403 = (state_38410[(2)]);
var inst_38404 = cljs.core.async.close_BANG_.call(null,out);
var state_38410__$1 = (function (){var statearr_38428 = state_38410;
(statearr_38428[(13)] = inst_38403);

return statearr_38428;
})();
var statearr_38429_38450 = state_38410__$1;
(statearr_38429_38450[(2)] = inst_38404);

(statearr_38429_38450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (10))){
var inst_38393 = (state_38410[(2)]);
var state_38410__$1 = state_38410;
var statearr_38430_38451 = state_38410__$1;
(statearr_38430_38451[(2)] = inst_38393);

(statearr_38430_38451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38411 === (8))){
var inst_38378 = (state_38410[(10)]);
var inst_38374 = (state_38410[(9)]);
var inst_38370 = (state_38410[(7)]);
var inst_38383 = inst_38370.push(inst_38374);
var tmp38427 = inst_38370;
var inst_38370__$1 = tmp38427;
var inst_38371 = inst_38378;
var state_38410__$1 = (function (){var statearr_38431 = state_38410;
(statearr_38431[(14)] = inst_38383);

(statearr_38431[(7)] = inst_38370__$1);

(statearr_38431[(8)] = inst_38371);

return statearr_38431;
})();
var statearr_38432_38452 = state_38410__$1;
(statearr_38432_38452[(2)] = null);

(statearr_38432_38452[(1)] = (2));


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
});})(c__29675__auto___38438,out))
;
return ((function (switch__29580__auto__,c__29675__auto___38438,out){
return (function() {
var cljs$core$async$state_machine__29581__auto__ = null;
var cljs$core$async$state_machine__29581__auto____0 = (function (){
var statearr_38433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38433[(0)] = cljs$core$async$state_machine__29581__auto__);

(statearr_38433[(1)] = (1));

return statearr_38433;
});
var cljs$core$async$state_machine__29581__auto____1 = (function (state_38410){
while(true){
var ret_value__29582__auto__ = (function (){try{while(true){
var result__29583__auto__ = switch__29580__auto__.call(null,state_38410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29583__auto__;
}
break;
}
}catch (e38434){if((e38434 instanceof Object)){
var ex__29584__auto__ = e38434;
var statearr_38435_38453 = state_38410;
(statearr_38435_38453[(5)] = ex__29584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38454 = state_38410;
state_38410 = G__38454;
continue;
} else {
return ret_value__29582__auto__;
}
break;
}
});
cljs$core$async$state_machine__29581__auto__ = function(state_38410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29581__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29581__auto____1.call(this,state_38410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29581__auto____0;
cljs$core$async$state_machine__29581__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29581__auto____1;
return cljs$core$async$state_machine__29581__auto__;
})()
;})(switch__29580__auto__,c__29675__auto___38438,out))
})();
var state__29677__auto__ = (function (){var statearr_38436 = f__29676__auto__.call(null);
(statearr_38436[(6)] = c__29675__auto___38438);

return statearr_38436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29677__auto__);
});})(c__29675__auto___38438,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581732097362
