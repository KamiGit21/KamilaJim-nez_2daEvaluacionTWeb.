<template>
    <div class="error">
      <h2>Error: {{ message }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .error {
    text-align: center;
    color: red;
    padding: 2rem;
    font-size: 1.2rem;
  }
  </style>
  