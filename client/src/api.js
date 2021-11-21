import axios from 'axios';
const artistsURL = '/api/artists'
const artistURL = '/api/artist'

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
        const res = await axios.post(artistURL, artist);
        return res.data;
    }
    //Update artist to the server
    static async updateArtist(id, artist) {
        const res = await axios.patch(`${artistURL}/${id}`, artist);
        return res.data;
    }
    //Delete single artist by ID from the server
    static async deleteArtist(id) {
        const res = await axios.delete(`${artistURL}/${id}`);
        return res.data;
    }

}