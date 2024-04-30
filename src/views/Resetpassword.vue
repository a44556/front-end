<template>
    <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
   <Guest-Layout title="Resetpassword">
        <form class="space-y-6" action="#" method="POST">


          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>



            </div>

            <div class="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password"  class="block w-full p-9 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
            <div class="mt-6">
                <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                <div class="mt-2">
                  <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" class="block w-full p-9 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
          <div>
            <button style="
            background: #811d1f;
        " type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
    </Guest-Layout>

  </template>
  <script>
   import GuestLayout from '../components/GuestLayout.vue'
  export default {
    components: { GuestLayout },
    name: 'Resetpassword',
    }

</script>
  <style>


</style>

