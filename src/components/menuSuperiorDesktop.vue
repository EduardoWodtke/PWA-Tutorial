<script setup>
import { ref } from 'vue';

import CartPlus from 'vue-material-design-icons/CartPlus.vue';
import Account from 'vue-material-design-icons/Account.vue';

const menuAberto = ref(false);
</script>

<template>
    <header>
      <div class="header--logo">
        <img src="@/assets/logoFakeStore.jpg" alt="Logo" />
        <h1>FakeStore</h1>
      </div>
      <nav>
        <ul :class="menuAberto ? 'menu' : ''">
          <li>Home</li>
          <li>Eletrônicos</li>
          <li>Jóias</li>
          <li>Masculino</li>
          <li>Feminino</li>
        </ul>
      </nav>
      <div class="header--icons">
        <Account />
        <CartPlus />
      </div>
    </header>
  </template>

<style scoped>
header {
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 0.2rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header--logo {
  display: flex;
  align-items: center;
}
.header--logo img {
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
}
nav ul {
  display: flex;
  gap: 1rem;
}
nav li {
  list-style: none;
}

.header--icons {
  display: flex;
  gap: 1rem;
}
.menu-hamburger {
  display: none;
}


</style>
  