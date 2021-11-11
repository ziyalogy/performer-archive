import axios from 'axios';
//import albums from "../../server/models/albums";
const albumsUrl = '/api/albums';
const albumUrl = '/api/album';
const artistsURL = '/api/artists'
const artistURL = '/api/artist'
const bandsURL = '/api/bands'
const bandURL = '/api/band'
const labelsURL = '/api/labels'
const labelURL = '/api/label'


export default class API{

    //Get all artists from the server
    static async getAllArtists() {
        const res = await axios.get(artistsURL);
        return res.data;
    }
    //Get single artist by ID from the server
    static async getArtistByID(id) {
        const res = await axios.get(`${artistURL}/${id}`);
        return res.data;
    }
    //Add artist to the server
    static async addArtist(artist) {
        const res = await axios.post(artistURL, id);
        return res.data;
    }
    //Ppdate artist to the server
    static async updateArtist(id, artist) {
        const res = await axios.patch(`${artistURL}/${id}`, artist);
        return res.data;
    }
    //Delete single artist by ID from the server
    static async deleteArtist(id) {
        const res = await axios.delete(`${artistURL}/${id}`);
        return res.data;
    }


    //Get all Bands from the server
    static async getAllBands() {
        const res = await axios.get(bandsURL);
        return res.data;
    }

    //Get all Labels from the server
    static async getAllLabels() {
        const res = await axios.get(labelsURL);
        return res.data;
    }

    //To get all albums from the server
    static async getAllAlbums() {
        const res = await axios.get(albumsUrl);
        return res.data;
    }
    //To get single album by ID
    static async getAlbumByID(id) {
        const res = await axios.get(`${albumUrl}/${id}`);
        return res.data;
    }
    //To insert album into database
    static async addAlbum(album) {
        const res = await axios.post(albumUrl, album);
        return res.data;
    }
    //To update album
    static async updateAlbum(id, album) {
        const res = await axios.patch(`${albumUrl}/${id}`, album);
        return res.data;
    }
    //To delete a album 
    static async deleteAlbum(id) {
        const res = await axios.delete(`${albumUrl}/${id}`);
        return res.data;
    }
}