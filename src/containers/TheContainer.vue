<template>
  <div class="c-app">
    <!-- <TheSidebar/> -->
    <CWrapper>
      <!-- <TheHeader/> -->
      <TheTitle/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
// import TheHeader from './TheHeader'
import TheTitle from './TheTitle'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheTitle,
    TheFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
