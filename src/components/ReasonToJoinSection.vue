<template>
    <section class="bg-black text-white py-12 px-4 relative">
      <div class="container mx-auto max-w-6xl">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- First Column -->
          <div class="flex items-center space-x-4 mb-6 md:mb-0">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">15000 sq.m.</h3>
              <p class="text-gray-300">A spacious gym for sports - a safe distance between exercise machines</p>
            </div>
          </div>
  
          <!-- Second Column -->
          <div class="flex items-center space-x-4 mb-6 md:mb-0">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">More than 200 equipment</h3>
              <p class="text-gray-300">No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym</p>
            </div>
          </div>
  
          <!-- Third Column -->
          <div class="flex items-center space-x-4 mb-6 md:mb-0">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7A7 7 0 0019 9c0 2.5-1 4-1 4s1.5 1 2 2c-1 1-1.5 1.5-2 2.5-1 1.5-1.5 2.5-2.5 2.5s-1.5-1-2.5-1-1.5 1-2 2-1 1-1 2c0 1 1 2 1 2s-1 2-1 2a8 8 0 0012.657-1.343z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">4 fitness zones</h3>
              <p class="text-gray-300">From cardio to functional and cycle. Separate area for boxing and mixed martial arts</p>
            </div>
          </div>
  
          <!-- Fourth Column -->
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold">Round-the-clock operation</h3>
              <p class="text-gray-300">The gym is open 24 hours a day, also works on all holidays and weekends</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'GymFeatures',
  }
  </script>