<template>
  <Layout>
    <article class="nh-post">
      <header>
      <h1>{{$page.post.title}}</h1>
      <p class="nh-published">Published on {{$page.post.date}}</p>

      <p class="nh-timetoread" v-if="$page.post.timeToRead > 1">{{$page.post.timeToRead}} minutes to read</p>
      <p class="nh-timetoread" v-else>{{$page.post.timeToRead}} minute to read</p>
      </header>
      <main class="content" v-html="$page.post.content"></main>
    </article>
  </Layout>
</template>

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
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: .15em;
}

.nh-timetoread {
  font-size: 0.625rem;
  font-weight: 400;
}

.nh-intro {
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: .05em;
  /* color: #fff; */
  text-align: justify;
  text-justify:inter-character;
}

.content {
  margin-top: 48px;
}
</style>

<page-query>
query Post ($path: String!) {
   post: blogPost (path: $path) {
    id
    title
    date (format: "MMMM D, YYYY")
    timeToRead
    content
  }
}
</page-query>
