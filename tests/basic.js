var expect = require('chai').expect;
var should = require('chai').should();
var fs = require("fs");
// var component = require(__dirname + "/../dist/component-boilerplate-redux.bundle");
var component = fs.readFileSync( __dirname + "/../dist/component-boilerplate-redux.bundle.js", "utf-8");
var square = require("../dist/test");
var html = fs.readFileSync(__dirname + '/../examples/index.html', 'utf8');
var jsdom = require("jsdom");


describe('test', function() {
    it('returns a square root', function() {
        expect(square(2)).to.equal(4); // <-- passes
    });
});

describe('boilerplateRedux', function() {

    it('is false', function() {
         expect(false).to.be.true; // <-- fails
    });

    it('mounts on DOM element', function() {

        jsdom.env({
          html: html,
          scripts: [component, "http://code.jquery.com/jquery.js"],
          features: {
                FetchExternalResources: ["script"],
                ProcessExternalResources: ["script"],
                SkipExternalResources: false
            },
          done: function (err, window) {
            var $ = window.$;
            console.log("Buttons");
            $(".btn").each(function() {
              console.log(" -", $(this).text());
            });

            expect(false).to.be.true; // <-- completely ignored

          }
        });

    });

    it('true should be true', function() {
        expect(true).to.be.true; // <-- passes
    });

});
