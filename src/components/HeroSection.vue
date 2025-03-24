<template>
    <section class="bg-gray-100 flex items-center justify-center">
      <div class="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <!-- Text Content -->
        <div class="text-center md:text-left space-y-6">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ title }}
          </h1>
          
          <p class="text-lg md:text-xl text-gray-700 mb-6">
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
      
      <!-- Background Shapes/Decorations -->
      <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          class="w-full h-16 text-white" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 74"
        >
          <path 
            d="M0 74h1440V0c-244.24 52.15-489.52 73.75-735.83 64.8-185.74-6.82-405.36-38.61-704.17-64.8z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    props: {
      title: {
        type: String,
        default: 'Transform Your Business with Our Solutions'
      },
      description: {
        type: String,
        default: 'We provide cutting-edge technology to help your business grow and succeed in the digital landscape.'
      },
      primaryButtonText: {
        type: String,
        default: 'Get Started'
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