// base-component v1.0.2 https://github.com/viewdir/base-component#readme
interface Window {
    _Components: any;
}

declare var TinyEmitter: any;
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _emit(event: string, ...args: any[]): void;
        protected _resize(): void;
        databind(data?: any): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace _Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        databind(data?: any): void;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}

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

declare var Redux: any;
declare var h: any;
declare var diff: any;
declare var patch: any;
declare var createElement: any;
declare namespace IIIFComponents {
    class ComponentBoilerplateRedux extends _Components.BaseComponent {
        options: IComponentBoilerplateReduxOptions;
        rootNode: any;
        tree: any;
        private _store;
        constructor(options: IComponentBoilerplateReduxOptions);
        stateChanged(new_state: any): void;
        protected _init(): boolean;
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
