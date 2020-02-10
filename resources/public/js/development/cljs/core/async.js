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
var G__22846 = arguments.length;
switch (G__22846) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22847 = (function (f,blockable,meta22848){
this.f = f;
this.blockable = blockable;
this.meta22848 = meta22848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22849,meta22848__$1){
var self__ = this;
var _22849__$1 = this;
return (new cljs.core.async.t_cljs$core$async22847(self__.f,self__.blockable,meta22848__$1));
});

cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22849){
var self__ = this;
var _22849__$1 = this;
return self__.meta22848;
});

cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22848","meta22848",-487292376,null)], null);
});

cljs.core.async.t_cljs$core$async22847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22847";

cljs.core.async.t_cljs$core$async22847.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22847");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22847.
 */
cljs.core.async.__GT_t_cljs$core$async22847 = (function cljs$core$async$__GT_t_cljs$core$async22847(f__$1,blockable__$1,meta22848){
return (new cljs.core.async.t_cljs$core$async22847(f__$1,blockable__$1,meta22848));
});

}

return (new cljs.core.async.t_cljs$core$async22847(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22853 = arguments.length;
switch (G__22853) {
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
var G__22856 = arguments.length;
switch (G__22856) {
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
var G__22859 = arguments.length;
switch (G__22859) {
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
var val_22861 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22861);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22861,ret){
return (function (){
return fn1.call(null,val_22861);
});})(val_22861,ret))
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
var G__22863 = arguments.length;
switch (G__22863) {
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
var n__4607__auto___22865 = n;
var x_22866 = (0);
while(true){
if((x_22866 < n__4607__auto___22865)){
(a[x_22866] = (0));

var G__22867 = (x_22866 + (1));
x_22866 = G__22867;
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

var G__22868 = (i + (1));
i = G__22868;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22869 = (function (flag,meta22870){
this.flag = flag;
this.meta22870 = meta22870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22871,meta22870__$1){
var self__ = this;
var _22871__$1 = this;
return (new cljs.core.async.t_cljs$core$async22869(self__.flag,meta22870__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22871){
var self__ = this;
var _22871__$1 = this;
return self__.meta22870;
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22870","meta22870",-685349671,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22869";

cljs.core.async.t_cljs$core$async22869.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22869");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22869.
 */
cljs.core.async.__GT_t_cljs$core$async22869 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22869(flag__$1,meta22870){
return (new cljs.core.async.t_cljs$core$async22869(flag__$1,meta22870));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22869(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22872 = (function (flag,cb,meta22873){
this.flag = flag;
this.cb = cb;
this.meta22873 = meta22873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22874,meta22873__$1){
var self__ = this;
var _22874__$1 = this;
return (new cljs.core.async.t_cljs$core$async22872(self__.flag,self__.cb,meta22873__$1));
});

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22874){
var self__ = this;
var _22874__$1 = this;
return self__.meta22873;
});

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22873","meta22873",265325164,null)], null);
});

cljs.core.async.t_cljs$core$async22872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22872";

cljs.core.async.t_cljs$core$async22872.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22872");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22872.
 */
cljs.core.async.__GT_t_cljs$core$async22872 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22872(flag__$1,cb__$1,meta22873){
return (new cljs.core.async.t_cljs$core$async22872(flag__$1,cb__$1,meta22873));
});

}

return (new cljs.core.async.t_cljs$core$async22872(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22875_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22875_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22876_SHARP_,port], null));
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
var G__22877 = (i + (1));
i = G__22877;
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
var len__4730__auto___22883 = arguments.length;
var i__4731__auto___22884 = (0);
while(true){
if((i__4731__auto___22884 < len__4730__auto___22883)){
args__4736__auto__.push((arguments[i__4731__auto___22884]));

var G__22885 = (i__4731__auto___22884 + (1));
i__4731__auto___22884 = G__22885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22880){
var map__22881 = p__22880;
var map__22881__$1 = (((((!((map__22881 == null))))?(((((map__22881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22881):map__22881);
var opts = map__22881__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22878){
var G__22879 = cljs.core.first.call(null,seq22878);
var seq22878__$1 = cljs.core.next.call(null,seq22878);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22879,seq22878__$1);
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
var G__22887 = arguments.length;
switch (G__22887) {
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
var c__22786__auto___22933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___22933){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___22933){
return (function (state_22911){
var state_val_22912 = (state_22911[(1)]);
if((state_val_22912 === (7))){
var inst_22907 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
var statearr_22913_22934 = state_22911__$1;
(statearr_22913_22934[(2)] = inst_22907);

(statearr_22913_22934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (1))){
var state_22911__$1 = state_22911;
var statearr_22914_22935 = state_22911__$1;
(statearr_22914_22935[(2)] = null);

(statearr_22914_22935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (4))){
var inst_22890 = (state_22911[(7)]);
var inst_22890__$1 = (state_22911[(2)]);
var inst_22891 = (inst_22890__$1 == null);
var state_22911__$1 = (function (){var statearr_22915 = state_22911;
(statearr_22915[(7)] = inst_22890__$1);

return statearr_22915;
})();
if(cljs.core.truth_(inst_22891)){
var statearr_22916_22936 = state_22911__$1;
(statearr_22916_22936[(1)] = (5));

} else {
var statearr_22917_22937 = state_22911__$1;
(statearr_22917_22937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (13))){
var state_22911__$1 = state_22911;
var statearr_22918_22938 = state_22911__$1;
(statearr_22918_22938[(2)] = null);

(statearr_22918_22938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (6))){
var inst_22890 = (state_22911[(7)]);
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22911__$1,(11),to,inst_22890);
} else {
if((state_val_22912 === (3))){
var inst_22909 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22911__$1,inst_22909);
} else {
if((state_val_22912 === (12))){
var state_22911__$1 = state_22911;
var statearr_22919_22939 = state_22911__$1;
(statearr_22919_22939[(2)] = null);

(statearr_22919_22939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (2))){
var state_22911__$1 = state_22911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22911__$1,(4),from);
} else {
if((state_val_22912 === (11))){
var inst_22900 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
if(cljs.core.truth_(inst_22900)){
var statearr_22920_22940 = state_22911__$1;
(statearr_22920_22940[(1)] = (12));

} else {
var statearr_22921_22941 = state_22911__$1;
(statearr_22921_22941[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (9))){
var state_22911__$1 = state_22911;
var statearr_22922_22942 = state_22911__$1;
(statearr_22922_22942[(2)] = null);

(statearr_22922_22942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (5))){
var state_22911__$1 = state_22911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22923_22943 = state_22911__$1;
(statearr_22923_22943[(1)] = (8));

} else {
var statearr_22924_22944 = state_22911__$1;
(statearr_22924_22944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (14))){
var inst_22905 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
var statearr_22925_22945 = state_22911__$1;
(statearr_22925_22945[(2)] = inst_22905);

(statearr_22925_22945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (10))){
var inst_22897 = (state_22911[(2)]);
var state_22911__$1 = state_22911;
var statearr_22926_22946 = state_22911__$1;
(statearr_22926_22946[(2)] = inst_22897);

(statearr_22926_22946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22912 === (8))){
var inst_22894 = cljs.core.async.close_BANG_.call(null,to);
var state_22911__$1 = state_22911;
var statearr_22927_22947 = state_22911__$1;
(statearr_22927_22947[(2)] = inst_22894);

(statearr_22927_22947[(1)] = (10));


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
});})(c__22786__auto___22933))
;
return ((function (switch__22691__auto__,c__22786__auto___22933){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_22928 = [null,null,null,null,null,null,null,null];
(statearr_22928[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_22928[(1)] = (1));

return statearr_22928;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_22911){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_22911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e22929){if((e22929 instanceof Object)){
var ex__22695__auto__ = e22929;
var statearr_22930_22948 = state_22911;
(statearr_22930_22948[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22949 = state_22911;
state_22911 = G__22949;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_22911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_22911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___22933))
})();
var state__22788__auto__ = (function (){var statearr_22931 = f__22787__auto__.call(null);
(statearr_22931[(6)] = c__22786__auto___22933);

return statearr_22931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___22933))
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
return (function (p__22950){
var vec__22951 = p__22950;
var v = cljs.core.nth.call(null,vec__22951,(0),null);
var p = cljs.core.nth.call(null,vec__22951,(1),null);
var job = vec__22951;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22786__auto___23122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results){
return (function (state_22958){
var state_val_22959 = (state_22958[(1)]);
if((state_val_22959 === (1))){
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22958__$1,(2),res,v);
} else {
if((state_val_22959 === (2))){
var inst_22955 = (state_22958[(2)]);
var inst_22956 = cljs.core.async.close_BANG_.call(null,res);
var state_22958__$1 = (function (){var statearr_22960 = state_22958;
(statearr_22960[(7)] = inst_22955);

return statearr_22960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22958__$1,inst_22956);
} else {
return null;
}
}
});})(c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results))
;
return ((function (switch__22691__auto__,c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_22961 = [null,null,null,null,null,null,null,null];
(statearr_22961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__);

(statearr_22961[(1)] = (1));

return statearr_22961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1 = (function (state_22958){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_22958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e22962){if((e22962 instanceof Object)){
var ex__22695__auto__ = e22962;
var statearr_22963_23123 = state_22958;
(statearr_22963_23123[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23124 = state_22958;
state_22958 = G__23124;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = function(state_22958){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1.call(this,state_22958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results))
})();
var state__22788__auto__ = (function (){var statearr_22964 = f__22787__auto__.call(null);
(statearr_22964[(6)] = c__22786__auto___23122);

return statearr_22964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23122,res,vec__22951,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22965){
var vec__22966 = p__22965;
var v = cljs.core.nth.call(null,vec__22966,(0),null);
var p = cljs.core.nth.call(null,vec__22966,(1),null);
var job = vec__22966;
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
var n__4607__auto___23125 = n;
var __23126 = (0);
while(true){
if((__23126 < n__4607__auto___23125)){
var G__22969_23127 = type;
var G__22969_23128__$1 = (((G__22969_23127 instanceof cljs.core.Keyword))?G__22969_23127.fqn:null);
switch (G__22969_23128__$1) {
case "compute":
var c__22786__auto___23130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23126,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (__23126,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (1))){
var state_22982__$1 = state_22982;
var statearr_22984_23131 = state_22982__$1;
(statearr_22984_23131[(2)] = null);

(statearr_22984_23131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (2))){
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22982__$1,(4),jobs);
} else {
if((state_val_22983 === (3))){
var inst_22980 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22982__$1,inst_22980);
} else {
if((state_val_22983 === (4))){
var inst_22972 = (state_22982[(2)]);
var inst_22973 = process.call(null,inst_22972);
var state_22982__$1 = state_22982;
if(cljs.core.truth_(inst_22973)){
var statearr_22985_23132 = state_22982__$1;
(statearr_22985_23132[(1)] = (5));

} else {
var statearr_22986_23133 = state_22982__$1;
(statearr_22986_23133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (5))){
var state_22982__$1 = state_22982;
var statearr_22987_23134 = state_22982__$1;
(statearr_22987_23134[(2)] = null);

(statearr_22987_23134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (6))){
var state_22982__$1 = state_22982;
var statearr_22988_23135 = state_22982__$1;
(statearr_22988_23135[(2)] = null);

(statearr_22988_23135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (7))){
var inst_22978 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22989_23136 = state_22982__$1;
(statearr_22989_23136[(2)] = inst_22978);

(statearr_22989_23136[(1)] = (3));


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
});})(__23126,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
;
return ((function (__23126,switch__22691__auto__,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_22990 = [null,null,null,null,null,null,null];
(statearr_22990[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__);

(statearr_22990[(1)] = (1));

return statearr_22990;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1 = (function (state_22982){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_22982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e22991){if((e22991 instanceof Object)){
var ex__22695__auto__ = e22991;
var statearr_22992_23137 = state_22982;
(statearr_22992_23137[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23138 = state_22982;
state_22982 = G__23138;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__;
})()
;})(__23126,switch__22691__auto__,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_22993 = f__22787__auto__.call(null);
(statearr_22993[(6)] = c__22786__auto___23130);

return statearr_22993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(__23126,c__22786__auto___23130,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
);


break;
case "async":
var c__22786__auto___23139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23126,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (__23126,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function (state_23006){
var state_val_23007 = (state_23006[(1)]);
if((state_val_23007 === (1))){
var state_23006__$1 = state_23006;
var statearr_23008_23140 = state_23006__$1;
(statearr_23008_23140[(2)] = null);

(statearr_23008_23140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23007 === (2))){
var state_23006__$1 = state_23006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23006__$1,(4),jobs);
} else {
if((state_val_23007 === (3))){
var inst_23004 = (state_23006[(2)]);
var state_23006__$1 = state_23006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23006__$1,inst_23004);
} else {
if((state_val_23007 === (4))){
var inst_22996 = (state_23006[(2)]);
var inst_22997 = async.call(null,inst_22996);
var state_23006__$1 = state_23006;
if(cljs.core.truth_(inst_22997)){
var statearr_23009_23141 = state_23006__$1;
(statearr_23009_23141[(1)] = (5));

} else {
var statearr_23010_23142 = state_23006__$1;
(statearr_23010_23142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23007 === (5))){
var state_23006__$1 = state_23006;
var statearr_23011_23143 = state_23006__$1;
(statearr_23011_23143[(2)] = null);

(statearr_23011_23143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23007 === (6))){
var state_23006__$1 = state_23006;
var statearr_23012_23144 = state_23006__$1;
(statearr_23012_23144[(2)] = null);

(statearr_23012_23144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23007 === (7))){
var inst_23002 = (state_23006[(2)]);
var state_23006__$1 = state_23006;
var statearr_23013_23145 = state_23006__$1;
(statearr_23013_23145[(2)] = inst_23002);

(statearr_23013_23145[(1)] = (3));


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
});})(__23126,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
;
return ((function (__23126,switch__22691__auto__,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_23014 = [null,null,null,null,null,null,null];
(statearr_23014[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__);

(statearr_23014[(1)] = (1));

return statearr_23014;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1 = (function (state_23006){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23015){if((e23015 instanceof Object)){
var ex__22695__auto__ = e23015;
var statearr_23016_23146 = state_23006;
(statearr_23016_23146[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23147 = state_23006;
state_23006 = G__23147;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = function(state_23006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1.call(this,state_23006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__;
})()
;})(__23126,switch__22691__auto__,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23017 = f__22787__auto__.call(null);
(statearr_23017[(6)] = c__22786__auto___23139);

return statearr_23017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(__23126,c__22786__auto___23139,G__22969_23127,G__22969_23128__$1,n__4607__auto___23125,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22969_23128__$1)].join('')));

}

var G__23148 = (__23126 + (1));
__23126 = G__23148;
continue;
} else {
}
break;
}

var c__22786__auto___23149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23149,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___23149,jobs,results,process,async){
return (function (state_23039){
var state_val_23040 = (state_23039[(1)]);
if((state_val_23040 === (7))){
var inst_23035 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
var statearr_23041_23150 = state_23039__$1;
(statearr_23041_23150[(2)] = inst_23035);

(statearr_23041_23150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (1))){
var state_23039__$1 = state_23039;
var statearr_23042_23151 = state_23039__$1;
(statearr_23042_23151[(2)] = null);

(statearr_23042_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (4))){
var inst_23020 = (state_23039[(7)]);
var inst_23020__$1 = (state_23039[(2)]);
var inst_23021 = (inst_23020__$1 == null);
var state_23039__$1 = (function (){var statearr_23043 = state_23039;
(statearr_23043[(7)] = inst_23020__$1);

return statearr_23043;
})();
if(cljs.core.truth_(inst_23021)){
var statearr_23044_23152 = state_23039__$1;
(statearr_23044_23152[(1)] = (5));

} else {
var statearr_23045_23153 = state_23039__$1;
(statearr_23045_23153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (6))){
var inst_23020 = (state_23039[(7)]);
var inst_23025 = (state_23039[(8)]);
var inst_23025__$1 = cljs.core.async.chan.call(null,(1));
var inst_23026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23027 = [inst_23020,inst_23025__$1];
var inst_23028 = (new cljs.core.PersistentVector(null,2,(5),inst_23026,inst_23027,null));
var state_23039__$1 = (function (){var statearr_23046 = state_23039;
(statearr_23046[(8)] = inst_23025__$1);

return statearr_23046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23039__$1,(8),jobs,inst_23028);
} else {
if((state_val_23040 === (3))){
var inst_23037 = (state_23039[(2)]);
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23039__$1,inst_23037);
} else {
if((state_val_23040 === (2))){
var state_23039__$1 = state_23039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23039__$1,(4),from);
} else {
if((state_val_23040 === (9))){
var inst_23032 = (state_23039[(2)]);
var state_23039__$1 = (function (){var statearr_23047 = state_23039;
(statearr_23047[(9)] = inst_23032);

return statearr_23047;
})();
var statearr_23048_23154 = state_23039__$1;
(statearr_23048_23154[(2)] = null);

(statearr_23048_23154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (5))){
var inst_23023 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23039__$1 = state_23039;
var statearr_23049_23155 = state_23039__$1;
(statearr_23049_23155[(2)] = inst_23023);

(statearr_23049_23155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23040 === (8))){
var inst_23025 = (state_23039[(8)]);
var inst_23030 = (state_23039[(2)]);
var state_23039__$1 = (function (){var statearr_23050 = state_23039;
(statearr_23050[(10)] = inst_23030);

return statearr_23050;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23039__$1,(9),results,inst_23025);
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
});})(c__22786__auto___23149,jobs,results,process,async))
;
return ((function (switch__22691__auto__,c__22786__auto___23149,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_23051 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23051[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__);

(statearr_23051[(1)] = (1));

return statearr_23051;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1 = (function (state_23039){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23052){if((e23052 instanceof Object)){
var ex__22695__auto__ = e23052;
var statearr_23053_23156 = state_23039;
(statearr_23053_23156[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23157 = state_23039;
state_23039 = G__23157;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = function(state_23039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1.call(this,state_23039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___23149,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23054 = f__22787__auto__.call(null);
(statearr_23054[(6)] = c__22786__auto___23149);

return statearr_23054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23149,jobs,results,process,async))
);


var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,jobs,results,process,async){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__,jobs,results,process,async){
return (function (state_23092){
var state_val_23093 = (state_23092[(1)]);
if((state_val_23093 === (7))){
var inst_23088 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23094_23158 = state_23092__$1;
(statearr_23094_23158[(2)] = inst_23088);

(statearr_23094_23158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (20))){
var state_23092__$1 = state_23092;
var statearr_23095_23159 = state_23092__$1;
(statearr_23095_23159[(2)] = null);

(statearr_23095_23159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (1))){
var state_23092__$1 = state_23092;
var statearr_23096_23160 = state_23092__$1;
(statearr_23096_23160[(2)] = null);

(statearr_23096_23160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (4))){
var inst_23057 = (state_23092[(7)]);
var inst_23057__$1 = (state_23092[(2)]);
var inst_23058 = (inst_23057__$1 == null);
var state_23092__$1 = (function (){var statearr_23097 = state_23092;
(statearr_23097[(7)] = inst_23057__$1);

return statearr_23097;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23098_23161 = state_23092__$1;
(statearr_23098_23161[(1)] = (5));

} else {
var statearr_23099_23162 = state_23092__$1;
(statearr_23099_23162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (15))){
var inst_23070 = (state_23092[(8)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23092__$1,(18),to,inst_23070);
} else {
if((state_val_23093 === (21))){
var inst_23083 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23100_23163 = state_23092__$1;
(statearr_23100_23163[(2)] = inst_23083);

(statearr_23100_23163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (13))){
var inst_23085 = (state_23092[(2)]);
var state_23092__$1 = (function (){var statearr_23101 = state_23092;
(statearr_23101[(9)] = inst_23085);

return statearr_23101;
})();
var statearr_23102_23164 = state_23092__$1;
(statearr_23102_23164[(2)] = null);

(statearr_23102_23164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (6))){
var inst_23057 = (state_23092[(7)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23092__$1,(11),inst_23057);
} else {
if((state_val_23093 === (17))){
var inst_23078 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
if(cljs.core.truth_(inst_23078)){
var statearr_23103_23165 = state_23092__$1;
(statearr_23103_23165[(1)] = (19));

} else {
var statearr_23104_23166 = state_23092__$1;
(statearr_23104_23166[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (3))){
var inst_23090 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23092__$1,inst_23090);
} else {
if((state_val_23093 === (12))){
var inst_23067 = (state_23092[(10)]);
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23092__$1,(14),inst_23067);
} else {
if((state_val_23093 === (2))){
var state_23092__$1 = state_23092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23092__$1,(4),results);
} else {
if((state_val_23093 === (19))){
var state_23092__$1 = state_23092;
var statearr_23105_23167 = state_23092__$1;
(statearr_23105_23167[(2)] = null);

(statearr_23105_23167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (11))){
var inst_23067 = (state_23092[(2)]);
var state_23092__$1 = (function (){var statearr_23106 = state_23092;
(statearr_23106[(10)] = inst_23067);

return statearr_23106;
})();
var statearr_23107_23168 = state_23092__$1;
(statearr_23107_23168[(2)] = null);

(statearr_23107_23168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (9))){
var state_23092__$1 = state_23092;
var statearr_23108_23169 = state_23092__$1;
(statearr_23108_23169[(2)] = null);

(statearr_23108_23169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (5))){
var state_23092__$1 = state_23092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23109_23170 = state_23092__$1;
(statearr_23109_23170[(1)] = (8));

} else {
var statearr_23110_23171 = state_23092__$1;
(statearr_23110_23171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (14))){
var inst_23070 = (state_23092[(8)]);
var inst_23072 = (state_23092[(11)]);
var inst_23070__$1 = (state_23092[(2)]);
var inst_23071 = (inst_23070__$1 == null);
var inst_23072__$1 = cljs.core.not.call(null,inst_23071);
var state_23092__$1 = (function (){var statearr_23111 = state_23092;
(statearr_23111[(8)] = inst_23070__$1);

(statearr_23111[(11)] = inst_23072__$1);

return statearr_23111;
})();
if(inst_23072__$1){
var statearr_23112_23172 = state_23092__$1;
(statearr_23112_23172[(1)] = (15));

} else {
var statearr_23113_23173 = state_23092__$1;
(statearr_23113_23173[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (16))){
var inst_23072 = (state_23092[(11)]);
var state_23092__$1 = state_23092;
var statearr_23114_23174 = state_23092__$1;
(statearr_23114_23174[(2)] = inst_23072);

(statearr_23114_23174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (10))){
var inst_23064 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23115_23175 = state_23092__$1;
(statearr_23115_23175[(2)] = inst_23064);

(statearr_23115_23175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (18))){
var inst_23075 = (state_23092[(2)]);
var state_23092__$1 = state_23092;
var statearr_23116_23176 = state_23092__$1;
(statearr_23116_23176[(2)] = inst_23075);

(statearr_23116_23176[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23093 === (8))){
var inst_23061 = cljs.core.async.close_BANG_.call(null,to);
var state_23092__$1 = state_23092;
var statearr_23117_23177 = state_23092__$1;
(statearr_23117_23177[(2)] = inst_23061);

(statearr_23117_23177[(1)] = (10));


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
});})(c__22786__auto__,jobs,results,process,async))
;
return ((function (switch__22691__auto__,c__22786__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_23118 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23118[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__);

(statearr_23118[(1)] = (1));

return statearr_23118;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1 = (function (state_23092){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23119){if((e23119 instanceof Object)){
var ex__22695__auto__ = e23119;
var statearr_23120_23178 = state_23092;
(statearr_23120_23178[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23179 = state_23092;
state_23092 = G__23179;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__ = function(state_23092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1.call(this,state_23092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__,jobs,results,process,async))
})();
var state__22788__auto__ = (function (){var statearr_23121 = f__22787__auto__.call(null);
(statearr_23121[(6)] = c__22786__auto__);

return statearr_23121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,jobs,results,process,async))
);

return c__22786__auto__;
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
var G__23181 = arguments.length;
switch (G__23181) {
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
var G__23184 = arguments.length;
switch (G__23184) {
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
var G__23187 = arguments.length;
switch (G__23187) {
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
var c__22786__auto___23236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23236,tc,fc){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___23236,tc,fc){
return (function (state_23213){
var state_val_23214 = (state_23213[(1)]);
if((state_val_23214 === (7))){
var inst_23209 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23215_23237 = state_23213__$1;
(statearr_23215_23237[(2)] = inst_23209);

(statearr_23215_23237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (1))){
var state_23213__$1 = state_23213;
var statearr_23216_23238 = state_23213__$1;
(statearr_23216_23238[(2)] = null);

(statearr_23216_23238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (4))){
var inst_23190 = (state_23213[(7)]);
var inst_23190__$1 = (state_23213[(2)]);
var inst_23191 = (inst_23190__$1 == null);
var state_23213__$1 = (function (){var statearr_23217 = state_23213;
(statearr_23217[(7)] = inst_23190__$1);

return statearr_23217;
})();
if(cljs.core.truth_(inst_23191)){
var statearr_23218_23239 = state_23213__$1;
(statearr_23218_23239[(1)] = (5));

} else {
var statearr_23219_23240 = state_23213__$1;
(statearr_23219_23240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (13))){
var state_23213__$1 = state_23213;
var statearr_23220_23241 = state_23213__$1;
(statearr_23220_23241[(2)] = null);

(statearr_23220_23241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (6))){
var inst_23190 = (state_23213[(7)]);
var inst_23196 = p.call(null,inst_23190);
var state_23213__$1 = state_23213;
if(cljs.core.truth_(inst_23196)){
var statearr_23221_23242 = state_23213__$1;
(statearr_23221_23242[(1)] = (9));

} else {
var statearr_23222_23243 = state_23213__$1;
(statearr_23222_23243[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (3))){
var inst_23211 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23213__$1,inst_23211);
} else {
if((state_val_23214 === (12))){
var state_23213__$1 = state_23213;
var statearr_23223_23244 = state_23213__$1;
(statearr_23223_23244[(2)] = null);

(statearr_23223_23244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (2))){
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23213__$1,(4),ch);
} else {
if((state_val_23214 === (11))){
var inst_23190 = (state_23213[(7)]);
var inst_23200 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23213__$1,(8),inst_23200,inst_23190);
} else {
if((state_val_23214 === (9))){
var state_23213__$1 = state_23213;
var statearr_23224_23245 = state_23213__$1;
(statearr_23224_23245[(2)] = tc);

(statearr_23224_23245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (5))){
var inst_23193 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23194 = cljs.core.async.close_BANG_.call(null,fc);
var state_23213__$1 = (function (){var statearr_23225 = state_23213;
(statearr_23225[(8)] = inst_23193);

return statearr_23225;
})();
var statearr_23226_23246 = state_23213__$1;
(statearr_23226_23246[(2)] = inst_23194);

(statearr_23226_23246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (14))){
var inst_23207 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
var statearr_23227_23247 = state_23213__$1;
(statearr_23227_23247[(2)] = inst_23207);

(statearr_23227_23247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (10))){
var state_23213__$1 = state_23213;
var statearr_23228_23248 = state_23213__$1;
(statearr_23228_23248[(2)] = fc);

(statearr_23228_23248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23214 === (8))){
var inst_23202 = (state_23213[(2)]);
var state_23213__$1 = state_23213;
if(cljs.core.truth_(inst_23202)){
var statearr_23229_23249 = state_23213__$1;
(statearr_23229_23249[(1)] = (12));

} else {
var statearr_23230_23250 = state_23213__$1;
(statearr_23230_23250[(1)] = (13));

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
});})(c__22786__auto___23236,tc,fc))
;
return ((function (switch__22691__auto__,c__22786__auto___23236,tc,fc){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_23231 = [null,null,null,null,null,null,null,null,null];
(statearr_23231[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_23231[(1)] = (1));

return statearr_23231;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_23213){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23232){if((e23232 instanceof Object)){
var ex__22695__auto__ = e23232;
var statearr_23233_23251 = state_23213;
(statearr_23233_23251[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23252 = state_23213;
state_23213 = G__23252;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_23213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_23213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___23236,tc,fc))
})();
var state__22788__auto__ = (function (){var statearr_23234 = f__22787__auto__.call(null);
(statearr_23234[(6)] = c__22786__auto___23236);

return statearr_23234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23236,tc,fc))
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__){
return (function (state_23273){
var state_val_23274 = (state_23273[(1)]);
if((state_val_23274 === (7))){
var inst_23269 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23275_23293 = state_23273__$1;
(statearr_23275_23293[(2)] = inst_23269);

(statearr_23275_23293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (1))){
var inst_23253 = init;
var state_23273__$1 = (function (){var statearr_23276 = state_23273;
(statearr_23276[(7)] = inst_23253);

return statearr_23276;
})();
var statearr_23277_23294 = state_23273__$1;
(statearr_23277_23294[(2)] = null);

(statearr_23277_23294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (4))){
var inst_23256 = (state_23273[(8)]);
var inst_23256__$1 = (state_23273[(2)]);
var inst_23257 = (inst_23256__$1 == null);
var state_23273__$1 = (function (){var statearr_23278 = state_23273;
(statearr_23278[(8)] = inst_23256__$1);

return statearr_23278;
})();
if(cljs.core.truth_(inst_23257)){
var statearr_23279_23295 = state_23273__$1;
(statearr_23279_23295[(1)] = (5));

} else {
var statearr_23280_23296 = state_23273__$1;
(statearr_23280_23296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (6))){
var inst_23260 = (state_23273[(9)]);
var inst_23256 = (state_23273[(8)]);
var inst_23253 = (state_23273[(7)]);
var inst_23260__$1 = f.call(null,inst_23253,inst_23256);
var inst_23261 = cljs.core.reduced_QMARK_.call(null,inst_23260__$1);
var state_23273__$1 = (function (){var statearr_23281 = state_23273;
(statearr_23281[(9)] = inst_23260__$1);

return statearr_23281;
})();
if(inst_23261){
var statearr_23282_23297 = state_23273__$1;
(statearr_23282_23297[(1)] = (8));

} else {
var statearr_23283_23298 = state_23273__$1;
(statearr_23283_23298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (3))){
var inst_23271 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23273__$1,inst_23271);
} else {
if((state_val_23274 === (2))){
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(4),ch);
} else {
if((state_val_23274 === (9))){
var inst_23260 = (state_23273[(9)]);
var inst_23253 = inst_23260;
var state_23273__$1 = (function (){var statearr_23284 = state_23273;
(statearr_23284[(7)] = inst_23253);

return statearr_23284;
})();
var statearr_23285_23299 = state_23273__$1;
(statearr_23285_23299[(2)] = null);

(statearr_23285_23299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (5))){
var inst_23253 = (state_23273[(7)]);
var state_23273__$1 = state_23273;
var statearr_23286_23300 = state_23273__$1;
(statearr_23286_23300[(2)] = inst_23253);

(statearr_23286_23300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (10))){
var inst_23267 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23287_23301 = state_23273__$1;
(statearr_23287_23301[(2)] = inst_23267);

(statearr_23287_23301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (8))){
var inst_23260 = (state_23273[(9)]);
var inst_23263 = cljs.core.deref.call(null,inst_23260);
var state_23273__$1 = state_23273;
var statearr_23288_23302 = state_23273__$1;
(statearr_23288_23302[(2)] = inst_23263);

(statearr_23288_23302[(1)] = (10));


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
});})(c__22786__auto__))
;
return ((function (switch__22691__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22692__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22692__auto____0 = (function (){
var statearr_23289 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23289[(0)] = cljs$core$async$reduce_$_state_machine__22692__auto__);

(statearr_23289[(1)] = (1));

return statearr_23289;
});
var cljs$core$async$reduce_$_state_machine__22692__auto____1 = (function (state_23273){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23290){if((e23290 instanceof Object)){
var ex__22695__auto__ = e23290;
var statearr_23291_23303 = state_23273;
(statearr_23291_23303[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23304 = state_23273;
state_23273 = G__23304;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22692__auto__ = function(state_23273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22692__auto____1.call(this,state_23273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22692__auto____0;
cljs$core$async$reduce_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22692__auto____1;
return cljs$core$async$reduce_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_23292 = f__22787__auto__.call(null);
(statearr_23292[(6)] = c__22786__auto__);

return statearr_23292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__,f__$1){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__,f__$1){
return (function (state_23310){
var state_val_23311 = (state_23310[(1)]);
if((state_val_23311 === (1))){
var inst_23305 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23310__$1,(2),inst_23305);
} else {
if((state_val_23311 === (2))){
var inst_23307 = (state_23310[(2)]);
var inst_23308 = f__$1.call(null,inst_23307);
var state_23310__$1 = state_23310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23310__$1,inst_23308);
} else {
return null;
}
}
});})(c__22786__auto__,f__$1))
;
return ((function (switch__22691__auto__,c__22786__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22692__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22692__auto____0 = (function (){
var statearr_23312 = [null,null,null,null,null,null,null];
(statearr_23312[(0)] = cljs$core$async$transduce_$_state_machine__22692__auto__);

(statearr_23312[(1)] = (1));

return statearr_23312;
});
var cljs$core$async$transduce_$_state_machine__22692__auto____1 = (function (state_23310){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23313){if((e23313 instanceof Object)){
var ex__22695__auto__ = e23313;
var statearr_23314_23316 = state_23310;
(statearr_23314_23316[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23317 = state_23310;
state_23310 = G__23317;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22692__auto__ = function(state_23310){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22692__auto____1.call(this,state_23310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22692__auto____0;
cljs$core$async$transduce_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22692__auto____1;
return cljs$core$async$transduce_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__,f__$1))
})();
var state__22788__auto__ = (function (){var statearr_23315 = f__22787__auto__.call(null);
(statearr_23315[(6)] = c__22786__auto__);

return statearr_23315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__,f__$1))
);

return c__22786__auto__;
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
var G__23319 = arguments.length;
switch (G__23319) {
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__){
return (function (state_23344){
var state_val_23345 = (state_23344[(1)]);
if((state_val_23345 === (7))){
var inst_23326 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23346_23367 = state_23344__$1;
(statearr_23346_23367[(2)] = inst_23326);

(statearr_23346_23367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (1))){
var inst_23320 = cljs.core.seq.call(null,coll);
var inst_23321 = inst_23320;
var state_23344__$1 = (function (){var statearr_23347 = state_23344;
(statearr_23347[(7)] = inst_23321);

return statearr_23347;
})();
var statearr_23348_23368 = state_23344__$1;
(statearr_23348_23368[(2)] = null);

(statearr_23348_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (4))){
var inst_23321 = (state_23344[(7)]);
var inst_23324 = cljs.core.first.call(null,inst_23321);
var state_23344__$1 = state_23344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23344__$1,(7),ch,inst_23324);
} else {
if((state_val_23345 === (13))){
var inst_23338 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23349_23369 = state_23344__$1;
(statearr_23349_23369[(2)] = inst_23338);

(statearr_23349_23369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (6))){
var inst_23329 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
if(cljs.core.truth_(inst_23329)){
var statearr_23350_23370 = state_23344__$1;
(statearr_23350_23370[(1)] = (8));

} else {
var statearr_23351_23371 = state_23344__$1;
(statearr_23351_23371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (3))){
var inst_23342 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23344__$1,inst_23342);
} else {
if((state_val_23345 === (12))){
var state_23344__$1 = state_23344;
var statearr_23352_23372 = state_23344__$1;
(statearr_23352_23372[(2)] = null);

(statearr_23352_23372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (2))){
var inst_23321 = (state_23344[(7)]);
var state_23344__$1 = state_23344;
if(cljs.core.truth_(inst_23321)){
var statearr_23353_23373 = state_23344__$1;
(statearr_23353_23373[(1)] = (4));

} else {
var statearr_23354_23374 = state_23344__$1;
(statearr_23354_23374[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (11))){
var inst_23335 = cljs.core.async.close_BANG_.call(null,ch);
var state_23344__$1 = state_23344;
var statearr_23355_23375 = state_23344__$1;
(statearr_23355_23375[(2)] = inst_23335);

(statearr_23355_23375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (9))){
var state_23344__$1 = state_23344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23356_23376 = state_23344__$1;
(statearr_23356_23376[(1)] = (11));

} else {
var statearr_23357_23377 = state_23344__$1;
(statearr_23357_23377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (5))){
var inst_23321 = (state_23344[(7)]);
var state_23344__$1 = state_23344;
var statearr_23358_23378 = state_23344__$1;
(statearr_23358_23378[(2)] = inst_23321);

(statearr_23358_23378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (10))){
var inst_23340 = (state_23344[(2)]);
var state_23344__$1 = state_23344;
var statearr_23359_23379 = state_23344__$1;
(statearr_23359_23379[(2)] = inst_23340);

(statearr_23359_23379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23345 === (8))){
var inst_23321 = (state_23344[(7)]);
var inst_23331 = cljs.core.next.call(null,inst_23321);
var inst_23321__$1 = inst_23331;
var state_23344__$1 = (function (){var statearr_23360 = state_23344;
(statearr_23360[(7)] = inst_23321__$1);

return statearr_23360;
})();
var statearr_23361_23380 = state_23344__$1;
(statearr_23361_23380[(2)] = null);

(statearr_23361_23380[(1)] = (2));


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
});})(c__22786__auto__))
;
return ((function (switch__22691__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_23362 = [null,null,null,null,null,null,null,null];
(statearr_23362[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_23362[(1)] = (1));

return statearr_23362;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_23344){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23363){if((e23363 instanceof Object)){
var ex__22695__auto__ = e23363;
var statearr_23364_23381 = state_23344;
(statearr_23364_23381[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23382 = state_23344;
state_23344 = G__23382;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_23344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_23344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_23365 = f__22787__auto__.call(null);
(statearr_23365[(6)] = c__22786__auto__);

return statearr_23365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23383 = (function (ch,cs,meta23384){
this.ch = ch;
this.cs = cs;
this.meta23384 = meta23384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23385,meta23384__$1){
var self__ = this;
var _23385__$1 = this;
return (new cljs.core.async.t_cljs$core$async23383(self__.ch,self__.cs,meta23384__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23385){
var self__ = this;
var _23385__$1 = this;
return self__.meta23384;
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23384","meta23384",-197897380,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23383.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23383.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23383";

cljs.core.async.t_cljs$core$async23383.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23383");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23383.
 */
cljs.core.async.__GT_t_cljs$core$async23383 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23383(ch__$1,cs__$1,meta23384){
return (new cljs.core.async.t_cljs$core$async23383(ch__$1,cs__$1,meta23384));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23383(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22786__auto___23605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23605,cs,m,dchan,dctr,done){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___23605,cs,m,dchan,dctr,done){
return (function (state_23520){
var state_val_23521 = (state_23520[(1)]);
if((state_val_23521 === (7))){
var inst_23516 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23522_23606 = state_23520__$1;
(statearr_23522_23606[(2)] = inst_23516);

(statearr_23522_23606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (20))){
var inst_23419 = (state_23520[(7)]);
var inst_23431 = cljs.core.first.call(null,inst_23419);
var inst_23432 = cljs.core.nth.call(null,inst_23431,(0),null);
var inst_23433 = cljs.core.nth.call(null,inst_23431,(1),null);
var state_23520__$1 = (function (){var statearr_23523 = state_23520;
(statearr_23523[(8)] = inst_23432);

return statearr_23523;
})();
if(cljs.core.truth_(inst_23433)){
var statearr_23524_23607 = state_23520__$1;
(statearr_23524_23607[(1)] = (22));

} else {
var statearr_23525_23608 = state_23520__$1;
(statearr_23525_23608[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (27))){
var inst_23461 = (state_23520[(9)]);
var inst_23463 = (state_23520[(10)]);
var inst_23388 = (state_23520[(11)]);
var inst_23468 = (state_23520[(12)]);
var inst_23468__$1 = cljs.core._nth.call(null,inst_23461,inst_23463);
var inst_23469 = cljs.core.async.put_BANG_.call(null,inst_23468__$1,inst_23388,done);
var state_23520__$1 = (function (){var statearr_23526 = state_23520;
(statearr_23526[(12)] = inst_23468__$1);

return statearr_23526;
})();
if(cljs.core.truth_(inst_23469)){
var statearr_23527_23609 = state_23520__$1;
(statearr_23527_23609[(1)] = (30));

} else {
var statearr_23528_23610 = state_23520__$1;
(statearr_23528_23610[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (1))){
var state_23520__$1 = state_23520;
var statearr_23529_23611 = state_23520__$1;
(statearr_23529_23611[(2)] = null);

(statearr_23529_23611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (24))){
var inst_23419 = (state_23520[(7)]);
var inst_23438 = (state_23520[(2)]);
var inst_23439 = cljs.core.next.call(null,inst_23419);
var inst_23397 = inst_23439;
var inst_23398 = null;
var inst_23399 = (0);
var inst_23400 = (0);
var state_23520__$1 = (function (){var statearr_23530 = state_23520;
(statearr_23530[(13)] = inst_23438);

(statearr_23530[(14)] = inst_23400);

(statearr_23530[(15)] = inst_23397);

(statearr_23530[(16)] = inst_23398);

(statearr_23530[(17)] = inst_23399);

return statearr_23530;
})();
var statearr_23531_23612 = state_23520__$1;
(statearr_23531_23612[(2)] = null);

(statearr_23531_23612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (39))){
var state_23520__$1 = state_23520;
var statearr_23535_23613 = state_23520__$1;
(statearr_23535_23613[(2)] = null);

(statearr_23535_23613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (4))){
var inst_23388 = (state_23520[(11)]);
var inst_23388__$1 = (state_23520[(2)]);
var inst_23389 = (inst_23388__$1 == null);
var state_23520__$1 = (function (){var statearr_23536 = state_23520;
(statearr_23536[(11)] = inst_23388__$1);

return statearr_23536;
})();
if(cljs.core.truth_(inst_23389)){
var statearr_23537_23614 = state_23520__$1;
(statearr_23537_23614[(1)] = (5));

} else {
var statearr_23538_23615 = state_23520__$1;
(statearr_23538_23615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (15))){
var inst_23400 = (state_23520[(14)]);
var inst_23397 = (state_23520[(15)]);
var inst_23398 = (state_23520[(16)]);
var inst_23399 = (state_23520[(17)]);
var inst_23415 = (state_23520[(2)]);
var inst_23416 = (inst_23400 + (1));
var tmp23532 = inst_23397;
var tmp23533 = inst_23398;
var tmp23534 = inst_23399;
var inst_23397__$1 = tmp23532;
var inst_23398__$1 = tmp23533;
var inst_23399__$1 = tmp23534;
var inst_23400__$1 = inst_23416;
var state_23520__$1 = (function (){var statearr_23539 = state_23520;
(statearr_23539[(18)] = inst_23415);

(statearr_23539[(14)] = inst_23400__$1);

(statearr_23539[(15)] = inst_23397__$1);

(statearr_23539[(16)] = inst_23398__$1);

(statearr_23539[(17)] = inst_23399__$1);

return statearr_23539;
})();
var statearr_23540_23616 = state_23520__$1;
(statearr_23540_23616[(2)] = null);

(statearr_23540_23616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (21))){
var inst_23442 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23544_23617 = state_23520__$1;
(statearr_23544_23617[(2)] = inst_23442);

(statearr_23544_23617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (31))){
var inst_23468 = (state_23520[(12)]);
var inst_23472 = done.call(null,null);
var inst_23473 = cljs.core.async.untap_STAR_.call(null,m,inst_23468);
var state_23520__$1 = (function (){var statearr_23545 = state_23520;
(statearr_23545[(19)] = inst_23472);

return statearr_23545;
})();
var statearr_23546_23618 = state_23520__$1;
(statearr_23546_23618[(2)] = inst_23473);

(statearr_23546_23618[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (32))){
var inst_23462 = (state_23520[(20)]);
var inst_23460 = (state_23520[(21)]);
var inst_23461 = (state_23520[(9)]);
var inst_23463 = (state_23520[(10)]);
var inst_23475 = (state_23520[(2)]);
var inst_23476 = (inst_23463 + (1));
var tmp23541 = inst_23462;
var tmp23542 = inst_23460;
var tmp23543 = inst_23461;
var inst_23460__$1 = tmp23542;
var inst_23461__$1 = tmp23543;
var inst_23462__$1 = tmp23541;
var inst_23463__$1 = inst_23476;
var state_23520__$1 = (function (){var statearr_23547 = state_23520;
(statearr_23547[(20)] = inst_23462__$1);

(statearr_23547[(22)] = inst_23475);

(statearr_23547[(21)] = inst_23460__$1);

(statearr_23547[(9)] = inst_23461__$1);

(statearr_23547[(10)] = inst_23463__$1);

return statearr_23547;
})();
var statearr_23548_23619 = state_23520__$1;
(statearr_23548_23619[(2)] = null);

(statearr_23548_23619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (40))){
var inst_23488 = (state_23520[(23)]);
var inst_23492 = done.call(null,null);
var inst_23493 = cljs.core.async.untap_STAR_.call(null,m,inst_23488);
var state_23520__$1 = (function (){var statearr_23549 = state_23520;
(statearr_23549[(24)] = inst_23492);

return statearr_23549;
})();
var statearr_23550_23620 = state_23520__$1;
(statearr_23550_23620[(2)] = inst_23493);

(statearr_23550_23620[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (33))){
var inst_23479 = (state_23520[(25)]);
var inst_23481 = cljs.core.chunked_seq_QMARK_.call(null,inst_23479);
var state_23520__$1 = state_23520;
if(inst_23481){
var statearr_23551_23621 = state_23520__$1;
(statearr_23551_23621[(1)] = (36));

} else {
var statearr_23552_23622 = state_23520__$1;
(statearr_23552_23622[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (13))){
var inst_23409 = (state_23520[(26)]);
var inst_23412 = cljs.core.async.close_BANG_.call(null,inst_23409);
var state_23520__$1 = state_23520;
var statearr_23553_23623 = state_23520__$1;
(statearr_23553_23623[(2)] = inst_23412);

(statearr_23553_23623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (22))){
var inst_23432 = (state_23520[(8)]);
var inst_23435 = cljs.core.async.close_BANG_.call(null,inst_23432);
var state_23520__$1 = state_23520;
var statearr_23554_23624 = state_23520__$1;
(statearr_23554_23624[(2)] = inst_23435);

(statearr_23554_23624[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (36))){
var inst_23479 = (state_23520[(25)]);
var inst_23483 = cljs.core.chunk_first.call(null,inst_23479);
var inst_23484 = cljs.core.chunk_rest.call(null,inst_23479);
var inst_23485 = cljs.core.count.call(null,inst_23483);
var inst_23460 = inst_23484;
var inst_23461 = inst_23483;
var inst_23462 = inst_23485;
var inst_23463 = (0);
var state_23520__$1 = (function (){var statearr_23555 = state_23520;
(statearr_23555[(20)] = inst_23462);

(statearr_23555[(21)] = inst_23460);

(statearr_23555[(9)] = inst_23461);

(statearr_23555[(10)] = inst_23463);

return statearr_23555;
})();
var statearr_23556_23625 = state_23520__$1;
(statearr_23556_23625[(2)] = null);

(statearr_23556_23625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (41))){
var inst_23479 = (state_23520[(25)]);
var inst_23495 = (state_23520[(2)]);
var inst_23496 = cljs.core.next.call(null,inst_23479);
var inst_23460 = inst_23496;
var inst_23461 = null;
var inst_23462 = (0);
var inst_23463 = (0);
var state_23520__$1 = (function (){var statearr_23557 = state_23520;
(statearr_23557[(20)] = inst_23462);

(statearr_23557[(21)] = inst_23460);

(statearr_23557[(9)] = inst_23461);

(statearr_23557[(10)] = inst_23463);

(statearr_23557[(27)] = inst_23495);

return statearr_23557;
})();
var statearr_23558_23626 = state_23520__$1;
(statearr_23558_23626[(2)] = null);

(statearr_23558_23626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (43))){
var state_23520__$1 = state_23520;
var statearr_23559_23627 = state_23520__$1;
(statearr_23559_23627[(2)] = null);

(statearr_23559_23627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (29))){
var inst_23504 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23560_23628 = state_23520__$1;
(statearr_23560_23628[(2)] = inst_23504);

(statearr_23560_23628[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (44))){
var inst_23513 = (state_23520[(2)]);
var state_23520__$1 = (function (){var statearr_23561 = state_23520;
(statearr_23561[(28)] = inst_23513);

return statearr_23561;
})();
var statearr_23562_23629 = state_23520__$1;
(statearr_23562_23629[(2)] = null);

(statearr_23562_23629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (6))){
var inst_23452 = (state_23520[(29)]);
var inst_23451 = cljs.core.deref.call(null,cs);
var inst_23452__$1 = cljs.core.keys.call(null,inst_23451);
var inst_23453 = cljs.core.count.call(null,inst_23452__$1);
var inst_23454 = cljs.core.reset_BANG_.call(null,dctr,inst_23453);
var inst_23459 = cljs.core.seq.call(null,inst_23452__$1);
var inst_23460 = inst_23459;
var inst_23461 = null;
var inst_23462 = (0);
var inst_23463 = (0);
var state_23520__$1 = (function (){var statearr_23563 = state_23520;
(statearr_23563[(20)] = inst_23462);

(statearr_23563[(30)] = inst_23454);

(statearr_23563[(21)] = inst_23460);

(statearr_23563[(9)] = inst_23461);

(statearr_23563[(10)] = inst_23463);

(statearr_23563[(29)] = inst_23452__$1);

return statearr_23563;
})();
var statearr_23564_23630 = state_23520__$1;
(statearr_23564_23630[(2)] = null);

(statearr_23564_23630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (28))){
var inst_23460 = (state_23520[(21)]);
var inst_23479 = (state_23520[(25)]);
var inst_23479__$1 = cljs.core.seq.call(null,inst_23460);
var state_23520__$1 = (function (){var statearr_23565 = state_23520;
(statearr_23565[(25)] = inst_23479__$1);

return statearr_23565;
})();
if(inst_23479__$1){
var statearr_23566_23631 = state_23520__$1;
(statearr_23566_23631[(1)] = (33));

} else {
var statearr_23567_23632 = state_23520__$1;
(statearr_23567_23632[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (25))){
var inst_23462 = (state_23520[(20)]);
var inst_23463 = (state_23520[(10)]);
var inst_23465 = (inst_23463 < inst_23462);
var inst_23466 = inst_23465;
var state_23520__$1 = state_23520;
if(cljs.core.truth_(inst_23466)){
var statearr_23568_23633 = state_23520__$1;
(statearr_23568_23633[(1)] = (27));

} else {
var statearr_23569_23634 = state_23520__$1;
(statearr_23569_23634[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (34))){
var state_23520__$1 = state_23520;
var statearr_23570_23635 = state_23520__$1;
(statearr_23570_23635[(2)] = null);

(statearr_23570_23635[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (17))){
var state_23520__$1 = state_23520;
var statearr_23571_23636 = state_23520__$1;
(statearr_23571_23636[(2)] = null);

(statearr_23571_23636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (3))){
var inst_23518 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23520__$1,inst_23518);
} else {
if((state_val_23521 === (12))){
var inst_23447 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23572_23637 = state_23520__$1;
(statearr_23572_23637[(2)] = inst_23447);

(statearr_23572_23637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (2))){
var state_23520__$1 = state_23520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23520__$1,(4),ch);
} else {
if((state_val_23521 === (23))){
var state_23520__$1 = state_23520;
var statearr_23573_23638 = state_23520__$1;
(statearr_23573_23638[(2)] = null);

(statearr_23573_23638[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (35))){
var inst_23502 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23574_23639 = state_23520__$1;
(statearr_23574_23639[(2)] = inst_23502);

(statearr_23574_23639[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (19))){
var inst_23419 = (state_23520[(7)]);
var inst_23423 = cljs.core.chunk_first.call(null,inst_23419);
var inst_23424 = cljs.core.chunk_rest.call(null,inst_23419);
var inst_23425 = cljs.core.count.call(null,inst_23423);
var inst_23397 = inst_23424;
var inst_23398 = inst_23423;
var inst_23399 = inst_23425;
var inst_23400 = (0);
var state_23520__$1 = (function (){var statearr_23575 = state_23520;
(statearr_23575[(14)] = inst_23400);

(statearr_23575[(15)] = inst_23397);

(statearr_23575[(16)] = inst_23398);

(statearr_23575[(17)] = inst_23399);

return statearr_23575;
})();
var statearr_23576_23640 = state_23520__$1;
(statearr_23576_23640[(2)] = null);

(statearr_23576_23640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (11))){
var inst_23419 = (state_23520[(7)]);
var inst_23397 = (state_23520[(15)]);
var inst_23419__$1 = cljs.core.seq.call(null,inst_23397);
var state_23520__$1 = (function (){var statearr_23577 = state_23520;
(statearr_23577[(7)] = inst_23419__$1);

return statearr_23577;
})();
if(inst_23419__$1){
var statearr_23578_23641 = state_23520__$1;
(statearr_23578_23641[(1)] = (16));

} else {
var statearr_23579_23642 = state_23520__$1;
(statearr_23579_23642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (9))){
var inst_23449 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23580_23643 = state_23520__$1;
(statearr_23580_23643[(2)] = inst_23449);

(statearr_23580_23643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (5))){
var inst_23395 = cljs.core.deref.call(null,cs);
var inst_23396 = cljs.core.seq.call(null,inst_23395);
var inst_23397 = inst_23396;
var inst_23398 = null;
var inst_23399 = (0);
var inst_23400 = (0);
var state_23520__$1 = (function (){var statearr_23581 = state_23520;
(statearr_23581[(14)] = inst_23400);

(statearr_23581[(15)] = inst_23397);

(statearr_23581[(16)] = inst_23398);

(statearr_23581[(17)] = inst_23399);

return statearr_23581;
})();
var statearr_23582_23644 = state_23520__$1;
(statearr_23582_23644[(2)] = null);

(statearr_23582_23644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (14))){
var state_23520__$1 = state_23520;
var statearr_23583_23645 = state_23520__$1;
(statearr_23583_23645[(2)] = null);

(statearr_23583_23645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (45))){
var inst_23510 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23584_23646 = state_23520__$1;
(statearr_23584_23646[(2)] = inst_23510);

(statearr_23584_23646[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (26))){
var inst_23452 = (state_23520[(29)]);
var inst_23506 = (state_23520[(2)]);
var inst_23507 = cljs.core.seq.call(null,inst_23452);
var state_23520__$1 = (function (){var statearr_23585 = state_23520;
(statearr_23585[(31)] = inst_23506);

return statearr_23585;
})();
if(inst_23507){
var statearr_23586_23647 = state_23520__$1;
(statearr_23586_23647[(1)] = (42));

} else {
var statearr_23587_23648 = state_23520__$1;
(statearr_23587_23648[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (16))){
var inst_23419 = (state_23520[(7)]);
var inst_23421 = cljs.core.chunked_seq_QMARK_.call(null,inst_23419);
var state_23520__$1 = state_23520;
if(inst_23421){
var statearr_23588_23649 = state_23520__$1;
(statearr_23588_23649[(1)] = (19));

} else {
var statearr_23589_23650 = state_23520__$1;
(statearr_23589_23650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (38))){
var inst_23499 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23590_23651 = state_23520__$1;
(statearr_23590_23651[(2)] = inst_23499);

(statearr_23590_23651[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (30))){
var state_23520__$1 = state_23520;
var statearr_23591_23652 = state_23520__$1;
(statearr_23591_23652[(2)] = null);

(statearr_23591_23652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (10))){
var inst_23400 = (state_23520[(14)]);
var inst_23398 = (state_23520[(16)]);
var inst_23408 = cljs.core._nth.call(null,inst_23398,inst_23400);
var inst_23409 = cljs.core.nth.call(null,inst_23408,(0),null);
var inst_23410 = cljs.core.nth.call(null,inst_23408,(1),null);
var state_23520__$1 = (function (){var statearr_23592 = state_23520;
(statearr_23592[(26)] = inst_23409);

return statearr_23592;
})();
if(cljs.core.truth_(inst_23410)){
var statearr_23593_23653 = state_23520__$1;
(statearr_23593_23653[(1)] = (13));

} else {
var statearr_23594_23654 = state_23520__$1;
(statearr_23594_23654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (18))){
var inst_23445 = (state_23520[(2)]);
var state_23520__$1 = state_23520;
var statearr_23595_23655 = state_23520__$1;
(statearr_23595_23655[(2)] = inst_23445);

(statearr_23595_23655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (42))){
var state_23520__$1 = state_23520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23520__$1,(45),dchan);
} else {
if((state_val_23521 === (37))){
var inst_23488 = (state_23520[(23)]);
var inst_23479 = (state_23520[(25)]);
var inst_23388 = (state_23520[(11)]);
var inst_23488__$1 = cljs.core.first.call(null,inst_23479);
var inst_23489 = cljs.core.async.put_BANG_.call(null,inst_23488__$1,inst_23388,done);
var state_23520__$1 = (function (){var statearr_23596 = state_23520;
(statearr_23596[(23)] = inst_23488__$1);

return statearr_23596;
})();
if(cljs.core.truth_(inst_23489)){
var statearr_23597_23656 = state_23520__$1;
(statearr_23597_23656[(1)] = (39));

} else {
var statearr_23598_23657 = state_23520__$1;
(statearr_23598_23657[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23521 === (8))){
var inst_23400 = (state_23520[(14)]);
var inst_23399 = (state_23520[(17)]);
var inst_23402 = (inst_23400 < inst_23399);
var inst_23403 = inst_23402;
var state_23520__$1 = state_23520;
if(cljs.core.truth_(inst_23403)){
var statearr_23599_23658 = state_23520__$1;
(statearr_23599_23658[(1)] = (10));

} else {
var statearr_23600_23659 = state_23520__$1;
(statearr_23600_23659[(1)] = (11));

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
});})(c__22786__auto___23605,cs,m,dchan,dctr,done))
;
return ((function (switch__22691__auto__,c__22786__auto___23605,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22692__auto__ = null;
var cljs$core$async$mult_$_state_machine__22692__auto____0 = (function (){
var statearr_23601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23601[(0)] = cljs$core$async$mult_$_state_machine__22692__auto__);

(statearr_23601[(1)] = (1));

return statearr_23601;
});
var cljs$core$async$mult_$_state_machine__22692__auto____1 = (function (state_23520){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23602){if((e23602 instanceof Object)){
var ex__22695__auto__ = e23602;
var statearr_23603_23660 = state_23520;
(statearr_23603_23660[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23661 = state_23520;
state_23520 = G__23661;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22692__auto__ = function(state_23520){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22692__auto____1.call(this,state_23520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22692__auto____0;
cljs$core$async$mult_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22692__auto____1;
return cljs$core$async$mult_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___23605,cs,m,dchan,dctr,done))
})();
var state__22788__auto__ = (function (){var statearr_23604 = f__22787__auto__.call(null);
(statearr_23604[(6)] = c__22786__auto___23605);

return statearr_23604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23605,cs,m,dchan,dctr,done))
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
var G__23663 = arguments.length;
switch (G__23663) {
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
var len__4730__auto___23675 = arguments.length;
var i__4731__auto___23676 = (0);
while(true){
if((i__4731__auto___23676 < len__4730__auto___23675)){
args__4736__auto__.push((arguments[i__4731__auto___23676]));

var G__23677 = (i__4731__auto___23676 + (1));
i__4731__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23669){
var map__23670 = p__23669;
var map__23670__$1 = (((((!((map__23670 == null))))?(((((map__23670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23670):map__23670);
var opts = map__23670__$1;
var statearr_23672_23678 = state;
(statearr_23672_23678[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__23670,map__23670__$1,opts){
return (function (val){
var statearr_23673_23679 = state;
(statearr_23673_23679[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23670,map__23670__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23674_23680 = state;
(statearr_23674_23680[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23665){
var G__23666 = cljs.core.first.call(null,seq23665);
var seq23665__$1 = cljs.core.next.call(null,seq23665);
var G__23667 = cljs.core.first.call(null,seq23665__$1);
var seq23665__$2 = cljs.core.next.call(null,seq23665__$1);
var G__23668 = cljs.core.first.call(null,seq23665__$2);
var seq23665__$3 = cljs.core.next.call(null,seq23665__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23666,G__23667,G__23668,seq23665__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23681 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23682){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23682 = meta23682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23683,meta23682__$1){
var self__ = this;
var _23683__$1 = this;
return (new cljs.core.async.t_cljs$core$async23681(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23683){
var self__ = this;
var _23683__$1 = this;
return self__.meta23682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23681.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23682","meta23682",-366620656,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23681";

cljs.core.async.t_cljs$core$async23681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23681.
 */
cljs.core.async.__GT_t_cljs$core$async23681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23681(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23682){
return (new cljs.core.async.t_cljs$core$async23681(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23681(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22786__auto___23845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23785){
var state_val_23786 = (state_23785[(1)]);
if((state_val_23786 === (7))){
var inst_23700 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23787_23846 = state_23785__$1;
(statearr_23787_23846[(2)] = inst_23700);

(statearr_23787_23846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (20))){
var inst_23712 = (state_23785[(7)]);
var state_23785__$1 = state_23785;
var statearr_23788_23847 = state_23785__$1;
(statearr_23788_23847[(2)] = inst_23712);

(statearr_23788_23847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (27))){
var state_23785__$1 = state_23785;
var statearr_23789_23848 = state_23785__$1;
(statearr_23789_23848[(2)] = null);

(statearr_23789_23848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (1))){
var inst_23687 = (state_23785[(8)]);
var inst_23687__$1 = calc_state.call(null);
var inst_23689 = (inst_23687__$1 == null);
var inst_23690 = cljs.core.not.call(null,inst_23689);
var state_23785__$1 = (function (){var statearr_23790 = state_23785;
(statearr_23790[(8)] = inst_23687__$1);

return statearr_23790;
})();
if(inst_23690){
var statearr_23791_23849 = state_23785__$1;
(statearr_23791_23849[(1)] = (2));

} else {
var statearr_23792_23850 = state_23785__$1;
(statearr_23792_23850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (24))){
var inst_23736 = (state_23785[(9)]);
var inst_23745 = (state_23785[(10)]);
var inst_23759 = (state_23785[(11)]);
var inst_23759__$1 = inst_23736.call(null,inst_23745);
var state_23785__$1 = (function (){var statearr_23793 = state_23785;
(statearr_23793[(11)] = inst_23759__$1);

return statearr_23793;
})();
if(cljs.core.truth_(inst_23759__$1)){
var statearr_23794_23851 = state_23785__$1;
(statearr_23794_23851[(1)] = (29));

} else {
var statearr_23795_23852 = state_23785__$1;
(statearr_23795_23852[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (4))){
var inst_23703 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23703)){
var statearr_23796_23853 = state_23785__$1;
(statearr_23796_23853[(1)] = (8));

} else {
var statearr_23797_23854 = state_23785__$1;
(statearr_23797_23854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (15))){
var inst_23730 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23730)){
var statearr_23798_23855 = state_23785__$1;
(statearr_23798_23855[(1)] = (19));

} else {
var statearr_23799_23856 = state_23785__$1;
(statearr_23799_23856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (21))){
var inst_23735 = (state_23785[(12)]);
var inst_23735__$1 = (state_23785[(2)]);
var inst_23736 = cljs.core.get.call(null,inst_23735__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23737 = cljs.core.get.call(null,inst_23735__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23738 = cljs.core.get.call(null,inst_23735__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23785__$1 = (function (){var statearr_23800 = state_23785;
(statearr_23800[(9)] = inst_23736);

(statearr_23800[(12)] = inst_23735__$1);

(statearr_23800[(13)] = inst_23737);

return statearr_23800;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23785__$1,(22),inst_23738);
} else {
if((state_val_23786 === (31))){
var inst_23767 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23767)){
var statearr_23801_23857 = state_23785__$1;
(statearr_23801_23857[(1)] = (32));

} else {
var statearr_23802_23858 = state_23785__$1;
(statearr_23802_23858[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (32))){
var inst_23744 = (state_23785[(14)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23785__$1,(35),out,inst_23744);
} else {
if((state_val_23786 === (33))){
var inst_23735 = (state_23785[(12)]);
var inst_23712 = inst_23735;
var state_23785__$1 = (function (){var statearr_23803 = state_23785;
(statearr_23803[(7)] = inst_23712);

return statearr_23803;
})();
var statearr_23804_23859 = state_23785__$1;
(statearr_23804_23859[(2)] = null);

(statearr_23804_23859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (13))){
var inst_23712 = (state_23785[(7)]);
var inst_23719 = inst_23712.cljs$lang$protocol_mask$partition0$;
var inst_23720 = (inst_23719 & (64));
var inst_23721 = inst_23712.cljs$core$ISeq$;
var inst_23722 = (cljs.core.PROTOCOL_SENTINEL === inst_23721);
var inst_23723 = ((inst_23720) || (inst_23722));
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23723)){
var statearr_23805_23860 = state_23785__$1;
(statearr_23805_23860[(1)] = (16));

} else {
var statearr_23806_23861 = state_23785__$1;
(statearr_23806_23861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (22))){
var inst_23745 = (state_23785[(10)]);
var inst_23744 = (state_23785[(14)]);
var inst_23743 = (state_23785[(2)]);
var inst_23744__$1 = cljs.core.nth.call(null,inst_23743,(0),null);
var inst_23745__$1 = cljs.core.nth.call(null,inst_23743,(1),null);
var inst_23746 = (inst_23744__$1 == null);
var inst_23747 = cljs.core._EQ_.call(null,inst_23745__$1,change);
var inst_23748 = ((inst_23746) || (inst_23747));
var state_23785__$1 = (function (){var statearr_23807 = state_23785;
(statearr_23807[(10)] = inst_23745__$1);

(statearr_23807[(14)] = inst_23744__$1);

return statearr_23807;
})();
if(cljs.core.truth_(inst_23748)){
var statearr_23808_23862 = state_23785__$1;
(statearr_23808_23862[(1)] = (23));

} else {
var statearr_23809_23863 = state_23785__$1;
(statearr_23809_23863[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (36))){
var inst_23735 = (state_23785[(12)]);
var inst_23712 = inst_23735;
var state_23785__$1 = (function (){var statearr_23810 = state_23785;
(statearr_23810[(7)] = inst_23712);

return statearr_23810;
})();
var statearr_23811_23864 = state_23785__$1;
(statearr_23811_23864[(2)] = null);

(statearr_23811_23864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (29))){
var inst_23759 = (state_23785[(11)]);
var state_23785__$1 = state_23785;
var statearr_23812_23865 = state_23785__$1;
(statearr_23812_23865[(2)] = inst_23759);

(statearr_23812_23865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (6))){
var state_23785__$1 = state_23785;
var statearr_23813_23866 = state_23785__$1;
(statearr_23813_23866[(2)] = false);

(statearr_23813_23866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (28))){
var inst_23755 = (state_23785[(2)]);
var inst_23756 = calc_state.call(null);
var inst_23712 = inst_23756;
var state_23785__$1 = (function (){var statearr_23814 = state_23785;
(statearr_23814[(15)] = inst_23755);

(statearr_23814[(7)] = inst_23712);

return statearr_23814;
})();
var statearr_23815_23867 = state_23785__$1;
(statearr_23815_23867[(2)] = null);

(statearr_23815_23867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (25))){
var inst_23781 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23816_23868 = state_23785__$1;
(statearr_23816_23868[(2)] = inst_23781);

(statearr_23816_23868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (34))){
var inst_23779 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23817_23869 = state_23785__$1;
(statearr_23817_23869[(2)] = inst_23779);

(statearr_23817_23869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (17))){
var state_23785__$1 = state_23785;
var statearr_23818_23870 = state_23785__$1;
(statearr_23818_23870[(2)] = false);

(statearr_23818_23870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (3))){
var state_23785__$1 = state_23785;
var statearr_23819_23871 = state_23785__$1;
(statearr_23819_23871[(2)] = false);

(statearr_23819_23871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (12))){
var inst_23783 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23785__$1,inst_23783);
} else {
if((state_val_23786 === (2))){
var inst_23687 = (state_23785[(8)]);
var inst_23692 = inst_23687.cljs$lang$protocol_mask$partition0$;
var inst_23693 = (inst_23692 & (64));
var inst_23694 = inst_23687.cljs$core$ISeq$;
var inst_23695 = (cljs.core.PROTOCOL_SENTINEL === inst_23694);
var inst_23696 = ((inst_23693) || (inst_23695));
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23696)){
var statearr_23820_23872 = state_23785__$1;
(statearr_23820_23872[(1)] = (5));

} else {
var statearr_23821_23873 = state_23785__$1;
(statearr_23821_23873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (23))){
var inst_23744 = (state_23785[(14)]);
var inst_23750 = (inst_23744 == null);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23750)){
var statearr_23822_23874 = state_23785__$1;
(statearr_23822_23874[(1)] = (26));

} else {
var statearr_23823_23875 = state_23785__$1;
(statearr_23823_23875[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (35))){
var inst_23770 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
if(cljs.core.truth_(inst_23770)){
var statearr_23824_23876 = state_23785__$1;
(statearr_23824_23876[(1)] = (36));

} else {
var statearr_23825_23877 = state_23785__$1;
(statearr_23825_23877[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (19))){
var inst_23712 = (state_23785[(7)]);
var inst_23732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23712);
var state_23785__$1 = state_23785;
var statearr_23826_23878 = state_23785__$1;
(statearr_23826_23878[(2)] = inst_23732);

(statearr_23826_23878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (11))){
var inst_23712 = (state_23785[(7)]);
var inst_23716 = (inst_23712 == null);
var inst_23717 = cljs.core.not.call(null,inst_23716);
var state_23785__$1 = state_23785;
if(inst_23717){
var statearr_23827_23879 = state_23785__$1;
(statearr_23827_23879[(1)] = (13));

} else {
var statearr_23828_23880 = state_23785__$1;
(statearr_23828_23880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (9))){
var inst_23687 = (state_23785[(8)]);
var state_23785__$1 = state_23785;
var statearr_23829_23881 = state_23785__$1;
(statearr_23829_23881[(2)] = inst_23687);

(statearr_23829_23881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (5))){
var state_23785__$1 = state_23785;
var statearr_23830_23882 = state_23785__$1;
(statearr_23830_23882[(2)] = true);

(statearr_23830_23882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (14))){
var state_23785__$1 = state_23785;
var statearr_23831_23883 = state_23785__$1;
(statearr_23831_23883[(2)] = false);

(statearr_23831_23883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (26))){
var inst_23745 = (state_23785[(10)]);
var inst_23752 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23745);
var state_23785__$1 = state_23785;
var statearr_23832_23884 = state_23785__$1;
(statearr_23832_23884[(2)] = inst_23752);

(statearr_23832_23884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (16))){
var state_23785__$1 = state_23785;
var statearr_23833_23885 = state_23785__$1;
(statearr_23833_23885[(2)] = true);

(statearr_23833_23885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (38))){
var inst_23775 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23834_23886 = state_23785__$1;
(statearr_23834_23886[(2)] = inst_23775);

(statearr_23834_23886[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (30))){
var inst_23736 = (state_23785[(9)]);
var inst_23745 = (state_23785[(10)]);
var inst_23737 = (state_23785[(13)]);
var inst_23762 = cljs.core.empty_QMARK_.call(null,inst_23736);
var inst_23763 = inst_23737.call(null,inst_23745);
var inst_23764 = cljs.core.not.call(null,inst_23763);
var inst_23765 = ((inst_23762) && (inst_23764));
var state_23785__$1 = state_23785;
var statearr_23835_23887 = state_23785__$1;
(statearr_23835_23887[(2)] = inst_23765);

(statearr_23835_23887[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (10))){
var inst_23687 = (state_23785[(8)]);
var inst_23708 = (state_23785[(2)]);
var inst_23709 = cljs.core.get.call(null,inst_23708,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23710 = cljs.core.get.call(null,inst_23708,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23711 = cljs.core.get.call(null,inst_23708,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23712 = inst_23687;
var state_23785__$1 = (function (){var statearr_23836 = state_23785;
(statearr_23836[(16)] = inst_23710);

(statearr_23836[(17)] = inst_23709);

(statearr_23836[(7)] = inst_23712);

(statearr_23836[(18)] = inst_23711);

return statearr_23836;
})();
var statearr_23837_23888 = state_23785__$1;
(statearr_23837_23888[(2)] = null);

(statearr_23837_23888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (18))){
var inst_23727 = (state_23785[(2)]);
var state_23785__$1 = state_23785;
var statearr_23838_23889 = state_23785__$1;
(statearr_23838_23889[(2)] = inst_23727);

(statearr_23838_23889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (37))){
var state_23785__$1 = state_23785;
var statearr_23839_23890 = state_23785__$1;
(statearr_23839_23890[(2)] = null);

(statearr_23839_23890[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23786 === (8))){
var inst_23687 = (state_23785[(8)]);
var inst_23705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23687);
var state_23785__$1 = state_23785;
var statearr_23840_23891 = state_23785__$1;
(statearr_23840_23891[(2)] = inst_23705);

(statearr_23840_23891[(1)] = (10));


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
});})(c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22691__auto__,c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22692__auto__ = null;
var cljs$core$async$mix_$_state_machine__22692__auto____0 = (function (){
var statearr_23841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23841[(0)] = cljs$core$async$mix_$_state_machine__22692__auto__);

(statearr_23841[(1)] = (1));

return statearr_23841;
});
var cljs$core$async$mix_$_state_machine__22692__auto____1 = (function (state_23785){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e23842){if((e23842 instanceof Object)){
var ex__22695__auto__ = e23842;
var statearr_23843_23892 = state_23785;
(statearr_23843_23892[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23893 = state_23785;
state_23785 = G__23893;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22692__auto__ = function(state_23785){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22692__auto____1.call(this,state_23785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22692__auto____0;
cljs$core$async$mix_$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22692__auto____1;
return cljs$core$async$mix_$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22788__auto__ = (function (){var statearr_23844 = f__22787__auto__.call(null);
(statearr_23844[(6)] = c__22786__auto___23845);

return statearr_23844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___23845,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__23895 = arguments.length;
switch (G__23895) {
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
var G__23899 = arguments.length;
switch (G__23899) {
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
return (function (p1__23897_SHARP_){
if(cljs.core.truth_(p1__23897_SHARP_.call(null,topic))){
return p1__23897_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23897_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23900 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23901){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23901 = meta23901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23902,meta23901__$1){
var self__ = this;
var _23902__$1 = this;
return (new cljs.core.async.t_cljs$core$async23900(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23901__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23902){
var self__ = this;
var _23902__$1 = this;
return self__.meta23901;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23901","meta23901",1482641514,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23900";

cljs.core.async.t_cljs$core$async23900.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23900");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23900.
 */
cljs.core.async.__GT_t_cljs$core$async23900 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23901){
return (new cljs.core.async.t_cljs$core$async23900(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23901));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23900(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22786__auto___24020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24020,mults,ensure_mult,p){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24020,mults,ensure_mult,p){
return (function (state_23974){
var state_val_23975 = (state_23974[(1)]);
if((state_val_23975 === (7))){
var inst_23970 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23976_24021 = state_23974__$1;
(statearr_23976_24021[(2)] = inst_23970);

(statearr_23976_24021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (20))){
var state_23974__$1 = state_23974;
var statearr_23977_24022 = state_23974__$1;
(statearr_23977_24022[(2)] = null);

(statearr_23977_24022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (1))){
var state_23974__$1 = state_23974;
var statearr_23978_24023 = state_23974__$1;
(statearr_23978_24023[(2)] = null);

(statearr_23978_24023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (24))){
var inst_23953 = (state_23974[(7)]);
var inst_23962 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23953);
var state_23974__$1 = state_23974;
var statearr_23979_24024 = state_23974__$1;
(statearr_23979_24024[(2)] = inst_23962);

(statearr_23979_24024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (4))){
var inst_23905 = (state_23974[(8)]);
var inst_23905__$1 = (state_23974[(2)]);
var inst_23906 = (inst_23905__$1 == null);
var state_23974__$1 = (function (){var statearr_23980 = state_23974;
(statearr_23980[(8)] = inst_23905__$1);

return statearr_23980;
})();
if(cljs.core.truth_(inst_23906)){
var statearr_23981_24025 = state_23974__$1;
(statearr_23981_24025[(1)] = (5));

} else {
var statearr_23982_24026 = state_23974__$1;
(statearr_23982_24026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (15))){
var inst_23947 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23983_24027 = state_23974__$1;
(statearr_23983_24027[(2)] = inst_23947);

(statearr_23983_24027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (21))){
var inst_23967 = (state_23974[(2)]);
var state_23974__$1 = (function (){var statearr_23984 = state_23974;
(statearr_23984[(9)] = inst_23967);

return statearr_23984;
})();
var statearr_23985_24028 = state_23974__$1;
(statearr_23985_24028[(2)] = null);

(statearr_23985_24028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (13))){
var inst_23929 = (state_23974[(10)]);
var inst_23931 = cljs.core.chunked_seq_QMARK_.call(null,inst_23929);
var state_23974__$1 = state_23974;
if(inst_23931){
var statearr_23986_24029 = state_23974__$1;
(statearr_23986_24029[(1)] = (16));

} else {
var statearr_23987_24030 = state_23974__$1;
(statearr_23987_24030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (22))){
var inst_23959 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23959)){
var statearr_23988_24031 = state_23974__$1;
(statearr_23988_24031[(1)] = (23));

} else {
var statearr_23989_24032 = state_23974__$1;
(statearr_23989_24032[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (6))){
var inst_23905 = (state_23974[(8)]);
var inst_23953 = (state_23974[(7)]);
var inst_23955 = (state_23974[(11)]);
var inst_23953__$1 = topic_fn.call(null,inst_23905);
var inst_23954 = cljs.core.deref.call(null,mults);
var inst_23955__$1 = cljs.core.get.call(null,inst_23954,inst_23953__$1);
var state_23974__$1 = (function (){var statearr_23990 = state_23974;
(statearr_23990[(7)] = inst_23953__$1);

(statearr_23990[(11)] = inst_23955__$1);

return statearr_23990;
})();
if(cljs.core.truth_(inst_23955__$1)){
var statearr_23991_24033 = state_23974__$1;
(statearr_23991_24033[(1)] = (19));

} else {
var statearr_23992_24034 = state_23974__$1;
(statearr_23992_24034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (25))){
var inst_23964 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23993_24035 = state_23974__$1;
(statearr_23993_24035[(2)] = inst_23964);

(statearr_23993_24035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (17))){
var inst_23929 = (state_23974[(10)]);
var inst_23938 = cljs.core.first.call(null,inst_23929);
var inst_23939 = cljs.core.async.muxch_STAR_.call(null,inst_23938);
var inst_23940 = cljs.core.async.close_BANG_.call(null,inst_23939);
var inst_23941 = cljs.core.next.call(null,inst_23929);
var inst_23915 = inst_23941;
var inst_23916 = null;
var inst_23917 = (0);
var inst_23918 = (0);
var state_23974__$1 = (function (){var statearr_23994 = state_23974;
(statearr_23994[(12)] = inst_23917);

(statearr_23994[(13)] = inst_23916);

(statearr_23994[(14)] = inst_23915);

(statearr_23994[(15)] = inst_23940);

(statearr_23994[(16)] = inst_23918);

return statearr_23994;
})();
var statearr_23995_24036 = state_23974__$1;
(statearr_23995_24036[(2)] = null);

(statearr_23995_24036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (3))){
var inst_23972 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23974__$1,inst_23972);
} else {
if((state_val_23975 === (12))){
var inst_23949 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_23996_24037 = state_23974__$1;
(statearr_23996_24037[(2)] = inst_23949);

(statearr_23996_24037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (2))){
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23974__$1,(4),ch);
} else {
if((state_val_23975 === (23))){
var state_23974__$1 = state_23974;
var statearr_23997_24038 = state_23974__$1;
(statearr_23997_24038[(2)] = null);

(statearr_23997_24038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (19))){
var inst_23905 = (state_23974[(8)]);
var inst_23955 = (state_23974[(11)]);
var inst_23957 = cljs.core.async.muxch_STAR_.call(null,inst_23955);
var state_23974__$1 = state_23974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23974__$1,(22),inst_23957,inst_23905);
} else {
if((state_val_23975 === (11))){
var inst_23915 = (state_23974[(14)]);
var inst_23929 = (state_23974[(10)]);
var inst_23929__$1 = cljs.core.seq.call(null,inst_23915);
var state_23974__$1 = (function (){var statearr_23998 = state_23974;
(statearr_23998[(10)] = inst_23929__$1);

return statearr_23998;
})();
if(inst_23929__$1){
var statearr_23999_24039 = state_23974__$1;
(statearr_23999_24039[(1)] = (13));

} else {
var statearr_24000_24040 = state_23974__$1;
(statearr_24000_24040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (9))){
var inst_23951 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24001_24041 = state_23974__$1;
(statearr_24001_24041[(2)] = inst_23951);

(statearr_24001_24041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (5))){
var inst_23912 = cljs.core.deref.call(null,mults);
var inst_23913 = cljs.core.vals.call(null,inst_23912);
var inst_23914 = cljs.core.seq.call(null,inst_23913);
var inst_23915 = inst_23914;
var inst_23916 = null;
var inst_23917 = (0);
var inst_23918 = (0);
var state_23974__$1 = (function (){var statearr_24002 = state_23974;
(statearr_24002[(12)] = inst_23917);

(statearr_24002[(13)] = inst_23916);

(statearr_24002[(14)] = inst_23915);

(statearr_24002[(16)] = inst_23918);

return statearr_24002;
})();
var statearr_24003_24042 = state_23974__$1;
(statearr_24003_24042[(2)] = null);

(statearr_24003_24042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (14))){
var state_23974__$1 = state_23974;
var statearr_24007_24043 = state_23974__$1;
(statearr_24007_24043[(2)] = null);

(statearr_24007_24043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (16))){
var inst_23929 = (state_23974[(10)]);
var inst_23933 = cljs.core.chunk_first.call(null,inst_23929);
var inst_23934 = cljs.core.chunk_rest.call(null,inst_23929);
var inst_23935 = cljs.core.count.call(null,inst_23933);
var inst_23915 = inst_23934;
var inst_23916 = inst_23933;
var inst_23917 = inst_23935;
var inst_23918 = (0);
var state_23974__$1 = (function (){var statearr_24008 = state_23974;
(statearr_24008[(12)] = inst_23917);

(statearr_24008[(13)] = inst_23916);

(statearr_24008[(14)] = inst_23915);

(statearr_24008[(16)] = inst_23918);

return statearr_24008;
})();
var statearr_24009_24044 = state_23974__$1;
(statearr_24009_24044[(2)] = null);

(statearr_24009_24044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (10))){
var inst_23917 = (state_23974[(12)]);
var inst_23916 = (state_23974[(13)]);
var inst_23915 = (state_23974[(14)]);
var inst_23918 = (state_23974[(16)]);
var inst_23923 = cljs.core._nth.call(null,inst_23916,inst_23918);
var inst_23924 = cljs.core.async.muxch_STAR_.call(null,inst_23923);
var inst_23925 = cljs.core.async.close_BANG_.call(null,inst_23924);
var inst_23926 = (inst_23918 + (1));
var tmp24004 = inst_23917;
var tmp24005 = inst_23916;
var tmp24006 = inst_23915;
var inst_23915__$1 = tmp24006;
var inst_23916__$1 = tmp24005;
var inst_23917__$1 = tmp24004;
var inst_23918__$1 = inst_23926;
var state_23974__$1 = (function (){var statearr_24010 = state_23974;
(statearr_24010[(12)] = inst_23917__$1);

(statearr_24010[(17)] = inst_23925);

(statearr_24010[(13)] = inst_23916__$1);

(statearr_24010[(14)] = inst_23915__$1);

(statearr_24010[(16)] = inst_23918__$1);

return statearr_24010;
})();
var statearr_24011_24045 = state_23974__$1;
(statearr_24011_24045[(2)] = null);

(statearr_24011_24045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (18))){
var inst_23944 = (state_23974[(2)]);
var state_23974__$1 = state_23974;
var statearr_24012_24046 = state_23974__$1;
(statearr_24012_24046[(2)] = inst_23944);

(statearr_24012_24046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23975 === (8))){
var inst_23917 = (state_23974[(12)]);
var inst_23918 = (state_23974[(16)]);
var inst_23920 = (inst_23918 < inst_23917);
var inst_23921 = inst_23920;
var state_23974__$1 = state_23974;
if(cljs.core.truth_(inst_23921)){
var statearr_24013_24047 = state_23974__$1;
(statearr_24013_24047[(1)] = (10));

} else {
var statearr_24014_24048 = state_23974__$1;
(statearr_24014_24048[(1)] = (11));

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
});})(c__22786__auto___24020,mults,ensure_mult,p))
;
return ((function (switch__22691__auto__,c__22786__auto___24020,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24015[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24015[(1)] = (1));

return statearr_24015;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_23974){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_23974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24016){if((e24016 instanceof Object)){
var ex__22695__auto__ = e24016;
var statearr_24017_24049 = state_23974;
(statearr_24017_24049[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24050 = state_23974;
state_23974 = G__24050;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_23974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_23974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24020,mults,ensure_mult,p))
})();
var state__22788__auto__ = (function (){var statearr_24018 = f__22787__auto__.call(null);
(statearr_24018[(6)] = c__22786__auto___24020);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24020,mults,ensure_mult,p))
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
var G__24052 = arguments.length;
switch (G__24052) {
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
var G__24055 = arguments.length;
switch (G__24055) {
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
var G__24058 = arguments.length;
switch (G__24058) {
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
var c__22786__auto___24125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24097){
var state_val_24098 = (state_24097[(1)]);
if((state_val_24098 === (7))){
var state_24097__$1 = state_24097;
var statearr_24099_24126 = state_24097__$1;
(statearr_24099_24126[(2)] = null);

(statearr_24099_24126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (1))){
var state_24097__$1 = state_24097;
var statearr_24100_24127 = state_24097__$1;
(statearr_24100_24127[(2)] = null);

(statearr_24100_24127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (4))){
var inst_24061 = (state_24097[(7)]);
var inst_24063 = (inst_24061 < cnt);
var state_24097__$1 = state_24097;
if(cljs.core.truth_(inst_24063)){
var statearr_24101_24128 = state_24097__$1;
(statearr_24101_24128[(1)] = (6));

} else {
var statearr_24102_24129 = state_24097__$1;
(statearr_24102_24129[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (15))){
var inst_24093 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24103_24130 = state_24097__$1;
(statearr_24103_24130[(2)] = inst_24093);

(statearr_24103_24130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (13))){
var inst_24086 = cljs.core.async.close_BANG_.call(null,out);
var state_24097__$1 = state_24097;
var statearr_24104_24131 = state_24097__$1;
(statearr_24104_24131[(2)] = inst_24086);

(statearr_24104_24131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (6))){
var state_24097__$1 = state_24097;
var statearr_24105_24132 = state_24097__$1;
(statearr_24105_24132[(2)] = null);

(statearr_24105_24132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (3))){
var inst_24095 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24097__$1,inst_24095);
} else {
if((state_val_24098 === (12))){
var inst_24083 = (state_24097[(8)]);
var inst_24083__$1 = (state_24097[(2)]);
var inst_24084 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24083__$1);
var state_24097__$1 = (function (){var statearr_24106 = state_24097;
(statearr_24106[(8)] = inst_24083__$1);

return statearr_24106;
})();
if(cljs.core.truth_(inst_24084)){
var statearr_24107_24133 = state_24097__$1;
(statearr_24107_24133[(1)] = (13));

} else {
var statearr_24108_24134 = state_24097__$1;
(statearr_24108_24134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (2))){
var inst_24060 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24061 = (0);
var state_24097__$1 = (function (){var statearr_24109 = state_24097;
(statearr_24109[(9)] = inst_24060);

(statearr_24109[(7)] = inst_24061);

return statearr_24109;
})();
var statearr_24110_24135 = state_24097__$1;
(statearr_24110_24135[(2)] = null);

(statearr_24110_24135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (11))){
var inst_24061 = (state_24097[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24097,(10),Object,null,(9));
var inst_24070 = chs__$1.call(null,inst_24061);
var inst_24071 = done.call(null,inst_24061);
var inst_24072 = cljs.core.async.take_BANG_.call(null,inst_24070,inst_24071);
var state_24097__$1 = state_24097;
var statearr_24111_24136 = state_24097__$1;
(statearr_24111_24136[(2)] = inst_24072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24097__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (9))){
var inst_24061 = (state_24097[(7)]);
var inst_24074 = (state_24097[(2)]);
var inst_24075 = (inst_24061 + (1));
var inst_24061__$1 = inst_24075;
var state_24097__$1 = (function (){var statearr_24112 = state_24097;
(statearr_24112[(10)] = inst_24074);

(statearr_24112[(7)] = inst_24061__$1);

return statearr_24112;
})();
var statearr_24113_24137 = state_24097__$1;
(statearr_24113_24137[(2)] = null);

(statearr_24113_24137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (5))){
var inst_24081 = (state_24097[(2)]);
var state_24097__$1 = (function (){var statearr_24114 = state_24097;
(statearr_24114[(11)] = inst_24081);

return statearr_24114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24097__$1,(12),dchan);
} else {
if((state_val_24098 === (14))){
var inst_24083 = (state_24097[(8)]);
var inst_24088 = cljs.core.apply.call(null,f,inst_24083);
var state_24097__$1 = state_24097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24097__$1,(16),out,inst_24088);
} else {
if((state_val_24098 === (16))){
var inst_24090 = (state_24097[(2)]);
var state_24097__$1 = (function (){var statearr_24115 = state_24097;
(statearr_24115[(12)] = inst_24090);

return statearr_24115;
})();
var statearr_24116_24138 = state_24097__$1;
(statearr_24116_24138[(2)] = null);

(statearr_24116_24138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (10))){
var inst_24065 = (state_24097[(2)]);
var inst_24066 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24097__$1 = (function (){var statearr_24117 = state_24097;
(statearr_24117[(13)] = inst_24065);

return statearr_24117;
})();
var statearr_24118_24139 = state_24097__$1;
(statearr_24118_24139[(2)] = inst_24066);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24097__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24098 === (8))){
var inst_24079 = (state_24097[(2)]);
var state_24097__$1 = state_24097;
var statearr_24119_24140 = state_24097__$1;
(statearr_24119_24140[(2)] = inst_24079);

(statearr_24119_24140[(1)] = (5));


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
});})(c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22691__auto__,c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24120[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24120[(1)] = (1));

return statearr_24120;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24097){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24121){if((e24121 instanceof Object)){
var ex__22695__auto__ = e24121;
var statearr_24122_24141 = state_24097;
(statearr_24122_24141[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24142 = state_24097;
state_24097 = G__24142;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22788__auto__ = (function (){var statearr_24123 = f__22787__auto__.call(null);
(statearr_24123[(6)] = c__22786__auto___24125);

return statearr_24123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24125,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__24145 = arguments.length;
switch (G__24145) {
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
var c__22786__auto___24199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24199,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24199,out){
return (function (state_24177){
var state_val_24178 = (state_24177[(1)]);
if((state_val_24178 === (7))){
var inst_24156 = (state_24177[(7)]);
var inst_24157 = (state_24177[(8)]);
var inst_24156__$1 = (state_24177[(2)]);
var inst_24157__$1 = cljs.core.nth.call(null,inst_24156__$1,(0),null);
var inst_24158 = cljs.core.nth.call(null,inst_24156__$1,(1),null);
var inst_24159 = (inst_24157__$1 == null);
var state_24177__$1 = (function (){var statearr_24179 = state_24177;
(statearr_24179[(7)] = inst_24156__$1);

(statearr_24179[(8)] = inst_24157__$1);

(statearr_24179[(9)] = inst_24158);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24159)){
var statearr_24180_24200 = state_24177__$1;
(statearr_24180_24200[(1)] = (8));

} else {
var statearr_24181_24201 = state_24177__$1;
(statearr_24181_24201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (1))){
var inst_24146 = cljs.core.vec.call(null,chs);
var inst_24147 = inst_24146;
var state_24177__$1 = (function (){var statearr_24182 = state_24177;
(statearr_24182[(10)] = inst_24147);

return statearr_24182;
})();
var statearr_24183_24202 = state_24177__$1;
(statearr_24183_24202[(2)] = null);

(statearr_24183_24202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (4))){
var inst_24147 = (state_24177[(10)]);
var state_24177__$1 = state_24177;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24177__$1,(7),inst_24147);
} else {
if((state_val_24178 === (6))){
var inst_24173 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24184_24203 = state_24177__$1;
(statearr_24184_24203[(2)] = inst_24173);

(statearr_24184_24203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (3))){
var inst_24175 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24177__$1,inst_24175);
} else {
if((state_val_24178 === (2))){
var inst_24147 = (state_24177[(10)]);
var inst_24149 = cljs.core.count.call(null,inst_24147);
var inst_24150 = (inst_24149 > (0));
var state_24177__$1 = state_24177;
if(cljs.core.truth_(inst_24150)){
var statearr_24186_24204 = state_24177__$1;
(statearr_24186_24204[(1)] = (4));

} else {
var statearr_24187_24205 = state_24177__$1;
(statearr_24187_24205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (11))){
var inst_24147 = (state_24177[(10)]);
var inst_24166 = (state_24177[(2)]);
var tmp24185 = inst_24147;
var inst_24147__$1 = tmp24185;
var state_24177__$1 = (function (){var statearr_24188 = state_24177;
(statearr_24188[(10)] = inst_24147__$1);

(statearr_24188[(11)] = inst_24166);

return statearr_24188;
})();
var statearr_24189_24206 = state_24177__$1;
(statearr_24189_24206[(2)] = null);

(statearr_24189_24206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (9))){
var inst_24157 = (state_24177[(8)]);
var state_24177__$1 = state_24177;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24177__$1,(11),out,inst_24157);
} else {
if((state_val_24178 === (5))){
var inst_24171 = cljs.core.async.close_BANG_.call(null,out);
var state_24177__$1 = state_24177;
var statearr_24190_24207 = state_24177__$1;
(statearr_24190_24207[(2)] = inst_24171);

(statearr_24190_24207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (10))){
var inst_24169 = (state_24177[(2)]);
var state_24177__$1 = state_24177;
var statearr_24191_24208 = state_24177__$1;
(statearr_24191_24208[(2)] = inst_24169);

(statearr_24191_24208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24178 === (8))){
var inst_24156 = (state_24177[(7)]);
var inst_24157 = (state_24177[(8)]);
var inst_24147 = (state_24177[(10)]);
var inst_24158 = (state_24177[(9)]);
var inst_24161 = (function (){var cs = inst_24147;
var vec__24152 = inst_24156;
var v = inst_24157;
var c = inst_24158;
return ((function (cs,vec__24152,v,c,inst_24156,inst_24157,inst_24147,inst_24158,state_val_24178,c__22786__auto___24199,out){
return (function (p1__24143_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24143_SHARP_);
});
;})(cs,vec__24152,v,c,inst_24156,inst_24157,inst_24147,inst_24158,state_val_24178,c__22786__auto___24199,out))
})();
var inst_24162 = cljs.core.filterv.call(null,inst_24161,inst_24147);
var inst_24147__$1 = inst_24162;
var state_24177__$1 = (function (){var statearr_24192 = state_24177;
(statearr_24192[(10)] = inst_24147__$1);

return statearr_24192;
})();
var statearr_24193_24209 = state_24177__$1;
(statearr_24193_24209[(2)] = null);

(statearr_24193_24209[(1)] = (2));


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
});})(c__22786__auto___24199,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24199,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24194[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24194[(1)] = (1));

return statearr_24194;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24177){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24195){if((e24195 instanceof Object)){
var ex__22695__auto__ = e24195;
var statearr_24196_24210 = state_24177;
(statearr_24196_24210[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24211 = state_24177;
state_24177 = G__24211;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24199,out))
})();
var state__22788__auto__ = (function (){var statearr_24197 = f__22787__auto__.call(null);
(statearr_24197[(6)] = c__22786__auto___24199);

return statearr_24197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24199,out))
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
var G__24213 = arguments.length;
switch (G__24213) {
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
var c__22786__auto___24258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24258,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24258,out){
return (function (state_24237){
var state_val_24238 = (state_24237[(1)]);
if((state_val_24238 === (7))){
var inst_24219 = (state_24237[(7)]);
var inst_24219__$1 = (state_24237[(2)]);
var inst_24220 = (inst_24219__$1 == null);
var inst_24221 = cljs.core.not.call(null,inst_24220);
var state_24237__$1 = (function (){var statearr_24239 = state_24237;
(statearr_24239[(7)] = inst_24219__$1);

return statearr_24239;
})();
if(inst_24221){
var statearr_24240_24259 = state_24237__$1;
(statearr_24240_24259[(1)] = (8));

} else {
var statearr_24241_24260 = state_24237__$1;
(statearr_24241_24260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (1))){
var inst_24214 = (0);
var state_24237__$1 = (function (){var statearr_24242 = state_24237;
(statearr_24242[(8)] = inst_24214);

return statearr_24242;
})();
var statearr_24243_24261 = state_24237__$1;
(statearr_24243_24261[(2)] = null);

(statearr_24243_24261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (4))){
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24237__$1,(7),ch);
} else {
if((state_val_24238 === (6))){
var inst_24232 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24244_24262 = state_24237__$1;
(statearr_24244_24262[(2)] = inst_24232);

(statearr_24244_24262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (3))){
var inst_24234 = (state_24237[(2)]);
var inst_24235 = cljs.core.async.close_BANG_.call(null,out);
var state_24237__$1 = (function (){var statearr_24245 = state_24237;
(statearr_24245[(9)] = inst_24234);

return statearr_24245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24237__$1,inst_24235);
} else {
if((state_val_24238 === (2))){
var inst_24214 = (state_24237[(8)]);
var inst_24216 = (inst_24214 < n);
var state_24237__$1 = state_24237;
if(cljs.core.truth_(inst_24216)){
var statearr_24246_24263 = state_24237__$1;
(statearr_24246_24263[(1)] = (4));

} else {
var statearr_24247_24264 = state_24237__$1;
(statearr_24247_24264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (11))){
var inst_24214 = (state_24237[(8)]);
var inst_24224 = (state_24237[(2)]);
var inst_24225 = (inst_24214 + (1));
var inst_24214__$1 = inst_24225;
var state_24237__$1 = (function (){var statearr_24248 = state_24237;
(statearr_24248[(8)] = inst_24214__$1);

(statearr_24248[(10)] = inst_24224);

return statearr_24248;
})();
var statearr_24249_24265 = state_24237__$1;
(statearr_24249_24265[(2)] = null);

(statearr_24249_24265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (9))){
var state_24237__$1 = state_24237;
var statearr_24250_24266 = state_24237__$1;
(statearr_24250_24266[(2)] = null);

(statearr_24250_24266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (5))){
var state_24237__$1 = state_24237;
var statearr_24251_24267 = state_24237__$1;
(statearr_24251_24267[(2)] = null);

(statearr_24251_24267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (10))){
var inst_24229 = (state_24237[(2)]);
var state_24237__$1 = state_24237;
var statearr_24252_24268 = state_24237__$1;
(statearr_24252_24268[(2)] = inst_24229);

(statearr_24252_24268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24238 === (8))){
var inst_24219 = (state_24237[(7)]);
var state_24237__$1 = state_24237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24237__$1,(11),out,inst_24219);
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
});})(c__22786__auto___24258,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24258,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24253[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24253[(1)] = (1));

return statearr_24253;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24237){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24254){if((e24254 instanceof Object)){
var ex__22695__auto__ = e24254;
var statearr_24255_24269 = state_24237;
(statearr_24255_24269[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24270 = state_24237;
state_24237 = G__24270;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24258,out))
})();
var state__22788__auto__ = (function (){var statearr_24256 = f__22787__auto__.call(null);
(statearr_24256[(6)] = c__22786__auto___24258);

return statearr_24256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24258,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24272 = (function (f,ch,meta24273){
this.f = f;
this.ch = ch;
this.meta24273 = meta24273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24274,meta24273__$1){
var self__ = this;
var _24274__$1 = this;
return (new cljs.core.async.t_cljs$core$async24272(self__.f,self__.ch,meta24273__$1));
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24274){
var self__ = this;
var _24274__$1 = this;
return self__.meta24273;
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24275 = (function (f,ch,meta24273,_,fn1,meta24276){
this.f = f;
this.ch = ch;
this.meta24273 = meta24273;
this._ = _;
this.fn1 = fn1;
this.meta24276 = meta24276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24277,meta24276__$1){
var self__ = this;
var _24277__$1 = this;
return (new cljs.core.async.t_cljs$core$async24275(self__.f,self__.ch,self__.meta24273,self__._,self__.fn1,meta24276__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24277){
var self__ = this;
var _24277__$1 = this;
return self__.meta24276;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24271_SHARP_){
return f1.call(null,(((p1__24271_SHARP_ == null))?null:self__.f.call(null,p1__24271_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24273","meta24273",1684902264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24272","cljs.core.async/t_cljs$core$async24272",-735811095,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24276","meta24276",-1957731293,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24275";

cljs.core.async.t_cljs$core$async24275.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24275");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24275.
 */
cljs.core.async.__GT_t_cljs$core$async24275 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24275(f__$1,ch__$1,meta24273__$1,___$2,fn1__$1,meta24276){
return (new cljs.core.async.t_cljs$core$async24275(f__$1,ch__$1,meta24273__$1,___$2,fn1__$1,meta24276));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24275(self__.f,self__.ch,self__.meta24273,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24273","meta24273",1684902264,null)], null);
});

cljs.core.async.t_cljs$core$async24272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24272";

cljs.core.async.t_cljs$core$async24272.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24272");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24272.
 */
cljs.core.async.__GT_t_cljs$core$async24272 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24272(f__$1,ch__$1,meta24273){
return (new cljs.core.async.t_cljs$core$async24272(f__$1,ch__$1,meta24273));
});

}

return (new cljs.core.async.t_cljs$core$async24272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24278 = (function (f,ch,meta24279){
this.f = f;
this.ch = ch;
this.meta24279 = meta24279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24280,meta24279__$1){
var self__ = this;
var _24280__$1 = this;
return (new cljs.core.async.t_cljs$core$async24278(self__.f,self__.ch,meta24279__$1));
});

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24280){
var self__ = this;
var _24280__$1 = this;
return self__.meta24279;
});

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24279","meta24279",1898939656,null)], null);
});

cljs.core.async.t_cljs$core$async24278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24278";

cljs.core.async.t_cljs$core$async24278.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24278");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24278.
 */
cljs.core.async.__GT_t_cljs$core$async24278 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24278(f__$1,ch__$1,meta24279){
return (new cljs.core.async.t_cljs$core$async24278(f__$1,ch__$1,meta24279));
});

}

return (new cljs.core.async.t_cljs$core$async24278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24281 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24281 = (function (p,ch,meta24282){
this.p = p;
this.ch = ch;
this.meta24282 = meta24282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24283,meta24282__$1){
var self__ = this;
var _24283__$1 = this;
return (new cljs.core.async.t_cljs$core$async24281(self__.p,self__.ch,meta24282__$1));
});

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24283){
var self__ = this;
var _24283__$1 = this;
return self__.meta24282;
});

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24281.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24282","meta24282",408070042,null)], null);
});

cljs.core.async.t_cljs$core$async24281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24281";

cljs.core.async.t_cljs$core$async24281.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24281");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24281.
 */
cljs.core.async.__GT_t_cljs$core$async24281 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24281(p__$1,ch__$1,meta24282){
return (new cljs.core.async.t_cljs$core$async24281(p__$1,ch__$1,meta24282));
});

}

return (new cljs.core.async.t_cljs$core$async24281(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24285 = arguments.length;
switch (G__24285) {
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
var c__22786__auto___24325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24325,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24325,out){
return (function (state_24306){
var state_val_24307 = (state_24306[(1)]);
if((state_val_24307 === (7))){
var inst_24302 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
var statearr_24308_24326 = state_24306__$1;
(statearr_24308_24326[(2)] = inst_24302);

(statearr_24308_24326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (1))){
var state_24306__$1 = state_24306;
var statearr_24309_24327 = state_24306__$1;
(statearr_24309_24327[(2)] = null);

(statearr_24309_24327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (4))){
var inst_24288 = (state_24306[(7)]);
var inst_24288__$1 = (state_24306[(2)]);
var inst_24289 = (inst_24288__$1 == null);
var state_24306__$1 = (function (){var statearr_24310 = state_24306;
(statearr_24310[(7)] = inst_24288__$1);

return statearr_24310;
})();
if(cljs.core.truth_(inst_24289)){
var statearr_24311_24328 = state_24306__$1;
(statearr_24311_24328[(1)] = (5));

} else {
var statearr_24312_24329 = state_24306__$1;
(statearr_24312_24329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (6))){
var inst_24288 = (state_24306[(7)]);
var inst_24293 = p.call(null,inst_24288);
var state_24306__$1 = state_24306;
if(cljs.core.truth_(inst_24293)){
var statearr_24313_24330 = state_24306__$1;
(statearr_24313_24330[(1)] = (8));

} else {
var statearr_24314_24331 = state_24306__$1;
(statearr_24314_24331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (3))){
var inst_24304 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24306__$1,inst_24304);
} else {
if((state_val_24307 === (2))){
var state_24306__$1 = state_24306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24306__$1,(4),ch);
} else {
if((state_val_24307 === (11))){
var inst_24296 = (state_24306[(2)]);
var state_24306__$1 = state_24306;
var statearr_24315_24332 = state_24306__$1;
(statearr_24315_24332[(2)] = inst_24296);

(statearr_24315_24332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (9))){
var state_24306__$1 = state_24306;
var statearr_24316_24333 = state_24306__$1;
(statearr_24316_24333[(2)] = null);

(statearr_24316_24333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (5))){
var inst_24291 = cljs.core.async.close_BANG_.call(null,out);
var state_24306__$1 = state_24306;
var statearr_24317_24334 = state_24306__$1;
(statearr_24317_24334[(2)] = inst_24291);

(statearr_24317_24334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (10))){
var inst_24299 = (state_24306[(2)]);
var state_24306__$1 = (function (){var statearr_24318 = state_24306;
(statearr_24318[(8)] = inst_24299);

return statearr_24318;
})();
var statearr_24319_24335 = state_24306__$1;
(statearr_24319_24335[(2)] = null);

(statearr_24319_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24307 === (8))){
var inst_24288 = (state_24306[(7)]);
var state_24306__$1 = state_24306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24306__$1,(11),out,inst_24288);
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
});})(c__22786__auto___24325,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24325,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24320 = [null,null,null,null,null,null,null,null,null];
(statearr_24320[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24320[(1)] = (1));

return statearr_24320;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24306){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24321){if((e24321 instanceof Object)){
var ex__22695__auto__ = e24321;
var statearr_24322_24336 = state_24306;
(statearr_24322_24336[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24337 = state_24306;
state_24306 = G__24337;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24325,out))
})();
var state__22788__auto__ = (function (){var statearr_24323 = f__22787__auto__.call(null);
(statearr_24323[(6)] = c__22786__auto___24325);

return statearr_24323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24325,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24339 = arguments.length;
switch (G__24339) {
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
var c__22786__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto__){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto__){
return (function (state_24402){
var state_val_24403 = (state_24402[(1)]);
if((state_val_24403 === (7))){
var inst_24398 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
var statearr_24404_24442 = state_24402__$1;
(statearr_24404_24442[(2)] = inst_24398);

(statearr_24404_24442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (20))){
var inst_24368 = (state_24402[(7)]);
var inst_24379 = (state_24402[(2)]);
var inst_24380 = cljs.core.next.call(null,inst_24368);
var inst_24354 = inst_24380;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24402__$1 = (function (){var statearr_24405 = state_24402;
(statearr_24405[(8)] = inst_24356);

(statearr_24405[(9)] = inst_24357);

(statearr_24405[(10)] = inst_24355);

(statearr_24405[(11)] = inst_24354);

(statearr_24405[(12)] = inst_24379);

return statearr_24405;
})();
var statearr_24406_24443 = state_24402__$1;
(statearr_24406_24443[(2)] = null);

(statearr_24406_24443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (1))){
var state_24402__$1 = state_24402;
var statearr_24407_24444 = state_24402__$1;
(statearr_24407_24444[(2)] = null);

(statearr_24407_24444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (4))){
var inst_24343 = (state_24402[(13)]);
var inst_24343__$1 = (state_24402[(2)]);
var inst_24344 = (inst_24343__$1 == null);
var state_24402__$1 = (function (){var statearr_24408 = state_24402;
(statearr_24408[(13)] = inst_24343__$1);

return statearr_24408;
})();
if(cljs.core.truth_(inst_24344)){
var statearr_24409_24445 = state_24402__$1;
(statearr_24409_24445[(1)] = (5));

} else {
var statearr_24410_24446 = state_24402__$1;
(statearr_24410_24446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (15))){
var state_24402__$1 = state_24402;
var statearr_24414_24447 = state_24402__$1;
(statearr_24414_24447[(2)] = null);

(statearr_24414_24447[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (21))){
var state_24402__$1 = state_24402;
var statearr_24415_24448 = state_24402__$1;
(statearr_24415_24448[(2)] = null);

(statearr_24415_24448[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (13))){
var inst_24356 = (state_24402[(8)]);
var inst_24357 = (state_24402[(9)]);
var inst_24355 = (state_24402[(10)]);
var inst_24354 = (state_24402[(11)]);
var inst_24364 = (state_24402[(2)]);
var inst_24365 = (inst_24357 + (1));
var tmp24411 = inst_24356;
var tmp24412 = inst_24355;
var tmp24413 = inst_24354;
var inst_24354__$1 = tmp24413;
var inst_24355__$1 = tmp24412;
var inst_24356__$1 = tmp24411;
var inst_24357__$1 = inst_24365;
var state_24402__$1 = (function (){var statearr_24416 = state_24402;
(statearr_24416[(8)] = inst_24356__$1);

(statearr_24416[(9)] = inst_24357__$1);

(statearr_24416[(10)] = inst_24355__$1);

(statearr_24416[(11)] = inst_24354__$1);

(statearr_24416[(14)] = inst_24364);

return statearr_24416;
})();
var statearr_24417_24449 = state_24402__$1;
(statearr_24417_24449[(2)] = null);

(statearr_24417_24449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (22))){
var state_24402__$1 = state_24402;
var statearr_24418_24450 = state_24402__$1;
(statearr_24418_24450[(2)] = null);

(statearr_24418_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (6))){
var inst_24343 = (state_24402[(13)]);
var inst_24352 = f.call(null,inst_24343);
var inst_24353 = cljs.core.seq.call(null,inst_24352);
var inst_24354 = inst_24353;
var inst_24355 = null;
var inst_24356 = (0);
var inst_24357 = (0);
var state_24402__$1 = (function (){var statearr_24419 = state_24402;
(statearr_24419[(8)] = inst_24356);

(statearr_24419[(9)] = inst_24357);

(statearr_24419[(10)] = inst_24355);

(statearr_24419[(11)] = inst_24354);

return statearr_24419;
})();
var statearr_24420_24451 = state_24402__$1;
(statearr_24420_24451[(2)] = null);

(statearr_24420_24451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (17))){
var inst_24368 = (state_24402[(7)]);
var inst_24372 = cljs.core.chunk_first.call(null,inst_24368);
var inst_24373 = cljs.core.chunk_rest.call(null,inst_24368);
var inst_24374 = cljs.core.count.call(null,inst_24372);
var inst_24354 = inst_24373;
var inst_24355 = inst_24372;
var inst_24356 = inst_24374;
var inst_24357 = (0);
var state_24402__$1 = (function (){var statearr_24421 = state_24402;
(statearr_24421[(8)] = inst_24356);

(statearr_24421[(9)] = inst_24357);

(statearr_24421[(10)] = inst_24355);

(statearr_24421[(11)] = inst_24354);

return statearr_24421;
})();
var statearr_24422_24452 = state_24402__$1;
(statearr_24422_24452[(2)] = null);

(statearr_24422_24452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (3))){
var inst_24400 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24402__$1,inst_24400);
} else {
if((state_val_24403 === (12))){
var inst_24388 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
var statearr_24423_24453 = state_24402__$1;
(statearr_24423_24453[(2)] = inst_24388);

(statearr_24423_24453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (2))){
var state_24402__$1 = state_24402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24402__$1,(4),in$);
} else {
if((state_val_24403 === (23))){
var inst_24396 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
var statearr_24424_24454 = state_24402__$1;
(statearr_24424_24454[(2)] = inst_24396);

(statearr_24424_24454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (19))){
var inst_24383 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
var statearr_24425_24455 = state_24402__$1;
(statearr_24425_24455[(2)] = inst_24383);

(statearr_24425_24455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (11))){
var inst_24354 = (state_24402[(11)]);
var inst_24368 = (state_24402[(7)]);
var inst_24368__$1 = cljs.core.seq.call(null,inst_24354);
var state_24402__$1 = (function (){var statearr_24426 = state_24402;
(statearr_24426[(7)] = inst_24368__$1);

return statearr_24426;
})();
if(inst_24368__$1){
var statearr_24427_24456 = state_24402__$1;
(statearr_24427_24456[(1)] = (14));

} else {
var statearr_24428_24457 = state_24402__$1;
(statearr_24428_24457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (9))){
var inst_24390 = (state_24402[(2)]);
var inst_24391 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24402__$1 = (function (){var statearr_24429 = state_24402;
(statearr_24429[(15)] = inst_24390);

return statearr_24429;
})();
if(cljs.core.truth_(inst_24391)){
var statearr_24430_24458 = state_24402__$1;
(statearr_24430_24458[(1)] = (21));

} else {
var statearr_24431_24459 = state_24402__$1;
(statearr_24431_24459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (5))){
var inst_24346 = cljs.core.async.close_BANG_.call(null,out);
var state_24402__$1 = state_24402;
var statearr_24432_24460 = state_24402__$1;
(statearr_24432_24460[(2)] = inst_24346);

(statearr_24432_24460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (14))){
var inst_24368 = (state_24402[(7)]);
var inst_24370 = cljs.core.chunked_seq_QMARK_.call(null,inst_24368);
var state_24402__$1 = state_24402;
if(inst_24370){
var statearr_24433_24461 = state_24402__$1;
(statearr_24433_24461[(1)] = (17));

} else {
var statearr_24434_24462 = state_24402__$1;
(statearr_24434_24462[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (16))){
var inst_24386 = (state_24402[(2)]);
var state_24402__$1 = state_24402;
var statearr_24435_24463 = state_24402__$1;
(statearr_24435_24463[(2)] = inst_24386);

(statearr_24435_24463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24403 === (10))){
var inst_24357 = (state_24402[(9)]);
var inst_24355 = (state_24402[(10)]);
var inst_24362 = cljs.core._nth.call(null,inst_24355,inst_24357);
var state_24402__$1 = state_24402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24402__$1,(13),out,inst_24362);
} else {
if((state_val_24403 === (18))){
var inst_24368 = (state_24402[(7)]);
var inst_24377 = cljs.core.first.call(null,inst_24368);
var state_24402__$1 = state_24402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24402__$1,(20),out,inst_24377);
} else {
if((state_val_24403 === (8))){
var inst_24356 = (state_24402[(8)]);
var inst_24357 = (state_24402[(9)]);
var inst_24359 = (inst_24357 < inst_24356);
var inst_24360 = inst_24359;
var state_24402__$1 = state_24402;
if(cljs.core.truth_(inst_24360)){
var statearr_24436_24464 = state_24402__$1;
(statearr_24436_24464[(1)] = (10));

} else {
var statearr_24437_24465 = state_24402__$1;
(statearr_24437_24465[(1)] = (11));

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
});})(c__22786__auto__))
;
return ((function (switch__22691__auto__,c__22786__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____0 = (function (){
var statearr_24438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24438[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__);

(statearr_24438[(1)] = (1));

return statearr_24438;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____1 = (function (state_24402){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24439){if((e24439 instanceof Object)){
var ex__22695__auto__ = e24439;
var statearr_24440_24466 = state_24402;
(statearr_24440_24466[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24467 = state_24402;
state_24402 = G__24467;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__ = function(state_24402){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____1.call(this,state_24402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22692__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto__))
})();
var state__22788__auto__ = (function (){var statearr_24441 = f__22787__auto__.call(null);
(statearr_24441[(6)] = c__22786__auto__);

return statearr_24441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto__))
);

return c__22786__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24469 = arguments.length;
switch (G__24469) {
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
var G__24472 = arguments.length;
switch (G__24472) {
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
var G__24475 = arguments.length;
switch (G__24475) {
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
var c__22786__auto___24522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24522,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24522,out){
return (function (state_24499){
var state_val_24500 = (state_24499[(1)]);
if((state_val_24500 === (7))){
var inst_24494 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24501_24523 = state_24499__$1;
(statearr_24501_24523[(2)] = inst_24494);

(statearr_24501_24523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (1))){
var inst_24476 = null;
var state_24499__$1 = (function (){var statearr_24502 = state_24499;
(statearr_24502[(7)] = inst_24476);

return statearr_24502;
})();
var statearr_24503_24524 = state_24499__$1;
(statearr_24503_24524[(2)] = null);

(statearr_24503_24524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (4))){
var inst_24479 = (state_24499[(8)]);
var inst_24479__$1 = (state_24499[(2)]);
var inst_24480 = (inst_24479__$1 == null);
var inst_24481 = cljs.core.not.call(null,inst_24480);
var state_24499__$1 = (function (){var statearr_24504 = state_24499;
(statearr_24504[(8)] = inst_24479__$1);

return statearr_24504;
})();
if(inst_24481){
var statearr_24505_24525 = state_24499__$1;
(statearr_24505_24525[(1)] = (5));

} else {
var statearr_24506_24526 = state_24499__$1;
(statearr_24506_24526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (6))){
var state_24499__$1 = state_24499;
var statearr_24507_24527 = state_24499__$1;
(statearr_24507_24527[(2)] = null);

(statearr_24507_24527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (3))){
var inst_24496 = (state_24499[(2)]);
var inst_24497 = cljs.core.async.close_BANG_.call(null,out);
var state_24499__$1 = (function (){var statearr_24508 = state_24499;
(statearr_24508[(9)] = inst_24496);

return statearr_24508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24499__$1,inst_24497);
} else {
if((state_val_24500 === (2))){
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24499__$1,(4),ch);
} else {
if((state_val_24500 === (11))){
var inst_24479 = (state_24499[(8)]);
var inst_24488 = (state_24499[(2)]);
var inst_24476 = inst_24479;
var state_24499__$1 = (function (){var statearr_24509 = state_24499;
(statearr_24509[(7)] = inst_24476);

(statearr_24509[(10)] = inst_24488);

return statearr_24509;
})();
var statearr_24510_24528 = state_24499__$1;
(statearr_24510_24528[(2)] = null);

(statearr_24510_24528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (9))){
var inst_24479 = (state_24499[(8)]);
var state_24499__$1 = state_24499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24499__$1,(11),out,inst_24479);
} else {
if((state_val_24500 === (5))){
var inst_24476 = (state_24499[(7)]);
var inst_24479 = (state_24499[(8)]);
var inst_24483 = cljs.core._EQ_.call(null,inst_24479,inst_24476);
var state_24499__$1 = state_24499;
if(inst_24483){
var statearr_24512_24529 = state_24499__$1;
(statearr_24512_24529[(1)] = (8));

} else {
var statearr_24513_24530 = state_24499__$1;
(statearr_24513_24530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (10))){
var inst_24491 = (state_24499[(2)]);
var state_24499__$1 = state_24499;
var statearr_24514_24531 = state_24499__$1;
(statearr_24514_24531[(2)] = inst_24491);

(statearr_24514_24531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24500 === (8))){
var inst_24476 = (state_24499[(7)]);
var tmp24511 = inst_24476;
var inst_24476__$1 = tmp24511;
var state_24499__$1 = (function (){var statearr_24515 = state_24499;
(statearr_24515[(7)] = inst_24476__$1);

return statearr_24515;
})();
var statearr_24516_24532 = state_24499__$1;
(statearr_24516_24532[(2)] = null);

(statearr_24516_24532[(1)] = (2));


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
});})(c__22786__auto___24522,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24522,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24517[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24517[(1)] = (1));

return statearr_24517;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24499){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24518){if((e24518 instanceof Object)){
var ex__22695__auto__ = e24518;
var statearr_24519_24533 = state_24499;
(statearr_24519_24533[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24534 = state_24499;
state_24499 = G__24534;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24522,out))
})();
var state__22788__auto__ = (function (){var statearr_24520 = f__22787__auto__.call(null);
(statearr_24520[(6)] = c__22786__auto___24522);

return statearr_24520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24522,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24536 = arguments.length;
switch (G__24536) {
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
var c__22786__auto___24602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24602,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24602,out){
return (function (state_24574){
var state_val_24575 = (state_24574[(1)]);
if((state_val_24575 === (7))){
var inst_24570 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24576_24603 = state_24574__$1;
(statearr_24576_24603[(2)] = inst_24570);

(statearr_24576_24603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (1))){
var inst_24537 = (new Array(n));
var inst_24538 = inst_24537;
var inst_24539 = (0);
var state_24574__$1 = (function (){var statearr_24577 = state_24574;
(statearr_24577[(7)] = inst_24538);

(statearr_24577[(8)] = inst_24539);

return statearr_24577;
})();
var statearr_24578_24604 = state_24574__$1;
(statearr_24578_24604[(2)] = null);

(statearr_24578_24604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (4))){
var inst_24542 = (state_24574[(9)]);
var inst_24542__$1 = (state_24574[(2)]);
var inst_24543 = (inst_24542__$1 == null);
var inst_24544 = cljs.core.not.call(null,inst_24543);
var state_24574__$1 = (function (){var statearr_24579 = state_24574;
(statearr_24579[(9)] = inst_24542__$1);

return statearr_24579;
})();
if(inst_24544){
var statearr_24580_24605 = state_24574__$1;
(statearr_24580_24605[(1)] = (5));

} else {
var statearr_24581_24606 = state_24574__$1;
(statearr_24581_24606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (15))){
var inst_24564 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24582_24607 = state_24574__$1;
(statearr_24582_24607[(2)] = inst_24564);

(statearr_24582_24607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (13))){
var state_24574__$1 = state_24574;
var statearr_24583_24608 = state_24574__$1;
(statearr_24583_24608[(2)] = null);

(statearr_24583_24608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (6))){
var inst_24539 = (state_24574[(8)]);
var inst_24560 = (inst_24539 > (0));
var state_24574__$1 = state_24574;
if(cljs.core.truth_(inst_24560)){
var statearr_24584_24609 = state_24574__$1;
(statearr_24584_24609[(1)] = (12));

} else {
var statearr_24585_24610 = state_24574__$1;
(statearr_24585_24610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (3))){
var inst_24572 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24574__$1,inst_24572);
} else {
if((state_val_24575 === (12))){
var inst_24538 = (state_24574[(7)]);
var inst_24562 = cljs.core.vec.call(null,inst_24538);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(15),out,inst_24562);
} else {
if((state_val_24575 === (2))){
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24574__$1,(4),ch);
} else {
if((state_val_24575 === (11))){
var inst_24554 = (state_24574[(2)]);
var inst_24555 = (new Array(n));
var inst_24538 = inst_24555;
var inst_24539 = (0);
var state_24574__$1 = (function (){var statearr_24586 = state_24574;
(statearr_24586[(10)] = inst_24554);

(statearr_24586[(7)] = inst_24538);

(statearr_24586[(8)] = inst_24539);

return statearr_24586;
})();
var statearr_24587_24611 = state_24574__$1;
(statearr_24587_24611[(2)] = null);

(statearr_24587_24611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (9))){
var inst_24538 = (state_24574[(7)]);
var inst_24552 = cljs.core.vec.call(null,inst_24538);
var state_24574__$1 = state_24574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24574__$1,(11),out,inst_24552);
} else {
if((state_val_24575 === (5))){
var inst_24538 = (state_24574[(7)]);
var inst_24547 = (state_24574[(11)]);
var inst_24539 = (state_24574[(8)]);
var inst_24542 = (state_24574[(9)]);
var inst_24546 = (inst_24538[inst_24539] = inst_24542);
var inst_24547__$1 = (inst_24539 + (1));
var inst_24548 = (inst_24547__$1 < n);
var state_24574__$1 = (function (){var statearr_24588 = state_24574;
(statearr_24588[(12)] = inst_24546);

(statearr_24588[(11)] = inst_24547__$1);

return statearr_24588;
})();
if(cljs.core.truth_(inst_24548)){
var statearr_24589_24612 = state_24574__$1;
(statearr_24589_24612[(1)] = (8));

} else {
var statearr_24590_24613 = state_24574__$1;
(statearr_24590_24613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (14))){
var inst_24567 = (state_24574[(2)]);
var inst_24568 = cljs.core.async.close_BANG_.call(null,out);
var state_24574__$1 = (function (){var statearr_24592 = state_24574;
(statearr_24592[(13)] = inst_24567);

return statearr_24592;
})();
var statearr_24593_24614 = state_24574__$1;
(statearr_24593_24614[(2)] = inst_24568);

(statearr_24593_24614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (10))){
var inst_24558 = (state_24574[(2)]);
var state_24574__$1 = state_24574;
var statearr_24594_24615 = state_24574__$1;
(statearr_24594_24615[(2)] = inst_24558);

(statearr_24594_24615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24575 === (8))){
var inst_24538 = (state_24574[(7)]);
var inst_24547 = (state_24574[(11)]);
var tmp24591 = inst_24538;
var inst_24538__$1 = tmp24591;
var inst_24539 = inst_24547;
var state_24574__$1 = (function (){var statearr_24595 = state_24574;
(statearr_24595[(7)] = inst_24538__$1);

(statearr_24595[(8)] = inst_24539);

return statearr_24595;
})();
var statearr_24596_24616 = state_24574__$1;
(statearr_24596_24616[(2)] = null);

(statearr_24596_24616[(1)] = (2));


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
});})(c__22786__auto___24602,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24602,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24597[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24597[(1)] = (1));

return statearr_24597;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24574){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24598){if((e24598 instanceof Object)){
var ex__22695__auto__ = e24598;
var statearr_24599_24617 = state_24574;
(statearr_24599_24617[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24618 = state_24574;
state_24574 = G__24618;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24602,out))
})();
var state__22788__auto__ = (function (){var statearr_24600 = f__22787__auto__.call(null);
(statearr_24600[(6)] = c__22786__auto___24602);

return statearr_24600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24602,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24620 = arguments.length;
switch (G__24620) {
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
var c__22786__auto___24690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22786__auto___24690,out){
return (function (){
var f__22787__auto__ = (function (){var switch__22691__auto__ = ((function (c__22786__auto___24690,out){
return (function (state_24662){
var state_val_24663 = (state_24662[(1)]);
if((state_val_24663 === (7))){
var inst_24658 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24664_24691 = state_24662__$1;
(statearr_24664_24691[(2)] = inst_24658);

(statearr_24664_24691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (1))){
var inst_24621 = [];
var inst_24622 = inst_24621;
var inst_24623 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24662__$1 = (function (){var statearr_24665 = state_24662;
(statearr_24665[(7)] = inst_24623);

(statearr_24665[(8)] = inst_24622);

return statearr_24665;
})();
var statearr_24666_24692 = state_24662__$1;
(statearr_24666_24692[(2)] = null);

(statearr_24666_24692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (4))){
var inst_24626 = (state_24662[(9)]);
var inst_24626__$1 = (state_24662[(2)]);
var inst_24627 = (inst_24626__$1 == null);
var inst_24628 = cljs.core.not.call(null,inst_24627);
var state_24662__$1 = (function (){var statearr_24667 = state_24662;
(statearr_24667[(9)] = inst_24626__$1);

return statearr_24667;
})();
if(inst_24628){
var statearr_24668_24693 = state_24662__$1;
(statearr_24668_24693[(1)] = (5));

} else {
var statearr_24669_24694 = state_24662__$1;
(statearr_24669_24694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (15))){
var inst_24652 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24670_24695 = state_24662__$1;
(statearr_24670_24695[(2)] = inst_24652);

(statearr_24670_24695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (13))){
var state_24662__$1 = state_24662;
var statearr_24671_24696 = state_24662__$1;
(statearr_24671_24696[(2)] = null);

(statearr_24671_24696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (6))){
var inst_24622 = (state_24662[(8)]);
var inst_24647 = inst_24622.length;
var inst_24648 = (inst_24647 > (0));
var state_24662__$1 = state_24662;
if(cljs.core.truth_(inst_24648)){
var statearr_24672_24697 = state_24662__$1;
(statearr_24672_24697[(1)] = (12));

} else {
var statearr_24673_24698 = state_24662__$1;
(statearr_24673_24698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (3))){
var inst_24660 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24662__$1,inst_24660);
} else {
if((state_val_24663 === (12))){
var inst_24622 = (state_24662[(8)]);
var inst_24650 = cljs.core.vec.call(null,inst_24622);
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24662__$1,(15),out,inst_24650);
} else {
if((state_val_24663 === (2))){
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24662__$1,(4),ch);
} else {
if((state_val_24663 === (11))){
var inst_24630 = (state_24662[(10)]);
var inst_24626 = (state_24662[(9)]);
var inst_24640 = (state_24662[(2)]);
var inst_24641 = [];
var inst_24642 = inst_24641.push(inst_24626);
var inst_24622 = inst_24641;
var inst_24623 = inst_24630;
var state_24662__$1 = (function (){var statearr_24674 = state_24662;
(statearr_24674[(7)] = inst_24623);

(statearr_24674[(11)] = inst_24640);

(statearr_24674[(8)] = inst_24622);

(statearr_24674[(12)] = inst_24642);

return statearr_24674;
})();
var statearr_24675_24699 = state_24662__$1;
(statearr_24675_24699[(2)] = null);

(statearr_24675_24699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (9))){
var inst_24622 = (state_24662[(8)]);
var inst_24638 = cljs.core.vec.call(null,inst_24622);
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24662__$1,(11),out,inst_24638);
} else {
if((state_val_24663 === (5))){
var inst_24623 = (state_24662[(7)]);
var inst_24630 = (state_24662[(10)]);
var inst_24626 = (state_24662[(9)]);
var inst_24630__$1 = f.call(null,inst_24626);
var inst_24631 = cljs.core._EQ_.call(null,inst_24630__$1,inst_24623);
var inst_24632 = cljs.core.keyword_identical_QMARK_.call(null,inst_24623,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24633 = ((inst_24631) || (inst_24632));
var state_24662__$1 = (function (){var statearr_24676 = state_24662;
(statearr_24676[(10)] = inst_24630__$1);

return statearr_24676;
})();
if(cljs.core.truth_(inst_24633)){
var statearr_24677_24700 = state_24662__$1;
(statearr_24677_24700[(1)] = (8));

} else {
var statearr_24678_24701 = state_24662__$1;
(statearr_24678_24701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (14))){
var inst_24655 = (state_24662[(2)]);
var inst_24656 = cljs.core.async.close_BANG_.call(null,out);
var state_24662__$1 = (function (){var statearr_24680 = state_24662;
(statearr_24680[(13)] = inst_24655);

return statearr_24680;
})();
var statearr_24681_24702 = state_24662__$1;
(statearr_24681_24702[(2)] = inst_24656);

(statearr_24681_24702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (10))){
var inst_24645 = (state_24662[(2)]);
var state_24662__$1 = state_24662;
var statearr_24682_24703 = state_24662__$1;
(statearr_24682_24703[(2)] = inst_24645);

(statearr_24682_24703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24663 === (8))){
var inst_24630 = (state_24662[(10)]);
var inst_24626 = (state_24662[(9)]);
var inst_24622 = (state_24662[(8)]);
var inst_24635 = inst_24622.push(inst_24626);
var tmp24679 = inst_24622;
var inst_24622__$1 = tmp24679;
var inst_24623 = inst_24630;
var state_24662__$1 = (function (){var statearr_24683 = state_24662;
(statearr_24683[(7)] = inst_24623);

(statearr_24683[(8)] = inst_24622__$1);

(statearr_24683[(14)] = inst_24635);

return statearr_24683;
})();
var statearr_24684_24704 = state_24662__$1;
(statearr_24684_24704[(2)] = null);

(statearr_24684_24704[(1)] = (2));


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
});})(c__22786__auto___24690,out))
;
return ((function (switch__22691__auto__,c__22786__auto___24690,out){
return (function() {
var cljs$core$async$state_machine__22692__auto__ = null;
var cljs$core$async$state_machine__22692__auto____0 = (function (){
var statearr_24685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24685[(0)] = cljs$core$async$state_machine__22692__auto__);

(statearr_24685[(1)] = (1));

return statearr_24685;
});
var cljs$core$async$state_machine__22692__auto____1 = (function (state_24662){
while(true){
var ret_value__22693__auto__ = (function (){try{while(true){
var result__22694__auto__ = switch__22691__auto__.call(null,state_24662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22694__auto__;
}
break;
}
}catch (e24686){if((e24686 instanceof Object)){
var ex__22695__auto__ = e24686;
var statearr_24687_24705 = state_24662;
(statearr_24687_24705[(5)] = ex__22695__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24706 = state_24662;
state_24662 = G__24706;
continue;
} else {
return ret_value__22693__auto__;
}
break;
}
});
cljs$core$async$state_machine__22692__auto__ = function(state_24662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22692__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22692__auto____1.call(this,state_24662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22692__auto____0;
cljs$core$async$state_machine__22692__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22692__auto____1;
return cljs$core$async$state_machine__22692__auto__;
})()
;})(switch__22691__auto__,c__22786__auto___24690,out))
})();
var state__22788__auto__ = (function (){var statearr_24688 = f__22787__auto__.call(null);
(statearr_24688[(6)] = c__22786__auto___24690);

return statearr_24688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22788__auto__);
});})(c__22786__auto___24690,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1581113871521
