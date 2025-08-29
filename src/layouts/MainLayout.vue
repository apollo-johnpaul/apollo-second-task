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

  <q-footer v-show="true" :class="['bg-primary-8', 'text-white', 'fixed-footer', { 'footer-hidden': !showFooter }]" reveal elevated>
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
import { ref, onMounted, onUnmounted } from 'vue'



const tab = ref('wallet')
const leftDrawerOpen = ref(false)
const showFooter = ref(true)
let lastScrollTop = 0

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
  if (scrollTop < 10) {
    showFooter.value = true
  } else if (scrollTop > lastScrollTop) {
    showFooter.value = false
  } else if (scrollTop < lastScrollTop) {
    showFooter.value = true
  }
  lastScrollTop = scrollTop
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s cubic-bezier(.4,0,.2,1);
}
.footer-hidden {
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
}
.qr-gradient-border {
  border-width: 3px;
  border-style: solid;
  border-radius: 50% !important;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-image: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
  border-image-slice: 1;
  box-sizing: border-box;
  padding: 0;
}
</style>
