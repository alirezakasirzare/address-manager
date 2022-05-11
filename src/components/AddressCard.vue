<template>
  <div class="card overflow-hidden">
    <h5 class="card-header">آدرس ۱</h5>
    <div class="card-body text-center">
      <h5 class="card-title">
        {{ props.item.first_name }}
        {{ props.item.last_name }}
      </h5>
      <p class="card-text mb-0 text-secondary">lat : {{ props.item.lat }}</p>
      <p class="card-text mb-0 text-secondary">lng : {{ props.item.lng }}</p>
    </div>
    <div>
      <button
        class="btn btn-primary d-block w-100 rounded-0"
        @click="$emit('moreInfo', props.item)"
      >
        اطلاعات بیشتر
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
// props
const props = defineProps(['item']);
</script>
