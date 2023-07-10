const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  podcastModel = new Schema({
    url: {type:String, require:true},
    label:{type:String, require:true}
})

const Podcast = mongoose.model("Podcast", podcastModel)

module.exports = Podcast