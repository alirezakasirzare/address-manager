<template>
  <GoogleMap
    api-key="AIzaSyDEzxP7zU3VsLhwBXBGRo-WolhCy1fUnvI"
    style="width: 100%; height: 500px"
    :center="location"
    :zoom="15"
    @click="onClick"
  >
    <Marker :options="{ position: location }" />
  </GoogleMap>
  {{ location }}
</template>

<script setup>
import { reactive } from '@vue/reactivity';
import { GoogleMap, Marker } from 'vue3-google-map';

const location = reactive({ lat: 40.689247, lng: -74.044502 });

const onClick = (e) => {
  location.lat = e.latLng.lat();
  location.lng = e.latLng.lng();
};
</script>
