const path = require('path');

const config ={
    entry:{
        bundle:'./src/index.js', // diem bat dau
    },
    output:{
        filename:'bundle.js',
        path: path.join(__dirname,'build')
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                exclude:'/node_modules/',
                test:/\.js$/
            }
        ]
    }
    
}
module.exports = config