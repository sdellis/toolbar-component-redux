var expect = require('chai').expect;
var should = require('chai').should();
require("../examples/js/base-component");
require("../examples/js/component-boilerplate-redux");


// this is an example of unit testing a basic commonjs module
describe('test', function() {
    it('returns a square root', function() {
        expect(square(2)).to.equal(4); // <-- passes
    });
});

// this is an example of testing the component in the "browser"
describe('boilerplateRedux', function() {
    var foo = false;

    beforeEach(function(){

        var boilerplateRedux = new component.IIIFComponents.ComponentBoilerplateRedux({
                element: "#boilerplate-redux",
                color: "blue",
                size: 100
            });

        foo = true;
        console.log(boilerplateRedux);

    });

    /*//////////
    // tests
    *///////////

    it('foo should be true', function() {
        expect(foo).to.be.true; // <-- passes
    });

});
