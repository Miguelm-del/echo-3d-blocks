<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="q-mb-md">
    <q-img
      fit="contain"
      :src="src"
      :alt="alt"
      style="height: 18em; max-width: 19em"
    />
  </div>
</template>
