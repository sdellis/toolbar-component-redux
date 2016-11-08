declare var Redux: any;

namespace IIIFComponents {
    export class ToolbarComponent extends _Components.BaseComponent {

        public options: IToolbarComponentOptions;
        private store: any;

        constructor(options: IToolbarComponentOptions) {
            const default_opts: IToolbarComponentOptions = {
                orientation: "vertical"
            };
            options = $.extend( default_opts, options );
            super(options);

            this._init();
            this._resize();
        }

        public test(): void {
            this._emit(ToolbarComponent.Events.TEST, [1, 2, 'three']);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            this._$element.append("I am a toolbar that is:" + this.options.orientation);

            return success;
        }

        protected _getDefaultOptions(): IToolbarComponentOptions {
            return <IToolbarComponentOptions>{
            }
        }

        protected _resize(): void {

        }
    }
}

namespace IIIFComponents.ToolbarComponent {
    export class Events {
        static TEST: string = 'test';
    }
}

(function(w) {
    if (!w.IIIFComponents){
        w.IIIFComponents = IIIFComponents;
    } else {
        w.IIIFComponents.ToolbarComponent = IIIFComponents.ToolbarComponent;
    }
})(window);
