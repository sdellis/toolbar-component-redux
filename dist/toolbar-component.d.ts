// toolbar-component v1.0.0 https://github.com/viewdir/component-boilerplate#readme
declare namespace IIIFComponents {
    function grow(count: any): {
        type: string;
        count: any;
    };
    function reset(count: any): {
        type: string;
        count: any;
    };
    function changeColor(color: any): {
        type: string;
        color: any;
    };
}

declare namespace IIIFComponents {
    const GROW: string;
    const RESET: string;
    const CHANGE_COLOR: string;
}

declare namespace IIIFComponents {
    interface IToolbarComponentOptions extends _Components.IBaseComponentOptions {
        orientation?: string;
        buttons?: any[];
    }
}

declare namespace IIIFComponents {
    class ToolbarButton {
        $wrapper: JQuery;
        options: any;
        private default_opts;
        private store;
        private label;
        private icon;
        private selected;
        private disabled;
        constructor(options: any);
    }
}

declare var Redux: any;
declare var h: any;
declare var diff: any;
declare var patch: any;
declare var createElement: any;
declare namespace IIIFComponents {
    class ToolbarComponent extends _Components.BaseComponent {
        options: IToolbarComponentOptions;
        private _$toolbar;
        private _buttons;
        constructor(options: IToolbarComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IToolbarComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ToolbarComponent {
    class Events {
        static TEST: string;
    }
}
