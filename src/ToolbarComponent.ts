var Redux = require('redux');
require('virtual-dom/h');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

namespace IIIFComponents {
    export class ToolbarComponent extends _Components.BaseComponent {

        public options: IToolbarComponentOptions;
        public rootNode: any;
        public tree: any;
        private _store: any;
        private _$toolbar: JQuery;
        private _buttons: any[];

        constructor(options: IToolbarComponentOptions) {
            super(options);

            this._init();
            this._resize();
        }

        public stateChanged(new_state): void {
            this._emit(ToolbarComponent.Events.STATECHANGED, new_state);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            // Initialise the state and document/view
            const initialState = { count: 0, color: 'red' };      // We need some app data.
            this.tree = this._render(initialState);               // We need an initial tree
            this.rootNode = createElement(this.tree);     // Create an initial root DOM node ...
            document.body.appendChild(this.rootNode);    // ... and it should be in the document
            //
            // function updateView(){
            //   var newTree = render(store.getState());
            //   var patches = diff(tree, newTree);
            //   this.rootNode = patch(rootNode, patches);
            //   this.tree = newTree;
            //   // console.log(store.getState());
            //   this.stateChanged(store.getState()); //fire event
            // }

            function count(state = 0, action) {
              switch (action.type) {
                case GROW:
                  return state + action.incrementBy
                //*
                // Leaving this here for reference,
                // in case you want to return an object
                //*
                //   return Object.assign({}, state, {
                //     count: state + action.incrementBy
                //   })
                case RESET:
                  return 0
                default:
                  return state
              }
            }

            function color(state = 'red', action) {
              switch (action.type) {
                case CHANGE_COLOR:
                  return action.color
                //   return Object.assign({}, state, {
                //     color: action.color
                //   })
                default:
                  return state
              }
            }

            function app(state = initialState, action) {
                return {
                  count: count(state.count, action),
                  color: color(state.color, action)
                }
            }

            let this._store = Redux.createStore(app);

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
                this._store.dispatch(changeColor(this.value));
            });

            return success;
        }

        // Create a function that declares what the DOM should look like
        private _render(state: any)  {
            return h('div', {
                style: {
                    textAlign: 'center',
                    margin: '50px',
                    lineHeight: (100 + state.count) + 'px',
                    border: '1px solid ' + state.color,
                    width: (100 + state.count) + 'px',
                    height: (100 + state.count) + 'px'
                }
            }, [String(state.count)]);
        }

        // where we update the template
        private _updateView(): void {
            var newTree = this._render(this._store.getState());
            var patches = diff(this.tree, newTree);
            this.rootNode = patch(this.rootNode, patches);
            this.tree = newTree;
            // console.log(store.getState());
            this.stateChanged(this._store.getState()); //fire event
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
        static STATECHANGED: string = 'stateChanged';
    }
}

(function(w) {
    if (!w.IIIFComponents){
        w.IIIFComponents = IIIFComponents;
    } else {
        w.IIIFComponents.ToolbarComponent = IIIFComponents.ToolbarComponent;
    }
})(window);
