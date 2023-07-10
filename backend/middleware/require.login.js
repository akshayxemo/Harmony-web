const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {User}= require('../models/user.model')

module.exports=(req,res,next)=>{
    const{authorization} = req.header
    if(!authorization){
        return res.status(401).json({message:"You must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.varify(token,process.env.JWT_SECRET_KEY,(error, payload)=>{
        if(error){
            return res.status(401).json({message:"you must be logged in"})
        }
        const {_id} = payload
        User.findById(_id).then(foundUserData=>{
            req.user = foundUserData
            next()
        })
    })
}