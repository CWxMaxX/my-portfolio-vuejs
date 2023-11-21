<script setup>
import AboutView from './AboutView.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const viewPortCal = (_viewport) => {
  if (_viewport < 600) {
    return -200
  } else if (_viewport < 850) {
    return -100
  } else if (_viewport < 1280) {
    return 0
  } else {
    return 100
  }
}

const viewport = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

console.log('H : ', windowHeight.value < 650 ? '300px' : '0px')
console.log('W :', viewport.value)

const imgPosition = ref(`translate(${viewPortCal(viewport.value)}px,${0}px)`)
const titlePosition = ref('translateY(0)')

const scrollHandler = () => {
  const scrollY = window.scrollY
  imgPosition.value = `translate(${viewPortCal(viewport.value)}px,${scrollY * 0.7}px)`
  titlePosition.value = `translateY(${scrollY * 0.7}px)`
}
const handleResize = () => {
  viewport.value = window.innerWidth
  imgPosition.value = `translate(${viewPortCal(viewport.value)}px,${scrollY * 0.7}px)`
  windowHeight.value = window.innerHeight
}
const scrollToAbout = (navId) => {
  const aboutSection = document.getElementById(navId)
  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop,
      behavior: 'smooth'
    })
  }
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
      <div class="h-screen items-end flex w-[40vw] min-w-[600px]">
        <img
          :style="{ transform: imgPosition, width: '100%' }"
          :class="windowHeight < 450 ? '-mb-[300px]' : windowHeight < 650 ? '-mb-[200px]' : ''"
          src="/images/pro-photo.png"
          alt="pp"
        />
      </div>
      <div
        :style="{ transform: titlePosition }"
        class=" h-screen "
      >
      <div :class="windowHeight > 650 && viewport < 430 ? '-mt-[200px] text-right container pr-5 sm:pr-16' : 'text-right container pr-5 sm:pr-16'" >
        <span class="blue-title">Hi there, my name is</span>
        <span class="white-title-first">Chamith</span>
        <span class="white-title-second">Wijesooriya</span>
        <span class="blue-title">UX/UI, Software Engineer</span>
      </div>
        <img
          style="width: 6vw"
          class="hover:cursor-pointer absolute bottom-[8vw] right-[5vw] scroll-button"
          src="/icons/down-arrow.png"
          alt="down"
          @click="scrollToAbout('about')"
        />
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
  align-items: flex-end;
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
.scroll-button {
  transform: translate(0%, 20%);
  animation: fade_move_down 3s ease-in-out infinite;
}

@keyframes fade_move_down {
  0% {
    transform: translate(0, 20%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 60%);
    opacity: 0;
  }
}
</style>
