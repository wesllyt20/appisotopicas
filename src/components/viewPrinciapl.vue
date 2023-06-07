<template>
  <v-app>
    <!-- START HEADER -->
    <!-- SUPERIOR -->
    <div class="barra-superior">
      <div class="logos">
        <v-img
          id="minam"
          src="https://www.igp.gob.pe/programas-de-investigacion/images/logo-minan.png"
        />
        <v-img
          id="igpLogo"
          src="https://www.igp.gob.pe/programas-de-investigacion/images/logo_igp_normal.png"
        />
      </div>
      <div id="dividermenutop" class="border border-vertical" />
      <h1 class="titulo">Estaciones Isotópicas</h1>

      <div class="opciones">
        <a
          id="acerca"
          class="my-linktop"
          @click="btnGeofi()"
          :class="{ 'my-linktop': true, active: mostrarGeo }"
          >Acerca de</a
        >
        <div id="dividermenutopL" class="border border-vertical" />

        <a
          id="func"
          class="my-linktop"
          @click="btnFuncion()"
          :class="{ 'my-linktop': true, active: mostrarFun }"
          >Guía de uso</a
        >
        <div id="dividermenutopL" class="border border-vertical" />

        <a
          id="contacto"
          class="my-linktop"
          @click="btnCont()"
          :style="{ marginRight: '50px' }"
          :class="{ 'my-linktop': true, active: mostrarCont }"
          >Contacto</a
        >
      </div>

      <button class="menu-btn" @click="toggleMenu">
        <svg
          fill="#65696c"
          width="24px"
          height="24px"
          viewBox="0 0 32.00 32.00"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#65696c"
          style="margin-top: 10px"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"
            ></path>
          </g>
        </svg>
      </button>

      <div v-if="showMenu" class="dropdown-menu">
        <ul>
          <li>
            <a
              id="acerca"
              @click="
                btnGeofi();
                closeMenu();
              "
              :class="{ 'my-linktop': true, active: mostrarGeo }"
              >Acerca de</a
            >
          </li>
          <li>
            <a
              id="func"
              @click="
                btnFuncion();
                closeMenu();
              "
              :class="{ 'my-linktop': true, active: mostrarFun }"
              >Guía de uso</a
            >
          </li>
          <li>
            <a
              id="contacto"
              @click="
                btnCont();
                closeMenu();
              "
              :class="{ 'my-linktop': true, active: mostrarCont }"
              >Contacto</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- final superior -->
    <!-- INFERIOR -->
    <div class="barra-inferior">
      <a
        class="my-link"
        href="https://www.gob.pe/igp"
        target="_blank"
        :style="{ marginLeft: '48px' }"
      >
        <span class="link-text">
          <svg
            class="mi-svg"
            width="18px"
            height="18px"
            viewBox="0 0 24.00 24.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#211d18"
            style="vertical-align: middle; margin-right: 4px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect x="0" fill="none" width="24" height="24"></rect>
              <g>
                <path
                  d="M22 9L12 1 2 9v2h2v10h5v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4h5V11h2V9z"
                ></path>
              </g>
            </g>
          </svg>
          Portal IGP</span
        >
      </a>

      <div id="dividermenubot" class="border border-vertical" />
      <a
        class="my-link"
        href="https://www.igp.gob.pe/servicios/infraestructura-de-datos-espaciales/"
        target="_blank"
        >Infraestructura de datos espaciales (IDE - IGP)</a
      >
      <div id="dividermenubot" class="border border-vertical" />
      <a
        class="my-link"
        href="https://www.igp.gob.pe/servicios/infraestructura-de-datos-espaciales/componentes/visor-geografico"
        target="_blank"
        >Visor Geográfico</a
      >
      <div id="dividermenubot" class="border border-vertical" />
      <span class="my-link" style="color: #0000af; text-decoration: none"
        >Estaciones Isotópicas</span
      >
    </div>
    <!-- final inferior -->
    <!-- EMD HEADER -->

    <!-- START MENU -->
    <!-- boton -->
    <div v-if="showVButton" class="tooltip">
      <v-btn
        id="btnFlecha"
        class="rail-variant ml-n9"
        :class="{ 'rail-variant--open': drawer, 'bounce-right': isLoaded }"
        icon
        @click.stop="onMoveWidgetsButtonClick"
      >
        <v-img
          id="iconFlecha"
          class="rotate-image"
          :class="{ 'rotate-180': !drawer }"
          src="https://i.ibb.co/CJzYHCM/Vector-1.png"
        ></v-img>
        <!--https://i.ibb.co/VSqBM9X/Vector-1.png →→→→ -->
        <span class="tooltiptext">{{ tooltipText }}</span>
      </v-btn>
    </div>
    <!-- contenedor de menu -->
    <v-navigation-drawer
      class="vNavi"
      v-model="drawer"
      :scrim="false"
      hide-overlay
      :style="{
        transition: 'transform 0.01s ease-in-out',
        width: anchoMenu,
        marginTop: marginTopNav,
      }"
    >
      <div
        class="cerrarAside"
        style="
          position: absolute;
          top: 0;
          right: 0;
          margin: 5px 15px;
          cursor: pointer;
        "
        @click="drawer = false"
      >
        <a
          style="
            color: #20aaff;
            font-weight: bold;
            font-size: 15px;
            position: relative;
          "
        >
          <span
            style="
              position: absolute;
              top: 6px;
              right: 6px;
              width: 20px;
              height: 20px;
              background-color: white;
              border-radius: 50%;
              border: 1px solid #0000;
              box-shadow: -0.839103px 1.67821px 3.35641px rgba(0, 0, 0, 0.6);
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <span style="position: relative">x</span>
          </span>
        </a>
      </div>
      <contFuncion v-show="mostrarFun"></contFuncion>
      <contGeofisico v-show="mostrarGeo"></contGeofisico>
      <contContacto v-show="mostrarCont"></contContacto>
      <contListado v-show="mostrarList"></contListado>
    </v-navigation-drawer>
    <!-- END MENU -->

    <!-- START IFRAME -->
    <div id="contenedor" style="">
      <iframe
        id="inlineFrameExample"
        src="https://ide.igp.gob.pe/geovisor/estaciones-isotopicas/"
        style="width: 100%; height: 100%; border: 0"
        @load="iframeLoad"
      ></iframe>
    </div>
    <!-- END IFRAME -->
  </v-app>
</template>

<script>
import contFuncion from "./contFuncion.vue";
import contGeofisico from "./contGeofisico.vue";
import contContacto from "./contContacto.vue";
import contListado from "./contListado.vue";
import axios from "axios";

window.onload = function () {
  var iframe = document.getElementById("inlineFrameExample");
  var container = document.getElementById("contenedor");
  iframe.onload = function () {
    container.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";
  };
};
const ids = [
  "widgets_ZoomSlider_Widget_40",
  "widgets_HomeButton_Widget_41",
  "_51_panel",
  "dijit__WidgetBase_0",
];
export default {
  name: "viewPrincipal",

  components: {
    contFuncion,
    contGeofisico,
    contContacto,
    contListado,
  },
  data() {
    return {
      railVariantLeft: 10,
      drawer: false,
      mostrarGeo: false,
      mostrarFun: false,
      mostrarCont: false,
      mostrarList: false,
      anchoMenu: "450px",
      marginTopNav: null,
      elementos: false,
      indexflecha: -1,
      showMenu: false,
      isLoaded: false,

      showVButton: false,
      tooltipText: "Cierra aquí!",
      accionTooltip: "visible",
      widTooltip: "150px",
      contTablaIni: false,
    };
  },

  mounted() {
    window.addEventListener("resize", this.ajustarMargenTop);
    if (window.innerWidth <= 1690) {
      //AQUI PUEDE ENTRAR EL ANCHO DEL ASIDE
      this.marginTopNav = "80px";
    } else {
      this.marginTopNav = "120px";
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.ajustarMargenTop);
  },
  methods: {
    tablaContador(dataJson, imgContenedor) {
      const count = Object.keys(dataJson).length;
      // console.log("Cantidad de elementos encontrados:", count);

      //crear Tabla contenedora de contadores
      const tabla = document.createElement("table");
      tabla.style.borderCollapse = "collapse";
      tabla.id = "tableCount";
      tabla.style.display = "block";
      tabla.style.width = "200px";
      tabla.style.fontSize = "16px";
      tabla.style.position = "absolute";
      tabla.style.top = "10px";

      const IzAncho = "80px";
      const derAncho = "90px";

      const fila = document.createElement("tr");
      // Celda "Departamento"
      const celTotal = document.createElement("td");
      celTotal.style.width = IzAncho;
      celTotal.style.height = "30px";
      celTotal.textContent = "Estacion";
      celTotal.style.textAlign = "center";
      celTotal.style.fontWeight = "bold";

      fila.appendChild(celTotal);

      // Celda "data.Departamento"
      const celDataTotal = document.createElement("td");
      celDataTotal.style.width = derAncho;
      celDataTotal.style.height = "30px";
      celDataTotal.textContent = "Registro(s)";
      celDataTotal.style.textAlign = "center";
      celDataTotal.style.fontWeight = "bold";
      fila.appendChild(celDataTotal);

      tabla.appendChild(fila);
      const countID = {};
      // Recorrer los elementos del JSON
      for (let i = 0; i < count; i++) {
        const id = dataJson[i].id;
        // Aumentar el contador correspondiente
        if (countID[id]) {
          countID[id] += 1;
        } else {
          countID[id] = 1;
        }
      }
      const filasid = [];
      for (const id in countID) {
        const fila = document.createElement("tr");

        // Celda "Estaciones"
        const celdaId = document.createElement("td");
        celdaId.style.width = IzAncho;
        celdaId.style.height = "30px";
        celdaId.textContent = id;
        celdaId.style.textAlign = "center";
        fila.appendChild(celdaId);

        // Celda "data.Estaciones"
        const celdaDatosId = document.createElement("td");
        celdaDatosId.style.width = derAncho;
        celdaDatosId.style.height = "30px";

        /*  if (countID[dxs] === null) {
          celdaDatosId.textContent = "-";
        } else {
        }*/
        celdaDatosId.textContent = countID[id];

        celdaDatosId.style.textAlign = "center";
        fila.appendChild(celdaDatosId);

        filasid.push(fila);
      }

      filasid.sort((filaA, filaB) => {
        const idA = filaA.querySelector("td:first-child").textContent;
        const idB = filaB.querySelector("td:first-child").textContent;
        return countID[idB] - countID[idA];
      });

      imgContenedor.appendChild(tabla);

      for (const fila of filasid) {
        tabla.appendChild(fila);
      }
    },

    cTableSinData(dataArray, contenedorIMG) {
      // Crea la tabla
      const tabla = document.createElement("table");
      tabla.style.borderCollapse = "collapse";
      tabla.id = "TabSinData";
      tabla.style.width = "400px";
      tabla.style.fontSize = "16px";
      tabla.style.position = "absolute";
      tabla.style.top = "10px";

      const fila = document.createElement("tr");
      const IzAncho = "120px";
      const derAncho = "250px";

      // Celda "Departamento"
      const celdaDepartamento = document.createElement("td");
      celdaDepartamento.style.width = IzAncho;
      celdaDepartamento.style.height = "30px";
      celdaDepartamento.textContent = "Departamento";
      fila.appendChild(celdaDepartamento);

      // Celda "data.Departamento"
      const celdaDataDepartamento = document.createElement("td");
      celdaDataDepartamento.style.width = derAncho;
      celdaDataDepartamento.style.height = "30px";
      celdaDataDepartamento.textContent = dataArray.departamento;
      fila.appendChild(celdaDataDepartamento);

      const fila2 = document.createElement("tr");

      // Celda "Contacto"
      const celdaContacto = document.createElement("td");
      celdaContacto.style.width = IzAncho;
      celdaContacto.style.height = "30px";
      celdaContacto.textContent = "Contacto";
      fila2.appendChild(celdaContacto);

      // Celda "data.Contacto"
      const celdaDataContacto = document.createElement("td");
      celdaDataContacto.style.width = derAncho;
      celdaDataContacto.style.height = "30px";
      celdaDataContacto.textContent = dataArray.contacto;
      fila2.appendChild(celdaDataContacto);

      const fila3 = document.createElement("tr");

      // Celda "Correo"
      const celdaCorreo = document.createElement("td");
      celdaCorreo.style.width = IzAncho;
      celdaCorreo.style.height = "30px";
      celdaCorreo.textContent = "Correo";
      fila3.appendChild(celdaCorreo);

      // Celda "data.Correo"
      const celdaDataCorreo = document.createElement("td");
      celdaDataCorreo.style.width = derAncho;
      celdaDataCorreo.style.height = "30px";
      celdaDataCorreo.textContent = dataArray.correo;
      fila3.appendChild(celdaDataCorreo);

      const fila4 = document.createElement("tr");

      // Celda "Referencia"
      const celdaReferencia = document.createElement("td");
      celdaReferencia.style.width = IzAncho;
      celdaReferencia.style.height = "30px";
      celdaReferencia.textContent = "Referencia";
      fila4.appendChild(celdaReferencia);

      // Celda "data.Referencia"
      const celdaDataReferencia = document.createElement("td");
      celdaDataReferencia.style.width = derAncho;
      celdaDataReferencia.style.height = "30px";
      celdaDataReferencia.textContent = dataArray.referencia;
      fila4.appendChild(celdaDataReferencia);

      const fila5 = document.createElement("tr");

      // Celda "Frecuencia"
      const celdaFrecuencia = document.createElement("td");
      celdaFrecuencia.style.width = IzAncho;
      celdaFrecuencia.style.height = "30px";
      celdaFrecuencia.textContent = "Frecuencia";
      fila5.appendChild(celdaFrecuencia);

      // Celda "data.Frecuencia"
      const celdaDataFrecuencia = document.createElement("td");
      celdaDataFrecuencia.style.width = derAncho;
      celdaDataFrecuencia.style.height = "30px";
      celdaDataFrecuencia.textContent = dataArray.frecuencia;
      fila5.appendChild(celdaDataFrecuencia);

      const fila6 = document.createElement("tr");

      // Celda "URL"
      const celdaURL = document.createElement("td");
      celdaURL.style.width = IzAncho;
      celdaURL.style.height = "30px";
      celdaURL.textContent = "URL";
      fila6.appendChild(celdaURL);

      // Celda "data.url"
      const celdaDataURL = document.createElement("td");
      celdaDataURL.style.width = derAncho;
      celdaDataURL.style.height = "30px";

      const aUrl = document.createElement("a");
      aUrl.href = dataArray.url;
      aUrl.rel = "nofollow";
      aUrl.textContent = "Ver información";
      aUrl.style.cursor = "pointer";
      aUrl.style.textDecoration = "underline";
      aUrl.target = "_blank";

      celdaDataURL.appendChild(aUrl);

      fila6.appendChild(celdaDataURL);

      tabla.appendChild(fila);
      tabla.appendChild(fila2);
      tabla.appendChild(fila3);
      tabla.appendChild(fila4);
      tabla.appendChild(fila5);
      tabla.appendChild(fila6);

      // Agrega la tabla al contenedor
      contenedorIMG.appendChild(tabla);
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },

    ajustarMargenTop() {
      if (window.innerWidth <= 1690) {
        //AQUI PUEDE ENTRAR EL ANCHO DEL ASIDE
        this.marginTopNav = "80px";
      } else {
        this.marginTopNav = "120px";
      }
    },

    async fetchData(urlDATA) {
      const iframe = document.getElementById("inlineFrameExample");
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow.document;

      try {
        const response = await axios.get(urlDATA);

        const data = response.data;
        // Construye la tabla con los datos obtenidos
        const contenedorTabla = iframeDocument
          .getElementById("widgets_About_Widget_56")
          .getElementsByClassName(
            "about-container firstFocusNode lastFocusNode"
          )[0];

        if (!this.contTablaIni) {
          contenedorTabla.style.visibility = "hidden";
          this.contTablaIni = true;
        }

        const tablaAnterior = contenedorTabla.querySelector("table");
        if (tablaAnterior) {
          contenedorTabla.removeChild(tablaAnterior);
        }

        const table = document.createElement("table");
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.style.border = "1px solid #ccc";

        // Crea la fila de encabezado en negrita
        const headerRow = document.createElement("tr");

        const headers = [
          "ID",
          "Estación",
          "Fecha Final",
          "δ¹⁸O",
          "δ²H",
          "Dxs",
          "Tipo de Agua",
          "Información",
        ];
        for (let header of headers) {
          const th = document.createElement("th");
          th.style.fontWeight = "bold";
          th.style.backgroundColor = "#f2f2f2";
          th.textContent = header;
          th.style.textAlign = "center";
          th.style.border = "1px solid #ccc";
          headerRow.appendChild(th);
        }

        table.appendChild(headerRow);

        // PROBLEMA EMPIEZA AQUI DE FIERFOX
        const spanElement = iframeDocument.getElementById(
          "jimu_dijit_ToggleButton_1"
        );

        if (typeof spanElement === "object" && spanElement !== null) {
          // Crear un observador de mutaciones
          const mutationObserver = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
              if (mutation.attributeName === "class") {
                const classList = spanElement.getAttribute("class");

                // Validar si la clase contiene "checked"
                if (classList.includes("checked")) {
                  contenedorTabla.style.visibility = "visible ";
                  //contenedorTabla.style.display = "flex";
                } else {
                  contenedorTabla.style.visibility = "hidden ";
                  //contenedorTabla.style.display = "none";
                }
              }
            });
          });

          // Configurar el observador para observar cambios en el atributo 'class'
          mutationObserver.observe(spanElement, {
            attributes: true,
            attributeFilter: ["class"],
          });
        } else {
          console.error("spanElement no es un objeto válido");
        }

        // Llena la tabla con los datos
        const dataArray = Object.values(data);
        for (let item of dataArray) {
          const row = document.createElement("tr");

          const idCell = document.createElement("td");
          idCell.style.width = "8%";
          idCell.style.fontWeight = "bold";
          idCell.textContent = item.id;
          idCell.style.border = "1px solid #ccc";
          idCell.style.textAlign = "center";
          row.appendChild(idCell);

          const estacionCell = document.createElement("td");
          estacionCell.style.width = "33%";
          estacionCell.textContent = item.estacion;
          estacionCell.style.border = "1px solid #ccc";
          estacionCell.style.textAlign = "start";
          estacionCell.style.paddingLeft = "4px";
          row.appendChild(estacionCell);

          const fechaCell = document.createElement("td");
          fechaCell.style.width = "11%";
          fechaCell.style.border = "1px solid #ccc";
          fechaCell.style.textAlign = "center";

          const fechaTimestamp = item.fe_final; // aquí obtienes el valor de la fecha desde la API
          const fecha = new Date(fechaTimestamp);
          const dia = fecha.getDate();
          const mes = fecha.getMonth() + 1;
          const anio = fecha.getFullYear();
          const fechaFormateada = `${dia.toString().padStart(2, "0")}/${mes
            .toString()
            .padStart(2, "0")}/${anio}`;

          fechaCell.textContent = fechaFormateada;
          row.appendChild(fechaCell);

          const d18oCell = document.createElement("td");
          d18oCell.style.width = "7%";

          if (item.d18o === null) {
            d18oCell.textContent = "-";
          } else {
            d18oCell.textContent = item.d18o;
          }

          d18oCell.style.border = "1px solid #ccc";
          d18oCell.style.textAlign = "center";
          row.appendChild(d18oCell);

          const d2hCell = document.createElement("td");
          d2hCell.style.width = "6%";
          d2hCell.textContent = item.d2h;

          if (item.d2h === null) {
            d2hCell.textContent = "-";
          } else {
            d2hCell.textContent = item.d2h;
          }

          d2hCell.style.border = "1px solid #ccc";
          d2hCell.style.textAlign = "center";
          row.appendChild(d2hCell);

          const dxaCell = document.createElement("td");
          dxaCell.style.width = "6%";
          dxaCell.textContent = item.dxs;

          if (item.dxs === null) {
            dxaCell.textContent = "-";
          } else {
            dxaCell.textContent = item.dxs;
          }

          dxaCell.style.border = "1px solid #ccc";
          dxaCell.style.textAlign = "center";
          row.appendChild(dxaCell);

          const tipAguaCell = document.createElement("td");
          tipAguaCell.style.width = "18%";
          tipAguaCell.textContent = item.tipo_agua;
          tipAguaCell.style.border = "1px solid #ccc";
          tipAguaCell.style.textAlign = "center";
          row.appendChild(tipAguaCell);

          const urlCell = document.createElement("td");
          urlCell.style.width = "11%";
          urlCell.style.border = "1px solid #ccc";
          urlCell.style.textAlign = "center";
          const aUrl = document.createElement("a");
          if (item.url === null) {
            aUrl.textContent = "no data";
          } else {
            aUrl.href = item.url;
            aUrl.textContent = "Ver más";
            aUrl.style.cursor = "pointer";
            aUrl.style.textDecoration = "underline";
            aUrl.target = "_blank";
            aUrl.rel = "nofollow";
          }
          row.appendChild(urlCell);
          urlCell.appendChild(aUrl);

          table.appendChild(row);
        }

        contenedorTabla.appendChild(table);
      } catch (error) {
        console.error(error);
      }
    },
    iframeLoad() {
      const iframe = document.getElementById("inlineFrameExample");
      setTimeout(() => {
        const btnFiltro = iframe.contentDocument.getElementById(
          "dijit__WidgetBase_0"
        );
        btnFiltro.click();

        this.mostrarGeo = false;
        this.indexflecha = 1;
        this.isLoaded = true;
        this.showVButton = true;

        setTimeout(() => {
          this.drawer = true;
          btnFiltro.click();

          console.log("↓↓↓↓↓");
          const urs = this;
          function construirURL(departamento, tipoAgua, estacion) {
            const urlBase =
              "https://ide.igp.gob.pe/api/isotopicos/lineameteoricalocal";
            const urlCompleta = `${urlBase}/${departamento}/${tipoAgua}/${estacion}`;
            return urlCompleta;
          }
          //Linea Variacion Temporal
          function construirURL2(departamento, tipoAgua, estacion) {
            const urlBase =
              "https://ide.igp.gob.pe/api/isotopicos/variaciontemporald180";
            const urlCompleta = `${urlBase}/${departamento}/${tipoAgua}/${estacion}`;
            return urlCompleta;
          }
          //DATA
          function construirURL3(departamento, tipoAgua, estacion) {
            const urlBase = "https://ide.igp.gob.pe/api/isotopicos/datajson";
            const urlCompleta = `${urlBase}/${departamento}/${tipoAgua}/${estacion}`;
            return urlCompleta;
          }
          function construirURLExcel(departamento, tipoAgua, estacion) {
            const urlBase = "https://ide.igp.gob.pe/api/isotopicos/data";
            const urlCompleta = `${urlBase}/${departamento}/${tipoAgua}/${estacion}`;
            return urlCompleta;
          }

          const iframeDocument =
            iframe.contentDocument || iframe.contentWindow.document;
          const contReset = iframeDocument.getElementById("_51_panel");

          //crear btnExcel
          const divStacks = iframeDocument.getElementById(
            "jimu-layout-manager"
          );
          const contExcel = divStacks
            .querySelector(".jimu-dnd-layout")
            .querySelector(".lm_goldenlayout")
            .querySelector(".lm_item")
            .querySelector(".lm_column")
            .querySelector(".lm_item");

          const btnExcel = document.createElement("a");
          btnExcel.style.position = "absolute";
          btnExcel.style.right = "26px";
          btnExcel.style.zIndex = "999";
          btnExcel.style.top = "2px";
          btnExcel.innerText = "Descargar Excel";
          btnExcel.style.color = "#000000";
          btnExcel.style.width = "120px";
          btnExcel.style.height = "25px";
          btnExcel.style.borderRadius = "10px";
          btnExcel.style.border = "2px solid #e7e7e7";
          btnExcel.style.backgroundColor = "#fff";
          btnExcel.style.cursor = "pointer";
          btnExcel.style.textAlign = "center";
          btnExcel.style.display = "flex";
          btnExcel.style.alignItems = "center";
          btnExcel.style.justifyContent = "center";
          btnExcel.style.visibility = "hidden";

          btnExcel.addEventListener("mouseover", () => {
            btnExcel.style.backgroundColor = "#e7e7e7";
            btnExcel.style.color = "#000000";
          });

          btnExcel.addEventListener("mouseout", () => {
            btnExcel.style.backgroundColor = "#fff";
            btnExcel.style.color = "#000000";
          });

          // Estilos CSS para el efecto de click
          btnExcel.addEventListener("mousedown", () => {
            btnExcel.style.backgroundColor = "#c9c9c9";
            btnExcel.style.color = "#000000";
          });

          btnExcel.addEventListener("mouseup", () => {
            btnExcel.style.backgroundColor = "#fff";
            btnExcel.style.color = "#000000";
          });

          contExcel.appendChild(btnExcel);

          // Función para comprobar la existencia del elemento <span> y configurar el observador de mutaciones
          function checkAndSetupObserver() {
            const spanElement = iframeDocument.getElementById(
              "jimu_dijit_ToggleButton_1"
            );

            if (spanElement !== null) {
              // El elemento <span> existe, configurar el observador de mutaciones
              const mutationObserver = new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                  if (mutation.attributeName === "class") {
                    const classList = spanElement.getAttribute("class");

                    // Validar si la clase contiene "checked"
                    if (classList.includes("checked")) {
                      contenedor.style.visibility = "visible";
                      btnExcel.style.visibility = "visible";
                      //contenedorTabla.style.display = "flex";
                    } else {
                      contenedor.style.visibility = "hidden";
                      btnExcel.style.visibility = "hidden";
                      //contenedorTabla.style.display = "none";
                    }
                  }
                });
              });

              mutationObserver.observe(spanElement, {
                attributes: true,
                attributeFilter: ["class"],
              });
            } else {
              // El elemento <span> no existe todavía, volver a comprobar después de 100 ms
              setTimeout(checkAndSetupObserver, 100);
            }
          }

          // Comenzar comprobando y configurando el observador de mutaciones
          checkAndSetupObserver();

          // LLENADO DE GRAFICO
          const contenedor = iframeDocument
            .getElementById("widgets_About_Widget_57")
            .getElementsByClassName(
              "about-container firstFocusNode lastFocusNode"
            )[0];

          contenedor.style.visibility = "hidden";
          contenedor.style.flexDirection = "column";
          contenedor.style.alignItems = "center";
          contenedor.style.width = "100%";
          contenedor.style.height = "100%";
          contenedor.style.overflow = "hidden";

          // Datos para llenar Links
          let Departamento = "ALL";
          let tipoAgua = "ALL";
          let estacion = "ALL";

          // FUNCIONES -----------
          //Linea Meteorologica

          const observerOptions = {
            childList: true,
            subtree: true,
            characterData: true,
          };

          const btnContenedor = document.createElement("div");
          btnContenedor.id = "btnContenedor";
          btnContenedor.style.display = "flex";
          btnContenedor.style.alignItems = "center";
          btnContenedor.style.position = "fixed";
          contenedor.appendChild(btnContenedor);

          const pestaña1 = document.createElement("button");
          pestaña1.id = "pestaña1";
          pestaña1.textContent = "GRAFICA 1";
          pestaña1.style.color = "#000000";
          pestaña1.style.width = "100px";
          pestaña1.style.height = "30px";
          pestaña1.style.borderRadius = "10px";
          pestaña1.style.border = "2px solid #e7e7e7";
          pestaña1.style.backgroundColor = "#c9c9c9";
          pestaña1.style.cursor = "pointer";
          btnContenedor.appendChild(pestaña1);

          const pestaña2 = document.createElement("button");
          pestaña2.id = "pestaña2";
          pestaña2.textContent = "GRAFICA 2";
          pestaña2.style.color = "#000000";
          pestaña2.style.width = "100px";
          pestaña2.style.height = "30px";
          pestaña2.style.borderRadius = "10px";
          pestaña2.style.border = "2px solid #e7e7e7";
          pestaña2.style.marginLeft = "10px";
          pestaña2.style.backgroundColor = "#fff";
          pestaña2.style.cursor = "pointer";
          btnContenedor.appendChild(pestaña2);

          // AQUI EL SHOW
          const imgContenedor = document.createElement("div");
          imgContenedor.id = "imgContenedor";
          imgContenedor.style.display = "grid";
          imgContenedor.style.gridTemplateColumns = "10fr 2fr";
          imgContenedor.style.flexDirection = "center";
          imgContenedor.style.alignItems = "center";
          imgContenedor.style.justifyContent = "center";
          //  imgContenedor.style.width = "100%";
          //  imgContenedor.style.height = "100%";
          contenedor.appendChild(imgContenedor);

          const imgContenedorImg = document.createElement("div");
          imgContenedorImg.id = "imgContenedorImg";
          imgContenedorImg.style.display = "flex";
          imgContenedorImg.style.justifyContent = "center";

          const imgContenedorTab = document.createElement("div");
          imgContenedorTab.id = "imgContenedorTab";
          imgContenedorTab.style.display = "flex";
          imgContenedorTab.style.justifyContent = "center";
          imgContenedorTab.style.overflowX = "hidden";
          imgContenedorTab.style.overflowY = "scroll";
          imgContenedor.appendChild(imgContenedorImg);
          imgContenedor.appendChild(imgContenedorTab);
          /* IMPRIMIR PRIMER URL*/
          const url = construirURL(Departamento, tipoAgua, estacion);
          const url2 = construirURL2(Departamento, tipoAgua, estacion);
          const url3 = construirURL3(Departamento, tipoAgua, estacion);
          const urlExcel = construirURLExcel(Departamento, tipoAgua, estacion);
          funLinksActivos(url, url2);
          urs.fetchData(url3);
          btnExcel.href = urlExcel;
          axios.get(url3).then((response) => {
            const data = response.data;
            this.tablaContador(data, imgContenedorTab);
          });

          console.log(url);
          console.log(url2);
          console.log(url3);

          const prScroll = iframeDocument.querySelector("#dijit__WidgetBase_2");
          prScroll.style.overflowX = "hidden";

          // INTERVALO PARA LOS CBO
          const intervaloIN = setInterval(() => {
            const elementoIN = iframeDocument.querySelector(
              '.checkBtn [data-dojo-attach-point="checkedNameDiv"]'
            );
            if (elementoIN) {
              // Detener el intervalo
              clearInterval(intervaloIN);

              //DEPARTAMENTO
              const dijitWidget = iframeDocument.getElementById(
                "dijit__WidgetsInTemplateMixin_0"
              );
              const selectElement =
                dijitWidget.querySelector(".checkedNameDiv");

              //TIPO DE AGUA
              const dijitWidget2 = iframeDocument.getElementById(
                "dijit__WidgetsInTemplateMixin_2"
              );
              const selectElement2 =
                dijitWidget2.querySelector(".checkedNameDiv");

              //ESTACION
              const dijitWidget4 = iframeDocument.getElementById(
                "dijit__WidgetsInTemplateMixin_4"
              );
              const selectElement4 =
                dijitWidget4.querySelector(".checkedNameDiv");

              //DEPARTAMENTO
              const observer = new MutationObserver(() => {
                Departamento = selectElement.innerText;

                if (
                  Departamento === "- vacío -" ||
                  Departamento.trim() === ""
                ) {
                  const elementos = iframeDocument.querySelectorAll(
                    '.jimu-popup [data-dojo-attach-point="listContent"] .emptyItem[aria-checked=false]'
                  );

                  elementos.forEach((elemento) => {
                    elemento.click();
                  });

                  Departamento = "ALL";
                }
                estacion = "ALL";
                tipoAgua = "ALL";
                selectElement2.innerText = "";
                selectElement4.innerText = "";

                const url = construirURL(Departamento, tipoAgua, estacion);
                const url2 = construirURL2(Departamento, tipoAgua, estacion);
                const url3 = construirURL3(Departamento, tipoAgua, estacion);
                const urlExcel = construirURLExcel(
                  Departamento,
                  tipoAgua,
                  estacion
                );

                const tableCount = iframeDocument.getElementById("tableCount");

                const imagenAnterior =
                  iframeDocument.getElementById("imagenDATO") ||
                  iframeDocument.getElementById("TabSinData");

                if (imagenAnterior) {
                  const imgContenedor = imagenAnterior.parentNode;
                  imgContenedor.removeChild(imagenAnterior);
                  const tableCountContenedor = tableCount.parentNode;
                  tableCountContenedor.removeChild(tableCount);
                }

                axios.get(url3).then((response) => {
                  const data = response.data;
                  const firstItem = data["0"];
                  const urlJSON = firstItem.url;

                  if (
                    urlJSON === "https://nucleus.iaea.org/wiser/index.aspx" ||
                    urlJSON === "https://nucleus.iaea.org/wiser"
                  ) {
                    btnContenedor.style.display = "none";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";

                    urs.cTableSinData(firstItem, imgContenedorImg);
                  } else {
                    funLinksActivos(url, url2);
                    btnContenedor.style.display = "flex";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";
                  }
                  imgContenedor.style.gridTemplateColumns = "10fr 2fr";
                  this.tablaContador(data, imgContenedorTab);
                });
                urs.fetchData(url3);
                btnExcel.href = urlExcel;
              });
              observer.observe(selectElement, observerOptions);

              //TIPO DE AGUA
              const observer2 = new MutationObserver(() => {
                tipoAgua = selectElement2.innerText;

                if (tipoAgua === "- vacío -" || tipoAgua.trim() === "") {
                  tipoAgua = "ALL";
                }
                selectElement4.innerText = "";
                estacion = "ALL";

                const url = construirURL(Departamento, tipoAgua, estacion);
                const url2 = construirURL2(Departamento, tipoAgua, estacion);
                const url3 = construirURL3(Departamento, tipoAgua, estacion);
                const urlExcel = construirURLExcel(
                  Departamento,
                  tipoAgua,
                  estacion
                );

                const tableCount = iframeDocument.getElementById("tableCount");

                const imagenAnterior =
                  iframeDocument.getElementById("imagenDATO") ||
                  iframeDocument.getElementById("TabSinData");

                if (imagenAnterior) {
                  const imgContenedor = imagenAnterior.parentNode;
                  imgContenedor.removeChild(imagenAnterior);
                  const tableCountContenedor = tableCount.parentNode;
                  tableCountContenedor.removeChild(tableCount);
                }

                axios.get(url3).then((response) => {
                  const data = response.data;
                  const firstItem = data["0"];
                  const urlJSON = firstItem.url;

                  if (
                    urlJSON === "https://nucleus.iaea.org/wiser/index.aspx" ||
                    urlJSON === "https://nucleus.iaea.org/wiser"
                  ) {
                    btnContenedor.style.display = "none";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";
                    urs.cTableSinData(firstItem, imgContenedorImg);
                  } else {
                    funLinksActivos(url, url2);
                    btnContenedor.style.display = "flex";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";
                  }
                  imgContenedor.style.gridTemplateColumns = "10fr 2fr";
                  this.tablaContador(data, imgContenedorTab);
                });
                urs.fetchData(url3);
                btnExcel.href = urlExcel;
              });
              observer2.observe(selectElement2, observerOptions);

              //ESTACION
              const observer4 = new MutationObserver(() => {
                estacion = selectElement4.innerText;

                if (estacion === "- vacío -" || estacion.trim() === "") {
                  estacion = "ALL";
                }

                const url = construirURL(Departamento, tipoAgua, estacion);
                const url2 = construirURL2(Departamento, tipoAgua, estacion);
                const url3 = construirURL3(Departamento, tipoAgua, estacion);
                const urlExcel = construirURLExcel(
                  Departamento,
                  tipoAgua,
                  estacion
                );

                const tableCount = iframeDocument.getElementById("tableCount");

                const imagenAnterior =
                  iframeDocument.getElementById("imagenDATO") ||
                  iframeDocument.getElementById("TabSinData");

                if (imagenAnterior) {
                  const imgContenedor = imagenAnterior.parentNode;
                  imgContenedor.removeChild(imagenAnterior);
                  const tableCountContenedor = tableCount.parentNode;
                  tableCountContenedor.removeChild(tableCount);
                }

                axios.get(url3).then((response) => {
                  const data = response.data;
                  const firstItem = data["0"];
                  const urlJSON = firstItem.url;

                  if (
                    urlJSON === "https://nucleus.iaea.org/wiser/index.aspx" ||
                    urlJSON === "https://nucleus.iaea.org/wiser"
                  ) {
                    btnContenedor.style.display = "none";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";
                    urs.cTableSinData(firstItem, imgContenedorImg);
                  } else {
                    funLinksActivos(url, url2);
                    btnContenedor.style.display = "flex";
                    pestaña1.style.backgroundColor = "#c9c9c9";
                    pestaña2.style.backgroundColor = "#fff";
                  }
                  imgContenedor.style.gridTemplateColumns = "10fr 2fr";
                  this.tablaContador(data, imgContenedorTab);
                });
                urs.fetchData(url3);
                btnExcel.href = urlExcel;
              });
              observer4.observe(selectElement4, observerOptions);
            }
          }, 500);

          const btnReset = document.createElement("button");
          btnReset.innerText = "RESET";
          btnReset.style.position = "absolute";
          btnReset.style.top = "330px";
          btnReset.style.right = "32px";
          btnReset.style.zIndex = "999";
          btnReset.style.color = "#000000";
          btnReset.style.width = "100px";
          btnReset.style.height = "30px";
          btnReset.style.borderRadius = "10px";
          btnReset.style.border = "2px solid #e7e7e7";
          btnReset.style.backgroundColor = "#fff";
          btnReset.style.cursor = "pointer";

          // Detiene el intervalo una vez que se encuentra el elemento
          contReset.appendChild(btnReset); // Ejecuta la acción deseada

          btnReset.addEventListener("mouseover", () => {
            btnReset.style.backgroundColor = "#e7e7e7";
          });
          btnReset.addEventListener("mouseout", () => {
            btnReset.style.backgroundColor = "#fff";
          });
          btnReset.addEventListener("mousedown", () => {
            btnReset.style.backgroundColor = "#c9c9c9";
          });

          btnReset.addEventListener("mouseup", () => {
            btnReset.style.backgroundColor = "#fff";
          });

          const toggleButton = iframeDocument.getElementById(
            "jimu_dijit_ToggleButton_1"
          );

          btnReset.addEventListener("click", function () {
            const elementos = iframeDocument.querySelectorAll(
              '.jimu-popup [data-dojo-attach-point="listContent"] .emptyItem[aria-checked=false]'
            );

            elementos.forEach((elemento) => {
              elemento.click();
            });

            estacion = "ALL";
            tipoAgua = "ALL";
            Departamento = "ALL";
            if (toggleButton.classList.contains("checked")) {
              toggleButton.click();
            }
          });

          function funLinksActivos(linkMeter, linkVaria) {
            const btnContenedor =
              iframeDocument.getElementById("btnContenedor");

            const tableCount = iframeDocument.getElementById("tableCount");

            const imagenAnterior =
              iframeDocument.getElementById("imagenDATO") ||
              iframeDocument.getElementById("TabSinData");

            if (imagenAnterior) {
              const imgContenedor = imagenAnterior.parentNode;
              imgContenedor.removeChild(imagenAnterior);
              const tableCountContenedor = tableCount.parentNode;
              tableCountContenedor.removeChild(tableCount);
            }

            const imagen = iframeDocument.createElement("img");
            imagen.src = linkMeter;
            imagen.id = "imagenDATO";
            imagen.style.width = "22%";
            imagen.style.marginTop = "35px";
            imagen.style.position = "fixed";
            imgContenedorImg.appendChild(imagen);

            var pestañas = "uno";
            function obsMaxi() {
              //const obsElement = iframeDocument.querySelector(".lm_maximised");
              const mutationObserver = new MutationObserver(() => {
                const elementExists =
                  !!iframeDocument.querySelector(".lm_maximised");

                if (elementExists) {
                  if (pestañas === "uno") {
                    imagen.style.width = "35%";
                  } else {
                    imagen.style.width = "50%";
                  }
                } else {
                  if (pestañas === "uno") {
                    imagen.style.width = "22%";
                  } else {
                    imagen.style.width = "33%";
                  }
                }
              });

              // Observar cambios en el elemento target
              mutationObserver.observe(
                iframeDocument.querySelector("#jimu-layout-manager"),
                {
                  childList: true,
                  subtree: true,
                }
              );
            }

            // Comenzar comprobando y configurando el observador de mutaciones
            obsMaxi();

            pestaña1.addEventListener("click", function () {
              const tabCount = iframeDocument.querySelector("#tableCount");
              imagen.src = linkMeter;
              pestañas = "uno";
              tabCount.style.display = "block";
              imgContenedor.style.gridTemplateColumns = "10fr 2fr";
              pestaña1.style.backgroundColor = "#c9c9c9";
              pestaña2.style.backgroundColor = "#fff";

              const obsMax = iframeDocument.querySelector(".lm_maximised");
              if (obsMax) {
                imagen.style.width = "35%";
              } else {
                imagen.style.width = "22%";
              }
            });
            btnContenedor.appendChild(pestaña1);

            pestaña2.addEventListener("click", function () {
              const tabCount = iframeDocument.querySelector("#tableCount");
              imagen.src = linkVaria;
              pestañas = "dos";
              tabCount.style.display = "none";
              imgContenedor.style.gridTemplateColumns = "10fr";
              pestaña2.style.backgroundColor = "#c9c9c9";
              pestaña1.style.backgroundColor = "#fff";

              const obsMax = iframeDocument.querySelector(".lm_maximised");
              if (obsMax) {
                imagen.style.width = "50%";
              } else {
                imagen.style.width = "33%";
              }
            });
            btnContenedor.appendChild(pestaña2);
          }
          console.log("↑↑↑↑↑");
          setTimeout(() => {
            this.accionTooltip = "hidden";
            contReset.appendChild(btnReset);
          }, 4000);
        }, 1000);
      }, 3000);
    },

    btnGeofi() {
      this.ocultarTodo();
      this.mostrarGeo = true;
    },
    btnCont() {
      this.ocultarTodo();
      this.mostrarCont = true;
    },
    btnListado() {
      this.ocultarTodo();
      this.mostrarList = true;
    },
    btnFuncion() {
      this.ocultarTodo();
      this.mostrarFun = true;
    },

    ocultarTodo() {
      this.mostrarGeo = false;
      this.mostrarFun = false;
      this.mostrarCont = false;
      this.mostrarList = false;
      this.drawer = true;
    },
    ocultarTodo2() {
      this.mostrarGeo = false;
      this.mostrarFun = false;
      this.mostrarCont = false;
      this.mostrarRequi = false;
    },

    onMoveWidgetsButtonClick() {
      this.drawer = !this.drawer;

      if (this.drawer === false) {
        this.ocultarTodo2();
      } else if (this.drawer === true) {
        this.mostrarGeo = true;
      }
    },
    movewidgets(displacement) {
      const iframe = document.getElementById("inlineFrameExample");
      const idocument = iframe.contentWindow.document;

      ids.forEach((id) => {
        var widget = null;
        while (!widget) {
          widget = idocument.getElementById(id);
        }
        let left = 0;
        if (!widget.style.inset) {
          left = parseInt(widget.style.left.slice(0, 3));
          widget.style.left = `${left + displacement}px`;
        } else {
          let split = widget.style.inset.split(" ");
          left = parseInt(split[3].slice(0, 3));
          split[3] = `${left + displacement}px`;
          widget.style.inset = split.join(" ");
        }
      });
    },
  },
  watch: {
    drawer(val) {
      this.railVariantLeft = val ? 260 : 10;

      if (val === true) {
        this.tooltipText = "¡Cierra aquí!";
        this.widTooltip = "150px";
        this.movewidgets(465);

        if (
          (this.mostrarCont === false) &
          (this.mostrarFun === false) &
          (this.mostrarGeo === false)
        ) {
          this.mostrarGeo = true;
        }
      } else if (val === false) {
        this.tooltipText = "¡Abre aquí!";
        this.widTooltip = "140px";
        this.movewidgets(-465);
        this.mostrarGeo = false;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
#contenedor {
  height: auto;
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.bounce-right {
  animation: bounce-right 0.8s linear both;
}

@keyframes bounce-right {
  0% {
    transform: translateX(48px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateX(26px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(13px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateX(6.5px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateX(4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}
/* CONTENEDOR  */
.fill-height {
  height: 100vh;
  margin-top: 120px;
}

.rail-variant {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: left 0.01s ease-in-out;
}

.rail-variant--open {
  left: calc(v-bind(anchoMenu) + 3px);
}
/* BOTON DE FLECHA */
#btnFlecha {
  margin-top: 12.5rem;
  position: absolute;
  width: 55px;
  height: 55px;
  z-index: v-bind(indexflecha);
  border-radius: 0% 100% 100% 0%;
}
#iconFlecha {
  margin-left: 30px;
  width: 20px;
  height: 19px;
}
/* HEADER SUPERIOR */
.barra-superior {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: #ffffff;
  left: 0px;
  top: 0px;
}

.logos {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

#minam {
  width: 157.49px;
  height: 46px;
  margin-right: 10px;
}

#igpLogo {
  width: 122px;
  height: 40px;
}
#dividermenutop {
  height: 40%;
  margin-left: 25px;
  margin-right: 25px;
}
.titulo {
  color: #0000af;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
}

.opciones {
  display: flex;
  margin-left: auto;
}

.opciones span {
  padding: 0 8px;
}

.opciones span {
  padding: 0 8px;
}

.my-linktop {
  color: #211d18; /* color del enlace */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.my-linktop:hover {
  color: #0000af;
}

.my-linktop:active {
  color: #0000af;
}
.my-linktop:link {
  color: #737b80;
  text-decoration: none;
}
.my-linktop.active {
  color: #0000af;
  pointer-events: none; /* Evita que se pueda hacer clic en el enlace */
  cursor: default; /* Cambia el cursor a "predeterminado" para indicar que no se puede hacer clic */
}

#dividermenutopL {
  color: #211d18;
  margin-top: 4px;
  height: 16px;
  margin-left: 10px;
  margin-right: 10px;
}
/* HEADER INFERIOR */
.barra-inferior {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: rgba(214, 214, 227, 0.1);
  border-width: 1px 0px;
  border-style: solid;
  border-color: #d6d6e3;
  height: 40px;
}

/* botones link */
.my-link {
  color: #211d18;
  text-decoration: none;
  margin-right: 1rem;
  font-weight: 300;
  font-size: 12px;
}
.my-link:link {
  color: #737b80;
  text-decoration: none;
  margin-right: 1rem;
}

.my-link:active {
  color: #0000af;
}

.link-text:hover,
.my-link:hover,
.link-text:hover .mi-svg {
  color: #0000af !important;
  fill: #0000af !important;
  text-decoration: underline;
}
#dividermenubot {
  color: #211d18;
  height: 40%;
  margin-left: 5px;
  margin-right: 15px;
}
.rotate-image {
  transition: transform 0.5s; /* Agrega transición de transformación */
}

.rotate-image.rotate-180 {
  transform: rotate(180deg);
}
.menu-btn {
  display: none; /* ocultar el botón en pantallas grandes */
  cursor: pointer;
  margin-right: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  background: #ffffff;
  border: 0.566325px solid rgba(25, 32, 36, 0.6);
  border-radius: 3.39795px;
}
.menu-btn:active {
  filter: brightness(75%);
}
.dropdown-menu {
  position: absolute;
  margin: 245px 0 0 0;
  padding: 20px 0;
  right: 0;
  z-index: 2;

  background: var(--dropdown-background);
  border-radius: 6px;
  list-style: none;

  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 199999;
}
.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.dropdown-menu li {
  margin-bottom: 10px;
}

.dropdown-menu a {
  color: #333;
  text-decoration: none;
  padding: 5px;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #f7f7f7;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: v-bind(accionTooltip);
  width: v-bind(widTooltip);
  background: rgb(34, 209, 238);
  background: linear-gradient(
    90deg,
    rgba(34, 209, 238, 1) 0%,
    rgba(61, 90, 241, 1) 100%
  );
  text-transform: none;
  color: #fff;
  text-align: center;
  border-radius: 41.116px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 57%;
  left: 130%;
  margin-top: -20px;
  transition: opacity 0.3s ease-in-out;
  box-shadow: -0.839103px 1.67821px 3.35641px rgba(0, 0, 0, 0.6);
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
.cerrarAside {
  display: none;
}
@media screen and (max-width: 1690px) {
  .vNavi {
    margin-top: 80px !important;
  }
  .barra-superior {
    flex-wrap: wrap; /* para que los elementos se ajusten al ancho de la pantalla */
  }
  .titulo {
    margin-right: auto;
  }
  .menu-btn {
    display: block;
  }

  /* ocultar el menú principal en pantallas pequeñas */
  .opciones {
    display: none;
  }

  /* mostrar el menú desplegable en pantallas pequeñas */
  .dropdown-menu {
    display: block;
  }
  .barra-inferior {
    display: none;
  }
  #contenedor {
    top: 80px;
  }
}
@media screen and (max-width: 1341px) {
  .titulo,
  #dividermenutop {
    display: none;
  }
  .cerrarAside {
    display: block;
  }
  .tooltip:hover .tooltiptext {
    visibility: hidden;
  }
}
</style>
