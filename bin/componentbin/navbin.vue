<template>
    <nav class="nav">
      <div class="divnav">
        
        <div class="menudivlarge">
          <Nuxt-link class="logolinklarge" to="/dashboard">
            <img class="h-5" src="~assets/svgs/logo.svg" alt="logo" />
            <span class="">Beepless</span>
          </Nuxt-link>
        </div>
        <div class="navlinkdivlarge">
          <ul class="navlinkslarge">
            <li v-for="link in navigation" :key="link.id" class="linkstyle">
              <NuxtLink :to="link.router">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
  
        <div class="navlinkdivlarge">
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
  @apply w-full sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60;
}

.divnav {
  @apply items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-14 ;
}

.menudivlarge {
  @apply flex items-center justify-between py-3 lg:py-5 lg:block;
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