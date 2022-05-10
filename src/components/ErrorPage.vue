<template>
  <!-- error image -->
  <img
    :src="require(`@/assets/images/${props.imageUrl}`)"
    alt="no item founded"
    class="no-item-image"
  />

  <!-- error text -->
  <p class="mt-5 text-center text-secondary">{{ props.text }}</p>

  <!-- target link -->
  <div class="d-flex justify-content-center">
    <router-link :to="props.linkTarget" class="btn btn-primary">{{
      props.linkText
    }}</router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// props
const props = defineProps(['text', 'image-url', 'link-text', 'link-target']);
</script>

<style lang="scss" scoped>
.no-item-image {
  width: 50%;
  min-width: 300px;
  display: block;
  margin: auto;
}
</style>
