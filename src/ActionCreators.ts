//import * as actionTypes from './ActionTypes';
namespace IIIFComponents {

    export function addButton(label = "unlabeled") {
      return { type: ADD_BUTTON, label: label }
    }

    export function toggleButton(id) {
      return { type: TOGGLE_BUTTON, id }
    }

    // export function selectButton(id) {
    //   return { type: SELECT_BUTTON, id }
    // }
    //
    // export function deselectButton(id) {
    //   return { type: DESELECT_BUTTON, id }
    // }

}
