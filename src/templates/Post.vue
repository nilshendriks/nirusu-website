<template>
  <Layout>
    <article class="nh-post">
      <header>
      <h1>{{$page.post.title}}</h1>
      <p class="nh-published">Published on {{$page.post.date}}</p>
      <p class="nh-updated" v-if="$page.post.updated">Updated on {{$page.post.updated}}</p>

      <!-- <p class="nh-timetoread" v-if="$page.post.timeToRead > 1">{{$page.post.timeToRead}} minutes to read</p>
      <p class="nh-timetoread" v-else>{{$page.post.timeToRead}} minute to read</p> -->
      </header>
      <VueRemarkContent />
      <!-- <main class="content" xv-html="$page.post.content"></main> -->
    </article>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
     post: post (path: $path) {
      id
      title
      date(format: "MMMM D, YYYY")
      updated(format: "MMMM D, YYYY")
      content
    }
  }
  </page-query>


<style>
main > h1,
article > header {
  text-align: center;
  padding-top: 4rem;
}

.nh-post h1 {
  max-width: 640px;
  margin: 0 auto;
}

.nh-published {
  text-transform: uppercase;
  font-size: calc(var(--var-font-size-small, 12) / var(--var-font-size-normal, 16) * 1rem);
  font-weight: 300;
  letter-spacing: .15em;
}

.nh-updated {
  font-size: calc(var(--var-font-size-small, 12) / var(--var-font-size-normal, 16) * 1rem);
  margin-top: .5rem;
}

.nh-timetoread {
  /* font-size: 0.625rem; */
  font-size: calc(var(--var-font-size-small, 12) / var(--var-font-size-normal, 16) * 1rem);
  font-weight: 400;
}

.nh-intro {
  font-size: calc(var(--var-font-size-large, 18) / var(--var-font-size-normal, 16) * 1rem);
  font-weight: 400;
  line-height: 1.641;
  text-align: justify;
  text-justify:inter-character;
}

.content {
  margin-top: 48px;
}
</style>
