<template>
  <div class="row items-center justify-between q-mb-md wallet-balance-header" style="margin:0;">
    <div>
      <div v-if="showLabel" class="text-white text-caption wallet-balance-label">
        {{ label }}
        <q-btn
          v-if="showToggle"
          flat
          dense
          round
          size="sm"
          :icon="showBalance ? 'visibility' : 'visibility_off'"
          class="q-ml-xs min-width-0"
          @click="$emit('toggle-balance')"
          color="white"
        />
      </div>
      <div class="text-h5 wallet-balance-amount text-white row items-center">
        <span class="row items-center">
          <span v-if="currency" class="q-mr-xs">{{ currency }}</span>
          <span v-if="showBalance">{{ balance }}</span>
          <span v-else-if="showToggle">*****</span>
          <span v-else>{{ balance }}</span>
        </span>
      </div>
    </div>
    <q-btn
      v-if="actionLabel"
      :label="actionLabel"
      color="white"
      text-color="primary"
      unelevated
      class="wallet-cashin-btn"
      :size="actionSize || 'md'"
      @click="$emit('action')"
    />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  showLabel: { type: Boolean, default: true },
  showToggle: { type: Boolean, default: false },
  showBalance: { type: Boolean, default: true },
  balance: { type: [String, Number], default: '' },
  currency: { type: String, default: '' },
  actionLabel: { type: String, default: '' },
  actionSize: { type: String, default: 'md' }
})
</script>
