<template>
    <div class="planets-page">
      <Navbar />
  
      <main class="content">
        <div style="text-align: center;">
          <h1>Planetas</h1>
        </div>
  
        <div class="search-box">
          <input v-model="searchId" type="number" placeholder="Enter Planet ID" />
          <button @click="searchPlanet">Search</button>
        </div>
  
        <Loading v-if="loading" />
        <Error v-else-if="error" :message="error" />
  
        <div v-else-if="planetResult">
          <div style="text-align: center; margin-top: 2rem;">
            <h2>Detalles del Planeta</h2>
          </div>
  
          <div class="table-container">
            <table>
              <tr><th>Name</th><td>{{ planetResult.name }}</td></tr>
              <tr><th>Climate</th><td>{{ planetResult.climate }}</td></tr>
              <tr><th>Terrain</th><td>{{ planetResult.terrain }}</td></tr>
              <tr><th>Gravity</th><td>{{ planetResult.gravity }}</td></tr>
              <tr><th>Diameter</th><td>{{ planetResult.diameter }}</td></tr>
              <tr><th>Rotation Period</th><td>{{ planetResult.rotation_period }}</td></tr>
              <tr><th>Orbital Period</th><td>{{ planetResult.orbital_period }}</td></tr>
              <tr><th>Surface Water</th><td>{{ planetResult.surface_water }}</td></tr>
              <tr><th>Population</th><td>{{ planetResult.population }}</td></tr>
              <tr><th>Created</th><td>{{ planetResult.created }}</td></tr>
              <tr><th>Edited</th><td>{{ planetResult.edited }}</td></tr>
              <tr><th>URL</th><td>{{ planetResult.url }}</td></tr>
            </table>
          </div>
        </div>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import api from '../services/api'
  import Loading from '../components/Loading.vue'
  import Error from '../components/Error.vue'
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  
  const loading = ref(false)
  const error = ref(null)
  const searchId = ref('')
  const planetResult = ref(null)
  
  const searchPlanet = async () => {
    if (!searchId.value) return
    try {
      loading.value = true
      error.value = null
      planetResult.value = null
      const response = await api.get(`/planets/${searchId.value}`)
      planetResult.value = response.data.result.properties
    } catch (err) {
      error.value = 'Planet not found.'
      planetResult.value = null
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .planets-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex-grow: 1;
    padding: 2rem;
    color: white;
  }
  
  .search-box {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  
  .search-box input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .search-box button {
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .table-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
  
  table {
    width: auto;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #262525;
    padding: 0.75rem;
    text-align: center;
  }
  
  th {
    background-color: #2e2b2b;
  }
  td {
    background-color: #7a7a7a;
  }
  </style>
  
