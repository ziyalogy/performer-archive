<template>
      <v-row justify class="mx-auto" >
        <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="4">
        <v-content><v-card-title color="darken-2" class="darken-2 primary white--text">Login to Clerk Account</v-card-title>
        <v-card class="pa-5">
          <v-text>All registration should be done by clerks.</v-text>
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
            <v-btn :to="{ name: 'register' }" text color="accent" class="text-capitalize">Request account</v-btn>
            <v-btn text color="secondary" class="text-capitalize">Forgot password?</v-btn>
          </v-card-actions>
        </v-card>
      </v-content>
        </v-col>
      </v-row>
</template>
<script>
export default {
    name:'Login'
    
}
</script>
<style lang="css" scoped>

</style>