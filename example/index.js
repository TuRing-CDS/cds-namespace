/**
 * Created by Z on 2016-12-03.
 */
var Ns = require("../lib");

var ns = new Ns();

var path = require("path");

ns.import(path.join(__dirname, "./api"),'你好');

var classA = ns.ns('api.demo.hello')

let a = new classA();