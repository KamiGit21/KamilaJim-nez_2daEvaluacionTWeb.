<template>
    <header class="navbar">
      <div class="logo">SWAPI Portal</div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/people">People</router-link>
        <router-link to="/planets">Planets</router-link>
        <router-link to="/starships">Starships</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1a1a1a;
    padding: 1rem 2rem;
  }
  .logo {
    color: #00bcd4;
    font-size: 1.5rem;
  }
  nav a {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  nav a.router-link-exact-active {
    color: #00bcd4;
  }
  </style>
  