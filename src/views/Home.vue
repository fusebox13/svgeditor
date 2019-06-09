<template>
  <div class="home">
    <ColoringBook msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ColoringBook from '@/components/ColoringBook.vue'

export default {
  name: 'home',
  components: {
    ColoringBook
  }
}
</script>
