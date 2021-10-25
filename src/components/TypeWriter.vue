<template>
  <div class="typewriter">
    <span style="">I create stuff. 👨🏻‍💻</span>
    <hr>
    <span style="">Mostly with 1's and 0's. 🤓</span>
    <hr>
    <span style="">All your digital needs</span>
    <hr>
    <span style="">served from the ❤️ of Amsterdam</span>
  </div>  
</template>

<script>
export default {
  props: {
    typeSpeed: {
      type: Number,
      default: 100
    }
  },  
  data() {
    return {
      thisSpanIndex: 0
    };
  },
  methods: {
    // hide spans on mount
    // loop over all characters for every span
  }
}
</script>

<style>

</style>

