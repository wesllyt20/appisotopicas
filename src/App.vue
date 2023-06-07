<template>
  <v-app>
    <v-main>
      <viewPrinciapl/>
    </v-main>
  </v-app>
</template>

<script>
import viewPrinciapl from './components/viewPrinciapl.vue'

export default {
  name: 'App',

  components: {
    viewPrinciapl,
  },

  beforeMount() {
    // Borrar la caché del navegador antes de cargar la página
    window.addEventListener('beforeunload', () => {
      window.localStorage.clear();
      window.sessionStorage.clear();
      if (navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode === true) { 
        document.execCommand('ClearAuthenticationCache');
      }
    });
  },
}
</script>
