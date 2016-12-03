/**
 * Created by Z on 2016-12-03.
 */
module.exports = function (ns) {
    ns("api.demo.b", class b {
        constructor(name) {
            this.name = name;
        }
        run() {
            console.log(this.name);
        }
    })
}