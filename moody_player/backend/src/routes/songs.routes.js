const express = require('express')
const multer = require('multer')
const uploadFile = require('../service/storage.service')
const router = express.Router()

const upload = multer({storage: multer.memoryStorage()}) //So that form-data can read this

router.post('/songs', upload.single("song"),async (req, res)=>{ // array for multiplr files instead of single

    console.log(req.body);
    console.log(req.file) //buffer is the actual data
    const filedata = await uploadFile(req.file)
    console.log(filedata)

res.status(201).json({
    message: "Song created successfully",
    song: req.body
})
})

//Imagekit is a cloud storage provider that we used 


module.exports = router