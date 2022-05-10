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

  <!-- corner button  -->
  <router-link
    :to="{ name: 'add' }"
    v-if="itemsAddress.length"
    class="btn btn-primary position-fixed rounded-circle corner-button"
  >
    <i class="bi bi-plus"></i>
  </router-link>
</template>

<script setup>
import { ref } from '@vue/reactivity';
// import axios from 'axios';
// components
import ErrorPage from '@/components/ErrorPage.vue';
import AddressCard from '@/components/AddressCard.vue';

// axios
//   .post(
//     'https://stage.achareh.ir/api/karfarmas/address',
//     {
//       first_name: 'Alireza',
//       last_name: 'Kasir',
//       coordinate_mobile: '092384723',
//       coordinate_phone_number: '03483274',
//       address: 'wdei fwoejf weojf',
//       region: 1,
//       lat: '35.7717503',
//       lng: '35.7717503',
//       gender: 'male',
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Basic MDk4MjIyMjIyMjI6c2FuYTEyMzQ=',
//       },
//     }
//   )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// address items
const itemsAddress = ref([
  {
    id: '1234',
    text: 'slam 1',
  },
  {
    id: '123432',
    text: 'slam 2',
  },
  {
    id: '1234234',
    text: 'slam 3',
  },
]);
</script>

<style lang="scss" scoped>
.corner-button {
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 0 !important;
}
</style>
