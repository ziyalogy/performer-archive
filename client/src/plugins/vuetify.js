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
        primary:'#3BB4C1', 
        secondary: '#048998', 
        accent: '#3BB4C1',
        textcolor:'red',
      },
    },
  },
})