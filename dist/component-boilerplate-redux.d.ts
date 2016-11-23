// component-boilerplate-redux v1.0.0 https://github.com/viewdir/component-boilerplate#readme
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

declare const Redux: any;
declare const h: any;
declare const diff: any;
declare const patch: any;
declare const createElement: any;
declare namespace IIIFComponents {
    class ComponentBoilerplateRedux extends _Components.BaseComponent {
        options: IComponentBoilerplateReduxOptions;
        rootNode: any;
        tree: any;
        private _store;
        constructor(options: IComponentBoilerplateReduxOptions);
        stateChanged(new_state: any): void;
        protected _init(): boolean;
        getState(): any;
        private _render(state);
        private _updateView();
        protected _getDefaultOptions(): IComponentBoilerplateReduxOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ComponentBoilerplateRedux {
    class Events {
        static STATECHANGED: string;
    }
}

declare namespace IIIFComponents {
    interface IComponentBoilerplateReduxOptions extends _Components.IBaseComponentOptions {
        color?: string;
        size?: number;
    }
}

declare namespace IIIFComponents {
    function color(state: string, action: any): any;
}

declare namespace IIIFComponents {
    function count(state: number, action: any): any;
}
