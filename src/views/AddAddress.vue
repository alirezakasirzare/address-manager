<template>
  <!-- title -->
  <h5 class="mb-4">اضافه کردن آدرس</h5>

  <!-- form -->
  <div class="form">
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

    <button class="btn btn-primary w-100 mb-2">مرحله بعد</button>
    <router-link :to="{ name: 'home' }" class="btn btn-light w-100"
      >برگشت به خانه</router-link
    >
  </div>
</template>

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
