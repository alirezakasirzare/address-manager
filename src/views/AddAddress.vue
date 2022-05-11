<template>
  <!-- title -->
  <h5 class="mb-4">اضافه کردن آدرس</h5>

  <!-- tabs -->
  <nav class="mb-4 mb-md-5">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link active tab-trigger"
        id="nav-home-tab"
        data-bs-target="#tab-form"
        ref="tabOne"
      >
        مرحله اول
      </button>
      <button
        class="nav-link tab-trigger"
        id="nav-profile-tab"
        data-bs-target="#tab-map"
        ref="tabTwo"
      >
        مرحله دوم
      </button>
    </div>
  </nav>

  <!-- form -->
  <div class="form">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab-form">
        <form action="#" ref="form" novalidate>
          <!-- title -->
          <strong class="mb-3 d-block border-start ps-2 border-3 border-info"
            >فرم</strong
          >

          <!-- name input -->
          <div class="mb-3">
            <label for="form-fname" class="form-label">
              <span>نام کوچک</span>
              <span class="text-danger ms-1">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="form-fname"
              required
              minlength="3"
              placeholder="نام کوچک خود را وارد کنید"
            />
            <div class="invalid-feedback">نام باید حداقل 3 حرف داشته باشد</div>
          </div>

          <div class="mb-3">
            <label for="form-lname" class="form-label">
              <span>نام خانوادگی</span>
              <span class="text-danger ms-1">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="form-lname"
              placeholder="نام خانوادگی خود را وارد کنید"
              required
              minlength="3"
            />
            <div class="invalid-feedback">
              نام خانوادگی باید حداقل 3 حرف داشته باشد
            </div>
          </div>

          <div class="mb-3">
            <label for="input-mobile" class="form-label">
              <span>تلفن همراه</span>
              <span class="text-danger ms-1">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="input-mobile"
              placeholder="0916 000 0000"
            />
          </div>

          <div class="mb-3">
            <label for="input-phone" class="form-label">تلفن ثابت</label>
            <input
              type="text"
              class="form-control"
              id="input-phone"
              placeholder="0916 000 0000"
            />
          </div>

          <div class="mb-3">
            <label for="input-address" class="form-label">
              <span>آدرس دقیق</span>
              <span class="text-danger ms-1">*</span>
            </label>
            <textarea
              class="form-control form-address"
              id="input-address"
              placeholder="تهران ..."
              required
              minlength="10"
            ></textarea>
            <div class="invalid-feedback">
              آدرس باید حداقل 10 حرف داشته باشد
            </div>
          </div>

          <button class="btn btn-primary w-100 mb-2" type="submit">
            مرحله بعد
          </button>
          <router-link :to="{ name: 'home' }" class="btn btn-light w-100"
            >برگشت به خانه</router-link
          >
        </form>
      </div>

      <!-- map -->
      <div class="tab-pane fade" id="tab-map">
        <!-- title -->
        <strong class="mb-3 d-block border-start ps-2 border-3 border-info"
          >نقشه</strong
        >
        <MapForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import MapForm from '@/components/MapForm.vue';
import { Tab } from 'bootstrap/dist/js/bootstrap';
import { ref, onMounted } from 'vue';

// elements
const tabOne = ref(null);
const tabTwo = ref(null);
const form = ref(null);

// variales
const validatedForm = ref(true);

onMounted(() => {
  // validated
  form.value.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.value.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.value.classList.add('was-validated');
  });
  // handel click to bootstrap tab

  [tabOne.value, tabTwo.value].forEach(function (triggerEl) {
    const tabTrigger = new Tab(triggerEl);

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (tabTwo.value === triggerEl && !validatedForm.value) {
        // show toast
      } else {
        tabTrigger.show();
      }
    });
  });
});
</script>

<style lang="scss" scoped>
.form {
  max-width: 700px;
  margin: auto;
  &-address {
    resize: none;
    height: 150px;
  }
}
</style>
