<template v-slot:default="{ hover }">
  <v-container fluid>
    <v-row dense>
      <v-alert
        v-model="alert"
        border="bottom"
        close-text="Close Alert"
        color="accent"
        dark
        dismissible
        class="white--text darken-4"
      >
        The task is to create a national performing artists' archive for the
        National Cultural Center in conjuction with Uganda Perfrming Arts
        Association of Uganda. The system should cover performing artists, bands
        and record lables.
      </v-alert>
    </v-row>
    <v-row dense align="stretch">
      
      
      <v-col class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
        <v-card outlined color="secondary" dark>
          <v-card-title class="text-h5"> We are hiring Data Clerks </v-card-title>

          <v-card-subtitle
            >UgaaMUX is the largest archive of information on Ugandan
            performers, bands and record label. We are growing and are in need
            of data clerks.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn class="secondary lighten-1" text> Apply Today </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
        <v-card color="secondary" dark>
          <v-card-title class="text-h5">
            Add your legacy to the record!
          </v-card-title>

          <v-card-subtitle
            >Are you a performing artist in Uganda? UgaaMUX looks forward to
            adding your legendary name to our growing archive.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn class="secondary lighten-1" text> Add your profile </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
       
    </v-row>

    <v-layout row wrap>
      <v-col class="mt-2" cols="4">
        <v-card :to="{ name: 'artists' }" class="mx-auto">
          <v-card-title class="secondary white--text"
            >Artists and Performers</v-card-title
          >
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="https://www.sqoop.co.ug/wp-content/uploads/2020/12/132381721_1866586133493256_185363865906333222_n.jpg"
          >
          </v-img>

          <v-btn class="ml-4" outlined small color="secondary">
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
      <v-col class="mt-2 mx-auto" cols="4">
        <v-card :to="{ name: 'bands' }" class="mx-auto">
          <v-card-title class="secondary white--text"
            >Bands and Music Groups
          </v-card-title>
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="https://eagle.co.ug/wp-content/uploads/2017/05/Afrigo-Band-does-their-thing-768x512.jpg"
          >
          </v-img>

          <v-btn class="ml-4" outlined small color="secondary">
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
      <v-col class="mt-2 mx-auto" cols="4">
        <v-card :to="{ name: 'labels' }" class="mx-auto">
          <v-card-title class="secondary white--text"
            >Record Labels and Distribution
          </v-card-title>
          <v-img
            class="white--text mb-3 align-end"
            height="200px"
            src="https://www.sqoop.co.ug/wp-content/uploads/2019/11/zawi.jpg"
          >
          </v-img>

          <v-btn flat outlined class="ml-4" small color="secondary">
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
