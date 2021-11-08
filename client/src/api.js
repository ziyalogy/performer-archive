import axios from 'axios';
//import albums from "../../server/models/albums";
const url = '/api/';

export default class API{
    //To get all albums from the server
    static async getAllAlbums() {
        const res = await axios.get(url);
        return res.data;
    }
    //To get single album by ID
    static async getAlbumByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
    //To insert album into database
    static async addAlbum(album) {
        const res = await axios.post(url, album);
        return res.data;
    }
    //To update album
    static async updateAlbum(id, album) {
        const res = await axios.patch(`${url}/${id}`, album);
        return res.data;
    }
    //To delete a album 
    static async deleteAlbum(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}