<template>
  <q-layout view="hHh lpr fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="gcash-logo.png">
          </q-avatar>
          <strong style="color: blue; font-family: 'Poppins', 'Karla', sans-serif; font-size: 1.2em;">
            Hello!
          </strong>
        </q-toolbar-title>
      </q-toolbar>

    <q-btn-toggle
      v-model="tab"
      class="full-width"
      spread
      toggle-color="primary"
      color="white"
      text-color="primary"
      unelevated
      :options="[
      { label: 'Wallet', value: 'wallet', icon: 'account_balance_wallet' },
      { label: 'Borrow', value: 'borrow', icon: 'account_balance' },
      { label: 'Grow', value: 'grow', icon: 'trending_up' }
      ]"
      :value="'wallet'"
    />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/public/gcash-logo.png">
          </q-avatar>
          <div>G-cash</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const tab = ref('wallet')


const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
