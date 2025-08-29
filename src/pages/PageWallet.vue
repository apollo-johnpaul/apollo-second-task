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

    <div class="quick-actions-group q-pa-md q-mb-md">
      <div class="q-pa-sm">
        <div class="row items-center justify-between explore-app-row">
          <span class="explore-app-label">
            <q-icon name="explore" color="primary" size="22px" class="q-mr-xs" />
            <span>Explore App</span>
          </span>
          <q-btn
            unelevated
            color="primary"
            text-color="white"
            label="View All"
            icon-right="arrow_circle_right"
            class="explore-viewall-btn"
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


    <div class="q-pa-md carousel-container">
      <div class="carousel-wrapper">
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
        <div v-if="slide === 'first'" class="carousel-caption-attach">
          <div class="caption-head">Extend mo converge mo!</div>
          <div class="caption-sub">Load na ulit and get Sweldo Assistance</div>
        </div>
        <div v-else-if="slide === 'second'" class="carousel-caption-attach">
          <div class="caption-head">Tap Here to Participate</div>
          <div class="caption-sub">Get a chance to meet your fave idol</div>
        </div>
        <div v-else-if="slide === 'third'" class="carousel-caption-attach">
          <div class="caption-head">Padala? SendWave na yan!</div>
          <div class="caption-sub">Send money home in seconds via SendWave</div>
        </div>
        <div v-else-if="slide === 'fourth'" class="carousel-caption-attach">
          <div class="caption-head">Walang abala sa pagpadala!</div>
          <div class="caption-sub">Safe and fast padala? Ria na 'yan!'</div>
        </div>
        <div v-else-if="slide === 'fifth'" class="carousel-caption-attach">
          <div class="caption-head">Extra kita?</div>
          <div class="caption-sub">Posible yan sa Gcrypto!</div>
        </div>
        <div v-else-if="slide === 'sixth'" class="carousel-caption-attach">
          <div class="caption-head">Sixth stop</div>
          <div class="caption-sub">Avatar</div>
        </div>
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
.carousel-wrapper {

}

.custom-caption {
  background: rgba(62, 44, 195, 0.4);
  color: #ed0c0c;
  padding: 4px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}


.carousel-caption-attach {
  width: 100%;
  background: linear-gradient(0deg, rgba(33,150,243,0.92) 80%, rgba(33,150,243,0.45) 100%);
  color: #fff;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 4px 24px 0 rgba(33, 150, 243, 0.13);
  padding: 16px 18px 10px 18px;
  text-align: center;
  margin-top: 0.5rem;
  backdrop-filter: blur(2px);
}
.carousel-caption-attach .caption-head {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
}
.carousel-caption-attach .caption-sub {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.95;
}
/* Explore App label and View All button improvements */
.explore-app-row {
  align-items: center;
}
.explore-app-label {
  font-size: 1.18rem;
  font-weight: 700;
  color: #1976d2;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.explore-viewall-btn {
  border-radius: 999px;
  font-weight: 600;
  padding: 0 18px;
  transition: box-shadow 0.2s;
}
.explore-viewall-btn:hover {
  box-shadow: 0 2px 12px 0 rgba(33, 150, 243, 0.18);
}
</style>
