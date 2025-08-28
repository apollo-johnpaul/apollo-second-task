<template>
  <q-layout view="hHh lpr fFf">

    <q-header elevated class="text-white" height-hint="98" style="background: url('gcash-backtoschool.jpg') center center / cover no-repeat;">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="gcash-logo.png">
          </q-avatar>
          <strong style="color: blue; font-family: 'Poppins', 'Karla', sans-serif; font-size: 1.2em;">
            Hello!
          </strong>
        </q-toolbar-title>
      <q-btn
        label="Tap for Promos"
        color="white"
        text-color="dark"
        unelevated
        class="q-px-md q-py-xs q-ml-md q-mr-md"
        style="border-radius: 999px; font-weight: 600; padding-left: 12px; padding-right: 12px; margin-left: -8px; margin-right: 55px;"
        size="sm"
      />

      <q-btn
        label="HELP"
        color="secondary"
        text-color="dark"
        unelevated
        class="q-px-md q-py-xs"
        style="border-radius: 999px; font-weight: 600; padding-left: 6px; padding-right: 6px;"
        size="xs"
      />
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
        { label: 'Wallet', value: 'wallet', icon: 'account_balance_wallet', to: '/PageWallet' },
        { label: 'Borrow', value: 'borrow', icon: 'account_balance', to: '/PageBorrow' },
        { label: 'Grow', value: 'grow', icon: 'trending_up', to: '/PageGrow' }
        ]"
        :value="'wallet'"
      />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-primary-8 text-white" style="position: relative;">

      <!-- Floating QR Button: OUTSIDE q-tabs, centered, sticks out -->
      <div
        style="
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -60%);
          z-index: 10;
          pointer-events: auto;
        "
      >
        <q-btn
          round
          size="lg"
          color="white"
          text-color="primary"
          icon="qr_code"
          unelevated
          class="shadow-8"
          style="box-shadow: 0 4px 24px 0 rgba(33,150,243,0.25);"
        />
      </div>

      <q-tabs
        v-model="tab"
        class="text-white"
        indicator-color="blue"
        active-color="blue"
        inactive-color="grey"
      >
        <q-tab :ripple="false" name="home" icon="home" label="Home"/>
        <q-tab :ripple="false" name="inbox" icon="mail" label="Inbox" />
        <q-tab :ripple="false" name="transactions" icon="receipt_long" label="Trans" />
        <q-tab :ripple="false" name="person" icon="account_circle" label="Profile" />
      </q-tabs>
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

<style scoped>
.qr-gradient-border {
  border-width: 3px;
  border-style: solid;
  border-radius: 50% !important; /* Ensure round border */
  width: 56px;   /* Match q-btn lg size */
  height: 56px;  /* Match q-btn lg size */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Gradient border */
  border-image: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
  border-image-slice: 1;
  box-sizing: border-box;
  padding: 0; /* Remove extra space */
}
</style>
