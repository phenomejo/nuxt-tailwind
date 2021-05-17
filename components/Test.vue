<template>
  <div class="mx-auto p-5">
    <v-select class="web-portal-custom-style" :options="options"></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },

  data() {
    return {
    options: [
      'foo',
      'bar',
      'baz'
    ]
    }
  },
}
</script>