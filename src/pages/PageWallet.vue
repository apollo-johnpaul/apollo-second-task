<template>
  <div class="q-pa-md wallet-carousel-container">
    <div class="row items-center justify-between q-mb-md" style="background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%); border-radius: 16px; padding: 18px 20px;">
      <div>
        <div class="text-white text-caption">Available Balance
          <q-btn
            flat
            dense
            round
            size="sm"
            :icon="showBalance ? 'visibility' : 'visibility_off'"
            class="q-ml-xs"
            @click="showBalance = !showBalance"
            color="white"
            style="min-width: 0;"
          />
        </div>
        <div class="text-h5 text-weight-bold text-white row items-center">
          <span class="row items-center">
            <span class="q-mr-xs">&#x20B1</span>
            <span v-if="showBalance">2,560.39</span>
            <span v-else>*****</span>
          </span>
        </div>
      </div>
      <q-btn
        label="+Cash In"
        color="white"
        text-color="primary"
        unelevated
        class="q-px-md q-py-xs"
        style="border-radius: 999px; font-weight: 600;"
        size="md"
      />
    </div>

    <!-- Grouped Quick Actions with Grey Background -->
    <div class="quick-actions-group q-pa-md q-mb-md">
      <div class="full-width row justify-around">
        <div class="column items-center">
          <q-btn flat color="primary" text-color="primary" icon="attach_money" size="xl" />
          <div class="q-mt-xs text-primary text-caption">Send</div>
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
      <div class="full-width row justify-around q-mt-md">
        <div
          v-for="item in [
            { icon: 'local_florist', label: 'Ginvest' },
            { icon: 'credit_card', label: 'Cards' },
            { icon: 'redeem', label: 'A+ Rewards' },
            { icon: 'commute', label: 'Commute' }
          ]"
          :key="item.label"
          class="column items-center"
        >
          <div class="button-square q-mb-xs flex flex-center">
            <q-btn
              flat
              color="primary"
              text-color="primary"
              :icon="item.icon"
              size="lg"
              class="full-width full-height"
              style="min-width:0; min-height:0;"
            />
          </div>
          <div class="q-mt-xs text-primary text-caption">{{ item.label }}</div>
        </div>
      </div>
    </div>
    <!-- End Grouped Quick Actions -->

    <!-- Grouped Explore App and Tabs with Grey Background -->
    <div class="quick-actions-group q-pa-md q-mb-md">
      <div class="q-pa-sm">
        <div class="row items-center justify-between text-primary">
          <span><strong>Explore App</strong></span>
          <q-btn
            flat
            label="View All"
            icon-right="arrow_circle_right"
            icon-color="primary"
            class="no-bg-btn"
          />
        </div>
      </div>

      <q-tabs
        v-model="tab"
        class="text-primary"
        dense
      >
        <q-tab :ripple="false" name="GInsure" icon="admin_panel_settings" label="GInsure"/>
        <q-tab :ripple="false" name="FoodHub" icon="food_bank" label="Food Hub" />
        <div style="position: relative; display: inline-block;">
          <q-badge
            align="top right"
            color="red"
            text-color="white"
            style="position: absolute; top: 0; right: 0px; transform: translate(20%,-20%); font-weight: bold; z-index: 1; font-size: 8px; padding: 1px 2px;"
          >
            50% OFF
          </q-badge>
          <q-tab :ripple="false" name="Travel" icon="travel_explore" label="Travel" />
        </div>
        <div style="position: relative; display: inline-block;">
          <q-tab :ripple="false" name="FoodHub" icon="food_bank" label="Food Hub" />
        </div>
        <q-tab :ripple="false" name="GForest" icon="forest" label="GForest" />
        <q-tab :ripple="false" name="Gsave" icon="savings" label="Gsave"/>
        <q-tab :ripple="false" name="Deals" icon="handshake" label="Deals" />
        <q-tab :ripple="false" name="GLife" icon="health_and_safety" label="GLife" />
        <q-tab :ripple="false" name="Shop" icon="shopping_bag" label="Shop" />
        <q-tab :ripple="false" name="ShipDelivery" icon="local_shipping" label="Ship & Delivery"/>
        <q-tab :ripple="false" name="PeraOutlet" icon="store" label="Pera Outlet" />
        <q-tab :ripple="false" name="GCashJr" icon="child_care" label="GCash Jr." />
        <q-tab :ripple="false" name="CashOut" icon="toll" label="Cash Out" />
        <q-tab :ripple="false" name="GDeals" icon="local_offer" label="GDeals" />
        <q-tab :ripple="false" name="EarnMoney" icon="paid" label="Earn Money" />
        <q-tab :ripple="false" name="Borrow" icon="real_estate_agent" label="Borrow" />
      </q-tabs>
    </div>
    <!-- End Grouped Explore App and Tabs -->

    <!-- CAROUSEL BELOW -->
    <div class="q-pa-md carousel-container">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        height="210px"
        infinite
      >
        <q-carousel-slide name="first" img-src="/caraousel/1.jpg" />
        <q-carousel-slide name="second" img-src="/caraousel/2.jpg" />
        <q-carousel-slide name="third" img-src="/caraousel/3.jpg" />
        <q-carousel-slide name="fourth" img-src="/caraousel/4.jpg" />
        <q-carousel-slide name="fifth" img-src="/caraousel/5.jpg" />
      </q-carousel>
      <div v-if="slide === 'first'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Extend mo converge mo!</div>
        <div class="text-subtitle">Load na ulit and get Sweldo Assistance  </div>
      </div>
      <div v-else-if="slide === 'second'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Tap Here to Participate</div>
        <div class="text-subtitle">Get a chance to meet your fave idol</div>
      </div>
      <div v-else-if="slide === 'third'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Padala? SendWave na yan!</div>
        <div class="text-subtitle">Send money home in seconds via SendWave</div>
      </div>
      <div v-else-if="slide === 'fourth'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Walang abala sa pagpadala!</div>
        <div class="text-subtitle">Safe and fast padala? Ria na 'yan!'</div>
      </div>
      <div v-else-if="slide === 'fifth'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Extra kita?</div>
        <div class="text-subtitle">Posible yan sa Gcrypto!</div>
      </div>
      <div v-else-if="slide === 'sixth'" class="custom-caption-below q-mt-sm">
        <div class="text-h5">Sixth stop</div>
        <div class="text-subtitle">Avatar</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref('first')
const tab = ref('home')
const showBalance = ref(true)
</script>

<style scoped>
.wallet-carousel-container {
  max-width: 600px;
  margin: 0 auto;
}

.quick-actions-group {
  background: #e0e0e0;
  border-radius: 16px;
}

.carousel-container {
  max-width: 390px;
  margin: 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
}

.custom-caption {
  background: rgba(62, 44, 195, 0.4);
  color: #fff;
  padding: 8px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}

.custom-caption-below {
  background: rgba(62, 44, 195, 0.08);
  color: #222;
  padding: 12px 8px 8px 8px;
  border-radius: 0 0 24px 24px;
  text-align: center;
}
</style>
