<template v-for="artist in artists" :key="artist._id" :items="artists">

  <v-container>
        <v-alert
      dense
      text
      dismissible
      type="success"
      v-if="this.$route.params.message"
    >
       <strong>{{this.$route.params.fName}} {{this.$route.params.lName}}</strong>{{this.$route.params.message}}
    </v-alert>
    <v-card>
      <v-card-title class="font-weight-bold secondary--text">
        Indexed {{ artists.length }} perfomers
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      
      <v-data-table
        loading
        loading-text="Populating artists data..."
        :headers="headers"
        :items="artists"
        :search="search"
        
      >
      <template v-slot:top>
      <v-toolbar
        text
      >
        <v-toolbar-title>Artists</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
   
          <template>
            <v-btn :to="{ name: 'addartist' }"
              color="primary"
              dark
              class="mb-2"
     
            >
              New Artist
            </v-btn>
          </template>
          </v-toolbar>
    </template>
        <template #item._id="{ item }">
          <v-btn
            :to="`artist/${item._id}`"
            outlined
            class="ml-4"
            small
            color="primary darken-2"
          >
            View
          </v-btn>
        </template>

      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      search: '',
      
      headers: [
        {
          text: 'First Name',
          align: 'start',
          sortable: true,
          value: 'firstName',
        },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Stage Name', value: 'stageName' },
        { text: 'Category', value: 'category' },
        { text: 'Location', value: 'district' },
        { text: 'Band', value: 'band' },
        { text: 'Profile', value: '_id' },
      ],
      artists: [],
    };
  },

  async created() {
    this.artists = await API.getAllArtists();
  },
};
</script>
