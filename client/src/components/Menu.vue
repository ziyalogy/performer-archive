<template>
    <v-app-bar flat short tile color="secondary" app>
 <v-toolbar-title class="white--text">
              <v-list-item>
        <v-list-item-content>
          <v-list-item-title :to="{ name: 'home' }"
            class=" 
              appname
              text-left
              white--text
              darken-2
              font-weight-bold
              display-1
            "
          >
            UgaaMux</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
        </v-toolbar-title
      >
      <v-toolbar-items class="">
        <v-btn text
          class="text-capitalize secondary"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
            <v-spacer></v-spacer>
      <v-btn
        :to="{ name: 'login' }"
        class="text-capitalize secondary lighten-1"
        color=""
        text
        dark
        
        >Account</v-btn
      >
    </v-app-bar>
</template>
<script>
export default {
  name: "Menu",
  data(){
    return {
      appTitle: 'UgaaMUX',
      dialog: false,
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'face' },
          { title: 'Artists', path: '/artists', icon: 'face' },
          { title: 'Bands', path: '/bands', icon: 'face' },
           { title: 'Labels', path: '/labels', icon: 'face' },
     ]
    }
  },
};
</script>