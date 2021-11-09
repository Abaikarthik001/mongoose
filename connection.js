const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    await mongoose.connect("mongodb+srv://abai001:<abai001>@cluster0.idpfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit");
}

module.exports = ConnectDB;
