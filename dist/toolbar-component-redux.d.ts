// toolbar-component-redux v1.0.0 https://github.com/viewdir/component-boilerplate#readme
declare namespace IIIFComponents {
    function addButton(label?: string): {
        type: string;
        label: string;
    };
    function toggleButton(id: any): {
        type: string;
        id: any;
    };
}

declare namespace IIIFComponents {
    const ADD_BUTTON: string;
    const TOGGLE_BUTTON: string;
}

declare namespace IIIFComponents {
    interface IToolbarOptions extends _Components.IBaseComponentOptions {
        direction?: string;
        buttons?: any;
    }
}

declare namespace IIIFComponents {
    function buttons(state: any[], action: any): any[];
}

declare const Redux: any;
declare const h: any;
declare const diff: any;
declare const patch: any;
declare const createElement: any;
declare namespace IIIFComponents {
    class Toolbar extends _Components.BaseComponent {
        options: IToolbarOptions;
        rootNode: any;
        tree: any;
        private _store;
        constructor(options: IToolbarOptions);
        loaded(new_state: any): void;
        stateChanged(new_state: any): void;
        protected _init(): boolean;
        getState(): any;
        private _render(state);
        private _updateView();
        protected _getDefaultOptions(): IToolbarOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.Toolbar {
    class Events {
        static STATECHANGED: string;
        static LOADED: string;
    }
}
