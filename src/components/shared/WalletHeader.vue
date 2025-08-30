<template>
  <div class="row items-center justify-between q-mb-md wallet-balance-header" style="margin:0;">
    <div style="flex:1; min-width:0;">
      <div v-if="showLabel" class="text-white text-caption wallet-balance-label" style="display: flex; align-items: center;">
        <span>
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
        </span>
      </div>
      <div class="text-h5 wallet-balance-amount text-white row items-center">
        <span class="row items-center">
          <span v-if="currency" class="q-mr-xs">{{ currency }}</span>
          <span v-if="showBalance">{{ balance }}</span>
          <span v-else-if="showToggle">*****</span>
          <span v-else>{{ balance }}</span>
        </span>
      </div>
      <div style="margin-top: -6px; margin-bottom: 2px; text-align: left; width: fit-content;">
        <slot name="asof" />
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
      style="margin-left: 16px; align-self: flex-start;"
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
