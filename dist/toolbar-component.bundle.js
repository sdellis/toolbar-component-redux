(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TinyEmitter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}]},{},[1])(1)
});
!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.baseComponent=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var _Components;!function(_Components){function applyMixins(derivedCtor,baseCtors){baseCtors.forEach(function(baseCtor){Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name){derivedCtor.prototype[name]=baseCtor.prototype[name]})})}var BaseComponent=function(){function BaseComponent(options){this.options=$.extend(this._getDefaultOptions(),options)}return BaseComponent.prototype._init=function(){return this._$element=$(this.options.element),this._$element.length?(this._$element.empty(),!0):(console.warn("element not found"),!1)},BaseComponent.prototype._getDefaultOptions=function(){return{}},BaseComponent.prototype._emit=function(event){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];this.emit(event,args)},BaseComponent.prototype._resize=function(){},BaseComponent.prototype.databind=function(data){},BaseComponent}();_Components.BaseComponent=BaseComponent,_Components.applyMixins=applyMixins,applyMixins(BaseComponent,[TinyEmitter])}(_Components||(_Components={})),function(w){w._Components||(w._Components=_Components)}(window)},{}]},{},[1])(1)});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Redux=e():t.Redux=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0,e.compose=e.applyMiddleware=e.bindActionCreators=e.combineReducers=e.createStore=void 0;var o=n(2),u=r(o),i=n(7),c=r(i),a=n(6),f=r(a),s=n(5),d=r(s),l=n(1),p=r(l),y=n(3);r(y);e.createStore=u["default"],e.combineReducers=c["default"],e.bindActionCreators=f["default"],e.applyMiddleware=d["default"],e.compose=p["default"]},function(t,e){"use strict";function n(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){function r(){b===h&&(b=h.slice())}function u(){return v}function c(t){if("function"!=typeof t)throw Error("Expected listener to be a function.");var e=!0;return r(),b.push(t),function(){if(e){e=!1,r();var n=b.indexOf(t);b.splice(n,1)}}}function s(t){if(!(0,i["default"])(t))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,v=y(v,t)}finally{m=!1}for(var e=h=b,n=0;e.length>n;n++)e[n]();return t}function d(t){if("function"!=typeof t)throw Error("Expected the nextReducer to be a function.");y=t,s({type:f.INIT})}function l(){var t,e=c;return t={subscribe:function(t){function n(){t.next&&t.next(u())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");n();var r=e(n);return{unsubscribe:r}}},t[a["default"]]=function(){return this},t}var p;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(o)(t,e)}if("function"!=typeof t)throw Error("Expected the reducer to be a function.");var y=t,v=e,h=[],b=h,m=!1;return s({type:f.INIT}),p={dispatch:s,subscribe:c,getState:u,replaceReducer:d},p[a["default"]]=l,p}e.__esModule=!0,e.ActionTypes=void 0,e["default"]=o;var u=n(4),i=r(u),c=n(12),a=r(c),f=e.ActionTypes={INIT:"@@redux/INIT"}},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(e){}}e.__esModule=!0,e["default"]=n},function(t,e,n){function r(t){if(!i(t)||p.call(t)!=c||u(t))return!1;var e=o(t);if(null===e)return!0;var n=d.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l}var o=n(8),u=n(9),i=n(11),c="[object Object]",a=Function.prototype,f=Object.prototype,s=a.toString,d=f.hasOwnProperty,l=s.call(Object),p=f.toString;t.exports=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return function(t){return function(n,r,o){var i=t(n,r,o),a=i.dispatch,f=[],s={getState:i.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=c["default"].apply(void 0,f)(i.dispatch),u({},i,{dispatch:a})}}}e.__esModule=!0;var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e["default"]=o;var i=n(1),c=r(i)},function(t,e){"use strict";function n(t,e){return function(){return e(t.apply(void 0,arguments))}}function r(t,e){if("function"==typeof t)return n(t,e);if("object"!=typeof t||null===t)throw Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(t),o={},u=0;r.length>u;u++){var i=r[u],c=t[i];"function"==typeof c&&(o[i]=n(c,e))}return o}e.__esModule=!0,e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=e&&e.type,r=n&&'"'+n+'"'||"an action";return"Given action "+r+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:c.ActionTypes.INIT});if(void 0===r)throw Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if(void 0===n(void 0,{type:o}))throw Error('Reducer "'+e+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function i(t){for(var e=Object.keys(t),n={},r=0;e.length>r;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var c,a=Object.keys(n);try{u(n)}catch(f){c=f}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,u={},i=0;a.length>i;i++){var f=a[i],s=n[f],d=t[f],l=s(d,e);if(void 0===l){var p=o(f,e);throw Error(p)}u[f]=l,r=r||l!==d}return r?u:t}}e.__esModule=!0,e["default"]=i;var c=n(2),a=n(4),f=(r(a),n(3));r(f)},function(t,e,n){var r=n(10),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){t.exports=n(13)},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(14),u=r(o),i=void 0;void 0!==t?i=t:"undefined"!=typeof window&&(i=window);var c=(0,u["default"])(i);e["default"]=c}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n}])});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.virtualDom=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":15}],2:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":35}],3:[function(require,module,exports){
var h = require("./virtual-hyperscript/index.js")

module.exports = h

},{"./virtual-hyperscript/index.js":22}],4:[function(require,module,exports){
var diff = require("./diff.js")
var patch = require("./patch.js")
var h = require("./h.js")
var create = require("./create-element.js")
var VNode = require('./vnode/vnode.js')
var VText = require('./vnode/vtext.js')

module.exports = {
    diff: diff,
    patch: patch,
    h: h,
    create: create,
    VNode: VNode,
    VText: VText
}

},{"./create-element.js":1,"./diff.js":2,"./h.js":3,"./patch.js":13,"./vnode/vnode.js":31,"./vnode/vtext.js":33}],5:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],6:[function(require,module,exports){

},{}],7:[function(require,module,exports){
'use strict';

var OneVersionConstraint = require('individual/one-version');

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}

},{"individual/one-version":9}],8:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

var Individual = require('./index.js');

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}

},{"./index.js":8}],10:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":6}],11:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],12:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],13:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":18}],14:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":26,"is-object":11}],15:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":24,"../vnode/is-vnode.js":27,"../vnode/is-vtext.js":28,"../vnode/is-widget.js":29,"./apply-properties":14,"global/document":10}],16:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],17:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":29,"../vnode/vpatch.js":32,"./apply-properties":14,"./update-widget":19}],18:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":15,"./dom-index":16,"./patch-op":17,"global/document":10,"x-is-array":12}],19:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":29}],20:[function(require,module,exports){
'use strict';

var EvStore = require('ev-store');

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};

},{"ev-store":7}],21:[function(require,module,exports){
'use strict';

module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],22:[function(require,module,exports){
'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var VText = require('../vnode/vtext.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isHook = require('../vnode/is-vhook');
var isVThunk = require('../vnode/is-thunk');

var parseTag = require('./parse-tag.js');
var softSetHook = require('./hooks/soft-set-hook.js');
var evHook = require('./hooks/ev-hook.js');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}

},{"../vnode/is-thunk":25,"../vnode/is-vhook":26,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vnode.js":31,"../vnode/vtext.js":33,"./hooks/ev-hook.js":20,"./hooks/soft-set-hook.js":21,"./parse-tag.js":23,"x-is-array":12}],23:[function(require,module,exports){
'use strict';

var split = require('browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}

},{"browser-split":5}],24:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":25,"./is-vnode":27,"./is-vtext":28,"./is-widget":29}],25:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],26:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],27:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":30}],28:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":30}],29:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],30:[function(require,module,exports){
module.exports = "2"

},{}],31:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":25,"./is-vhook":26,"./is-vnode":27,"./is-widget":29,"./version":30}],32:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":30}],33:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":30}],34:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":26,"is-object":11}],35:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":24,"../vnode/is-thunk":25,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vpatch":32,"./diff-props":34,"x-is-array":12}]},{},[4])(4)
});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.ObjectAssign=e()}}(function(){return function e(n,r,t){function o(f,u){if(!r[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[f]={exports:{}};n[f][0].call(c.exports,function(e){var r=n[f][1][e];return o(r?r:e)},c,c.exports,e,n,r,t)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(e,n,r){"use strict";function t(e,n){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var o=arguments[t];if(void 0!==o&&null!==o)for(var i=Object.keys(Object(o)),f=0,u=i.length;u>f;f++){var l=i[f],a=Object.getOwnPropertyDescriptor(o,l);void 0!==a&&a.enumerable&&(r[l]=o[l])}}return r}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}n.exports={assign:t,polyfill:o}},{}]},{},[1])(1)});

!function(f){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=f();else if("function"==typeof define&&define.amd)define([],f);else{var g;g="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,g.toolbarComponent=f()}}(function(){return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var IIIFComponents;!function(IIIFComponents){var ToolbarButton=function(){function ToolbarButton(options){this.default_opts={label:"easy",icon:"e",selected:!1,disabled:!1},this.options=$.extend(this.default_opts,options),this.label=this.options.label,this.icon=this.options.icon,this.selected=this.options.selected,this.disabled=this.options.disabled}return ToolbarButton}();IIIFComponents.ToolbarButton=ToolbarButton}(IIIFComponents||(IIIFComponents={}));var __extends=this&&this.__extends||function(d,b){function __(){this.constructor=d}for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p]);d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)},assign=require("es6-object-assign").assign;require("virtual-dom/h");var IIIFComponents,h=require("virtual-dom/h"),createElement=(require("virtual-dom/diff"),require("virtual-dom/patch"),require("virtual-dom/create-element"));!function(IIIFComponents){var ToolbarComponent=function(_super){function ToolbarComponent(options){_super.call(this,options),this._init(),this._resize()}return __extends(ToolbarComponent,_super),ToolbarComponent.prototype.test=function(){this._emit(ToolbarComponent.Events.TEST,[1,2,"three"])},ToolbarComponent.prototype._init=function(){function render(state){return h("div",{style:{textAlign:"center",lineHeight:100+state.count+"px",border:"1px solid "+state.color,width:100+state.count+"px",height:100+state.count+"px"}},[String(state.count)])}function count(state,action){switch(void 0===state&&(state=0),action.type){case GROW:return assign({},state,{count:action.count++});case RESET:return assign({},state,{count:0});default:return state}}function color(state,action){switch(void 0===state&&(state="red"),action.type){case CHANGE_COLOR:return assign({},state,{color:action.color});default:return state}}function app(state,action){return void 0===state&&(state=initialState),{count:count(state.count,action),color:color(state.color,action)}}var success=_super.prototype._init.call(this);success||console.error("Component failed to initialise"),this._buttons=this.options.buttons;var initialState={count:0,color:"red"},tree=render(initialState),rootNode=createElement(tree);document.body.appendChild(rootNode);var GROW="GROW",RESET="RESET",CHANGE_COLOR="CHANGE_COLOR";Redux.createStore(app);return success},ToolbarComponent.prototype._getDefaultOptions=function(){return{orientation:"vertical",buttons:["easy"],hidden:!1}},ToolbarComponent.prototype._resize=function(){},ToolbarComponent}(_Components.BaseComponent);IIIFComponents.ToolbarComponent=ToolbarComponent}(IIIFComponents||(IIIFComponents={}));var IIIFComponents;!function(IIIFComponents){var ToolbarComponent;!function(ToolbarComponent){var Events=function(){function Events(){}return Events.TEST="test",Events}();ToolbarComponent.Events=Events}(ToolbarComponent=IIIFComponents.ToolbarComponent||(IIIFComponents.ToolbarComponent={}))}(IIIFComponents||(IIIFComponents={})),function(w){w.IIIFComponents?w.IIIFComponents.ToolbarComponent=IIIFComponents.ToolbarComponent:w.IIIFComponents=IIIFComponents}(window)},{"es6-object-assign":4,"virtual-dom/create-element":10,"virtual-dom/diff":11,"virtual-dom/h":12,"virtual-dom/patch":13}],2:[function(require,module,exports){},{}],3:[function(require,module,exports){module.exports=function(undef){var self,nativeSplit=String.prototype.split,compliantExecNpcg=/()??/.exec("")[1]===undef;return self=function(str,separator,limit){if("[object RegExp]"!==Object.prototype.toString.call(separator))return nativeSplit.call(str,separator,limit);var separator2,match,lastIndex,lastLength,output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.extended?"x":"")+(separator.sticky?"y":""),lastLastIndex=0,separator=new RegExp(separator.source,flags+"g");for(str+="",compliantExecNpcg||(separator2=new RegExp("^"+separator.source+"$(?!\\s)",flags)),limit=limit===undef?-1>>>0:limit>>>0;(match=separator.exec(str))&&(lastIndex=match.index+match[0].length,!(lastIndex>lastLastIndex&&(output.push(str.slice(lastLastIndex,match.index)),!compliantExecNpcg&&match.length>1&&match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++)arguments[i]===undef&&(match[i]=undef)}),match.length>1&&match.index<str.length&&Array.prototype.push.apply(output,match.slice(1)),lastLength=match[0].length,lastLastIndex=lastIndex,output.length>=limit)));)separator.lastIndex===match.index&&separator.lastIndex++;return lastLastIndex===str.length?!lastLength&&separator.test("")||output.push(""):output.push(str.slice(lastLastIndex)),output.length>limit?output.slice(0,limit):output}}()},{}],4:[function(require,module,exports){"use strict";function assign(target,firstSource){if(void 0===target||null===target)throw new TypeError("Cannot convert first argument to object");for(var to=Object(target),i=1;i<arguments.length;i++){var nextSource=arguments[i];if(void 0!==nextSource&&null!==nextSource)for(var keysArray=Object.keys(Object(nextSource)),nextIndex=0,len=keysArray.length;nextIndex<len;nextIndex++){var nextKey=keysArray[nextIndex],desc=Object.getOwnPropertyDescriptor(nextSource,nextKey);void 0!==desc&&desc.enumerable&&(to[nextKey]=nextSource[nextKey])}}return to}function polyfill(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:assign})}module.exports={assign:assign,polyfill:polyfill}},{}],5:[function(require,module,exports){"use strict";function EvStore(elem){var hash=elem[hashKey];return hash||(hash=elem[hashKey]={}),hash}var OneVersionConstraint=require("individual/one-version"),MY_VERSION="7";OneVersionConstraint("ev-store",MY_VERSION);var hashKey="__EV_STORE_KEY@"+MY_VERSION;module.exports=EvStore},{"individual/one-version":8}],6:[function(require,module,exports){(function(global){var topLevel="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},minDoc=require("min-document");if("undefined"!=typeof document)module.exports=document;else{var doccy=topLevel["__GLOBAL_DOCUMENT_CACHE@4"];doccy||(doccy=topLevel["__GLOBAL_DOCUMENT_CACHE@4"]=minDoc),module.exports=doccy}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":2}],7:[function(require,module,exports){(function(global){"use strict";function Individual(key,value){return key in root?root[key]:(root[key]=value,value)}var root="undefined"!=typeof window?window:"undefined"!=typeof global?global:{};module.exports=Individual}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(require,module,exports){"use strict";function OneVersion(moduleName,version,defaultValue){var key="__INDIVIDUAL_ONE_VERSION_"+moduleName,enforceKey=key+"_ENFORCE_SINGLETON",versionValue=Individual(enforceKey,version);if(versionValue!==version)throw new Error("Can only have one copy of "+moduleName+".\nYou already have version "+versionValue+" installed.\nThis means you cannot install version "+version);return Individual(key,defaultValue)}var Individual=require("./index.js");module.exports=OneVersion},{"./index.js":7}],9:[function(require,module,exports){"use strict";module.exports=function(x){return"object"==typeof x&&null!==x}},{}],10:[function(require,module,exports){var createElement=require("./vdom/create-element.js");module.exports=createElement},{"./vdom/create-element.js":15}],11:[function(require,module,exports){var diff=require("./vtree/diff.js");module.exports=diff},{"./vtree/diff.js":35}],12:[function(require,module,exports){var h=require("./virtual-hyperscript/index.js");module.exports=h},{"./virtual-hyperscript/index.js":22}],13:[function(require,module,exports){var patch=require("./vdom/patch.js");module.exports=patch},{"./vdom/patch.js":18}],14:[function(require,module,exports){function applyProperties(node,props,previous){for(var propName in props){var propValue=props[propName];void 0===propValue?removeProperty(node,propName,propValue,previous):isHook(propValue)?(removeProperty(node,propName,propValue,previous),propValue.hook&&propValue.hook(node,propName,previous?previous[propName]:void 0)):isObject(propValue)?patchObject(node,props,previous,propName,propValue):node[propName]=propValue}}function removeProperty(node,propName,propValue,previous){if(previous){var previousValue=previous[propName];if(isHook(previousValue))previousValue.unhook&&previousValue.unhook(node,propName,propValue);else if("attributes"===propName)for(var attrName in previousValue)node.removeAttribute(attrName);else if("style"===propName)for(var i in previousValue)node.style[i]="";else"string"==typeof previousValue?node[propName]="":node[propName]=null}}function patchObject(node,props,previous,propName,propValue){var previousValue=previous?previous[propName]:void 0;if("attributes"!==propName){if(previousValue&&isObject(previousValue)&&getPrototype(previousValue)!==getPrototype(propValue))return void(node[propName]=propValue);isObject(node[propName])||(node[propName]={});var replacer="style"===propName?"":void 0;for(var k in propValue){var value=propValue[k];node[propName][k]=void 0===value?replacer:value}}else for(var attrName in propValue){var attrValue=propValue[attrName];void 0===attrValue?node.removeAttribute(attrName):node.setAttribute(attrName,attrValue)}}function getPrototype(value){return Object.getPrototypeOf?Object.getPrototypeOf(value):value.__proto__?value.__proto__:value.constructor?value.constructor.prototype:void 0}var isObject=require("is-object"),isHook=require("../vnode/is-vhook.js");module.exports=applyProperties},{"../vnode/is-vhook.js":26,"is-object":9}],15:[function(require,module,exports){function createElement(vnode,opts){var doc=opts?opts.document||document:document,warn=opts?opts.warn:null;if(vnode=handleThunk(vnode).a,isWidget(vnode))return vnode.init();if(isVText(vnode))return doc.createTextNode(vnode.text);if(!isVNode(vnode))return warn&&warn("Item is not a valid virtual dom node",vnode),null;var node=null===vnode.namespace?doc.createElement(vnode.tagName):doc.createElementNS(vnode.namespace,vnode.tagName),props=vnode.properties;applyProperties(node,props);for(var children=vnode.children,i=0;i<children.length;i++){var childNode=createElement(children[i],opts);childNode&&node.appendChild(childNode)}return node}var document=require("global/document"),applyProperties=require("./apply-properties"),isVNode=require("../vnode/is-vnode.js"),isVText=require("../vnode/is-vtext.js"),isWidget=require("../vnode/is-widget.js"),handleThunk=require("../vnode/handle-thunk.js");module.exports=createElement},{"../vnode/handle-thunk.js":24,"../vnode/is-vnode.js":27,"../vnode/is-vtext.js":28,"../vnode/is-widget.js":29,"./apply-properties":14,"global/document":6}],16:[function(require,module,exports){function domIndex(rootNode,tree,indices,nodes){return indices&&0!==indices.length?(indices.sort(ascending),recurse(rootNode,tree,indices,nodes,0)):{}}function recurse(rootNode,tree,indices,nodes,rootIndex){if(nodes=nodes||{},rootNode){indexInRange(indices,rootIndex,rootIndex)&&(nodes[rootIndex]=rootNode);var vChildren=tree.children;if(vChildren)for(var childNodes=rootNode.childNodes,i=0;i<tree.children.length;i++){rootIndex+=1;var vChild=vChildren[i]||noChild,nextIndex=rootIndex+(vChild.count||0);indexInRange(indices,rootIndex,nextIndex)&&recurse(childNodes[i],vChild,indices,nodes,rootIndex),rootIndex=nextIndex}}return nodes}function indexInRange(indices,left,right){if(0===indices.length)return!1;for(var currentIndex,currentItem,minIndex=0,maxIndex=indices.length-1;minIndex<=maxIndex;){if(currentIndex=(maxIndex+minIndex)/2>>0,currentItem=indices[currentIndex],minIndex===maxIndex)return currentItem>=left&&currentItem<=right;if(currentItem<left)minIndex=currentIndex+1;else{if(!(currentItem>right))return!0;maxIndex=currentIndex-1}}return!1}function ascending(a,b){return a>b?1:-1}var noChild={};module.exports=domIndex},{}],17:[function(require,module,exports){function applyPatch(vpatch,domNode,renderOptions){var type=vpatch.type,vNode=vpatch.vNode,patch=vpatch.patch;switch(type){case VPatch.REMOVE:return removeNode(domNode,vNode);case VPatch.INSERT:return insertNode(domNode,patch,renderOptions);case VPatch.VTEXT:return stringPatch(domNode,vNode,patch,renderOptions);case VPatch.WIDGET:return widgetPatch(domNode,vNode,patch,renderOptions);case VPatch.VNODE:return vNodePatch(domNode,vNode,patch,renderOptions);case VPatch.ORDER:return reorderChildren(domNode,patch),domNode;case VPatch.PROPS:return applyProperties(domNode,patch,vNode.properties),domNode;case VPatch.THUNK:return replaceRoot(domNode,renderOptions.patch(domNode,patch,renderOptions));default:return domNode}}function removeNode(domNode,vNode){var parentNode=domNode.parentNode;return parentNode&&parentNode.removeChild(domNode),destroyWidget(domNode,vNode),null}function insertNode(parentNode,vNode,renderOptions){var newNode=renderOptions.render(vNode,renderOptions);return parentNode&&parentNode.appendChild(newNode),parentNode}function stringPatch(domNode,leftVNode,vText,renderOptions){var newNode;if(3===domNode.nodeType)domNode.replaceData(0,domNode.length,vText.text),newNode=domNode;else{var parentNode=domNode.parentNode;newNode=renderOptions.render(vText,renderOptions),parentNode&&newNode!==domNode&&parentNode.replaceChild(newNode,domNode)}return newNode}function widgetPatch(domNode,leftVNode,widget,renderOptions){var newNode,updating=updateWidget(leftVNode,widget);newNode=updating?widget.update(leftVNode,domNode)||domNode:renderOptions.render(widget,renderOptions);var parentNode=domNode.parentNode;return parentNode&&newNode!==domNode&&parentNode.replaceChild(newNode,domNode),updating||destroyWidget(domNode,leftVNode),newNode}function vNodePatch(domNode,leftVNode,vNode,renderOptions){var parentNode=domNode.parentNode,newNode=renderOptions.render(vNode,renderOptions);return parentNode&&newNode!==domNode&&parentNode.replaceChild(newNode,domNode),newNode}function destroyWidget(domNode,w){"function"==typeof w.destroy&&isWidget(w)&&w.destroy(domNode)}function reorderChildren(domNode,moves){for(var node,remove,insert,childNodes=domNode.childNodes,keyMap={},i=0;i<moves.removes.length;i++)remove=moves.removes[i],node=childNodes[remove.from],remove.key&&(keyMap[remove.key]=node),domNode.removeChild(node);for(var length=childNodes.length,j=0;j<moves.inserts.length;j++)insert=moves.inserts[j],node=keyMap[insert.key],domNode.insertBefore(node,insert.to>=length++?null:childNodes[insert.to])}function replaceRoot(oldRoot,newRoot){return oldRoot&&newRoot&&oldRoot!==newRoot&&oldRoot.parentNode&&oldRoot.parentNode.replaceChild(newRoot,oldRoot),newRoot}var applyProperties=require("./apply-properties"),isWidget=require("../vnode/is-widget.js"),VPatch=require("../vnode/vpatch.js"),updateWidget=require("./update-widget");module.exports=applyPatch},{"../vnode/is-widget.js":29,"../vnode/vpatch.js":32,"./apply-properties":14,"./update-widget":19}],18:[function(require,module,exports){function patch(rootNode,patches,renderOptions){return renderOptions=renderOptions||{},renderOptions.patch=renderOptions.patch&&renderOptions.patch!==patch?renderOptions.patch:patchRecursive,renderOptions.render=renderOptions.render||render,renderOptions.patch(rootNode,patches,renderOptions)}function patchRecursive(rootNode,patches,renderOptions){var indices=patchIndices(patches);if(0===indices.length)return rootNode;var index=domIndex(rootNode,patches.a,indices),ownerDocument=rootNode.ownerDocument;renderOptions.document||ownerDocument===document||(renderOptions.document=ownerDocument);for(var i=0;i<indices.length;i++){var nodeIndex=indices[i];rootNode=applyPatch(rootNode,index[nodeIndex],patches[nodeIndex],renderOptions)}return rootNode}function applyPatch(rootNode,domNode,patchList,renderOptions){if(!domNode)return rootNode;var newNode;if(isArray(patchList))for(var i=0;i<patchList.length;i++)newNode=patchOp(patchList[i],domNode,renderOptions),domNode===rootNode&&(rootNode=newNode);else newNode=patchOp(patchList,domNode,renderOptions),domNode===rootNode&&(rootNode=newNode);return rootNode}function patchIndices(patches){var indices=[];for(var key in patches)"a"!==key&&indices.push(Number(key));return indices}var document=require("global/document"),isArray=require("x-is-array"),render=require("./create-element"),domIndex=require("./dom-index"),patchOp=require("./patch-op");module.exports=patch},{"./create-element":15,"./dom-index":16,"./patch-op":17,"global/document":6,"x-is-array":36}],19:[function(require,module,exports){function updateWidget(a,b){return!(!isWidget(a)||!isWidget(b))&&("name"in a&&"name"in b?a.id===b.id:a.init===b.init)}var isWidget=require("../vnode/is-widget.js");module.exports=updateWidget},{"../vnode/is-widget.js":29}],20:[function(require,module,exports){"use strict";function EvHook(value){return this instanceof EvHook?void(this.value=value):new EvHook(value)}var EvStore=require("ev-store");module.exports=EvHook,EvHook.prototype.hook=function(node,propertyName){var es=EvStore(node),propName=propertyName.substr(3);es[propName]=this.value},EvHook.prototype.unhook=function(node,propertyName){var es=EvStore(node),propName=propertyName.substr(3);es[propName]=void 0}},{"ev-store":5}],21:[function(require,module,exports){"use strict";function SoftSetHook(value){return this instanceof SoftSetHook?void(this.value=value):new SoftSetHook(value)}module.exports=SoftSetHook,SoftSetHook.prototype.hook=function(node,propertyName){node[propertyName]!==this.value&&(node[propertyName]=this.value)}},{}],22:[function(require,module,exports){"use strict";function h(tagName,properties,children){var tag,props,key,namespace,childNodes=[];return!children&&isChildren(properties)&&(children=properties,props={}),props=props||properties||{},tag=parseTag(tagName,props),props.hasOwnProperty("key")&&(key=props.key,props.key=void 0),props.hasOwnProperty("namespace")&&(namespace=props.namespace,props.namespace=void 0),"INPUT"!==tag||namespace||!props.hasOwnProperty("value")||void 0===props.value||isHook(props.value)||(props.value=softSetHook(props.value)),transformProperties(props),void 0!==children&&null!==children&&addChild(children,childNodes,tag,props),new VNode(tag,props,childNodes,key,namespace)}function addChild(c,childNodes,tag,props){if("string"==typeof c)childNodes.push(new VText(c));else if("number"==typeof c)childNodes.push(new VText(String(c)));else if(isChild(c))childNodes.push(c);else{if(!isArray(c)){if(null===c||void 0===c)return;throw UnexpectedVirtualElement({foreignObject:c,parentVnode:{tagName:tag,properties:props}})}for(var i=0;i<c.length;i++)addChild(c[i],childNodes,tag,props)}}function transformProperties(props){for(var propName in props)if(props.hasOwnProperty(propName)){var value=props[propName];if(isHook(value))continue;"ev-"===propName.substr(0,3)&&(props[propName]=evHook(value))}}function isChild(x){return isVNode(x)||isVText(x)||isWidget(x)||isVThunk(x)}function isChildren(x){return"string"==typeof x||isArray(x)||isChild(x)}function UnexpectedVirtualElement(data){var err=new Error;return err.type="virtual-hyperscript.unexpected.virtual-element",err.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+errorString(data.foreignObject)+".\nThe parent vnode is:\n"+errorString(data.parentVnode),err.foreignObject=data.foreignObject,err.parentVnode=data.parentVnode,err}function errorString(obj){try{return JSON.stringify(obj,null,"    ")}catch(e){return String(obj)}}var isArray=require("x-is-array"),VNode=require("../vnode/vnode.js"),VText=require("../vnode/vtext.js"),isVNode=require("../vnode/is-vnode"),isVText=require("../vnode/is-vtext"),isWidget=require("../vnode/is-widget"),isHook=require("../vnode/is-vhook"),isVThunk=require("../vnode/is-thunk"),parseTag=require("./parse-tag.js"),softSetHook=require("./hooks/soft-set-hook.js"),evHook=require("./hooks/ev-hook.js");module.exports=h},{"../vnode/is-thunk":25,"../vnode/is-vhook":26,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vnode.js":31,"../vnode/vtext.js":33,"./hooks/ev-hook.js":20,"./hooks/soft-set-hook.js":21,"./parse-tag.js":23,"x-is-array":36}],23:[function(require,module,exports){"use strict";function parseTag(tag,props){if(!tag)return"DIV";var noId=!props.hasOwnProperty("id"),tagParts=split(tag,classIdSplit),tagName=null;notClassId.test(tagParts[1])&&(tagName="DIV");var classes,part,type,i;for(i=0;i<tagParts.length;i++)part=tagParts[i],part&&(type=part.charAt(0),tagName?"."===type?(classes=classes||[],classes.push(part.substring(1,part.length))):"#"===type&&noId&&(props.id=part.substring(1,part.length)):tagName=part);return classes&&(props.className&&classes.push(props.className),props.className=classes.join(" ")),props.namespace?tagName:tagName.toUpperCase()}var split=require("browser-split"),classIdSplit=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,notClassId=/^\.|#/;module.exports=parseTag},{"browser-split":3}],24:[function(require,module,exports){function handleThunk(a,b){var renderedA=a,renderedB=b;return isThunk(b)&&(renderedB=renderThunk(b,a)),isThunk(a)&&(renderedA=renderThunk(a,null)),{a:renderedA,b:renderedB}}function renderThunk(thunk,previous){var renderedThunk=thunk.vnode;if(renderedThunk||(renderedThunk=thunk.vnode=thunk.render(previous)),!(isVNode(renderedThunk)||isVText(renderedThunk)||isWidget(renderedThunk)))throw new Error("thunk did not return a valid node");return renderedThunk}var isVNode=require("./is-vnode"),isVText=require("./is-vtext"),isWidget=require("./is-widget"),isThunk=require("./is-thunk");module.exports=handleThunk},{"./is-thunk":25,"./is-vnode":27,"./is-vtext":28,"./is-widget":29}],25:[function(require,module,exports){function isThunk(t){return t&&"Thunk"===t.type}module.exports=isThunk},{}],26:[function(require,module,exports){function isHook(hook){return hook&&("function"==typeof hook.hook&&!hook.hasOwnProperty("hook")||"function"==typeof hook.unhook&&!hook.hasOwnProperty("unhook"))}module.exports=isHook},{}],27:[function(require,module,exports){function isVirtualNode(x){return x&&"VirtualNode"===x.type&&x.version===version}var version=require("./version");module.exports=isVirtualNode},{"./version":30}],28:[function(require,module,exports){function isVirtualText(x){return x&&"VirtualText"===x.type&&x.version===version}var version=require("./version");module.exports=isVirtualText},{"./version":30}],29:[function(require,module,exports){function isWidget(w){return w&&"Widget"===w.type}module.exports=isWidget},{}],30:[function(require,module,exports){module.exports="2"},{}],31:[function(require,module,exports){function VirtualNode(tagName,properties,children,key,namespace){this.tagName=tagName,this.properties=properties||noProperties,this.children=children||noChildren,this.key=null!=key?String(key):void 0,this.namespace="string"==typeof namespace?namespace:null;var hooks,count=children&&children.length||0,descendants=0,hasWidgets=!1,hasThunks=!1,descendantHooks=!1;for(var propName in properties)if(properties.hasOwnProperty(propName)){var property=properties[propName];isVHook(property)&&property.unhook&&(hooks||(hooks={}),hooks[propName]=property)}for(var i=0;i<count;i++){var child=children[i];isVNode(child)?(descendants+=child.count||0,!hasWidgets&&child.hasWidgets&&(hasWidgets=!0),!hasThunks&&child.hasThunks&&(hasThunks=!0),descendantHooks||!child.hooks&&!child.descendantHooks||(descendantHooks=!0)):!hasWidgets&&isWidget(child)?"function"==typeof child.destroy&&(hasWidgets=!0):!hasThunks&&isThunk(child)&&(hasThunks=!0)}this.count=count+descendants,this.hasWidgets=hasWidgets,this.hasThunks=hasThunks,this.hooks=hooks,this.descendantHooks=descendantHooks}var version=require("./version"),isVNode=require("./is-vnode"),isWidget=require("./is-widget"),isThunk=require("./is-thunk"),isVHook=require("./is-vhook");module.exports=VirtualNode;var noProperties={},noChildren=[];VirtualNode.prototype.version=version,VirtualNode.prototype.type="VirtualNode"},{"./is-thunk":25,"./is-vhook":26,"./is-vnode":27,"./is-widget":29,"./version":30}],32:[function(require,module,exports){function VirtualPatch(type,vNode,patch){this.type=Number(type),this.vNode=vNode,this.patch=patch}var version=require("./version");VirtualPatch.NONE=0,VirtualPatch.VTEXT=1,VirtualPatch.VNODE=2,VirtualPatch.WIDGET=3,VirtualPatch.PROPS=4,VirtualPatch.ORDER=5,VirtualPatch.INSERT=6,VirtualPatch.REMOVE=7,VirtualPatch.THUNK=8,module.exports=VirtualPatch,VirtualPatch.prototype.version=version,VirtualPatch.prototype.type="VirtualPatch"},{"./version":30}],33:[function(require,module,exports){function VirtualText(text){this.text=String(text)}var version=require("./version");module.exports=VirtualText,VirtualText.prototype.version=version,VirtualText.prototype.type="VirtualText"},{"./version":30}],34:[function(require,module,exports){function diffProps(a,b){var diff;for(var aKey in a){aKey in b||(diff=diff||{},diff[aKey]=void 0);var aValue=a[aKey],bValue=b[aKey];if(aValue!==bValue)if(isObject(aValue)&&isObject(bValue))if(getPrototype(bValue)!==getPrototype(aValue))diff=diff||{},diff[aKey]=bValue;else if(isHook(bValue))diff=diff||{},diff[aKey]=bValue;else{var objectDiff=diffProps(aValue,bValue);objectDiff&&(diff=diff||{},diff[aKey]=objectDiff)}else diff=diff||{},diff[aKey]=bValue}for(var bKey in b)bKey in a||(diff=diff||{},diff[bKey]=b[bKey]);return diff}function getPrototype(value){return Object.getPrototypeOf?Object.getPrototypeOf(value):value.__proto__?value.__proto__:value.constructor?value.constructor.prototype:void 0}var isObject=require("is-object"),isHook=require("../vnode/is-vhook");module.exports=diffProps},{"../vnode/is-vhook":26,"is-object":9}],35:[function(require,module,exports){function diff(a,b){var patch={a:a};return walk(a,b,patch,0),patch}function walk(a,b,patch,index){if(a!==b){var apply=patch[index],applyClear=!1;if(isThunk(a)||isThunk(b))thunks(a,b,patch,index);else if(null==b)isWidget(a)||(clearState(a,patch,index),apply=patch[index]),apply=appendPatch(apply,new VPatch(VPatch.REMOVE,a,b));else if(isVNode(b))if(isVNode(a))if(a.tagName===b.tagName&&a.namespace===b.namespace&&a.key===b.key){var propsPatch=diffProps(a.properties,b.properties);propsPatch&&(apply=appendPatch(apply,new VPatch(VPatch.PROPS,a,propsPatch))),apply=diffChildren(a,b,patch,apply,index)}else apply=appendPatch(apply,new VPatch(VPatch.VNODE,a,b)),applyClear=!0;else apply=appendPatch(apply,new VPatch(VPatch.VNODE,a,b)),applyClear=!0;else isVText(b)?isVText(a)?a.text!==b.text&&(apply=appendPatch(apply,new VPatch(VPatch.VTEXT,a,b))):(apply=appendPatch(apply,new VPatch(VPatch.VTEXT,a,b)),applyClear=!0):isWidget(b)&&(isWidget(a)||(applyClear=!0),apply=appendPatch(apply,new VPatch(VPatch.WIDGET,a,b)));apply&&(patch[index]=apply),applyClear&&clearState(a,patch,index)}}function diffChildren(a,b,patch,apply,index){for(var aChildren=a.children,orderedSet=reorder(aChildren,b.children),bChildren=orderedSet.children,aLen=aChildren.length,bLen=bChildren.length,len=aLen>bLen?aLen:bLen,i=0;i<len;i++){var leftNode=aChildren[i],rightNode=bChildren[i];index+=1,leftNode?walk(leftNode,rightNode,patch,index):rightNode&&(apply=appendPatch(apply,new VPatch(VPatch.INSERT,null,rightNode))),isVNode(leftNode)&&leftNode.count&&(index+=leftNode.count)}return orderedSet.moves&&(apply=appendPatch(apply,new VPatch(VPatch.ORDER,a,orderedSet.moves))),apply}function clearState(vNode,patch,index){unhook(vNode,patch,index),destroyWidgets(vNode,patch,index)}function destroyWidgets(vNode,patch,index){if(isWidget(vNode))"function"==typeof vNode.destroy&&(patch[index]=appendPatch(patch[index],new VPatch(VPatch.REMOVE,vNode,null)));else if(isVNode(vNode)&&(vNode.hasWidgets||vNode.hasThunks))for(var children=vNode.children,len=children.length,i=0;i<len;i++){var child=children[i];index+=1,destroyWidgets(child,patch,index),isVNode(child)&&child.count&&(index+=child.count)}else isThunk(vNode)&&thunks(vNode,null,patch,index)}function thunks(a,b,patch,index){var nodes=handleThunk(a,b),thunkPatch=diff(nodes.a,nodes.b);hasPatches(thunkPatch)&&(patch[index]=new VPatch(VPatch.THUNK,null,thunkPatch))}function hasPatches(patch){for(var index in patch)if("a"!==index)return!0;return!1}function unhook(vNode,patch,index){if(isVNode(vNode)){if(vNode.hooks&&(patch[index]=appendPatch(patch[index],new VPatch(VPatch.PROPS,vNode,undefinedKeys(vNode.hooks)))),vNode.descendantHooks||vNode.hasThunks)for(var children=vNode.children,len=children.length,i=0;i<len;i++){var child=children[i];index+=1,unhook(child,patch,index),isVNode(child)&&child.count&&(index+=child.count)}}else isThunk(vNode)&&thunks(vNode,null,patch,index)}function undefinedKeys(obj){var result={};for(var key in obj)result[key]=void 0;return result}function reorder(aChildren,bChildren){var bChildIndex=keyIndex(bChildren),bKeys=bChildIndex.keys,bFree=bChildIndex.free;if(bFree.length===bChildren.length)return{children:bChildren,moves:null};var aChildIndex=keyIndex(aChildren),aKeys=aChildIndex.keys,aFree=aChildIndex.free;if(aFree.length===aChildren.length)return{children:bChildren,moves:null};for(var newChildren=[],freeIndex=0,freeCount=bFree.length,deletedItems=0,i=0;i<aChildren.length;i++){var itemIndex,aItem=aChildren[i];aItem.key?bKeys.hasOwnProperty(aItem.key)?(itemIndex=bKeys[aItem.key],newChildren.push(bChildren[itemIndex])):(itemIndex=i-deletedItems++,newChildren.push(null)):freeIndex<freeCount?(itemIndex=bFree[freeIndex++],newChildren.push(bChildren[itemIndex])):(itemIndex=i-deletedItems++,newChildren.push(null))}for(var lastFreeIndex=freeIndex>=bFree.length?bChildren.length:bFree[freeIndex],j=0;j<bChildren.length;j++){var newItem=bChildren[j];newItem.key?aKeys.hasOwnProperty(newItem.key)||newChildren.push(newItem):j>=lastFreeIndex&&newChildren.push(newItem)}for(var simulateItem,simulate=newChildren.slice(),simulateIndex=0,removes=[],inserts=[],k=0;k<bChildren.length;){var wantedItem=bChildren[k];for(simulateItem=simulate[simulateIndex];null===simulateItem&&simulate.length;)removes.push(remove(simulate,simulateIndex,null)),simulateItem=simulate[simulateIndex];simulateItem&&simulateItem.key===wantedItem.key?(simulateIndex++,k++):wantedItem.key?(simulateItem&&simulateItem.key&&bKeys[simulateItem.key]!==k+1?(removes.push(remove(simulate,simulateIndex,simulateItem.key)),simulateItem=simulate[simulateIndex],simulateItem&&simulateItem.key===wantedItem.key?simulateIndex++:inserts.push({key:wantedItem.key,to:k})):inserts.push({key:wantedItem.key,to:k}),k++):simulateItem&&simulateItem.key&&removes.push(remove(simulate,simulateIndex,simulateItem.key))}for(;simulateIndex<simulate.length;)simulateItem=simulate[simulateIndex],removes.push(remove(simulate,simulateIndex,simulateItem&&simulateItem.key));return removes.length!==deletedItems||inserts.length?{children:newChildren,moves:{removes:removes,inserts:inserts}}:{children:newChildren,moves:null}}function remove(arr,index,key){return arr.splice(index,1),{from:index,key:key}}function keyIndex(children){for(var keys={},free=[],length=children.length,i=0;i<length;i++){var child=children[i];child.key?keys[child.key]=i:free.push(i)}return{keys:keys,free:free}}function appendPatch(apply,patch){return apply?(isArray(apply)?apply.push(patch):apply=[apply,patch],apply):patch}var isArray=require("x-is-array"),VPatch=require("../vnode/vpatch"),isVNode=require("../vnode/is-vnode"),isVText=require("../vnode/is-vtext"),isWidget=require("../vnode/is-widget"),isThunk=require("../vnode/is-thunk"),handleThunk=require("../vnode/handle-thunk"),diffProps=require("./diff-props");
module.exports=diff},{"../vnode/handle-thunk":24,"../vnode/is-thunk":25,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vpatch":32,"./diff-props":34,"x-is-array":36}],36:[function(require,module,exports){function isArray(obj){return"[object Array]"===toString.call(obj)}var nativeIsArray=Array.isArray,toString=Object.prototype.toString;module.exports=nativeIsArray||isArray},{}]},{},[1])(1)});