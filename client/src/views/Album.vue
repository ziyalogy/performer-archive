<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm-10 class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${album.artImage}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{ album.artist}}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success ml-1" text :to="{ name: 'edit-album', params: { id:album._id}}">Edit</v-btn>
                                <v-btn color="red" text @click="removeAlbum(album._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ album.title }} released in {{ album.yearReleased}} under {{ album.label}}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey-text">
                        <p>{{ album.description}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api';
export default {
    data() {
        return{
            album:{},
        }
    },
    async created(){
        const response = await API.getAlbumByID(this.$route.params.id);
        this.album = response;
    },
    methods:{
        async removeAlbum(id){
            const response = await API.deleteAlbum(id);
            this.$router.push({ name: 'home', params: { message: response.message}});
        }
    }
};
</script>
