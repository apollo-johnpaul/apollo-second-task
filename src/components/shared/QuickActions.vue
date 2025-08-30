<template>
  <div class="quick-actions-group q-pa-md q-mb-md">
    <div class="full-width row justify-around">
      <div v-for="action in actions" :key="action.label" class="column items-center">
        <q-btn flat color="primary" text-color="primary" :icon="action.icon" size="xl" @click="$emit('action', action.label)" />
        <div class="q-mt-xs text-primary text-caption">{{ action.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  actions: { type: Array, required: true }
})
</script>
