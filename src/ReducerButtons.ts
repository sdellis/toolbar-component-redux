namespace IIIFComponents {

    export function buttons(state = [], action) {
      switch (action.type) {
        case ADD_BUTTON:
          return [
            ...state,
            {
              label: action.label,
              selected: false
            }
          ]
        case TOGGLE_BUTTON:
          return state.map((button, index) => {
            if (button.id === action.id) {
              return Object.assign({}, button, {
                selected: !button.selected
              })
            }
            return button
          })
        default:
          return state
      }
    }


}
