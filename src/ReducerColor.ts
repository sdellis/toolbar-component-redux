
namespace IIIFComponents {

    export function color(state = 'red', action) {
      switch (action.type) {
        case CHANGE_COLOR:
          return action.color
        default:
          return state
      }
    }

}
