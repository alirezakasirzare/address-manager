<template>
  <!-- title -->
  <h4>لیست آدرس ها</h4>
  <!-- address lists -->
  <!-- <div class="row g-3 justify-content-center">
    <div class="col-12 col-md-6 col-lg-4" v-for="n in 0" :key="n">
      <div class="card overflow-hidden">
        <h5 class="card-header">آدرس ۱</h5>
        <div class="card-body text-center">
          <h5 class="card-title">علیرضا کثیرزارع</h5>
          <p class="card-text mb-0">123345345</p>
        </div>
        <div>
          <button class="btn btn-primary d-block w-100 rounded-0">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <!-- not found item -->
  <dir class="p-0 pt-5">
    <ErrorPage
      text="هیچ آدرسی یافت نشد"
      image-url="no-item.svg"
      linkTarget="/add"
      linkText="اضافه کردن یک آدرس"
    />
  </dir>
</template>

<script setup>
import ErrorPage from '@/components/ErrorPage.vue';
</script>
