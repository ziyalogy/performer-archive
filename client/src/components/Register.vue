<template>
  <v-row justify>
    <v-col class="ma-4 mx-auto" cols="12" xs="12" sm="12" md="4" lg="6">
      <v-content
        ><v-card-title
          rounded
          color="darken-2"
          class="darken-2 primary white--text"
          >Create account</v-card-title
        >
        <v-card class="pa-5 ma-4 mx-auto">
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-text-field
                    prepend-icon="mdi-account-outline"
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-text-field
                    prepend-icon="mdi-account-outline"
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-text-field
                    prepend-icon="mdi-email-outline"
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-text-field
                    prepend-icon="mdi-cellphone-basic"
                    v-model="email"
                    :rules="emailRules"
                    label="Phone number"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-text-field
                    prepend-icon="mdi-account-question-outline"
                    v-model="email"
                    :rules="emailRules"
                    label="@username"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" xs="12" sm="12">
                  <v-file-input
                    @change="selectFile"
                    label="Profile picture"
                    show-size
                    counter
                    multiple
                    prepend-icon="mdi-account-box-multiple-outline"
                    :rules="rules"
                  ></v-file-input>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="6">
                  <v-text-field
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    prepend-icon="mdi-account-lock-outline"
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="6">
                  <v-text-field
                    label="Confirm password"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    prepend-icon="mdi-account-lock-outline"
                    @click:append="showPassword = !showPassword"
                  />
                </v-col>
              </v-row>
              <v-row>
                            <v-card-actions>
            <v-btn text color="primary" class="text-capitalize">Submit Account Request</v-btn>
            <v-btn :to="{ name: 'login' }" text color="accent" class="text-capitalize">Login</v-btn>
          </v-card-actions>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-content>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Register',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
};
</script>
<style lang="css" scoped></style>
