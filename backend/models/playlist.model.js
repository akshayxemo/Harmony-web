const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  playListModel = new Schema({
    url: {type:String, require:true},
    label:{type:String, require:true}
})

const PlayList = mongoose.model("PlayList", playListModel)

module.exports = PlayList