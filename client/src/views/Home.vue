<template>
  <v-container> 
    <v-alert border="left" close-text="Close alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="3" class="pa-3" v-for="album in albums" :key="album._id" >
        <v-card class="pa-1" :to="{ name:'album', params: {id: album._id} }">
          <v-img height="250" :src="`/${album.artImage}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{album.artist}}
          </v-btn>
          <v-card-title class="headline">
            {{album.title}} 
          </v-card-title>
          <v-card-text class="py-0">
            <!--<p>{{ album.description.substring(0, 100)+'...'}}</p>-->{{album.yearReleased}} 
            <p class="ml-4 mt-3" small outlined color="indigo">{{album.label}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row> 
  </v-container>
</template>

<script>
import API from '../api';
export default {
  name: 'Home',
  data() {
    return {
      albums: [],
    };
  },
  async created() {
    this.albums = await API.getAllAlbums();
  },
};
</script>
