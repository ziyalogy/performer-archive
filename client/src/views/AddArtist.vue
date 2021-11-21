<template>
  <v-container>
    <v-row no-gutter>
      <v-col sm-10 class="mx-auto">
        <v-card class="pa-5">
          <v-card-title class="primary dark rounded white--text darken-1" border="bottom" color="">Add new Artist</v-card-title>
          <v-divider class="primary mt-4"></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="lightaccent pa-6"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-text-field
              required
                label="Artist ID"
                v-model="artist.artistID"
                prepend-icon="mdi-format-list-numbered"
                :rules="rules"
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
            </v-row>
            <v-row>
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
            </v-row>
            <v-row>
              <v-text-field
                label="Date of Birth"
                v-model="artist.dateOfBirth"
                prepend-icon="mdi-calendar-account-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Gender"
                v-model="artist.gender"
                prepend-icon="mdi-gender-male-female "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Location"
                v-model="artist.district"
                prepend-icon="mdi-map-marker-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Artist category"
                v-model="artist.category"
                prepend-icon="mdi-account-music-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Active since"
                v-model="artist.activeSince"
                prepend-icon="mdi-calendar-question"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Genres"
                v-model="artist.genres"
                prepend-icon="mdi-music-box-multiple-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Band"
                v-model="artist.band"
                prepend-icon="mdi-account-group-outline"
                :rules="rules"
              ></v-text-field>
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
            </v-row>

            <v-row>
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
            </v-row>
            <v-row>
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
            </v-row>
                      <v-row>
              <v-btn type="submit" class="mt-3" color="primary">Add Artist</v-btn>
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
    };
  },
  methods: {
    selectFile(file) {
      this.artistImage = file[0];
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
          path: '/artists',
          params: {fName: `${this.artist.firstName}`, lName:`${this.artist.lastName}`, message: ' has been added to the archive successfully!' },
        });
      }
    },
  },
};
</script>