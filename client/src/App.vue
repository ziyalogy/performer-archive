<style lang="scss">
@import "./scss/main.scss";
v-app {
  font-family: $body-font-family !important;
}

</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="lighten-1 secondary" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="white--text font-weight-bold display-1"> ugaamux.ug </v-list-item-title>
          <v-list-item-subtitle class="white--text font-weight-bold text--disabled">archive of Ugandan performers </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-subheader class="white--text text--disabled font-weight-bold">Archive Navigation</v-subheader>
        <v-list-item-group  color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon class="darken-4 white--text" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-subheader class="white--text text--disabled font-weight-bold">Clerk Account</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(page, i) in pages" :key="i">
            <v-list-item-icon>
              <v-icon class="white--text" v-text="page.icon"></v-icon>
            </v-list-item-icon >
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="page.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
            <v-list dense>
        <v-subheader class="white--text font-weight-bold text--disabled">About UGAAMUX</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(info, i) in infos" :key="i">
            <v-list-item-icon>
              <v-icon class="white--text" v-text="info.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="info.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="secondary" app>
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Home</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
      <v-footer padless>
    <v-col
      class="text-right"
      cols="12"
    >
     <small>Built by @ziyalogy with a cat's curiosity powered by NodeJS, Express, MongoDB and VueJS</small>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: 'Home', icon: 'mdi-home-outline', link: '/' },
      { text: 'Artists', icon: 'mdi-account-tie-voice-outline', link: '/artists' },
      { text: 'Bands', icon: 'mdi-account-group-outline', link: '/bands' },
      { text: 'Record Labels', icon: 'mdi-folder-music-outline', link: '/labels' },
      { text: 'Albums', icon: 'mdi-record-circle-outline', link: '/albums' },
      { text: 'Songs', icon: 'mdi-music-circle-outline', link: '/songs' },
    ],
    pages: [
      { text: 'Sign In', icon: 'mdi-login-variant', link: '/sign-in' },
      { text: 'Sign Up', icon: 'mdi-account-plus-outline', link: '/join' },
      { text: 'Password Reset', icon: 'mdi-lock-reset', link: '/reset' },
    ],
    infos: [
      { text: 'Project Info', icon: 'mdi-archive-music-outline', link: '/about' },
      { text: 'Contact Us', icon: 'mdi-email-plus-outline', link: '/contact' },
  
    ],
  }),
};
</script>
