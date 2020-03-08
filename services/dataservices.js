
const mongoose= require ('mongoose');

const Schema = mongoose.Schema;
const details = new Schema({
    id:Number,
    name: String,
    collegename: String
});

//127.0.0.1:27017/task-manager-api
const College = mongoose.model('table1',details);
module.exports =College;
