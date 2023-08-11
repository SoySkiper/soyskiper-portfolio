<template>
    <div class="sidebar">
      <ul class="flex flex-col">
        <li class="sidebar-item" v-for="item in sidebarItems" :key="item.name">
          <a :href="item.link" class="sidebar-link">
            <i :class="['icon', item.icon]"></i>
            <span class="sidebar-label">{{ item.label }}</span>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sidebarItems: [
          { name: 'home', label: 'Home', link: '/index', icon: 'fa fa-home' },
          { name: 'about', label: 'About Me', link: '/about', icon: 'fa fa-user' },
          { name: 'technologies', label: 'Technologies', link: '/technologies', icon: 'fa fa-cogs' },
          { name: 'projects', label: 'Projects', link: '/projects', icon: 'fa fa-code' },
          { name: 'contact', label: 'Contact', link: '/contact', icon: 'fa fa-envelope' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 80px; /* Ancho inicial de la barra lateral */
    background-color: #333; /* Color de fondo de la barra lateral */
    color: #fff; /* Color de texto de los íconos y etiquetas */
  }
  
  .sidebar ul {
    padding: 0;
    list-style: none;
  }
  
  .sidebar-item {
    padding: 10px;
    text-align: center;
  }
  
  .sidebar-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
  
  .icon {
    font-size: 20px; /* Tamaño de los íconos */
  }
  
  .sidebar-label {
    font-size: 12px; /* Tamaño de las etiquetas */
    margin-top: 5px;
  }
  
  /* Estilos responsivos */
  @media (max-width: 767px) {
    .sidebar {
      width: 100%; /* La barra lateral ocupa todo el ancho en dispositivos móviles */
    }
  }
  </style>
  