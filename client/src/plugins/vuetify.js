// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
//import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary:'#58c5c8', 
        secondary: '#673467', 
        accent: '#1C203C',
        textcolor:'red',
      },
    },
  },
})