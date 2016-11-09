// toolbar-component v1.0.0 https://github.com/viewdir/component-boilerplate#readme
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbarComponent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var IIIFComponents;
(function (IIIFComponents) {
    var ToolbarButton = (function () {
        function ToolbarButton(options) {
            this.default_opts = {
                label: "easy",
                icon: "e",
                selected: false,
                disabled: false
            };
            this.options = $.extend(this.default_opts, options);
            this.label = this.options.label;
            this.icon = this.options.icon;
            this.selected = this.options.selected;
            this.disabled = this.options.disabled;
        }
        return ToolbarButton;
    }());
    IIIFComponents.ToolbarButton = ToolbarButton;
})(IIIFComponents || (IIIFComponents = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IIIFComponents;
(function (IIIFComponents) {
    var ToolbarComponent = (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(options) {
            _super.call(this, options);
            this._init();
            this._resize();
        }
        ToolbarComponent.prototype.test = function () {
            this._emit(ToolbarComponent.Events.TEST, [1, 2, 'three']);
        };
        ToolbarComponent.prototype._init = function () {
            var success = _super.prototype._init.call(this);
            if (!success) {
                console.error("Component failed to initialise");
            }
            //this._$toolbar = $('<div id="toolbar" class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"/>');
            this._$toolbar = $('<div id="toolbar" class="btn-group" role="group" aria-label="Toolbar button group"/>');
            this._$element.append(this._$toolbar);
            $.templates({
                toolbarButtonsTemplate: '\
                {^{for buttons}}\
                    <button type="button" class="btn btn-secondary">{^{:label}}</button>\
                {{/for}}'
            });
            //this._$element.append("I am a toolbar that is " + this.options.orientation + ", with these buttons: " + this.options.buttons.join(","));
            $.templates.toolbarButtonsTemplate.link(this._$toolbar, this.options);
            $(".btn").on("click", function () {
                // From the clicked HTML element ('this'), get the view object
                var view = $.view(this);
                // The 'button' data object for clicked button
                var button = view.data;
                // The index of this 'item view'. (Equals index of button in buttons array)
                var index = view.index;
                // Change the button.label
                $.observable(button).setProperty("label", button.label + " " + index);
            });
            return success;
        };
        ToolbarComponent.prototype._getDefaultOptions = function () {
            return {
                orientation: "vertical",
                buttons: ["easy"],
                hidden: false
            };
        };
        ToolbarComponent.prototype._resize = function () {
        };
        return ToolbarComponent;
    }(_Components.BaseComponent));
    IIIFComponents.ToolbarComponent = ToolbarComponent;
})(IIIFComponents || (IIIFComponents = {}));
var IIIFComponents;
(function (IIIFComponents) {
    var ToolbarComponent;
    (function (ToolbarComponent) {
        var Events = (function () {
            function Events() {
            }
            Events.TEST = 'test';
            return Events;
        }());
        ToolbarComponent.Events = Events;
    })(ToolbarComponent = IIIFComponents.ToolbarComponent || (IIIFComponents.ToolbarComponent = {}));
})(IIIFComponents || (IIIFComponents = {}));
(function (w) {
    if (!w.IIIFComponents) {
        w.IIIFComponents = IIIFComponents;
    }
    else {
        w.IIIFComponents.ToolbarComponent = IIIFComponents.ToolbarComponent;
    }
})(window);

},{}]},{},[1])(1)
});