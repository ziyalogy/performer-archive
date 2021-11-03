<template>
    <v-container>
        <v-row no-gutter>
            <v-col sm-10 class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Edit "{{album.title}}" by {{album.artist}}.</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Title" v-model ="album.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                    <v-text-field label="Album artist" v-model ="album.artist" prepend-icon="mdi-account-multiple-plus " :rules="rules"></v-text-field>
                    <v-text-field label="Year Released" v-model ="album.yearReleased" prepend-icon="mdi-calendar-range " :rules="rules"></v-text-field>
                    <v-textarea label="Description" v-model ="album.description" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                    <v-text-field label="Featured artists" v-model ="album.artists" prepend-icon="mdi-account-group" :rules="rules"></v-text-field>
                    <v-text-field label="Songs" v-model ="album.songs" prepend-icon="mdi-music-box-multiple" :rules="rules"></v-text-field>
                    <v-text-field label="Label" v-model ="album.label" prepend-icon="mdi-shopping-music" :rules="rules"></v-text-field>
                    <v-text-field label="Copyright" v-model ="album.copyright" prepend-icon="mdi-copyright" :rules="rules"></v-text-field>
                    <v-file-input @change="selectFile" label="Album art" show-size counter multiple prepend-icon="mdi-image-plus" ></v-file-input>
                    <v-img :src="`/${album.artImage}`" width="120"></v-img>
                    <v-btn type="submit" class="mt-3" color="success">Update album</v-btn>
                    </v-form>
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
         rules: [(value)=>!!value || "This field is required"],
         album:{
             title: "",
             artist:"",
             artImage: "",
             description: "",
             yearReleased:"",
             artists:"",
             songs:"",
             copyright:"",
             label:""
         },
         artImage:"",
     };
    },
    async created(){
        const response = await API.getAlbumByID(this.$route.params.id);
        this.album = response;
    },
    methods:{
        selectFile(file){
            this.artImage = file[0];
        },
        async updateForm(){
            const formData = new FormData();
            formData.append('artImage', this.artImage);
            formData.append('title', this.album.title);
            formData.append('artist', this.album.artist);
            formData.append('description', this.album.description);
            formData.append('yearReleased', this.album.yearReleased);
            formData.append('artists', this.album.artists);
            formData.append('songs', this.album.songs);
            formData.append('copyright', this.album.copyright);
            formData.append('label', this.album.label);
            formData.append('oldArtImage', this.album.artImage);
            if(this.$refs.form.validate()){
                const response = await API.updateAlbum(this.$route.params.id, formData);
                this.$router.push({ name: 'home', params: { message: response.message}});
            }
        },
    },
};
</script>