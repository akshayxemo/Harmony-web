const router = require('express').Router()
const sentimentAnalysis = require('../controllers/sentimentAnalysisController')
const audioRecomander = require('../controllers/audioRecomanderController')

router.post('/api/sentiment', sentimentAnalysis.post)
router.post('/api/audio-recomendation', audioRecomander.post)

module.exports=router

