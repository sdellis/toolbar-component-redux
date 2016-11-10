declare var Redux: any;

namespace IIIFComponents {
    export class ToolbarComponent extends _Components.BaseComponent {

        public options: IToolbarComponentOptions;
        private _$toolbar: JQuery;
        private _buttons: any[];

        constructor(options: IToolbarComponentOptions) {
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
            this._buttons = this.options.buttons;

            var that = this;

            //this._$toolbar = $('<div id="toolbar" class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups"/>');
            this._$toolbar = $('<div id="group" class="btn-group" role="group" aria-label="Toolbar button group"/>');
            this._$element.append(this._$toolbar);

            $.templates({
                toolbarButtonsTemplate: '\
                {^{for _buttons}}\
                    <button type="button" data-link="class{:selected?\'btn btn-secondary active\:\'btn btn-secondary\'}">\
                    {{:label}}</button>\
                {{/for}}'
            });
            //this._$element.append("I am a toolbar that is " + this.options.orientation + ", with these buttons: " + this.options.buttons.join(","));
            $.templates.toolbarButtonsTemplate.link(this._$toolbar, this);

            $(".btn").on("click", function() {
              // From the clicked HTML element ('this'), get the view object
              var view = $.view(this);
              //console.log(view);
              // The 'button' data object for clicked button
              var button = view.data;

              // The index of this 'item view'. (Equals index of button in buttons array)
              var index = view.index;
              console.log(index);
              // Change the button.label
              $.observable(button).setProperty("selected", !button.selected);
              //$.observable(that._buttons[index]).setProperty("selected", !that._buttons[index].selected);
              console.log(that._buttons);
              //$.observable(this._buttons).setProperty("label", button.label + " " + index);
              //
            //   $.observable(that._buttons).refresh(
            //     that._buttons.slice().reverse() // copy array and reverse it
            //   );
            /*
              $.observable(that._buttons).insert(
                { label: "new button", icon: "new", selected: false, disabled: true } // copy array and reverse it
              );
              */
            });

            return success;
        }

        protected _getDefaultOptions(): IToolbarComponentOptions {
            return <IToolbarComponentOptions>{
                orientation: "vertical",
                buttons: ["easy"],
                hidden: false
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
