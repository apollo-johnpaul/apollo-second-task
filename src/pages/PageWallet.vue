<template>
  <div class="q-pa-md wallet-carousel-container">
    <h6 style="background-color:DodgerBlue;">
      Available Balance <br />P 2,560.39
    </h6>

    <div class="full-width row justify-around q-pa-md">
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="attach_money" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Money</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="app_shortcut" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Load</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="account_balance" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Transfer</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="payments" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Bills</div>
      </div>
    </div>

    <div class="full-width row justify-around q-pa-md">
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="local_florist" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Ginvest</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="credit_card" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Cards</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="redeem" size="xl" />
        <div class="q-mt-xs text-primary text-caption">A+ Rewards</div>
      </div>
      <div class="column items-center">
        <q-btn flat color="primary" text-color="primary" icon="commute" size="xl" />
        <div class="q-mt-xs text-primary text-caption">Commute</div>
      </div>
    </div>

    <q-tabs
      v-model="tab"
      class="text-primary"
      align="justify"
      dense
      indicator-color="primary"
    >
      <q-tab :ripple="false" name="home" icon="home" label="Home"/>
      <q-tab :ripple="false" name="inbox" icon="mail" label="Inbox" />
      <q-tab :ripple="false" name="transactions" icon="receipt_long" label="Transactions" />
      <q-tab :ripple="false" name="person" icon="account_circle" label="Profile" />
    </q-tabs>

    <!-- CAROUSEL BELOW -->
    <div class="q-pa-md">
      <q-carousel
        arrows
        animated
        v-model="slide"
        height="400px"
      >
        <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref('first')
const tab = ref('home')
</script>

<style scoped>
.wallet-carousel-container {
  max-width: 600px;
  margin: 0 auto;
}

.custom-caption {
  background: rgba(0,0,0,0.4);
  color: #fff;
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}
</style>
