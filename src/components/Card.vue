<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: #292929;
    color: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    width: 300px;
    text-align: center;
    margin: 1rem;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  