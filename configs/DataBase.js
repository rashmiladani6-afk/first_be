const mongoose = require("mongoose");

function DBconnection(){

    // CONNECTION OF DATABASE AND SERVER

mongoose.connect(process.env.DB_CONNECTION)
.then(() => {
    console.log("DATABASE CONNECTION IS DONE...")
})
.catch((error) => {
    console.log(error);   
})

}

module.exports = {DBconnection}