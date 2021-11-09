<template v-slot:default="{ hover }">
  <v-container>
    <v-row dense>
      <v-alert
        v-model="alert"
        border="bottom"
        close-text="Close Alert"
        color="accent"
        dark
        dismissible
      >
        The task is to create a national performing artists' archive for the National Cultural Center in
        conjuction with Uganda Perfrming Arts Association of Uganda. The system should cover performing artists, bands and record lables.
      </v-alert>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5"> HIRING: Data Clerks </v-card-title>

          <v-card-subtitle
            >UgaaMUX is the largest archive of information on Ugandan performers, bands and record label. We are growing and are in need of data clerks.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn class="primary" text> Apply Today </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="#385F73" dark>
          <v-card-title class="text-h5"> Add your legacy to the record! </v-card-title>

          <v-card-subtitle
            >Are you a performing artist in Uganda? UgaaMUX looks forward to adding your legendary name to our growing archive.</v-card-subtitle
          >

          <v-card-actions>
            <v-btn class="primary" text> Add your profile </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mt-2 mx-auto" cols="4">
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

          <v-btn class="ml-4" small color="secondary">
            Explore 6,760 performers
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

          <v-btn class="ml-4" small color="secondary">
            Explore 1,000 bands
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

          <v-btn class="ml-4" small color="secondary">
            Explore 30 Labels
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
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Home',
  overlay: false,
};
</script>
