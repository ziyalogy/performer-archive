const Album = require('../models/album');
const Artist = require('../models/artist');
const Band = require('../models/band');
const Label = require('../models/label');


const fs = require('fs');
//const routes = require('../routes/routes');

module.exports = class API {
  //api root
  static async apiHome(req, res) {
    res.send('You are now tuned in to the fancy UgaMUX API ;-)');
  }
  
  /* A R T I S T S*/

  //fetch all artists
  static async fetchAllArtists(req, res) {
    try {
      const artists = await Artist.find();
      res.status(200).json(artists);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //fetch artist by ID
  static async fetchArtistByID(req, res) {
    const id = req.params.id;
    try {
      const artist = await Artist.findById(id);
      res.status(200).json(artist);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Create an artist
  static async addArtist(req, res) {
    const artist = req.body;
    const profileImage = req.file.filename;
    artist.artistImage = profileImage;

    try {
      await Artist.create(artist);
      res.status(201).json({ message: 'Artist added successfully.' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  //Update an artist
  static async updateArtist(req, res) {
    const id = req.params.id;
    let newArtistImage = '';
    if (req.file) {
      newArtistImage = req.file.filename;
      try {
        fs.unlinkSync('./uploads' + req.body.oldArtistImage);
      } catch (err) {
        console.log(err);
      }
    } else {
      newArtistImage = req.body.oldArtistImage;
    }
    const artistUpdate = req.body;
    artistUpdate.artistImage = newArtistImage;

    try {
      await Artist.findByIdAndUpdate(id, artistUpdate);
      res
        .status(200)
        .json({ message: 'Artist information updated successfully.' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Delete an artist
  static async deleteArtist(req, res) {
    const id = req.params.id;
    try {
      const result = await Artist.findByIdAndDelete(id);
      if (result.artistImage != '') {
        try {
          fs.unlinkSync('./uploads/' + result.artistImage);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'Artist deleted successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }


  /* B A N D S */
  //fetch all bands
  static async fetchAllBands(req,res){
    try {
      const bands = await Band.find();
      res.status(200).json(bands);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //fetch band by ID
  static async fetchBandByID(req,res){
    const id = req.params.id;
    try {
      const band = await Band.findById(id);
      res.status(200).json(band);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //add a band
  static async addBand(req,res){
    const band = req.body;
    const bandLogo = req.file.filename;
    band.logo = bandLogo;
    try {
      await Band.create(band);
      res.status(201).json({ message: 'Band added successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //Update a band
  static async updateBand(req,res){
    const id = req.params.id;
    let newLogo = '';
    if (req.file) {
      newLogo = req.file.filename;
      try {
        fs.unlinkSync('./uploads' + req.body.oldLogo);
      } catch (err) {
        console.log(err);
      }
    } else {
      newLogo = req.body.oldLogo;
    }
    const newBand = req.body;
    newBand.logo = newLogo;
    try {
      await Band.findByIdAndUpdate(id, newBand);
      res.status(200).json({ message: 'Band updated successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //Delete a band
  static async deleteBand(req,res){
    const id = req.params.id;
    try {
      const result = await Band.findOneAndDelete(id);
      if (result.logo != '') {
        try {
          fs.unlinkSync('./uploads' + result.logo);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'Band removed successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  /* A L B U M S*/

  //Fetch all albums
  static async fetchAllAlbums(req, res) {
    try {
      const albums = await Album.find();
      //status 200 means everything is working fine
      res.status(200).json(albums);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Fetch album by ID
  static async fetchAlbumByID(req, res) {
    const id = req.params.id;
    try {
      const album = await Album.findById(id);
      res.status(200).json(album);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Create an Album
  static async createAlbum(req, res) {
    const album = req.body;
    const coverArtImage = req.file.filename;
    album.artImage = coverArtImage;
    try {
      await Album.create(album);
      //status 201 means item has been created
      res.status(201).json({ message: 'Album added successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  //Update an Album
  static async updateAlbum(req, res) {
    const id = req.params.id;
    let newArtImage = '';
    if (req.file) {
      newArtImage = req.file.filename;
      try {
        fs.unlinkSync('./uploads/' + req.body.oldArtImage);
      } catch (err) {
        console.log(err);
      }
    } else {
      newArtImage = req.body.oldArtImage;
    }
    const newAlbum = req.body;
    newAlbum.artImage = newArtImage;
    try {
      await Album.findByIdAndUpdate(id, newAlbum);
      res.status(200).json({ message: 'Album updated successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Delete an Album
  static async deleteAlbum(req, res) {
    const id = req.params.id;

    try {
      const result = await Album.findByIdAndDelete(id);
      if (result.artImage != '') {
        try {
          fs.unlinkSync('./uploads/' + result.artImage);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'Album deleted successfully' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  /** L A B E L S  */
  //fetch all labels
  static async fetchAllLabels(req, res) {
    try {
      const labels = await Label.find();
      res.status(200).json(labels);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //Get labels by ID
  static async fetchLabelByID(req, res) {
    const id = req.params.id;
    try {
      const label = await Label.findById(id);
      res.status(200).json(label);
    } catch (err) {
      res.status(404).json({message: err.message});
    }
  }
  //Add a label
  static async addLabel(req, res) {
    const label = req.body;
    const labelLogo = req.file.filename;
    label.logoOflabel = labelLogo;
    try {
      await Label.create(label);
      res.status(201).json({ message: 'Record Label has been added successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  //Update a label
  static async updateLabel(req, res) {
    const id = req.params.id;
    let newLabelLogo = '';
    if (req.file) {
      newLabelLogo = req.file.filename;
      try {
        fs.unlinkSync('./uploads/' + req.body.oldLabelLogo)
      } catch (err) {
        console.log(err);
      }
    } else {
      newLabelLogo = req.body.oldLabelLogo;
    }
    const newLabel = req.body;
    newLabel.logo = newLabelLogo;

    try {
      await Label.findByIdAndUpdate(id, newLabel);
      res.status(200).json({ message: 'Record label updated successfully.' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  //Delete a label
  static async deleteLabel(req, res) {
    const id = req.params.id;
    try {
      const result = await Label.findByIdAndDelete(id);
      if (result.logo != '') {
        try {
          fs.unlinkSync('./uploads/' + result.logo);
        } catch (err) {
          console.log(err);
        }
      }
      res.status(200).json({ message: 'Record label removed successfully.' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

};
