<template>
    <section class="text-white flex items-center justify-center HeroSection_parent">
        <div class="container mx-auto px-4 max-sm:px-0 grid md:grid-cols-2 gap-8 items-center">
            <!-- Text Content -->
        <div class="text-center md:text-left space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {{ title }}
          </h1>
          
          <p class="text-lg md:text-xl  mb-6">
            {{ description }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              @click="primaryAction"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {{ primaryButtonText }}
            </button>
            
            <button 
              v-if="secondaryButtonText"
              @click="secondaryAction"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {{ secondaryButtonText }}
            </button>
          </div>
        </div>
        
        <!-- Image/Illustration -->
        <div class="flex items-center justify-center">
          <img 
            :src="heroImage.src" 
            :alt="heroImage.alt"
            class="w-full max-w-md h-auto object-contain rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    props: {
      title: {
        type: String,
        default: 'Free trial session with a trainer'
      },
      description: {
        type: String,
        default: 'We provide cutting-edge technology to help your business grow and succeed in the digital landscape.'
      },
      primaryButtonText: {
        type: String,
        default: 'Detailed'
      },
      secondaryButtonText: {
        type: String,
        default: 'Learn More'
      },
      heroImage: {
        type: Object,
        default: () => ({
          src: '@/assets/hero-illustration.png',
          alt: 'Business Solution Illustration'
        })
      }
    },
    methods: {
      primaryAction() {
        // Default action - can be overridden by parent component
        console.log('Primary action clicked');
        // Example: this.$router.push('/signup')
      },
      secondaryAction() {
        // Default action - can be overridden by parent component
        console.log('Secondary action clicked');
        // Example: this.$router.push('/about')
      }
    }
  }
  </script>

  <style>
.HeroSection_parent{
  margin: 110px 0px;
}
</style>