const PlayList = require('../models/playlist.model')
const Podcast = require('../models/podcast.model')
const evaluateStateOfMind=(score)=>{
    if(score > 3)
        return "positive"
    else if(score>=-3 && score<=3)
        return "neutral"
    else
        return "negative"
}
module.exports={
    post:async(req,res)=>{
        const score = req.body.score
        const state = evaluateStateOfMind(score)
        try{
            console.log(state)
            const foundPlaylist = await PlayList.find({label:state})
            const foundPodcast = await Podcast.find({label:state})
            res.status(200).json({foundPlaylist,foundPodcast})
        }catch(error){
            res.status(400).json({message:"Playlist Not Found"})
        }
    }
}