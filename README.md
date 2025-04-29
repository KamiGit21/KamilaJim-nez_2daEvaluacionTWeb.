**📚 Proyecto: Swapi Portal (Star Wars Portal)**

**✨ Descripción del Proyecto-**

Este proyecto es una aplicación web en Vue 3 que permite buscar información de personajes, naves y planetas del universo de Star Wars mediante su ID, consultando la API de Star Wars (SWAPI). El usuario puede ingresar un número de ID, realizar la búsqueda, y visualizar los detalles acorde a lo que desee saber sus detalles, sea personaje, un planeta o alguna nave que haya aparecido a lo largo de toda la saga.

El diseño incluye:

-Un Navbar de navegación donde podremos escoger entre personajes, planetas y naves.

-Un Footer fijo en la parte inferior de la página.

La app está desarrollada de manera modular, separando componentes como Navbar, Footer, Loading y Error para un mejor mantenimiento y escalabilidad.

**🛠️ Instrucciones de Instalación**

Requisitos previos: -Tener instalado Node.js (recomendado v18 o superior). -Tener instalado npm.

Pasos para clonar y levantar el proyecto:

Clonar el repositorio git clone "link del repositorio" cd swapi-portal

Instalar las dependencias npm install

Levantar el servidor de desarrollo npm run dev

Abrir en el navegador El proyecto normalmente se sirve en: http://localhost:5173/

**🧩 Instrucciones de Uso**

Al seleccionar entre las tres opciones, encontrarás un campo de búsqueda numérico.

Introduce el ID de lo que quieras buscar. Ejemplo: 1 para Luke Skywalker, 2 para C-3PO, etc.

Haz clic en el botón Search.

Si el ID existe, se mostrarán los datos en una tabla.

Si el ID no es válido, se mostrará un mensaje de error.

El Footer estará siempre visible al final de la página, asegurando una buena experiencia visual.

