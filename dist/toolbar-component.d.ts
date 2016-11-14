// toolbar-component v1.0.0 https://github.com/viewdir/component-boilerplate#readme
declare namespace IIIFComponents {
    function grow(i?: number): {
        type: string;
        incrementBy: number;
    };
    function reset(): {
        type: string;
    };
    function changeColor(c?: string): {
        type: string;
        color: string;
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
    function color(state: string, action: any): any;
}

declare namespace IIIFComponents {
    function count(state: number, action: any): any;
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
        rootNode: any;
        tree: any;
        private _store;
        private _$toolbar;
        private _buttons;
        constructor(options: IToolbarComponentOptions);
        stateChanged(new_state: any): void;
        protected _init(): boolean;
        private _render(state);
        private _updateView();
        protected _getDefaultOptions(): IToolbarComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ToolbarComponent {
    class Events {
        static STATECHANGED: string;
    }
}
