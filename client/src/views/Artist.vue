<template>
  <v-container>
    <v-row justify="space-around" class="mt-4 ml-4 mr-4">
      <v-col cols="12" sm="12" md="12" lg="8">
        <v-card color="primary" flat width="auto">
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
                  <v-img :src="`${artist.artistImage}`"></v-img>
                </v-avatar>
              </div>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div
              v-if="artist.stageName"
              class="font-weight-bold ml-0 white--text mb-2"
            >
              <h2>
                {{ artist.firstName }} {{ artist.middleName }}
                {{ artist.lastName }} {{ artist.otherName }} a.k.a "{{
                  artist.stageName
                }}".
              </h2>
            </div>
            <div v-else class="font-weight-regular ml-0 white--text mb-2">
              <h1>
                {{ artist.firstName }} {{ artist.middleName }}
                {{ artist.lastName }} {{ artist.otherName }}
              </h1>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="mt-4">
          <v-card-title class="secondary lighten-1">
            <span class="text-h6 white--text">Summary</span>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text lighten-1">mdi-calendar</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Birthdate: </strong
                  >{{ artist.dateOfBirth }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text">mdi-calendar</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Active since:</strong> {{ artist.activeSince }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text">mdi-music-circle</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Genres: </strong
                  >{{ artist.genres }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text">mdi-account-multiple</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Band: </strong>{{ artist.band }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text">mdi-music-box-multiple</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Albums:</strong
                  ><v-chip class="ma-2" color="primary">
                    {{ artist.albums }}
                  </v-chip></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-action>
                <v-icon class="secondary--text">mdi-folder-music</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>Label: </strong>{{ artist.label }}</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <!--<v-list-item>
              <v-list-item-content>
                <p>
                  {{ artist.firstName }} {{ artist.lastName }}, an
                  {{ artist.genres }} performer professionally known as
                  {{ artist.stageName }} was born on the date of
                  {{ artist.dateOfBirth }} in {{ artist.district }} District,
                  Uganda.
                </p>
                {{ artist.bio }}
              </v-list-item-content>
            </v-list-item>-->

            <v-list-item>
              <v-list-item-content
                ><div>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Biography
                      </v-btn>
                    </template>

                    <v-card class="mt-4">
                      <v-card-title
                        class="text-h5 white--text darken-2 primary"
                      >
                        {{ artist.firstName }} {{ artist.lastName }} Biography
                      </v-card-title>

                      <v-card-text class="mt-4">
                          {{ artist.firstName }} {{ artist.lastName }}, a Ugandan
                          {{ artist.genres }} performer professionally known as
                          {{ artist.stageName }} was born on the date of
                          {{ artist.dateOfBirth }} in
                          {{ artist.district }} District, Uganda.
                        {{ artist.bio }}
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                          Close
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="4">
        <v-card>
          <div v-if="artist.artistImage">
            <v-img :src="`${artist.artistImage}`" height="300px" dark> </v-img>
          </div>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title color="primary">
                  <strong>{{ artist.artistID }}</strong>
                </v-list-item-title>
                <v-list-item-subtitle>UgaaMUX Artist ID</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title color="primary"
                  ><strong>{{ artist.nationalID }}</strong></v-list-item-title
                >
                <v-list-item-subtitle>National ID Number</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title color="primary"
                  ><strong>{{ artist.district }}</strong></v-list-item-title
                >
                <v-list-item-subtitle>Location</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="text-lowercase"
                  ><strong>{{ artist.email }}</strong></v-list-item-title
                >
                <v-list-item-subtitle>Primary email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>{{ artist.phoneNumber }}</strong></v-list-item-title
                >
                <v-list-item-subtitle
                  >Primary phone number</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  ><strong>{{
                    artist.altPhoneNumber
                  }}</strong></v-list-item-title
                >
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
      dialog: false,
    };
  },
  async created() {
    const response = await API.getArtistByID(this.$route.params.id);
    this.artist = response;
  },
};
</script>
