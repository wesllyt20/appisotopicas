import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGtag from 'vue-gtag';

loadFonts();

// Cargar las variables de entorno desde el archivo .env

const app = createApp(App);

// Configuración de vue-gtag
const isProduction = process.env.NODE_ENV === 'pro';
const googleAnalyticsId = isProduction ? 'G-codigo' : null;

app.use(VueGtag, {
  config: { id: googleAnalyticsId },
});

app.use(vuetify);
app.mount('#app');
