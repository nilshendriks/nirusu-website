<template>
  <div class="typewriter" :class="{ '--breaking': breaks }">
    <p v-html="typeWriterValue" ref="twContent">
      <slot></slot>
    </p>
  </div>
</template>

<script>
//import { setTimeout } from 'timers';
export default {
  props: {
    typeSpeed: {
      type: Number,
      default: 100
    },
    keepBreaks: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      typeWriterValue: '',
      textToType: '',
      charIndex: 0,
      speed: this.typeSpeed,
      breaks: this.keepBreaks
    };
  },
  methods: {
    typeWriter: function() {
      if(this.charIndex < this.textToType.length) {
        this.typeWriterValue += this.textToType.charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeWriter, this.speed);
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      this.textToType = this.$slots.default[0].text;
      // console.log(this.textToType);
      this.typeWriter();
    })
  }
}
</script>

<style scoped>
  .typewriter p {
    display: inline;
    background-color: hsl(196.3, 100%, 46.9%);
    box-decoration-break: clone;
    padding: 4px 8px;
    line-height: 1.8;
  }
  [data-theme='theme-gs'] .typewriter p {
    font-size: 2rem;
    line-height: 2;
  }

  .typewriter.--breaking p {
    white-space: pre;
  }
</style>

