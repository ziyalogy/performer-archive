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
        primary:'#5c8d89', 
        secondary: '#0e918c', 
        accent: '#1C203C',
        lightaccent:'#f5f5f5'
      },
    },
  },
  
})