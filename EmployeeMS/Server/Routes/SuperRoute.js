import express from 'express'
import con from '../utils/db.js'
import  Jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import multer from 'multer'
import path from 'path'

const router = express.Router()


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

// super role giving regist



export {router as superRouter}