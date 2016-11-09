namespace IIIFComponents {
    export class ToolbarButton {

        public $wrapper: JQuery;
        public options: any;
        private default_opts: any = {
            label: "easy",
            icon: "e",
            selected: false,
            disabled: false
        };
        private store: any;

        private label: string;
        private icon: string;
        private selected: boolean;
        private disabled: boolean;


        constructor(options) {
            this.options = $.extend(this.default_opts, options);
            this.label = this.options.label;
            this.icon = this.options.icon;
            this.selected = this.options.selected;
            this.disabled = this.options.disabled;
        }

    }
}
