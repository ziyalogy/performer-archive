<template>
  <v-container>
    <v-row no-gutter>
      <v-col sm-10 class="mx-auto">
        <v-card class="pa-5">
          <v-card-title class="primary dark rounded white--text darken-1" border="bottom" color="">Add new User</v-card-title>
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
                label="User ID"
                v-model="user.userID"
                prepend-icon="mdi-format-list-numbered"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="National ID"
                v-model="user.nationalID"
                prepend-icon="mdi-card-account-details-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Stage Name"
                v-model="user.stageName"
                prepend-icon="mdi-account-star-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="First name"
                v-model="user.firstName"
                prepend-icon="mdi-account-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Middle name"
                v-model="user.middleName"
                prepend-icon="mdi-account-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Last Name"
                v-model="user.lastName"
                prepend-icon="mdi-account-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Date of Birth"
                v-model="user.dateOfBirth"
                prepend-icon="mdi-calendar-account-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Gender"
                v-model="user.gender"
                prepend-icon="mdi-gender-male-female "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Location"
                v-model="user.district"
                prepend-icon="mdi-map-marker-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="User category"
                v-model="user.category"
                prepend-icon="mdi-account-music-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Active since"
                v-model="user.activeSince"
                prepend-icon="mdi-calendar-question"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Genres"
                v-model="user.genres"
                prepend-icon="mdi-music-box-multiple-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Band"
                v-model="user.band"
                prepend-icon="mdi-account-group-outline"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Albums"
                v-model="user.albums"
                prepend-icon="mdi-folder-music-outline "
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Record Label"
                v-model="user.label"
                prepend-icon="mdi-book-music-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>

            <v-row>
              <v-text-field
                label="Phone Number"
                v-model="user.phoneNumber"
                prepend-icon="mdi-cellphone-wireless"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Alternate Phone Number"
                v-model="user.altPhoneNumber"
                prepend-icon="mdi-cellphone-wireless"
                :rules="rules"
              ></v-text-field>
              <v-text-field
                label="Email Address"
                v-model="user.email"
                prepend-icon="mdi-email-outline"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
                <v-col cols="12" md="6" xs="12" sm="12">
              <v-textarea
                label="User biography"
                v-model="user.bio"
                prepend-icon="mdi-note-plus"
                :rules="rules"
              ></v-textarea>
                </v-col>
                <v-col cols="12" md="6" xs="12" sm="12">
              <v-file-input
                @change="selectFile"
                label="User Image"
                show-size
                counter
                multiple
                prepend-icon="mdi-image-plus"
                :rules="rules"
              ></v-file-input>
                </v-col>
            </v-row>
                      <v-row>
              <v-btn type="submit" class="mt-3" color="primary">Add User</v-btn>
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
      user: {
        userID: '',
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
        userImage: '',
        bio: '',
        gender: '',
        phoneNumber: '',
        altPhoneNumber: '',
        email: '',
      },
      userImage: '',
    };
  },
  methods: {
    selectFile(file) {
      this.userImage = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('userImage', this.userImage);
      formData.append('nationalID', this.user.nationalID);
      formData.append('firstName', this.user.firstName);
      formData.append('lastName', this.user.lastName);
      formData.append('middleName', this.user.middleName);
      formData.append('otherName', this.user.otherName);
      formData.append('stageName', this.user.stageName);
      formData.append('dateOfBirth', this.user.dateOfBirth);
      formData.append('district', this.user.district);
      formData.append('category', this.user.category);
      formData.append('genres', this.user.genres);
      formData.append('activeSince', this.user.activeSince);
      formData.append('band', this.user.band);
      formData.append('albums', this.user.albums);
      formData.append('bio', this.user.bio);
      formData.append('gender', this.user.gender);
      formData.append('phoneNumber', this.user.phoneNumber);
      formData.append('altPhoneNumber', this.user.altPhoneNumber);
      formData.append('email', this.user.email);
      if (this.$refs.form.validate()) {
        const response = await API.addUser(formData);
        this.$router.push({
          path: '/users',
          params: {fName: `${this.user.firstName}`, lName:`${this.user.lastName}`, message: ' has been added to the archive successfully!' },
        });
      }
    },
  },
};
</script>