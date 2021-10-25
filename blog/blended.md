---
id: 60
title: 'Proof of concept: blending revisited'
summary: Proof of concept trying to recreate Edenspiekermann’s Utrecht City Theatre logo's blending effects.
date: 2018-07-25
categories: [web-development, poc]
seal: true
hascodeexample: true
---

<section class="nh-intro" markdown="1">
<p>About four years ago I created <a href="http://poc.nirusu.me/utrecht">a proof of concept</a> to see how far I could go in recreating Edenspiekermann’s <a href="http://edenspiekermann.com/projects/utrecht-city-theatre">Utrecht City Theatre</a> logo's blending effects. Browser support back then was limited to some early builds of Chrome and depending on which blend mode used, also safari.</p>
</section>

These days support is a bit better. Both latest versions of Chrome and Firefox support the needed blend-modes used in this proof-of-concept. Safari seems not to support these yet, it only supports a few. The versions with a white background use blend-modes *color-burn* and *multiply*. The one with a black background uses *screen* and *saturation*. Check out the full page below or at <a href="http://poc.nirusu.me/utrecht/blend_v004.html">poc.nirusu.me</a>

## Example of a single component
### <abbr title="Hypertext Markup Language">HTML</abbr>

```html
<div class="mdl-word-container">
  <p class="cabaret word layer1">cabaret</p>
  <p class="cabaret word layer2">cabaret</p>
  <p class="cabaret word layer3">cabaret</p>
</div>
```

<div class="mdl-word-container">
  <p class="cabaret word layer1">cabaret</p>
  <p class="cabaret word layer2">cabaret</p>
  <p class="cabaret word layer3">cabaret</p>
</div>

### <abbr title="Cascading Style Sheets">CSS</abbr>

```css
/* cmp word styles */

.mdl-word-container {
  background: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  text-align: center;
  padding: 4px 20px 4px 20px;
}

.mdl-word-container.--dark {
  background: black;
}

.mdl-word-container .word {
  text-transform: uppercase;
  font-family: "Roboto", verdana, arial, sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 4vw;
  margin: 0;
  padding: 0;
  grid-column: 1;
  grid-row: 1;
}

@media only screen and (min-width: 1251px) {
  .mdl-word-container .word {
    font-size: 3vw;
  }
}

.mdl-word-container .layer1 {
  color: var(--silver2);
  transform: scaleY(-1);
}

.mdl-word-container .layer2 {
  color: black;
  mix-blend-mode: color-burn;
  position: relative;
  top: -3px;
}

.mdl-word-container .layer3 {
  color: var(--cabaret);
  mix-blend-mode: multiply;
  position: relative;
  top: -3px;
}

.mdl-word-container .opera.layer3 {
  color: var(--opera);
}

.mdl-word-container .youth.layer3 {
  color: var(--youth);
}

.mdl-word-container .dance.layer3 {
  color: var(--dance);
}

.mdl-word-container .music.layer3 {
  color: var(--music);
}

.mdl-word-container .theatre.layer3 {
  color: var(--toneel);
}

.mdl-word-container .stads.layer3 {
  color: var(--gold);
}

.mdl-word-container.--dark .layer1 {
  color: var(--gold);
}

.mdl-word-container.--dark .layer2 {
  color: var(--silver);
  mix-blend-mode: screen;
}

.mdl-word-container.--dark .layer3 {
  color: white;
  mix-blend-mode: saturation;
}

.mdl-word-container.--coloured .layer1 {
  color: var(--youth);
}

.mdl-word-container.--coloured .layer2 {
  color: #411fa8;
}

.mdl-word-container.--coloured .layer3 {
  color: #e430b3;
}
```


## Example of brand identity page
<iframe title="Example of brand identity page" src="http://poc.nirusu.me/utrecht/blend_v004.html" style="width: 99vw; height: 100vh; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;"><iframe>

