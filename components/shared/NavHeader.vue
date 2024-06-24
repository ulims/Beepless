<script setup>
import { ref } from "vue";
const navIsOpen = useState('navIsOpen', () => false)


function toggleNav(event) {
  event.preventDefault();
  navIsOpen.value = !navIsOpen.value;
}

const navigation = [
  { title: "Customers", router: "/Docs" },
  { title: "Careers", router: "/Careers" },
  { title: "Guides", router: "/Guides" },
  { title: "Partners", router: "/Themes" },
  { title: "Teams", router: "/Teams" },
  { title: "Blog", router: "/Blog" },
];
</script>

<template>
  <nav class="bg-background w-full top-0 z-20 sticky">
    <div class="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-14">
      <div class="flex items-center justify-between py-3 lg:py-5 lg:block">
        <Nuxt-link class="flex items-center space-x-1.5 rtl:space-x-reverse" to="/">
          <img class="h-5" src="~assets/svgs/logo.svg" alt="logo" />
          <span class="self-center text-xl text-foreground font-semibold whitespace-nowrap">Bapeless</span>
        </Nuxt-link>
        <div class="lg:hidden">
          <button class="text-foreground outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            @click="toggleNav()">
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
      <div
        class="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto lg:items-center"
        :class="[open ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden']">
        <ul class="flex flex-col-reverse mt-4 space-x-0 lg:space-x-2.5 lg:flex-row lg:mt-0">
          <li class="mt-8 lg:mt-0">
            <CommonButton intent="texthover" size="small"> Login </CommonButton>
          </li>
          <li class="mt-8 lg:mt-0">
            <CommonButton intent="primary" size="small">
              Get Started
            </CommonButton>
          </li>
        </ul>

        <div class="flex-1 lg:flex justify-center">
          <ul class="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
            <li v-for="link in navigation" :key="link.id"
              class="text-foreground/70 hover:text-foreground hover:font-medium">
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

<style scoped>
.sticky-nav {
  animation: sticky-nav 300ms;
}

@keyframes sticky-nav {
  0% {
    transform: translateY(-6em);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
