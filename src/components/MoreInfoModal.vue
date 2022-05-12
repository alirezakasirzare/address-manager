<template>
  <!-- Modal -->
  <Teleport to="body">
    <div class="modal fade" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- header -->
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">اطلاعات بیشتر</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <!-- body -->
          <div class="modal-body">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">نام</th>
                  <td>{{ goodDisplay(props.currentItem.first_name) }}</td>
                </tr>
                <tr>
                  <th scope="row">نام خانوادگی</th>
                  <td>{{ goodDisplay(props.currentItem.last_name) }}</td>
                </tr>
                <tr>
                  <th scope="row">شماره موبایل</th>
                  <td>
                    {{ goodDisplay(props.currentItem.coordinate_mobile) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row">شماره تلفن</th>
                  <td>
                    {{ goodDisplay(props.currentItem.coordinate_phone_number) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row">طول جغرافیایی</th>
                  <td>{{ goodDisplay(props.currentItem.lat) }}</td>
                </tr>
                <tr>
                  <th scope="row">عرض جغرافیایی</th>
                  <td>{{ goodDisplay(props.currentItem.lng) }}</td>
                </tr>
                <tr>
                  <th scope="row">جنسیت</th>
                  <td>{{ goodDisplay(props.currentItem.gender) }}</td>
                </tr>
                <tr>
                  <th scope="row">آدرس</th>
                  <td>{{ goodDisplay(props.currentItem.address) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap';
import { defineProps, onMounted, ref, watch } from 'vue';

// data
const props = defineProps(['current-item']);

// good display data
const goodDisplay = (text) => {
  if (typeof text === 'string') {
    return text?.trim() ? text : '-';
  } else {
    return text ? text : '-';
  }
};

// modal handel
const modal = ref('modal');
let myModal = null;

onMounted(() => {
  myModal = new Modal(modal.value, {
    keyboard: false,
  });

  watch(props.currentItem, () => {
    myModal.show();
  });
});
</script>
