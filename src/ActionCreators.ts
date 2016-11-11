//import * as actionTypes from './ActionTypes';
namespace IIIFComponents {
    
    export function grow(count) {
      // count++;
      return { type: GROW, count }
    }

    export function reset(count) {
      // count = 0;
      return { type: RESET, count }
    }

    export function changeColor(color) {
      // color === "red" ? "green" : "red";
      return { type: CHANGE_COLOR, color }
    }

}
