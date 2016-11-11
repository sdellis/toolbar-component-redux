var Redux = require('redux');
require('virtual-dom/h');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

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

            // Create a function that declares what the DOM should look like
            function render(state)  {
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

            // Initialise the state and document/view
            const initialState = { count: 0, color: 'red' };      // We need some app data.
            var tree = render(initialState);               // We need an initial tree
            var rootNode = createElement(tree);     // Create an initial root DOM node ...
            document.body.appendChild(rootNode);    // ... and it should be in the document

            function updateView(){
              var newTree = render(store.getState());
              var patches = diff(tree, newTree);
              rootNode = patch(rootNode, patches);
              tree = newTree;
              console.log(store.getState());
              // emit event
            }

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

            let store = Redux.createStore(app)

            let unsubscribe = store.subscribe(() =>
              updateView()
            )

            // Add Event Listeners
            // Note: The only way to mutate the internal state is to dispatch an action.
            $('#grow10').click(() => store.dispatch(grow(10)));
            $('#grow50').click(() => store.dispatch(grow(50)));
            $('#reset').click(() => store.dispatch(reset()));
            $('input[type=radio][name=color]').change(function() {
                store.dispatch(changeColor(this.value));
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
