<template>
  <div>
    <!-- title -->
    <h5 class="mb-4">لیست آدرس ها</h5>
    <!-- address lists -->
    <div v-if="lodingData">
      <LoadingSection />
    </div>

    <transition name="fade">
      <div
        class="row g-3 justify-content-center"
        v-if="itemsAddress.length && !lodingData"
      >
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="item in itemsAddress"
          :key="item.id"
        >
          <AddressCard :item="item" @moreInfo="onMoreInfo" />
        </div>
      </div>
    </transition>
    <!-- not found item -->
    <dir class="p-0 pt-5" v-if="!itemsAddress.length && !lodingData">
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
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="اضافه کردن آدرس"
    >
      +
    </router-link>

    <MoreInfoModal :current-item="currentItem" />
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity';
import axios from 'axios';
// components
import ErrorPage from '@/components/ErrorPage.vue';
import AddressCard from '@/components/AddressCard.vue';
import LoadingSection from '@/components/LoadingSection.vue';
import MoreInfoModal from '@/components/MoreInfoModal.vue';

// address items
const itemsAddress = ref([]);
const lodingData = ref(true);

const currentItem = reactive({});

const onMoreInfo = (event) => {
  const modalId = Math.random();
  Object.assign(currentItem, { ...event, modalId });
};

axios
  .get('https://stage.achareh.ir/api/karfarmas/address', {
    headers: {
      Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Ng==',
    },
  })
  .then((response) => {
    itemsAddress.value = response.data;
    lodingData.value = false;
  })
  .catch(() => {
    lodingData.value = false;
  });
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

.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
