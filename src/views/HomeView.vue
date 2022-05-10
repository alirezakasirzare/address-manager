<template>
  <!-- title -->
  <h5 class="mb-4">لیست آدرس ها</h5>
  <!-- address lists -->
  <div class="row g-3 justify-content-center" v-if="itemsAddress.length">
    <div
      class="col-12 col-md-6 col-lg-4"
      v-for="item in itemsAddress"
      :key="item.id"
    >
      <AddressCard :item="item" />
    </div>
  </div>
  <!-- not found item -->
  <dir class="p-0 pt-5" v-else>
    <ErrorPage
      text="هیچ آدرسی یافت نشد"
      image-url="no-item.svg"
      linkTarget="/add"
      linkText="اضافه کردن یک آدرس"
    />
  </dir>
</template>

<script setup>
import { ref } from '@vue/reactivity';
// components
import ErrorPage from '@/components/ErrorPage.vue';
import AddressCard from '@/components/AddressCard.vue';

// address items
const itemsAddress = ref([
  // {
  //   id: '1234',
  //   text: 'slam 1',
  // },
  // {
  //   id: '123432',
  //   text: 'slam 2',
  // },
  // {
  //   id: '1234234',
  //   text: 'slam 3',
  // },
]);
</script>
