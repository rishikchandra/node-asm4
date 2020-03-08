
const mongoose= require ('mongoose');

const Schema = mongoose.Schema;
const details = new Schema({
    id:Number,
    name: String,
    collegename: String
});

const College = mongoose.model('table1',details);
module.exports =College;
