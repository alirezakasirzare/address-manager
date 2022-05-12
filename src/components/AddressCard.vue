<template>
  <div class="card overflow-hidden">
    <!-- header card -->
    <h5 class="card-header">آدرس ۱</h5>

    <!-- body card -->
    <div class="card-body text-center">
      <h5 class="card-title">
        {{ props.item.first_name }}
        {{ props.item.last_name }}
      </h5>
      <p class="card-text mb-0 text-secondary">
        طول جغرافیایی : {{ props.item.lng }}
      </p>
      <p class="card-text mb-0 text-secondary">
        عرض جفرافیایی : {{ props.item.lat }}
      </p>
    </div>

    <!-- show more button -->
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

// item data
const props = defineProps(['item']);
</script>
