<template>
  <div class="post-list">
    <article class="post" :class="'--cat-'+post.node.categories[0]" v-for="post in posts" :key="post.node.id">
      <g-link class="post__link" :to="post.node.path">
      <h2 class="post__title">{{post.node.title}}</h2>
      <p class="post__category" v-if="post.node.categories">{{post.node.categories[0]}}</p>
      <p class="post__date">Published on {{post.node.date}}</p>
      <!-- <p v-if="post.node.summary">{{post.node.summary}}</p> -->
      <!-- <p v-else>{{post.node.excerpt}}</p> -->

      </g-link>
    </article>
  </div>
</template>

<script>
export default {
  props: ['posts'],
}
</script>

<style>
.post-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media only screen and (min-width: 768px) {
  .post-list {
    grid-template-columns: repeat(2, 1fr );
  }
}


.post {
  margin: 0;
  padding: 2rem 1rem;
  /* border: 1px solid black; */
  border-radius: 16px;
  max-height: 331px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 8px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
}

.post__title {
  margin: 0;
  font-size: 28px;
  text-align: center;
}

.post .post__link {
  /* display: inline-block; */
  text-decoration: none;
  color: currentColor;
}

.post__category {
  color: #000;
  font-size: small;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.post.--cat-poc {
  background-color: var(--var-global-color-poc, green);
  color: #fff;
}

.post__date {
  text-align: center;
  font-size: smaller;
}
</style>
