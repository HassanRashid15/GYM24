<!-- Gym24 Responsive Slick Slider Component -->
<template>
    <div class="gym-slider-container">
      <Slick 
        ref="slickSlider"
        :options="slickOptions"
        class="h-screen"
      >
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="relative h-screen flex items-center"
        >
          <!-- Background Image -->
          <div class="absolute inset-0 z-0">
            <img 
              :src="slide.image" 
              alt="Gym Slider Background" 
              class="w-full h-full object-cover opacity-50"
            />
          </div>
  
          <!-- Content Container -->
          <div class="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-white">
            <!-- Text Content -->
            <div class="md:col-span-7 space-y-4 md:space-y-6 text-center md:text-left p-4 md:p-0">
              <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold">{{ slide.title }}</h2>
              <p class="text-base md:text-xl">{{ slide.description }}</p>
              <p class="text-sm md:text-lg hidden md:block">{{ slide.details }}</p>
              <p class="text-xs md:text-base opacity-80 hidden md:block">{{ slide.additionalInfo }}</p>
            </div>
          </div>
        </div>
      </Slick>
  
      <!-- Custom Navigation -->
      <div class="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
        <button 
          @click="$refs.slickSlider.prev()"
          class="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white"
        >
          ←
        </button>
        <div class="flex items-center space-x-2">
          <span class="text-white text-sm md:text-base">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </span>
        </div>
        <button 
          @click="$refs.slickSlider.next()"
          class="bg-white/20 hover:bg-white/30 p-2 rounded-full transition text-white"
        >
          →
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Slick from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  
  export default {
    components: {
      Slick
    },
    data() {
      return {
        currentSlide: 0,
        slickOptions: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1024, // Desktop
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768, // Tablet
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 640, // Mobile
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
          afterChange: (current) => {
            this.currentSlide = current
          }
        },
        slides: [
          {
            title: 'About us',
            description: 'Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq m of space dedicated to top-of-the-line workout equipment from leading brands.',
            details: 'With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals.',
            additionalInfo: 'Certified Trainers provide expert guidance and support to develop personalized workout plans.',
            image: '/api/placeholder/800/500'
          },
          {
            title: 'Our Facilities',
            description: 'State-of-the-art fitness center with cutting-edge equipment and spacious training areas.',
            details: 'Multiple training zones including strength training, cardio, and functional fitness spaces.',
            additionalInfo: 'Modern amenities and clean, well-maintained environment to support your fitness journey.',
            image: '/api/placeholder/800/500'
          },
          {
            title: 'Membership Benefits',
            description: 'Flexible membership options designed to fit every fitness level and lifestyle.',
            details: 'Personal training, group classes, and 24/7 access available for our members.',
            additionalInfo: 'Comprehensive fitness solutions with professional support and guidance.',
            image: '/api/placeholder/800/500'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .gym-slider-container {
    position: relative;
  }
  
  /* Responsive adjustments */
  @media (max-width: 767px) {
    .gym-slider-container .slick-slide {
      height: 100vh !important;
      display: flex !important;
      align-items: center !important;
    }
  }
  </style>