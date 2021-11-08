<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> UGAAMUX </v-list-item-title>
          <v-list-item-subtitle> Uganda Artists Archive </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-subheader>Archive Navigation</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-subheader>Clerk Account</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(page, i) in pages" :key="i">
            <v-list-item-icon>
              <v-icon v-text="page.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="page.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
            <v-list dense>
        <v-subheader>About UGAAMUX</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(info, i) in infos" :key="i">
            <v-list-item-icon>
              <v-icon v-text="info.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="info.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
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
