<template v-slot:default="{ hover }">
  <v-container fluid>
    <v-row dense>
      <v-col class="mt-1" cols="12" xs="12" sm="12" md="12">
      <v-alert
        v-model="alert"
        border="bottom"
        close-text="Close Alert"
        color="primary"
        dark
        dismissible
        class="dark--text darken-3"
      >
        A national performing artists' archive for the National Cultural Center
        in conjuction with Uganda Performing Arts Association of Uganda.
      </v-alert>
      </v-col>
    </v-row>
    <v-layout row wrap>
      <v-col class="mt-0" cols="12" xs="12" sm="12" md="4">
        <v-card :to="{ name: 'artists' }" class="mx-auto">
          <v-card-title class="primary darken-2 white--text"
            >Artists and Performers</v-card-title
          >
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="../assets/artists.jpg"
          >
          </v-img>

          <v-btn class="ml-4" outlined small color="primary">
            Discover {{ artists.length }} performers
          </v-btn>

          <v-card-text class="text--primary">
            <div>
              Dig into our comprehensive archive of Ugandan musicians,
              performers, producers and lyricicts from as far back as the 40s.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="4">
        <v-card :to="{ name: 'bands' }" class="mx-auto">
          <v-card-title class="primary darken-2 white--text"
            >Bands and Music Groups
          </v-card-title>
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="../assets/bands.jpg"
          >
          </v-img>

          <v-btn class="ml-4" outlined small color="primary">
            Explore {{ bands.length }} bands
          </v-btn>

          <v-card-text class="text--primary">
            <div>
              We have curated the largest list of performing bands and groups
              that have entertained and educated Uganda in the last century.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="4">
        <v-card :to="{ name: 'labels' }" class="mx-auto">
          <v-card-title class="primary darken-2 white--text"
            >Record Labels and Distribution
          </v-card-title>
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="../assets/labels.jpg"
          >
          </v-img>

          <v-btn flat outlined class="ml-4" small color="primary">
            Explore {{ labels.length }} Labels
          </v-btn>

          <v-card-text class="text--primary">
            <div>
              Do you know who introduced the legends and who manages the new
              school? Sift through our archive on historic and leading record
              labels.
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      artists: [],
      bands: [],
      labels: [],
    };
  },
  async created() {
    this.artists = await API.getAllArtists();
    this.bands = await API.getAllBands();
    this.labels = await API.getAllLabels();
  },
};
</script>
