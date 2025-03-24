<template>
    <div class="bg-black p-6 mt-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="pass in passes" 
          :key="pass.name" 
          class="bg-[#1E1E1E] rounded-lg p-6 text-white flex flex-col"
        >
          <h2 class="text-2xl font-bold mb-4">{{ pass.name }}</h2>
          <p class="text-3xl font-bold mb-4">
            ${{ pass.price }}
            <span v-if="pass.price === 0" class="text-base align-top ml-1">USD</span>
          </p>
          <ul class="flex-grow mb-6">
            <li 
              v-for="(feature, index) in pass.features" 
              :key="index" 
              class="flex items-center mb-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-yellow-400 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clip-rule="evenodd" 
                />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <button 
            class="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        passes: [
          {
            name: 'Pass \'Trial\'',
            price: 0,
            features: [
              'Access to the gym from 8:00 to 14:00',
              'The trainer on duty will introduce you to the gym'
            ]
          },
          {
            name: 'Pass \'Easy Start\'',
            price: 119,
            features: [
              'Visit without restrictions',
              'Individual training program',
              'Access to the VTRAINER application',
              'Trainer support'
            ]
          },
          {
            name: 'Pass \'Free Time\'',
            price: 49,
            features: [
              'The entrance time to the gym is from 14:00 to 16:00',
              'Without suspension of gym membership',
              'The trainer on duty will introduce you to the gym'
            ]
          },
          {
            name: 'Pass \'1 Month 24/7\'',
            price: 85,
            features: [
              'Visit without restrictions',
              'The trainer on duty will introduce you to the gym'
            ]
          },
          {
            name: 'Pass \'In Shape (AM)\'',
            price: 165,
            features: [
              'Training in mini-groups until 14:00',
              'Without suspension of gym membership',
              'Classes with a trainer in a mini-group 3 times a week',
              'Trainer support'
            ]
          },
          {
            name: 'Pass \'In Shape (PM)\'',
            price: 195,
            features: [
              'Training in mini-groups until 17:00',
              'Without suspension of gym membership',
              'Classes with a trainer in a mini-group 3 times a week',
              'Trainer support'
            ]
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Any additional scoped styles can be added here if needed */
  </style>