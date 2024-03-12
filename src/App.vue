<script setup>
  import { useMonitor } from '@/composables/menuSuperior';

  const { menu, footer } = useMonitor();
</script>

<template>
  <div>
    <component :is="menu" />
    <main>
      <router-view />
    </main>
    <footer>
      <component :is="footer" />
    </footer>
  </div>
</template>