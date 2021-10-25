<template>
  <button
    :title="theme == 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
    @click="toggleTheme()"
    class="theme"
  >
    <span class="nh-moon" v-if="theme == 'light'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </span>
    <span class="nh-sun" v-else>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </span>
  </button>
</template>

<script>
  //import Moon from "~/assets/svg/moon.svg";
  //import Sun from "~/assets/svg/sun.svg";

  export default {
    // components: {
    //   Moon,
    //   Sun
    // },
    data() {
      return {
        theme: localStorage.getItem("theme")
      };
    },
    methods: {
      toggleTheme() {
        if (this.theme == "dark") {
          this.theme = "light";
          document.body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
        } else {
          this.theme = "dark";
          document.body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      }
    }
  };
</script>

<style>
  button.theme {
    background-color: red;
    appearance: none;
    border: 0;
    background-color: transparent;
    color: currentColor;
    cursor: pointer;
    transition: transform .3s ease-in;
    font-size: inherit;
    font-family: var(--var-ff-body);
  }
  button.theme:hover {
    transform: scale(1.25);
  }
  .nh-sun,
  .nh-moon {
    display: block;
  }
</style>
