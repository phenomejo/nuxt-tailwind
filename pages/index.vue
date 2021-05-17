<template>
  <!-- <div class="dark:bg-gray-800 min-h-screen"> -->
    <div class="container py-3">
      <div class="p-6 max-w-sm mx-auto bg-blue-200 rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-pink-300"></div>
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <div class="mx-auto p-4 flex items-center justify-items-center flex-col">
        <p class="my-2 text-base font-bold text-indigo-500">{{ test }}</p>
        <button class="btn btn-primary" @click="setTest(Math.random().toString(36).substring(2))">
          set state
        </button>
      </div>

      <Test />

      <nuxt-link to="/me" class="underline text-base text-blue-700 mt-3">Go to me</nuxt-link>
    </div>
  <!-- </div> -->
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Test from '@/components/Test';

export default {

  components: {
    Test
  },

  mounted() {
    const stepNextDay = (startDay, numToNextDay) => {
      const arrayDay = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat']
      const indexOfstartDay = arrayDay.indexOf(startDay);
      const fraction = numToNextDay % arrayDay.length;

      return arrayDay[(fraction + indexOfstartDay) % 7]
    }

     console.log(`next 10 day`, stepNextDay('Wed', 10))
     console.log(`next 100 day`, stepNextDay('Wed', 100))
     console.log(`next 200 day`, stepNextDay('Wed', 200))
     console.log(`next 300 day`, stepNextDay('Wed', 300))
     console.log(`next 400 day`, stepNextDay('Wed', 400))
     console.log(`next 500 day`, stepNextDay('Wed', 500))
     console.log(`next 600 day`, stepNextDay('Wed', 600))
     console.log(`next 700 day`, stepNextDay('Wed', 700))
     console.log(`next 800 day`, stepNextDay('Wed', 800))
     console.log(`next 900 day`, stepNextDay('Wed', 900))
     console.log(`next 1000 day`, stepNextDay('Wed', 1000))

    // const main = () => {
    //   console.log(stepNextDay('Wed', 100))
    // }

    // const stepNextDay = (startDay, numToNextDay) => {
    //   const arrayDay = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat']
    //   const index = arrayDay.indexOf(startDay);
    //   const numNextDay = numToNextDay - index;
    //   // console.log(startDay, numToNextDay)
      
    //   if (numNextDay > arrayDay.length) {
    //     const d = arrayDay[index + 1]
    //     return stepNextDay(d ? d : 'Sun', numNextDay - 1);
    //   }

    //   return arrayDay[numNextDay - 1];
    // }

    // main();
  },

  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    console.log('asyncData')
  },

  fetch() {
    console.log('fetch')
  },

  computed: {
    ...mapState('test', {
      test: 'test'
    })
  },

  methods: {
    ...mapActions('test', {
      setTest: 'setTest'
    })
  }
}
</script>

<style lang="scss" scoped>


</style>
