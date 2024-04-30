<template>

 <Guest-Layout title="sign">
  <div class="max-w-md mx-auto">
  <form @submit.prevent="LoginData" class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
    <div class="mb-6">
      <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Email address</label>
      <input id="email" v-model="student.email" name="email" type="email" autocomplete="email" required
             class="block w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400">
    </div>

    <div class="mb-6">
      <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Password</label>
      <input id="password" name="password" v-model="student.password" type="password" autocomplete="current-password" required
             class="block w-full px-4 py-2 rounded-md shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400">
    </div>

    <div class="flex items-center justify-between">
      <router-link :to="{name: 'requestpassword'}" class="text-indigo-600 hover:text-indigo-500 text-sm">Forgot your password?</router-link>
      <button type="submit" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Sign In</button>
    </div>
  </form>
</div>

</Guest-Layout>
  </template>

<script  >
import axios from 'axios';
import GuestLayout from '../components/GuestLayout.vue'
export default {
  components: { GuestLayout },
    name: 'Login',
    name: 'Registation',
       data () {
         return {
           result: {},
           student:{
                      email: '',
                      password: ''
           }
         }
       },
       created() { 
       },
       mounted() {
             console.log("mounted() called.......");
         },
       methods: {
              LoginData()
              {
               axios.post("http://127.0.0.1:8000/api/login", this.student)
               .then(
                 ({data})=>{
                  console.log(data);
                  try {
                  if (data.status === true) {
                        alert("Login Successfully"); 
                        this.$router.push({ path: '/dashbord', name: 'dashbord' })
                        } else {
                        alert("Login failed")
                        }

                        } catch (err) {
                        alert("Error, please try again");
                        }    
                 }
               )
              }
         }
     }
</script>
<script setup>

</script>

<style scoped>
/* Your component styles here */
</style>
