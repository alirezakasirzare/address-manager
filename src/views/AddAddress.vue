<template>
  <!-- title -->
  <h5 class="mb-4">اضافه کردن آدرس</h5>

  <!-- tabs -->
  <nav class="mb-4 mb-md-5">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link active"
        id="nav-home-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab-form"
      >
        مرحله اول
      </button>
      <button
        class="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#tab-map"
        type="button"
      >
        مرحله دوم
      </button>
    </div>
  </nav>

  <!-- form -->
  <div class="form">
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab-form">
        <!-- title -->
        <strong class="mb-3 d-block">فرم</strong>

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

        <button class="btn btn-primary w-100 mb-2">مرحله بعد</button>
        <router-link :to="{ name: 'home' }" class="btn btn-light w-100"
          >برگشت به خانه</router-link
        >
      </div>

      <!-- map -->
      <div class="tab-pane fade" id="tab-map">
        <!-- title -->
        <strong class="mb-3 d-block">نقشه</strong>
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
