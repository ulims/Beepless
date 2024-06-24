<script setup>
function handleButtonClick() {
  console.log("Button clicked!");
}

const colorMode = useColorMode();
</script>

<template>
  <div class="bg-primary h-96 p-80 flex justify-center">
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
  </div>
</template>
