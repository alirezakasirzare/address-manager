<template>
  <div class="home">
    <!-- address lists -->
    <div class="row g-3 justify-content-center">
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
    </div>
    <!-- not found item -->
    <dir class="p-0 pt-5">
      <img
        src="@/assets/images/no-item.svg"
        alt="no item founded"
        class="no-item-image"
      />

      <p class="mt-5 text-center text-secondary">آدرسی پیدا نشد</p>
      <div class="d-flex justify-content-center">
        <router-link to="/add" class="btn btn-primary"
          >اضافه کردن آدرس</router-link
        >
      </div>
    </dir>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style lang="scss" scoped>
.no-item-image {
  width: 50%;
  min-width: 300px;
  display: block;
  margin: auto;
}
</style>
