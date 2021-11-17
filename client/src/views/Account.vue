<template>
      <v-row justify class="mx-auto">
        <v-col cols="12" sm="8" md="12" lg="8">
        <v-content><v-card-title color="darken-2" class="darken-2 primary white--text">Login to Clerk Account</v-card-title>
        <v-card class="pa-5">
          <v-tex>All registration should be done by clerks.</v-tex>
          <v-card-text class=""> 
            <v-text-field color="primary darken-5" label="Username" prepend-icon="mdi-account-circle"/>
            <v-text-field 
            label="Password" 
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword? 'mdi-eye':'mdi-eye-off'" 
            prepend-icon="mdi-lock" 
            @click:append="showPassword =!showPassword"/>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="primary" class="text-capitalize">Log in</v-btn>
            <v-btn text color="secondary" class="text-capitalize">Forgot password?</v-btn>
          </v-card-actions>
        </v-card>
      </v-content>
        </v-col>
      </v-row>
</template>
<script>
export default {
  data(){
    return{
      showPassword:false
    }
  }
  
};
</script>