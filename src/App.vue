<template>
  <nav class="navbar navbar-light" style="background-color: #1c8e3e">
    <a class="navbar-brand" href="https://www.tokiomarine.com.br">
      <img
        src="https://iconape.com/wp-content/files/cz/184419/svg/184419.svg"
        width="50"
        height="50"
        class="d-inline-block align-top"
        alt=""
        
      />
      <router-link id="home" to="/">Transferência </router-link> 
      <router-link id="lista" to="/lista">Histórico</router-link>
    </a>
  </nav>
  <router-view />
</template>

<style>
  #home {
    font-weight: bold; 
  text-decoration: none; 
  font-size: 1.0rem; 
  color: rgb(200, 255, 193); 
  text-transform: uppercase; 
  margin-left: 25%;
    transition: 0.4s ease-in-out;
  }
    #home:hover {
    color: rgb(255, 255, 255);
  }
  #lista {
  font-weight: bold; 
  text-decoration: none; 
  font-size: 1.0rem; 
  color: rgb(200, 255, 193); 
  text-transform: uppercase; 
  margin-left: 20%;
  transition: 0.4s ease-in-out;
  }
  #lista:hover {
    color: rgb(255, 255, 255);
  }
</style>
