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
        { label: 'Wallet', value: 'wallet', icon: 'account_balance_wallet', to: '/page1' },
        { label: 'Borrow', value: 'borrow', icon: 'account_balance', to: '/pageBorrow' },
        { label: 'Grow', value: 'grow', icon: 'trending_up', to: '/pageGrow' }
        ]"
        :value="'wallet'"
      />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-tabs
        v-model="tab"
        class="text-white"
        indicator-color="blue"
        active-color="blue"
        inactive-color="grey"
      >
        <q-tab :ripple="false" name="home" icon="home" label="Home"/>
        <q-tab :ripple="false" name="inbox" icon="mail" label="Inbox" />
        <q-tab :ripple="false" name="transactions" icon="receipt_long" label="Transactions" />
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
