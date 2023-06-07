<template>
  <div>
    <div class="bg-image2" />
    <h2 id="tiGeo" class="">Acerca de</h2>
    <br />
    <div id="parGeo" class="mb-5">
      <p class="parrafoGeo">
        Dentro del Programa presupuestal PP 068 “
        <a
          class="linkParrafo"
          href="https://cdn.www.gob.pe/uploads/document/file/1323914/PP0068%20Actualizado%202020%20c.pdf"
          rel="nofollow"
          target="_blank"
        >
          Reducción de vulnerabilidad y atención de emergencias por desastres</a
        >
        ” PREVAED, como parte del producto 3000737: Estudios para la estimación
        del riesgo de desastres, actividad 6: Generación de información y
        monitoreo de incendios forestales. El Ministerio del Ambiente (Minam), a
        través del Instituto Geofísico del Perú (IGP) participa de las tareas a)
        Recopilación y sistematización de datos y b) Procesamiento, análisis y
        estimación de la información.
      </p>
      <p class="parrafoGeo mt-5">
        Esta información es dispuesta mediante un servicio de mapas acerca del
        Índice de Vegetación de Diferencia Normalizada (NDVI, por sus siglas en
        inglés). Para ello, el IGP monitorea el NDVI y las anomalías
        estandarizadas de NDVI (últimos 30 días) a nivel nacional.
      </p>
      <p class="parrafoGeo mt-5 pb-8">
        En el marco de la gestión prospectiva dispuesta en el
        <a
          class="linkParrafo"
          href="https://www.gob.pe/27550-presidencia-del-consejo-de-ministros-sistema-nacional-de-gestion-del-riesgo-de-desastres-sinagerd"
          rel="nofollow"
          target="_blank"
        >
          SINAGERD</a
        >, los incendios forestales también forman parte de una línea de
        investigación en el IGP, con el fin de reducir la incertidumbre acerca
        de su problemática actual, mediante la generación de nuevos
        conocimientos científicos. Los cuales contribuyan a reducir los impactos
        de los incendios forestales en los ecosistemas andinos amazónicos del
        Perú.
      </p>
      <a id="btnFunci" class="my-linktop" @click="recepFunc">Ver Guia de uso</a>
      <br />
      <!--<a id="btnFunci" class="my-linktop" @click="recepContac">Ver Contacto</a>-->
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    recepFunc() {
      document.querySelectorAll("#func").forEach((boton) => boton.click());
    },
    recepContac() {
      document.querySelectorAll("#contacto").forEach((boton) => boton.click());
    },
  },
};
</script>

<style>
#tiGeo {
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  color: #0a1fc2;
  margin: -130px 0px 0px 45px;
}
#parGeo {
  margin-bottom: 80px !important;
}
.parrafoGeo {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #00132e;
  margin-left: 45px;
  margin-right: 45px;
}

.bg-image2 {
  width: 450px;
  height: 515px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 65%,
      rgba(255, 255, 255, 1) 72%
    ),
    url("https://ide.igp.gob.pe/geovisor/test/isotopicas.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #bbbbbb;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #888;
}
#btnFunci {
  width: 195px;
  height: 41px;
  background: #ffffff;
  border: 1px solid #0000Af;
  color: #0000Af;
  border-radius: 4.26437px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;
}
#btnFunci:hover {
  background-color: #0000af;
  color: #ffffff;
}
.linkParrafo:hover {
  text-decoration: underline;
}
</style>
