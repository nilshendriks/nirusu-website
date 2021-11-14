<template>
  <Layout>
    <h1>Posts</h1>
    <PostList :posts="$page.posts.edges"/>
    <Pager :range=0 ariaFirstLabel="to first page" ariaLastLabel="to last page" linkClass="pager__item" :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<script>
import PostList from '~/components/PostList.vue';
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Posts'
  },
  components: {
    PostList,
    Pager
  }
}
</script>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 8, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        summary
        date(format: "MMMM D, YYYY")
        updated(format: "MMMM D, YYYY")
        categories
        path
      }
    }
  }
}
</page-query>
<style>
nav[aria-label='Pagination Navigation'] {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.pager__item {
  border: 1px solid black;
  border-radius: 50px;
  flex: 0 0 40px;
  text-align: center;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: color .3s ease-in, background-color .3s ease-in;
}
[data-theme="dark"] .pager__item {
  background-color: var(--var-link-color);
  color: var(--var-bgcolor);
}

.pager__item.active {
  border-color: lightgray;
  background-color: lightgray;
}

.pager__item:focus,
.pager__item:hover {
  background-color: var(--var-link-hover-color);
  color: whitesmoke;
}

.pager__item.active:focus,
.pager__item.active:hover {
  color: currentColor;
  border-color: lightgray;
  background-color: lightgray;
  cursor: pointer;
}

.pager__item[aria-current="true"],
.pager__item[aria-current="page"],
.pager__item[aria-label="to first page"],
.pager__item[aria-label="to last page"] {
  display: none;
  /* visibility: hidden; */
}
</style>
