<template>
  <GoogleMap
    api-key="AIzaSyDlXA2zNV947LHZ38z3J_cPH6gi30mi9Fc"
    style="width: 100%; height: 500px"
    :center="{ lat: markerLat, lng: markerLng }"
    :zoom="15"
    @click="updateCoordinates"
  >
    <Marker :options="{ position: { lat: markerLat, lng: markerLng } }" />
  </GoogleMap>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

// location
const markerLat = ref(35.7219);
const markerLng = ref(51.3347);

// send event change map to parent
const emit = defineEmits(['changeMap']);

const updateCoordinates = (e) => {
  markerLat.value = e.latLng.lat();
  markerLng.value = e.latLng.lng();

  emit('changeMap', { lat: markerLat.value, lng: markerLng.value });
};
</script>
