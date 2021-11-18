<template>
  <v-container>
    <v-row no-gutter>
      <v-col sm-10 class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add new Artist</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-text-field
              required
                label="Artist ID"
                v-model="artistID"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="National ID"
                v-model="nationalID"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Stage Name"
                v-model="stageName"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="First name"
                v-model="firstName"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Middle name"
                v-model="middleName"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Last Name"
                v-model="lastName"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Date of Birth"
                v-model="dateOfBirth"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Gender"
                v-model="gender"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Location"
                v-model="district"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Artist category"
                v-model="category"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Active since"
                v-model="activeSince"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Genres"
                v-model="genres"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Band"
                v-model="band"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Albums"
                v-model="albums"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Record Label"
                v-model="label"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Band"
                v-model="band"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Albums"
                v-model="albums"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Record Label"
                v-model="label"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Phone Number"
                v-model="phoneNumber"
                prepend-icon="mdi-note"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Alternate Phone Number"
                v-model="altPhoneNumber"
                prepend-icon="mdi-account-multiple-plus "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Email Address"
                v-model="email"
                prepend-icon="mdi-calendar-range "
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" xs="12" sm="12">
              <v-textarea
                label="Artist biography"
                v-model="bio"
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
          </v-form>
          <v-row>
              <v-btn type="submit" class="mt-3" color="primary">Add Artist</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  name: 'AddArtist',
  data() {
    return {
      rules: [(value) => !!value || 'This field is required'],
      album: {
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
      formData.append('nationalID', this.album.nationalID);
      formData.append('firstName', this.album.firstName);
      formData.append('lastName', this.album.lastName);
      formData.append('middleName', this.album.middleName);
      formData.append('otherName', this.album.otherName);
      formData.append('stageName', this.album.stageName);
      formData.append('dateOfBirth', this.album.dateOfBirth);
      formData.append('district', this.album.district);
      formData.append('category', this.album.category);
      formData.append('genres', this.album.genres);
      formData.append('activeSince', this.album.activeSince);
      formData.append('band', this.album.band);
      formData.append('albums', this.album.albums);
      formData.append('bio', this.album.bio);
      formData.append('gender', this.album.gender);
      formData.append('phoneNumber', this.album.phoneNumber);
      formData.append('altPhoneNumber', this.album.altPhoneNumber);
      formData.append('email', this.album.email);

      if (this.$refs.form.validate()) {
        const response = await API.addArtist(formData);
        this.$router.push({
          name: 'Artists',
          params: { message: response.message },
        });
      }
    },
  },
};
</script>
