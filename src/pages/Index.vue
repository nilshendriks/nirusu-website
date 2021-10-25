<template>
  <Layout>
    <h1>Hello, I’m Nils</h1>
    <!-- typewriter -->
    <type-writer :type-speed="200" :num-of-spans="4" />
  </Layout>
</template>

<script>
import TypeWriter from '~/components/TypeWriter';

export default {
  components: {
    TypeWriter
  },
  metaInfo: {
    title       : 'Home of nirusu',
    description : 'media',
    author      : 'nils hendriks'
  }
}

</script>

<style>
/* .home-links a {
  margin-right: 1rem;
} */

.typewriter {
  line-height: 1;
  margin: 0;
}

.typewriter span {
  display: inline-block;
  background-color: rgb(0, 174, 239);
  color: #fff;
  padding: 4px 8px;
  line-height: 1;
  margin: 0;
  font-size: 5vw;
  font-family: var(--var-ff-body);
  font-weight: 300;
}

.typewriter span + span {
  margin-top: 4px;
}

@media only screen and (min-width: 640px) {
  .typewriter span {
    font-size: 2.4vw;
  }
}

.typewriter hr {
  height: 0;
  border: none;
  margin: 4px 0 0 0;
  padding: 0;
}

</style>
