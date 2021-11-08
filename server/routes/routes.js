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
    cb(
      null,
      'ugmx_' + file.fieldname + '_' + Date.now() + '_' + file.originalname
    );
  },
});

let upload = multer({
  storage: storage,
}).single('artImage');

let uploadArtistImg = multer({
  storage: storage,
}).single('artistImage');

let uploadBandLogo = multer({
    storage: storage,
}).single('logo');
  
let uploadLabelLogo = multer({
    storage: storage,
}).single('logoOflabel');
  
//API root
router.get('/', API.apiHome);

//Artist routes
router.get('/artists', API.fetchAllArtists);
router.get('/artist/:id', API.fetchArtistByID);
router.post('/artist/', uploadArtistImg, API.addArtist);
router.patch('/artist/:id', uploadArtistImg, API.updateArtist);
router.delete('/artist/:id', API.deleteArtist);

//Band routes
router.get('/bands', API.fetchAllBands);
router.get('/band/:id', API.fetchBandByID);
router.post('/band/', uploadBandLogo, API.addBand);
router.patch('/band/:id', uploadBandLogo, API.updateBand);
router.delete('/band/:id', API.deleteBand);

//Album routes
router.get('/albums', API.fetchAllAlbums);
router.get('/album/:id', API.fetchAlbumByID);
router.post('/album/', upload, API.createAlbum);
router.patch('/album/:id', upload, API.updateAlbum);
router.delete('/album/:id', API.deleteAlbum);

//Record label routes
router.get('/labels', API.fetchAllLabels);
router.get('/label/:id', API.fetchLabelByID);
router.post('/label/', uploadLabelLogo, API.addLabel);
router.patch('/label/:id', uploadLabelLogo, API.updateLabel);
router.delete('/label/:id', API.deleteLabel);

//Song routes
//User routes

module.exports = router;
