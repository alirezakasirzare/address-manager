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

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
