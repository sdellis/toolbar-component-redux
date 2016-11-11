//import * as actionTypes from './ActionTypes';
namespace IIIFComponents {

    export function grow(i = 1) {
      return { type: GROW, incrementBy: i }
    }

    export function reset() {
      return { type: RESET }
    }

    export function changeColor(c = "red") {
      return { type: CHANGE_COLOR, color: c }
    }

}
