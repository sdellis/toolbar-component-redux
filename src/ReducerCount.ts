namespace IIIFComponents {

    export function count(state = 0, action) {
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

}
