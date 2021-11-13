<style lang="scss">
@import './scss/main.scss';
v-app {
  font-family: $body-font-family !important;
}
</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      class="dark--text primary darken-1"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="appname
              text-left
              white--text
              darken-2
              font-weight-bold
              display-1
            "
          >
            UgaaMux</v-list-item-title
          >
          <v-list-item-subtitle
            class="text-left font-weight-bold lighten-2 white--text"
            >From the pearl.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-subheader class="text--disabled font-weight-bold"
          >Archive Navigation</v-subheader
        >
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
            <v-list-item-icon>
              <v-icon
                class="darken-4 textcolor--text"
                v-text="item.icon"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold textcolor--text"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-subheader class="text--disabled font-weight-bold"
          >Clerk Account</v-subheader
        >
        <v-list-item-group color="primary">
          <v-list-item v-for="(page, i) in pages" :to="page.link" :key="i">
            <v-list-item-icon>
              <v-icon
                class="font-weight-bold textcolor--text"
                v-text="page.icon"
              ></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold textcolor--text"
                v-text="page.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-subheader class="font-weight-bold text--disabled"
          >About UGAAMUX</v-subheader
        >
        <v-list-item-group color="primary">
          <v-list-item v-for="(info, i) in infos" :key="i" :to="info.link">
            <v-list-item-icon>
              <v-icon class="textcolor--text" v-text="info.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-bold textcolor--text"
                v-text="info.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="secondary" app>
      <v-app-bar-nav-icon
        class="font-weight-bold white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">Archive of Ugandan performers.</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer padless>
      <v-col class="font-weight-bold text--disabled text-right" cols="12">
        <small
          >Built by <a target="new" class="text-decoration-none" href="https://www.ziyalogy.xyz">@ziyalogy</a> with a cat's curiosity powered by NodeJS, Express,
          MongoDB and VueJS</small
        >
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
      {
        text: 'Artists',
        icon: 'mdi-account-tie-voice-outline',
        link: '/artists',
      },
      { text: 'Bands', icon: 'mdi-account-group-outline', link: '/bands' },
      {
        text: 'Record Labels',
        icon: 'mdi-folder-music-outline',
        link: '/labels',
      },
      { text: 'Albums', icon: 'mdi-record-circle-outline', link: '/albums' },
      { text: 'Songs', icon: 'mdi-music-circle-outline', link: '/songs' },
    ],
    pages: [
      { text: 'Sign In', icon: 'mdi-login-variant', link: '/sign-in' },
      { text: 'Sign Up', icon: 'mdi-account-plus-outline', link: '/join' },
      { text: 'Password Reset', icon: 'mdi-lock-reset', link: '/reset' },
    ],
    infos: [
      {
        text: 'Project Info',
        icon: 'mdi-archive-music-outline',
        link: '/about',
      },
      { text: 'Contact Us', icon: 'mdi-email-plus-outline', link: '/contact' },
    ],
  }),
  mounted() {
    document.title = 'UgaaMUX | Performing Artists Archive, from the Pearl';
  },
};
</script>
<style>
  .v-application {
    font-family: "DM Sans", sans-serif!important;
    font-size: 18px !important;
    line-height: 1.5;
    color: #616161;
}
.headline,
.title,
.subheading{
     font-family:'DM Sans', sans-serif !important;
}
.appname {
    font-size: 2.125rem !important;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em !important;
    font-family: "Aladin", sans-serif !important;
}

</style>