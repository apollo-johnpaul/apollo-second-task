<template>
  <div class="quick-actions-group q-pa-md q-mb-md">
    <div class="q-pa-sm">
      <div class="row items-center justify-between explore-app-row">
        <span class="explore-app-label">{{ label }}</span>
        <q-btn
          flat
          color="primary"
          text-color="primary"
          label="View All"
          icon-right="arrow_circle_right"
          class="explore-viewall-btn no-bg-btn"
          @click="$emit('view-all')"
        />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>
