const express = require('express');
const router = express.Router();
const API = require('../controllers/api');
const multer = require('multer');

//Multer middleware to handle file uploads
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single('artImage');

//Album routes
router.get('/', API.fetchAllAlbums);
router.get('/:id', API.fetchAlbumByID);
router.post('/', upload, API.createAlbum);
router.patch('/:id', upload, API.updateAlbum);
router.delete('/:id', API.deleteAlbum);

//Artist routes
//Band routes
//Record label routes
//Song routes
//User routes

module.exports = router;