# cds-namespace

## How to use 

    npm install cds-namespace --save
    
    
### Example

    const path = require('path')
    const Ns = require('cds-namespace')
    const ns = new Ns();
    ns.import(path.join(__dirname,'./apis'))
    
    let temp = ns.ns('xxxx')
    
    