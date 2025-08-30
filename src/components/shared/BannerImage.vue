<template>
  <div class="q-pa-md q-mb-md flex flex-center">
    <img :src="src" :alt="alt" :style="imgStyle" />
  </div>
</template>

<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  imgStyle: { type: String, default: 'max-width: 160px; border-radius: 12px; box-shadow: 0 2px 8px #0002;' }
})
</script>
