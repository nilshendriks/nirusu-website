<template>
  <div class="post-list">
    <article class="post" v-for="post in posts" :key="post.node.id">
      <h2>{{post.node.title}}</h2>
      <p v-if="post.node.summary">{{post.node.summary}}</p>
      <!-- <p v-else>{{post.node.excerpt}}</p> -->
      <p>Published on {{post.node.date}}</p>
      <g-link class="post__link" :to="post.node.path">Read article</g-link>
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
  margin-top: 12px;
}

.post {
  padding: 0;
}

.post h2 {
  font-size: 2rem;
}

.post .post__link {
  display: inline-block;
}
</style>
