<template>
  <div id="divLista">
    <h2 id="tiList">Informes</h2>
    <div id="parLista" class="mb-5">
      <p class="parrafoList">
        Aquí encontrará todos los informes de zonificación de suelos por cada
        región.
      </p>
    </div>
    <h2 id="subtiList">Filtro por región:</h2>
    <select class="select-css" v-model="selectedRegion"  @change="goToFirstPage">
      <option v-for="(region, index) in regions" :key="index" :value="index">
        {{ region.nombre }}
      </option>
    </select>
    <h2 id="subtiList" class="mb-3 mt-8">Resultados:</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr class="" style="color: #0000Af; ">
            <th style="width: 40px">#</th>
            <th class="text-start" style="width: 150px">Ciudad</th>
            <th style="width: 90px;">Año</th>
            <th style="width: 30px">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="(item, index) in displayedItems"
            :key="index"
          >
            <td>{{ item.objectid }}</td>
            <td class="text-start">{{ item.ciudad }}</td>
            <td>{{ item.ano }}</td>
            <td>
              <a :href="`${item.documento}`" target="_blank">Ver</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="totalPages > 1" class="pagination">
  <button @click="previousPage">Anterior</button>
  <span style="color: #0000Af">{{ currentPage }}/{{ totalPages }}</span>
  <button @click="nextPage">Siguiente</button>
</div>

  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      selectedRegion: 0,
      regions: [
        { nombre: "LIMA (20 ciudades)", items: [] },
        { nombre: "AREQUIPA (8 ciudades)", items: [] },
        { nombre: "MOQUEGUA (3 ciudades)", items: [] },
        { nombre: "TACNA (5 ciudades)", items: [] },
        { nombre: "ANCASH (4 ciudades)", items: [] },
        { nombre: "ICA (2 ciudades)", items: [] },
        { nombre: "PIURA (15 ciudades)", items: [] },
      ],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    displayedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.regions[this.selectedRegion].items.slice(
        startIndex,
        endIndex
      );
    },
    totalPages() {
      const region = this.regions[this.selectedRegion];
      return Math.ceil(region.items.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchData() {
      const { data } = await axios.get(
        //"https://ide.igp.gob.pe/geovisor/cds-igp/regenLinks.json"
        "https://api.npoint.io/9858da118b3cdc0fe6e9"
      );
      this.regions[0].items = data.LIMA;
      this.regions[1].items = data.AREQUIPA;
      this.regions[2].items = data.MOQUEGUA;
      this.regions[3].items = data.TACNA;
      this.regions[4].items = data.ANCASH;
      this.regions[5].items = data.ICA;
      this.regions[6].items = data.PIURA;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    goToFirstPage() {
      this.currentPage = 1;
    }
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style>
#divLista {
  margin: 0px 60px 0px 45px;
}
#tiList {
  font-style: normal;
  font-size: 20px;
  line-height: 26px;
  color: #0a1fc2;
  margin: 45px 0px 12px 0px;
}
#parLista {
  margin-bottom: 30px !important;
}
#subtiList {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #0000Af;
}
.parrafoList {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: #00132e;
}

.select-css {
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #444;
  line-height: 1.3;
  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 250px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 15px 0px;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}

.table-container {
  margin-top: 20px;
}
.table {
  width: 350px;
}

th,
td {
  font-weight: 500;
}

a {
  color: #0000af;
  text-decoration: none;
  cursor: pointer;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 2px;
}
.pagination button {
  border: none;
  padding: 5px 5px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
  color: #0000Af;
}
.pagination button:hover {
  background-color: #edf7ff;
}
.pagination span {
  margin: 0 10px;
}
</style>
  