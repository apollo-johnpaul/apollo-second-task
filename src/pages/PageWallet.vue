<template>
  <div class="q-pa-md wallet-carousel-container">
  <div class="row items-center justify-between q-mb-md wallet-balance-header">
      <div>
        <div class="text-white text-caption wallet-balance-label">Available Balance
          <q-btn
            flat
            dense
            round
            size="sm"
            :icon="showBalance ? 'visibility' : 'visibility_off'"
            class="q-ml-xs min-width-0"
            @click="showBalance = !showBalance"
            color="white"
          />
        </div>
  <div class="text-h5 wallet-balance-amount text-white row items-center">
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
        class="wallet-cashin-btn"
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
              class="full-width full-height btn-square-helper"
            />
          </div>
          <div class="q-mt-xs text-primary text-caption">{{ item.label }}</div>
        </div>
      </div>
    </div>



    <div class="quick-actions-group q-pa-md q-mb-md">
      <div class="q-pa-sm">
        <div class="row items-center justify-between explore-app-row">
          <span class="explore-app-label">Explore App</span>
          <q-btn
            flat
            color="primary"
            text-color="primary"
            label="View All"
            icon-right="arrow_circle_right"
            class="explore-viewall-btn no-bg-btn"
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
        <div class="tab-badge-wrapper">
          <q-badge
            align="top right"
            color="red"
            text-color="white"
            class="tab-badge-helper"
          >
            50% OFF
          </q-badge>
          <q-tab :ripple="false" name="Travel" icon="travel_explore" label="Travel" />
        </div>
        <div class="inline-rel-block">
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

      <div class="q-pa-none carousel-container">
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
          <div class="carousel-caption-attach">
            <div class="caption-head caption-head-blue">
              {{
                slide === 'first' ? 'Extend mo converge mo!' :
                slide === 'second' ? 'Tap Here to Participate' :
                slide === 'third' ? 'Padala? SendWave na yan!' :
                slide === 'fourth' ? 'Walang abala sa pagpadala!' :
                slide === 'fifth' ? 'Extra kita?' :
                slide === 'sixth' ? 'Sixth stop' : ''
              }}
            </div>
            <div class="caption-sub caption-sub-grey">
              {{
                slide === 'first' ? 'Load na ulit and get Sweldo Assistance' :
                slide === 'second' ? 'Get a chance to meet your fave idol' :
                slide === 'third' ? 'Send money home in seconds via SendWave' :
                slide === 'fourth' ? 'Safe and fast padala? Ria na \'yan!' :
                slide === 'fifth' ? 'Posible yan sa Gcrypto!' :
                slide === 'sixth' ? 'Avatar' : ''
              }}
            </div>
          </div>
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

.carousel-caption-attach {
  width: 100%;
  color: #222;
  border-radius: 0 0 24px 24px;
  padding: 12px 18px 8px 18px;
  text-align: left;
  margin-top: 0.5rem;
}
.carousel-caption-attach .caption-head, .caption-head {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 2px;
  letter-spacing: 0.5px;
  color: #1976d2 !important;
}
.carousel-caption-attach .caption-sub, .caption-sub {
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.95;
  color: #888 !important;
}

.explore-app-row {
  align-items: center;
}
.explore-app-label {
  font-size: 1.18rem;
  font-weight: 700;
  color: #17407b;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  margin-left: -8px;
}
.explore-viewall-btn {
  font-weight: 600;
  padding: 0 8px;
  min-width: 0;
}
.no-bg-btn {
  background: none !important;
  box-shadow: none !important;
  border: none !important;
}

.wallet-balance-header {
  background: linear-gradient(90deg, #1976d2 60%, #42a5f5 100%);
  border-radius: 16px;
  padding: 18px 20px;
}
.wallet-balance-amount {
  font-weight: 700;
}
.wallet-cashin-btn {
  border-radius: 999px;
  font-weight: 600;
  padding: 0 18px;
}

.btn-square-helper {
  min-width: 0 !important;
  min-height: 0 !important;
}

.tab-badge-wrapper {
  position: relative;
  display: inline-block;
}
.tab-badge-helper {
  position: absolute;
  top: 0;
  right: 0px;
  transform: translate(20%,-20%);
  font-weight: bold;
  z-index: 1;
  font-size: 8px;
  padding: 1px 2px;
}
.min-width-0 {
  min-width: 0 !important;
}
.inline-rel-block {
  position: relative;
  display: inline-block;
}
</style>
