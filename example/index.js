/**
 * Created by Z on 2016-12-03.
 */
var Ns = require("../lib");

var ns = new Ns();

var path = require("path");

ns.import(path.join(__dirname,"./api"));

let classHello = ns.ns("api.demo.hello");

let hello = new classHello();