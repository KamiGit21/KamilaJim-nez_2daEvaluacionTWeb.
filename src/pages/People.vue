<template>
    <div class="people-page">
      <Navbar />
  
      <main class="content">
        <div style="text-align: center; margin-top: 2rem;">
          <h1>Personajes</h1>
        </div>
  
        <div class="search-box">
          <input v-model="searchId" type="number" placeholder="Enter Person ID" />
          <button @click="searchPerson">Search</button>
        </div>
  
        <Loading v-if="loading" />
        <Error v-else-if="error" :message="error" />
  
        <div v-else-if="personResult" class="person-result">
          <h2>Detalles del Personaje</h2>
          <table>
            <tr><th>Name</th><td>{{ personResult.name }}</td></tr>
            <tr><th>Gender</th><td>{{ personResult.gender }}</td></tr>
            <tr><th>Skin Color</th><td>{{ personResult.skin_color }}</td></tr>  
            <tr><th>Hair Color</th><td>{{ personResult.hair_color }}</td></tr>
            <tr><th>Height</th><td>{{ personResult.height }}</td></tr>
            <tr><th>Eye Color</th><td>{{ personResult.eye_color }}</td></tr>
            <tr><th>Mass</th><td>{{ personResult.mass }}</td></tr>
            <tr><th>Birth Year</th><td>{{ personResult.birth_year }}</td></tr>
            <tr><th>URL</th><td>{{ personResult.url }}</td></tr>
          </table>
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
  const personResult = ref(null)
  
  const searchPerson = async () => {
    if (!searchId.value) return
    try {
      loading.value = true
      error.value = null
      personResult.value = null
      const response = await api.get(`/people/${searchId.value}`)
      personResult.value = response.data.result.properties
    } catch (err) {
      error.value = 'Person not found.'
      personResult.value = null
    } finally {
      loading.value = false
    }
  }
  </script>
  
  <style scoped>
  .people-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex-grow: 1;
    padding: 2rem;
    color: white; /* Opcional: para que el texto sea legible sobre el fondo */
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
  
  .person-result {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  
  .person-result h2 {
    margin-bottom: 1rem;
  }
  
  table {
    width: auto;
    border-collapse: collapse;
    max-width: 600px;
  }
  
  th, td {
    border: 1px solid #d8cfcf;
    padding: 0.75rem;
    text-align: center;
  }
  
  th {
    background-color: #232222;
  }
  td {
    background-color: #7a7a7a;
  }
  </style>
  