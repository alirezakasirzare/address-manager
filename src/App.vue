<template>
  <!-- navabr -->
  <Navbar />
  <!-- routes -->
  <div class="container mt-8 mb-5">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Navbar from './components/NavbarSection.vue';
</script>
