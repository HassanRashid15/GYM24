<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up for an account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm space-y-4">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <div class="relative">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="you@example.com"
                @blur="validateEmail"
                @input="validateEmail"
              />
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password"
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm pr-10"
                placeholder="••••••••"
                @blur="validatePassword"
                @input="validatePassword"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                @click="togglePasswordVisibility"
              >
                <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
              </button>
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>

          <!-- Confirm Password Field -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <div class="relative">
              <input
                id="confirmPassword"
                v-model="form.confirmPassword"
                name="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                autocomplete="new-password"
                class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm pr-10"
                placeholder="••••••••"
                @blur="validateConfirmPassword"
                @input="validateConfirmPassword"
              />
              <button
                type="button"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                @click="toggleConfirmPasswordVisibility"
              >
                <font-awesome-icon :icon="showConfirmPassword ? 'eye-slash' : 'eye'" />
              </button>
            </div>
            <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isSubmitting || !isFormValid"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            {{ isSubmitting ? 'Processing...' : 'Sign up' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faEyeSlash)

export default {
  name: 'Signup',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      isSubmitting: false,
      showPassword: false,
      showConfirmPassword: false,
      touched: {
        email: false,
        password: false,
        confirmPassword: false
      }
    }
  },
  computed: {
    isFormValid() {
      return (
        !this.errors.email &&
        !this.errors.password &&
        !this.errors.confirmPassword &&
        this.form.email &&
        this.form.password &&
        this.form.confirmPassword
      )
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword
    },
    validateEmail() {
      this.touched.email = true
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email) {
        this.errors.email = 'Email is required'
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      } else {
        this.errors.email = ''
      }
    },
    validatePassword() {
      this.touched.password = true
      if (!this.form.password) {
        this.errors.password = 'Password is required'
      } else if (this.form.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters'
      } else {
        this.errors.password = ''
      }
      // Re-validate confirm password when password changes
      if (this.touched.confirmPassword) {
        this.validateConfirmPassword()
      }
    },
    validateConfirmPassword() {
      this.touched.confirmPassword = true
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = 'Please confirm your password'
      } else if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match'
      } else {
        this.errors.confirmPassword = ''
      }
    },
    async handleSubmit() {
      // Validate all fields
      this.validateEmail()
      this.validatePassword()
      this.validateConfirmPassword()

      if (!this.isFormValid) return

      this.isSubmitting = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('Form submitted:', this.form)
        // Reset form after successful submission
        this.form = {
          email: '',
          password: '',
          confirmPassword: ''
        }
        // Reset touched state
        this.touched = {
          email: false,
          password: false,
          confirmPassword: false
        }
        // Reset password visibility
        this.showPassword = false
        this.showConfirmPassword = false
        alert('Registration successful!')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>