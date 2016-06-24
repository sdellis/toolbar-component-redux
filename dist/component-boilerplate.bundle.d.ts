// base-component v1.0.1 https://github.com/edsilv/base-component#readme
interface Window {
    Components: any;
}

declare var TinyEmitter: any;
declare namespace Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _emit(event: string, ...args: any[]): void;
        protected _resize(): void;
        databind(data: any): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        databind(data: any): void;
    }
}

declare namespace Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}

declare namespace MyComponents {
    class ExampleComponent extends Components.BaseComponent {
        constructor(options: IExampleComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IExampleComponentOptions;
        protected _resize(): void;
    }
}
declare namespace MyComponents.ExampleComponent {
    class Events {
        static TEST: string;
    }
}

declare namespace MyComponents {
    interface IExampleComponentOptions extends Components.IBaseComponentOptions {
    }
}
