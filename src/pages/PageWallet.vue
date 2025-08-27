<template>
  <div class="q-pa-md wallet-carousel-container">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="peek-carousel"
      height="250px"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <template #caption>
          <div class="carousel-caption">
            <q-btn color="primary" label="Mountains" flat />
          </div>
        </template>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <template #caption>
          <div class="carousel-caption">
            <q-btn color="primary" label="Parallax 1" flat />
          </div>
        </template>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <template #caption>
          <div class="carousel-caption">
            <q-btn color="primary" label="Parallax 2" flat />
          </div>
        </template>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg">
        <template #caption>
          <div class="carousel-caption">
            <q-btn color="primary" label="Quasar" flat />
          </div>
        </template>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const autoplay = ref(true)
</script>

<style scoped>
.wallet-carousel-container {
  max-width: 600px;
  margin: 0 auto;
  /* Optional: center the carousel */
}

.peek-carousel .q-carousel__slides {
  overflow: visible !important;
  /* Allow slides to overflow for peeking effect */
}

.peek-carousel .q-carousel-slide {
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 16px;
  margin: 0 12px;
  /* Add margin for peeking */
  transform: scale(0.85);
  opacity: 0.7;
  z-index: 1;
}

.peek-carousel .q-carousel-slide--active {
  transform: scale(1);
  opacity: 1;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
}

.carousel-caption {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}
</style>
