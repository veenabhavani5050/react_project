const app = require ('./app');
const mogoose =require('mongoose');
require('dotenv').config();


mogoose.connect(process.env.MONGODB_URI)
.then(()=>{
console.log("successfully mongodb connected");

}).catch((err)=>{
console.log(`mongodb connection failed ${err.message}`);

})

app.listen(3001,'127.0.0.1',()=>{
console.log("The server is running http//127.0.0.1:3001");
})



