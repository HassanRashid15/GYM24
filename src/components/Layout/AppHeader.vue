<template>
  <header class="bg-transparent text-white p-4 absolute w-full">
    <nav class="max-w-6xl mx-auto">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center justify-between">
        <!-- Logo on left -->
        <router-link to="/" class="flex items-center w-full h-full">
          <img 
            src="/WebLogo.png" 
            :alt="logo.alt"
            class="h-4"
          />
        </router-link>

        <!-- Navigation links on right -->
        <ul class="flex space-x-6">
          <li v-for="(item, index) in navItems" :key="index">
            <router-link 
              :to="item.path" 
              class="hover:text-gray-400 px-4 py-2"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden flex justify-between items-center">
        <!-- Logo on left -->
        <router-link to="/" class="flex items-center">
          <img 
            src="/WebLogo.png" 
            :alt="logo.alt"
            class="h-4"
          />
        </router-link>

        <!-- Hamburger on right -->
        <div class="text-white text-3xl cursor-pointer" @click="toggleMenu">
          <font-awesome-icon :icon="isMenuOpen ? 'times' : 'bars'" />
        </div>
      </div>

      <!-- Mobile Menu Items -->
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div v-if="isMenuOpen" class="md:hidden">
          <ul class="flex flex-col items-center mt-4 space-y-3">
            <li v-for="(item, index) in navItems" :key="index">
              <router-link 
                :to="item.path" 
                class="hover:text-gray-400 py-2 block w-full text-center"
                @click="closeMenu"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      logo: {
        alt: "Website Logo"
      },
      navItems: [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.router-link-active {
  @apply text-gray-300 font-medium;
}
</style>