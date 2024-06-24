<script setup>
import Button from "~/components/common/Button.vue";
import { EnvelopeIcon } from "@heroicons/vue/20/solid";

function handleButtonClick() {
  console.log("Button clicked!");
}

const colorMode = useColorMode();



</script>

<template>
  <div class="m-5 flex justify-between">
    <div>
     
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="violet">violet</option>
        <option value="orange">orange</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    
    </div>

    <div>
      <Button rounded intent="primary" @click="handleButtonClick">
        Get Started
      </Button>
    </div>
    <div><Button intent="outline"> Login </Button></div>
    <div><Button intent="danger"> Delete </Button></div>
    <div><Button loading> Loading </Button></div>
    <div><Button disabled> Disabled </Button></div>
    <div>
      <Button size="small" intent="danger" :prefixicon="EnvelopeIcon">
        Delete
      </Button>
    </div>
  </div>
</template>

<style scoped></style>



<template>
  <nav class="bg-white w-full top-0 z-20 border-b border-gray-200">
    <div class="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
      <div class="flex items-center justify-between py-3 lg:py-4 lg:block">
        <a href="javascript:void(0)">
          <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
        </a>

        <!-- mobile nav -->
        <div class="lg:hidden">
          <button class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            @click="menuOpen()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"
              :class="[open ? 'block' : 'hidden']">
              <path fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              :class="[open ? 'hidden' : 'block']" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
     
      </div>
         <!-- end mbilenav -->
      <div class="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto" :class="[open ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden']">
        <div>
          <ul class="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
            <li class="mt-8 mb-8 lg:mt-0 lg:mb-0">
              <a href="javascript:void(0)" class="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </li>
            <li class="mt-4 lg:mt-0">
              <a href="javascript:void(0)"
                class="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                Login
              </a>
            </li>
            <li class="mt-8 lg:mt-0">
              <a href="javascript:void(0)"
                class="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <ul class="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
            <li v-for="link in navigation" :key="link.id" class="text-gray-600 hover:text-indigo-600">
              <a :href="link.router">
                {{ link.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sticky-nav {
  animation: sticky-nav 300ms;
}

@keyframes sticky-nav {
  0% {
    transform: translateY(-6em)
  }

  100% {
    transform: translateY(0)
  }
}
</style>

<script>
import { ref } from 'vue';
export default {
  data: function () {
    return {
      navigation: [
        { title: "Customers", router: "/Customers" },
        { title: "Careers", router: "/Careers" },
        { title: "Guides", router: "/Guides" },
        { title: "Partners", router: "/Partners" },
        { title: "Teams", router: "/Teams" },
        { title: "Blog", router: "/Blog" },
      ]
    }
  },
  setup() {
    let open = ref(false);
    function menuOpen() {
      open.value = !open.value;
    }
    return { open, menuOpen };
  },
  
}
</script>





<template>
  <nav class="bg-background w-full top-0 z-20 sticky border-b border-input/40">
      <div class="items-center px-4 max-w-screen-xl lg:flex lg:px-9 mx-auto">
          <div class="flex items-center justify-between py-3 lg:py-6 lg:block">
              <!-- logo/home tab -->
              <Nuxt-link class="flex items-center space-x-1.5 rtl:space-x-reverse" to="/">
                  <img class="h-6" src="~assets/svgs/logo.svg" alt="logo" />
                  <span class="self-center text-2xl text-foreground font-semibold whitespace-nowrap">Baseless</span>
              </Nuxt-link>
          </div>
          <!-- end -->
          <!-- mobile nav icon -->

          <!-- end -->
          <div class="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto"
              :class="[open ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden']">
              <div>
                  <ul class="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">

                      <li class="mt-4 lg:mt-0">
                          <a href="javascript:void(0)"
                              class="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0">
                              Login
                          </a>
                      </li>
                      <li class="mt-8 lg:mt-0">
                          <CommonButton rounded intent="primary" size="small"></CommonButton>
                      </li>
                  </ul>
              </div>
              <div class="flex-1">
                  <ul class="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                      <li v-for="link in navigation" :key="link.id"
                          class="text-foreground/70 hover:text-primary hover:font-medium">
                          <NuxtLink :to="link.router">
                              {{ link.title }}
                          </NuxtLink>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
</template>