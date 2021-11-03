const Album = require('../models/albums');
const fs = require('fs');

module.exports = class API {
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
      }
      catch (err) {
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
      } catch (err){
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
          } catch (err){
              console.log(err);
          }
      }else {
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
                  fs.unlinkSync('./uploads/'+ result.artImage);
              } catch (err) {
                  console.log(err);
              }
          }
          res.status(200).json({ message: 'Album deleted successfully' });
      } catch (err) {
          res.status(404).json({ message: err.message });
      }
  }
};
