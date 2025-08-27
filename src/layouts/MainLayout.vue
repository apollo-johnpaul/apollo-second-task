<template>
  <q-layout view="hHh lpr fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="gcash-logo.png">
          </q-avatar>
          <strong> Hello!</strong>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left" v-model="tab">
        <q-route-tab to="/pages/page1" label="Wallet" name="wallet" />
        <q-route-tab to="/pages/page2" label="Borrow" name="borrow" />
        <q-route-tab to="/pages/page3" label="Grow" name="grow" />
      </q-tabs>
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
