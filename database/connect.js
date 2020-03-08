const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/rishik",{
    useNewUrlParser:true,
    useUnifiedTopology:true

});

