---
id: 2
title: 'Proof of concept: Photo View'
date: 2021-11-15
categories: [poc, web-development, framer, UI]
summary: CSS only (no js) photo view widget
seal: false
cover: ../src/assets/photo-view.jpg
---

A Proof of concept creating this Photo View 'widget', inspired by Framer.

It works with CSS a:target but the downside is that because of that when there is content above this widget it will jump back up.

V3 works with radio buttons and :checked. No content jumping. For iOS for now it does need square images as aspect-ratio isnt supported yet.
<!--
Hopefully [`overflow-anchor: none;`][1] will be supported eventually.

[1]: http://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
-->
<iframe src="https://codesandbox.io/embed/photo-view-jehnr?fontsize=14&hidenavigation=1&initialpath=v2.html&view=split&module=%2Fv2.html&theme=dark"
 style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
 title="photo-view"
 allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
 sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

<iframe src="https://codesandbox.io/embed/photo-view-forked-z6r4k?fontsize=14&hidenavigation=1&initialpath=v3.html&module=%2Fv3.html&theme=dark"
   style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
   title="photo-view (forked)"
   allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
   sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
 ></iframe>
