const Redux = require('redux');
const h = require('virtual-dom/h');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');
const createElement = require('virtual-dom/create-element');

namespace IIIFComponents {
    export class ComponentBoilerplateRedux extends _Components.BaseComponent {

        public options: IComponentBoilerplateReduxOptions;
        public rootNode: any;
        public tree: any;
        private _store: any;

        constructor(options: IComponentBoilerplateReduxOptions) {
            super(options);

            this._init();
            this._resize();
        }

        // events
        public stateChanged(new_state): void {
            this._emit(ComponentBoilerplateRedux.Events.STATECHANGED, new_state);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            // Initialise the state and document/view
            const initialState = { count: this.options.size, color: this.options.color };      // We need some app data.
            this.tree = this._render(initialState);               // We need an initial tree
            this.rootNode = createElement(this.tree);     // Create an initial root DOM node ...
            //document.body.appendChild(this.rootNode);    // ... and it should be in the document
            this._$element.append(this.rootNode);

            // main reducer
            function app(state = initialState, action) {
                return {
                  count: count(state.count, action),
                  color: color(state.color, action)
                }
            }

            this._store = Redux.createStore(app);

            let unsubscribe = this._store.subscribe(() =>
              this._updateView()
            );

            // Add Event Listeners
            // Note: The only way to mutate the internal state is to dispatch an action.
            var that = this;
            $('#grow10').click(() => this._store.dispatch(grow(10)));
            $('#grow50').click(() => this._store.dispatch(grow(50)));
            $('#reset').click(() => this._store.dispatch(reset()));
            $('input[type=radio][name=color]').change(function() {
                that._store.dispatch(changeColor(this.value));
            });

            // $('#color-buttons > label').on('click', (event) => {
            //     event.stopPropagation();
            //     event.preventDefault();
            //     that._store.dispatch(changeColor($(event.currentTarget).children("input").val()));
            // });


            return success;
        }

        public getState(): any {
            return this._store.getState();
        }

        // Create a function that declares what the DOM should look like
        private _render(state: any)  {
            return h('div', {
                style: {
                    textAlign: 'center',
                    margin: '50px',
                    lineHeight: (100 + state.count) + 'px',
                    border: '1px solid ' + state.color,
                    width: (this.options.size + state.count) + 'px',
                    height: (this.options.size + state.count) + 'px'
                }
            }, [String(state.count)]);
        }

        // where we update the template
        private _updateView(): void {
            var newState = this._store.getState();
            var newTree = this._render(newState);
            var patches = diff(this.tree, newTree);
            this.rootNode = patch(this.rootNode, patches);
            this.tree = newTree;
            this.stateChanged(newState); //fire event
        }

        protected _getDefaultOptions(): IComponentBoilerplateReduxOptions {
            return <IComponentBoilerplateReduxOptions>{
                color: "red",
                size: 100
            }
        }

        protected _resize(): void {

        }
    }
}

namespace IIIFComponents.ComponentBoilerplateRedux {
    export class Events {
        static STATECHANGED: string = 'stateChanged';
    }
}

(function(g) {
    if (!g.IIIFComponents){
        g.IIIFComponents = IIIFComponents;
    } else {
        g.IIIFComponents.ComponentBoilerplateRedux = IIIFComponents.ComponentBoilerplateRedux;
    }
})(global);
