<template>
    <div v-if="showPreloader" class="flex items-center justify-center h-screen bg-gray-900">
        <div class="w-100 h-100 inline-flex items-center justify-center rounded-full bg-6c1514 text-fcdbb4 animate-spin">
          <span class="text-6x4">&#x1F549;</span>

        </div>
      </div>
  </template>
  <script >
setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 3000); // Change the time according to your needs
  </script>
  <style>
  #preloader {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  }
</style>
