

<template>
  <div class="wallet-carousel-container" style="padding:0; margin:0; max-width:100vw; width:100vw;">
    <WalletHeader
      :label="''"
      :showLabel="false"
      :showToggle="false"
      :showBalance="true"
      balance="Gipit? Borrow muna!"
      actionLabel="Learn More"
      actionSize="sm"
      @action="onLearnMore"
    />

    <QuickActions :actions="quickActions" @action="onQuickAction" />

    <BannerImage src="/banner/banner-borrow.jpg" alt="Banner" imgStyle="max-width: 400px; border-radius: 12px; box-shadow: 0 2px 8px #0002; margin-top: -20px; margin-bottom: -20px;" />

    <SectionWithViewAll label="Explore App" @view-all="onViewAll">
      <q-tabs
        v-model="tab"
        class="text-primary"
        dense
      >
        <q-tab :ripple="false" name="GInsure" icon="admin_panel_settings" label="GInsure"/>
        <q-tab :ripple="false" name="FoodHub" icon="food_bank" label="Food Hub" />
        <div class="tab-badge-wrapper">
          <q-badge
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
      <PromoCarousel
        v-model="slide"
        :slides="carouselSlides"
        :captions="carouselCaptions"
      />
    </SectionWithViewAll>

    <SectionWithViewAll label="Check This Out" @view-all="onViewAllCheck">
      <div class="row items-center check-this-out-img-row">
        <img src="/gforest.jpg" class="check-this-out-img" />
      </div>
      <div class="check-this-out-text-container">
        <p class="q-mb-none check-this-out-text">Join the movement <br /> with GForest!</p>
      </div>
    </SectionWithViewAll>

    <SectionWithViewAll label="Just For You" @view-all="onViewAllJust">
      <div
        class="row items-center check-this-out-img-row no-scrollbar"
        style="flex-wrap:nowrap; overflow-x:auto;"
      >
        <img v-for="n in 10" :key="n" :src="`/slides/slide${n}.jpg`" class="check-this-out-img" style="flex:0 0 auto;" />
      </div>
      <div class="check-this-out-text-container">
        <p class="q-mb-none check-this-out-text"></p>
      </div>
    </SectionWithViewAll>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WalletHeader from 'components/shared/WalletHeader.vue'
import QuickActions from 'components/shared/QuickActions.vue'
import BannerImage from 'components/shared/BannerImage.vue'
import PromoCarousel from 'components/shared/PromoCarousel.vue'
import SectionWithViewAll from 'components/shared/SectionWithViewAll.vue'

const slide = ref('first')
const tab = ref('home')

const quickActions = [
  { icon: 'real_estate_agent', label: 'GLoan' },
  { icon: 'calendar_month', label: 'GGives' },
  { icon: 'phonelink_off', label: 'Borrow Load' },
  { icon: 'credit_score', label: 'GCredit' }
]

const carouselSlides = [
  { name: 'first', imgSrc: '/caraousel/1.jpg' },
  { name: 'second', imgSrc: '/caraousel/2.jpg' },
  { name: 'third', imgSrc: '/caraousel/3.jpg' },
  { name: 'fourth', imgSrc: '/caraousel/4.jpg' },
  { name: 'fifth', imgSrc: '/caraousel/5.jpg' }
]

const carouselCaptions = {
  first: { head: 'Extend mo converge mo!', sub: 'Load na ulit and get Sweldo Assistance' },
  second: { head: 'Tap Here to Participate', sub: 'Get a chance to meet your fave idol' },
  third: { head: 'Padala? SendWave na yan!', sub: 'Send money home in seconds via SendWave' },
  fourth: { head: 'Walang abala sa pagpadala!', sub: 'Safe and fast padala? Ria na \'yan!' },
  fifth: { head: 'Extra kita?', sub: 'Posible yan sa Gcrypto!' },
  sixth: { head: 'Sixth stop', sub: 'Avatar' }
}

function onLearnMore() {
  // handle learn more click
}
function onQuickAction(label) {
  // handle quick action click
}
function onViewAll() {
  // handle view all click
}
function onViewAllCheck() {
  // handle view all click for check this out
}
function onViewAllJust() {
  // handle view all click for just for you
}
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

.no-horizontal-padding {
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
  border-radius: 0 !important;
}
.full-width-bg {
  padding: 0 !important;
  margin: 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
  border-radius: 0 !important;
}
.check-this-out-label-container {
  padding: 8px 0 8px 0;
  margin: 0;
  margin-left: 16px;
}
.check-this-out-img-row {
  padding: 0;
  margin: 0;
}
.check-this-out-img {
  max-width: 140px;
  border-radius: 20px;
  margin-left: 16px;
}
.check-this-out-text-container {
  padding: 16px 0 0 0;
  margin-left: 16px;
}
.check-this-out-text {
  font-weight: 600;
  color: black;
}
  .check-this-out-spacer {
    margin-top: 14px !important;
  }
  .check-this-out-spacer-2 {
    margin-top: 40px !important;
  }
</style>
