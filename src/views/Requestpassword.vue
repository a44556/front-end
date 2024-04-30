<!--  add full template
 -->
 <template>


      <!--
      This example requires updating your template:

      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->

        <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
            <div class="w-full bg-white px-5 py-16 md:py-24 text-gray-800 font-light">
              <div class="w-full max-w-6xl mx-auto pb-5">
                <div class="-mx-3 md:flex items-center">
                  <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                    <h1 class="text-4xl font-bold leading-tight">What products news and updates?</h1>
                    <h3 class="text-4xl text-indigo-600 font-bold mb-4 leading-tight" style="color: #852024;">Sign up for our newsleters.</h3>
                    <div class="hidden md:block " style="
                    color: #852024;
                ">
                      <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                      <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                      <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                    </div>
                  </div>
                  <div class="px-3 md:w-1/3">
                    <form>
                      <div class="relative mb-3">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clip-rule="evenodd"></path>
                          </svg>
                        </div>
                        <input type="email" class="form-input block w-full py-2 pl-10 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="email@example.com">
                      </div>
                      <div>
                        <button class="block w-full bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold" style="
                        background: #852024;
                    ">Sent </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>


 </template>
 <script>
 import GuestLayout from '../components/GuestLayout.vue'
 export default {
     components: { GuestLayout },
     name: 'Requestpassword',
 }

</script>


