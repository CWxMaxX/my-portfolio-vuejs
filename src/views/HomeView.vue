<script setup>
import AboutView from './AboutView.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const viewPortCal = (_viewport) => {
  if (_viewport < 600) {
    return -200
  } else if (_viewport < 850) {
    return -100
  }else if (_viewport < 1280) {
    return 0
  } else {
    return 100
  }
}

const viewport = ref(window.innerWidth)
const windowHegith = ref(window.innerHeight)

const imgPosition = ref(`translate(${viewPortCal(viewport.value)}px,${0}px)`)
const titlePostion = ref('translateY(0)')

const scrollHandler = () => {
  const scrollY = window.scrollY
  imgPosition.value = `translate(${viewPortCal(viewport.value)}px,${ scrollY * 0.7}px)`
  titlePostion.value = `translateY(${scrollY * 0.7}px)`
}
const handleResize = () => {
  viewport.value = window.innerWidth
  imgPosition.value = `translate(${viewPortCal(viewport.value)}px,${scrollY * 0.7}px)`
  windowHegith.value = window.innerHeight
  console.log("H : ", windowHegith.value);
  
}


onMounted(() => {
  window.addEventListener('scroll', scrollHandler)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="w-full text-center h-screen bg-banner overflow-hidden">
    <div class="grid grid-cols-2 gap-4 content-end h-screen">
      <div class="h-screen items-end flex w-[600px]">
        <img :style="{ transform: imgPosition,}" :class="`-mb-[${windowHegith<650? '300px': '0px'}]`"  src="/images/pro-photo.png" alt="pp"  />
      </div>
      <div :style="{ transform: titlePostion }" class="text-right h-screen container pr-5 sm:pr-10">
        <span class="blue-title">Hi there, my name is</span>
        <span class="white-title-first">Chamith</span>
        <span class="white-title-second">Wijesooriya</span>
        <span class="blue-title">Software Engineer</span>
      </div>
    </div>
  </div>
  <AboutView />
</template>

<style scoped>
.bg-banner {
  background-image: linear-gradient(to right, rgba(26, 26, 225, 0.616), rgba(0, 0, 0, 0.999)),
    url('/images/bg-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.198);
  background-blend-mode: multiply;
}

img {
  transition: transform 0.2s ease-out;
}
.blue-title {
  color: #05b0db;
  font-size: 2vw;
  line-height: 2vw;
  font-weight: 800;
  letter-spacing: 0.4vw;
  font-family: 'Lato', sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: end;
  justify-content: center;
}
.white-title-first {
  color: #ffffff;
  font-size: 9vw;
  line-height: 10vw;
  font-weight: 800;
  letter-spacing: 0.25vw;
  font-family: 'Lato', sans-serif;
}
.white-title-second {
  color: #ffffff;
  font-size: 6vw;
  line-height: 7vw;
  font-weight: 800;
  letter-spacing: 0.25vw;
  font-family: 'Lato', sans-serif;
}
</style>
