/**
 * Created by Z on 2016-12-03.
 */
module.exports = function (ns) {
    let bClass = ns("api.demo.b");
    ns("api.demo.hello",class a{
        constructor(){
            this.b = new bClass('hello')
            this.b.run();
        }
    })
}