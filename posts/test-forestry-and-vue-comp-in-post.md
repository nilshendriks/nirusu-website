---
title: test forestry and vue comp in post
date: 2021-12-23T23:00:00Z
categories:
- test
summary: testing content adding via forestry
seal: false
slug: test

---
I rewrote the jquery script for the typewriter effect featured on the previous homepage as a Vue component.

import TypeWriter from '\~/components/TypeWriter.vue'

Here's the component being used: 

<type-writer :type-speed="150">
 I create stuff. 👨 💻 
 Mostly with 1's and 0's. 🤓 
 All your digital needs served from the ❤️ of Amsterdam
</type-writer>