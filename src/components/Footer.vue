<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2025, Star Wars Portal. Todos los derechos reservados.</p>
        <div class="social-links">
            <div class="social-links">
  <a href="https://www.tiktok.com/@starwars?_t=ZM-8vv5HD0cRyX&_r=1" target="_blank" rel="noopener noreferrer">Tiktok</a>
  <a href="https://youtube.com/@starwars?si=Ry6dy2VyFG_Z0O3a" target="_blank" rel="noopener noreferrer">Youtube</a>
  <a href="https://www.instagram.com/starwars?igsh=MTkzOHY2b2Y1YWxpcw==" target="_blank" rel="noopener noreferrer">Instagram</a>
</div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: white;
    padding: 20px;
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .social-links {
    display: flex;
    gap: 10px;
  }
  
  .social-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .social-links a:hover {
    color: #ddd;
  }
  </style>
  