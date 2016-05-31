// component-boilerplate v1.0.1 https://github.com/edsilv/iiif-tree-component#readme
declare namespace IIIFComponents {
    class ExampleComponent extends Components.BaseComponent {
        constructor(options: IExampleComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IExampleComponentOptions;
        protected _resize(): void;
    }
}
declare namespace IIIFComponents.ExampleComponent {
    class Events {
        static TEST: string;
    }
}

declare namespace IIIFComponents {
    interface IExampleComponentOptions extends Components.IBaseComponentOptions {
    }
}
