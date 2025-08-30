<template>
  <div class="q-pa-none carousel-container">
    <div class="carousel-wrapper">
      <q-carousel
        swipeable
        animated
        v-model="slideModel"
        height="210px"
        infinite
      >
        <q-carousel-slide v-for="slide in slides" :key="slide.name" :name="slide.name" :img-src="slide.imgSrc" />
      </q-carousel>
      <div class="carousel-caption-attach">
        <div class="caption-head caption-head-blue">
          {{ captions[slideModel]?.head || '' }}
        </div>
        <div class="caption-sub caption-sub-grey">
          {{ captions[slideModel]?.sub || '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  slides: { type: Array, required: true },
  captions: { type: Object, required: true },
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue'])
const slideModel = ref(props.modelValue || (props.slides[0]?.name || ''))
watch(slideModel, val => emit('update:modelValue', val))
</script>
