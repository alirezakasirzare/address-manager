<template>
  <!-- title -->
  <h5 class="mb-4">اضافه کردن آدرس</h5>

  <!-- form -->
  <div class="">
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
      <label for="input-mobile" class="form-mobile">تلفن همراه</label>
      <input
        type="text"
        class="form-control"
        id="input-mobile"
        placeholder="0916 000 0000"
      />
    </div>

    <div class="mb-3">
      <label for="input-phone" class="form-phone">تلفن ثابت</label>
      <input
        type="text"
        class="form-control"
        id="input-phone"
        placeholder="0916 000 0000"
      />
    </div>

    <div class="mb-3">
      <label for="input-address" class="form-label">آدرس دقیق</label>
      <textarea class="form-control" id="input-address" placeholder="تهران ...">
      </textarea>
    </div>
  </div>
</template>
