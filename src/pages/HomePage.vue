<!-- src/pages/Home.vue -->
<template>
  <div class="home-container">
    <HeroSection/>
    <ReasonToJoinSection/>
    <GymMembership/>
<AboutSlider/>
 <Trainers/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import ReasonToJoinSection from '../components/ReasonToJoinSection.vue';
import GymMembership from '../components/GymMembership.vue';
import Trainers from '../components/Trainers.vue';
import  AboutSlider from "../components/AboutSlider.vue";
export default {
  name: "HomePage",
  components: {
    HeroSection,
    ReasonToJoinSection,
    GymMembership,
    AboutSlider,
    Trainers,
  }
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

</style>