<template>
  <div>
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
                v-model="formData.first_name"
              />
              <div class="invalid-feedback">
                نام باید حداقل 3 حرف داشته باشد
              </div>
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
                v-model="formData.last_name"
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
                class="form-control form-phone"
                id="input-mobile"
                placeholder="09160000000"
                required
                ref="formMobile"
                pattern="09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}"
                v-model="formData.coordinate_mobile"
              />
              <div class="invalid-feedback">فرمت شماره موبایل اشتباه است</div>
            </div>

            <div class="mb-3">
              <label for="input-phone" class="form-label">تلفن ثابت</label>
              <input
                type="text"
                class="form-control form-phone"
                id="input-phone"
                placeholder="0210000000"
                ref="formPhone"
                pattern="^0[0-9]{2,}[0-9]{7,}$"
                v-model="formData.coordinate_phone_number"
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
                v-model="formData.address"
              ></textarea>
              <div class="invalid-feedback">
                آدرس باید حداقل 10 حرف داشته باشد
              </div>
            </div>

            <div class="d-flex align-items-center mb-3">
              <label class="me-2">
                <span>جنسیت</span>
                <span class="text-danger ms-1">*</span>
              </label>
              <div class="btn-group">
                <input
                  type="radio"
                  class="btn-check"
                  id="form-male"
                  autocomplete="off"
                  checked
                  v-model="formData.gender"
                  value="male"
                />
                <label class="btn btn-outline-secondary" for="form-male"
                  >مرد</label
                >

                <input
                  type="radio"
                  class="btn-check"
                  id="form-female"
                  autocomplete="off"
                  v-model="formData.gender"
                  value="female"
                />
                <label class="btn btn-outline-secondary" for="form-female"
                  >زن</label
                >
              </div>
            </div>

            <button class="btn btn-primary w-100 mb-3" type="submit">
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
          <MapForm @changeMap="onChangeMap" />

          <button
            class="btn btn-primary w-100 mt-2"
            @click="onAddAddress"
            :disabled="loading"
          >
            <span v-if="!loading">افزودن آدرس</span>
            <span class="spinner-border spinner-border-sm" v-else></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-dialog-centered">
        ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">نتیجه درخواست</h5>
          </div>
          <div class="modal-body">آدرس با موفقیت اضافه شد</div>
          <div class="modal-footer">
            <router-link
              type="button"
              class="btn btn-light"
              :to="{ name: 'home' }"
              >بازگشت به خانه</router-link
            >
            <button
              type="button"
              class="btn btn-primary"
              @click="addAddressAgain"
            >
              اضافه کردن آدرس جدید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MapForm from '@/components/MapForm.vue';
// import router from '@/router';
import { Tab, Modal } from 'bootstrap/dist/js/bootstrap';
import { ref, onMounted, reactive, onUnmounted } from 'vue';
import axios from 'axios';

const loading = ref(false);

const initFormData = () => ({
  first_name: '',
  last_name: '',
  coordinate_mobile: '',
  coordinate_phone_number: '',
  address: '',
  region: 1,
  lat: '35.7219',
  lng: '51.3347',
  gender: 'male',
});

const formData = reactive(initFormData());

// elements
const tabOne = ref(null);
const tabTwo = ref(null);
const form = ref(null);
const formMobile = ref(null);
const formPhone = ref(null);
const modal = ref(null);
let myModal = '';
const onChangeMap = (e) => {
  formData.lat = e.lat;
  formData.lng = e.lng;
};

onMounted(() => {
  // input phone
  [formMobile.value, formPhone.value].forEach((item) => {
    item.addEventListener('keydown', (event) => {
      const keyOfButton = event.keyCode || event.which;
      let key = null;

      // Handle paste
      if (event.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
      } else {
        // Handle key press
        key = String.fromCharCode(keyOfButton);
      }

      const regex = /[0-9]|\./;

      if (!regex.test(key) && keyOfButton != 8) {
        event.returnValue = false;
        if (event.preventDefault) event.preventDefault();
      }
    });
  });
  // validated form
  form.value.addEventListener('submit', (event) => {
    event.preventDefault();
    form.value.classList.add('was-validated');
    if (form.value.checkValidity()) {
      tabTwo.value.click();
    }
  });
  // handel click to bootstrap tab

  [tabOne.value, tabTwo.value].forEach(function (triggerEl) {
    const tabTrigger = new Tab(triggerEl);

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (tabTwo.value === triggerEl && !form.value.checkValidity()) {
        form.value.classList.add('was-validated');
      } else {
        tabTrigger.show();
      }
    });
  });

  // handel modal
  myModal = new Modal(modal.value, {
    backdrop: 'static',
    keyboard: false,
  });
});

const onAddAddress = () => {
  if (!loading.value) {
    loading.value = true;
    axios
      .post('https://stage.achareh.ir/api/karfarmas/address', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Ng==',
        },
      })
      .then(() => {
        loading.value = false;
        myModal.show();
      })
      .catch((error) => {
        loading.value = false;
        console.log(error);
      });
  }
};

const addAddressAgain = () => {
  myModal.hide();
  tabOne.value.click();
  Object.assign(formData, initFormData());
  form.value.classList.remove('was-validated');
};

onUnmounted(() => {
  myModal.hide();
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

  &-phone {
    direction: ltr;
  }
}
</style>
