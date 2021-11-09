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
        primary:'#89B5AF', 
        secondary: '#2F5D62', 
        accent: '#F0A500',
      },
    },
  },
})