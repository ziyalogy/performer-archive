<template>
  <v-container>
    <v-row justify="space-around" class="mt-4 ml-4 mr-4">
      <v-col cols="12" sm="6" md="8">
        <v-card width="auto">
          <v-img
            cover
            height="200px"
            src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?crop=entropy&cs=srgb&dl=pexels-wendy-wei-1387174.jpg&fit=crop&fm=jpg&h=853&w=1280"
          >
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-toolbar-title class="text-h6 white--text pl-0">
                Professional {{ artist.category }}
              </v-toolbar-title>
            </v-app-bar>

            <v-card-title class="white--text mb-4">
              <div v-if="artist.artistImage">
                <v-avatar size="100">
                  <v-img :src="`/${artist.artistImage}`"></v-img>
                </v-avatar>
              </div>
              <div v-else>
                <div class="v-list-item__icon">
                  <i
                    aria-hidden="true"
                    class="
                      v-icon
                      notranslate
                      darken-4
                      display-4
                      textcolor--text
                      mdi mdi-account-tie-voice-outline
                      theme--light
                    "
                  ></i>
                </div>
              </div>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div
              v-if="artist.stageName"
              class="font-weight-bold ml-0 secondary--text mb-2"
            >
              <h3>
                {{ artist.firstName }} {{ artist.middleName }}
                {{ artist.lastName }} {{ artist.otherName }} known
                professionally as "{{ artist.stageName }}".
              </h3>
            </div>
            <div v-else class="font-weight-bold ml-0 secondary--text mb-2">
              <h1>
                {{ artist.firstName }} {{ artist.middleName }}
                {{ artist.lastName }} {{ artist.otherName }}
              </h1>
            </div>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto mt-4" width="auto">
          <v-card-text>
            <h3 class="dark--text mb-4">Born: {{ artist.dateOfBirth }}</h3>
            <h3 class="dark--text mb-4">
              Active since: {{ artist.activeSince }}
            </h3>
            <h3 class="dark--text mb-4">
              Genres: {{ artist.genres }}
            </h3>
            <h3 class="dark--text mb-4">
              Associtaed Band/Group: {{ artist.band }}
            </h3>
            <h3 class="dark--text mb-4">
              Albums: {{ artist.albums }}
            </h3>
            <h3 class="dark--text mb-4">
              Signed to: {{ artist.label }}
            </h3>

            <div class="text--primary">
              {{ artist.bio }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary accent-4"> Share </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card width="auto" class="mx-auto">
          <div v-if="artist.artistImage">
            <v-img :src="`/${artist.artistImage}`" height="300px" dark> </v-img>
          </div>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-transform-capitalize">{{
                  artist.artistID
                }}</v-list-item-title>
                <v-list-item-subtitle>UgaaMUX Artist ID</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ artist.nationalID }}</v-list-item-title>
                <v-list-item-subtitle>National ID Number</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ artist.district }}</v-list-item-title>
                <v-list-item-subtitle>Location</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ artist.email }}</v-list-item-title>
                <v-list-item-subtitle>Primary email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ artist.phoneNumber }}</v-list-item-title>
                <v-list-item-subtitle
                  >Primary phone number</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="accent"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{
                  artist.altPhoneNumber
                }}</v-list-item-title>
                <v-list-item-subtitle
                  >Alternative Phone Number</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      artist: {},
    };
  },
  async created() {
    const response = await API.getArtistByID(this.$route.params.id);
    this.artist = response;
  },
};
</script>
