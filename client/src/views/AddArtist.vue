<template>
  <v-container>
    <v-row no-gutter>
      <v-col sm-10 class="mx-auto">
        <v-card class="pa-5">
          <v-card-title
            class="primary dark rounded white--text darken-1"
            border="bottom"
            color=""
            >Add new
          </v-card-title>
          
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="rounded pa-6"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-card class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
                <v-card-title
                  class="text-h6 font-weight-regular justify-space-between"
                >
                  <span>{{ currentTitle }}</span>
                  <v-avatar
                    color="primary lighten-2"
                    class="subheading white--text"
                    size="24"
                    v-text="step"
                  ></v-avatar>
                </v-card-title>

                <v-window v-model="step" >
                  <v-window-item :value="1">
                    <v-card-text>
                      <v-text-field
                        disabled
                        label="Artist ID"
                        v-model="artist.artistID"
                        prepend-icon="mdi-format-list-numbered"
                      ></v-text-field>
                      <v-text-field
                        label="National ID"
                        v-model="artist.nationalID"
                        prepend-icon="mdi-card-account-details-outline"
                        :rules="rules"
                      ></v-text-field>
                      <v-text-field
                        label="Stage Name"
                        v-model="artist.stageName"
                        prepend-icon="mdi-account-star-outline"
                        :rules="rules"
                      ></v-text-field>

                    </v-card-text>
                  </v-window-item>

                  <v-window-item :value="2">
                    <v-card-text>
                        <v-text-field
                          label="First name"
                          v-model="artist.firstName"
                          prepend-icon="mdi-account-outline"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Middle name"
                          v-model="artist.middleName"
                          prepend-icon="mdi-account-outline"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Last Name"
                          v-model="artist.lastName"
                          prepend-icon="mdi-account-outline"
                          :rules="rules"
                        ></v-text-field>
                      <span class="text-caption grey--text text--darken-1">
                        Please enter a password for your account
                      </span>
                    </v-card-text>
                  </v-window-item>

                  <v-window-item :value="3">
                    <div class="pa-4 text-center">
                        <v-text-field
                          label="Date of Birth"
                          v-model="artist.dateOfBirth"
                          prepend-icon="mdi-calendar-account-outline"
                          :rules="rules"
                          type="date"
                        ></v-text-field>
                        <v-select
                          :items="genders"
                          prepend-icon="mdi-earth"
                          label="Select gender"
                          v-model="artist.gender"
                          :rules="rules"
                          filled
                        ></v-select>
                        <v-select
                          :items="districts"
                          v-model="districtList"
                          item-text="name"
                          item-value="id"
                          prepend-icon="mdi-map-marker-outline"
                        ></v-select>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="4">
                    <div class="pa-4 text-center">
                        <v-text-field
                          label="Date of Birth"
                          v-model="artist.dateOfBirth"
                          prepend-icon="mdi-calendar-account-outline"
                          :rules="rules"
                          type="date"
                        ></v-text-field>
                        <v-select
                          :items="genders"
                          prepend-icon="mdi-earth"
                          label="Select gender"
                          v-model="artist.gender"
                          :rules="rules"
                          filled
                        ></v-select>
                        <v-select
                          :items="districts"
                          v-model="districtList"
                          item-text="name"
                          item-value="id"
                          prepend-icon="mdi-map-marker-outline"
                        ></v-select>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="5">
                    <div class="pa-4 text-center">
                        <v-select
                          :items="categories"
                          prepend-icon="mdi-earth"
                          label="Artist category"
                          v-model="artist.category"
                          :rules="rules"
                          filled
                        ></v-select>
                        <v-text-field
                          label="Active since"
                          v-model="artist.activeSince"
                          prepend-icon="mdi-calendar-question"
                          :rules="rules"
                          type="date"
                        ></v-text-field>
                        <v-text-field
                          label="Genres"
                          v-model="artist.genres"
                          prepend-icon="mdi-music-box-multiple-outline"
                        ></v-text-field>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="6">
                    <div class="pa-4 text-center">
                        <v-select
                          v-if="bands"
                          :items="bands"
                          label="Band"
                          filled
                          v-model="artist.band"
                          prepend-icon="mdi-account-group-outline"
                          :rules="rules"
                        ></v-select>
                        <v-text-field
                          label="Albums"
                          v-model="artist.albums"
                          prepend-icon="mdi-folder-music-outline "
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Record Label"
                          v-model="artist.label"
                          prepend-icon="mdi-book-music-outline"
                          :rules="rules"
                        ></v-text-field>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="7">
                    <div class="pa-4 text-center">
                        <v-text-field
                          label="Phone Number"
                          v-model="artist.phoneNumber"
                          prepend-icon="mdi-cellphone-wireless"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Alternate Phone Number"
                          v-model="artist.altPhoneNumber"
                          prepend-icon="mdi-cellphone-wireless"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Email Address"
                          v-model="artist.email"
                          prepend-icon="mdi-email-outline"
                          :rules="rules"
                        ></v-text-field>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="8">
                    <div class="pa-4 text-center">
                        <v-text-field
                          label="Phone Number"
                          v-model="artist.phoneNumber"
                          prepend-icon="mdi-cellphone-wireless"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Alternate Phone Number"
                          v-model="artist.altPhoneNumber"
                          prepend-icon="mdi-cellphone-wireless"
                          :rules="rules"
                        ></v-text-field>
                        <v-text-field
                          label="Email Address"
                          v-model="artist.email"
                          prepend-icon="mdi-email-outline"
                          :rules="rules"
                        ></v-text-field>
                      <span class="text-caption grey--text"
                        >Thanks for signing up!</span
                      >
                    </div>
                  </v-window-item>
                  <v-window-item :value="9">
                    <div class="pa-4 text-center">
                        <v-col cols="12" md="6" xs="12" sm="12">
                          <v-textarea
                            label="Artist biography"
                            v-model="artist.bio"
                            prepend-icon="mdi-note-plus"
                            :rules="rules"
                          ></v-textarea>
                        </v-col>
                        <v-col cols="12" md="6" xs="12" sm="12">
                          <v-file-input
                            @change="selectFile"
                            label="Artist Image"
                            show-size
                            counter
                            multiple
                            prepend-icon="mdi-image-plus"
                            :rules="rules"
                          ></v-file-input>
                        </v-col>
                      <v-row>
                        <v-btn
                          type="submit"
                          width="100%"
                          class="mt-3"
                          color="primary"
                          >Add Artist</v-btn
                        >
                      </v-row>
    
                    </div>
                  </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn :disabled="step === 1" text @click="step--">
                    Back
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled="step === 9"
                    color="primary"
                    depressed
                    @click="step++"
                  >
                    Next
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-row>
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
    return {
      step: 1,
      rules: [(value) => !!value || 'This field is required'],
      artist: {
        artistID: '',
        nationalID: '',
        firstName: '',
        lastName: '',
        middleName: '',
        otherName: '',
        stageName: '',
        dateOfBirth: '',
        district: '',
        category: '',
        genres: '',
        activeSince: '',
        band: '',
        albums: '',
        label: '',
        artistImage: '',
        bio: '',
        gender: '',
        phoneNumber: '',
        altPhoneNumber: '',
        email: '',
      },
      artistImage: '',
      categories: [
        'Singer',
        'Rapper',
        'Lyricist',
        'Producer',
        'Comedian',
        'Filmmaker',
      ],
      genders: ['Male', 'Female'],
      districtList: null,
      labels: [],
      districts: [],
      allArtists: [],
    };
  },
  methods: {
    selectFile(file) {
      this.artistImage = file[0];
    },
    async created() {
      this.allArtists = await API.getAllArtists();
      this.bands = await API.getAllBands();
      this.labels = await API.getAllLabels();
      this.districts = await API.getAllDistricts();
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('artistImage', this.artistImage);
      formData.append('nationalID', this.artist.nationalID);
      formData.append('firstName', this.artist.firstName);
      formData.append('lastName', this.artist.lastName);
      formData.append('middleName', this.artist.middleName);
      formData.append('otherName', this.artist.otherName);
      formData.append('stageName', this.artist.stageName);
      formData.append('dateOfBirth', this.artist.dateOfBirth);
      formData.append('district', this.artist.district);
      formData.append('category', this.artist.category);
      formData.append('genres', this.artist.genres);
      formData.append('activeSince', this.artist.activeSince);
      formData.append('band', this.artist.band);
      formData.append('albums', this.artist.albums);
      formData.append('bio', this.artist.bio);
      formData.append('gender', this.artist.gender);
      formData.append('phoneNumber', this.artist.phoneNumber);
      formData.append('altPhoneNumber', this.artist.altPhoneNumber);
      formData.append('email', this.artist.email);
      if (this.$refs.form.validate()) {
        const response = await API.addArtist(formData);
        this.$router.push({
          name: 'artists',
          params: {
            fName: `${this.artist.firstName}`,
            lName: `${this.artist.lastName}`,
            message: ' has been added to the archive successfully!',
          },
        });
      }
    },
    computed: {
      currentTitle() {
        switch (this.step) {
          case 1:
            return 'Step one';
          case 2:
            return 'Step two';
          case 3:
            return 'Step three';
          case 4:
            return 'Step four';
          case 5:
            return 'Step five';
          case 6:
            return 'Step six';
          case 7:
            return 'Step seven';
          case 8:
            return 'Step eight';
          default:
            return 'Final step';
        }
      },
    },
  },
};
</script>
