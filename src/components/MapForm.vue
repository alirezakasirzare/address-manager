<template>
  <GoogleMap
    api-key="AIzaSyDEzxP7zU3VsLhwBXBGRo-WolhCy1fUnvI"
    style="width: 100%; height: 500px"
    :center="{ lat: markerLat, lng: markerLng }"
    :zoom="15"
    @click="updateCoordinates"
  >
    <Marker :options="{ position: { lat: markerLat, lng: markerLng } }" />
  </GoogleMap>
  {{ markerLat }},
  {{ markerLng }}
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { GoogleMap, Marker } from 'vue3-google-map';

const markerLat = ref(35.7219);
const markerLng = ref(51.3347);

const updateCoordinates = (e) => {
  markerLat.value = e.latLng.lat();
  markerLng.value = e.latLng.lng();
};

onMounted(() => {});
</script>
