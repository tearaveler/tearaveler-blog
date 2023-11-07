import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify ({
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
  defaults: {
    HelloWorld: { 
      msg: 'Hello, World!',
    },
  },
  theme: {
    defaultTheme: 'dark',
  },
})