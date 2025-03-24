<!-- src/pages/Home.vue -->
<template>
  <div class="home-container">
    <h1 class="text-3xl font-bold mb-4">Home Page</h1>
    <p class="text-lg mb-8">Welcome to our Vue.js app!</p>
    
    <HeroSection/>
    <ReasonToJoinSection/>
    <GymMembership/>
<!-- <AboutSlider/> -->
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import ReasonToJoinSection from '../components/ReasonToJoinSection.vue';
import GymMembership from '../components/GymMembership.vue';
// import  AboutSlider from "../components/AboutSlider.vue";
export default {
  name: "HomePage",
  components: {
    HeroSection,
    ReasonToJoinSection,
    GymMembership,
    // AboutSlider,
  }
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.form-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>