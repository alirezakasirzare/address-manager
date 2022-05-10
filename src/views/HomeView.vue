<template>
  <div class="home">
    <!-- address lists -->
    <div class="row g-3 justify-content-center">
      <div class="col-12 col-md-6 col-lg-4" v-for="n in 19" :key="n">
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
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>
