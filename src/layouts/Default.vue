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
        <g-link class="nav__link" to="/posts/">Posts</g-link>
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
      <a class="" href="mailto:info@nirusu.me">
        <mail-icon />
      </a>
      <a href="https://www.instagram.com/nirususan/">
        <instagram-icon />
      </a>
      <!-- <a href="https://www.linkedin.com/in/nilshendriks/">LinkedIn</a> -->
    </footer>
  </div>
</template>

<script>
import nirusuLogo from '~/assets/svg/nirusu-logo.svg';
import mailIcon from '~/assets/svg/mail.svg';
import instagramIcon from '~/assets/svg/instagram.svg';
import LightSwitch from '~/components/LightSwitch.vue';

export default {
  components: {
    nirusuLogo,
    mailIcon,
    instagramIcon,
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

</style>
