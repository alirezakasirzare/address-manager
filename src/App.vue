<template>
  <!-- navabr -->
  <Navbar />
  <!-- routes -->
  <div class="container mt-8">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/NavbarSection.vue';
</script>
