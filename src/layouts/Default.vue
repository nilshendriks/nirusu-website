<template>
  <div class="layout">
    <header class="header">
        <g-link class="nh-logo" to="/">
          <nirusu-logo />
          <div class="nh-site-description">
            <span>nils hendriks</span>
            <span>{{ $static.metadata.siteDescription }}</span>
          </div>
        </g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/blocks/">Blocks</g-link>
        <light-switch />
      </nav>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="" role="contentinfo">
      <span>© 2021 nirusu media </span>
      <a class="" href="mailto:info@nirusu.me">info@nirusu.me</a>
      <a href="https://www.instagram.com/nirususan/">Instagram</a>
      <a href="https://www.linkedin.com/in/nilshendriks/">LinkedIn</a>
    </footer>
  </div>
</template>

<script>
import nirusuLogo from '~/assets/svg/nirusu-logo.svg';
import LightSwitch from '~/components/LightSwitch.vue';

export default {
  components: {
    nirusuLogo,
    LightSwitch
  }
}
</script>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style>
@media (prefers-color-scheme: dark) {
  /* [data-theme='dark'] {
    --var-bgcolor: #1f1f1f;
    --var-text-color: gainsboro;
    --var-link-color: gold;
  } */

  html {
    -webkit-font-smoothing: antialiased;
  }
}

:root {
  --var-bgcolor: hsl(0, 0%, 92.2%);
  --var-text-color: #1f1f1f;
  --var-link-color: hsl(194.4, 100%, 21.2%);
  --var-link-hover-color: hsl(213.9, 100%, 33.3%);
  --var-ff-headings: 'Noto Serif Display', serif;
  --var-ff-body: 'Open Sans', sans-serif;
}

[data-theme='dark'] {
  --var-bgcolor: #1f1f1f;
  --var-text-color: gainsboro;
  --var-link-color: gold;
  --var-link-hover-color: hsl(28.2, 100%, 50%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* vertical rhythm  */
* + * {
  margin-top: 1.75rem;
}

/* exceptions */
li + li,
nav,
nav *,
a + a,
h1:first-child,
main {
  margin-top: 0;
}

img + noscript + * {
  margin-top: 1rem;
}

ul,
ol {
  margin-left: 24px;
}

html {
  background-color: #fff;
  color: #000;
  /* font-family: 'Open Sans', sans-serif; */
  font-family: var(--var-ff-body);
  line-height: 1.75; /* 28px */
  height: 100%;
  font-feature-settings: "kern", "liga", "clig", "calt", "onum", "pnum";
}
body {
  background-color: var(--var-bgcolor);
  color: var(--var-text-color);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  transition: all .3s ease-in;
}

img {
  display: block;
  max-width: 100%;
}

svg {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  /* font-family: 'Noto Serif Display', serif; */
  font-family: var(--var-ff-headings);
  font-weight: 400;
}

h1 {
  font-size: 4rem;
  line-height: 1.25;
}

blockquote {
  color: royalblue;
}

a {
  color: var(--var-link-color);
  text-underline-offset: 6px;
  transition: color .3s ease-in;
}

a:focus,
a:hover {
  color: var(--var-link-hover-color);
  text-underline-offset: 3px;
}

dl > * {
  margin-top: 0;
}

dt {
  font-size: 0.875rem;
  font-weight: 700;
}

dd + dt {
  margin-top: 1rem;
}

dl + dl {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px dashed black;
}

nav.nav {
  display: flex;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
}

.nav__link {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 12px;
  /* line-height: 1.66666667; */
  line-height: 2;
}

.nav__link:focus,
.nav__link:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}

.nh-logo {
  flex: 1 1 auto;
  text-decoration: none;
  max-width: 160px;
  color: var(--var-text-color);
}

.nh-logo .nh-site-description {
  display: flex;
  margin: 0;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 12px;
}

.nh-logo .nh-site-description * {
  margin-top: 0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  /* padding-left: 20px;
  padding-right: 20px; */
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer[role="contentinfo"] * {
  margin: 0;
  display: flex;
  font-size: 14px;
}

.nh-def-list.--horizontal {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}

.nh-def-list.--horizontal dd + dt {
  margin-top: 0;
}

</style>
