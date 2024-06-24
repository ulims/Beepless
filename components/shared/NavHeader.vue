<template>
  <nav class="nav">
    <div class="divnav1">
      <div class="divnav2">
        <a href="javascript:void(0)">
          <img src="https://www.floatui.com/logo.svg" width="120" height="50" alt="Float UI logo" />
        </a>
        <div class="divnav3">
          <button class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border" @click="menuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" :class="[open ? 'block' : 'hidden']">
              <path fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" :class="[open ? 'hidden' : 'block']"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0" :class="[open ? 'block' : 'hidden']">
        <ul class="ul1">
          <li v-for="link in navigation" :key="link.id" class="linkstyle">
            <a :href="link.router">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
      <div class="divnav5">
        <ul class="navlinkslarge">
            <li v-for="(icon, name) in icons" :key="name" class=" linkstyle">
        <Icon :name="icon.name" ></Icon>
      </li>
          
          </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  @apply bg-white w-full border-b md:border-0 md:static;
}

.divnav1 {
  @apply items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 ;
}

.divnav2 {
  @apply flex items-center justify-between py-3 md:py-5 md:block ;
}
.divnav3 {
  @apply md:hidden;
}
/* .divnav4 {
  @apply flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0" :class="[open ? 'block' : 'hidden'] ;
} */
.ul1 {
  @apply justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0;
}
.divnav5 {
  @apply hidden md:inline-block;
}
.divnav6 {
  @apply py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow;
}
.logolinklarge {
  @apply flex items-center space-x-1.5 rtl:space-x-reverse;
}
.navlinkdivlarge {
  @apply flex justify-center items-center;
}
.navlinkslarge {
  @apply flex space-x-6;
}
.linkstyle {
  @apply text-foreground/70 hover:text-foreground hover:font-medium transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none;
}

</style>

<script setup>
import { Icon } from '#components'
import { SunIcon } from '@heroicons/vue/20/solid';

const open = ref(false);

const menuOpen = () => {
  open.value = !open.value;
};

const LightIcon = h(Icon, { name: 'ph:sun', color: 'black', });
const DarkIcon = h(Icon, { name: 'heroicons:moon', color: 'black',  });
const icons = {
  figma: { name: 'solar:figma-linear', link: '/link' },
  github: { name: 'ph:github-logo', link: '/link' },
  swatch: { name: 'heroicons:swatch', link: '/link' },
  light: { name: 'ph:sun', link: '/link' },
};


const navigation = [
  { title: "Docs", router: "/Docs" },
  { title: "Themes", router: "/Careers" },
  { title: "Designers", router: "/Themes" },
  { title: "Developers", router: "/Products" },
  { title: "Blog", router: "/Blog" },
];
</script>
