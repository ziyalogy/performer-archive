<style lang="scss">
@import './scss/main.scss';
v-app {
  font-family: $body-font-family !important;
}
</style>

<template>
  <v-app id="inspire">
    <Menu />

    <v-main>
      <router-view></router-view>
      <v-dialog
      v-model="dialog"
      width="500"
    >
      
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-main>
    <v-footer padless>
      <v-col class="font-weight-bold text--disabled text-right" cols="12">
        <small
          >Built by
          <a
            target="new"
            class="text-decoration-none"
            href="https://www.ziyalogy.xyz"
            >@ziyalogy</a
          >
          in MEVN</small
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,

  },
  data: () => ({
    drawer: null,
  }),

  mounted() {
    document.title = 'UgaaMUX | Performing Artists Archive, from the Pearl';
  },
};
</script>
<style>
.v-application {
  font-family: 'DM Sans', sans-serif !important;
  font-size: 16px !important;
  line-height: 1.8;
  color: #3c3c3c;
}
.headline,
.title,
.subheading {
  font-family: 'DM Sans', sans-serif !important;
}
.v-application .text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: 'DM Sans', sans-serif !important;
}
.v-application--is-ltr
  .v-toolbar__content
  > .v-btn.v-btn--icon:first-child
  + .v-toolbar__title,
.v-application--is-ltr
  .v-toolbar__extension
  > .v-btn.v-btn--icon:first-child
  + .v-toolbar__title {
  padding-left: 0px !important;
}
</style>
