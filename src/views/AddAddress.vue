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
        <form action="#">
          <!-- title -->
          <strong class="mb-3 d-block border-start ps-2 border-3 border-info"
            >فرم</strong
          >

          <!-- name input -->
          <div class="mb-3">
            <label for="form-fname" class="form-label">نام کوچک</label>
            <input
              type="text"
              class="form-control"
              id="form-fname"
              placeholder="نام کوچک خود را وارد کنید"
            />
          </div>

          <div class="mb-3">
            <label for="form-lname" class="form-label">نام خانوادگی</label>
            <input
              type="text"
              class="form-control"
              id="form-lname"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          </div>

          <div class="mb-3">
            <label for="input-mobile" class="form-label">تلفن همراه</label>
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
            <label for="input-address" class="form-label">آدرس دقیق</label>
            <textarea
              class="form-control form-address"
              id="input-address"
              placeholder="تهران ..."
            ></textarea>
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          error rem labore, dolore, sequi molestias quod ipsum asperiores
          dolorum magni excepturi et. Laborum, ad enim inventore sit numquam
          placeat ullam.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Tab } from 'bootstrap/dist/js/bootstrap';
import { ref, onMounted } from 'vue';

const tabOne = ref(null);
const tabTwo = ref(null);

const validatedForm = ref(false);

// handel click to bootstrap tab
onMounted(() => {
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
