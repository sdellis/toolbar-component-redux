// var component = require('../dist/component-boilerplate-redux.bundle');
// var TinyEmitter = require('../node_modules/tiny-emitter/dist/tinyemitter')
// var component = require('../examples/js/base-component.bundle');
// var TinyEmitter;

var expect = require('chai').expect;
var should = require('chai').should();


describe('#testTest', function() {
    it('true should be true', function() {
        expect(true).to.be.true;
    });
});

// var boilerplateRedux = new IIIFComponents.ComponentBoilerplateRedux({
//     element: "#boilerplate-redux",
//     color: "blue", // or "vertical"
//     size: 100
// });
//
// describe('#changesState', function() {
//
//     it('should fire an event', function(done) {
//         var eventFired = false
//         setTimeout(function () {
//           assert(eventFired, 'Event did not fire in 1000 ms.');
//           done();
//         }, 1000); //timeout with an error in one second
//
//         boilerplateRedux.on('stateChanged', function(args) {
//             eventFired = true
//         });
//
//         // do something that should trigger the event
//         boilerplateRedux._store.dispatch(grow(10));
//
//         expect(eventFired).to.be.true;
//     });
//
// });
