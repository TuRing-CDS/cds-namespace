/**
 * Created by Z on 2016-12-03.
 */
module.exports = function (ns) {
    ns("api.demo.hello",class a{
        constructor(){
            let bClass = ns("api.demo.b");
            this.b = new bClass('hello')
            this.b.run();
        }
    })
}