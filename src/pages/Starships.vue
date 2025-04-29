<template>
    <div class="starships-page">
      <Navbar />
  
      <main class="content-wrap">
        <div style="text-align: center;">
          <h1>Naves espaciales</h1>
        </div>
  
        <!-- Buscador -->
        <div class="search-container">
          <input v-model="searchId" type="number" placeholder="Enter Starship ID" />
          <button @click="searchStarship">Search</button>
        </div>
  
        <!-- Estados -->
        <Loading v-if="loading" />
        <Error v-else-if="error" :message="error" />
  
        <!-- Resultado individual -->
        <div v-else-if="starshipResult" class="result-container">
          <h2>Detalles de la nave</h2>
  
          <div class="table-container">
            <table>
              <tr><th>Name</th><td>{{ starshipResult.name }}</td></tr>
              <tr><th>Model</th><td>{{ starshipResult.model }}</td></tr>
              <tr><th>Crew</th><td>{{ starshipResult.crew }}</td></tr>
              <tr><th>Passengers</th><td>{{ starshipResult.passengers }}</td></tr>
              <tr><th>Consumables</th><td>{{ starshipResult.consumables }}</td></tr>
              <tr><th>Cargo Capacity</th><td>{{ starshipResult.cargo_capacity }}</td></tr>
              <tr><th>Cost in Credits</th><td>{{ starshipResult.cost_in_credits }}</td></tr>
              <tr><th>Manufacturer</th><td>{{ starshipResult.manufacturer }}</td></tr>
              <tr><th>Starship Class</th><td>{{ starshipResult.starship_class }}</td></tr>
              <tr><th>Hyperdrive Rating</th><td>{{ starshipResult.hyperdrive_rating }}</td></tr>
              <tr><th>Length</th><td>{{ starshipResult.length }}</td></tr>
              <tr><th>Max Atmosphering Speed</th><td>{{ starshipResult.max_atmosphering_speed }}</td></tr>
              <tr><th>MGLT</th><td>{{ starshipResult.MGLT }}</td></tr>
              <tr><th>URL</th><td>{{ starshipResult.url }}</td></tr>
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
  const starshipResult = ref(null)
  
  const searchStarship = async () => {
    if (!searchId.value) return
    try {
      loading.value = true
      error.value = null
      starshipResult.value = null
      const response = await api.get(`/starships/${searchId.value}`)
      starshipResult.value = response.data.result.properties
    } catch (err) {
      error.value = 'Starship not found.'
      starshipResult.value = null
    } finally {
      loading.value = false
    }
  }
  
  const clearSelection = () => {
    searchId.value = ''
    starshipResult.value = null
  }
  </script>
  
  <style scoped>
  .starships-page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrap {
    flex: 1;
    padding: 2rem;
    color: white;
    
  }
  
  .search-container {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0;
  }
  
  .search-container input {
    padding: 0.5rem;
    font-size: 1rem;
  }
  
  .search-container button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
  
  .clear-btn {
    background-color: #f44336;
    color: white;
    border: none;
  }

  .result-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
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
    border: 1px solid #ccc;
    padding: 0.75rem;
    text-align: center;
  }
  
  th {
    background-color: #151414;
  }
  td {
    background-color: #7a7a7a;
  }
  </style>
  