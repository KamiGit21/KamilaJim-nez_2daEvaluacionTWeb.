<template>
  <div class="home-page">
    <Navbar />

    <main class="content">
      <h1>Bienvenidos a SWAPI Portal</h1>
      <p>Explora y conoce datos sobre los personajes, planetas y naves del universo de Star Wars.</p>
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  color: white;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  text-align: center;
  font-size: 1.2rem;
}
</style>
