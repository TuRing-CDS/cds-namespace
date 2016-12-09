/**
 * Created by Z on 2016-12-03.
 */
"use strict"
const fs = require("fs");
const path = require("path");
const debug = require("debug")("cds-namespace")
class Namespace {
    constructor(root) {
        this.root = root;
        this.modules = {};
        this.imports = {};
        this.fields = [];
    }

    import() {
        let tmpArray = [].slice.call(arguments);
        let dirpath = tmpArray.shift();
        if (this.imports[dirpath]) {
            return;
        }
        var self = this;
        this.walkDir(dirpath).forEach(function (item) {
            let reg = /.js$/;
            if (reg.exec(item)) {
                let fn = require(item);
                self.fields.push(item);
                if ('function' == typeof(fn)) {
                    // fn(self.ns.bind(self))
                    fn.apply(this, [self.ns.bind(self)].concat(tmpArray));
                } else {
                    debug(`...文件 ${item} 是加载进来了,但是我特么的该怎么处理~`)
                }
            } else {
                debug(`...原谅我,我只加载js文件 ${item} 文件未加载`)
            }
        });
    }

    walkDir(filepath) {
        let result = [];
        let fields = fs.readdirSync(filepath);
        for (let i in fields) {
            let item = fields[i];
            let tmpFile = path.join(filepath, item);
            let stat = fs.statSync(tmpFile);
            if (stat.isDirectory()) {
                result = result.concat(this.walkDir(tmpFile))
            } else {
                result.push(tmpFile)
            }
        }
        return result;
    }

    ns(name, fn) {
        if (!fn) {
            return this.modules[name];
        } else {
            if (this.modules[name]) {
                throw new Error(`ns ${name} is already exist!`);
            } else {
                this.modules[name] = fn;
            }
        }
    }
}

module.exports = Namespace;