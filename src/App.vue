<script setup>
import ListagemProdutos from '@/components/listagemProdutos.vue';
import MenuSuperior from '@/components/menuSuperior.vue';
import footerFaker from '@/components/footerFakestore.vue'
import footerFakerMobile from '@/components/footerFakeMobileStore.vue'


import { useScreen } from '@/composables/screen';

const { isMobile, isTablet, isDesktop } = useScreen();
</script>

<template>
  <MenuSuperior />
  <ListagemProdutos />
  <footerFaker v-if="isDesktop"/>
  <footerFakerMobile v-else />

</template>