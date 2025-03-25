<template>
    <div class="gym-slider-container relative">
      <div class="slider-wrapper relative h-screen overflow-hidden">
        <transition-group 
          name="slide" 
          tag="div" 
          class="absolute inset-0 h-full"
        >
          <div 
            v-for="(slide, index) in slides" 
            v-show="currentSlide === index"
            :key="index" 
            class="absolute inset-0 h-screen flex items-center"
          >
            <!-- Content Container -->
            <div class="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-white">
              <!-- Text Content -->
              <div class="md:col-span-7 space-y-4 md:space-y-6 text-center md:text-left p-4 md:p-0">
                <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold">{{ slide.title }}</h2>
                <p class="text-base md:text-xl">{{ slide.description }}</p>
                <p class="text-sm md:text-lg hidden md:block">{{ slide.details }}</p>
                <p class="text-xs md:text-base opacity-80 hidden md:block">{{ slide.additionalInfo }}</p>
              </div>
              
              <!-- Image Content -->
              <div class="md:col-span-5 hidden md:flex justify-center items-center">
                <img 
                  :src="slide.image" 
                  alt="Gym Slider Image" 
                  class="max-w-full max-h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </transition-group>
      </div>
  
      <!-- Custom Navigation with Dots -->
      <div class="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        <button 
          @click="prevSlide"
          class="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white"
        >
          ←
        </button>
        
        <!-- Navigation Dots -->
        <div class="flex items-center space-x-2">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="currentSlide = index"
            class="w-[40px] h-[2px] rounded-full transition-all duration-300"
            :class="{
              'bg-white': currentSlide === index, 
              'bg-white/50 hover:bg-white/70': currentSlide !== index
            }"
          ></button>
        </div>
        
        <button 
          @click="nextSlide"
          class="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white"
        >
          →
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 0,
        intervalId: null
      }
    },
    computed: {
      slides() {
        return [
          {
            title: 'About us',
            description: 'Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq m of space dedicated to top-of-the-line workout equipment from leading brands.',
            details: 'With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals.',
            additionalInfo: 'Certified Trainers provide expert guidance and support to develop personalized workout plans.',
            image: '/Aboutus1.png'
          },
          {
            title: 'Our Facilities',
            description: 'State-of-the-art fitness center with cutting-edge equipment and spacious training areas.',
            details: 'Multiple training zones including strength training, cardio, and functional fitness spaces.',
            additionalInfo: 'Modern amenities and clean, well-maintained environment to support your fitness journey.',
            image: '/Aboutus1.png'
          },
          {
            title: 'Membership Benefits',
            description: 'Flexible membership options designed to fit every fitness level and lifestyle.',
            details: 'Personal training, group classes, and 24/7 access available for our members.',
            additionalInfo: 'Comprehensive fitness solutions with professional support and guidance.',
            image: '/Aboutus1.png'
          }
        ]
      }
    },
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
      },
      startAutoplay() {
        this.intervalId = setInterval(() => {
          this.nextSlide()
        }, 5000) // Change slide every 5 seconds
      },
      stopAutoplay() {
        if (this.intervalId) {
          clearInterval(this.intervalId)
        }
      }
    },
    mounted() {
      this.startAutoplay()
    },
    beforeUnmount() {
      this.stopAutoplay()
    }
  }
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
  
  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
  }
  
  .gym-slider-container {
    position: relative;
  }
  
  /* Responsive adjustments */
  @media (max-width: 767px) {
    .slider-wrapper .slide {
      height: 100vh !important;
      display: flex !important;
      align-items: center !important;
    }
  }
  </style>