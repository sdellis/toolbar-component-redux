// toolbar-component v1.0.0 https://github.com/viewdir/component-boilerplate#readme
declare namespace IIIFComponents {
    interface IToolbarComponentOptions extends _Components.IBaseComponentOptions {
        orientation?: string;
    }
}

declare var Redux: any;
declare namespace IIIFComponents {
    class ToolbarComponent extends _Components.BaseComponent {
        options: IToolbarComponentOptions;
        private store;
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
