<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeTab = ref('home');
const sliderStyle = ref({
  width: '0px',
  left: '0px'
});

const scrollToId = (navId) => {
  const section = document.getElementById(navId);
  if (section) {
    activeTab.value = navId;
    updateSliderPosition();
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
};

const updateSliderPosition = () => {
  const activeTabElement = document.querySelector(`.et-hero-tab[data-id="${activeTab.value}"]`);
  if (activeTabElement) {
    sliderStyle.value.width = `${activeTabElement.offsetWidth}px`;
    sliderStyle.value.left = `${activeTabElement.offsetLeft}px`;
  }
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const sections = ['home', 'about', 'exp-page', 'contact-page'];

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeTab.value = sectionId;
        updateSliderPosition();
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="et-hero-tabs-container">
    <div @click="scrollToId('home')" class="et-hero-tab" data-id="home">Home</div>
    <div @click="scrollToId('about')" class="et-hero-tab" data-id="about">About</div>
    <div @click="scrollToId('exp-page')" class="et-hero-tab" data-id="exp-page">Experience</div>
    <div @click="scrollToId('contact-page')" class="et-hero-tab" data-id="contact-page">Contact</div>
    <span class="et-hero-tab-slider highlight-background" :style="sliderStyle"></span>
  </div>
</template>




<style scoped>
.et-hero-tabs-container {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 1000;
}
.et-hero-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #000;
    transition: all 0.5s ease;
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.2em;
    font-size: 12px;
    font-weight: 600;
    color: #1d1e22;
    font-size: 1rem;
}

.et-hero-tab-slider {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 6px;
    transition: left 0.3s ease;
}
.highlight-background {
    background-color: #05b0db;
}
</style>
