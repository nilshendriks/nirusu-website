---
title: 'Vue TypeWriter component'
date: 2021-11-04
categories: web-development, poc, side-project
summary: a Vue component with typewriter effect
seal: true
slug: typewriter
---
I rewrote the jquery script for the typewriter effect featured on the previous homepage as a Vue component.

import TypeWriter from '~/components/TypeWriter.vue'

Here's the component being used:
<type-writer :type-speed="150">I create stuff. 👨🏻‍💻
Mostly with 1's and 0's. 🤓
All your digital needs served
from the ❤️ of Amsterdam</type-writer>

The configuration of the component in the HTML:

```html
<type-writer 
  :type-speed="150" 
/>
```

The .vue SFC file:

```html
<template>
  <div class="typewriter">
    <p v-html="typeWriterValue"></p>
  </div>
</template>

<script>
//import { setTimeout } from 'timers';
export default {
  props: {
    typeSpeed: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      typeWriterValue: '',
      textToType: "I create stuff. 👨🏻‍💻\nMostly with 1's and 0's. 🤓\nAll your digital needs served\n from the ❤️ of Amsterdam",
      charIndex: 0,
      speed: this.typeSpeed
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
    /* white-space: pre; */
  }
</style>
```
