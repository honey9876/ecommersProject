const mongoose = require('mongoose');



// mongoose.connect("mongodb//127.0.0.1:27017/ecommersshoping");


const userSchema = mongoose.Schema({

    fullname: {
        type: String,
        trim: true,
        minLength: 3,
    },
    email: String,
    password: String,
    card :{
        type: Array,
        default: []
    },
    isadmin : Boolean,
    orders : {
        type: Array,
        default: [],

    },
    contact : Number,
    picture : String,
});


module.exports = mongoose.model("user", userSchema);